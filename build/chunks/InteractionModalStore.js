/** Chunk was on web.js **/
/** chunk id: 471073, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a, o, s;
require.d(exports, {
  Z: () => A,
  i: () => E
});
var l, Chunk512722 = require("./512722.js"),
  u = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk904245 = require("./904245.js"),
  Chunk911969 = require("./911969.js"),
  Chunk603721 = require("./603721.js"),
  Chunk70956 = require("./70956.js");

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

function b() {
  return r = null, i = null, a = null, o = null, s = null, true
}

function y(e) {
  let {
    messageId: t,
    nonce: n,
    data: l,
    preflight: c
  } = e;
  switch (l.interactionType) {
    case p.B8.APPLICATION_COMMAND:
      return a = t, o = l.channelId, s = n, false;
    case p.B8.MODAL_SUBMIT:
      u()(null == r || 1 === i || 2 === i, "cannot submit multiple modals at once"), r = n, i = 0;
      let d = e => {
        setTimeout(() => {
          r === n && 0 === i && (0, h.yr)(n)
        }, e)
      };
      return null != c ? (d(2 * m.Z.Millis.MINUTE), c.then(() => d(10 * m.Z.Millis.SECOND)).catch(() => (0, h.yr)(n))) : d(10 * m.Z.Millis.SECOND), true;
    default:
      returnfalse
  }
}

function O(e) {
  let {
    nonce: t
  } = e;
  return t === s && (_.Z.deleteMessage(o, a, true), a = null, o = null, s = null), false
}

function v(e) {
  let {
    nonce: t
  } = e;
  return t === s && (_.Z.deleteMessage(o, a, true), a = null, o = null, s = null), false
}

function I(e) {
  let {
    nonce: t
  } = e;
  return null != t && t === r && (i = 2, true)
}

function S(e) {
  let {
    nonce: t
  } = e;
  return null != t && t === r && (i = 1, true)
}
class T extends(l = Chunk442837.ZP.Store) {
  getModalState(e) {
    return e !== r ? null : i
  }
}
g(T, "displayName", "InteractionModalStore");
let A = new T(Chunk570140.Z, {
  LOGOUT: b,
  INTERACTION_MODAL_CREATE: O,
  INTERACTION_IFRAME_MODAL_CREATE: v,
  INTERACTION_QUEUE: y,
  INTERACTION_SUCCESS: I,
  INTERACTION_FAILURE: S
})