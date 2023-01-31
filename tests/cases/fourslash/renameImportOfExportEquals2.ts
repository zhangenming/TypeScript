/// <reference path='fourslash.ts' />

////[|declare namespace /*N*/[|{| "isWriteAccess": true, "isDefinition": true, "contextRangeIndex": 0 |}N|] {
////    export var x: number;
////}|]
////declare module "mod" {
////    [|export = [|{| "contextRangeIndex": 2 |}N|];|]
////}
////declare module "a" {
////    [|import * as /*O*/[|{| "isWriteAccess": true, "isDefinition": true, "contextRangeIndex": 4 |}O|] from "mod";|]
////    [|export { [|{| "contextRangeIndex": 6 |}O|] as /*P*/[|{| "isWriteAccess": true, "isDefinition": true, "contextRangeIndex": 6 |}P|] };|] // Renaming N here would rename
////}
////declare module "b" {
////    [|import { [|{| "contextRangeIndex": 9 |}P|] as /*Q*/[|{| "isWriteAccess": true, "isDefinition": true, "contextRangeIndex": 9 |}Q|] } from "a";|]
////    export const y: typeof [|Q|].x;
////}

verify.noErrors();
verify.baselineCommands(
    { type: "findAllReferences", markerOrRange: ["N", "O", "P", "Q"] },
    { type: "findRenameLocations", markerOrRange: test.rangesByText().get("N") },
    { type: "findRenameLocations", markerOrRange: test.rangesByText().get("O") },
    { type: "findRenameLocations", markerOrRange: test.rangesByText().get("P") },
    { type: "findRenameLocations", markerOrRange: test.rangesByText().get("Q") },
);
