/** Chunk was on web.js **/
/** chunk id: 271195, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => A,
  X: () => v
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk73939 = require("./73939.js"),
  Chunk397927 = require("./397927.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk805466 = require("./805466.js"),
  Chunk282413 = require("./282413.jsx"),
  Chunk383501 = require("./383501.js"),
  Chunk6155 = require("./6155.jsx"),
  Chunk919706 = require("./919706.jsx"),
  Chunk598565 = require("./598565.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk319567 = require("./319567.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = O(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function O(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function v(e) {
  let {
    title: t,
    onJumpToChannel: n,
    onHide: i,
    idle: a,
    preventIdleComponent: s
  } = e, c = (0, o.bG)([f.A], () => f.A.getChannelId()), d = null != c ? (0, r.jsx)(p.A, {
    voiceChannelId: c,
    idle: a
  }) : null, {
    enabled: _
  } = u.A.useExperiment({
    location: "PictureInPicturePlayer"
  });
  return (0, r.jsxs)(s, {
    className: g.Nc,
    children: [(0, r.jsxs)(l.DUT, {
      className: g.qd,
      onClick: n,
      children: [(0, r.jsx)(l.rJJ, {
        size: "custom",
        color: "currentColor",
        "aria-label": m.intl.string(m.t.mSfLs0),
        className: g.Gv,
        width: 20,
        height: 20
      }), (0, r.jsx)(l.Heading, {
        variant: "heading-md/normal",
        className: g.TK,
        color: "always-white",
        children: t
      })]
    }), _ && null != i ? (0, r.jsx)(h.A, {
      onClick: i,
      label: m.intl.string(m.t.BEuDEn)
    }) : null, d]
  })
}

function A(e) {
  let {
    children: t,
    idle: n,
    onJumpToChannel: i,
    onHide: o,
    backgroundKey: l,
    onActive: u,
    onForceIdle: f,
    renderBottomLeftControls: p,
    renderBottomRightControls: h,
    screenMessage: m,
    hideControls: E = false,
    className: O,
    innerClassName: A,
    videoControlsClassName: I
  } = e, S = b(e, ["children", "idle", "onJumpToChannel", "onHide", "backgroundKey", "onActive", "onForceIdle", "renderBottomLeftControls", "renderBottomRightControls", "screenMessage", "hideControls", "className", "innerClassName", "videoControlsClassName"]);
  return (0, r.jsxs)("div", {
    onMouseMove: u,
    onMouseDown: u,
    onMouseLeave: f,
    className: a()(g.Hu, {
      [g.N7]: n
    }, O),
    onDoubleClick: i,
    children: [(0, r.jsx)(s.F, {
      children: (0, r.jsx)(d.o, {
        className: A,
        children: t
      }, l)
    }), null != m ? (0, r.jsx)(_.A, y({
      size: "small"
    }, m)) : null, !E && (0, r.jsxs)("div", {
      className: a()(g._v, I, "theme-dark"),
      children: [(0, r.jsx)("div", {
        className: g.K1,
        children: (0, r.jsx)(v, y({
          idle: n,
          onJumpToChannel: i,
          onHide: o
        }, S))
      }), (0, r.jsxs)("div", {
        className: g.q6,
        children: [(0, r.jsx)(c.A, {
          grow: 0,
          shrink: 1,
          basis: "50%",
          align: c.A.Align.CENTER,
          className: g.Px,
          children: null == p ? true : p()
        }), (0, r.jsx)(c.A, {
          grow: 0,
          shrink: 1,
          justify: c.A.Justify.END,
          basis: "50%",
          align: c.A.Align.CENTER,
          children: null == h ? true : h()
        })]
      })]
    })]
  })
}