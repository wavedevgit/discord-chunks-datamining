/** Chunk was on 90228 **/
/** chunk id: 675120, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  v: () => i
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk732955 = require("./732955.js"),
  Chunk542242 = require("./542242.js");
let i = e => {
  let {
    actions: t,
    footerInput: n
  } = e;
  return 0 === t.length && null == n ? null : (0, a.jsxs)("footer", {
    className: r.q,
    children: [null != n && (0, a.jsx)("div", {
      children: n
    }), (0, a.jsx)(l.e2v, {
      className: r.G,
      justify: "end",
      children: t.map((e, t) => (0, a.jsx)(l.$nd, function(e) {
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