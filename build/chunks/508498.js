/** Chunk was on 45620 **/
"use strict";
n.d(t, {
  Db: () => i
}), n(301563), n(610138), n(216116), n(78328), n(815648), n(47120);
var r = n(192379),
  l = n(512969),
  a = n(37234),
  s = n(703656),
  o = n(981631);

function i() {
  let {
    search: e
  } = (0, l.TH)(), t = (0, l.UO)(), n = r.useMemo(() => new URLSearchParams(e), [e]).get("source"), i = null != n ? parseInt(n, 10) : null;
  return function(e) {
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
  }({
    onClose: r.useCallback(() => {
      if (0 === i) {
        (0, s.op)(), (0, a.jN)(o.S9g.USER_SETTINGS);
        return
      }
      if ((0, s.uv)()) {
        (0, s.op)();
        return
      }(0, s.uL)(o.Z5c.APP)
    }, [i]),
    source: i
  }, t)
}