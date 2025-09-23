/** Chunk was on 73628 **/
/** chunk id: 871388, original params: e,t,A (module,exports,require) **/
require.d(exports, {
  B: () => i
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk120651 = require("./120651.jsx"),
  Chunk388032 = require("./388032.jsx");

function i(e, t) {
  let A = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {};
  (0, a.Z)({
    title: e,
    body: "string" == typeof t ? t : l.intl.format(t, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var A = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(A);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(A).filter(function(e) {
          return Object.getOwnPropertyDescriptor(A, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = A[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = r
        })
      }
      return e
    }({
      highlightHook: e => (0, r.jsx)(n.Text, {
        variant: "text-md/normal",
        color: "text-default",
        style: {
          display: "inline"
        },
        children: e
      })
    }, A)),
    cta: l.intl.string(l.t["NX+WJC"]),
    onConfirm: () => {}
  })
}