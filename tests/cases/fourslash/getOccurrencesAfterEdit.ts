/// <reference path='fourslash.ts'/>

/////*0*/
////interface A {
////    foo: string;
////}
////function foo(x: A) {
////    x.f/*1*/oo
////}

verify.baselineCommands(
    { type: "occurences", markerOrRange: "1" },
    {
        type: "customWork",
        work: () => {
            goTo.marker("0");
            edit.insert("\n");
        }
    },
    { type: "occurences", markerOrRange: "1" },
);