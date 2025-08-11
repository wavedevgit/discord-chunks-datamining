/** Chunk was on 75708 **/
/** chunk id: 774572, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  D: () => l
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk245364 = require("./245364.js"),
  Chunk622999 = require("./622999.js"),
  Chunk246652 = require("./246652.jsx");
let l = e => {
  let {
    errorLabel: t,
    children: n,
    elementOptions: l
  } = e, o = Date.now();
  return (0, i.jsx)(a.k, {
    label: t,
    children: (0, i.jsx)(r.Elements, {
      stripe: (0, s.d2)(),
      options: function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), i.forEach(function(t) {
            var i;
            i = n[t], t in e ? Object.defineProperty(e, t, {
              value: i,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = i
          })
        }
        return e
      }({
        mode: "setup",
        currency: "usd",
        setup_future_usage: "off_session"
      }, l),
      children: n
    })
  }, o)
}