/** Chunk was on 20941 **/
/** chunk id: 156603, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk397927 = require("./397927.js"),
  Chunk790381 = require("./790381.jsx"),
  Chunk266080 = require("./266080.jsx"),
  Chunk121090 = require("./121090.jsx"),
  Chunk18282 = require("./18282.jsx"),
  Chunk424994 = require("./424994.js"),
  Chunk985018 = require("./985018.jsx");
let d = {
    [Chunk424994.a4.SPOTIFY]: Chunk121090.A,
    [Chunk424994.a4.CRUNCHYROLL]: Chunk397927.kwD,
    [Chunk424994.a4.XBOX]: Chunk266080.A,
    [Chunk424994.a4.PLAYSTATION]: Chunk790381.A
  },
  m = {
    [Chunk424994.a4.SPOTIFY]: () => u.intl.string(u.t["0ZB/XE"]),
    [Chunk424994.a4.CRUNCHYROLL]: () => u.intl.string(u.t.jdJYXw),
    [Chunk424994.a4.XBOX]: () => u.intl.string(u.t.Nfvo72),
    [Chunk424994.a4.PLAYSTATION]: () => u.intl.string(u.t.fFl4jo)
  };

function f(e) {
  var t, n, l;
  let {
    type: a,
    "aria-label": i
  } = e, s = function(e, t) {
    if (null == e) return {};
    var n, r, l, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
      return a
    }
    if (a = function(e, t) {
        if (null == e) return {};
        var n, r, l = {},
          a = Object.getOwnPropertyNames(e);
        for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
        return l
      }(e, t), Object.getOwnPropertySymbols)
      for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }(e, ["type", "aria-label"]), c = d[a];
  if (null == c) return null;
  let u = null != i ? i : null == (t = m[a]) ? true : t.call(m);
  return (0, r.jsx)(o.A, (n = function(e) {
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
  }({
    Icon: c
  }, s), l = l = {
    "aria-label": u
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(l)).forEach(function(e) {
    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
  }), n))
}