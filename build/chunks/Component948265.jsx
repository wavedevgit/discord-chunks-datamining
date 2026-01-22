/** Chunk was on 64864 **/
/** chunk id: 948265, original params: e,t,c (module,exports,require) **/
require.d(exports, {
  default: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk87719 = require("./87719.js"),
  Chunk377108 = require("./377108.js"),
  Chunk244975 = require("./244975.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function f(e) {
  let {
    premiumUpsellType: t,
    title: c,
    body: f,
    glowUp: p,
    analyticsSource: b,
    onClose: A,
    onSecondaryClick: l
  } = e, i = function(e, t) {
    if (null == e) return {};
    var c, a, n, d = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (n = 0, c = Reflect.ownKeys(e); n < c.length; n++) a = c[n], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (d[a] = e[a]);
      return d
    }
    if (d = function(e, t) {
        if (null == e) return {};
        var c, a, n = {},
          d = Object.getOwnPropertyNames(e);
        for (a = 0; a < d.length; a++) c = d[a], !(t.indexOf(c) >= 0) && Object.prototype.propertyIsEnumerable.call(e, c) && (n[c] = e[c]);
        return n
      }(e, t), Object.getOwnPropertySymbols)
      for (n = 0, c = Object.getOwnPropertySymbols(e); n < c.length; n++) a = c[n], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (d[a] = e[a]);
    return d
  }(e, ["premiumUpsellType", "title", "body", "glowUp", "analyticsSource", "onClose", "onSecondaryClick"]), u = (0, d.A)(t);
  return (0, a.jsx)(s.A, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var c = null != arguments[t] ? arguments[t] : {},
        a = Object.keys(c);
      "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(c).filter(function(e) {
        return Object.getOwnPropertyDescriptor(c, e).enumerable
      }))), a.forEach(function(t) {
        var a;
        a = c[t], t in e ? Object.defineProperty(e, t, {
          value: a,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = a
      })
    }
    return e
  }({
    artURL: u,
    type: t,
    title: c,
    body: f,
    glowUp: p,
    onSecondaryClick: () => {
      l(), (0, n.x)(A)
    },
    secondaryCTA: r.intl.string(r.t.PcTCB7),
    onClose: A,
    enableArtBoxShadow: false,
    analyticsSource: b,
    analyticsLocation: {
      section: o.JJy.USER_PROFILE,
      object: o.ZSU.BUTTON_CTA
    },
    hideBackButton: true,
    showEnhancedUpsell: true
  }, i))
}