import React from 'react';
import { Highlighter, HighlighterText } from '@/components/Highlighter';

import './index.less';

let code1: string = `let isDone: boolean = false;`;
let code2: string = `let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;`;
let code3: string = `let name: string = bob;`;
let code4: string = `let name: string = \`Gene\`
let age: number = 37;
let sentence: string = \`Hello, my name is \${ name }.
I'll be \${ age + 1 } years old next month.\``;
let code5: string = `let list: number[] = [1,2,3]`;
let code6: string = `let list:Array<number> = [1,2,3]`;
let code7: string = `let list:Array<any> = [1,2,'string']`;
let code8: string = `enum Color {Red, Green, Blue}
let c: Color = Color.Green;`;
let code9: string = `enum Color {Red = 1, Green, Blue}
let c: Color = Color.Green;`;
let code10: string = `enum Color {Red = 1, Green = 2, Blue = 4}
let c: Color = Color.Green;`;
let code11: string = `let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false`;
let code12: string = `function warnUser(): void {
    console.log("This is my warning message");
}`;
let code13: string = `let unusable: void = undefined`;
let code14: string = `let u: undefined = undefined;
let n: null = null;`;
let code15: string = `// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}`;
let code16: string = `declare function create(o: object | null):void;
create({ prop: 0 }); // OK
create(null); // OK

create(42); // Error
create("string"); // Error
create(false); // Error
create(undefined); // Error`;
let code17: string = `let someValue:any = "this is a string";
let strLength: number = (<string>someValue).length`;
let code18: string = `let someValue:any = "this is a string";
let strLength: number = (someValue as string).length`;

