/** Chunk was on web.js **/
/** chunk id: 828838, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk788983 = require("./788983.js"),
  Chunk928518 = require("./928518.js"),
  Chunk48131 = require("./48131.js"),
  Chunk460093 = require("./460093.js"),
  Chunk591472 = require("./591472.js"),
  Chunk408491 = require("./408491.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let _ = false,
  h = false;
class m extends Chunk460093.Z {
  _initialize() {
    super._initialize(), o.Z.addChangeListener(this.handlePopoutWindowUpdate), i.Z.subscribe("POPOUT_WINDOW_OPEN", this.handlePopoutWindowOpen)
  }
  _terminate() {
    super._terminate(), o.Z.removeChangeListener(this.handlePopoutWindowUpdate), i.Z.unsubscribe("POPOUT_WINDOW_OPEN", this.handlePopoutWindowOpen)
  }
  showRPCDisconnectErrorUI(e) {
    let {
      code: t,
      message: n
    } = e, i = "".concat(f.intl.formatToPlainString(f.t.hbiAO6, {
      code: t
    }), ": ").concat(n);
    (0, r.showToast)((0, r.createToast)(i, r.ToastType.FAILURE))
  }
  leaveFrame(e) {
    let {
      applicationId: t
    } = e;
    s.Z.stopFrame({
      applicationId: t
    })
  }
  constructor(...e) {
    super(...e), p(this, "handlePopoutWindowOpen", e => {
      let {
        key: t
      } = e;
      t === d.KJ3.ACTIVITY_POPOUT && (h = false)
    }), p(this, "handlePopoutWindowUpdate", () => {
      let e = _,
        t = o.Z.getWindowOpen(d.KJ3.ACTIVITY_POPOUT);
      if (e && !t && !h) {
        let e = c.Z.getConnectedFrame();
        null != e && s.Z.stopFrame({
          applicationId: e.applicationId
        })
      }
      _ = t
    }), p(this, "popInFrame", () => {
      h = true, a.close(d.KJ3.ACTIVITY_POPOUT);
      let e = c.Z.getConnectedFrame();
      null != e && s.Z.updateFrameLayoutMode({
        applicationId: e.applicationId,
        layoutMode: u.U.FOCUSED
      })
    })
  }
}
p(m, "displayName", "FramesWebManager");
let g = new m