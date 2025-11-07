/** Chunk was on web.js **/
/** chunk id: 522474, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => ee
}), require("./388685.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./831579.js"), require("./415506.js");
var r, Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk602954 = require("./602954.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk710845 = require("./710845.js"),
  Chunk41534 = require("./41534.js"),
  Chunk837268 = require("./837268.js"),
  Chunk857192 = require("./857192.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk228488 = require("./228488.js"),
  Chunk248977 = require("./248977.js"),
  Chunk981631 = require("./981631.js");

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

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function S(e, t) {
  if (null == e) return {};
  var n, r, i = T(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function T(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let A = new Chunk710845.Z("PopoutWindowStore"),
  C = {},
  N = {},
  R = {},
  P = {},
  w = {},
  D = new Set,
  x = "app-mount",
  L = () => $.emitChange(),
  M = s().debounce(L, 150),
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
  let t = R[e];
  null == t || t.closed || (C[e] = {
    x: t.screenX,
    y: t.screenY,
    width: t.innerWidth,
    height: t.innerHeight,
    alwaysOnTop: !!h.isPlatformEmbedded && N[e]
  })
}

function G(e) {
  A.info("Unmounting popout window", e);
  let t = R[e];
  a()(null != t, "Popout window was null during unmount"), t.removeEventListener("focus", L), t.removeEventListener("blur", L), t.removeEventListener("resize", M);
  let n = P[e];
  a()(null != n, "Window root was null while unmounting"), n.unmount(), delete R[e], delete N[e], delete w[e], delete P[e]
}

function B(e, t, r) {
  let i = e.document,
    o = new URL(t).origin,
    s = new URL("".concat(window.location.protocol, "//").concat(window.location.host)).origin,
    l = URL.canParse(n.p) ? new URL(n.p).origin : "";
  if (o !== s && o !== l) return void A.warn("Not injecting stylesheet, unrecognized origin", o);
  let c = i.createElement("link");
  c.href = t, c.rel = "stylesheet", c.integrity = r, a()(null != i.head, "Document head was null"), i.head.appendChild(c)
}

function Z(e, t) {
  for (let e of document.querySelectorAll('link[rel="stylesheet"]')) B(t, e.href, e.integrity)
}

function F(e) {
  let t = R[e],
    n = w[e];
  if (null == t) return void A.warn("Failed to open window", e);
  let r = t.document;
  (0, g.uF)(r, L), t.addEventListener("focus", L), t.addEventListener("blur", L), t.addEventListener("resize", M), j ? k(e, t) : Z(e, t);
  let i = (0, l.createRoot)(r.getElementById(x));
  a()(null != i, "No render target for popout!"), P[e] = i, i.render(n(e))
}

function V(e) {
  let {
    key: t,
    features: n,
    render: r
  } = e;
  if (h.isPlatformEmbedded && !m.ZP.supportsFeature(b.eRX.POPOUT_WINDOWS)) throw Error("Popout windows not supported on this native module version!");
  let i = true === n.outOfProcessOverlay,
    a = R[t],
    o = null != a && !a.closed;
  if (o && !i) return h.isPlatformEmbedded ? m.ZP.focus(t) : null != a && a.focus(), false;
  if (o && i) return A.info("Already has open window, skipping focus"), false;
  let {
    defaultWidth: s,
    defaultHeight: l,
    defaultAlwaysOnTop: c = false
  } = n, u = S(n, ["defaultWidth", "defaultHeight", "defaultAlwaysOnTop"]), d = I(O({}, u), {
    width: null != s ? s : u.width,
    height: null != l ? l : u.height
  }), p = c, g = C[t];
  if (null != g) {
    let {
      width: e,
      height: t,
      x: n,
      y: r,
      alwaysOnTop: i
    } = g;
    p = null != i ? i : c, d = I(O({}, d), {
      width: null != e && 0 !== e ? e : s,
      height: null != t && 0 !== t ? t : l,
      left: n,
      top: r
    })
  }
  let y = (0, E.Z)(d);
  A.info("Opening popout window", {
    key: t,
    encodedFeatures: y
  });
  let v = window.open(b.Z5c.POPOUT_WINDOW, t, y);
  try {
    v.windowKey = t
  } catch (e) {
    throw (0, f.D1)(e, i ? _.gl.OutOfProcess : null, {
      extra: {
        windowKey: t,
        totalWindowCount: Object.keys(R).length,
        features: d,
        encodedFeatures: y,
        isPlatformEmbedded: h.isPlatformEmbedded
      }
    }), e
  }
  i ? A.verbose("Opening out of process overlay window", t) : null == v || v.focus(), R[t] = v, w[t] = r, h.isPlatformEmbedded && (m.ZP.setAlwaysOnTop(t, p), N[t] = p, m.ZP.isAlwaysOnTop(t).then(e => N[t] = e)), D.add(t)
}

function H(e) {
  D.has(e) && (F(e), D.delete(e), $.emitChange())
}

function Y(e) {
  let t = R[e];
  null != t && (t.closed || U(e), G(e), setTimeout(() => {
    K(t)
  }, 100), $.emitChange())
}

function W(e) {
  let {
    data: t
  } = e;
  if (!(t instanceof Object && t.discordPopoutEvent instanceof Object)) return;
  let n = t.discordPopoutEvent;
  if (null != n.key) switch (n.type) {
    case b.l9w.LOADED:
      return H(n.key);
    case b.l9w.UNLOADED:
      return Y(n.key)
  }
}

function K(e) {
  if (null != e && !e.closed) try {
    e.close()
  } catch (e) {
    A.error("Error closing popout window", e)
  }
}

function z(e) {
  let {
    key: t
  } = e, n = R[t];
  null != n && !n.closed && (U(t), p.default.preventPopoutClose || K(n))
}

function q() {
  for (let e of Object.keys(R)) {
    let t = R[module];
    null != exports && K(exports)
  }
}

function X(e) {
  let {
    key: t,
    alwaysOnTop: n
  } = e;
  h.isPlatformEmbedded && (m.ZP.setAlwaysOnTop(t, n), N[t] = n, m.ZP.isAlwaysOnTop(t).then(e => N[t] = e))
}

function Q(e) {
  let {
    url: t,
    integrity: n
  } = e;
  for (let e of Object.values(R)) null == e || e.closed || B(e, t, n)
}
class J extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    this.waitFor(p.default), window.addEventListener("message", W), window.addEventListener("beforeunload", q), C = null != e ? e : {}
  }
  getWindow(e) {
    return R[e]
  }
  getWindowState(e) {
    return C[e]
  }
  getWindowKeys() {
    return Object.keys(R)
  }
  getWindowOpen(e) {
    let t = R[e];
    return null != t && !t.closed
  }
  getIsAlwaysOnTop(e) {
    return !!N[e]
  }
  getWindowFocused(e) {
    var t, n;
    let r = R[e];
    return null != (n = null == r || null == (t = r.document) ? true : t.hasFocus()) && n
  }
  getWindowVisible(e) {
    var t;
    let n = R[e];
    return (null == n || null == (t = n.document) ? true : t.visibilityState) === "visible"
  }
  getState() {
    return C
  }
  isWindowFullyInitialized(e) {
    return null != R[e] && null != P[e] && null != w[e]
  }
  isWindowFullScreen(e) {
    var t, n;
    let r = R[e];
    return (null == r || null == (n = r.document) || null == (t = n.fullscreenElement) ? true : t.id) === x
  }
  unmountWindow(e) {
    return this.isWindowFullyInitialized(e) || A.warn("Attempted to unmount partially initialized window ".concat(e)), Y(e)
  }
}
y(J, "displayName", "PopoutWindowStore"), y(J, "persistKey", "PopoutWindowStore");
let $ = new J(Chunk570140.Z, {
    POPOUT_WINDOW_OPEN: V,
    POPOUT_WINDOW_ADD_STYLESHEET: Q,
    POPOUT_WINDOW_CLOSE: z,
    POPOUT_WINDOW_SET_ALWAYS_ON_TOP: X,
    LOGOUT: q
  }),
  ee = $