/** Chunk was on web.js **/
/** chunk id: 594609, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  h: () => f
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk827343 = require("./827343.js"),
  Chunk985018 = require("./985018.jsx");

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
        t && o.A.setSilenceWarning(false), e.onClose()
      },
      variant: "primary"
    }],
    actionBarInput: (0, r.jsx)(a.Sc0, {
      checked: t,
      onChange: e => n(e),
      label: l.intl.string(l.t.XAiAgD),
      labelType: "secondary"
    })
  }, e))
}

function f() {
  (0, s.qfG)(e => (0, r.jsx)(d, u({}, e)))
}