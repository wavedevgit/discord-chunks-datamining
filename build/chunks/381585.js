/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  k0: () => s,
  sp: () => o
});
var n = r(200651),
  l = r(192379);
let i = l.createContext(null);

function o() {
  return l.useContext(i)
}

function s(e) {
  let {
    newValue: t,
    children: r
  } = e, s = o(), a = l.useMemo(() => (function(e) {
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
  })({}, s, t), [s, t]);
  return (0, n.jsx)(i.Provider, {
    value: a,
    children: r
  })
}