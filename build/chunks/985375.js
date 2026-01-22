/** Chunk was on web.js **/
/** chunk id: 985375, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  HI: () => p,
  gG: () => f,
  hb: () => _
}), require("./583741.js");
var Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk391436 = require("./391436.js");

function s(e, t, n) {
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
      s(e, t, n[t])
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
let d = {};

function f() {
  var e, t;
  return null != (t = null == (e = (0, o.D)().favoriteGifs) ? true : e.gifs) ? t : d
}

function p(e) {
  let t = f();
  return r.useMemo(() => a()(t).map((t, n) => {
    var r;
    return u(l({}, t), {
      url: n,
      src: null != (r = null == e ? true : e(t.src, n)) ? r : t.src
    })
  }).sortBy("order").reverse().value(), [t, e])
}

function _(e) {
  return null != f()[e]
}