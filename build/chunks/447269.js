/** Chunk was on 1272 **/
/** chunk id: 447269, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  r: () => o
});
var r, i, Chunk817718 = require("./817718.js"),
  Chunk612226 = require("./612226.js"),
  Chunk981631 = require("./981631.js");
let o = (r = function(e) {
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
}({}, Chunk612226.oT), i = i = {
  [Chunk981631.EkH.CAROUSEL_NEXT]: Chunk817718.lI,
  [Chunk981631.EkH.CAROUSEL_PREV]: Chunk817718.hd
}, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n.push.apply(n, r)
  }
  return n
})(Object(i)).forEach(function(e) {
  Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
}), r)