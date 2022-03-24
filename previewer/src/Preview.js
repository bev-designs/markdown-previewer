import React from 'react';
import { marked } from 'marked';

const Previewer = ({input}) => {
    return (
    <div 
       id="preview" 
       dangerouslySetInnerHTML={{__html: marked(input),}}>
    </div>
    )

}

export default Previewer;