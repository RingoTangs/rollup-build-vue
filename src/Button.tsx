import { defineComponent, toRefs, unref } from 'vue'
import type { PropType } from 'vue'
import './Button.css'

export default defineComponent({
  name: 'Button',
  inheritAttrs: false,
  props: {
    name: {
      type: String as PropType<string>,
      default: '',
    },
  },
  setup(props, { attrs }) {
    console.log(props)
    const { name } = toRefs(props)
    return () => (
      <>
        <h1 class="btn" {...attrs}>
          Hello VueJsx {unref(name)}
        </h1>
      </>
    )
  },
})
