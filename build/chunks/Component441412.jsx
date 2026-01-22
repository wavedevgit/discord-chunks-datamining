/** Chunk was on web.js **/
/** chunk id: 441412, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk843472 = require("./843472.js"),
  Chunk763754 = require("./763754.js"),
  Chunk888675 = require("./888675.jsx"),
  Chunk985018 = require("./985018.jsx");

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
  } = e, p = (0, s.Ay)(t), _ = p.nick, h = n(p), m = () => {
    if (null == t.messageReference) return;
    let {
      channel_id: e,
      message_id: n
    } = t.messageReference;
    a.A.jumpToMessage({
      channelId: e,
      messageId: n,
      flash: true
    })
  }, g = () => null != t.messageReference ? null == c ? l.intl.format(l.t.lD5tup, {
    usernameHook: h,
    username: _,
    messageOnClick: m
  }) : l.intl.format(l.t.yIDvPL, {
    usernameHook: h,
    username: _,
    pinsActionOnClick: c,
    messageOnClick: m
  }) : null == c ? l.intl.format(l.t.vfkjqx, {
    usernameHook: h,
    username: _
  }) : l.intl.format(l.t.R7vZGZ, {
    usernameHook: h,
    username: _,
    pinsActionOnClick: c
  }), E = {
    iconNode: (0, r.jsx)(i.tsw, {
      size: "sm",
      color: "currentColor"
    })
  };
  return (0, r.jsx)(o.A, f(u({}, E), {
    timestamp: t.timestamp,
    compact: d,
    children: g()
  }))
}