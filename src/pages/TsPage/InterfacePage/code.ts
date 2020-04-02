export let code: string[] = [
  `function printLabel(labelleObj: {label: string}){
	console.log(labelleObj.label)
}

let myObj = { size: 10, label: "size 10 object" }
printLabel(myObj)`,
  `interface labelledValue {
	label: string
}

function printLabel(labelleObj: labelledValue) {
	console.log(labelleObj.label);
}

let myObj = { size: 10, label: "Size 10 object" };
printLabel(myObj)`,
  ``,
  ``,
  ``,
  ``,
  ``,
  ``,
];

interface SquareConfig {
  color?: string;
  width?: number;
}
