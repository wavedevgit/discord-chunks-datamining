/** Chunk was on 43360 **/
/** chunk id: 73415, original params: t,c,e (module,exports,require) **/
require.d(exports, {
  default: () => b
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk979554 = require("./979554.js"),
  Chunk98278 = require("./98278.js"),
  Chunk792254 = require("./792254.js"),
  Chunk790527 = require("./790527.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx");

function b(t) {
  var {
    collectableType: c,
    onClose: e,
    analyticsSource: b,
    analyticsLocation: i,
    onSecondaryClick: p
  } = t, A = function(t, c) {
    if (null == t) return {};
    var e, n, a = function(t, c) {
      if (null == t) return {};
      var e, n, a = {},
        d = Object.keys(t);
      for (n = 0; n < d.length; n++) e = d[n], c.indexOf(e) >= 0 || (a[e] = t[e]);
      return a
    }(t, c);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(t);
      for (n = 0; n < d.length; n++) e = d[n], !(c.indexOf(e) >= 0) && Object.prototype.propertyIsEnumerable.call(t, e) && (a[e] = t[e])
    }
    return a
  }(t, ["collectableType", "onClose", "analyticsSource", "analyticsLocation", "onSecondaryClick"]);
  let l = c === a.Z.AVATAR_DECORATION || c === a.Z.PROFILE_EFFECT,
    u = (0, s.Z)(c === a.Z.AVATAR_DECORATION ? f.cd.AVATAR_DECORATION_MODAL_UPSELL : f.cd.PROFILE_EFFECT_MODAL_UPSELL);
  return l ? (0, n.jsx)(o.Z, function(t) {
    for (var c = 1; c < arguments.length; c++) {
      var e = null != arguments[c] ? arguments[c] : {},
        n = Object.keys(e);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(e).filter(function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), n.forEach(function(c) {
        var n;
        n = e[c], c in t ? Object.defineProperty(t, c, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : t[c] = n
      })
    }
    return t
  }({
    artURL: u,
    type: c === a.Z.AVATAR_DECORATION ? f.cd.AVATAR_DECORATION_MODAL_UPSELL : f.cd.PROFILE_EFFECT_MODAL_UPSELL,
    title: c === a.Z.AVATAR_DECORATION ? r.intl.string(r.t.JI7uhY) : r.intl.string(r.t.sYm15e),
    body: c === a.Z.AVATAR_DECORATION ? r.intl.string(r.t["5XvsdX"]) : r.intl.string(r.t["Hza+Bg"]),
    glowUp: c === a.Z.AVATAR_DECORATION ? r.intl.string(r.t["5XvsdX"]) : r.intl.string(r.t["Hza+Bg"]),
    onSecondaryClick: () => {
      p(), (0, d.$)(e)
    },
    secondaryCTA: r.intl.string(r.t.PcTCBw),
    onClose: e,
    enableArtBoxShadow: false,
    analyticsSource: b,
    analyticsLocation: i,
    hideBackButton: true,
    showEnhancedUpsell: true
  }, A)) : null
}