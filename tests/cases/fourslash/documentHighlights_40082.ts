/// <reference path="fourslash.ts" />
// #40082

// @checkJs: true
//// export = (state, messages) => {
////    export [|default|] {
////    }
//// }

verify.baselineDocumentHighlights(test.ranges());
