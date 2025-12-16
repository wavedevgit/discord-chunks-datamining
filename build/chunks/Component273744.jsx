/** Chunk was on 54844 **/
/** chunk id: 273744, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  s: () => c
});
var r, l, Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk159635 = require("./159635.js"),
  s = require.n(Chunk159635),
  Chunk481060 = require("./481060.js");
let c = (r = function(e) {
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
}({}, s().defaultRules.link), l = l = {
  react: function(e, t, n) {
    return (0, i.jsx)(o.Anchor, {
      href: e.target,
      target: "_blank",
      children: t(e.content, n)
    })
  }
}, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n.push.apply(n, r)
  }
  return n
})(Object(l)).forEach(function(e) {
  Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e))
}), r)