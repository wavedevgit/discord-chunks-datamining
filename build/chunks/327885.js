/** Chunk was on 10451 **/
n.d(t, {
  Z: () => u
});
var r = n(200651);
n(192379);
var i = n(442837),
  s = n(615287),
  a = n(32300),
  o = n(371651),
  l = n(3506),
  c = n(794704);

function d(e) {
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
}

function u(e) {
  let t = (0, a.XE)("user_settings"),
    n = (0, i.e7)([o.default], () => o.default.getForcedRenderMode()),
    u = n === s.R5.OUT_OF_PROCESS_V2 || n === s.R5.OUT_OF_PROCESS_V3;
  return t || u ? (0, r.jsx)(c.Z, d({}, e)) : (0, r.jsx)(l.Z, d({}, e))
}