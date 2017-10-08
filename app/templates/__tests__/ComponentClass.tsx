/**
 * @since 2017-09-03 16:54
 * @author chenyiqin
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import <%=_ComponentClass%> from '../src/index';
import expect from 'expect.js';
import sinon from 'sinon';

describe('<%=_ComponentClass%>', () => {
    let div;
    let component;
    beforeEach(() => {
        div = document.createElement('div');
        document.body.appendChild(div);
        component = ReactDOM.render(<Sample/>, div);
    });
    afterEach(() => {
        ReactDOM.unmountComponentAtNode(div);
        document.body.removeChild(div);
    });
    it('组件是否触发render', () => {
        sinon.spy(<%=_ComponentClass%>.prototype, 'render')
        const wrapper = mount(<<%=_ComponentClass%> />)
        expect(<%=_ComponentClass%>.prototype.render.calledOnce).to.be(true);
    });
});
