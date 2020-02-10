import m from 'mithril'
import { packages } from './utils'
import { readmes } from './readmes'
import './style.css'
import { Readme } from './readme'

const NavLink: m.Component<{path: string, title: string}> = {
  view: ({ attrs: { path, title } }) =>
    m(m.route.Link, {
      href: path,
      class: m.route.get() === path ? 'active' : undefined
    },
    title)
}

const Layout: m.Component = {
  view: vnode =>
    m('main', [
      m('nav',
        m(m.route.Link, { href: '/', class: m.route.get() === '/' ? 'active' : undefined }, 'Home'),
        packages.map((pkg) => m(NavLink, { ...pkg }))),
      m('hr'),
      m('article', vnode.children),
      m('footer', m('a', { href: 'https://kijowski.dev' }, 'Made by Michał Kijowski'))
    ])
}

const routes: m.RouteDefs = {}

routes['/'] = {
  render: () => m(Layout, m(Readme, { markdown: readmes.get('builder') }))
}

packages.map((pkg) => {
  routes[pkg.path] = {
    render: () => m(Layout, m(Readme, { markdown: readmes.get(pkg.raw) }))
  }
})

m.route.prefix = ''
m.route(document.body, '/', routes)
