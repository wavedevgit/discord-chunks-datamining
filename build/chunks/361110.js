/** Chunk was on 71387 **/
/** chunk id: 361110, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  f: () => a
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk979554 = require("./979554.js");
let a = e => {
  let [t, r] = (0, n.useState)(null);
  return {
    previewingVariantIndex: t,
    handleEntering: (0, n.useCallback)(t => {
      (null == e ? true : e.type) === i.Z.VARIANTS_GROUP && r(t)
    }, [null == e ? true : e.type]),
    handleLeaving: (0, n.useCallback)(() => {
      (null == e ? true : e.type) === i.Z.VARIANTS_GROUP && r(null)
    }, [null == e ? true : e.type])
  }
}