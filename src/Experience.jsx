import { OrbitControls } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import {Suspense} from 'react';

// Components
import Model from '../public/components/Model/Model.jsx';
import LoadingPlaceholder from "../public/components/LoadingPlaceholder/LoadingPlaceholder.jsx";

export default function Experience()
{
    return <>

        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        <mesh receiveShadow position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>
        <Suspense
            fallback={
                <LoadingPlaceholder position={ {y: 0.5} } scale={ [2, 3, 2] } args={ [1, 1, 1, 2, 2, 2] } color={'red'} />
            }
        >
            <Model path={'./hamburger.glb'} scale={ 0.35 } position={ {y: -1.15}} />
        </Suspense>
    </>
}