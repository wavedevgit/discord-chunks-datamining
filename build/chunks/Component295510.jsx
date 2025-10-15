/** Chunk was on 26775 **/
/** chunk id: 295510, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk153867 = require("./153867.js"),
  Chunk468026 = require("./468026.jsx"),
  Chunk394059 = require("./394059.js"),
  Chunk388032 = require("./388032.jsx");

function a(e) {
  var {
    type: t,
    onConfirm: r
  } = e, a = function(e, t) {
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
  }(e, ["type", "onConfirm"]);
  let u = t === l.K.STREAM ? c.intl.string(c.t["/lFMWl"]) : c.intl.string(c.t.xzxhZW),
    f = t === l.K.STREAM ? c.intl.string(c.t.xaOX7e) : c.intl.string(c.t.oU1p9P);
  return (0, n.jsx)(i.default, function(e) {
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
    confirmText: c.intl.string(c.t["cY+Ooa"]),
    secondaryConfirmText: c.intl.string(c.t["JdIQ/f"]),
    title: u,
    cancelText: c.intl.string(c.t["ETE/oK"]),
    onConfirm: r,
    onConfirmSecondary: () => {
      o.ZP.updatedUnsyncedSettings({
        disableHideSelfStreamAndVideoConfirmationAlert: true
      })
    },
    body: f
  }, a))
}