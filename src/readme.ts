import m from 'mithril'
import marked from 'marked'

export const Readme: m.Component<{markdown?: string}> = {
  view: ({ attrs: { markdown } }) => m.trust(marked(markdown ?? '# Missing content'))
}
