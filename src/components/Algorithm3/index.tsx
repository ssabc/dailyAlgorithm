import { useState, useEffect} from 'react'
import { ContentWrap } from './style';
import CommonView from 'components/utils/CommonView';
// 选择排序

// 算法代码
const code = `
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
        console.log(minIdx)
        tmp = data[i]
        data[i] = data[minIdx]
        data[minIdx] = tmp
    }
    setResult(JSON.stringify(data, null, 4))
}
// 调用
algorithmFn()
        ` 

function Algorithm3 () {
    const [result, setResult] = useState<any>() // 算法结果
    const [functionStr, setFunctionStr] = useState(code) // 算法方法

    return (
        <ContentWrap>
            <CommonView
                pData={{
                    title: "算法3：冒泡排序算法",
                    desc: "算法思想：选择排序(Selection-sort)是一种简单直观的排序算法。它的工作原理：首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置，然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。以此类推，直到所有元素均排序完毕。",
                    code: functionStr,
                    result: result
                }}
                handleExecute={()=>{eval(functionStr)}}
                handleSetCode={(strFn)=>{setFunctionStr(strFn)}}
            ></CommonView>
        </ContentWrap>
    )
}
export default Algorithm3;