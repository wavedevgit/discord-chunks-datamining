/** Chunk was on web.js **/
/** chunk id: 709867, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c: () => d
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk42650 = require("./42650.js"),
  Chunk793030 = require("./793030.js"),
  Chunk886025 = require("./886025.jsx"),
  Chunk675042 = require("./675042.js");

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

function d(e) {
  let {
    onChange: t,
    options: n,
    label: c,
    disabled: d,
    value: f,
    defaultValue: _
  } = e, p = i.useMemo(() => new Set(n.map(e => e.value)), [n]), h = i.useCallback(e => {
    let n = e.filter(e => p.has(e));
    null == t || t(n)
  }, [p, t]);
  return (0, r.jsx)(s.N, {
    label: c,
    role: "group",
    children: (0, r.jsx)(a.cO, {
      className: l.group,
      value: f,
      defaultValue: _,
      onChange: h,
      isDisabled: d,
      children: n.map(e => (0, r.jsx)(o.XZJ, u({
        disabled: d || e.disabled
      }, e), String(e.value)))
    })
  })
}