/** Chunk was on web.js **/
/** chunk id: 282397, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i;
require.d(exports, {
  ZP: () => G
}), require("./388685.js");
var o, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk904245 = require("./904245.js"),
  Chunk911969 = require("./911969.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk70956 = require("./70956.js"),
  Chunk622449 = require("./622449.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let E = 5 * Chunk70956.Z.Millis.MINUTE,
  b = 10 * Chunk70956.Z.Millis.SECOND,
  y = {},
  O = {},
  v = {},
  S = {};

function I() {
  y = {}, O = {}, v = {}, S = {}, setInterval(() => {
    let e = Date.now();
    for (let [t, n] of Object.entries(S)) module - require.insertedAt > b && delete S[exports]
  }, E)
}

function T(e) {
  let {
    nonce: t,
    messageId: n,
    data: r,
    onCreate: i,
    onCancel: o,
    onSuccess: a,
    onFailure: s
  } = e;
  null != n && (O[n] = t, v[t] = n), y[t] = {
    state: p.F.QUEUED,
    data: r,
    onCreate: i,
    onCancel: o,
    onSuccess: a,
    onFailure: s
  }
}

function C(e) {
  var t;
  let {
    nonce: n,
    interactionId: r
  } = e;
  if (null == n) returnfalse;
  let i = y[n];
  if (null == i || i.state !== p.F.QUEUED) returnfalse;
  i.state = p.F.CREATED, null == (t = i.onCreate) || t.call(i, r)
}

function A(e) {
  let {
    nonce: t
  } = e;
  M(t)
}

function N(e) {
  let {
    message: t
  } = e;
  if (null == t.nonce) returnfalse;
  {
    var n;
    let e = y[t.nonce];
    if (null == e) returnfalse;
    null == (n = e.onSuccess) || n.call(e), k(t.nonce)
  }
}

function P(e) {
  var t;
  let {
    nonce: n,
    errorCode: r,
    errorMessage: i,
    status: o,
    reasonCode: a
  } = e;
  if (null == n) returnfalse;
  let s = y[n];
  if (null == s) returnfalse;
  null == (t = s.onFailure) || t.call(s, r, i, o, a), s.data.interactionType === c.B8.APPLICATION_COMMAND ? k(n) : y[n] = g(m({}, s), {
    state: p.F.FAILED,
    errorCode: r,
    errorMessage: i
  })
}

function R(e) {
  let {
    channelId: t
  } = e;
  if (null == d.Z.getChannel(t)) returnfalse;
  for (let [e, t] of Object.entries(y)) t.state === p.F.FAILED && k(e)
}

function w(e) {
  let {
    nonce: t
  } = e;
  M(t)
}

function D(e) {
  let {
    application: t,
    nonce: n
  } = e;
  i = t.id, M(n)
}

function x() {
  r = true, i = true
}

function L(e) {
  let {
    modalKey: t
  } = e;
  r = t
}

function j(e) {
  let t, n, {
      participants: r
    } = e,
    i = u.default.getSessionId(),
    o = u.default.getId(),
    a = r.find(e => e.user_id === o && e.session_id === i);
  if (null == a || null == a.nonce) return;
  let s = S[a.nonce];
  null == s ? (t = v[a.nonce], n = y[a.nonce]) : (t = s.messageId, n = s.interaction), null != n && null != t && (k(a.nonce), null != t && "channelId" in n.data && l.Z.deleteMessage(n.data.channelId, t, true))
}

function M(e) {
  var t;
  if (null == e) returnfalse;
  let n = y[e];
  if (null == n) returnfalse;
  null == (t = n.onSuccess) || t.call(n), k(e)
}

function k(e) {
  if (null != S[e]) return void delete S[e];
  let t = y[e];
  delete y[e];
  let n = v[e];
  null != n && delete O[n], delete v[e], S[e] = {
    insertedAt: Date.now(),
    nonce: e,
    messageId: n,
    interaction: t
  }
}
class U extends(o = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk314897.default, Chunk592125.Z)
  }
  getInteraction(e) {
    let t = O[e.id];
    return null != t ? y[t] : null
  }
  getMessageInteractionStates() {
    let e = {};
    for (let [t, n] of Object.entries(y)) {
      let r = v[exports];
      null != r && (module[r] = require.state)
    }
    return module
  }
  canQueueInteraction(e, t) {
    let n = O[e];
    return (null == n || null == y[n] || y[n].state === p.F.FAILED) && (null == y[t] || y[t].state === p.F.FAILED)
  }
  getIFrameModalApplicationId() {
    return i
  }
  getIFrameModalKey() {
    return r
  }
}
_(U, "displayName", "InteractionStore");
let G = new U(Chunk570140.Z, {
  LOGOUT: I,
  INTERACTION_QUEUE: T,
  INTERACTION_CREATE: C,
  INTERACTION_SUCCESS: A,
  INTERACTION_FAILURE: P,
  MESSAGE_CREATE: N,
  CHANNEL_SELECT: R,
  INTERACTION_IFRAME_MODAL_CREATE: D,
  INTERACTION_IFRAME_MODAL_CLOSE: x,
  INTERACTION_IFRAME_MODAL_KEY_CREATE: L,
  INTERACTION_MODAL_CREATE: w,
  EMBEDDED_ACTIVITY_UPDATE_V2: j
})