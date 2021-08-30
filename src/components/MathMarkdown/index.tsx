import React from 'react'
import ReactMarkdown  from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
// import rehypeRaw from 'rehype-raw'
import 'katex/dist/katex.min.css' // `rehype-katex` does not import the CSS for you
import { ReactMarkdownOptions } from 'react-markdown/lib/react-markdown'

export default function MathMarkdown(props:ReactMarkdownOptions) {

    return (
        <ReactMarkdown
            {...props}
        remarkPlugins={[remarkMath, remarkGfm]}
        rehypePlugins={[rehypeKatex]}
        // rehypePlugins={props.skipHtml ? [rehypeKatex] : [rehypeRaw,rehypeKatex,]}
      >{props.children}</ReactMarkdown>
    )
}