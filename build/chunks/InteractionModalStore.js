/** Chunk was on 8739 **/
/** chunk id: 471073, original params: e,t,n (module,exports,require) **/
let l, i, r, u, a;
require.d(exports, {
  Z: () => _,
  i: () => g
});
var o, c, d, Chunk512722 = require("./512722.js"),
  E = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk904245 = require("./904245.js"),
  Chunk911969 = require("./911969.js"),
  Chunk603721 = require("./603721.js"),
  Chunk70956 = require("./70956.js"),
  g = ((o = {})[o.IN_FLIGHT = 0] = "IN_FLIGHT", o[o.ERRORED = 1] = "ERRORED", o[o.SUCCEEDED = 2] = "SUCCEEDED", o);
class C extends(d = Chunk442837.ZP.Store) {
  getModalState(e) {
    return e !== l ? null : i
  }
}(c = "displayName") in C ? Object.defineProperty(C, c, {
  value: "InteractionModalStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : C[c] = "InteractionModalStore";
let _ = new C(Chunk570140.Z, {
  LOGOUT: function() {
    return l = null, i = null, r = null, u = null, a = null, true
  },
  INTERACTION_MODAL_CREATE: function(e) {
    let {
      nonce: t
    } = e;
    return t === a && (T.Z.deleteMessage(u, r, true), r = null, u = null, a = null), false
  },
  INTERACTION_IFRAME_MODAL_CREATE: function(e) {
    let {
      nonce: t
    } = e;
    return t === a && (T.Z.deleteMessage(u, r, true), r = null, u = null, a = null), false
  },
  INTERACTION_QUEUE: function(e) {
    let {
      messageId: t,
      nonce: n,
      data: o
    } = e;
    switch (o.interactionType) {
      case f.B8.APPLICATION_COMMAND:
        return r = t, u = o.channelId, a = n, false;
      case f.B8.MODAL_SUBMIT:
        return E()(null == l || 1 === i || 2 === i, "cannot submit multiple modals at once"), l = n, i = 0, setTimeout(() => {
          l === n && 0 === i && (0, m.yr)(n)
        }, 10 * S.Z.Millis.SECOND), true;
      default:
        returnfalse
    }
  },
  INTERACTION_SUCCESS: function(e) {
    let {
      nonce: t
    } = e;
    return null != t && t === l && (i = 2, true)
  },
  INTERACTION_FAILURE: function(e) {
    let {
      nonce: t
    } = e;
    return null != t && t === l && (i = 1, true)
  }
})