// /* eslint-disable react/no-unknown-property */
// // pages/index.tsx
// "use client";
// import dynamic from "next/dynamic";
// import { Suspense, useRef, useMemo, useEffect } from "react";
// import { useFrame, useLoader, useThree } from "@react-three/fiber";
// import { TextureLoader, BufferAttribute, BufferGeometry } from "three";
// import { Leva } from "leva";

// // Client‑only Canvas
// const CanvasNoSSR = dynamic(
//   () => import("@react-three/fiber").then((mod) => mod.Canvas),
//   { ssr: false },
// );

// function ParticleScene() {
//   // --- load sprite ---
//   const sprite = useLoader(TextureLoader, `/star.svg`);

//   // --- prepare data arrays once ---
//   const count = 400;
//   const positions = useMemo(() => {
//     const arr = new Float32Array(count * 3);

//     for (let i = 0; i < arr.length; i++) arr[i] = (Math.random() - 0.5) * 20;

//     return arr;
//   }, []);

//   // const colors = useMemo(() => {
//   //   const arr = new Float32Array(count * 3);

//   //   for (let i = 0; i < arr.length; i++) arr[i] = Math.random();

//   //   return arr;
//   // }, []);

//   // --- refs for geometry & camera ---
//   const geomRef = useRef<BufferGeometry>(null!);
//   const { camera } = useThree();

//   // --- set up our mouse cursor ref for parallax ---
//   const cursor = useRef({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouse = (e: MouseEvent) => {
//       // normalize to [-0.5, 0.5], then we’ll multiply in useFrame
//       cursor.current.x = e.clientX / window.innerWidth - 0.5;
//       cursor.current.y = -(e.clientY / window.innerHeight - 0.5);
//     };

//     window.addEventListener("mousemove", handleMouse);

//     return () => window.removeEventListener("mousemove", handleMouse);
//   }, []);

//   // --- initialize geometry attributes once ---
//   useEffect(() => {
//     const geom = geomRef.current;

//     geom.setAttribute("position", new BufferAttribute(positions, 3));
//     // geom.setAttribute("color", new BufferAttribute(colors, 3));
//   }, [positions]); //colors

//   // --- animate each frame: wave + parallax ---
//   useFrame((_, delta) => {
//     camera.position.x +=
//       (cursor.current.x * 0.5 - camera.position.x) * delta * 5;
//     camera.position.y +=
//       (cursor.current.y * 0.5 - camera.position.y) * delta * 5;
//   });

//   return (
//     <points>
//       <bufferGeometry ref={geomRef} />

//       <pointsMaterial
//         sizeAttenuation
//         transparent
//         size={0.08}
//         color="#ffeded"
//         alphaMap={sprite}
//         depthWrite={false}
//       />
//     </points>
//   );
// }

// export default function Home() {
//   return (
//     <div className="w-full h-screen overflow-hidden bg-black">
//       <Leva collapsed={false} />
//       <Suspense fallback={null}>
//         <CanvasNoSSR
//           className="w-full h-full"
//           gl={{ alpha: true }}
//           camera={{ position: [0, 0, 5], fov: 75 }}
//           onCreated={({ gl }) => {
//             gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//           }}
//         >
//           <ParticleScene />
//         </CanvasNoSSR>
//       </Suspense>
//     </div>
//   );
// }
