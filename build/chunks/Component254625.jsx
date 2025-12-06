/** Chunk was on 89311 **/
/** chunk id: 254625, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  d: () => l
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk793030 = require("./793030.js"),
  Chunk51632 = require("./51632.jsx");

function l(e) {
  var t;
  let {
    renderExampleSection: n
  } = (0, r.D)();
  return null != (t = null == n ? true : n(e)) ? t : (0, a.jsx)(o, function(e) {
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
  }({}, e))
}

function o(e) {
  return (0, a.jsx)(i.xvT, {
    variant: "text-md/normal",
    children: e.title
  })
}