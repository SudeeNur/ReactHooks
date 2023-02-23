import React, {forwardRef, useImperativeHandle, useState} from 'react';

const TextInput= forwardRef((props,ref)=> {
    const [text,setText] =useState("")
    const onValidate=()=>{
        if (text==="Sude"){
            alert("Hatalı Giriş")
        }
    }
    useImperativeHandle(ref,()=>({onValidate}))
    return(
        <div>
            <input ref={ref} value={text} onChange={(e)=>{
                setText(e.target.value)
            }}/>
            <br/>
            Text:{text}
        </div>

    )
})
export default TextInput
