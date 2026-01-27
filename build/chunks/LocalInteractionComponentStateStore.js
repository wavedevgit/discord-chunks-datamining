/** Chunk was on 28936 **/
/** chunk id: 322980, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
}), require("./896048.js");
var l, r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk732134 = require("./732134.js");
let o = new Chunk732134.A(196606),
  c = 0,
  s = new Chunk732134.A(196606),
  d = new Chunk732134.A(196606);

function p(e, t, n) {
  var l;
  let r = null != (l = o.get(e)) ? l : new Map;
  r.set(t, n), o.set(e, r), c++
}

function E(e) {
  let t = s.get(e);
  null != t && d.delete(t), s.delete(e), o.delete(e), c++
}
class I extends(l = Chunk311907.Ay.Store) {
  getInteractionComponentStates() {
    return o
  }
  getInteractionComponentStateVersion() {
    return c
  }
  getInteractionComponentState(e, t) {
    var n;
    let l = o.get(e);
    return null == l ? null : null != (n = l.get(t)) ? n : null
  }
}(r = "displayName") in I ? Object.defineProperty(I, r, {
  value: "LocalInteractionComponentStateStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : I[r] = "LocalInteractionComponentStateStore";
let g = new I(Chunk73153.h, {
  LOGOUT: function() {
    o.clear(), s.clear(), d.clear(), c++
  },
  QUEUE_INTERACTION_COMPONENT_STATE: function(e) {
    let {
      messageId: t,
      nonce: n,
      componentId: l,
      state: r
    } = e;
    s.set(t, n), d.set(n, {
      messageId: t,
      componentId: l
    }), p(t, l, r)
  },
  SET_INTERACTION_COMPONENT_STATE: function(e) {
    let {
      rootContainerId: t,
      componentId: n,
      state: l
    } = e;
    p(t, n, l)
  },
  MESSAGE_DELETE: function(e) {
    let {
      id: t
    } = e;
    if (!o.has(t)) returnfalse;
    E(t)
  },
  MESSAGE_UPDATE: function(e) {
    let {
      message: t
    } = e;
    if (null == t.id || !o.has(t.id)) returnfalse;
    E(t.id)
  },
  INTERACTION_SUCCESS: function(e) {
    let {
      nonce: t
    } = e;
    if (null == t) returnfalse;
    let n = d.get(t);
    if (null == n) returnfalse;
    s.delete(n.messageId), d.delete(t), c++
  },
  INTERACTION_FAILURE: function(e) {
    let {
      nonce: t
    } = e;
    if (null == t) returnfalse;
    let n = d.get(t);
    if (null == n) returnfalse;
    ! function(e) {
      let {
        componentId: t,
        messageId: n
      } = e, l = o.get(n);
      null == l || !l.has(t) || (l.delete(t), 0 === l.size && o.delete(n), c++)
    }(n)
  },
  CLEAR_INTERACTION_MODAL_STATE: function(e) {
    let {
      customId: t
    } = e;
    o.delete(t), c++
  }
})