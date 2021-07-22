import { useState, useEffect } from 'react'
import MonacoEditor from 'react-monaco-editor';

function MEditor (props:any) {
  const [code, setCode] = useState("")

  const editorDidMount = (editor:any, monaco:any) => {
    editor.focus();
  }
  const onChange = (newValue:any, e:any) => {
    setCode(newValue)
    props.setValue(newValue)
  }
  useEffect(()=>{
    props.editorInfo.defaultValue && setCode(props.editorInfo.defaultValue)
  }, [props])

  return <MonacoEditor 
    width={props.editorInfo.width}
    height={props.editorInfo.height || 320}
    language={props.editorInfo.language || 'javaScript'}
    theme="vs-dark"
    value={ code }
    defaultValue={props.editorInfo.defaultValue}
    onChange={ onChange }
    editorDidMount={ editorDidMount } 
  />
}

export default MEditor