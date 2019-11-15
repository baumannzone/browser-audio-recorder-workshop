import { shallowMount } from '@vue/test-utils'
import BaseHeaderTitle from '@/components/BaseHeaderTitle.vue'

describe('BaseHeaderTitle.vue', () => {
  it('Renders `props.title` when passed', () => {
    const title = 'new title'
    const wrapper = shallowMount(BaseHeaderTitle, {
      propsData: { title }
    })
    expect(wrapper.text()).toMatch(title)
  })

  it('Renders `props.subtitle` when passed', () => {
    const subtitle = 'new subtitle'
    const wrapper = shallowMount(BaseHeaderTitle, {
      propsData: { subtitle }
    })
    expect(wrapper.text()).toMatch(subtitle)
  })
})
