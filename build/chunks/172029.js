/** Chunk was on web.js **/
/** chunk id: 172029, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk569545 = require("./569545.js"),
  Chunk19780 = require("./19780.js"),
  Chunk981631 = require("./981631.js");

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
let f = {},
  _ = {};

function p(e) {
  let {
    channelId: t,
    currentVoiceChannelId: n
  } = e;
  if (t === n) returnfalse;
  _ = {}, f = {}
}

function h(e) {
  let {
    id: t
  } = e;
  for (let [e, n] of(delete f[t], Object.entries(_))) t === n && delete _[e]
}

function m(e) {
  var t, n;
  let {
    channelId: r,
    sendMessageOptions: i,
    message: o,
    optimistic: l
  } = e;
  if (r !== a.Z.getChannelId()) returnfalse;
  if (l) {
    let e = null == i || null == (n = i.activityAction) ? true : n.targetUserId;
    return null != e && (f[o.id] = e, false)
  }
  if (null == o.nonce || (null == (t = o.activity) ? true : t.type) !== s.mFx.STREAM_REQUEST) returnfalse;
  let u = f[o.nonce];
  if (null == u) returnfalse;
  delete f[o.nonce], _ = d(c({}, _), {
    [u]: o.id
  })
}

function g(e) {
  let {
    streamKey: t
  } = e, {
    ownerId: n
  } = o.my(t);
  if (null == _[n]) returnfalse;
  delete _[n]
}
class E extends Chunk442837.ZP.Store {
  getPendingRequestForUser(e) {
    return _[e]
  }
}
let b = new E(Chunk570140.Z, {
  STREAM_WATCH: g,
  MESSAGE_CREATE: m,
  MESSAGE_DELETE: h,
  VOICE_CHANNEL_SELECT: p
})