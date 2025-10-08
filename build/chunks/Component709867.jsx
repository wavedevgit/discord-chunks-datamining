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
  Chunk244054 = require("./244054.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c() {
  return (c = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  }).apply(this, arguments)
}

function u(e) {
  if (null == e) throw TypeError("Cannot destructure " + e);
  return e
}

function d(e) {
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

function f(e) {
  let {
    onChange: t,
    options: n,
    label: l,
    disabled: f,
    value: _
  } = e, p = i.useMemo(() => new Set(n.map(e => e.value)), [n]), h = i.useCallback(e => {
    let n = e.filter(e => p.has(e));
    null == t || t(n)
  }, [p, t]);
  return (0, r.jsx)(o.gNt, {
    label: l,
    role: "group",
    children: (0, r.jsx)(a.cO, {
      className: s.group,
      value: _,
      onChange: h,
      "data-mana-component": "checkbox-group",
      isDisabled: f,
      children: n.map(e => {
        let t = c({}, u(e));
        return (0, r.jsx)(o.Cnq, d({
          disabled: f || e.disabled,
          checked: null == _ ? true : _.includes(e.value)
        }, t), String(e.value))
      })
    })
  })
}