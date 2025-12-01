/** Chunk was on web.js **/
/** chunk id: 887413, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => m
});
var Chunk54381 = require("./54381.js"),
  Chunk481060 = require("./481060.js"),
  Chunk451478 = require("./451478.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk728285 = require("./728285.jsx"),
  Chunk981631 = require("./981631.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function _() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk981631.IlC.POPOUT;
  module !== Chunk981631.IlC.APP && (0, Chunk481060.ZDy)(async () => {
    let {
      default: t
    } = await require.e("47552").then(require.bind(require, 520977));
    return n => (0, r.jsx)(t, p(d({}, n), {
      contextKey: e
    }))
  }, {
    contextKey: (0, Chunk481060.VnL)(module)
  })
}

function m() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk981631.IlC.APP,
    t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = null != module ? module : (0, Chunk728285.GB)();
  if (require !== Chunk981631.IlC.APP && null != require) {
    if (Chunk451478.Z.isFocused()) return;
    exports ? Chunk358085.isPlatformEmbedded ? Chunk998502.ZP.focus() : window.focus() : _(module)
  }
}