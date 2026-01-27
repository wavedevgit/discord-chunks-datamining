/** Chunk was on 20941 **/
/** chunk id: 750128, original params: e,t,n (module,exports,require) **/
let r, l, a, i, s;
require.d(exports, {
  A: () => j,
  Z: () => y
});
var o, c, u, Chunk284009 = require("./284009.js"),
  m = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk843472 = require("./843472.js"),
  Chunk155718 = require("./155718.js"),
  Chunk706727 = require("./706727.js"),
  Chunk927813 = require("./927813.js"),
  y = ((o = {})[o.IN_FLIGHT = 0] = "IN_FLIGHT", o[o.ERRORED = 1] = "ERRORED", o[o.SUCCEEDED = 2] = "SUCCEEDED", o);
class v extends(u = Chunk311907.Ay.Store) {
  getModalState(e) {
    return e !== r ? null : l
  }
}(c = "displayName") in v ? Object.defineProperty(v, c, {
  value: "InteractionModalStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : v[c] = "InteractionModalStore";
let j = new v(Chunk73153.h, {
  LOGOUT: function() {
    return r = null, l = null, a = null, i = null, s = null, true
  },
  INTERACTION_MODAL_CREATE: function(e) {
    let {
      nonce: t
    } = e;
    return t === s && (h.A.deleteMessage(i, a, true), a = null, i = null, s = null), false
  },
  INTERACTION_IFRAME_MODAL_CREATE: function(e) {
    let {
      nonce: t
    } = e;
    return t === s && (h.A.deleteMessage(i, a, true), a = null, i = null, s = null), false
  },
  INTERACTION_QUEUE: function(e) {
    let {
      messageId: t,
      nonce: n,
      data: o,
      preflight: c
    } = e;
    switch (o.interactionType) {
      case b.G4.APPLICATION_COMMAND:
        return a = t, i = o.channelId, s = n, false;
      case b.G4.MODAL_SUBMIT:
        m()(null == r || 1 === l || 2 === l, "cannot submit multiple modals at once"), r = n, l = 0;
        let u = e => {
          setTimeout(() => {
            r === n && 0 === l && (0, g.C1)(n)
          }, e)
        };
        return null != c ? (u(2 * x.A.Millis.MINUTE), c.then(() => u(10 * x.A.Millis.SECOND)).catch(() => (0, g.C1)(n))) : u(10 * x.A.Millis.SECOND), true;
      default:
        returnfalse
    }
  },
  INTERACTION_SUCCESS: function(e) {
    let {
      nonce: t
    } = e;
    return null != t && t === r && (l = 2, true)
  },
  INTERACTION_FAILURE: function(e) {
    let {
      nonce: t
    } = e;
    return null != t && t === r && (l = 1, true)
  }
})