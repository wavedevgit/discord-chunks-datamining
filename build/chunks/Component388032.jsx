/** Chunk was on web.js **/
/** chunk id: 388032, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  getAvailableLocales: () => Chunk424395.u5,
  getLanguages: () => Chunk424395.Vb,
  getSystemLocale: () => m,
  initialLocale: () => g,
  international: () => Chunk716111.Z,
  intl: () => E,
  systemLocale: () => h,
  t: () => Chunk253185.k,
  useSyncMessages: () => b
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk502922 = require("./502922.js"),
  Chunk159635 = require("./159635.js"),
  s = require.n(Chunk159635),
  Chunk253185 = require("./253185.js"),
  Chunk424395 = require("./424395.js"),
  Chunk716111 = require("./716111.js");

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

function m(e) {
  return [Array.isArray(navigator.languages) ? navigator.languages[0] : null, navigator.language, navigator.browserLanguage, navigator.userLanguage, e].find(e => null != e && "" !== e)
}
let h = m("en-US"),
  g = (0, Chunk424395.YI)(h, "en-US"),
  E = new Chunk502922.IntlManager({
    initialLocale: g,
    defaultLocale: "en-US"
  }).withFormatters({
    format: (0, Chunk502922.makeReactFormatter)({
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
        } = n(756715), l = {};
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
    formatToPlainString: Chunk502922.stringFormatter,
    formatToMarkdownString: Chunk502922.markdownFormatter,
    formatToParts: Chunk502922.astFormatter
  }),
  b = e => (0, c.j1)(e, E)