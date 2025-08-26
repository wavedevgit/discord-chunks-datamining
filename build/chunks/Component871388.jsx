/** Chunk was on 73628 **/
/** chunk id: 871388, original params: e,A,t (module,exports,require) **/
require.d(exports, {
  B: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk120651 = require("./120651.jsx"),
  Chunk388032 = require("./388032.jsx");

function o(e, A) {
  let t = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {};
  (0, l.Z)({
    title: e,
    body: "string" == typeof A ? A : a.intl.format(A, function(e) {
      for (var A = 1; A < arguments.length; A++) {
        var t = null != arguments[A] ? arguments[A] : {},
          r = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.forEach(function(A) {
          var r;
          r = t[A], A in e ? Object.defineProperty(e, A, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[A] = r
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
    }, t)),
    cta: a.intl.string(a.t["NX+WJC"]),
    onConfirm: () => {}
  })
}