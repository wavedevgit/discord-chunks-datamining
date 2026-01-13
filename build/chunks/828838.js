/** Chunk was on web.js **/
/** chunk id: 828838, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk481060 = require("./481060.js"),
  Chunk48131 = require("./48131.js"),
  Chunk460093 = require("./460093.js"),
  Chunk388032 = require("./388032.jsx");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class l extends Chunk460093.Z {
  showRPCDisconnectErrorUI(e) {
    let {
      code: t,
      message: n
    } = e, i = "".concat(o.intl.formatToPlainString(o.t.hbiAO6, {
      code: t
    }), ": ").concat(n);
    (0, r.showToast)((0, r.createToast)(i, r.ToastType.FAILURE))
  }
  leaveFrame(e) {
    let {
      applicationId: t
    } = e;
    i.Z.stopFrame({
      applicationId: t
    })
  }
}
s(l, "displayName", "FramesWebManager");
let c = new l