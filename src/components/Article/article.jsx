import React, { useState } from 'react'

const Article = ({titre, contenu}) => {
    const [visible, setVisible] = useState(true);

    function handleClick(){
        if (visible === true){
            setVisible(false);
        }else if (visible === false){
            setVisible(true);
        }
        console.log("click");
    }
  return (
    <>
    <article>
    <h1>{titre}</h1>
    <button onClick={handleClick}>Toggle visible</button>
    {visible ? "Masquer" : "Afficher"}
    {visible && <p>{contenu}</p>}
    </article>
    </>
  )
}
export default Article