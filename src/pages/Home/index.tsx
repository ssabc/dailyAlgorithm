import { ContentWrap } from './style';
import { withRouter} from 'react-router-dom'
import { useEffect, useState } from 'react';

import Algorithm1 from '../../components/Algorithm1/index';
import Algorithm2 from '../../components/Algorithm2/index';
import Algorithm3 from '../../components/Algorithm3/index';

const algorithmList = [
    { name: "迭代算法" },
    { name: "冒泡排序" },
    { name: "选择排序" }
]

function Home (props:any) {
    const [cuurIdx, setCurrIdx] = useState(0)

    const renderList = (list: any) => {
        const listItems = list.map((item, idx)=>{
            return <li className={cuurIdx == idx ? "active" : ""} key={item.name} onClick={()=>{
                setCurrIdx(idx)
            }}>{item.name}</li>
        })
        return <ul>{listItems}</ul>
    }

    return (
        <ContentWrap>
            { renderList(algorithmList) }
            <div>
                { cuurIdx == 0 && <Algorithm1 /> }
                { cuurIdx == 1 && <Algorithm2 /> }
                { cuurIdx == 2 && <Algorithm3 /> }
            </div>
        </ContentWrap>
    )
}
export default withRouter(Home);