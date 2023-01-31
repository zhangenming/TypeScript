/// <reference path='fourslash.ts' />

// @BaselineFile: goToTypeDefinition-pp.baseline

// @Filename: goToTypeDefinition_Definition.ts
////class /*definition*/C {
////    p;
////}
////var c: C;

// @Filename: goToTypeDefinition_Consumption.ts
/////*reference*/c = undefined;

verify.baselineGoToType("reference");
