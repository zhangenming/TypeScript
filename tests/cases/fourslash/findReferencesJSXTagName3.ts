/// <reference path='fourslash.ts'/>

// @jsx: preserve

// @Filename: /a.tsx
////namespace JSX {
////    export interface Element { }
////    export interface IntrinsicElements {
////        [|[|/*1*/div|]: any;|]
////    }
////}
////
////[|const [|/*6*/Comp|] = () =>
////    [|<[|/*2*/div|]>
////        Some content
////        [|<[|/*3*/div|]>More content</[|/*4*/div|]>|]
////    </[|/*5*/div|]>|];|]
////
////const x = [|<[|/*7*/Comp|]>
////    Content
////</[|/*8*/Comp|]>|];

const markers = [
    // div occurrences
    '1', '2', '3', '4', '5',
    // Comp occurrences
    '6', '7', '8'
];

// For document highlights, we will just do tag matching if on a tag. Otherwise we find-all-references.
verify.baselineCommands(
    { type: "findAllReferences", markerOrRange: markers },
    { type: "documentHighlights", markerOrRange: markers },
);