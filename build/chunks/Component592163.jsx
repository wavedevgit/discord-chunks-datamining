/** Chunk was on 87200 **/
/** chunk id: 592163, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk98278 = require("./98278.js"),
  Chunk790527 = require("./790527.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk452059 = require("./452059.js"),
  Chunk105111 = require("./105111.js");

function f(e) {
  var {
    onClose: t,
    analyticsSource: n,
    onLearnMore: f
  } = e, b = function(e, t) {
    if (null == e) return {};
    var n, r, o = function(e, t) {
      if (null == e) return {};
      var n, r, o = {},
        c = Object.keys(e);
      for (r = 0; r < c.length; r++) n = c[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
      return o
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var c = Object.getOwnPropertySymbols(e);
      for (r = 0; r < c.length; r++) n = c[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
    }
    return o
  }(e, ["onClose", "analyticsSource", "onLearnMore"]);
  let p = a.Si.TIER_2,
    d = l.intl.format(l.t.hDMlqD, {
      onLearnMore: function() {
        null == f || f(), t(), (0, o.z)()
      }
    });
  return (0, r.jsx)(c.Z, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        var r;
        r = n[t], t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = r
      })
    }
    return e
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
    onClose: t,
    subscriptionTier: p
  }, b))
}