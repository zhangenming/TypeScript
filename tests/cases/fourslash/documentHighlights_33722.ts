/// <reference path="fourslash.ts" />

// @Filename: /y.ts
////class Foo {
////  private foo() {}
////}
////
////const f = () => new Foo();
////export default f;

// @Filename: /x.ts
////import y from "./y";
////
////y().[|foo|]();

verify.baselineDocumentHighlights(test.ranges(), { filesToSearch: ["/x.ts"] });
