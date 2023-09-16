import {useLoader} from "@react-three/fiber";
import {GLTFLoader} from "three/addons/loaders/GLTFLoader.js";
import {DRACOLoader} from "three/addons/loaders/DRACOLoader.js";

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
    const model = useLoader(
        GLTFLoader,
        path,
        (loader) => {
            const dracoLoader = new DRACOLoader();
            dracoLoader.setDecoderPath('./draco/');
            loader.setDRACOLoader(dracoLoader);
        }
    );

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