/** Chunk was on 32945 **/
/** chunk id: 697674, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => i
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk159691 = require("./159691.js"),
  Chunk277923 = require("./277923.js");
let i = e => {
  let {
    actions: t,
    footerInput: n
  } = e;
  return 0 === t.length && null == n ? null : (0, a.jsxs)("footer", {
    className: l.footer,
    children: [null != n && (0, a.jsx)("div", {
      children: n
    }), (0, a.jsx)(r.hE2, {
      className: l.buttonGroup,
      justify: "end",
      children: t.map((e, t) => (0, a.jsx)(r.zxk, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), a.forEach(function(t) {
            var a;
            a = n[t], t in e ? Object.defineProperty(e, t, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = a
          })
        }
        return e
      }({}, e), t))
    })]
  })
}