/** Chunk was on web.js **/
/** chunk id: 8404, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  b: () => p
});
var Chunk73800 = require("./73800.js"),
  Chunk652844 = require("./652844.js"),
  Chunk747906 = require("./747906.js"),
  Chunk481060 = require("./481060.js"),
  Chunk40851 = require("./40851.js"),
  Chunk378441 = require("./378441.js"),
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

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function p(e) {
  let t = (0, s.bp)(),
    {
      activeVoice: n
    } = (0, l.o)(),
    u = null != n,
    f = e ? "unmute" : "mute",
    p = (0, o.P)(f),
    h = (0, i.O)(f),
    m = u ? p : h,
    g = t === c.IlC.POPOUT ? u ? e ? a.TYr : a.x8H : e ? a.nRN : a.S6n : m.Component;
  return r.useMemo(() => _(d({}, m), {
    Component: g
  }), [m, g])
}