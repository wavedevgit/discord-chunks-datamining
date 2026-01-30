/** Chunk was on 89488 **/
/** chunk id: 750128, original params: e,t,n (module,exports,require) **/
let r, i, o, a, l;
require.d(exports, {
  A: () => O,
  Z: () => I
});
var c, _, s, Chunk284009 = require("./284009.js"),
  u = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk843472 = require("./843472.js"),
  Chunk155718 = require("./155718.js"),
  Chunk706727 = require("./706727.js"),
  Chunk927813 = require("./927813.js"),
  I = ((c = {})[c.IN_FLIGHT = 0] = "IN_FLIGHT", c[c.ERRORED = 1] = "ERRORED", c[c.SUCCEEDED = 2] = "SUCCEEDED", c);
class b extends(s = Chunk311907.Ay.Store) {
  getModalState(e) {
    return e !== r ? null : i
  }
}(_ = "displayName") in b ? Object.defineProperty(b, _, {
  value: "InteractionModalStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : b[_] = "InteractionModalStore";
let O = new b(Chunk73153.h, {
  LOGOUT: function() {
    return r = null, i = null, o = null, a = null, l = null, true
  },
  INTERACTION_MODAL_CREATE: function(e) {
    let {
      nonce: t
    } = e;
    return t === l && (m.A.deleteMessage(a, o, true), o = null, a = null, l = null), false
  },
  INTERACTION_IFRAME_MODAL_CREATE: function(e) {
    let {
      nonce: t
    } = e;
    return t === l && (m.A.deleteMessage(a, o, true), o = null, a = null, l = null), false
  },
  INTERACTION_QUEUE: function(e) {
    let {
      messageId: t,
      nonce: n,
      data: c,
      preflight: _
    } = e;
    switch (c.interactionType) {
      case g.G4.APPLICATION_COMMAND:
        return o = t, a = c.channelId, l = n, false;
      case g.G4.MODAL_SUBMIT:
        u()(null == r || 1 === i || 2 === i, "cannot submit multiple modals at once"), r = n, i = 0;
        let s = e => {
          setTimeout(() => {
            r === n && 0 === i && (0, h.C1)(n)
          }, e)
        };
        return null != _ ? (s(2 * E.A.Millis.MINUTE), _.then(() => s(10 * E.A.Millis.SECOND)).catch(() => (0, h.C1)(n))) : s(10 * E.A.Millis.SECOND), true;
      default:
        returnfalse
    }
  },
  INTERACTION_SUCCESS: function(e) {
    let {
      nonce: t
    } = e;
    return null != t && t === r && (i = 2, true)
  },
  INTERACTION_FAILURE: function(e) {
    let {
      nonce: t
    } = e;
    return null != t && t === r && (i = 1, true)
  }
})