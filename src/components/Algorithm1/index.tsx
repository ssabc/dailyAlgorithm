import { useState, useEffect} from 'react'
import { ContentWrap } from './style';
import CommonView from 'components/utils/CommonView';
const code = `
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

function Algorithm1 () {
    const [result, setResult] = useState<any>() // 算法结果
    const [functionStr, setFunctionStr] = useState(code) // 算法方法

    return (
        <ContentWrap>
            <CommonView
                pData={{
                    title: "迭代排序算法",
                    desc: "算法思想：冒泡排序是一种简单的排序算法。它重复地走访过要排序的数列，一次比较两个元素，如果它们的顺序错误就把它们交换过来。走访数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成。这个算法的名字由来是因为越小的元素会经由交换慢慢“浮”到数列的顶端。(Selection-sort)是一种简单直观的排序算法。它的工作原理：首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置，然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。以此类推，直到所有元素均排序完毕。",
                    code: functionStr,
                    result: result
                }}
                handleExecute={()=>{eval(functionStr)}}
                handleSetCode={(strFn)=>{setFunctionStr(strFn)}}
            ></CommonView>
        </ContentWrap>
    )
}
export default Algorithm1;