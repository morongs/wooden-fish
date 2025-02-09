import type { Component } from 'solid-js'

import styles from './App.module.css'
import WoodenFish from './assets/WoodenFish.svg'

import { store, setStore } from './store'
import { useCreateBGM, useSound } from './composables/useSound'

const [zoom, setZoom] = createSignal(false)
const [show, setShow] = createSignal(false) // 设置 Settings 显隐
const [concatShow, setConcatShow] = createSignal(false) // 设置 联系我 显隐

const bgm = useCreateBGM(store.volume / 100)
const sound = new useSound(store.sound)

const isPC =
  !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )

function handle() {
  sound.play()
  setStore('count', store.count + 1)
  setZoom(true)
}
function release() {
  setZoom(false)
}

function handleBGM() {
  if (!bgm.playing()) bgm.play()
  else bgm.pause()
}

// 绑定全局 keyboard 事件
document.onkeydown = handleKeyBoard
document.onkeyup = handleKeyBoard
function handleKeyBoard({ key, code, type }: KeyboardEvent) {
  if (key !== ' ' || code !== 'Space') return
  type === 'keydown' ? handle() : release()
}

const App: Component = () => {
  // 监听控制声音变化
  createEffect(() => bgm.volume(store.volume / 100))
  // 监听点击音效切换
  createEffect(() => sound.changeHowl(store.sound))

  return (
    <div
      w-100vw
      h-100vh
      px-6
      md:px-10
      py-4
      md:py-6
      text-center
      bg="#111"
      color-white
      flex='~ col'
      justify-between
      select-none
      overflow-hidden
      style={{
        'font-family': "'Roboto', sans-serif"
      }}>
      <header>
        <div flex justify-between items-center>
          <Logo />
          <div text-2xl flex items-center gap-2>
            <i
              i-carbon-music
              inline-block
              cursor-pointer
              onClick={handleBGM}></i>
            <i
              i-carbon-settings
              inline-block
              cursor-pointer
              onClick={() => setShow(true)}></i>
          </div>
        </div>
        <div
          text-10rem
          font-bold
          transition-300
          style={{
            'line-height': 1,
            'font-family': "'Pacifico', cursive",
            transform: `scale(${zoom() ? 1.1 : 1})`
          }}>
          {store.count}
        </div>
        <div
          color='#444'
          text-xl
          mt-2
          font-bold
          style={{
            'font-family': "'Pacifico', cursive"
          }}>
          功德
        </div>
      </header>

      <main flex justify-center>
        <img
          src={WoodenFish}
          alt='WoodenFish'
          onMouseDown={isPC ? handle : () => {}}
          onMouseUp={isPC ? release : () => {}}
          onTouchStart={handle}
          onTouchEnd={release}
          transition-300
          cursor-pointer
          draggable={false}
          style={{
            transform: `scale(${zoom() ? 0.95 : 1})`,
            '-webkit-tap-highlight-color': 'transparent'  // 清除移动端 touch 高亮效果
          }}
        />
      </main>

      <footer color='#444'>
        <div font-bold text-sm>
          <div mb='1.5'>
            点击上面木鱼积攒功德
          </div>
          <div>
            点击
            <code class={styles.code}>
              右上角
              <i
                i-carbon-music
                inline-block
                text='0.6rem'
                v-middle
                ml='0.4'></i>
            </code>
            开启/关闭 沉浸模式
          </div>
        </div>
        <div mt-8>
          <div
            
            color='hover:#eee'
            text-xs
            onClick={() => setConcatShow(true)}
          >
            <i relative top-2px i-carbon-qr-code inline-block mr-1></i>
            <span>欢迎与我联系提建议</span>
          </div>
        </div>
        {/*<div flex justify-between md:text-lg mt-6 font-bold>
           <a
            href='https://www.github.com/ares-chang/wooden-fish'
            target='_blank'
            color='hover:#eee'
            flex
            items-center
            gap-1>
            <i i-carbon-logo-github inline-block></i>
            <span>GitHub</span>
          </a>
          <a href='https://www.github.com/ares-chang' color='hover:#eee'>
            @AresChang
          </a> 
        </div>*/}
      </footer>
      <Show when={show()}>
        <Settings onClose={() => setShow(false)} />
      </Show>
      <Show when={concatShow()}>
        <Concat onClose={() => setConcatShow(false)} />
      </Show>
    </div>
  )
}

export default App
