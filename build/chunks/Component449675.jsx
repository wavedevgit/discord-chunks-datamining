/** Chunk was on 83613 **/
/** chunk id: 449675, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => l
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk65912 = require("./65912.js"),
  Chunk388032 = require("./388032.jsx");

function l(e) {
  var t, r, {
      ruleName: l,
      onConfirm: f
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
    }(e, ["ruleName", "onConfirm"]);
  let {
    setEditingRule: a
  } = (0, c.V)(), b = null != l ? l : i.intl.string(i.t.ffR2cM);
  return (0, n.jsx)(o.ConfirmModal, (t = function(e) {
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
  }({}, u), r = r = {
    header: i.intl.string(i.t.kknTmH),
    cancelText: i.intl.string(i.t["ETE/oC"]),
    confirmText: i.intl.string(i.t["cY+Oob"]),
    onConfirm: () => {
      a(null), null == f || f()
    },
    children: (0, n.jsx)(o.Text, {
      variant: "text-md/normal",
      children: i.intl.format(i.t["ff/gx7"], {
        ruleName: b
      })
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