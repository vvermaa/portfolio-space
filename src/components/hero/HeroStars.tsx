import { Stars } from "@react-three/drei"

export default function HeroStars() {

  return (
    <Stars
      radius={300}
      depth={60}
      count={12000}
      factor={7}
      fade
    />
  )

}