/** Chunk was on 95480 **/
/** chunk id: 923298, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk668781 = require("./668781.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function f(e) {
  var t, r, {
      header: f,
      children: b,
      sku_id: O,
      sku_name: p,
      guild_id: y,
      cancelLabel: d,
      confirmLabel: m,
      transitionState: g,
      onClose: j
    } = e,
    v = function(e, t) {
      if (null == e) return {};
      var r, n, o = function(e, t) {
        if (null == e) return {};
        var r, n, o = {},
          i = Object.keys(e);
        for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
        return o
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
      }
      return o
    }(e, ["header", "children", "sku_id", "sku_name", "guild_id", "cancelLabel", "confirmLabel", "transitionState", "onClose"]);
  let P = (0, o.e7)([c.default], () => c.default.getCurrentUser());
  return (0, n.jsx)(i.ConfirmModal, (t = function(e) {
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
    header: null != f ? f : s.intl.string(s.t["+78Pfm"]),
    cancelText: null != d ? d : s.intl.string(s.t["ETE/oC"]),
    confirmText: null != m ? m : s.intl.string(s.t["+78Pfm"]),
    onConfirm: () => {
      a.default.track(u.rMx.TNS_SKU_REPORT_SUBMITTED, {
        sku_id: O,
        guild_id: y,
        user_id: null == P ? true : P.id
      }), l.Z.show({
        title: s.intl.string(s.t.sUvCKU),
        body: s.intl.format(s.t["7KJnk0"], {
          skuName: p
        })
      })
    },
    transitionState: g,
    onClose: j
  }, v), r = r = {
    children: b
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