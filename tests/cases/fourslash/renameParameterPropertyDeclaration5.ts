/// <reference path='fourslash.ts'/>

//// class Foo {
////     constructor([|protected [ [|{| "contextRangeIndex": 0 |}protectedParam|] ]|]) {
////         let myProtectedParam = [|protectedParam|];
////     }
//// }

verify.baselineRename(test.rangesByText().get("protectedParam"));
