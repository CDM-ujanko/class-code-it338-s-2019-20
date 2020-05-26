import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import HelloWorld from '../../src/components/HelloWorld';

describe('HelloWorld.vue', () => {
  let msg = 'Hello World!';
  const wrapper = mount(HelloWorld, {
    propsData: {
      msg: msg
    }
  });

  it('Dummy Test', () => {
    expect(typeof 'Bob').to.equal('string');
    expect('Bob').to.be.a('string');
  });

  it('Data is a function', () => {
    expect(HelloWorld.data).to.be.a('function');
  });

  it('Testing data', () => {
    expect(wrapper.vm.count).to.equals(0);
  });

  it('Testing initial template', () => {
    // expect(wrapper.html()).to.contains('outside!');
    expect(wrapper.html()).to.contains(msg);
  });

  it ('Checking properties', () => {
    expect(wrapper.props().msg).to.equals(msg);
    expect(wrapper.props()).to.have.property('msg', msg);
  });

  it('Checks button click', () => {
    expect(wrapper.vm.count).to.equals(0);
    const button = wrapper.find('button');
    button.trigger('click');
    expect(wrapper.vm.count).to.equals(1);
  });

  it ('Checks button click again', () => {
    expect(wrapper.vm.count).to.equals(1);
  });

  it ('Checks html update', async () => {
    expect(wrapper.text()).to.contains('Count: 1');
    const button = wrapper.find('button');
    await button.trigger('click');
    expect(wrapper.text()).to.contains('Count: 2');
  });
});
