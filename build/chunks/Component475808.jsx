/** Chunk was on web.js **/
/** chunk id: 475808, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  b: () => f
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk388032 = require("./388032.jsx");

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
  let [t, n] = i.useState(false);
  return (0, r.jsx)(a.Modal, u({
    size: "md",
    title: l.intl.string(l.t["zQ1+Jw"]),
    subtitle: l.intl.string(l.t.K1gWXn),
    actions: [{
      text: l.intl.string(l.t.BddRzS),
      onClick: () => {
        t && s.Z.setSilenceWarning(false), e.onClose()
      },
      variant: "primary"
    }],
    actionBarInput: (0, r.jsx)(a.XZJ, {
      checked: t,
      onChange: e => n(e),
      label: l.intl.string(l.t.XAiAgD),
      labelType: "secondary"
    })
  }, e))
}

function f() {
  (0, Chunk481060.h7j)(e => (0, r.jsx)(d, u({}, e)))
}