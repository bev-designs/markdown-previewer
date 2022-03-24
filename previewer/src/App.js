import { marked } from 'marked';
import React from 'react';
import './App.css';
import Editor from './Editor';
import Preview from './Preview';


let markdown = `
   # This is my React Markdown Previewer

   ## Project done using create-react-app...

   [Markdown Previewer](https://github.com/bev-designs/markdown-previewer)

   \`about me\`

   \`\`\`
   {
     "firstName": "Beverley",
     "lastName": "Johannie",
     "age": 26

   }
   \`\`\`

   - JavaScript
   - React
   - PHP

   > view my projects at https://github.com/bev-designs

   ![hello react](favicon.ico)

   **freecodecamp/ frontend libraries project**
`;

marked.setOptions({
    breaks: true,
});

const Previewer = () => {

  const [input, setInput] = React.useState(markdown);

  const handleChange = (e) => {
    setInput(e.target.value)

  }

     return (
       <div>

         <div  className="Previewer">

            <h1>Markdown Previewer</h1>

            <Editor input={input}  handleChange={handleChange} />

            <Preview input={input} />

         </div>
         
         <p style={{textAlign: 'center', fontSize: '.8rem',}}>&copy; by bev-designs</p>

       </div>
       
     );
   
}

export default Previewer;
