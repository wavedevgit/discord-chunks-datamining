/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  Db: () => s
}), r(301563), r(610138), r(216116), r(78328), r(815648), r(47120);
var n = r(192379),
  i = r(512969),
  l = r(37234),
  o = r(703656),
  a = r(981631);

function s() {
  let {
    search: e
  } = (0, i.TH)(), t = (0, i.UO)(), r = n.useMemo(() => new URLSearchParams(e), [e]).get("source"), s = null != r ? parseInt(r, 10) : null;
  return function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
        n = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable
      }))), n.forEach(function(t) {
        var n;
        n = r[t], t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n
      })
    }
    return e
  }({
    onClose: n.useCallback(() => {
      if (0 === s) {
        (0, o.op)(), (0, l.jN)(a.S9g.USER_SETTINGS);
        return
      }
      if ((0, o.uv)()) {
        (0, o.op)();
        return
      }(0, o.uL)(a.Z5c.APP)
    }, [s]),
    source: s
  }, t)
}