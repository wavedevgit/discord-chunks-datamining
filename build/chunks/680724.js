/** Chunk was on web.js **/
/** chunk id: 680724, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => A
}), require("./896048.js");
var Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk652896 = require("./652896.js"),
  Chunk383501 = require("./383501.js"),
  Chunk652215 = require("./652215.js");

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
  p = {},
  _ = null;

function h() {
  p = {}, f = {}
}

function m(e) {
  let {
    channelId: t,
    currentVoiceChannelId: n
  } = e;
  if (t === n) returnfalse;
  h()
}

function g(e) {
  let {
    id: t
  } = e;
  for (let [e, n] of(delete f[t], Object.entries(p))) t === n && delete p[e]
}

function E(e) {
  var t, n;
  let {
    channelId: r,
    sendMessageOptions: i,
    message: a,
    optimistic: l
  } = e;
  if (r !== s.A.getChannelId()) returnfalse;
  if (l) {
    let e = null == i || null == (n = i.activityAction) ? true : n.targetUserId;
    return null != e && (f[a.id] = e, false)
  }
  if (null == a.nonce || (null == (t = a.activity) ? true : t.type) !== o.xL.STREAM_REQUEST) returnfalse;
  let u = f[a.nonce];
  if (null == u) returnfalse;
  delete f[a.nonce], p = d(c({}, p), {
    [u]: a.id
  })
}

function b(e) {
  let {
    streamKey: t
  } = e, {
    ownerId: n
  } = a.Iy(t);
  if (null == p[n]) returnfalse;
  delete p[n]
}

function y() {
  if (s.A.getWasMoved()) {
    if (s.A.getChannelId() === _) returnfalse;
    _ = s.A.getChannelId(), h()
  } else {
    if (null == _) returnfalse;
    _ = null
  }
}
class O extends Chunk311907.Ay.Store {
  initialize() {
    this.waitFor(s.A)
  }
  getPendingRequestForUser(e) {
    return p[e]
  }
}
let A = new O(Chunk73153.h, {
  STREAM_WATCH: b,
  MESSAGE_CREATE: E,
  MESSAGE_DELETE: g,
  VOICE_CHANNEL_SELECT: m,
  VOICE_STATE_UPDATES: y,
  LOGOUT: h
})