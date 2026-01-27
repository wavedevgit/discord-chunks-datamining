/** Chunk was on web.js **/
/** chunk id: 710839, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk851907 = require("./851907.js");

function o(e, t, n) {
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
      o(e, t, n[t])
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
let u = "activity-age-gate";

function d(e) {
  let {
    application: t,
    channelId: o,
    onAgree: l,
    onDisagree: d
  } = e, f = null != (0, a.Ay)({
    application: t,
    channelId: o
  }) ? i.KX8 : i.SYi;
  return (0, i.mMO)(async () => {
    let {
      ActivityAgeGateModal: e
    } = await n.e("75710").then(n.bind(n, 89805));
    return n => (0, r.jsx)(e, c(s({}, n), {
      channelId: o,
      application: t,
      onAgree: l,
      onDisagree: d
    }))
  }, {
    modalKey: u,
    contextKey: f
  }), Promise.resolve()
}