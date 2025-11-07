/** Chunk was on 13140 **/
/** chunk id: 73563, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m,
  e: () => f
});
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk507675 = require("./507675.jsx"),
  Chunk349364 = require("./349364.js");

function p(e) {
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
var f = ((r = {})[r.TOP = 0] = "TOP", r[r.BOTTOM = 1] = "BOTTOM", r);

function h(e) {
  let {
    disableGradients: t = false,
    renderHeader: n,
    renderBottomLeft: r,
    renderBottomCenter: a,
    renderBottomRight: o,
    renderCenter: u
  } = e, p = l.useRef(null);
  return (0, i.jsx)(s.JcV, {
    containerRef: p,
    children: (0, i.jsxs)("div", {
      className: d.videoControls,
      ref: p,
      children: [0 !== t && true !== t && (0, i.jsx)("div", {
        className: d.gradientTop
      }), 1 !== t && true !== t && (0, i.jsx)("div", {
        className: d.gradientBottom
      }), (0, i.jsx)("div", {
        className: d.topControls,
        children: null == n ? true : n()
      }), null == u ? true : u(), (0, i.jsxs)("div", {
        className: d.bottomControls,
        children: [(0, i.jsx)(c.Z, {
          grow: 1,
          align: c.Z.Align.CENTER,
          className: d.edgeControls,
          children: null == r ? true : r()
        }), (0, i.jsx)(c.Z, {
          grow: 1,
          justify: c.Z.Justify.CENTER,
          align: c.Z.Align.CENTER,
          children: null == a ? true : a()
        }), (0, i.jsx)(c.Z, {
          grow: 1,
          justify: c.Z.Justify.END,
          align: c.Z.Align.CENTER,
          className: d.edgeControls,
          children: null == o ? true : o()
        })]
      })]
    })
  })
}

function m(e) {
  var {
    screenMessage: t,
    onDoubleClick: n,
    onActive: r,
    onForceIdle: l,
    idle: a,
    children: s,
    renderChatToasts: c,
    renderVoiceChannelEffects: f,
    style: m
  } = e, g = function(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(e, ["screenMessage", "onDoubleClick", "onActive", "onForceIdle", "idle", "children", "renderChatToasts", "renderVoiceChannelEffects", "style"]);
  return (0, i.jsxs)("div", {
    className: o()(d.root, {
      [d.idle]: a
    }),
    style: m,
    onMouseMove: r,
    onMouseDown: r,
    onMouseLeave: l,
    onDoubleClick: n,
    children: [s, null != t ? (0, i.jsx)(u.Z, p({
      size: "large"
    }, t)) : null, (0, i.jsx)(h, p({}, g)), null == c ? true : c(), null == f ? true : f()]
  })
}