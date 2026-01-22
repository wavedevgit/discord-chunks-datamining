/** Chunk was on web.js **/
/** chunk id: 294454, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Be: () => f,
  aU: () => u,
  fO: () => d,
  vK: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk530912 = require("./530912.js");

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
let u = "forward-modal";

function d(e) {
  let {
    message: t,
    source: s,
    initialSelectedDestinations: l = [],
    forwardOptions: d,
    onRequestSent: f,
    customSendHandler: p
  } = e;
  (0, a.pp)(t.channel_id, t.id, s), (0, i.mMO)(async () => {
    let {
      ForwardModal: e
    } = await Promise.all([n.e("96758"), n.e("43622"), n.e("81110")]).then(n.bind(n, 911269));
    return n => (0, r.jsx)(e, c(o({}, n), {
      message: t,
      initialSelectedDestinations: l,
      forwardOptions: d,
      onRequestSent: f,
      customSendHandler: p,
      source: s
    }))
  }, {
    modalKey: u
  })
}

function f() {
  (0, i.OoC)(u)
}

function p(e) {
  let {
    message: t,
    failedDestinations: a,
    forwardOptions: s
  } = e;
  (0, i.mMO)(async () => {
    let {
      ForwardFailedAlertModal: e
    } = await n.e("66139").then(n.bind(n, 181622));
    return n => (0, r.jsx)(e, c(o({}, n), {
      message: t,
      failedDestinations: a,
      forwardOptions: s
    }))
  })
}