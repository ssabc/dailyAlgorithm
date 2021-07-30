import { useEffect, useState } from 'react'
import { ContentWrap } from './style';
import CommonView from 'components/utils/CommonView';

function Algorithm1 (props) {
    const [result, setResult] = useState<any>() // 算法结果
    const [functionStr, setFunctionStr] = useState("") // 算法方法

    useEffect(()=>{
        console.log(props)
        setFunctionStr(props.info.code)
    }, [])

    return (
        <ContentWrap>
            <CommonView
                pData={{
                    title: `${props.info.title}算法`,
                    desc: `算法思想：${props.info.desc}`,
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