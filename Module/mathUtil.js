export const PI = Math.PI;

export function areaOfCircle(radius) {
    return PI * radius * radius;
}

export function getCircumference(radius) {
    return 2 * PI * radius;
}

export function getVolumeOfSphere(radius) {
    return (4 / 3) * PI * Math.pow(radius, 3);
}