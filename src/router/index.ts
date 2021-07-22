import Home from '../pages/Home/index';

import Algorithm1 from '../components/Algorithm1/index';
import Algorithm2 from '../components/Algorithm2/index';
interface router {
    path: string,
    exact?:boolean,
    component: any,
    children?:Array<router>
}

const routers:Array<router> = [
    {
        path: '/',
        exact: true,
        component: Home,
        children: [
            {
                path: '/algorithm1',
                component: Algorithm1
            },
            {
                path: '/algorithm2',
                component: Algorithm2
            }
        ]
    }
]
export default routers