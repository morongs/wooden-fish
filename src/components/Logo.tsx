import logoImg from '../assets/logo.png'

export function Logo() {
  return (
    <span
      w-120px
      text-2xl
      font-bold
      color-transparent
      style={{
        background: 'linear-gradient( 315deg, #42d392 25%, #647eff )'
      }}
      bg-clip-text="!">
      <img src={logoImg} w='100%' />
    </span>
  )
}
