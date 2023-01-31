/// <reference path='fourslash.ts' />

////module m {
////    export /*1*/const x;
////    export [|const|] enum E {
////    }
////}
////
////export /*2*/const x;
////export [|const|] enum E {
////}

verify.baselineOccurences(...test.markers(), ...test.ranges());