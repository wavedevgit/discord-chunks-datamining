/** Chunk was on web.js **/
/** chunk id: 253118, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk904245 = require("./904245.js"),
  Chunk739566 = require("./739566.js"),
  Chunk834129 = require("./834129.jsx"),
  Chunk388032 = require("./388032.jsx");

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

function p(e) {
  let {
    message: t,
    usernameHook: n,
    onClickPins: c,
    compact: d
  } = e, p = (0, o.ZP)(t), _ = p.nick, m = n(p), h = () => {
    if (null == t.messageReference) return;
    let {
      channel_id: e,
      message_id: n
    } = t.messageReference;
    a.Z.jumpToMessage({
      channelId: e,
      messageId: n,
      flash: true
    })
  }, g = () => null != t.messageReference ? null == c ? l.intl.format(l.t.lD5tup, {
    usernameHook: m,
    username: _,
    messageOnClick: h
  }) : l.intl.format(l.t.yIDvPL, {
    usernameHook: m,
    username: _,
    pinsActionOnClick: c,
    messageOnClick: h
  }) : null == c ? l.intl.format(l.t.vfkjqx, {
    usernameHook: m,
    username: _
  }) : l.intl.format(l.t.R7vZGZ, {
    usernameHook: m,
    username: _,
    pinsActionOnClick: c
  }), E = {
    iconNode: (0, r.jsx)(i.qQX, {
      size: "sm",
      color: "currentColor"
    })
  };
  return (0, r.jsx)(s.Z, f(u({}, E), {
    timestamp: t.timestamp,
    compact: d,
    children: g()
  }))
}