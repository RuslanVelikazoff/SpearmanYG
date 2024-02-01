using UnityEngine;

public class WallMover : MonoBehaviour
{
    public float t;
    void Update()
    {
        float y = Mathf.PingPong(Time.time * t, 8);

        transform.position = new Vector3(transform.position.x, y, -0.28f);
    }
}
