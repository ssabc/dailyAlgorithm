import Home from '../pages/Home/index';

import Algorithm1 from '../components/Algorithm1/index';

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
            }
        ]
    }
]
export default routers