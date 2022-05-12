import React from 'react';
import {shallow} from 'enzyme'
import { WelcomeScreen } from '../../../pages/welcome/WelcomeScreen';

describe('Pruebas en <WelcomeScreen />', () => {
   test('Debe mostrar el componente WelcomeScreen correctamente', () => {
      const wrapper = shallow(<WelcomeScreen />)

      expect(wrapper).toMatchSnapshot();
   })
});
