import { cloneDeep } from 'lodash';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { xcode } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export const Highlighter = (props: { children: React.ReactNode }) => {
  return (
    <SyntaxHighlighter language="javascript" style={xcode}>
      {props.children}
    </SyntaxHighlighter>
  );
};
export const HighlighterText = (props: { children: React.ReactNode }) => {
  let xcode1 = cloneDeep(xcode);
  xcode1.hljs.background = 'none';
  xcode1.hljs.whiteSpace = 'pre-wrap';
  xcode1.hljs.wordBreak = 'break-all';
  return (
    <SyntaxHighlighter language="javascript" style={xcode1}>
      {props.children}
    </SyntaxHighlighter>
  );
};
