import { useGLTF } from '@react-three/drei';

export default function Model({path, scale, position}) {
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
  ** Helmet model
   */
    const model = useGLTF(path);

    /*
    ** Pencil model
     */
    // const model = useLoader(
    //     GLTFLoader,
    //     './pencilModel.glb',
    //     (loader) => {
    //         const dracoLoader = new DRACOLoader();
    //         dracoLoader.setDecoderPath('./draco/');
    //         loader.setDRACOLoader(dracoLoader);
    //     }
    // );

    /*
    ** future texture for pencil model
     */
    // const bakedTexture = useTexture('./bakedPencil.jpg');
    return <>
        <primitive object={ model.scene } scale={ modelScale } position-y={ modelPosition.y }/>
    </>
}