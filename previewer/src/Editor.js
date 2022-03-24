import React from 'react';

const Editor = ({input, handleChange}) => {

    const [expand, setExpand] = React.useState(true);

    const handleExpand = () => {
        setExpand(!expand);
        document.getElementById('preview').style.display ='none';
        document.getElementById('editor').style.minHeight = '600px';
     }

     const removeExpand = () => {
        setExpand(!expand);
        document.getElementById('preview').style.display ='block';
        document.getElementById('editor').style.minHeight = '300px';
     }

    return (
        <div className="editor">
            <div style={{padding: '.5rem 1rem', background: 'rgb(172, 144, 93)', color: 'black', display: 'flex', justifyContent: 'space-between'}}>
                <h3>Editor</h3>
                <h3>{expand ? <ion-icon name="expand-outline" onClick={handleExpand}></ion-icon> : <ion-icon name="resize-outline" onClick={removeExpand}></ion-icon>}</h3>
            </div>
            <textarea  
               id="editor" 
               value={input} 
               onChange={handleChange}
               style={{minHeight: 300, background: 'whitesmoke' }}
            />
        </div>
    )

}
export default Editor;