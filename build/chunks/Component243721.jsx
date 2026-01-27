/** Chunk was on web.js **/
/** chunk id: 243721, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  d: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk844222 = require("./844222.js"),
  Chunk460890 = require("./460890.jsx"),
  Chunk553270 = require("./553270.jsx"),
  Chunk395515 = require("./395515.jsx");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function d(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function p(e) {
  var t, n;
  let c = i.useContext(o.VO),
    d = null == c || null == (n = c.experiments) || null == (t = n.enabledExperiments) ? true : t.includes("mana-toggle-inputs"),
    {
      switchIconsEnabled: p
    } = i.useContext(a.C);
  if (d) {
    let t = true !== e.hasIcon ? e.hasIcon : p;
    return (0, r.jsx)(s.A, f(u({}, e), {
      hasIcon: t
    }))
  }
  return (0, r.jsx)(l.T, u({}, e))
}