/** Chunk was on web.js **/
/** chunk id: 892547, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx");

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

function u(e) {
  let {
    query: t,
    autoFocus: n,
    onClear: o,
    placeholder: l = a.intl.string(a.t["5h0QOP"]),
    onKeyDown: u,
    size: d = "md",
    disabled: f = false,
    onChange: p,
    onBlur: _,
    onFocus: h,
    autoComplete: m,
    inputProps: g,
    "aria-label": E = a.intl.string(a.t["5h0QOP"]),
    ref: y
  } = e;
  return (0, r.jsx)(i.ksK, c(s({}, g), {
    onFocus: h,
    onBlur: _,
    value: t,
    onChange: p,
    onKeyDown: u,
    placeholder: l,
    disabled: f,
    autoFocus: n,
    autoComplete: m,
    "aria-label": E,
    inputRef: y,
    leading: i.$p$,
    clearable: null != o,
    size: d,
    fullWidth: true
  }))
}