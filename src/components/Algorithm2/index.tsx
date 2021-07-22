import { useState, useEffect} from 'react'
import { ContentWrap } from './style';
import CommonView from '../utils/CommonView';

// 算法代码
const code = `
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
function Algorithm2 () {
    const [result, setResult] = useState<any>() // 算法结果
    const [functionStr, setFunctionStr] = useState(code) // 算法方法

    return (
        <ContentWrap>
            <CommonView
                pData={{
                    title: "冒泡排序算法",
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
export default Algorithm2;