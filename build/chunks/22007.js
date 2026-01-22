/** Chunk was on web.js **/
/** chunk id: 22007, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g
});
var Chunk584682 = require("./584682.js"),
  Chunk376708 = require("./376708.js"),
  Chunk976860 = require("./976860.js"),
  Chunk345942 = require("./345942.js"),
  Chunk734057 = require("./734057.js"),
  Chunk376943 = require("./376943.js"),
  Chunk150129 = require("./150129.js"),
  Chunk9588 = require("./9588.jsx"),
  Chunk652215 = require("./652215.js");

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

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function m(e) {
  if (null == e.channelId) return e;
  let t = o.A.getChannel(e.channelId);
  if (null == t) return e;
  let n = (0, r.j)(t);
  return h(p({}, e), {
    guildId: null != n ? n : d.ME
  })
}
async function g(e, t) {
  let n = (0, l.vu)(e);
  if (null != n && !await (0, c.A)(n)) return void(0, u.K)({
    kind: "channel"
  });
  if (null == n) return void(0, a.pX)(e, t);
  let r = m(n);
  null == r.channelId ? (0, s.u)(r.guildId) : (0, i.C$)(r.channelId) && (0, i.C$)(r.threadId) ? null != r.threadId ? (0, a.pX)(d.BVt.CHANNEL_THREAD_VIEW(r.guildId, r.channelId, r.threadId, r.messageId), t) : (0, a.pX)(d.BVt.CHANNEL(r.guildId, r.channelId, r.messageId), t) : (0, u.E)()
}