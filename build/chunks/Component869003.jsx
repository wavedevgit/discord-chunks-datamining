/** Chunk was on web.js **/
/** chunk id: 869003, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => S
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk87001 = require("./87001.js"),
  Chunk574172 = require("./574172.js"),
  Chunk378570 = require("./378570.js"),
  Chunk646865 = require("./646865.js"),
  Chunk795816 = require("./795816.js"),
  Chunk458664 = require("./458664.js"),
  Chunk933958 = require("./933958.js"),
  Chunk969151 = require("./969151.js"),
  Chunk315206 = require("./315206.js"),
  Chunk594007 = require("./594007.js"),
  Chunk5867 = require("./5867.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}
let v = false,
  A = false;
class I extends Chunk458664.A {
  _initialize() {
    super._initialize(), o.A.addChangeListener(this.handlePopoutWindowUpdate), s.h.subscribe("POPOUT_WINDOW_OPEN", this.handlePopoutWindowOpen)
  }
  _terminate() {
    super._terminate(), o.A.removeChangeListener(this.handlePopoutWindowUpdate), s.h.unsubscribe("POPOUT_WINDOW_OPEN", this.handlePopoutWindowOpen)
  }
  showErrorModal(e) {
    let {
      code: t,
      message: n
    } = e;
    (0, a.mMO)(async () => e => (0, r.jsx)(i.Modal, O({
      title: y.intl.formatToPlainString(y.t.hbiAO6, {
        code: t
      }),
      subtitle: n,
      actions: [{
        text: y.intl.string(y.t.BddRzS),
        onClick: e.onClose,
        variant: "primary"
      }]
    }, e)))
  }
  showLaunchErrorModal(e) {
    (0, a.mMO)(async () => t => (0, r.jsx)(i.Modal, O({
      title: y.intl.string(y.t.PtobXW),
      subtitle: e,
      actions: [{
        text: y.intl.string(y.t.BddRzS),
        onClick: t.onClose,
        variant: "primary"
      }]
    }, t)))
  }
  showDevShelfOverrideEnabled() {
    (0, a.showToast)((0, a.createToast)(y.intl.string(y.t.JfA7IK), a.ToastType.SUCCESS))
  }
  leaveActivity(e) {
    let {
      location: t,
      applicationId: n,
      showFeedback: r,
      shouldClosePopout: i = true
    } = e;
    s.h.wait(() => {
      (0, d._H)({
        location: t,
        applicationId: n,
        showFeedback: r
      })
    }), (0, u.f)() && i && (0, l.close)(E.MLl.ACTIVITY_POPOUT)
  }
  hidePIPEmbed(e) {
    let {
      location: t,
      applicationId: n
    } = e, r = (0, m.A)(t.id, n);
    (0, h.bK)(r)
  }
  releaseWebView() {}
  constructor(...e) {
    super(...e), b(this, "handleRPCDisconnect", e => {
      let {
        reason: t,
        application: n
      } = e;
      this.superHandleRPCDisconnect({
        reason: t,
        application: n
      })
    }), b(this, "handlePopoutWindowOpen", e => {
      let {
        key: t
      } = e;
      t === E.MLl.ACTIVITY_POPOUT && (A = false)
    }), b(this, "popInActivity", () => {
      A = true, l.close(E.MLl.ACTIVITY_POPOUT);
      let e = p.Ay.getCurrentEmbeddedActivity();
      if (null != e) {
        let t = (0, _.H)(e.location);
        null != t && (0, c.iN)(t), (0, d.gk)(g.Gd.PANEL)
      }
    }), b(this, "handlePopoutWindowUpdate", () => {
      let e = v,
        t = o.A.getWindowOpen(E.MLl.ACTIVITY_POPOUT);
      if (e && !t && !A) {
        let e = p.Ay.getCurrentEmbeddedActivity();
        null != e && this.leaveActivity({
          location: e.location,
          applicationId: e.applicationId
        })
      }
      v = t
    })
  }
}
let S = new I