/** Chunk was on web.js **/
/** chunk id: 38021, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Dx: () => f,
  PQ: () => d,
  aS: () => p,
  dI: () => c,
  wR: () => u
}), require("./457529.js"), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js");

function a(e, t, n) {
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
      a(e, t, n[t])
    })
  }
  return e
}

function s(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function l(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : s(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function c(e) {
  let t = JSON.stringify(e);
  return l(o({}, e), {
    key: t
  })
}

function u() {
  let e = i.useContext(f);
  if (null == e) throw Error("useThemeContext must be used within a ThemeContext.Provider");
  return e
}
let d = c({
    theme: "light",
    primaryColor: null,
    secondaryColor: null,
    gradient: null,
    flags: 0,
    contrast: 1,
    saturation: 1,
    density: "compact",
    disableAdaptiveTheme: false,
    reduceAdaptiveTheme: false
  }),
  f = Chunk64700.createContext(d);

function p(e) {
  let {
    children: t
  } = e, n = u();
  return (0, r.jsx)(r.Fragment, {
    children: t(n)
  })
}