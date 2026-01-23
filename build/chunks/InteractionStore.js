/** Chunk was on web.js **/
/** chunk id: 436283, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i;
require.d(exports, {
  Ay: () => G
}), require("./896048.js");
var a, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk843472 = require("./843472.js"),
  Chunk155718 = require("./155718.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk927813 = require("./927813.js"),
  Chunk337591 = require("./337591.js");

function _(e, t, n) {
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
      _(e, t, n[t])
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
let E = 5 * Chunk927813.A.Millis.MINUTE,
  y = 10 * Chunk927813.A.Millis.SECOND,
  b = {},
  O = {},
  v = {},
  A = {};

function I() {
  b = {}, O = {}, v = {}, A = {}, setInterval(() => {
    let e = Date.now();
    for (let [t, n] of Object.entries(A)) e - n.insertedAt > y && delete A[t]
  }, E)
}

function S(e) {
  let {
    nonce: t,
    messageId: n,
    data: r,
    onCreate: i,
    onCancel: a,
    onSuccess: s,
    onFailure: o
  } = e;
  null != n && (O[n] = t, v[t] = n), b[t] = {
    state: p.m.QUEUED,
    data: r,
    onCreate: i,
    onCancel: a,
    onSuccess: s,
    onFailure: o
  }
}

function T(e) {
  var t;
  let {
    nonce: n,
    interactionId: r
  } = e;
  if (null == n) returnfalse;
  let i = b[n];
  if (null == i || i.state !== p.m.QUEUED) returnfalse;
  i.state = p.m.CREATED, null == (t = i.onCreate) || t.call(i, r)
}

function C(e) {
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
    let e = b[t.nonce];
    if (null == e) returnfalse;
    null == (n = e.onSuccess) || n.call(e), k(t.nonce)
  }
}

function R(e) {
  var t;
  let {
    nonce: n,
    errorCode: r,
    errorMessage: i,
    status: a,
    reasonCode: s
  } = e;
  if (null == n) returnfalse;
  let o = b[n];
  if (null == o) returnfalse;
  null == (t = o.onFailure) || t.call(o, r, i, a, s), o.data.interactionType === c.G4.APPLICATION_COMMAND ? k(n) : b[n] = g(h({}, o), {
    state: p.m.FAILED,
    errorCode: r,
    errorMessage: i
  })
}

function w(e) {
  let {
    channelId: t
  } = e;
  if (null == d.A.getChannel(t)) returnfalse;
  for (let [e, t] of Object.entries(b)) t.state === p.m.FAILED && k(e)
}

function P(e) {
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
    a = u.default.getId(),
    s = r.find(e => e.user_id === a && e.session_id === i);
  if (null == s || null == s.nonce) return;
  let o = A[s.nonce];
  null == o ? (t = v[s.nonce], n = b[s.nonce]) : (t = o.messageId, n = o.interaction), null != n && null != t && (k(s.nonce), null != t && "channelId" in n.data && l.A.deleteMessage(n.data.channelId, t, true))
}

function M(e) {
  var t;
  if (null == e) returnfalse;
  let n = b[e];
  if (null == n) returnfalse;
  null == (t = n.onSuccess) || t.call(n), k(e)
}

function k(e) {
  if (null != A[e]) return void delete A[e];
  let t = b[e];
  delete b[e];
  let n = v[e];
  null != n && delete O[n], delete v[e], A[e] = {
    insertedAt: Date.now(),
    nonce: e,
    messageId: n,
    interaction: t
  }
}
class U extends(a = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(u.default, d.A)
  }
  getInteraction(e) {
    let t = O[e.id];
    return null != t ? b[t] : null
  }
  getMessageInteractionStates() {
    let e = {};
    for (let [t, n] of Object.entries(b)) {
      let r = v[t];
      null != r && (e[r] = n.state)
    }
    return e
  }
  canQueueInteraction(e, t) {
    let n = O[e];
    return (null == n || null == b[n] || b[n].state === p.m.FAILED) && (null == b[t] || b[t].state === p.m.FAILED)
  }
  getIFrameModalApplicationId() {
    return i
  }
  getIFrameModalKey() {
    return r
  }
}
_(U, "displayName", "InteractionStore");
let G = new U(Chunk73153.h, {
  LOGOUT: I,
  INTERACTION_QUEUE: S,
  INTERACTION_CREATE: T,
  INTERACTION_SUCCESS: C,
  INTERACTION_FAILURE: R,
  MESSAGE_CREATE: N,
  CHANNEL_SELECT: w,
  INTERACTION_IFRAME_MODAL_CREATE: D,
  INTERACTION_IFRAME_MODAL_CLOSE: x,
  INTERACTION_IFRAME_MODAL_KEY_CREATE: L,
  INTERACTION_MODAL_CREATE: P,
  EMBEDDED_ACTIVITY_UPDATE_V2: j
})