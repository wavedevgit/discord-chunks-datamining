/** Chunk was on 24478 **/
/** chunk id: 319481, original params: t,r,e (module,exports,require) **/
require.d(exports, {
  default: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk793030 = require("./793030.js"),
  Chunk388032 = require("./388032.jsx");

function c(t) {
  var {
    onConfirm: r
  } = t, e = function(t, r) {
    if (null == t) return {};
    var e, n, i = function(t, r) {
      if (null == t) return {};
      var e, n, i = {},
        o = Object.keys(t);
      for (n = 0; n < o.length; n++) e = o[n], r.indexOf(e) >= 0 || (i[e] = t[e]);
      return i
    }(t, r);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(t);
      for (n = 0; n < o.length; n++) e = o[n], !(r.indexOf(e) >= 0) && Object.prototype.propertyIsEnumerable.call(t, e) && (i[e] = t[e])
    }
    return i
  }(t, ["onConfirm"]);
  return (0, n.jsx)(i.ConfirmModal, function(t) {
    for (var r = 1; r < arguments.length; r++) {
      var e = null != arguments[r] ? arguments[r] : {},
        n = Object.keys(e);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(e).filter(function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), n.forEach(function(r) {
        var n;
        n = e[r], r in t ? Object.defineProperty(t, r, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : t[r] = n
      })
    }
    return t
  }({
    title: o.intl.string(o.t["5yTUuc"]),
    subtitle: o.intl.string(o.t.dRhrXh),
    variant: "primary",
    confirmText: o.intl.string(o.t.TyCVIq),
    onConfirm: r
  }, e))
}