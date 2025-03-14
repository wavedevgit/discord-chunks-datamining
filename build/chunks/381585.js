/** Chunk was on 95617 **/
n.d(t, {
  k0: () => s,
  sp: () => l
});
var r = n(200651),
  i = n(192379);
let o = 12633 == n.j ? i.createContext(null) : null;

function l() {
  return i.useContext(o)
}

function s(e) {
  let {
    newValue: t,
    children: n
  } = e, s = l(), a = i.useMemo(() => (function(e) {
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
  })({}, s, t), [s, t]);
  return (0, r.jsx)(o.Provider, {
    value: a,
    children: n
  })
}