/** Chunk was on 43360 **/
/** chunk id: 73415, original params: e,c,t (module,exports,require) **/
require.d(exports, {
  default: () => r
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk98278 = require("./98278.js"),
  Chunk792254 = require("./792254.js"),
  Chunk790527 = require("./790527.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function r(e) {
  var {
    premiumUpsellType: c,
    title: t,
    body: r,
    glowUp: b,
    analyticsSource: p,
    onClose: i,
    onSecondaryClick: u
  } = e, l = function(e, c) {
    if (null == e) return {};
    var t, n, a = function(e, c) {
      if (null == e) return {};
      var t, n, a = {},
        d = Object.keys(e);
      for (n = 0; n < d.length; n++) t = d[n], c.indexOf(t) >= 0 || (a[t] = e[t]);
      return a
    }(e, c);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(e);
      for (n = 0; n < d.length; n++) t = d[n], !(c.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (a[t] = e[t])
    }
    return a
  }(e, ["premiumUpsellType", "title", "body", "glowUp", "analyticsSource", "onClose", "onSecondaryClick"]);
  let A = (0, d.Z)(c);
  return (0, n.jsx)(o.Z, function(e) {
    for (var c = 1; c < arguments.length; c++) {
      var t = null != arguments[c] ? arguments[c] : {},
        n = Object.keys(t);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), n.forEach(function(c) {
        var n;
        n = t[c], c in e ? Object.defineProperty(e, c, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[c] = n
      })
    }
    return e
  }({
    artURL: A,
    type: c,
    title: t,
    body: r,
    glowUp: b,
    onSecondaryClick: () => {
      u(), (0, a.$)(i)
    },
    secondaryCTA: f.intl.string(f.t.PcTCB7),
    onClose: i,
    enableArtBoxShadow: false,
    analyticsSource: p,
    analyticsLocation: {
      section: s.jXE.USER_PROFILE,
      object: s.qAy.BUTTON_CTA
    },
    hideBackButton: true,
    showEnhancedUpsell: true
  }, l))
}