/** Chunk was on web.js **/
/** chunk id: 282397, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i;
require.d(exports, {
  ZP: () => G
}), require("./388685.js");
var a, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk904245 = require("./904245.js"),
  Chunk911969 = require("./911969.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk70956 = require("./70956.js"),
  Chunk622449 = require("./622449.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function m(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let E = 5 * Chunk70956.Z.Millis.MINUTE,
  b = 10 * Chunk70956.Z.Millis.SECOND,
  y = {},
  O = {},
  v = {},
  I = {};

function T() {
  y = {}, O = {}, v = {}, I = {}, setInterval(() => {
    let e = Date.now();
    for (let [t, n] of Object.entries(I)) module - require.insertedAt > b && delete I[exports]
  }, E)
}

function S(e) {
  let {
    nonce: t,
    messageId: n,
    data: r,
    onCreate: i,
    onCancel: a,
    onSuccess: o,
    onFailure: s
  } = e;
  null != n && (O[n] = t, v[t] = n), y[t] = {
    state: _.F.QUEUED,
    data: r,
    onCreate: i,
    onCancel: a,
    onSuccess: o,
    onFailure: s
  }
}

function A(e) {
  var t;
  let {
    nonce: n,
    interactionId: r
  } = e;
  if (null == n) returnfalse;
  let i = y[n];
  if (null == i || i.state !== _.F.QUEUED) returnfalse;
  i.state = _.F.CREATED, null == (t = i.onCreate) || t.call(i, r)
}

function C(e) {
  let {
    nonce: t
  } = e;
  k(t)
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
    null == (n = e.onSuccess) || n.call(e), j(t.nonce)
  }
}

function R(e) {
  var t;
  let {
    nonce: n,
    errorCode: r,
    errorMessage: i,
    status: a,
    reasonCode: o
  } = e;
  if (null == n) returnfalse;
  let s = y[n];
  if (null == s) returnfalse;
  null == (t = s.onFailure) || t.call(s, r, i, a, o), s.data.interactionType === c.B8.APPLICATION_COMMAND ? j(n) : y[n] = g(h({}, s), {
    state: _.F.FAILED,
    errorCode: r,
    errorMessage: i
  })
}

function P(e) {
  let {
    channelId: t
  } = e;
  if (null == d.Z.getChannel(t)) returnfalse;
  for (let [e, t] of Object.entries(y)) t.state === _.F.FAILED && j(e)
}

function D(e) {
  let {
    nonce: t
  } = e;
  k(t)
}

function w(e) {
  let {
    application: t,
    nonce: n
  } = e;
  i = t.id, k(n)
}

function L() {
  r = true, i = true
}

function x(e) {
  let {
    modalKey: t
  } = e;
  r = t
}

function M(e) {
  let t, n, {
      participants: r
    } = e,
    i = u.default.getSessionId(),
    a = u.default.getId(),
    o = r.find(e => e.user_id === a && e.session_id === i);
  if (null == o || null == o.nonce) return;
  let s = I[o.nonce];
  null == s ? (t = v[o.nonce], n = y[o.nonce]) : (t = s.messageId, n = s.interaction), null != n && null != t && (j(o.nonce), null != t && "channelId" in n.data && l.Z.deleteMessage(n.data.channelId, t, true))
}

function k(e) {
  var t;
  if (null == e) returnfalse;
  let n = y[e];
  if (null == n) returnfalse;
  null == (t = n.onSuccess) || t.call(n), j(e)
}

function j(e) {
  if (null != I[e]) return void delete I[e];
  let t = y[e];
  delete y[e];
  let n = v[e];
  null != n && delete O[n], delete v[e], I[e] = {
    insertedAt: Date.now(),
    nonce: e,
    messageId: n,
    interaction: t
  }
}
class U extends(a = Chunk442837.ZP.Store) {
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
    return (null == n || null == y[n] || y[n].state === _.F.FAILED) && (null == y[t] || y[t].state === _.F.FAILED)
  }
  getIFrameModalApplicationId() {
    return i
  }
  getIFrameModalKey() {
    return r
  }
}
p(U, "displayName", "InteractionStore");
let G = new U(Chunk570140.Z, {
  LOGOUT: T,
  INTERACTION_QUEUE: S,
  INTERACTION_CREATE: A,
  INTERACTION_SUCCESS: C,
  INTERACTION_FAILURE: R,
  MESSAGE_CREATE: N,
  CHANNEL_SELECT: P,
  INTERACTION_IFRAME_MODAL_CREATE: w,
  INTERACTION_IFRAME_MODAL_CLOSE: L,
  INTERACTION_IFRAME_MODAL_KEY_CREATE: x,
  INTERACTION_MODAL_CREATE: D,
  EMBEDDED_ACTIVITY_UPDATE_V2: M
})