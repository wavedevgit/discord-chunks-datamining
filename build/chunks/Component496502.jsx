/** Chunk was on web.js **/
/** chunk id: 496502, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  v: () => _
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk442433 = require("./442433.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk927578 = require("./927578.js");

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

function p(e, t, i, o) {
  let c = s.default.getCurrentUser();
  (null != t || l.Ay.canUseCustomCallSounds(c)) && (0, a.L3)(e, async () => {
    let {
      default: e
    } = await n.e("86266").then(n.bind(n, 313921));
    return n => (0, r.jsx)(e, f(u({}, n), {
      soundGuild: t,
      activeCallGuildId: o,
      sound: i
    }))
  })
}

function _(e, t) {
  return i.useCallback(n => {
    n.stopPropagation();
    let r = o.A.getGuild(e.guildId),
      i = s.default.getCurrentUser();
    (null != r || l.Ay.canUseCustomCallSounds(i)) && p(n, r, e, t)
  }, [e, t])
}