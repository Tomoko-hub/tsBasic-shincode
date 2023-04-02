import SaySomething from "./saySomething";

const root:HTMLElement | null = document.getElementById("root");

//create instance
const saySomething = new SaySomething("Hello TypeScript");
saySomething.sayText(root)