import { render } from '@testing-library/react';
import Header from '../Header';
import { Provider } from 'react-redux';
import store from '../../utils/store';

import {StaticRouter} from 'react-router-dom/server';


test("Logo should load on rendering",()=>{
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header/>
            </Provider>
        </StaticRouter>
    )

    const logo = header.getAllByTestId("logo");

    expect(logo[0].src).toBe("https://play-lh.googleusercontent.com/A8jF58KO1y2uHPBUaaHbs9zSvPHoS1FrMdrg8jooV9ftDidkOhnKNWacfPhjKae1IA");
});


// test("Cart should have 0 items on rendering header", () => {
//     // Load Header
//     const header = render(
//       <StaticRouter>
//         <Provider store={store}>
//           <Header />
//         </Provider>
//       </StaticRouter>
//     );
  
//     // Check if logo is loaded
//     const cart = header.getByTestId("cart");
  
//     expect(cart.innerHTML).toBe("Cart - 0 items");
//   });