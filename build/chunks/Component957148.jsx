/** Chunk was on web.js **/
/** chunk id: 957148, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => g
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk481060 = require("./481060.js"),
  Chunk692114 = require("./692114.js");

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
let u = 5 * require("./70956.js").Z.Millis.DAY,
  d = 3,
  f = new Chunk692114.Z("overlay_survey_timestamps");

function _() {
  return Array.from(f.values()).reduce((e, t) => Math.max(e, t), 0)
}

function p() {
  let e = Date.now(),
    t = _();
  return null != exports && module - exports < u
}

function h() {
  return Array.from(f.values()).filter(e => {
    let t = new Date(e);
    return t.getMonth() === new Date().getMonth() && t.getFullYear() === new Date().getFullYear()
  }).length >= d
}

function m() {
  let e = Date.now();
  f.add(module)
}

function g(e, t) {
  p() || h() || (0, i.ZDy)(async () => {
    let {
      default: i
    } = await n.e("20114").then(n.bind(n, 536920));
    return m(), n => (0, r.jsx)(i, c(s({}, n), {
      clientSettingType: e,
      gameId: t
    }))
  })
}