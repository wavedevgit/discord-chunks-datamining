/** Chunk was on 31253 **/
/** chunk id: 912193, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  b: () => _
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk468026 = require("./468026.jsx"),
  Chunk388032 = require("./388032.jsx");
let c = null;

function s() {
  null !== c && (0, Chunk481060.Mr3)(c), c = null
}

function u() {
  Chunk846027.Z.setSilenceWarning(false)
}

function _() {
  c = (0, Chunk481060.h7j)(e => (0, r.jsx)(o.default, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        var r;
        r = n[t], t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = r
      })
    }
    return e
  }({
    title: a.intl.string(a.t["zQ1+Jy"]),
    body: a.intl.string(a.t.K1gWXl),
    secondaryConfirmText: a.intl.string(a.t.XAiAgI),
    onConfirmSecondary: u,
    onConfirm: s,
    confirmText: a.intl.string(a.t.BddRzc)
  }, e)))
}