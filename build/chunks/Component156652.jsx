/** Chunk was on 1113 **/
/** chunk id: 156652, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f,
  x: () => p
});
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk919706 = require("./919706.jsx"),
  Chunk985010 = require("./985010.js");

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}
var p = ((r = {})[r.TOP = 0] = "TOP", r[r.BOTTOM = 1] = "BOTTOM", r);

function g(e) {
  let {
    disableGradients: t = false,
    renderHeader: n,
    renderBottomLeft: r,
    renderBottomCenter: s,
    renderBottomRight: a,
    renderCenter: u
  } = e, h = i.useRef(null);
  return (0, l.jsx)(o.xpW, {
    containerRef: h,
    children: (0, l.jsxs)("div", {
      className: d._v,
      ref: h,
      children: [0 !== t && true !== t && (0, l.jsx)("div", {
        className: d.aw
      }), 1 !== t && true !== t && (0, l.jsx)("div", {
        className: d.YA
      }), (0, l.jsx)("div", {
        className: d.K1,
        children: null == n ? true : n()
      }), null == u ? true : u(), (0, l.jsxs)("div", {
        className: d.q6,
        children: [(0, l.jsx)(c.A, {
          grow: 1,
          align: c.A.Align.CENTER,
          className: d.i$,
          children: null == r ? true : r()
        }), (0, l.jsx)(c.A, {
          grow: 1,
          justify: c.A.Justify.CENTER,
          align: c.A.Align.CENTER,
          children: null == s ? true : s()
        }), (0, l.jsx)(c.A, {
          grow: 1,
          justify: c.A.Justify.END,
          align: c.A.Align.CENTER,
          className: d.i$,
          children: null == a ? true : a()
        })]
      })]
    })
  })
}

function f(e) {
  let {
    screenMessage: t,
    onDoubleClick: n,
    onActive: r,
    onForceIdle: i,
    idle: s,
    children: o,
    renderChatToasts: c,
    renderVoiceChannelEffects: p,
    style: f
  } = e, m = function(e, t) {
    if (null == e) return {};
    var n, r, l, i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
      return i
    }
    if (i = function(e, t) {
        if (null == e) return {};
        var n, r, l = {},
          i = Object.getOwnPropertyNames(e);
        for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
        return l
      }(e, t), Object.getOwnPropertySymbols)
      for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    return i
  }(e, ["screenMessage", "onDoubleClick", "onActive", "onForceIdle", "idle", "children", "renderChatToasts", "renderVoiceChannelEffects", "style"]);
  return (0, l.jsxs)("div", {
    className: a()(d.zr, {
      [d.N7]: s
    }),
    style: f,
    onMouseMove: r,
    onMouseDown: r,
    onMouseLeave: i,
    onDoubleClick: n,
    children: [o, null != t ? (0, l.jsx)(u.A, h({
      size: "large"
    }, t)) : null, (0, l.jsx)(g, h({}, m)), null == c ? true : c(), null == p ? true : p()]
  })
}