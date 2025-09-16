/** Chunk was on 74379 **/
/** chunk id: 295510, original params: e,n,t (module,exports,require) **/
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
    type: n,
    onConfirm: t
  } = e, a = function(e, n) {
    if (null == e) return {};
    var t, r, i = function(e, n) {
      if (null == e) return {};
      var t, r, i = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++) t = l[r], n.indexOf(t) >= 0 || (i[t] = e[t]);
      return i
    }(e, n);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (r = 0; r < l.length; r++) t = l[r], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t])
    }
    return i
  }(e, ["type", "onConfirm"]);
  let c = n === o.K.STREAM ? s.intl.string(s.t["/lFMWl"]) : s.intl.string(s.t.xzxhZW),
    d = n === o.K.STREAM ? s.intl.string(s.t.xaOX7e) : s.intl.string(s.t.oU1p9P);
  return (0, r.jsx)(l.default, function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = null != arguments[n] ? arguments[n] : {},
        r = Object.keys(t);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), r.forEach(function(n) {
        var r;
        r = t[n], n in e ? Object.defineProperty(e, n, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[n] = r
      })
    }
    return e
  }({
    confirmText: s.intl.string(s.t["cY+Ooa"]),
    secondaryConfirmText: s.intl.string(s.t["JdIQ/f"]),
    title: c,
    cancelText: s.intl.string(s.t["ETE/oK"]),
    onConfirm: t,
    onConfirmSecondary: () => {
      i.ZP.updatedUnsyncedSettings({
        disableHideSelfStreamAndVideoConfirmationAlert: true
      })
    },
    body: d
  }, a))
}