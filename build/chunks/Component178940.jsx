/** Chunk was on web.js **/
/** chunk id: 178940, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  X: () => u
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk877371 = require("./877371.js"),
  Chunk330406 = require("./330406.jsx"),
  Chunk965048 = require("./965048.jsx");

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

function u(e) {
  let {
    disabled: t,
    displayOnly: n,
    label: l,
    value: u,
    onChange: d
  } = e, f = (0, a.A)("Checkbox"), _ = i.useCallback(e => {
    let t = {
      currentTarget: {
        checked: e
      }
    };
    null == d || d(t, e)
  }, [d]);
  return f ? (0, r.jsx)(o.C, {
    disabled: t,
    displayOnly: n,
    checked: u,
    onChange: _,
    label: l
  }) : (0, r.jsx)(s.$q, c({}, e))
}