/** Chunk was on web.js **/
/** chunk id: 709867, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c: () => f
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk42650 = require("./42650.js"),
  Chunk793030 = require("./793030.js"),
  Chunk675042 = require("./675042.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}

function u(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function d(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function f(e) {
  let {
    onChange: t,
    options: n,
    label: l,
    disabled: u,
    value: f,
    defaultValue: _
  } = e, p = i.useMemo(() => new Set(n.map(e => e.value)), [n]), h = i.useCallback(e => {
    let n = e.filter(e => p.has(e));
    null == t || t(n)
  }, [p, t]);
  return (0, r.jsx)(o.NIc, {
    label: l,
    role: "group",
    children: (0, r.jsx)(a.cO, {
      className: s.group,
      value: f,
      defaultValue: _,
      onChange: h,
      isDisabled: u,
      children: n.map(e => (0, r.jsx)(o.Cnq, d(c({
        disabled: u || e.disabled
      }, e), {
        labelType: "primary"
      }), String(e.value)))
    })
  })
}