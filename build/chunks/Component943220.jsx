/** Chunk was on web.js **/
/** chunk id: 943220, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk763754 = require("./763754.js"),
  Chunk635071 = require("./635071.jsx"),
  Chunk812299 = require("./812299.jsx");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
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

function c(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function u(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function d(e) {
  var t, n;
  let o = (0, i.Ay)(e.message),
    c = (0, s.y)({
      message: e.message,
      channel: e.channel,
      user: null != (t = null == (n = e.message) ? true : n.author) ? t : e.userOverride,
      compact: !!e.compact,
      isRepliedMessage: !!e.isRepliedMessage
    }),
    d = {};
  return null != c && (d[a.w.SYSTEM_TAG] = c), (0, r.jsx)(a.A, u(l({}, e), {
    author: o,
    decorations: d
  }))
}