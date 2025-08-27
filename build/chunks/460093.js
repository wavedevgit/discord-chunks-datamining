/** Chunk was on web.js **/
/** chunk id: 460093, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk481060 = require("./481060.js"),
  Chunk147913 = require("./147913.js"),
  Chunk626135 = require("./626135.js"),
  Chunk510839 = require("./510839.js"),
  Chunk591472 = require("./591472.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  let {
    reason: t,
    application: n
  } = e, r = n.id;
  if (null == r || null == t) return;
  let i = s.Z.getConnectedFrame();
  (null == i ? true : i.applicationId) === r && ((0, o.xT)({
    applicationId: r
  }), t.code !== l.$VG.CLOSE_NORMAL && (a.default.track(l.rMx.ACTIVITY_CLOSED_RPC_ERROR, {
    rpc_close_code: t.code,
    rpc_message: t.message,
    application_id: r
  }), f(t)))
}

function f(e) {
  let {
    code: t,
    message: n
  } = e, i = "".concat(c.intl.formatToPlainString(c.t.hbiAOz, {
    code: t
  }), ": ").concat(n);
  (0, r.showToast)((0, r.createToast)(i, r.ToastType.FAILURE))
}
class _ extends Chunk147913.Z {
  constructor(...e) {
    super(...e), u(this, "actions", {
      RPC_APP_DISCONNECTED: e => {
        d(e)
      }
    })
  }
}
u(_, "displayName", "FramesManager");
let p = new _