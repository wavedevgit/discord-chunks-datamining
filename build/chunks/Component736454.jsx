/** Chunk was on 27157 **/
/** chunk id: 736454, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => u
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk153867 = require("./153867.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk412335 = require("./412335.js");

function u(e) {
  var t, r, {
      onSubmit: u,
      onClose: p
    } = e,
    b = function(e, t) {
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
    }(e, ["onSubmit", "onClose"]);
  let [f, O] = o.useState(false);
  return (0, n.jsxs)(i.ConfirmModal, (t = function(e) {
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
    header: s.intl.string(s.t.HlAPoq),
    confirmButtonColor: c.zx.Colors.GREEN,
    confirmText: s.intl.string(s.t.rimG2d),
    cancelText: s.intl.string(s.t["ETE/oK"]),
    onConfirm: u,
    onClose: () => (f && l.ZP.updatedUnsyncedSettings({
      disableCallUserConfirmationPrompt: true
    }), p())
  }, b), r = r = {
    children: [(0, n.jsx)(i.Text, {
      variant: "text-md/normal",
      children: s.intl.string(s.t.Jz3oqK)
    }), (0, n.jsx)(i.XZJ, {
      type: i.XZJ.Types.INVERTED,
      value: f,
      onChange: (e, t) => O(t),
      className: a.checkbox,
      children: (0, n.jsx)(i.Text, {
        variant: "text-md/normal",
        children: s.intl.string(s.t["JdIQ/f"])
      })
    })]
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