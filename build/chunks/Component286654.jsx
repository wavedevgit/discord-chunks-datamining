/** Chunk was on web.js **/
/** chunk id: 286654, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  z: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk239091 = require("./239091.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function d(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function _(e, t, i, o) {
  let c = s.default.getCurrentUser();
  (null != t || l.ZP.canUseCustomCallSounds(c)) && (0, a.jW)(e, async () => {
    let {
      default: e
    } = await n.e("93741").then(n.bind(n, 547652));
    return n => (0, r.jsx)(e, f(u({}, n), {
      soundGuild: t,
      activeCallGuildId: o,
      sound: i
    }))
  })
}

function p(e, t) {
  return i.useCallback(n => {
    n.stopPropagation();
    let r = o.Z.getGuild(e.guildId),
      i = s.default.getCurrentUser();
    (null != r || l.ZP.canUseCustomCallSounds(i)) && _(n, r, e, t)
  }, [e, t])
}