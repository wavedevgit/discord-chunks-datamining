/** Chunk was on web.js **/
/** chunk id: 64078, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AI: () => f,
  EL: () => m,
  SE: () => p,
  ew: () => _
});
var Chunk570140 = require("./570140.js"),
  Chunk314897 = require("./314897.js"),
  Chunk351780 = require("./351780.js"),
  Chunk843693 = require("./843693.js"),
  Chunk112606 = require("./112606.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}

function u(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function d(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function f(e) {
  r.Z.dispatch({
    type: "POGGERMODE_SETTINGS_UPDATE",
    settings: e
  });
  let t = c({}, o.Z.getState(), e);
  (0, s.Z)(t)
}

function p(e) {
  r.Z.dispatch(c({
    type: "POGGERMODE_UPDATE_COMBO"
  }, e))
}

function _(e) {
  r.Z.dispatch({
    type: "POGGERMODE_UPDATE_MESSAGE_COMBO",
    comboMessage: d(c({}, e), {
      displayed: true
    })
  })
}

function m(e, t) {
  var n;
  let o = i.default.getId(),
    s = a.ZP.getUserCombo(o, e);
  null != s && r.Z.dispatch({
    type: "POGGERMODE_UPDATE_MESSAGE_COMBO",
    comboMessage: {
      combo: s,
      channelId: e,
      messageId: t,
      displayed: false
    }
  });
  let l = null != s && (null == s ? true : s.value) > 0 ? (null != (n = null == s ? true : s.multiplier) ? n : 0) + 1 : 1;
  r.Z.dispatch({
    type: "POGGERMODE_UPDATE_COMBO",
    channelId: e,
    userId: o,
    multiplier: l,
    value: 0
  })
}