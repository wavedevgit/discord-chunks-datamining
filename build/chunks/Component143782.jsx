/** Chunk was on 65045 **/
/** chunk id: 143782, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => b
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk153867 = require("./153867.js"),
  Chunk493773 = require("./493773.js"),
  Chunk933557 = require("./933557.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let b = t => {
  var {
    onConfirm: e,
    channel: n,
    onClose: b,
    transitionState: p
  } = t, d = function(t, e) {
    if (null == t) return {};
    var n, r, i = function(t, e) {
      if (null == t) return {};
      var n, r, i = {},
        a = Object.keys(t);
      for (r = 0; r < a.length; r++) n = a[r], e.indexOf(n) >= 0 || (i[n] = t[n]);
      return i
    }(t, e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(t);
      for (r = 0; r < a.length; r++) n = a[r], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n])
    }
    return i
  }(t, ["onConfirm", "channel", "onClose", "transitionState"]);
  let y = (0, c.ZP)(n),
    [O, h] = i.useState(false);
  return ((0, l.ZP)(() => {
    u.default.track(s.rMx.OPEN_MODAL, {
      type: "Voice channel change confirmation",
      channel_id: n.id
    })
  }), null == y) ? null : (0, r.jsx)(a.Modal, function(t) {
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
    title: f.intl.string(f.t["0LZN5F"]),
    subtitle: f.intl.format(f.t["vA+uEs"], {
      channel: y
    }),
    transitionState: p,
    size: "md",
    onClose: b,
    actionBarInput: (0, r.jsx)(a.XZJ, {
      checked: O,
      onChange: t => {
        o.ZP.updatedUnsyncedSettings({
          disableVoiceChannelChangeAlert: t
        }), h(t)
      },
      label: f.intl.string(f.t["JdIQ/Y"])
    }),
    actions: [{
      variant: "secondary",
      text: f.intl.string(f.t["ETE/oC"]),
      onClick: b
    }, {
      variant: "primary",
      text: f.intl.string(f.t["cY+Oob"]),
      onClick: () => {
        e(), b()
      }
    }]
  }, d))
}