/** Chunk was on web.js **/
/** chunk id: 60465, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk397927 = require("./397927.js");

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
let d = {
  openGameProfileModal: function(e) {
    let {
      applicationId: t,
      gameProfileModalChecks: i,
      source: s,
      sourceUserId: c,
      appContext: d
    } = e;
    a()(i.shouldOpenGameProfile, "Passed a false value for [gameProfileModalChecks]. Are you using the useShouldOpenGameProfile hook correctly?"), a()(i.applicationId === t, "Passed an unexpected [applicationId]. Are you passing a different one than you passed to useShouldOpenGameProfileModal?"), (0, o.mMO)(async () => {
      let {
        default: e
      } = await n.e("13530").then(n.bind(n, 225732));
      return n => (0, r.jsx)(e, u(l({
        applicationId: t,
        source: s,
        sourceUserId: c
      }, n), {
        appContext: d
      }))
    }, {
      contextKey: null != d ? (0, o.TId)(d) : true
    })
  }
}