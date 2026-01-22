/** Chunk was on 95743 **/
/** chunk id: 210402, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk87719 = require("./87719.js"),
  Chunk244975 = require("./244975.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk451067 = require("./451067.js"),
  Chunk196436 = require("./196436.js");

function u(e) {
  let {
    onClose: t,
    analyticsSource: r,
    onLearnMore: u
  } = e, f = function(e, t) {
    if (null == e) return {};
    var r, n, o, c = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (o = 0, r = Reflect.ownKeys(e); o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (c[n] = e[n]);
      return c
    }
    if (c = function(e, t) {
        if (null == e) return {};
        var r, n, o = {},
          c = Object.getOwnPropertyNames(e);
        for (n = 0; n < c.length; n++) r = c[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
        return o
      }(e, t), Object.getOwnPropertySymbols)
      for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (c[n] = e[n]);
    return c
  }(e, ["onClose", "analyticsSource", "onLearnMore"]), b = a.pe.TIER_2, y = i.intl.format(i.t.hDMlqD, {
    onLearnMore: function() {
      null == u || u(), t(), (0, o.Z)()
    }
  });
  return (0, n.jsx)(c.A, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
        n = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable
      }))), n.forEach(function(t) {
        var n;
        n = r[t], t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = n
      })
    }
    return e
  }({
    artURL: s.A,
    artContainerClassName: p.z,
    type: a.e.VIDEO_BACKGROUNDS_MODAL,
    title: i.intl.string(i.t.fHqiDW),
    body: y,
    glowUp: y,
    analyticsSource: r,
    analyticsLocation: {
      page: l.liQ.PREMIUM_UPSELL_MODAL_VIDEO_BACKGROUNDS,
      object: l.ZSU.BUTTON_CTA
    },
    onClose: t,
    subscriptionTier: b
  }, f))
}