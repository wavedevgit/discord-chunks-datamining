/** Chunk was on 91173 **/
/** chunk id: 266076, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk43267 = require("./43267.js"),
  Chunk93687 = require("./93687.js"),
  Chunk785232 = require("./785232.jsx");
let c = Chunk647438.memo(function(e) {
  var {
    channel: t,
    size: n,
    facepileSizeOverride: i,
    experimentLocation: c,
    isTyping: u,
    status: d,
    className: p,
    animated: m = false
  } = e, f = function(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(e, ["channel", "size", "facepileSizeOverride", "experimentLocation", "isTyping", "status", "className", "animated"]);
  let {
    isFacepileEnabled: g
  } = a.Z.useExperiment({
    location: c
  }, {
    autoTrackExposure: true
  });
  return t.recipients.length >= 2 && g && null == t.icon ? (0, r.jsx)(s.Z, {
    "aria-label": f["aria-label"],
    "aria-hidden": f["aria-hidden"],
    className: p,
    recipients: t.recipients,
    size: null != i ? i : n,
    isTyping: u,
    status: d
  }) : (0, r.jsx)(l.qEK, {
    "aria-hidden": f["aria-hidden"],
    "aria-label": f["aria-label"],
    className: p,
    size: n,
    src: (0, o.x)(t, 80, m)
  })
})