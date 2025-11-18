/** Chunk was on web.js **/
/** chunk id: 649157, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk153867 = require("./153867.js"),
  Chunk706454 = require("./706454.js"),
  Chunk313789 = require("./313789.js"),
  Chunk273313 = require("./273313.jsx"),
  Chunk518596 = require("./518596.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk896643 = require("./896643.js"),
  Chunk444675 = require("./444675.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function O() {
  let e = (0, Chunk442837.e7)([Chunk706454.default], () => Chunk706454.default.locale),
    [t, g] = Chunk473749.useState(module),
    [b] = Chunk473749.useState(() => (0, Chunk388032.getAvailableLocales)().map(e => {
      let t;
      try {
        t = n(621287)("./".concat(e.value, ".png"))
      } catch (e) {
        t = n(1474)
      }
      return y(E({}, e), {
        name: (0, r.jsxs)("div", {
          className: h.option,
          children: [(0, r.jsx)("span", {
            className: h.localeName,
            children: e.name
          }), (0, r.jsx)("span", {
            className: h.localizedName,
            children: p.intl.string(e.localizedName)
          }), (0, r.jsx)("div", {
            className: h.flag,
            "aria-hidden": true,
            children: (0, r.jsx)("img", {
              alt: "",
              src: t,
              className: h.flagImage
            })
          })]
        })
      })
    })),
    O = Chunk473749.useCallback(e => {
      let {
        value: t
      } = e;
      g(t), m.nextTick(() => {
        l.ZP.updateLocale(t), (0, s.Mr3)(f.USER_SETTINGS_MODAL_KEY) && (0, f.openUserSettings)(u.n.LOCALE_PANEL, {
          section: _.oAB.LOCALE
        })
      })
    }, []);
  return (0, Chunk54381.jsx)(Chunk273313.Z, {
    title: Chunk388032.intl.string(Chunk388032.t.IHMsPn),
    children: (0, Chunk54381.jsx)(Chunk755721.Gu, {
      label: Chunk388032.intl.string(Chunk388032.t["mx+sp7"]),
      onChange: O,
      options: b,
      value: exports
    })
  })
}