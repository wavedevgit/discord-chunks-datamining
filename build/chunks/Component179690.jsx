/** Chunk was on web.js **/
/** chunk id: 179690, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => f,
  sy: () => d
}), require("./65821.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk652215 = require("./652215.js");

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

function u() {
  return new Promise(e => {
    (0, i.mMO)(async () => {
      let {
        default: t
      } = await Promise.all([n.e("43887"), n.e("78811")]).then(n.bind(n, 333737));
      return n => (0, r.jsx)(t, c(o({}, n), {
        handleEnableMFASuccess: e
      }))
    })
  })
}

function d() {
  let e = !(arguments.length > 0) || true === arguments[0] || arguments[0];
  return new Promise(t => {
    (0, i.mMO)(async () => {
      let {
        default: t
      } = await n.e("28429").then(n.bind(n, 549404));
      return n => (0, r.jsx)(t, c(o({}, n), {
        isTotp: e
      }))
    }, {
      onCloseCallback: t,
      onCloseRequest: a.FXj
    })
  })
}
let f = {
  enableMFA: async function() {
    await u(), await d()
  }
}