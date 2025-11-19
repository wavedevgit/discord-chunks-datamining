/** Chunk was on web.js **/
/** chunk id: 398269, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => m,
  f: () => h
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk608787 = require("./608787.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk765250 = require("./765250.js"),
  Chunk788983 = require("./788983.js"),
  Chunk355863 = require("./355863.js"),
  Chunk757744 = require("./757744.js"),
  Chunk501787 = require("./501787.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
async function h() {
  let e = {
    outOfProcessOverlay: true,
    focusable: false
  };
  (0, Chunk765250.te)(Chunk757744.$S, Chunk355863.Z.getDefaultLayout(Chunk757744.$S, Chunk757744.HN), Chunk757744.HN);
  let t = (0, Chunk608787.Un)({
    createPromise: () => Promise.all([require.e("61924"), require.e("49552"), require.e("90508"), require.e("43342"), require.e("39206"), require.e("46931"), require.e("60831"), require.e("83243"), require.e("50751"), require.e("29709"), require.e("84983"), require.e("13368")]).then(require.bind(require, 989373)),
    webpackId: 989373,
    name: "AppOverlay"
  });
  await Chunk788983.bA(Chunk501787.$J, e => (0, r.jsx)(t, {
    withTitleBar: false,
    windowKey: e
  }), module)
}

function m(e, t) {
  let i = (0, a.VnL)(t);
  (0, a.ZDy)(async () => {
    let {
      default: i
    } = await n.e("63940").then(n.bind(n, 17060));
    return n => (0, r.jsx)(i, p(f({}, n), {
      location: e,
      appContext: t
    }))
  }, null != i ? {
    contextKey: i
  } : true)
}