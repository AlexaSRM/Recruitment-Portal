import React from 'react'
import * as typeFormEmbed from '@typeform/embed';
import { useRef,useEffect } from 'react';
export default function register() {
  const typeFormRef = useRef(null);
  useEffect(() => {
    if(typeFormRef.current){
          typeFormEmbed.makeWidget(typeFormRef.current, 'https://form.typeform.com/to/cdPFPoHy', {
    hideFooter: false,
    hideHeaders: false,
    opacity: 100,
  });
      }
  }, []);
  return (
    <div>
    
    <div className='' ref={typeFormRef} style={{ height: '100vh', width: '100%' }}></div>
  </div>
  )
}
