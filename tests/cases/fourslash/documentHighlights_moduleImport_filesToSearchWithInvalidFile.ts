/// <reference path="fourslash.ts" />

// @Filename: /node_modules/@types/foo/index.d.ts
////export const x: number;

// @Filename: /a.ts
////import * as foo from "foo";
////foo.[|x|];

// @Filename: /b.ts
////import { [|x|] } from "foo";

// @Filename: /c.ts
////import { x } from "foo";

verify.baselineDocumentHighlights(test.ranges(), { filesToSearch: ["/a.ts", "/b.ts", "/unknown.ts"] });
