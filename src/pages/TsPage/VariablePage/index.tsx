import React from 'react';
import { Highlighter, HighlighterText } from '@/components/Highlighter';
import { code } from './code';
import './index.less';

console.log(code.default);

export default () => {
  return (
    <div className="ts-Content">
      <h3 className="ts-h3">变量声明</h3>
      <HighlighterText>
        let和const是JavaScript里相对较新的变量声明方式。 像我们之前提到过的，
        let在很多方面与var是相似的，但是可以帮助大家避免在JavaScript里常见一些问题。
        const是对let的一个增强，它能阻止对一个变量再次赋值。
      </HighlighterText>
      <HighlighterText>
        因为TypeScript是JavaScript的超集，所以它本身就支持let和const。
        下面我们会详细说明这些新的声明方式以及为什么推荐使用它们来代替 var。
      </HighlighterText>
      <HighlighterText>
        如果你之前使用JavaScript时没有特别在意，那么这节内容会唤起你的回忆。
        如果你已经对 var声明的怪异之处了如指掌，那么你可以轻松地略过这节。
      </HighlighterText>

      <h3 className="ts-h3">var 声明</h3>
      <HighlighterText>
        一直以来我们都是通过var关键字定义JavaScript变量。
      </HighlighterText>
      <Highlighter>{code[0]}</Highlighter>
      <HighlighterText>
        大家都能理解，这里定义了一个名为a值为10的变量。
      </HighlighterText>
      <HighlighterText>我们也可以在函数内部定义变量：</HighlighterText>
      <Highlighter>{code[1]}</Highlighter>
      <HighlighterText>
        并且我们也可以在其它函数内部访问相同的变量。
      </HighlighterText>
      <Highlighter>{code[2]}</Highlighter>
      <HighlighterText>
        上面的例子里，g可以获取到f函数里定义的a变量。 每当
        g被调用时，它都可以访问到f里的a变量。 即使当
        g在f已经执行完后才被调用，它仍然可以访问及修改a。
      </HighlighterText>
      <Highlighter>{code[3]}</Highlighter>

      <h3 className="ts-h3">作用域规则</h3>
      <HighlighterText>
        对于熟悉其它语言的人来说，var声明有些奇怪的作用域规则。 看下面的例子：
      </HighlighterText>
      <Highlighter>{code[4]}</Highlighter>
      <HighlighterText>
        有些读者可能要多看几遍这个例子。 变量
        x是定义在*if语句里面*，但是我们却可以在语句的外面访问它。 这是因为
        var声明可以在包含它的函数，模块，命名空间或全局作用域内部任何位置被访问（我们后面会详细介绍），包含它的代码块对此没有什么影响。
        有些人称此为* var作用域或函数作用域*。 函数参数也使用函数作用域。
      </HighlighterText>
      <HighlighterText>
        这些作用域规则可能会引发一些错误。
        其中之一就是，多次声明同一个变量并不会报错：
      </HighlighterText>
      <Highlighter>{code[5]}</Highlighter>
      <HighlighterText>
        这里很容易看出一些问题，里层的for循环会覆盖变量i，因为所有i都引用相同的函数作用域内的变量。
        有经验的开发者们很清楚，这些问题可能在代码审查时漏掉，引发无穷的麻烦。
      </HighlighterText>

      <h3 className="ts-h3">捕获变量怪异之处</h3>
      <HighlighterText>快速的猜一下下面的代码会返回什么：</HighlighterText>
      <Highlighter>{code[6]}</Highlighter>
      <HighlighterText>
        介绍一下，setTimeout会在若干毫秒的延时后执行一个函数（等待其它代码执行完毕）。
      </HighlighterText>
      <HighlighterText>好吧，看一下结果：</HighlighterText>
      <Highlighter>{code[7]}</Highlighter>
      <HighlighterText>
        很多JavaScript程序员对这种行为已经很熟悉了，但如果你很不解，你并不是一个人。
        大多数人期望输出结果是这样：
      </HighlighterText>
      <Highlighter>{code[8]}</Highlighter>
      <HighlighterText>还记得我们上面提到的捕获变量吗？</HighlighterText>
      <HighlighterText>
        我们传给setTimeout的每一个函数表达式实际上都引用了相同作用域里的同一个i。
      </HighlighterText>
      <HighlighterText>
        让我们花点时间思考一下这是为什么。
        setTimeout在若干毫秒后执行一个函数，并且是在for循环结束后。
        for循环结束后，i的值为10。 所以当函数被调用的时候，它会打印出 10！
      </HighlighterText>
      <HighlighterText>
        一个通常的解决方法是使用立即执行的函数表达式（IIFE）来捕获每次迭代时i的值：
      </HighlighterText>

      {/* <h3 className='ts-h3'>Never</h3>
			<HighlighterText></HighlighterText>
			<Highlighter>{code15}</Highlighter> */}
    </div>
  );
};
