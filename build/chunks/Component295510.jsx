/** Chunk was on 26775 **/
/** chunk id: 295510, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk159691 = require("./159691.js"),
  Chunk153867 = require("./153867.js"),
  Chunk394059 = require("./394059.js"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  var {
    type: t,
    onConfirm: r,
    onClose: u
  } = e, s = function(e, t) {
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
  }(e, ["type", "onConfirm", "onClose"]);
  let [f, b] = o.useState(false), p = o.useCallback(() => {
    f && l.ZP.updatedUnsyncedSettings({
      disableHideSelfStreamAndVideoConfirmationAlert: true
    }), r(), u()
  }, [r, f, u]), y = t === c.K.STREAM ? a.intl.string(a.t["/lFMWr"]) : a.intl.string(a.t.xzxhZS), O = t === c.K.STREAM ? a.intl.string(a.t.xaOX7d) : a.intl.string(a.t.oU1p9O);
  return (0, n.jsx)(i.u_l, function(e) {
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
    size: "md",
    actionBarInput: (0, n.jsx)(i.XZJ, {
      checked: f,
      onChange: e => b(e),
      label: a.intl.string(a.t["JdIQ/Y"]),
      labelType: "secondary"
    }),
    actions: [{
      variant: "secondary",
      text: a.intl.string(a.t["ETE/oC"]),
      onClick: u
    }, {
      variant: "primary",
      text: a.intl.string(a.t.BddRzS),
      onClick: p
    }],
    title: y,
    subtitle: O,
    onClose: u
  }, s))
}