/** Chunk was on 73628 **/
/** chunk id: 871388, original params: e,t,A (module,exports,require) **/
require.d(exports, {
  B: () => i
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk120651 = require("./120651.jsx"),
  Chunk388032 = require("./388032.jsx");

function i(e, t, A) {
  let i = arguments.length > 3 && true !== arguments[3] ? arguments[3] : {};
  (0, a.Z)({
    title: e,
    body: "string" == typeof t ? t : l.intl.format(t, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var A = null != arguments[t] ? arguments[t] : {},
          n = Object.keys(A);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(A).filter(function(e) {
          return Object.getOwnPropertyDescriptor(A, e).enumerable
        }))), n.forEach(function(t) {
          var n;
          n = A[t], t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = n
        })
      }
      return e
    }({
      highlightHook: e => (0, n.jsx)(r.Text, {
        variant: "text-md/normal",
        color: "text-default",
        style: {
          display: "inline"
        },
        children: e
      })
    }, i)),
    cta: l.intl.string(l.t["NX+WJC"]),
    onConfirm: () => {},
    iconVariant: A
  })
}