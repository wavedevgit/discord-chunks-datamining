/** Chunk was on web.js **/
/** chunk id: 139793, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk907331 = require("./907331.js"),
  Chunk442837 = require("./442837.js"),
  Chunk353647 = require("./353647.js");

function s(e) {
  let {
    userId: t,
    onAction: n
  } = e, [s, l] = (0, r.useState)(false), c = (0, a.e7)([o.Z], () => o.Z.isFetchingUserOutbox(t)), u = (0, r.useCallback)(e => {
    e && (n({
      action: "VIEW_ACTIVITY_CARD"
    }), l(true))
  }, [n]);
  return (0, i.O)(u, true, !c && !s)
}