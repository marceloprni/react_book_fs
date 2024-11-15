

import React, {useState, useEffect} from 'react'

const ComponenteHook = () => {
  
    const [largura, setLargura] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setLargura(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);
        

  return (
    <div>
        <p>Largura da janela: {largura}</p>
    </div>
  )
}

export default ComponenteHook
