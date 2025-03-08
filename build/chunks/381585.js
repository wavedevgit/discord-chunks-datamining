/** Chunk was on 74329 **/
n.d(t, {
  k0: () => a,
  sp: () => l
});
var r = n(200651),
  i = n(192379);
let o = i.createContext(null);

function l() {
  return i.useContext(o)
}

function a(e) {
  let {
    newValue: t,
    children: n
  } = e, a = l(), s = i.useMemo(() => (function(e) {
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
  })({}, a, t), [a, t]);
  return (0, r.jsx)(o.Provider, {
    value: s,
    children: n
  })
}