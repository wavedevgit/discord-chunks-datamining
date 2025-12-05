/** Chunk was on 90290 **/
/** chunk id: 975863, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk654904 = require("./654904.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk98278 = require("./98278.js"),
  Chunk790527 = require("./790527.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk486324 = require("./486324.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk89671 = require("./89671.js");

function d(t) {
  var {
    onClose: e,
    source: n
  } = t, d = function(t, e) {
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
  }(t, ["onClose", "source"]);
  let O = (0, o.e7)([a.default], () => a.default.getCurrentUser()),
    g = i.ZP.isPremium(O) ? b.t.E0sNsc : b.t.UBcuto,
    j = b.intl.format(g, {
      onLearnMore: function() {
        e(), (0, l.z)()
      }
    });
  return (0, r.jsx)(u.Z, function(t) {
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
    artURL: y.Z,
    type: s.cd.CUSTOM_PROFILE_UPSELL,
    title: b.intl.string(b.t.BbsMm4),
    body: j,
    glowUp: j,
    onSecondaryClick: () => {
      e(), (0, c.$r)({
        uploadType: p.pC.BANNER,
        analyticsSource: n
      })
    },
    secondaryCTA: b.intl.string(b.t.SpAQib),
    analyticsSource: n,
    analyticsLocation: {
      section: f.jXE.USER_PROFILE,
      object: f.qAy.BUTTON_CTA
    },
    onClose: e
  }, d))
}