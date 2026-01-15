/** Chunk was on web.js **/
/** chunk id: 115470, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk178635 = require("./178635.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
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

function c(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function u(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let d = {};

function f(e) {
  let {
    feedbackType: t,
    cooldown: n,
    chance: r
  } = e;
  d[t] = u(l({}, o.R[t]), {
    cooldown: n,
    chance: r
  })
}

function p(e) {
  let {
    feedbackType: t
  } = e;
  delete d[t]
}
class _ extends(r = Chunk442837.ZP.Store) {
  initialize() {}
  getFeedbackConfig(e) {
    return d[e]
  }
}
s(_, "displayName", "FeedbackOverrideStore"), s(_, "persistKey", "feedbackOverrides");
let h = new _(Chunk570140.Z, {
  FEEDBACK_OVERRIDE_SET: f,
  FEEDBACK_OVERRIDE_CLEAR: p
})