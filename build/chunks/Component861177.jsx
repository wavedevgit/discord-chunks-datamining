/** Chunk was on 32482 **/
/** chunk id: 861177, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => O
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk385612 = require("./385612.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk927578 = require("./927578.js"),
  Chunk87719 = require("./87719.js"),
  Chunk244975 = require("./244975.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk339984 = require("./339984.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk626072 = require("./626072.js");

function O(e) {
  let {
    onClose: t,
    source: r
  } = e, O = function(e, t) {
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
  }(e, ["onClose", "source"]), d = (0, o.bG)([l.default], () => l.default.getCurrentUser()), g = a.Ay.isPremium(d) ? y.t.E0sNsc : y.t.UBcuto, m = y.intl.format(g, {
    onLearnMore: function() {
      t(), (0, i.Z)()
    }
  });
  return (0, n.jsx)(u.A, function(e) {
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
    artURL: b.A,
    type: s.e.CUSTOM_PROFILE_UPSELL,
    title: y.intl.string(y.t.BbsMm4),
    body: m,
    glowUp: m,
    onSecondaryClick: () => {
      t(), (0, c.XD)({
        uploadType: p.HL.BANNER,
        analyticsSource: r
      })
    },
    secondaryCTA: y.intl.string(y.t.SpAQib),
    analyticsSource: r,
    analyticsLocation: {
      section: f.JJy.USER_PROFILE,
      object: f.ZSU.BUTTON_CTA
    },
    onClose: t
  }, O))
}