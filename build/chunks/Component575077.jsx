/** Chunk was on 67096 **/
/** chunk id: 575077, original params: e,A,t (module,exports,require) **/
require.d(exports, {
  p: () => i
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk426043 = require("./426043.jsx"),
  Chunk985018 = require("./985018.jsx");

function i(e, A) {
  let t = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {};
  (0, l.A)({
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
    cta: a.intl.string(a.t["NX+WJN"]),
    onConfirm: () => {}
  })
}