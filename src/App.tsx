import type { Component } from 'solid-js'

import styles from './App.module.css'
import WoodenFish from './WoodenFish.svg'
import { AresChang } from './components/AresChang'

const App: Component = () => {
  return (
    <div
      w-100vw
      h-100vh
      px-14
      py-6
      text-center
      bg='#111'
      color-white
      flex='~ col'
      justify-between
      select-none
      style={{
        'font-family': "'Roboto', sans-serif"
      }}>
      <header>
        <div text-left>
          <AresChang />
        </div>
        <div
          text-9xl
          font-bold
          style={{
            'font-family': "'Pacifico', cursive"
          }}>
          79
        </div>
        <div color='#444' text-3xl mt-2>
          功德
        </div>
      </header>

      <main flex justify-center>
        <img src={WoodenFish} alt='WoodenFish' />
      </main>

      <footer color='#444'>
        <div font-bold text-sm>
          <div mb='1.5'>
            按下
            <code class={styles.code}>Space</code>或
            <code class={styles.code}>Click</code>
            积攒功德
          </div>
          <div>
            点击<code class={styles.code}>左上角Logo</code>开启/关闭 沉浸模式
          </div>
        </div>
        <div flex justify-between text-lg mt-1>
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
        </div>
      </footer>
    </div>
  )
}

export default App
