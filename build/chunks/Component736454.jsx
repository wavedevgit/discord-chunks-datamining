/** Chunk was on 27157 **/
/** chunk id: 736454, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => a
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk153867 = require("./153867.js"),
  Chunk388032 = require("./388032.jsx");

function a(t) {
  var {
    onSubmit: e,
    onClose: n
  } = t, a = function(t, e) {
    if (null == t) return {};
    var n, r, o = function(t, e) {
      if (null == t) return {};
      var n, r, o = {},
        i = Object.keys(t);
      for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
      return o
    }(t, e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(t);
      for (r = 0; r < i.length; r++) n = i[r], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
    }
    return o
  }(t, ["onSubmit", "onClose"]);
  let [u, s] = o.useState(false);
  return (0, r.jsx)(i.sm4, function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
        return Object.getOwnPropertyDescriptor(n, t).enumerable
      }))), r.forEach(function(e) {
        var r;
        r = n[e], e in t ? Object.defineProperty(t, e, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : t[e] = r
      })
    }
    return t
  }({
    title: c.intl.string(c.t.HlAPoq),
    subtitle: c.intl.string(c.t.Jz3oqA),
    variant: "active",
    confirmText: c.intl.string(c.t.rimG2R),
    cancelText: c.intl.string(c.t["ETE/oC"]),
    onConfirm: e,
    onClose: () => (u && l.ZP.updatedUnsyncedSettings({
      disableCallUserConfirmationPrompt: true
    }), n()),
    checkboxProps: {
      checked: u,
      onChange: t => s(t),
      label: c.intl.string(c.t["JdIQ/Y"])
    }
  }, a))
}