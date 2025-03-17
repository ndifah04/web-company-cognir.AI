import React from 'react';
import { Canvas } from '@react-three/fiber';
import Model from './Model';
import { Environment, } from '@react-three/drei';

const GLBViewer = () => {
    return (
        // <div className='hero-canvas'>
        <Canvas className='w-100' >
            <Environment preset="park" />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
            <Model url="/model/face-v1.glb" />
        </Canvas>
        // </div>

    );
};

export default GLBViewer;