/** Chunk was on web.js **/
/** chunk id: 435328, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => f
});
var Chunk46054 = require("./46054.js"),
  Chunk556300 = require("./556300.jsx"),
  Chunk49005 = require("./49005.jsx");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function o(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      s(e, t, n[t])
    })
  }
  return e
}

function l(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function c(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : l(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let u = c(o({}, Chunk46054.A.guildEventRules.link), {
    react: (0, Chunk49005.A)({
      enableBuildOverrides: false,
      mustConfirmExternalLink: true
    }).react
  }),
  d = c(o({}, Chunk46054.A.guildEventRules.channelMention), {
    react: (0, Chunk556300.A)({
      enableBuildOverrides: false,
      shouldCloseDefaultModals: true,
      shouldStopPropagation: true
    }).react
  }),
  f = Chunk46054.A.reactParserFor(c(o({}, Chunk46054.A.guildEventRules), {
    link: u,
    channelMention: d
  }))