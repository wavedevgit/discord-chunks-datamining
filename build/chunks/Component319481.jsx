/** Chunk was on 24478 **/
/** chunk id: 319481, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  default: () => l
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx");

function l(t) {
  var e, r, {
      onConfirm: l
    } = t,
    u = function(t, e) {
      if (null == t) return {};
      var r, n, o = function(t, e) {
        if (null == t) return {};
        var r, n, o = {},
          c = Object.keys(t);
        for (n = 0; n < c.length; n++) r = c[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
        return o
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var c = Object.getOwnPropertySymbols(t);
        for (n = 0; n < c.length; n++) r = c[n], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
      }
      return o
    }(t, ["onConfirm"]);
  return (0, n.jsx)(c.ConfirmModal, (e = function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = null != arguments[e] ? arguments[e] : {},
        n = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
        return Object.getOwnPropertyDescriptor(r, t).enumerable
      }))), n.forEach(function(e) {
        var n;
        n = r[e], e in t ? Object.defineProperty(t, e, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : t[e] = n
      })
    }
    return t
  }({
    header: i.intl.string(i.t["5yTUuc"]),
    confirmText: i.intl.string(i.t.TyCVIq),
    cancelText: i.intl.string(i.t["ETE/oC"]),
    confirmButtonColor: o.zx.Colors.BRAND,
    onConfirm: l
  }, u), r = r = {
    children: (0, n.jsx)(c.Text, {
      variant: "text-md/normal",
      children: i.intl.string(i.t.dRhrXh)
    })
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : (function(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(t);
      r.push.apply(r, n)
    }
    return r
  })(Object(r)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
  }), e))
}