export default () => {
  return (
    <div className="ts-Content">
      <h3 className="ts-h3">布尔值</h3>
      <HighlighterText>
        最基本的数据类型就是简单的true/false值，在JavaScript和TypeScript里叫做boolean（其它语言中也一样）。
      </HighlighterText>
      <Highlighter>{code1}</Highlighter>

      <h3 className="ts-h3">数字</h3>
      <HighlighterText>
        和JavaScript一样，TypeScript里的所有数字都是浮点数。 这些浮点数的类型是
        number。 除了支持十进制和十六进制字面量，TypeScript还支持ECMAScript
        2015中引入的二进制和八进制字面量。
      </HighlighterText>
      <Highlighter>{code2}</Highlighter>

      <h3 className="ts-h3">字符串</h3>
      <HighlighterText>
        JavaScript程序的另一项基本操作是处理网页或服务器端的文本数据。
        像其它语言里一样，我们使用 string表示文本数据类型。
        和JavaScript一样，可以使用双引号（ "）或单引号（'）表示字符串。
      </HighlighterText>
      <Highlighter>{code3}</Highlighter>
      <Highlighter>{code4}</Highlighter>

      <h3 className="ts-h3">数组</h3>
      <HighlighterText>
        TypeScript像JavaScript一样可以操作数组元素。 有两种方式可以定义数组。
        第一种，可以在元素类型后面接上 []，表示由此类型元素组成的一个数组：
      </HighlighterText>
      <Highlighter>{code5}</Highlighter>
      <HighlighterText>
        第二种方式是使用数组泛型，{`Array\<元素类型\>`}：
      </HighlighterText>
      <Highlighter>{code6}</Highlighter>
      <Highlighter>{code7}</Highlighter>

      <h3 className="ts-h3">枚举</h3>
      <HighlighterText>
        enum类型是对JavaScript标准数据类型的一个补充。
        像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。
      </HighlighterText>
      <Highlighter>{code8}</Highlighter>
      <HighlighterText>
        默认情况下，从0开始为元素编号。 你也可以手动的指定成员的数值。
        例如，我们将上面的例子改成从 1开始编号：
      </HighlighterText>
      <Highlighter>{code9}</Highlighter>
      <HighlighterText>或者，全部都采用手动赋值：</HighlighterText>
      <Highlighter>{code10}</Highlighter>

      <h3 className="ts-h3">Any</h3>
      <HighlighterText>
        有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。
        这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。
        这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。
        那么我们可以使用 any类型来标记这些变量：
      </HighlighterText>
      <Highlighter>{code11}</Highlighter>

      <h3 className="ts-h3">Void</h3>
      <HighlighterText>
        某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。
        当一个函数没有返回值时，你通常会见到其返回值类型是 void：
      </HighlighterText>
      <Highlighter>{code12}</Highlighter>
      <HighlighterText>
        声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
      </HighlighterText>
      <Highlighter>{code13}</Highlighter>

      <h3 className="ts-h3">Null和Undefined</h3>
      <Highlighter>
        TypeScript里，undefined和null两者各自有自己的类型分别叫做undefined和null。
        和 void相似，它们的本身的类型用处不是很大：
      </Highlighter>
      <Highlighter>{code14}</Highlighter>
      <HighlighterText>
        默认情况下null和undefined是所有类型的子类型。 就是说你可以把
        null和undefined赋值给number类型的变量。
      </HighlighterText>
      <HighlighterText>
        然而，当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自。
        这能避免 很多常见的问题。 也许在某处你想传入一个
        string或null或undefined，你可以使用联合类型string | null | undefined。
        再次说明，稍后我们会介绍联合类型。然而，当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自。
        这能避免 很多常见的问题。 也许在某处你想传入一个
        string或null或undefined，你可以使用联合类型string | null | undefined。
        再次说明，稍后我们会介绍联合类型。
      </HighlighterText>
      <HighlighterText>
        注意：我们鼓励尽可能地使用--strictNullChecks，但在本手册里我们假设这个标记是关闭的。
      </HighlighterText>

      <h3 className="ts-h3">Never</h3>
      <HighlighterText>
        never类型表示的是那些永不存在的值的类型。 例如，
        never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型；
        变量也可能是 never类型，当它们被永不为真的类型保护所约束时。
      </HighlighterText>
      <HighlighterText>
        never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。
        即使 any也不可以赋值给never。
      </HighlighterText>
      <HighlighterText>下面是一些返回never类型的函数：</HighlighterText>
      <Highlighter>{code15}</Highlighter>

      <h3 className="ts-h3">Object</h3>
      <HighlighterText>
        object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
      </HighlighterText>
      <HighlighterText>
        使用object类型，就可以更好的表示像Object.create这样的API。例如：
      </HighlighterText>
      <Highlighter>{code16}</Highlighter>

      <h3 className="ts-h3">类型断言</h3>
      <HighlighterText>
        有时候你会遇到这样的情况，你会比TypeScript更了解某个值的详细信息。
        通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。
      </HighlighterText>
      <HighlighterText>
        通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。
        类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。
        它没有运行时的影响，只是在编译阶段起作用。
        TypeScript会假设你，程序员，已经进行了必须的检查。
      </HighlighterText>
      <HighlighterText>
        类型断言有两种形式。 其一是“尖括号”语法：
      </HighlighterText>
      <Highlighter>{code17}</Highlighter>
      <HighlighterText>另一个为as语法：</HighlighterText>
      <Highlighter>{code18}</Highlighter>
      <HighlighterText>
        两种形式是等价的。
        至于使用哪个大多数情况下是凭个人喜好；然而，当你在TypeScript里使用JSX时，只有
        as语法断言是被允许的。
      </HighlighterText>

      <h3 className="ts-h3">关于let</h3>
      <HighlighterText>
        你可能已经注意到了，我们使用let关键字来代替大家所熟悉的JavaScript关键字var。
        let关键字是JavaScript的一个新概念，TypeScript实现了它。
        我们会在以后详细介绍它，很多常见的问题都可以通过使用
        let来解决，所以尽可能地使用let来代替var吧。
      </HighlighterText>
      {/* <h3 className='ts-h3'>Never</h3>
			<HighlighterText></HighlighterText>
			<Highlighter>{code15}</Highlighter> */}
    </div>
  );
};
