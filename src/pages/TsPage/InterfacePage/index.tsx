import React from 'react';
import { Highlighter, HighlighterText } from '@/components/Highlighter';
import { code } from './code';
import './index.less';

export default () => {
  return (
    <div className="ts-Content">
      <h3 className="ts-h3">接口</h3>
      <HighlighterText>
        TypeScript的核心原则之一是对值所具有的结构进行类型检查。
        它有时被称做“鸭式辨型法”或“结构性子类型化”。
        在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。
      </HighlighterText>
      <Highlighter>{code[0]}</Highlighter>
      <HighlighterText>
        类型检查器会查看printLabel的调用。
        printLabel有一个参数，并要求这个对象参数有一个名为label类型为string的属性。
        需要注意的是，我们传入的对象参数实际上会包含很多属性，但是编译器只会检查那些必需的属性是否存在，并且其类型是否匹配。
        然而，有些时候TypeScript却并不会这么宽松，我们下面会稍做讲解。
      </HighlighterText>
      <HighlighterText>
        下面我们重写上面的例子，这次使用接口来描述：必须包含一个label属性且类型为string：
      </HighlighterText>
      <Highlighter>{code[1]}</Highlighter>
      <HighlighterText>
        LabelledValue接口就好比一个名字，用来描述上面例子里的要求。
        它代表了有一个 label属性且类型为string的对象。
        需要注意的是，我们在这里并不能像在其它语言里一样，说传给
        printLabel的对象实现了这个接口。我们只会去关注值的外形。
        只要传入的对象满足上面提到的必要条件，那么它就是被允许的。
      </HighlighterText>
      <HighlighterText>
        还有一点值得提的是，类型检查器不会去检查属性的顺序，只要相应的属性存在并且类型也是对的就可以。
      </HighlighterText>

      <h3 className="ts-h3">可选属性</h3>
      <HighlighterText>
        接口里的属性不全都是必需的。 有些是只在某些条件下存在，或者根本不存在。
        可选属性在应用“option
        bags”模式时很常用，即给函数传入的参数对象中只有部分属性赋值了。
      </HighlighterText>
      <HighlighterText>下面是应用了“option bags”的例子：</HighlighterText>

      {/* <h3 className='ts-h3'>Never</h3>
			<HighlighterText></HighlighterText>
			<Highlighter>{code15}</Highlighter> */}
    </div>
  );
};
