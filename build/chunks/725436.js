/** Chunk was on web.js **/
/** chunk id: 725436, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  m: () => f
});
var Chunk454585 = require("./454585.js"),
  Chunk551452 = require("./551452.jsx"),
  Chunk532901 = require("./532901.jsx");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      o(e, t, n[t])
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
let u = c(s({}, Chunk454585.Z.guildEventRules.link), {
    react: (0, Chunk532901.Z)({
      enableBuildOverrides: false,
      mustConfirmExternalLink: true
    }).react
  }),
  d = c(s({}, Chunk454585.Z.guildEventRules.channelMention), {
    react: (0, Chunk551452.Z)({
      enableBuildOverrides: false,
      shouldCloseDefaultModals: true,
      shouldStopPropagation: true
    }).react
  }),
  f = Chunk454585.Z.reactParserFor(c(s({}, Chunk454585.Z.guildEventRules), {
    link: u,
    channelMention: d
  }))