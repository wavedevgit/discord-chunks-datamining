/** Chunk was on web.js **/
/** chunk id: 842524, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
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

function o(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      s(e, t, n[t])
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
class p extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    var t;
    let n = null != (t = null == e ? true : e.ignoreTimestamps) ? t : {};
    u = c(o({}, d()), {
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
s(p, "displayName", "IgnoreNoticeStore"), s(p, "persistKey", "IgnoreNoticeStore");
let _ = new p(Chunk73153.h, {
  RELATIONSHIP_IGNORE_USER_SUCCESS: f
})