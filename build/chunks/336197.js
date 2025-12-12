/** Chunk was on web.js **/
/** chunk id: 336197, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk727429 = require("./727429.js"),
  Chunk982168 = require("./982168.js"),
  Chunk703656 = require("./703656.js"),
  Chunk769654 = require("./769654.js"),
  Chunk592125 = require("./592125.js"),
  Chunk754688 = require("./754688.js"),
  Chunk849027 = require("./849027.js"),
  Chunk927723 = require("./927723.jsx"),
  Chunk981631 = require("./981631.js");

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
  if (null == e.channelId) return e;
  let t = s.Z.getChannel(e.channelId);
  if (null == t) return e;
  let n = (0, r.e)(t);
  return m(p({}, e), {
    guildId: null != n ? n : d.ME
  })
}
async function g(e, t) {
  let n = (0, l.Qj)(e);
  if (null != n && !await (0, c.Z)(n)) return void(0, u.k)({
    kind: "channel"
  });
  if (null == n) return void(0, o.uL)(e, t);
  let r = h(n);
  return null == r.channelId ? void(0, a.X)(r.guildId) : (0, i.WF)(r.channelId) && (0, i.WF)(r.threadId) ? void(null != r.threadId ? (0, o.uL)(d.Z5c.CHANNEL_THREAD_VIEW(r.guildId, r.channelId, r.threadId, r.messageId), t) : (0, o.uL)(d.Z5c.CHANNEL(r.guildId, r.channelId, r.messageId), t)) : void(0, u.V)()
}