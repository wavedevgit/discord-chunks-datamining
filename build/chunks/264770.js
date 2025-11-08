/** Chunk was on web.js **/
/** chunk id: 264770, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk765250 = require("./765250.js"),
  Chunk147913 = require("./147913.js"),
  Chunk710845 = require("./710845.js"),
  Chunk355863 = require("./355863.js"),
  Chunk837268 = require("./837268.js"),
  Chunk32300 = require("./32300.js"),
  Chunk981631 = require("./981631.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let d = new Chunk710845.Z("OverlayWidgetPinManager"),
  f = {},
  _ = 288e5,
  p = false,
  h = new Set([Chunk981631.Odu.GO_LIVE]),
  m = new Set([Chunk837268.mM.WAITING_FOR_POPOUT_OPEN, Chunk837268.mM.WAITING_FOR_REACT_INITIALIZATION, Chunk837268.mM.WAITING_FOR_PID_FOCUS, Chunk837268.mM.WAITING_FOR_SUCCESSFUL_SHOW]),
  g = e => {
    let t = f[e];
    return null == t || Date.now() - t < _
  },
  E = e => {
    f[e] = Date.now()
  },
  b = e => {
    delete f[e]
  };
class y extends Chunk147913.Z {
  constructor(...e) {
    super(...e), u(this, "actions", {
      OVERLAY_UPDATE_OVERLAY_STATE: e => {
        let {
          overlayState: t
        } = e, {
          enabled: n
        } = (0, l.lj)("OverlayWidgetPinManager");
        if (n && m.has(t))
          for (let e of Object.keys(f)) {
            var i, a;
            if (g(e)) continue;
            let t = o.Z.getWidget(e);
            if (null == t || !h.has(t.type)) continue;
            let n = null != (a = null == (i = o.Z.getWidgetDefaultSettings(t.type)) ? true : i.pinned) ? a : p;
            t.pinned !== n && (d.verbose("Widget ".concat(t.type, " is ").concat(t.pinned ? "pinned" : "unpinned", ", toggling to ").concat(n ? "pinned" : "unpinned")), (0, r.xh)(e), b(e))
          }
      },
      LAYOUT_SET_PINNED: e => {
        let {
          widgetId: t,
          pinned: n
        } = e, {
          enabled: r
        } = (0, l.lj)("OverlayWidgetPinManager");
        if (!r) return;
        let i = o.Z.getWidget(t);
        null != i && h.has(i.type) && null != n && (n ? E(t) : b(t))
      }
    })
  }
}
let O = new y