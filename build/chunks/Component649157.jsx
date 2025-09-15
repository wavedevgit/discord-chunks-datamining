/** Chunk was on web.js **/
/** chunk id: 649157, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk153867 = require("./153867.js"),
  Chunk706454 = require("./706454.js"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk558731 = require("./558731.js"),
  Chunk444675 = require("./444675.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function E(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function y() {
  let e = (0, Chunk442837.e7)([Chunk706454.default], () => Chunk706454.default.locale),
    [t, m] = Chunk647438.useState(module),
    [E] = Chunk647438.useState(() => (0, Chunk388032.getAvailableLocales)().map(e => {
      let t;
      try {
        t = n(621287)("./".concat(e.value, ".png"))
      } catch (e) {
        t = n(1474)
      }
      return b(g({}, e), {
        name: (0, r.jsxs)("div", {
          className: p.option,
          children: [(0, r.jsx)("span", {
            className: p.localeName,
            children: e.name
          }), (0, r.jsx)("span", {
            className: p.localizedName,
            children: _.intl.string(e.localizedName)
          }), (0, r.jsx)("div", {
            className: p.flag,
            "aria-hidden": true,
            children: (0, r.jsx)("img", {
              alt: "",
              src: t,
              className: p.flagImage
            })
          })]
        })
      })
    })),
    y = Chunk647438.useCallback(e => {
      let {
        value: t
      } = e;
      m(t), h.nextTick(() => {
        l.ZP.updateLocale(t), (0, s.Mr3)(d.I) && (0, d.Z)(u.n.LOCALE_PANEL, {
          section: f.oAB.LOCALE
        })
      })
    }, []);
  return (0, Chunk951288.jsx)(Chunk481060.hjN, {
    tag: Chunk481060.RB0.H1,
    title: Chunk388032.intl.string(Chunk388032.t.IHMsPj),
    children: (0, Chunk951288.jsx)(Chunk481060.hjN, {
      children: (0, Chunk951288.jsx)(Chunk755721.Gu, {
        label: Chunk388032.intl.string(Chunk388032.t["mx+sp6"]),
        onChange: y,
        options: E,
        value: exports
      })
    })
  })
}