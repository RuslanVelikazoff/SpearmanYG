using UnityEngine;

public class ThrowingController : MonoBehaviour
{
    [SerializeField] private Animator anim;

    public float power = 5f;

    LineRenderer lr;
    [SerializeField] Rigidbody2D rb;

    [SerializeField] GameObject prefabToLaunch;
    [SerializeField] Transform placeToLauch;

    Vector2 startDragPos, endDragPos, velocity;


    bool isLaunch = false;

    void Start()
    {
        anim = GetComponent<Animator>();
        lr = GetComponent<LineRenderer>();
        startDragPos = placeToLauch.position;
    }

    void Update()
    {
        if (Input.GetMouseButtonDown(0) && !isLaunch)
            startDragPos = Camera.main.ScreenToViewportPoint(Input.mousePosition);

        if (Input.GetMouseButton(0) && !isLaunch)
        {
            lr.enabled = true;

            endDragPos = Camera.main.ScreenToViewportPoint(Input.mousePosition);
            velocity = (endDragPos - startDragPos) * power;

            Vector2[] trajectory = Plot(rb, (Vector2)placeToLauch.position, velocity, 500);

            lr.positionCount = trajectory.Length;

            Vector3[] positions = new Vector3[trajectory.Length];

            for (int i = 0; i < trajectory.Length; i++)
            {
                positions[i] = trajectory[i];
            }

            lr.SetPositions(positions);
        }
        else
        {
            lr.enabled = false;
        }

        if (Input.GetMouseButtonUp(0) && !isLaunch)
        {
            endDragPos = Camera.main.ScreenToViewportPoint(Input.mousePosition);
            velocity = (endDragPos - startDragPos) * power;
            isLaunch = true;
            anim.SetTrigger("IsLaunch");
        }
    }

    public Vector2[] Plot(Rigidbody2D rigidbody, Vector2 pos, Vector2 velocity, int steps)
    {
        Vector2[] results = new Vector2[steps];

        float timestep = Time.fixedDeltaTime / Physics2D.velocityIterations;
        Vector2 gravityAccel = Physics2D.gravity * rigidbody.gravityScale * timestep * timestep;

        float drag = 1f - timestep * rigidbody.drag;
        Vector2 moveStep = velocity * timestep;

        for (int i = 0; i < steps; i++)
        {
            moveStep += gravityAccel;
            moveStep *= drag;
            pos += moveStep;
            results[i] = pos;
        }

        return results;
    }

    public void LaunchSpear()
    {
        VolumeController.Instance.PlaySound(VolumeController.Sounds.Throw);

        var _rb = Instantiate(prefabToLaunch, placeToLauch.position, Quaternion.Euler(0, 0, 0)).GetComponent<Rigidbody>();

        _rb.velocity = velocity;

        CamFollow.Instance.SetTarget(_rb.transform);
    }
}
