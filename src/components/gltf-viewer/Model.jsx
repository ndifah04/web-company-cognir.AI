import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

const Model = ({ url }) => {
    const groupRef = useRef(); // Ref untuk grup model
    const { scene, animations } = useGLTF(url); // Memuat model dan animasi
    const { actions, names } = useAnimations(animations, groupRef); // Mengelola animasi

    // Jalankan animasi saat komponen dimount
    useEffect(() => {
        if (names.length > 0) {
            // Memutar animasi pertama (atau sesuaikan dengan nama animasi)
            actions[names[0]].play();
        }
    }, [actions, names]);

    return (
        <group ref={groupRef}>
            <primitive object={scene} scale={[2, 2, 2]} position={[3.5, 1, 0.5]} rotation={[0, 4.1, 0]} /> {/* Skala model */}
        </group>
    );
};

export default Model;