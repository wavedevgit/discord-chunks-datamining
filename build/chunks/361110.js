/** Chunk was on 96910 **/
/** chunk id: 361110, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  f: () => i
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk979554 = require("./979554.js");
let i = e => {
  let [t, r] = (0, n.useState)(null);
  return {
    previewingVariantIndex: t,
    handleEntering: (0, n.useCallback)(t => {
      (null == e ? true : e.type) === a.Z.VARIANTS_GROUP && r(t)
    }, [null == e ? true : e.type]),
    handleLeaving: (0, n.useCallback)(() => {
      (null == e ? true : e.type) === a.Z.VARIANTS_GROUP && r(null)
    }, [null == e ? true : e.type])
  }
}