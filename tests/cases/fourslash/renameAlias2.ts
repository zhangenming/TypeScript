/// <reference path='fourslash.ts'/>

////[|module [|{| "contextRangeIndex": 0 |}SomeModule|] { export class SomeClass { } }|]
////import M = [|SomeModule|];
////import C = M.SomeClass;

verify.baselineRename(test.rangesByText().get("SomeModule"));