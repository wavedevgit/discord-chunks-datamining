/** Chunk was on web.js **/
/** chunk id: 711758, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      a(e, t, n[t])
    })
  }
  return e
}

function l(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function c(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : l(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let u = d();

function d() {
  return {
    ignoreTimestamps: {}
  }
}

function f(e) {
  let {
    userId: t,
    timestamp: n
  } = e;
  u.ignoreTimestamps[t] = n
}
class p extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    var t;
    let n = null != (t = null == e ? true : e.ignoreTimestamps) ? t : {};
    u = c(s({}, d()), {
      ignoreTimestamps: n
    })
  }
  getState() {
    return u
  }
  getIgnoreTimestamps() {
    return u.ignoreTimestamps
  }
}
a(p, "displayName", "IgnoreNoticeStore"), a(p, "persistKey", "IgnoreNoticeStore");
let _ = new p(Chunk570140.Z, {
  RELATIONSHIP_IGNORE_USER_SUCCESS: f
})