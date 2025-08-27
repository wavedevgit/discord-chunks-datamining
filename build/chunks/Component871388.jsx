/** Chunk was on 73628 **/
/** chunk id: 871388, original params: e,A,t (module,exports,require) **/
require.d(exports, {
  B: () => i
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk809659 = require("./809659.jsx"),
  Chunk388032 = require("./388032.jsx");

function i(e, A) {
  let t = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {};
  (0, a.Z)({
    title: e,
    body: "string" == typeof A ? A : l.intl.format(A, function(e) {
      for (var A = 1; A < arguments.length; A++) {
        var t = null != arguments[A] ? arguments[A] : {},
          n = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), n.forEach(function(A) {
          var n;
          n = t[A], A in e ? Object.defineProperty(e, A, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[A] = n
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
    }, t)),
    cta: l.intl.string(l.t["NX+WJC"]),
    onConfirm: () => {}
  })
}