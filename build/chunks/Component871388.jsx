/** Chunk was on 73628 **/
/** chunk id: 871388, original params: A,e,t (module,exports,require) **/
require.d(exports, {
  B: () => i
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk809659 = require("./809659.jsx"),
  Chunk388032 = require("./388032.jsx");

function i(A, e) {
  let t = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {};
  (0, a.Z)({
    title: A,
    body: "string" == typeof e ? e : l.intl.format(e, function(A) {
      for (var e = 1; e < arguments.length; e++) {
        var t = null != arguments[e] ? arguments[e] : {},
          n = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(A) {
          return Object.getOwnPropertyDescriptor(t, A).enumerable
        }))), n.forEach(function(e) {
          var n;
          n = t[e], e in A ? Object.defineProperty(A, e, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true
          }) : A[e] = n
        })
      }
      return A
    }({
      highlightHook: A => (0, n.jsx)(r.Text, {
        variant: "text-md/normal",
        color: "text-default",
        style: {
          display: "inline"
        },
        children: A
      })
    }, t)),
    cta: l.intl.string(l.t["NX+WJC"]),
    onConfirm: () => {}
  })
}