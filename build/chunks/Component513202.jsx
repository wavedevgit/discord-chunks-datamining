/** Chunk was on web.js **/
/** chunk id: 513202, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk522474 = require("./522474.js"),
  Chunk788983 = require("./788983.js"),
  Chunk359110 = require("./359110.js"),
  Chunk636449 = require("./636449.js"),
  Chunk566620 = require("./566620.js"),
  Chunk287545 = require("./287545.js"),
  Chunk317381 = require("./317381.js"),
  Chunk16609 = require("./16609.js"),
  Chunk318891 = require("./318891.js"),
  Chunk719296 = require("./719296.js"),
  Chunk918559 = require("./918559.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function y(e, t, n) {
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
      y(e, t, n[t])
    })
  }
  return e
}
let v = false,
  I = false;
class T extends Chunk287545.Z {
  _initialize() {
    super._initialize(), Chunk522474.Z.addChangeListener(this.handlePopoutWindowUpdate), Chunk570140.Z.subscribe("POPOUT_WINDOW_OPEN", this.handlePopoutWindowOpen)
  }
  _terminate() {
    super._terminate(), Chunk522474.Z.removeChangeListener(this.handlePopoutWindowUpdate), Chunk570140.Z.unsubscribe("POPOUT_WINDOW_OPEN", this.handlePopoutWindowOpen)
  }
  showErrorModal(e) {
    let {
      code: t,
      message: n
    } = e;
    (0, a.ZDy)(async () => e => (0, r.jsx)(i.Modal, O({
      title: b.intl.formatToPlainString(b.t.hbiAO6, {
        code: t
      }),
      subtitle: n,
      actions: [{
        text: b.intl.string(b.t.BddRzS),
        onClick: e.onClose,
        variant: "primary"
      }]
    }, e)))
  }
  showLaunchErrorModal(e) {
    (0, a.ZDy)(async () => t => (0, r.jsx)(i.Modal, O({
      title: b.intl.string(b.t.PtobXW),
      subtitle: e,
      actions: [{
        text: b.intl.string(b.t.BddRzS),
        onClick: t.onClose,
        variant: "primary"
      }]
    }, t)))
  }
  showDevShelfOverrideEnabled() {
    (0, Chunk481060.showToast)((0, Chunk481060.createToast)(Chunk388032.intl.string(Chunk388032.t.JfA7IK), Chunk481060.ToastType.SUCCESS))
  }
  leaveActivity(e) {
    let {
      location: t,
      applicationId: n,
      showFeedback: r,
      shouldClosePopout: i = true
    } = e;
    o.Z.wait(() => {
      (0, d.mW)({
        location: t,
        applicationId: n,
        showFeedback: r
      })
    }), (0, u.R)() && i && (0, l.xv)(E.KJ3.ACTIVITY_POPOUT)
  }
  hidePIPEmbed(e) {
    let {
      location: t,
      applicationId: n
    } = e, r = (0, m.Z)(t.id, n);
    (0, h.RI)(r)
  }
  releaseWebView() {}
  constructor(...e) {
    super(...e), y(this, "handleRPCDisconnect", e => {
      let {
        reason: t,
        application: n
      } = e;
      this.superHandleRPCDisconnect({
        reason: t,
        application: n
      })
    }), y(this, "handlePopoutWindowOpen", e => {
      let {
        key: t
      } = e;
      t === E.KJ3.ACTIVITY_POPOUT && (I = false)
    }), y(this, "popInActivity", () => {
      I = true, l.xv(E.KJ3.ACTIVITY_POPOUT);
      let e = _.ZP.getCurrentEmbeddedActivity();
      if (null != e) {
        let t = (0, p.p)(e.location);
        null != t && (0, c.Kh)(t), (0, d.tg)(g.Ez.PANEL)
      }
    }), y(this, "handlePopoutWindowUpdate", () => {
      let e = v,
        t = s.Z.getWindowOpen(E.KJ3.ACTIVITY_POPOUT);
      if (e && !t && !I) {
        let e = _.ZP.getCurrentEmbeddedActivity();
        null != e && this.leaveActivity({
          location: e.location,
          applicationId: e.applicationId
        })
      }
      v = t
    })
  }
}
let S = new T