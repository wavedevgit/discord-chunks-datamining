/** Chunk was on web.js **/
/** chunk id: 179645, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = null;

function l() {
  s = null, d.persist()
}

function c(e) {
  let {
    newUserType: t
  } = e;
  s = t, d.persist()
}
class u extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    var t;
    s = null != (t = null == e ? true : e.type) ? t : null
  }
  getType() {
    return s
  }
  getState() {
    return {
      type: s
    }
  }
}
o(u, "displayName", "NewUserStore"), o(u, "persistKey", "nuf");
let d = new u(Chunk570140.Z, {
    NUF_NEW_USER: c,
    NUF_COMPLETE: l
  }),
  f = d