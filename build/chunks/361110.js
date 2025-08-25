/** Chunk was on web.js **/
/** chunk id: 361110, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => o
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk979554 = require("./979554.js");
let o = e => {
  let [t, n] = (0, r.useState)(null);
  return {
    previewingVariantIndex: t,
    handleEntering: (0, r.useCallback)(t => {
      (null == e ? true : e.type) === i.Z.VARIANTS_GROUP && n(t)
    }, [null == e ? true : e.type]),
    handleLeaving: (0, r.useCallback)(() => {
      (null == e ? true : e.type) === i.Z.VARIANTS_GROUP && n(null)
    }, [null == e ? true : e.type])
  }
}