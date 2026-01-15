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

function p(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
async function h() {
  let e = {
    outOfProcessOverlay: true,
    focusable: false
  };
  (0, o.te)(c.$S, l.Z.getDefaultLayout(c.$S, c.HN), c.HN);
  let t = (0, i.Un)({
    createPromise: () => Promise.all([n.e("53870"), n.e("35535"), n.e("90508"), n.e("39206"), n.e("13478"), n.e("69813"), n.e("83243"), n.e("50751"), n.e("29709"), n.e("13368")]).then(n.bind(n, 989373)),
    webpackId: 989373,
    name: "AppOverlay"
  });
  await s.open(u.$J, e => (0, r.jsx)(t, {
    withTitleBar: false,
    windowKey: e
  }), e)
}

function m(e, t) {
  let i = (0, a.VnL)(t);
  (0, a.ZDy)(async () => {
    let {
      default: i
    } = await Promise.all([n.e("82077"), n.e("82295")]).then(n.bind(n, 17060));
    return n => (0, r.jsx)(i, _(f({}, n), {
      location: e,
      appContext: t
    }))
  }, null != i ? {
    contextKey: i
  } : true)
}