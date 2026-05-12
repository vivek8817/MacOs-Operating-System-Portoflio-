import  {useEffect, useState} from 'react'
import Markdown from 'react-markdown'
import MacWindow from './MacWindow'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierDuneDark} from 'react-syntax-highlighter/dist/esm/styles/hljs'
import './note.scss'


const Note = ({windowName, setWindowsState, zIndex, bringToTop}) => {


    const [markDown, setmarkDown] = useState(null)

    useEffect(() => {
    fetch("/note.txt")
    .then((res) => res.text())
    .then((text) => setmarkDown(text))
    }, [])

  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState} zIndex={zIndex} bringToTop={bringToTop}>
  <div className="note-window">
    {markDown ? <SyntaxHighlighter language='javascript' style={atelierDuneDark}>{markDown}</SyntaxHighlighter> : <p>Loading....</p>}
  </div>
  </MacWindow>
)

}

export default Note