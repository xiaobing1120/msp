import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import './index.less';
import { xcode } from 'react-syntax-highlighter/dist/esm/styles/hljs';

let code1: string = `let isDone: boolean = false;`;
let code2: string = `let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;`;
let code3: string = `let name: string = bob;`;

export const Highlighter = (props: { children: React.ReactNode }) => {
  return (
    <SyntaxHighlighter language="javascript" style={xcode}>
      {props.children}
    </SyntaxHighlighter>
  );
};

export default () => {
  return (
    <div className="ts-Content">
      <h1>布尔值</h1>
      <Highlighter>{code1}</Highlighter>
      <h1>数字</h1>
      <Highlighter>{code2}</Highlighter>
      <h1>字符串</h1>
      <Highlighter>{code3}</Highlighter>
    </div>
  );
};
