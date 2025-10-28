/** Chunk was on 32945 **/
/** chunk id: 761911, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  D: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk289008 = require("./289008.js"),
  Chunk622999 = require("./622999.js"),
  Chunk955926 = require("./955926.jsx");
let o = e => {
  let {
    errorLabel: t,
    children: n,
    elementOptions: o
  } = e, s = Date.now();
  return (0, a.jsx)(i.k, {
    label: t,
    children: (0, a.jsx)(r.Elements, {
      stripe: (0, l.d2)(),
      options: function(e) {
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
      }({
        mode: "setup",
        currency: "usd",
        setup_future_usage: "off_session"
      }, o),
      children: n
    })
  }, s)
}