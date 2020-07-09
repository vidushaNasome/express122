import React from 'react';
import {shallow} from 'enzyme';
import Tourism from '../Tourism'
//checking whether the login form is there
describe('Tourism Component123', () => {
    it('should render without throwing an error', () => {
        expect(shallow(<Tourism />).find('form.formTou').exists()).toBe(true)
    })
})
it('renders a name input', () => {
    expect(shallow(<Tourism />).find('#name').length).toEqual(1)
})
it('renders a category input', () => {
    expect(shallow(<Tourism />).find('#cat').length).toEqual(1)
})
it('renders a contact number input', () => {
    expect(shallow(<Tourism />).find('#tel').length).toEqual(1)
})

it('renders a price input', () => {
    expect(shallow(<Tourism />).find('#price').length).toEqual(1)
})
describe('name input', () => {

    it('should respond to change event and change the state of the Tourism Component', () => {

        const wrapper = shallow(<Tourism />);
        wrapper.find('#name').simulate('change', {target: {name: 'name', value: 'blahblah'}});
        expect(wrapper.state('name')).toEqual('blahblah');     }) })

describe('Price input', () => {

    it('should respond to change event and change the state of the Tourism Component', () => {
        const wrapper = shallow(<Tourism />);
        wrapper.find('#price').simulate('change', {target: {name: 'price', value: '123'}});

        expect(wrapper.state('price')).toEqual('123');     }) })
