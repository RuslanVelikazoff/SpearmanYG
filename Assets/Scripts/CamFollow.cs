using UnityEngine;

public class CamFollow : MonoBehaviour
{
    [SerializeField]
    private Transform target;

    Vector3 velocity = Vector3.zero;

    public Vector3 offset;

    private float smooth = 0.25f;

    public static CamFollow Instance;

    bool isFollow = true;

    private void Awake()
    {
        Instance = this;
    }

    private void FixedUpdate()
    {
        if (target != null && target.position.y > -8)
        {
            Vector3 targetPos = target.position + offset;
            transform.position = Vector3.SmoothDamp(transform.position, targetPos, ref velocity, smooth);
        }
        if (target != null && target.position.y < -8 && isFollow)
        {
            isFollow = false;
            GameUI.Instance.OnLose();
        }
    }

    public void SetTarget(Transform targetTransform)
    {
        target = targetTransform;
    }
}
