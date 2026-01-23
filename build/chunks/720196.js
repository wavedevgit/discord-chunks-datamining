/** Chunk was on web.js **/
/** chunk id: 720196, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => O
}), require("./896048.js");
var Chunk391973 = require("./391973.js"),
  Chunk439372 = require("./439372.js"),
  Chunk626584 = require("./626584.js"),
  Chunk555528 = require("./555528.js"),
  Chunk41984 = require("./41984.js"),
  Chunk589051 = require("./589051.js"),
  Chunk652215 = require("./652215.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let d = new Chunk626584.A("OverlayWidgetPinManager"),
  f = {},
  p = 288e5,
  _ = false,
  h = new Set([Chunk652215.uss.GO_LIVE]),
  m = new Set([Chunk41984.AR.WAITING_FOR_POPOUT_OPEN, Chunk41984.AR.WAITING_FOR_REACT_INITIALIZATION, Chunk41984.AR.WAITING_FOR_PID_FOCUS, Chunk41984.AR.WAITING_FOR_SUCCESSFUL_SHOW]),
  g = e => {
    let t = f[e];
    return null == t || Date.now() - t < p
  },
  E = e => {
    f[e] = Date.now()
  },
  y = e => {
    delete f[e]
  };
class b extends Chunk439372.A {
  constructor(...e) {
    super(...e), u(this, "actions", {
      OVERLAY_UPDATE_OVERLAY_STATE: e => {
        let {
          overlayState: t
        } = e, {
          enabled: n
        } = (0, l.Fg)("OverlayWidgetPinManager");
        if (n && m.has(t))
          for (let e of Object.keys(f)) {
            var i, a;
            if (g(e)) continue;
            let t = s.A.getWidget(e);
            if (null == t || !h.has(t.type)) continue;
            let n = null != (i = null == (a = s.A.getWidgetDefaultSettings(t.type)) ? true : a.pinned) ? i : _;
            t.pinned !== n && (d.verbose("Widget ".concat(t.type, " is ").concat(t.pinned ? "pinned" : "unpinned", ", toggling to ").concat(n ? "pinned" : "unpinned")), (0, r.v0)(e), y(e))
          }
      },
      LAYOUT_SET_PINNED: e => {
        let {
          widgetId: t,
          pinned: n
        } = e, {
          enabled: r
        } = (0, l.Fg)("OverlayWidgetPinManager");
        if (!r) return;
        let i = s.A.getWidget(t);
        null != i && h.has(i.type) && null != n && (n ? E(t) : y(t))
      }
    })
  }
}
let O = new b