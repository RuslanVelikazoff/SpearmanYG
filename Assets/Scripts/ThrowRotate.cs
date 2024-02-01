using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ThrowRotate : MonoBehaviour
{
    public float rotationSpeed = 1;
    public float BlastPower = 5;

    public GameObject Cannonball;
    public Transform ShotPoint;

    public GameObject Explosion;
    private void Update()
    {
        Vector2 mousePos = Camera.main.ScreenToWorldPoint(Input.mousePosition);

        float HorizontalRotation = mousePos.x;
        float VericalRotation = mousePos.y;

        if(Input.GetMouseButton(0))
            transform.rotation = Quaternion.Euler(transform.rotation.eulerAngles +
                new Vector3(0, HorizontalRotation * rotationSpeed, VericalRotation * rotationSpeed));
    }
}
