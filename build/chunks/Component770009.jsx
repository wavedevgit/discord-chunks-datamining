/** Chunk was on web.js **/
/** chunk id: 770009, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk52396 = require("./52396.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk970184 = require("./970184.jsx"),
  Chunk151200 = require("./151200.jsx"),
  Chunk96513 = require("./96513.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e) {
  let {
    contentInventoryEntry: t,
    channel: n
  } = e, {
    parsedEntry: i
  } = (0, s.B)();
  return (0, r.jsx)(u.Z, m(p({}, i), {
    entry: t,
    channel: n
  }))
}

function g(e) {
  let t = (0, c.CJ)();
  a()(null != t, "Component context is not defined. Did you forget to wrap your component in a ComponentStateContextProvider?");
  let {
    channelId: n
  } = t, i = (0, o.e7)([l.Z], () => l.Z.getChannel(n));
  return a()(null != i, "channel must be defined"), (0, r.jsx)(s.r, {
    location: d._.EMBED,
    entry: e.contentInventoryEntry,
    channel: i,
    errorFallback: null,
    children: (0, r.jsx)(h, m(p({}, e), {
      channel: i
    }))
  })
}