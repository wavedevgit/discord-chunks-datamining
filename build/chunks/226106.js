/** Chunk was on web.js **/
/** chunk id: 226106, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk668781 = require("./668781.js"),
  Chunk194359 = require("./194359.js"),
  Chunk388032 = require("./388032.js");

function a(e) {
  let t = () => {
    i.Z.clearPendingRelationships()
  };
  r.Z.show({
    title: o.intl.string(o.t.z2pFjo),
    body: o.intl.formatToPlainString(o.t["0nTvEx"], {
      incomingRequestCount: e
    }),
    confirmText: o.intl.string(o.t["cY+Ooa"]),
    confirmVariant: "critical-primary",
    cancelText: o.intl.string(o.t["ETE/oK"]),
    onConfirm: t
  })
}