import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders Login token when passed', () => {
    const premsg = 'ImLogin'
    const wrapper = mount(HelloWorld)
    const button = wrapper.find('button')
    const useridBox = wrapper.find('input[type="text"]')
    const passwordBox = wrapper.find('input[type="password"]')
    
    useridBox.setValue('abcd')
    passwordBox.setValue('1234')
    button.trigger('click')
    console.log(useridBox)

    expect(wrapper.attributes('token')).to.include( premsg )
  })
})
