/** Chunk was on web.js **/
/** chunk id: 424291, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk531826 = require("./531826.js");

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
  } = e, f = null != (0, a.ZP)({
    application: t,
    channelId: o
  }) ? i.u1M : i.z1l;
  return (0, i.ZDy)(async () => {
    let {
      ActivityAgeGateModal: e
    } = await n.e("57951").then(n.bind(n, 252528));
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