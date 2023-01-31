/// <reference path='fourslash.ts' />

////try {
////    [|t/*1*/r/*2*/y|] {
////    }
////    [|c/*3*/atch|] (x) {
////    }
////
////    try {
////    }
////    finally {
////    }
////}
////catch (e) {
////}
////finally {
////}


verify.baselineOccurences(...test.markers());