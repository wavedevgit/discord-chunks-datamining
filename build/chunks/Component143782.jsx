/** Chunk was on 65045 **/
/** chunk id: 143782, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => a
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk153867 = require("./153867.js"),
  Chunk468026 = require("./468026.jsx"),
  Chunk933557 = require("./933557.js"),
  Chunk388032 = require("./388032.jsx");
let a = t => {
  var {
    onConfirm: e,
    channel: n
  } = t, a = function(t, e) {
    if (null == t) return {};
    var n, r, o = function(t, e) {
      if (null == t) return {};
      var n, r, o = {},
        l = Object.keys(t);
      for (r = 0; r < l.length; r++) n = l[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
      return o
    }(t, e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(t);
      for (r = 0; r < l.length; r++) n = l[r], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
    }
    return o
  }(t, ["onConfirm", "channel"]);
  let u = (0, i.ZP)(n);
  return null == u ? null : (0, r.jsx)(l.default, function(t) {
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
    confirmText: c.intl.string(c.t["cY+Ooa"]),
    secondaryConfirmText: c.intl.string(c.t["JdIQ/f"]),
    title: c.intl.string(c.t["0LZN5O"]),
    cancelText: c.intl.string(c.t["ETE/oK"]),
    onConfirm: e,
    onConfirmSecondary: () => {
      o.ZP.updatedUnsyncedSettings({
        disableVoiceChannelChangeAlert: true
      })
    },
    body: c.intl.format(c.t["vA+uEh"], {
      channel: u
    })
  }, a))
}