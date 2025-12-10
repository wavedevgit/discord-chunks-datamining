/** Chunk was on 7891 **/
/** chunk id: 73563, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m,
  e: () => h
});
var i, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk507675 = require("./507675.jsx"),
  Chunk349364 = require("./349364.js");

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}
var h = ((i = {})[i.TOP = 0] = "TOP", i[i.BOTTOM = 1] = "BOTTOM", i);

function f(e) {
  let {
    disableGradients: t = false,
    renderHeader: n,
    renderBottomLeft: i,
    renderBottomCenter: a,
    renderBottomRight: o,
    renderCenter: u
  } = e, p = l.useRef(null);
  return (0, r.jsx)(s.JcV, {
    containerRef: p,
    children: (0, r.jsxs)("div", {
      className: d.videoControls,
      ref: p,
      children: [0 !== t && true !== t && (0, r.jsx)("div", {
        className: d.gradientTop
      }), 1 !== t && true !== t && (0, r.jsx)("div", {
        className: d.gradientBottom
      }), (0, r.jsx)("div", {
        className: d.topControls,
        children: null == n ? true : n()
      }), null == u ? true : u(), (0, r.jsxs)("div", {
        className: d.bottomControls,
        children: [(0, r.jsx)(c.Z, {
          grow: 1,
          align: c.Z.Align.CENTER,
          className: d.edgeControls,
          children: null == i ? true : i()
        }), (0, r.jsx)(c.Z, {
          grow: 1,
          justify: c.Z.Justify.CENTER,
          align: c.Z.Align.CENTER,
          children: null == a ? true : a()
        }), (0, r.jsx)(c.Z, {
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
    onActive: i,
    onForceIdle: l,
    idle: a,
    children: s,
    renderChatToasts: c,
    renderVoiceChannelEffects: h,
    style: m
  } = e, g = function(e, t) {
    if (null == e) return {};
    var n, i, r = function(e, t) {
      if (null == e) return {};
      var n, i, r = {},
        l = Object.keys(e);
      for (i = 0; i < l.length; i++) n = l[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
      return r
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (i = 0; i < l.length; i++) n = l[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
  }(e, ["screenMessage", "onDoubleClick", "onActive", "onForceIdle", "idle", "children", "renderChatToasts", "renderVoiceChannelEffects", "style"]);
  return (0, r.jsxs)("div", {
    className: o()(d.root, {
      [d.idle]: a
    }),
    style: m,
    onMouseMove: i,
    onMouseDown: i,
    onMouseLeave: l,
    onDoubleClick: n,
    children: [s, null != t ? (0, r.jsx)(u.Z, p({
      size: "large"
    }, t)) : null, (0, r.jsx)(f, p({}, g)), null == c ? true : c(), null == h ? true : h()]
  })
}