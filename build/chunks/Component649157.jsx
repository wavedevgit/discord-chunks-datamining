/** Chunk was on web.js **/
/** chunk id: 649157, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk153867 = require("./153867.js"),
  Chunk706454 = require("./706454.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk558731 = require("./558731.js"),
  Chunk444675 = require("./444675.js");

function f(e, t, n) {
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
      f(e, t, n[t])
    })
  }
  return e
}

function p(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function m() {
  let e = (0, Chunk442837.e7)([Chunk706454.default], () => Chunk706454.default.locale),
    [t, f] = Chunk647438.useState(module),
    [p] = Chunk647438.useState(() => (0, Chunk388032.getAvailableLocales)().map(e => {
      let t;
      try {
        t = n(621287)("./".concat(e.value, ".png"))
      } catch (e) {
        t = n(1474)
      }
      return h(_({}, e), {
        name: (0, r.jsxs)("div", {
          className: u.option,
          children: [(0, r.jsx)("span", {
            className: u.localeName,
            children: e.name
          }), (0, r.jsx)("span", {
            className: u.localizedName,
            children: c.intl.string(e.localizedName)
          }), (0, r.jsx)("div", {
            className: u.flag,
            "aria-hidden": true,
            children: (0, r.jsx)("img", {
              alt: "",
              src: t,
              className: u.flagImage
            })
          })]
        })
      })
    })),
    m = Chunk647438.useCallback(e => {
      let {
        value: t
      } = e;
      f(t), d.nextTick(() => s.ZP.updateLocale(t))
    }, []);
  return (0, Chunk951288.jsx)(Chunk481060.hjN, {
    tag: Chunk481060.RB0.H1,
    title: Chunk388032.intl.string(Chunk388032.t.IHMsPj),
    children: (0, Chunk951288.jsx)(Chunk481060.hjN, {
      children: (0, Chunk951288.jsx)(Chunk481060.xJW, {
        title: Chunk388032.intl.string(Chunk388032.t["mx+sp6"]),
        children: (0, Chunk951288.jsx)(Chunk481060.FXm, {
          onChange: m,
          options: p,
          value: exports
        })
      })
    })
  })
}