/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  k0: () => a,
  sp: () => o
});
var n = r(200651),
  i = r(192379);
let l = i.createContext(null);

function o() {
  return i.useContext(l)
}

function a(e) {
  let {
    newValue: t,
    children: r
  } = e, a = o(), s = i.useMemo(() => (function(e) {
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
  })({}, a, t), [a, t]);
  return (0, n.jsx)(l.Provider, {
    value: s,
    children: r
  })
}