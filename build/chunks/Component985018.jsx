/** Chunk was on web.js **/
/** chunk id: 985018, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  getAvailableLocales: () => c.Be,
  getLanguages: () => c.kG,
  getSystemLocale: () => h,
  initialLocale: () => g,
  international: () => u.A,
  intl: () => E,
  systemLocale: () => m,
  t: () => l.X,
  useSyncMessages: () => y
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk932433 = require("./932433.js"),
  Chunk280230 = require("./280230.js"),
  s = require.n(Chunk280230),
  Chunk356422 = require("./356422.js"),
  Chunk226536 = require("./226536.js"),
  Chunk526617 = require("./526617.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
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

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e) {
  return [Array.isArray(navigator.languages) ? navigator.languages[0] : null, navigator.language, navigator.browserLanguage, navigator.userLanguage, e].find(e => null != e && "" !== e)
}
let m = h("en-US"),
  g = (0, Chunk226536.kt)(m, "en-US"),
  E = new Chunk932433.IntlManager({
    initialLocale: g,
    defaultLocale: "en-US"
  }).withFormatters({
    format: (0, Chunk932433.makeReactFormatter)({
      $i: (e, t) => (0, r.jsx)("em", {
        children: e
      }, t),
      $b: (e, t) => (0, r.jsx)("strong", {
        children: e
      }, t),
      $del: (e, t) => (0, r.jsx)("del", {
        children: e
      }, t),
      $p: (e, t) => (0, r.jsx)("p", {
        children: e
      }, t),
      $code: (e, t) => (0, r.jsx)("code", {
        children: e
      }, t),
      $link: (e, t, r) => {
        let [a] = r, {
          Anchor: o
        } = n(349288), l = {};
        switch (typeof a) {
          case "string":
            l.href = s().sanitizeUrl(a);
            break;
          case "function":
          default:
            l.onClick = a;
            break;
          case "object":
            var c;
            if (null == a) break;
            l.onClick = null != (c = a.onClick) ? c : a, l.onContextMenu = a.onContextMenu
        }
        return (0, i.createElement)(o, _(f({}, l), {
          key: t
        }), e)
      }
    }),
    formatToPlainString: Chunk932433.stringFormatter,
    formatToMarkdownString: Chunk932433.markdownFormatter,
    formatToParts: Chunk932433.astFormatter
  }),
  y = e => (0, c.tp)(e, E)