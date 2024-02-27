  const Scene = () => {
    const directionalLightRef = useRef()
    useHelper(directionalLightRef, DirectionalLightHelper, 0.5, 'black')
    return (
      <>
        <directionalLight
          position={[0, 0, 2]}
          intensity={0.5}
          ref={directionalLightRef}
        />
        <Cube />
        <OrbitControls enableZoom={false} />
      </>
    )
  }

  return (
    <Lenis className={cn(s.navigation, !isNavOpened && s.closed)}>
      <div className={s.content}>
        <Canvas>
          <Scene />
        </Canvas>
        <div className={s.image}></div>
        <h2 href="/">Welcome Nerd</h2>





MatTexture
<Model material={<meshMatcapMaterial matcap={matcap} />} />





 <AsciiRenderer characters=" _.,-=+:;rad!?0123456789#@" />
  return (
    <Lenis className={cn(s.navigation, !isNavOpened && s.closed)}>
      <div className={s.content}>
        <Canvas>
          <color attach="red" args={['red']} />
          <spotLight position={[0, 0, 5]} angle={0.15} penumbra={1} />
          <pointLight position={[-1, -1, -1]} />
          <Torusknot size={[1, 1, 1]} />
          <OrbitControls enableRotate={false} enableZoom={false} />
        </Canvas>
        <div className={s.image}></div>
        <h2 href="/">Welcome Nerd</h2>
        <main className={s.main}>
          <h2 href="/">Welcome Nerd</h2>
          <div></div>
          <div></div>
        </main>
      </div>
    </Lenis>
  )
}