/// <reference path='fourslash.ts'/>

//// class [|C|] {}
//// [|export|] { [|C|] [|as|] [|D|] };

verify.baselineDocumentHighlights(test.ranges());

