/** Chunk was on 9753 **/
/** chunk id: 439303, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E9: () => c,
  jM: () => o
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk812729 = require("./812729.js"),
  a = require.n(Chunk812729);
let s = Chunk64700.createContext({});

function o() {
  return i.useContext(s)
}

function c(e) {
  let {
    newValue: t,
    children: n
  } = e, l = o(), c = i.useMemo(() => {
    let e = function(e) {
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
    }({}, l, t);
    return a()(l, e) && null != l ? l : e
  }, [l, t]);
  return (0, r.jsx)(s.Provider, {
    value: c,
    children: n
  })
}