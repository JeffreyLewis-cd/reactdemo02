import asyncComponent from "./asyncComponent"

export const Option01=asyncComponent(()=>{return import("../views/option01/option01")});
export const Option02=asyncComponent(()=>{return import("../views/option02/option02")});
export const FullPage=asyncComponent(()=>{return import("../views/fullPage/fullPage")});
export const Home=asyncComponent(()=>{return import("../views/home/home")});