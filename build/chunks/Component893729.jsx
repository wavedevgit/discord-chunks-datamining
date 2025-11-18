/** Chunk was on web.js **/
/** chunk id: 893729, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk518738 = require("./518738.js"),
  Chunk786761 = require("./786761.js"),
  Chunk3148 = require("./3148.js"),
  Chunk753206 = require("./753206.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk5192 = require("./5192.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk554165 = require("./554165.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function v(e) {
  let {
    guildId: t,
    role: n,
    theme: a,
    content: E = m.intl.string(m.t["6OSasb"]),
    className: y
  } = e, v = (0, s.e7)([_.default], () => _.default.getCurrentUser()), I = p.ZP.useName(t, null, v), T = (0, c.Kz)(n), S = i.useMemo(() => (0, u.e5)(O(b({}, (0, d.ZP)({
    channelId: "0",
    content: E,
    tts: true,
    type: true,
    messageReference: true,
    allowedMentions: true,
    author: v
  })), {
    state: h.yb.SENT,
    id: "0"
  })), [v, E]), A = {
    nick: I,
    colorString: n.colorString,
    colorStrings: n.colorStrings
  };
  return (0, r.jsx)(l.f6W, {
    theme: a,
    children: e => (0, r.jsx)("div", {
      className: o()(e, g.container, y),
      children: (0, r.jsx)(f.Z, {
        hideTimestamp: true,
        author: A,
        roleIcon: T,
        message: S,
        isGroupStart: true,
        disableInteraction: true
      })
    })
  })
}