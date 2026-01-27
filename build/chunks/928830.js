/** Chunk was on web.js **/
/** chunk id: 928830, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Nu: () => _,
  O9: () => f,
  iq: () => h,
  oG: () => p
});
var Chunk73153 = require("./73153.js"),
  Chunk961350 = require("./961350.js"),
  Chunk3137 = require("./3137.js"),
  Chunk559908 = require("./559908.js"),
  Chunk862570 = require("./862570.js");

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
  r.h.dispatch({
    type: "POGGERMODE_SETTINGS_UPDATE",
    settings: e
  });
  let t = c({}, a.A.getState(), e);
  (0, s.A)(t)
}

function p(e) {
  r.h.dispatch(c({
    type: "POGGERMODE_UPDATE_COMBO"
  }, e))
}

function _(e) {
  r.h.dispatch({
    type: "POGGERMODE_UPDATE_MESSAGE_COMBO",
    comboMessage: d(c({}, e), {
      displayed: true
    })
  })
}

function h(e, t) {
  var n;
  let a = i.default.getId(),
    s = o.Ay.getUserCombo(a, e);
  null != s && r.h.dispatch({
    type: "POGGERMODE_UPDATE_MESSAGE_COMBO",
    comboMessage: {
      combo: s,
      channelId: e,
      messageId: t,
      displayed: false
    }
  });
  let l = null != s && (null == s ? true : s.value) > 0 ? (null != (n = null == s ? true : s.multiplier) ? n : 0) + 1 : 1;
  r.h.dispatch({
    type: "POGGERMODE_UPDATE_COMBO",
    channelId: e,
    userId: a,
    multiplier: l,
    value: 0
  })
}