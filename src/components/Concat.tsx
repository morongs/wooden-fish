import weChat from '../assets/wechat.jpg'

export function Concat(props: { onClose: () => void }) {
  return (
    <div
      w-100vw
      h-100vh
      p-10
      fixed
      top-0
      left-0
      bg-black='/80'
      flex='~ wrap'
      gap-6
      justify-center
      items-center
      onClick={props.onClose}>
      <div item-center>
        <img src={weChat} w-200px mb-4 />
        <p>扫码或长按识别添加好友沟通</p>
        <p>备注信息：功德</p>
      </div>
    </div>
  )
}
