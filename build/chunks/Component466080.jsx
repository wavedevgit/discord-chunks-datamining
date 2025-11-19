/** Chunk was on 24874 **/
/** chunk id: 466080, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => l
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx");

function l(e) {
  var t, r, {
      onConfirm: l,
      onBack: a
    } = e,
    u = function(e, t) {
      if (null == e) return {};
      var r, n, o = function(e, t) {
        if (null == e) return {};
        var r, n, o = {},
          c = Object.keys(e);
        for (n = 0; n < c.length; n++) r = c[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
        return o
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var c = Object.getOwnPropertySymbols(e);
        for (n = 0; n < c.length; n++) r = c[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
      }
      return o
    }(e, ["onConfirm", "onBack"]);
  return (0, n.jsx)(c.ConfirmModal, (t = function(e) {
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
    header: i.intl.string(i.t.YrV3I9),
    confirmText: i.intl.string(i.t.X7eUJq),
    cancelText: i.intl.string(i.t["13/7kX"]),
    confirmButtonColor: o.zx.Colors.BRAND,
    onConfirm: l,
    onCancel: a
  }, u), r = r = {
    children: (0, n.jsx)(c.Text, {
      variant: "text-md/medium",
      children: i.intl.string(i.t.MXSMtl)
    })
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