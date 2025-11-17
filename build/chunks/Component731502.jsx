/** Chunk was on 28479 **/
/** chunk id: 731502, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js"),
  Chunk526167 = require("./526167.js"),
  Chunk7366 = require("./7366.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk849188 = require("./849188.js"),
  Chunk269369 = require("./269369.js");
let s = e => {
  var {
    handleLearnMore: t
  } = e, r = function(e, t) {
    if (null == e) return {};
    var r, n, o = function(e, t) {
      if (null == e) return {};
      var r, n, o = {},
        a = Object.keys(e);
      for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
      return o
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      for (n = 0; n < a.length; n++) r = a[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
    }
    return o
  }(e, ["handleLearnMore"]);
  let s = (0, o.rO)() ? l.Z : i.Z;
  return (0, n.jsx)(a.Z, function(e) {
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
    gradientColor: "nitro-pink",
    title: c.intl.string(c.t.ewxv3J),
    subtitle: c.intl.string(c.t.qlsCDB),
    videoSrc: s,
    loopAt: 5,
    onSecondaryClick: t
  }, r))
}