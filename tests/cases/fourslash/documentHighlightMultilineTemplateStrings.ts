/// <reference path='fourslash.ts'/>

////const foo = `
////    a
////    [|b|]
////    c
////`

verify.baselineDocumentHighlights(test.ranges());
