/** Chunk was on web.js **/
/** chunk id: 388032, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  getAvailableLocales: () => Chunk424395.u5,
  getLanguages: () => Chunk424395.Vb,
  getSystemLocale: () => h,
  initialLocale: () => g,
  international: () => Chunk11076.Z,
  intl: () => E,
  systemLocale: () => m,
  t: () => Chunk253185.k,
  useSyncMessages: () => b
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk125697 = require("./125697.js"),
  Chunk159635 = require("./159635.js"),
  s = require.n(Chunk159635),
  Chunk253185 = require("./253185.js"),
  Chunk424395 = require("./424395.js"),
  Chunk11076 = require("./11076.js");

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

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e) {
  return [Array.isArray(navigator.languages) ? navigator.languages[0] : null, navigator.language, navigator.browserLanguage, navigator.userLanguage, e].find(e => null != e && "" !== e)
}
let m = h("en-US"),
  g = (0, Chunk424395.YI)(m, "en-US"),
  E = new Chunk125697.IntlManager({
    initialLocale: g,
    defaultLocale: "en-US"
  }).withFormatters({
    format: (0, Chunk125697.makeReactFormatter)({
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
        let [o] = r, {
          Anchor: a
        } = n(756715), l = {};
        switch (typeof o) {
          case "string":
            l.href = s().sanitizeUrl(o);
            break;
          case "function":
          default:
            l.onClick = o;
            break;
          case "object":
            var c;
            if (null == o) break;
            l.onClick = null != (c = o.onClick) ? c : o, l.onContextMenu = o.onContextMenu
        }
        return (0, i.createElement)(a, p(f({}, l), {
          key: t
        }), e)
      }
    }),
    formatToPlainString: Chunk125697.stringFormatter,
    formatToMarkdownString: Chunk125697.markdownFormatter,
    formatToParts: Chunk125697.astFormatter
  }),
  b = e => (0, c.j1)(e, E)