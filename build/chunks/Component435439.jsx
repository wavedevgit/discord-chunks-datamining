/** Chunk was on 30243 **/
/** chunk id: 435439, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk255367 = require("./255367.js"),
  Chunk481060 = require("./481060.js"),
  Chunk374129 = require("./374129.jsx"),
  Chunk639351 = require("./639351.jsx"),
  Chunk908841 = require("./908841.jsx"),
  Chunk410441 = require("./410441.jsx"),
  Chunk206583 = require("./206583.js"),
  Chunk388032 = require("./388032.jsx");
let d = {
    [Chunk206583.kG.SPOTIFY]: Chunk908841.Z,
    [Chunk206583.kG.CRUNCHYROLL]: Chunk481060.omf,
    [Chunk206583.kG.XBOX]: Chunk639351.Z,
    [Chunk206583.kG.PLAYSTATION]: Chunk374129.Z
  },
  p = {
    [Chunk206583.kG.SPOTIFY]: () => Chunk388032.intl.string(Chunk388032.t["0ZB/XF"]),
    [Chunk206583.kG.CRUNCHYROLL]: () => Chunk388032.intl.string(Chunk388032.t.jdJYX1),
    [Chunk206583.kG.XBOX]: () => Chunk388032.intl.string(Chunk388032.t["Nfvo7+"]),
    [Chunk206583.kG.PLAYSTATION]: () => Chunk388032.intl.string(Chunk388032.t.fFl4jo)
  };

function f(e) {
  var t, r, l, {
      type: i,
      "aria-label": o
    } = e,
    a = function(e, t) {
      if (null == e) return {};
      var r, n, l = function(e, t) {
        if (null == e) return {};
        var r, n, l = {},
          i = Object.keys(e);
        for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (l[r] = e[r]);
        return l
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r])
      }
      return l
    }(e, ["type", "aria-label"]);
  let s = d[i];
  if (null == s) return null;
  let u = null != o ? o : null == (l = p[i]) ? true : l.call(p);
  return (0, n.jsx)(c.Z, (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
        n = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable
      }))), n.forEach(function(t) {
        var n;
        n = r[t], t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = n
      })
    }
    return e
  }({
    Icon: s
  }, a), r = r = {
    "aria-label": u
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(r)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
  }), t))
}