/** Chunk was on web.js **/
/** chunk id: 26010, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ct: () => E,
  oO: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk57978 = require("./57978.jsx"),
  Chunk964003 = require("./964003.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk157895 = require("./157895.js"),
  Chunk847652 = require("./847652.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function g(e) {
  let {
    className: t,
    boxLayout: n,
    title: i,
    shouldLoadVideo: a,
    isReducedMotion: u,
    includeSideGradient: p = false,
    startLeftAligned: h = false,
    enablePremiumBrandRefreshDesign: g
  } = e, E = g ? f : d;
  return (0, r.jsxs)("div", {
    className: s()(E.boxBackdrop, t),
    children: [(0, r.jsx)(o.Heading, {
      className: E.bentoSectionHeader,
      variant: "display-md",
      color: "text-strong",
      children: i
    }), (0, r.jsx)("div", {
      className: E.bentoBoxesGrid,
      children: n.map((e, t) => {
        let n;
        switch (e.length) {
          case 3:
            n = l.A0.SMALL;
            break;
          case 2:
            n = l.A0.MEDIUM;
            break;
          default:
            n = l.A0.LARGE
        }
        return (0, r.jsx)(r.Fragment, {
          children: e.map(e => (0, r.jsx)(c.A, m(_({
            index: t + +!!h
          }, e), {
            size: n,
            shouldLoadVideo: a,
            isReducedMotion: u
          }), e.name))
        })
      })
    }), p && (0, r.jsx)("div", {
      className: d.bentoSideGradient
    })]
  })
}
let E = Chunk64700.memo(function(e) {
    let {
      whatsNewBoxes: t
    } = (0, l.Ay)();
    return (0, r.jsx)(g, _({
      boxLayout: t,
      title: u.intl.string(u.t.LRmNAl),
      startLeftAligned: e.enablePremiumBrandRefreshDesign
    }, e))
  }),
  b = Chunk64700.memo(function(e) {
    let {
      bestOfBoxes: t
    } = (0, l.Ay)();
    return (0, r.jsx)(g, _({
      boxLayout: t,
      title: u.intl.string(u.t.EnzW2H),
      includeSideGradient: !e.enablePremiumBrandRefreshDesign,
      startLeftAligned: true
    }, e))
  })