import { ContentWrap } from './style';
import { withRouter} from 'react-router-dom'
import {  useState } from 'react';
import { Layout } from 'antd';

import Algorithm from '../../components/Algorithm/index';
const { Header, Content, Sider } = Layout;
const algorithmList = [
    { name: "迭代", data: {
        desc: "迭代",
        code: `
        // 原始数据
        const sourceData = [
            {id: 1, name: '部门1', pid: 0},
            {id: 2, name: '部门2', pid: 1},
            {id: 3, name: '部门3', pid: 1},
            {id: 4, name: '部门4', pid: 3},
            {id: 5, name: '部门5', pid: 4},
        ]
        /**
         * 递归查找，获取children
         */
        const getChildren = (data, result, pid) => {
            for (const item of data) {
            if (item.pid === pid) {
                const newItem = {...item, children: []};
                result.push(newItem);
                getChildren(data, newItem.children, item.id);
            }
            }
        }
        
        /**
         * 转换方法
         */
        const arrayToTree = (data, pid) => {
            const result = [];
            getChildren(data, result, pid)
            console.log(result)
            return result;
        }
        
        const algorithmFn = () => {
            setResult(JSON.stringify(arrayToTree(sourceData, 0), null, 4))
        }
        // 调用
        algorithmFn()
        `
    } },
    { name: "冒泡排序", data:{
        desc: "冒泡排序是一种简单的排序算法。它重复地走访过要排序的数列，一次比较两个元素，如果它们的顺序错误就把它们交换过来。走访数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成。这个算法的名字由来是因为越小的元素会经由交换慢慢“浮”到数列的顶端。(Selection-sort)是一种简单直观的排序算法。它的工作原理：首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置，然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。以此类推，直到所有元素均排序完毕。",
        code: `
        const algorithmFn = () => {
            const data = [2,10,34,5,7,33,78,23,1,9]
            let len = data.length
            for (let i=0; i < len - 1; i++) {
                for (let j=0; j< len - 1 -i; j++) {
                    if (data[j] > data[j+1]) {
                        [data[j], data[j+1]] = [data[j+1], data[j]]
                    }
                }
            }
            setResult(JSON.stringify(data, null, 4))
        }
        // 调用
        algorithmFn()
        `
    } },
    { name: "选择排序", data:{
        desc: "选择排序(Selection-sort)是一种简单直观的排序算法。它的工作原理：首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置，然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。以此类推，直到所有元素均排序完毕。",
        code: `
        const algorithmFn = () => {
            // 原始数据
            const data = [2,10,34,5,7,33,78,23,1,9]
            let tmp = null
            let len = data.length, minIdx = 0
            for (let i=0; i < len - 1; i++) {
                minIdx = i
                for (let j = i + 1; j<len; j++) {
                    if (data[j] < data[minIdx]) {
                        minIdx = j
                    }
                }
                if (i != minIdx) {
                    tmp = data[i]
                    data[i] = data[minIdx]
                    data[minIdx] = tmp
                }
            }
            setResult(JSON.stringify(data, null, 4))
        }
        // 调用
        algorithmFn()
                ` 
    } }
]

function Home (props:any) {
    const [cuurIdx, setCurrIdx] = useState(0)
    const [info, setInfo] = useState<any>(Object.assign(algorithmList[0].data, {title: algorithmList[0].name}))

    const renderList = (list: any) => {
        const listItems = list.map((item, idx)=>{
            return <li className={cuurIdx == idx ? "active" : ""} key={item.name} onClick={()=>{
                setCurrIdx(idx)
                setInfo(Object.assign(item.data, {
                    title: `${item.name}`
                }))
            }}>{item.name}</li>
        })
        return <ul>{listItems}</ul>
    }

    return (
        <ContentWrap>
            <Layout>
                <Sider>
                    { renderList(algorithmList) }
                </Sider>
                <Content>
                    <Algorithm info={info}/>
                </Content>
            </Layout>
        </ContentWrap>
    )
}
export default withRouter(Home);