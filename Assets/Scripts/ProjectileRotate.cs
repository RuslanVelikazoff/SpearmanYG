using UnityEngine;

public class ProjectileRotate : MonoBehaviour
{
    Rigidbody rb;

    bool isGround = false;

    private void Start()
    {
        rb = GetComponent<Rigidbody>();
    }
    private void Update()
    {
        if(!isGround)
        { 
            float angle = Mathf.Atan2(rb.velocity.y, rb.velocity.x) * Mathf.Rad2Deg;
            transform.rotation = Quaternion.AngleAxis(angle, Vector3.forward);
        }
    }

    private void OnCollisionEnter(Collision collision)
    {
        if (collision.collider.CompareTag("Finish"))
        {
            VolumeController.Instance.PlaySound(VolumeController.Sounds.Target);
            rb.isKinematic = true;
            rb.detectCollisions = false;
            isGround = true;
            GameUI.Instance.WaitOnWin();
        }
        else
        {
            VolumeController.Instance.PlaySound(VolumeController.Sounds.Stone);
            rb.isKinematic = true;
            rb.detectCollisions = false;
            isGround = true;
            GameUI.Instance.OnLose();
        }
    }
}
