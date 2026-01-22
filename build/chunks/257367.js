/** Chunk was on web.js **/
/** chunk id: 257367, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk172218 = require("./172218.js"),
  Chunk311907 = require("./311907.js"),
  Chunk517164 = require("./517164.js");

function o(e) {
  let {
    userId: t,
    onAction: n
  } = e, [o, l] = (0, r.useState)(false), c = (0, a.bG)([s.A], () => s.A.isFetchingUserOutbox(t)), u = (0, r.useCallback)(e => {
    e && (n({
      action: "VIEW_ACTIVITY_CARD"
    }), l(true))
  }, [n]);
  return (0, i.K)(u, true, !c && !o)
}