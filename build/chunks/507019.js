/** Chunk was on web.js **/
/** chunk id: 507019, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk157559 = require("./157559.js"),
  Chunk49229 = require("./49229.js"),
  Chunk985018 = require("./985018.jsx");

function s(e) {
  let t = () => {
    i.A.clearPendingRelationships()
  };
  r.A.show({
    title: a.intl.string(a.t.z2pFjo),
    body: a.intl.formatToPlainString(a.t["0nTvEw"], {
      incomingRequestCount: e
    }),
    confirmText: a.intl.string(a.t["cY+Oob"]),
    confirmVariant: "critical-primary",
    cancelText: a.intl.string(a.t["ETE/oC"]),
    onConfirm: t
  })
}