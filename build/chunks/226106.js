/** Chunk was on web.js **/
/** chunk id: 226106, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk668781 = require("./668781.js"),
  Chunk194359 = require("./194359.js"),
  Chunk388032 = require("./388032.jsx");

function o(e) {
  let t = () => {
    i.Z.clearPendingRelationships()
  };
  r.Z.show({
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