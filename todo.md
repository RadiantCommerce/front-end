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