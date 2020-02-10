import m from 'mithril'
import { example } from '~/src/utils'
import './style.css'

const App = {
  view: () =>
    m('main', [
      m('article', `Hello ${example}`),
      m('footer', m('a', { href: 'https://kijowski.dev' }, 'Made by Michał Kijowski'))
    ])
}

m.mount(document.body, App)
