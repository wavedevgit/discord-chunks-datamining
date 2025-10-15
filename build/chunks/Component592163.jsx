/** Chunk was on 87200 **/
/** chunk id: 592163, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => f
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk98278 = require("./98278.js"),
  Chunk790527 = require("./790527.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk252917 = require("./252917.js"),
  Chunk954696 = require("./954696.js");

function f(t) {
  var {
    onClose: e,
    analyticsSource: n,
    onLearnMore: f
  } = t, b = function(t, e) {
    if (null == t) return {};
    var n, r, o = function(t, e) {
      if (null == t) return {};
      var n, r, o = {},
        c = Object.keys(t);
      for (r = 0; r < c.length; r++) n = c[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
      return o
    }(t, e);
    if (Object.getOwnPropertySymbols) {
      var c = Object.getOwnPropertySymbols(t);
      for (r = 0; r < c.length; r++) n = c[r], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
    }
    return o
  }(t, ["onClose", "analyticsSource", "onLearnMore"]);
  let p = a.Si.TIER_2,
    d = l.intl.format(l.t.hDMlqD, {
      onLearnMore: function() {
        null == f || f(), e(), (0, o.z)()
      }
    });
  return (0, r.jsx)(c.Z, function(t) {
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
    artURL: s.Z,
    artContainerClassName: u.videoBackgroundArt,
    type: a.cd.VIDEO_BACKGROUNDS_MODAL,
    title: l.intl.string(l.t.fHqiDW),
    body: d,
    glowUp: d,
    analyticsSource: n,
    analyticsLocation: {
      page: i.ZY5.PREMIUM_UPSELL_MODAL_VIDEO_BACKGROUNDS,
      object: i.qAy.BUTTON_CTA
    },
    onClose: e,
    subscriptionTier: p
  }, b))
}