/** Chunk was on web.js **/
/** chunk id: 426620, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let o = null;

function l() {
  o = null, d.persist()
}

function c(e) {
  let {
    newUserType: t
  } = e;
  o = t, d.persist()
}
class u extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    var t;
    o = null != (t = null == e ? true : e.type) ? t : null
  }
  getType() {
    return o
  }
  getState() {
    return {
      type: o
    }
  }
}
s(u, "displayName", "NewUserStore"), s(u, "persistKey", "nuf");
let d = new u(Chunk73153.h, {
    NUF_NEW_USER: c,
    NUF_COMPLETE: l
  }),
  f = d