import { useState, useEffect} from 'react'
import { ContentWrap } from './style';

// 原始数据
const sourceData = [
    {id: 1, name: '部门1', pid: 0},
    {id: 2, name: '部门2', pid: 1},
    {id: 3, name: '部门3', pid: 1},
    {id: 4, name: '部门4', pid: 3},
    {id: 5, name: '部门5', pid: 4},
]

function Algorithm1 () {
    const [result, setResult] = useState<any>() // 算法结果

    useEffect(()=>{
        algorithmFn()
    }, [])

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
        return result;
    }
  
    const algorithmFn = () => {
        console.log(arrayToTree(sourceData, 0))
        setResult(JSON.stringify(arrayToTree(sourceData, 0), null, 4))
    }

    return (
        <ContentWrap>
            <div>题目</div>
            <code>{result}</code>
        </ContentWrap>
    )
}
export default Algorithm1;