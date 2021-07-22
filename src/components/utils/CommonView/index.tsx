import MEditor from 'components/utils/MEditor';
import { Button } from 'antd';
import { ContentWrap } from './style';

function CommonView (props:any) {
    return (
        <ContentWrap>
            <div className="title">{props.pData.title}</div>
            <div className="desc">{props.pData.desc}</div>        
            <div className="code">
                <div className="label">算法代码：</div>
                <MEditor editorInfo={{
                    defaultValue: props.pData.code
                }}></MEditor>
            </div>
            <div className="btn"><Button type="primary" onClick={props.handleExecute}>执行</Button></div>
            <div className="excute-result">
                执行结果:
                <div>
                    {/* <code>{props.pData.result}</code> */}
                    <MEditor editorInfo={{
                    defaultValue: props.pData.result,
                    language: props.pData.language,
                    height: 200
                }}></MEditor>
                </div>
            </div>
            
        </ContentWrap>
    )
}
export default CommonView;