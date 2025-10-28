/** Chunk was on 65045 **/
/** chunk id: 143782, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk273352 = require("./273352.jsx"),
  Chunk153867 = require("./153867.js"),
  Chunk493773 = require("./493773.js"),
  Chunk933557 = require("./933557.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let s = e => {
  var {
    onConfirm: n,
    channel: t
  } = e, s = function(e, n) {
    if (null == e) return {};
    var t, r, o = function(e, n) {
      if (null == e) return {};
      var t, r, o = {},
        i = Object.keys(e);
      for (r = 0; r < i.length; r++) t = i[r], n.indexOf(t) >= 0 || (o[t] = e[t]);
      return o
    }(e, n);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (r = 0; r < i.length; r++) t = i[r], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
    }
    return o
  }(e, ["onConfirm", "channel"]);
  let b = (0, c.ZP)(t);
  return ((0, l.ZP)(() => {
    a.default.track(u.rMx.OPEN_MODAL, {
      type: "Voice channel change confirmation",
      channel_id: t.id
    })
  }), null == b) ? null : (0, r.jsx)(o.default, function(e) {
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
    confirmText: f.intl.string(f.t["cY+Oob"]),
    secondaryConfirmText: f.intl.string(f.t["JdIQ/Y"]),
    title: f.intl.string(f.t["0LZN5F"]),
    cancelText: f.intl.string(f.t["ETE/oC"]),
    onConfirm: n,
    onConfirmSecondary: () => {
      i.ZP.updatedUnsyncedSettings({
        disableVoiceChannelChangeAlert: true
      })
    },
    body: f.intl.format(f.t["vA+uEs"], {
      channel: b
    })
  }, s))
}