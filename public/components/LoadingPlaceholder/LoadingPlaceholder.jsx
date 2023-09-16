export default function LoadingPlaceholder({position, scale, args, color}) {
    const modelScale = scale ?? [1, 1, 1];
    const modelPosition = position ?? {
        x: 0,
        y: 0,
        z: 0,
    }
    return <>
        <mesh position-y={ modelPosition.y } scale={ modelScale }>
            <boxGeometry args={ args } />
            <meshBasicMaterial wireframe color={color} />
        </mesh>
    </>
}