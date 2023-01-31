/// <reference path='fourslash.ts' />

////module m {
////    declare /*1*/const x;
////    declare [|const|] enum E {
////    }
////}
////
////declare /*2*/const x;
////declare [|const|] enum E {
////}

verify.baselineOccurences(...test.markers(), ...test.ranges());
