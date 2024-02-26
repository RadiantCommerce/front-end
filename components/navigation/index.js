import { OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { Lenis } from '@studio-freight/react-lenis'
import cn from 'clsx'
import AsciiRenderer from 'components/ascii/asciiRender'
import { useStore } from 'libs/store'
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import s from './navigation.module.scss'

export function Navigation() {
  const [isNavOpened, setIsNavOpened] = useStore(
    ({ isNavOpened, setIsNavOpened }) => [isNavOpened, setIsNavOpened],
  )

  const router = useRouter()

  useEffect(() => {
    function onRouteChange() {
      setIsNavOpened(false)
    }

    router.events.on('routeChangeStart', onRouteChange)

    return () => {
      router.events.off('routeChangeStart', onRouteChange)
    }
  }, [])

  function Torusknot(props) {
    const ref = useRef()
    useFrame((state, delta) => {
      if (ref.current) {
        ref.current.rotation.x += delta / 2
        ref.current.rotation.y += delta / 2
      }
    })

    return (
      <mesh {...props} ref={ref}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="red" />
      </mesh>
    )
  }

  return (
    <Lenis className={cn(s.navigation, !isNavOpened && s.closed)}>
      <div className={s.content}>
        <Canvas>
          <color attach="red" args={['red']} />
          <spotLight position={[0, 0, 5]} angle={0.15} penumbra={1} />
          <pointLight position={[-1, -1, -1]} />
          <Torusknot size={[1, 1, 1]} />
          <OrbitControls enableRotate={false} enableZoom={false} />
          <AsciiRenderer characters=" _.,-=+:;rad!?0123456789#@" />
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
