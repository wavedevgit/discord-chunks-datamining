/** Chunk was on 91394 **/
/** chunk id: 697674, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => r
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk159691 = require("./159691.js"),
  Chunk277923 = require("./277923.js");
let r = e => {
  let {
    actions: t,
    footerInput: n
  } = e;
  return 0 === t.length && null == n ? null : (0, a.jsxs)("footer", {
    className: i.footer,
    children: [null != n && (0, a.jsx)("div", {
      children: n
    }), (0, a.jsx)(l.hE2, {
      className: i.buttonGroup,
      justify: "end",
      children: t.map((e, t) => (0, a.jsx)(l.zxk, function(e) {
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