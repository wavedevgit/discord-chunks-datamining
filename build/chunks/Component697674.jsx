/** Chunk was on 59289 **/
/** chunk id: 697674, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => l
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk159691 = require("./159691.js"),
  Chunk58119 = require("./58119.js");
let l = e => {
  let {
    actions: t,
    footerInput: n
  } = e;
  return 0 === t.length && null == n ? null : (0, r.jsxs)("footer", {
    className: a.footer,
    children: [null != n && (0, r.jsx)("div", {
      children: n
    }), (0, r.jsx)(i.hE, {
      className: a.buttonGroup,
      justify: "end",
      children: t.map((e, t) => (0, r.jsx)(i.zx, function(e) {
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
      }({}, e), t))
    })]
  })
}