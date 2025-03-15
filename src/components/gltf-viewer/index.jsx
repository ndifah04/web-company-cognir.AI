import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Model = ({ url }) => {
    const gltf = useLoader(GLTFLoader, url);
    console.log("the model", gltf)
    const meshRef = useRef();
    const [isHovered, setIsHovered] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useFrame(() => {
        if (isHovered && meshRef.current) {
            // Rotasi objek berdasarkan posisi kursor
            meshRef.current.rotation.y = mousePosition.x * 0.1; // Sesuaikan kecepatan rotasi
        }
    });

    const handleMouseMove = (event) => {
        // Normalisasi posisi kursor ke rentang [-1, 1]
        const x = (event.clientX / window.innerWidth) * 2 - 1;
        const y = -(event.clientY / window.innerHeight) * 2 + 1;
        setMousePosition({ x, y });
    };

    return (
        <primitive
            ref={meshRef}
            object={gltf.scene}
            onPointerOver={() => setIsHovered(true)}
            onPointerOut={() => setIsHovered(false)}
            onPointerMove={handleMouseMove}
        />
    );
};

const GLBViewer = () => {
    return (
        <Canvas style={{ width: '100vw', height: '100vh' }} className='border border-danger'>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Model url="/model/facebook_3d.glb" />
        </Canvas>
    );
};

export default GLBViewer;