/** Chunk was on web.js **/
/** chunk id: 750128, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a, s, o;
require.d(exports, {
  A: () => T,
  Z: () => E
});
var l, Chunk284009 = require("./284009.js"),
  u = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk843472 = require("./843472.js"),
  Chunk155718 = require("./155718.js"),
  Chunk706727 = require("./706727.js"),
  Chunk927813 = require("./927813.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var E = function(e) {
  return e[e.IN_FLIGHT = 0] = "IN_FLIGHT", e[e.ERRORED = 1] = "ERRORED", e[e.SUCCEEDED = 2] = "SUCCEEDED", e
}({});

function y() {
  return r = null, i = null, a = null, s = null, o = null, true
}

function b(e) {
  let {
    messageId: t,
    nonce: n,
    data: l,
    preflight: c
  } = e;
  switch (l.interactionType) {
    case _.G4.APPLICATION_COMMAND:
      return a = t, s = l.channelId, o = n, false;
    case _.G4.MODAL_SUBMIT:
      u()(null == r || 1 === i || 2 === i, "cannot submit multiple modals at once"), r = n, i = 0;
      let d = e => {
        setTimeout(() => {
          r === n && 0 === i && (0, h.C1)(n)
        }, e)
      };
      return null != c ? (d(2 * m.A.Millis.MINUTE), c.then(() => d(10 * m.A.Millis.SECOND)).catch(() => (0, h.C1)(n))) : d(10 * m.A.Millis.SECOND), true;
    default:
      returnfalse
  }
}

function O(e) {
  let {
    nonce: t
  } = e;
  return t === o && (p.A.deleteMessage(s, a, true), a = null, s = null, o = null), false
}

function v(e) {
  let {
    nonce: t
  } = e;
  return t === o && (p.A.deleteMessage(s, a, true), a = null, s = null, o = null), false
}

function A(e) {
  let {
    nonce: t
  } = e;
  return null != t && t === r && (i = 2, true)
}

function I(e) {
  let {
    nonce: t
  } = e;
  return null != t && t === r && (i = 1, true)
}
class S extends(l = Chunk311907.Ay.Store) {
  getModalState(e) {
    return e !== r ? null : i
  }
}
g(S, "displayName", "InteractionModalStore");
let T = new S(Chunk73153.h, {
  LOGOUT: y,
  INTERACTION_MODAL_CREATE: O,
  INTERACTION_IFRAME_MODAL_CREATE: v,
  INTERACTION_QUEUE: b,
  INTERACTION_SUCCESS: A,
  INTERACTION_FAILURE: I
})