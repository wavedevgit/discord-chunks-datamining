/** Chunk was on web.js **/
/** chunk id: 892902, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk69004 = require("./69004.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let l = 196606,
  c = new Chunk69004.Z(l),
  u = 0,
  d = new Chunk69004.Z(l),
  f = new Chunk69004.Z(l);

function _(e, t, n) {
  var r;
  let i = null != (r = c.get(e)) ? r : new Map;
  i.set(t, n), c.set(e, i), u++
}

function p(e) {
  let t = d.get(e);
  null != t && f.delete(t), d.delete(e), c.delete(e), u++
}

function h(e) {
  let {
    componentId: t,
    messageId: n
  } = e, r = c.get(n);
  if (null == r || !r.has(t)) returnfalse;
  r.delete(t), 0 === r.size && c.delete(n), u++
}

function m() {
  c.clear(), d.clear(), f.clear(), u++
}

function g(e) {
  let {
    messageId: t,
    nonce: n,
    componentId: r,
    state: i
  } = e;
  d.set(t, n), f.set(n, {
    messageId: t,
    componentId: r
  }), _(t, r, i)
}

function E(e) {
  let {
    rootContainerId: t,
    componentId: n,
    state: r
  } = e;
  _(t, n, r)
}

function b(e) {
  let {
    message: t
  } = e;
  if (null == t.id || !c.has(t.id)) returnfalse;
  p(t.id)
}

function y(e) {
  let {
    id: t
  } = e;
  if (!c.has(t)) returnfalse;
  p(t)
}

function O(e) {
  let {
    nonce: t
  } = e;
  if (null == t) returnfalse;
  let n = f.get(t);
  if (null == n) returnfalse;
  d.delete(n.messageId), f.delete(t), u++
}

function v(e) {
  let {
    nonce: t
  } = e;
  if (null == t) returnfalse;
  let n = f.get(t);
  if (null == n) returnfalse;
  h(n)
}

function I(e) {
  let {
    customId: t
  } = e;
  c.delete(t), u++
}
class T extends(r = Chunk442837.ZP.Store) {
  getInteractionComponentStates() {
    return c
  }
  getInteractionComponentStateVersion() {
    return u
  }
  getInteractionComponentState(e, t) {
    var n;
    let r = c.get(e);
    return null == r ? null : null != (n = r.get(t)) ? n : null
  }
}
s(T, "displayName", "LocalInteractionComponentStateStore");
let S = new T(Chunk570140.Z, {
  LOGOUT: m,
  QUEUE_INTERACTION_COMPONENT_STATE: g,
  SET_INTERACTION_COMPONENT_STATE: E,
  MESSAGE_DELETE: y,
  MESSAGE_UPDATE: b,
  INTERACTION_SUCCESS: O,
  INTERACTION_FAILURE: v,
  CLEAR_INTERACTION_MODAL_STATE: I
})