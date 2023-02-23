import React,{memo} from 'react'

function CustomText() {
    console.log('Custom Text komponenti devreye girdi')
  return (
    <div>CustonText</div>
  )
}
// memo hooksunu kullanmazsak input değerini her girdiğimiz saniye konsol çalışır ama memo hooksu sayesinde çalışmaz.
export default memo(CustomText)