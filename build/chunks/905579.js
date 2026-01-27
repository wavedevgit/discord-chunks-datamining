/** Chunk was on web.js **/
/** chunk id: 905579, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g
}), require("./896048.js");
var Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk574172 = require("./574172.js"),
  Chunk869146 = require("./869146.js"),
  Chunk625180 = require("./625180.js"),
  Chunk367348 = require("./367348.js"),
  Chunk91242 = require("./91242.js"),
  Chunk165610 = require("./165610.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

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
class m extends Chunk367348.A {
  _initialize() {
    super._initialize(), o.A.addChangeListener(this.handlePopoutWindowUpdate), i.h.subscribe("POPOUT_WINDOW_OPEN", this.handlePopoutWindowOpen)
  }
  _terminate() {
    super._terminate(), o.A.removeChangeListener(this.handlePopoutWindowUpdate), i.h.unsubscribe("POPOUT_WINDOW_OPEN", this.handlePopoutWindowOpen)
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
    s.A.stopFrame({
      applicationId: t
    })
  }
  constructor(...e) {
    super(...e), p(this, "handlePopoutWindowOpen", e => {
      let {
        key: t
      } = e;
      t === d.MLl.ACTIVITY_POPOUT && (h = false)
    }), p(this, "handlePopoutWindowUpdate", () => {
      let e = _,
        t = o.A.getWindowOpen(d.MLl.ACTIVITY_POPOUT);
      if (e && !t && !h) {
        let e = c.A.getConnectedFrame();
        null != e && s.A.stopFrame({
          applicationId: e.applicationId
        })
      }
      _ = t
    }), p(this, "popInFrame", () => {
      h = true, a.close(d.MLl.ACTIVITY_POPOUT);
      let e = c.A.getConnectedFrame();
      null != e && s.A.updateFrameLayoutMode({
        applicationId: e.applicationId,
        layoutMode: u.y.FOCUSED
      })
    })
  }
}
p(m, "displayName", "FramesWebManager");
let g = new m