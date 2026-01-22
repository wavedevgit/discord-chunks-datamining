/** Chunk was on web.js **/
/** chunk id: 1136, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N6: () => f,
  di: () => p,
  il: () => _
}), require("./896048.js");
var Chunk353640 = require("./353640.js"),
  Chunk731738 = require("./731738.js"),
  Chunk121894 = require("./121894.js"),
  Chunk831062 = require("./831062.js");

function o(e, t, n) {
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
      o(e, t, n[t])
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
let d = (0, Chunk353640.v)(e => ({
  captchaServeVolume: {}
}));

function f() {
  return 0 === Object.keys(d.getState().captchaServeVolume).length
}

function p(e) {
  (0, a.r)(() => {
    d.setState(t => null == e ? t : e in t.captchaServeVolume ? {
      captchaServeVolume: u(l({}, t.captchaServeVolume), {
        [e]: t.captchaServeVolume[e] + 1
      })
    } : {
      captchaServeVolume: u(l({}, t.captchaServeVolume), {
        [e]: 1
      })
    })
  })
}

function _() {
  let e = true;
  for (let [t, n] of Object.entries(d.getState().captchaServeVolume)) s.A.distribution({
    name: i.K.CAPTCHA_SERVE_VOLUME_DISTRIBUTION,
    tags: ["user_flow:".concat(t)]
  }, n, e);
  (0, a.r)(() => d.setState({
    captchaServeVolume: {}
  }))
}