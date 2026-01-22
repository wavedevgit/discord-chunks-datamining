/** Chunk was on 25083 **/
/** chunk id: 886722, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk157559 = require("./157559.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function f(e) {
  var t, r;
  let {
    header: f,
    children: p,
    sku_id: b,
    sku_name: O,
    guild_id: y,
    cancelLabel: d,
    confirmLabel: m,
    transitionState: g,
    onClose: j
  } = e, w = function(e, t) {
    if (null == e) return {};
    var r, n, o, i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (o = 0, r = Reflect.ownKeys(e); o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
      return i
    }
    if (i = function(e, t) {
        if (null == e) return {};
        var r, n, o = {},
          i = Object.getOwnPropertyNames(e);
        for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
        return o
      }(e, t), Object.getOwnPropertySymbols)
      for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i
  }(e, ["header", "children", "sku_id", "sku_name", "guild_id", "cancelLabel", "confirmLabel", "transitionState", "onClose"]), P = (0, o.bG)([c.default], () => c.default.getCurrentUser());
  return (0, n.jsx)(i.VoidConfirmModal, (t = function(e) {
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
      a.default.track(u.HAw.TNS_SKU_REPORT_SUBMITTED, {
        sku_id: b,
        guild_id: y,
        user_id: null == P ? true : P.id
      }), l.A.show({
        title: s.intl.string(s.t.sUvCKU),
        body: s.intl.format(s.t["7KJnk0"], {
          skuName: O
        })
      })
    },
    transitionState: g,
    onClose: j
  }, w), r = r = {
    children: p
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