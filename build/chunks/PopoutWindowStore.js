/** Chunk was on web.js **/
/** chunk id: 87001, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => ee
}), require("./896048.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js"), require("./596829.js"), require("./65821.js");
var r, Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk735438 = require("./735438.js"),
  s = require.n(Chunk735438),
  Chunk507240 = require("./507240.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk626584 = require("./626584.js"),
  Chunk777334 = require("./777334.js"),
  Chunk41984 = require("./41984.js"),
  Chunk111162 = require("./111162.js"),
  Chunk723702 = require("./723702.js"),
  Chunk837921 = require("./837921.js"),
  Chunk475815 = require("./475815.js"),
  Chunk265383 = require("./265383.js"),
  Chunk652215 = require("./652215.js");

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

function v(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function I(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = S(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function S(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let T = new Chunk626584.A("PopoutWindowStore"),
  C = {},
  N = {},
  w = {},
  R = {},
  P = {},
  D = new Set,
  L = "app-mount",
  x = () => $.emitChange(),
  M = s().debounce(x, 150),
  j = false;

function k(e, t) {
  let n = t.document,
    r = n.head;
  for (let e of (a()(null != r, "Body for popout window is null!"), document.querySelectorAll("style"))) {
    let t = n.importNode(e, true);
    r.appendChild(t)
  }
  for (let e of document.querySelectorAll('link[rel="stylesheet"]')) {
    let t = n.importNode(e, true);
    r.appendChild(t)
  }
}

function U(e) {
  let t = w[e];
  null == t || t.closed || (C[e] = {
    x: t.screenX,
    y: t.screenY,
    width: t.innerWidth,
    height: t.innerHeight,
    alwaysOnTop: !!h.isPlatformEmbedded && N[e]
  })
}

function G(e) {
  T.info("Unmounting popout window", e);
  let t = w[e];
  a()(null != t, "Popout window was null during unmount"), t.removeEventListener("focus", x), t.removeEventListener("blur", x), t.removeEventListener("resize", M);
  let n = R[e];
  a()(null != n, "Window root was null while unmounting"), n.unmount(), delete w[e], delete N[e], delete P[e], delete R[e]
}

function F(e, t, r) {
  let i = e.document,
    o = new URL(t).origin,
    s = new URL("".concat(window.location.protocol, "//").concat(window.location.host)).origin,
    l = URL.canParse(n.p) ? new URL(n.p).origin : "";
  if (o !== s && o !== l) return void T.warn("Not injecting stylesheet, unrecognized origin", o);
  let c = i.createElement("link");
  c.href = t, c.rel = "stylesheet", c.integrity = r, a()(null != i.head, "Document head was null"), i.head.appendChild(c)
}

function V(e, t) {
  for (let e of document.querySelectorAll('link[rel="stylesheet"]')) F(t, e.href, e.integrity)
}

function B(e) {
  let t = w[e],
    n = P[e];
  if (null == t) return void T.warn("Failed to open window", e);
  let r = t.document;
  (0, g.a3)(r, x), t.addEventListener("focus", x), t.addEventListener("blur", x), t.addEventListener("resize", M), j ? k(e, t) : V(e, t);
  let i = (0, l.createRoot)(r.getElementById(L));
  a()(null != i, "No render target for popout!"), R[e] = i, i.render(n(e))
}

function H(e) {
  let {
    key: t,
    features: n,
    render: r
  } = e;
  if (h.isPlatformEmbedded && !m.Ay.supportsFeature(y.BYE.POPOUT_WINDOWS)) throw Error("Popout windows not supported on this native module version!");
  let i = true === n.outOfProcessOverlay,
    a = w[t],
    o = null != a && !a.closed;
  if (o && !i) return h.isPlatformEmbedded ? m.Ay.focus(t) : null != a && a.focus(), false;
  if (o && i) return T.info("Already has open window, skipping focus"), false;
  let {
    defaultWidth: s,
    defaultHeight: l,
    defaultAlwaysOnTop: c = false
  } = n, u = I(n, ["defaultWidth", "defaultHeight", "defaultAlwaysOnTop"]), d = A(O({}, u), {
    width: null != s ? s : u.width,
    height: null != l ? l : u.height
  }), _ = c, g = C[t];
  if (null != g) {
    let {
      width: e,
      height: t,
      x: n,
      y: r,
      alwaysOnTop: i
    } = g;
    _ = null != i ? i : c, d = A(O({}, d), {
      width: null != e && 0 !== e ? e : s,
      height: null != t && 0 !== t ? t : l,
      left: n,
      top: r
    })
  }
  let b = (0, E.A)(d);
  T.info("Opening popout window", {
    key: t,
    encodedFeatures: b
  });
  let v = window.open(y.BVt.POPOUT_WINDOW, t, b);
  try {
    v.windowKey = t
  } catch (e) {
    throw (0, f.pj)(e, i ? p.Ue.OutOfProcess : null, {
      extra: {
        windowKey: t,
        totalWindowCount: Object.keys(w).length,
        features: d,
        encodedFeatures: b,
        isPlatformEmbedded: h.isPlatformEmbedded
      }
    }), e
  }
  i ? T.verbose("Opening out of process overlay window", t) : null == v || v.focus(), w[t] = v, P[t] = r, h.isPlatformEmbedded && (m.Ay.setAlwaysOnTop(t, _), N[t] = _, m.Ay.isAlwaysOnTop(t).then(e => N[t] = e)), D.add(t)
}

function Y(e) {
  D.has(e) && (B(e), D.delete(e), $.emitChange())
}

function W(e) {
  let t = w[e];
  null != t && (t.closed || U(e), G(e), setTimeout(() => {
    z(t)
  }, 100), $.emitChange())
}

function K(e) {
  let {
    data: t
  } = e;
  if (!(t instanceof Object && t.discordPopoutEvent instanceof Object)) return;
  let n = t.discordPopoutEvent;
  if (null != n.key) switch (n.type) {
    case y.hK1.LOADED:
      return Y(n.key);
    case y.hK1.UNLOADED:
      return W(n.key)
  }
}

function z(e) {
  if (null != e && !e.closed) try {
    e.close()
  } catch (e) {
    T.error("Error closing popout window", e)
  }
}

function q(e) {
  let {
    key: t
  } = e, n = w[t];
  null != n && !n.closed && (U(t), _.default.preventPopoutClose || z(n))
}

function Z() {
  for (let e of Object.keys(w)) {
    let t = w[e];
    null != t && z(t)
  }
}

function Q(e) {
  let {
    key: t,
    alwaysOnTop: n
  } = e;
  h.isPlatformEmbedded && (m.Ay.setAlwaysOnTop(t, n), N[t] = n, m.Ay.isAlwaysOnTop(t).then(e => N[t] = e))
}

function X(e) {
  let {
    url: t,
    integrity: n
  } = e;
  for (let e of Object.values(w)) null == e || e.closed || F(e, t, n)
}
class J extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    this.waitFor(_.default), window.addEventListener("message", K), window.addEventListener("beforeunload", Z), C = null != e ? e : {}
  }
  getWindow(e) {
    return w[e]
  }
  getWindowState(e) {
    return C[e]
  }
  getWindowKeys() {
    return Object.keys(w)
  }
  getWindowOpen(e) {
    let t = w[e];
    return null != t && !t.closed
  }
  getIsAlwaysOnTop(e) {
    return !!N[e]
  }
  getWindowFocused(e) {
    var t, n;
    let r = w[e];
    return null != (t = null == r || null == (n = r.document) ? true : n.hasFocus()) && t
  }
  getWindowVisible(e) {
    var t;
    let n = w[e];
    return (null == n || null == (t = n.document) ? true : t.visibilityState) === "visible"
  }
  getState() {
    return C
  }
  isWindowFullyInitialized(e) {
    return null != w[e] && null != R[e] && null != P[e]
  }
  isWindowFullScreen(e) {
    var t, n;
    let r = w[e];
    return (null == r || null == (n = r.document) || null == (t = n.fullscreenElement) ? true : t.id) === L
  }
  unmountWindow(e) {
    return this.isWindowFullyInitialized(e) || T.warn("Attempted to unmount partially initialized window ".concat(e)), W(e)
  }
}
b(J, "displayName", "PopoutWindowStore"), b(J, "persistKey", "PopoutWindowStore");
let $ = new J(Chunk73153.h, {
    POPOUT_WINDOW_OPEN: H,
    POPOUT_WINDOW_ADD_STYLESHEET: X,
    POPOUT_WINDOW_CLOSE: q,
    POPOUT_WINDOW_SET_ALWAYS_ON_TOP: Q,
    LOGOUT: Z
  }),
  ee = $