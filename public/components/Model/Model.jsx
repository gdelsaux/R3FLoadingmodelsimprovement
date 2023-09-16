import { useGLTF } from '@react-three/drei';

let filePath;
export default function Model({path, scale, position}) {
    filePath = path;
    /*
    ** Default value
    */
    const modelScale = scale ?? 1;
    const modelPosition = position ?? {
        x: 0,
        y: 0,
        z: 0,
    }

    /*
    ** Loader
    */
    const model = useGLTF(path);

    /*
    ** future texture for pencil model
     */
    // const bakedTexture = useTexture('./bakedPencil.jpg');
    return <>
        <primitive object={ model.scene } scale={ modelScale } position-y={ modelPosition.y }/>
    </>
}

useGLTF.preload(filePath);