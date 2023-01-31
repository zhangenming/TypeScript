/// <reference path='fourslash.ts'/>

//// class class1 extends class1 {
////    [|[|{| "contextRangeIndex": 0 |}propName|]: string;|]
//// }
////
//// var v: class1;
//// v.[|propName|];

verify.baselineRename(test.rangesByText().get("propName"));
