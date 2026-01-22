/** Chunk was on web.js **/
/** chunk id: 663677, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L: () => g
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk397927 = require("./397927.js"),
  Chunk562519 = require("./562519.js");

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
let u = 5 * require("./927813.js").A.Millis.DAY,
  d = 3,
  f = new Chunk562519.A("overlay_survey_timestamps");

function p() {
  return Array.from(f.values()).reduce((e, t) => Math.max(e, t), 0)
}

function _() {
  let e = Date.now(),
    t = p();
  return null != t && e - t < u
}

function h() {
  return Array.from(f.values()).filter(e => {
    let t = new Date(e);
    return t.getMonth() === new Date().getMonth() && t.getFullYear() === new Date().getFullYear()
  }).length >= d
}

function m() {
  let e = Date.now();
  f.add(e)
}

function g(e, t) {
  _() || h() || (0, i.mMO)(async () => {
    let {
      default: i
    } = await n.e("82318").then(n.bind(n, 387101));
    return m(), n => (0, r.jsx)(i, c(o({}, n), {
      clientSettingType: e,
      gameId: t
    }))
  })
}