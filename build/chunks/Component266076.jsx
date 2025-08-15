/** Chunk was on 86590 **/
/** chunk id: 266076, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk43267 = require("./43267.js"),
  Chunk93687 = require("./93687.js"),
  Chunk785232 = require("./785232.jsx");
let o = Chunk647438.memo(function(e) {
  var {
    channel: t,
    size: n,
    facepileSizeOverride: r,
    experimentLocation: o,
    isTyping: u,
    status: d,
    className: f,
    animated: E = false
  } = e, I = function(e, t) {
    if (null == e) return {};
    var n, i, r = function(e, t) {
      if (null == e) return {};
      var n, i, r = {},
        a = Object.keys(e);
      for (i = 0; i < a.length; i++) n = a[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
      return r
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
  }(e, ["channel", "size", "facepileSizeOverride", "experimentLocation", "isTyping", "status", "className", "animated"]);
  let {
    isFacepileEnabled: p
  } = s.Z.useExperiment({
    location: o
  }, {
    autoTrackExposure: true
  });
  return t.recipients.length >= 2 && p && null == t.icon ? (0, i.jsx)(c.Z, {
    "aria-label": I["aria-label"],
    "aria-hidden": I["aria-hidden"],
    className: f,
    recipients: t.recipients,
    size: null != r ? r : n,
    isTyping: u,
    status: d
  }) : (0, i.jsx)(a.qEK, {
    "aria-hidden": I["aria-hidden"],
    "aria-label": I["aria-label"],
    className: f,
    size: n,
    src: (0, l.x)(t, 80, E)
  })
})