/** Chunk was on 1272 (2c78ad33b01d1e4b.js) **/
n.d(t, {
  r: () => s
});
var r, i, l = n(817718),
  o = n(612226),
  a = n(981631);
let s = (r = function(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}({}, o.oT), i = i = {
  [a.EkH.CAROUSEL_NEXT]: l.lI,
  [a.EkH.CAROUSEL_PREV]: l.hd
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