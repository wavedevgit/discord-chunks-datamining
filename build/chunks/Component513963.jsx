/** Chunk was on 92617 **/
/** chunk id: 513963, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk732955 = require("./732955.js"),
  Chunk817281 = require("./817281.js"),
  Chunk951829 = require("./951829.js"),
  Chunk985018 = require("./985018.jsx");

function c(e) {
  let {
    type: t,
    onConfirm: n,
    onClose: c
  } = e, u = function(e, t) {
    if (null == e) return {};
    var n, r, i, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
      return a
    }
    if (a = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          a = Object.getOwnPropertyNames(e);
        for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
        return i
      }(e, t), Object.getOwnPropertySymbols)
      for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }(e, ["type", "onConfirm", "onClose"]), [s, f] = i.useState(false), p = i.useCallback(() => {
    s && l.Ay.updatedUnsyncedSettings({
      disableHideSelfStreamAndVideoConfirmationAlert: true
    }), n(), c()
  }, [n, s, c]), b = t === o.f.STREAM ? d.intl.string(d.t["/lFMWr"]) : d.intl.string(d.t.xzxhZS), v = t === o.f.STREAM ? d.intl.string(d.t.xaOX7d) : d.intl.string(d.t.oU1p9O);
  return (0, r.jsx)(a.aFV, function(e) {
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
    size: "md",
    actionBarInput: (0, r.jsx)(a.Sc0, {
      checked: s,
      onChange: e => f(e),
      label: d.intl.string(d.t["JdIQ/Y"]),
      labelType: "secondary"
    }),
    actions: [{
      variant: "secondary",
      text: d.intl.string(d.t["ETE/oC"]),
      onClick: c
    }, {
      variant: "primary",
      text: d.intl.string(d.t.BddRzS),
      onClick: p
    }],
    title: b,
    subtitle: v,
    onClose: c
  }, u))
}