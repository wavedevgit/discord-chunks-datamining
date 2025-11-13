/** Chunk was on web.js **/
/** chunk id: 202858, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Yn: () => d,
  ZP: () => f
}), require("./415506.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk981631 = require("./981631.js");

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

function u() {
  return new Promise(e => {
    (0, i.ZDy)(async () => {
      let {
        default: t
      } = await Promise.all([n.e("16828"), n.e("59030")]).then(n.bind(n, 397386));
      return n => (0, r.jsx)(t, c(s({}, n), {
        handleEnableMFASuccess: e
      }))
    })
  })
}

function d() {
  let e = !(arguments.length > 0) || true === arguments[0] || arguments[0];
  return new Promise(t => {
    (0, i.ZDy)(async () => {
      let {
        default: t
      } = await n.e("48290").then(n.bind(n, 971650));
      return n => (0, r.jsx)(t, c(s({}, n), {
        isTotp: e
      }))
    }, {
      onCloseCallback: t,
      onCloseRequest: a.VqG
    })
  })
}
let f = {
  enableMFA: async function() {
    await u(), await d()
  }
}