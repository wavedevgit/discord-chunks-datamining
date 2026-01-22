/** Chunk was on 18630 **/
/** chunk id: 826789, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => O
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk192308 = require("./192308.js"),
  Chunk523527 = require("./523527.js"),
  Chunk170887 = require("./170887.js"),
  Chunk244975 = require("./244975.jsx"),
  Chunk182681 = require("./182681.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk976385 = require("./976385.js");

function d(e) {
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
}

function O(e) {
  let {
    onClose: t,
    analyticsSource: r
  } = e, O = function(e, t) {
    if (null == e) return {};
    var r, n, o, l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (o = 0, r = Reflect.ownKeys(e); o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
      return l
    }
    if (l = function(e, t) {
        if (null == e) return {};
        var r, n, o = {},
          l = Object.getOwnPropertyNames(e);
        for (n = 0; n < l.length; n++) r = l[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
        return o
      }(e, t), Object.getOwnPropertySymbols)
      for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
    return l
  }(e, ["onClose", "analyticsSource"]), m = (0, n.jsx)("img", {
    className: y.Qw,
    alt: "HD Streaming Nitro Perk",
    src: "https://cdn.discordapp.com/assets/premium/roadblocks/hd_streaming.png"
  });

  function g() {
    (0, l.A)(), (0, o.closeAllModals)(), b.default.track(f.HAw.PREMIUM_PROMOTION_OPENED, {
      location_section: f.JJy.STREAM_UPSELL_MODAL,
      location_object: f.ZSU.NAVIGATION_LINK
    }), (0, s.pX)(f.BVt.APPLICATION_STORE)
  }
  let w = u.intl.string(u.t.ewxv3J),
    j = u.intl.string(u.t.qlsCDB);
  return (0, c.A)({
    location: "StreamUpsellModal"
  }) ? (0, n.jsx)(i.A, d({
    onClose: t,
    handleLearnMore: g
  }, O)) : (0, n.jsx)(a.A, d({
    title: w,
    glowUp: j,
    body: j,
    artElement: m,
    artContainerClassName: y.JS,
    type: p.e.STREAM_QUALITY_UPSELL,
    analyticsLocation: {
      section: f.JJy.STREAM_UPSELL_MODAL,
      object: f.ZSU.BUTTON_CTA
    },
    analyticsSource: r,
    onClose: t,
    onSubscribeClick: l.A,
    secondaryCTA: u.intl.string(u.t.ZnqyZ2),
    onSecondaryClick: g,
    showEnhancedUpsell: true,
    enableArtBoxShadow: false,
    headerClassName: y.wx
  }, O))
}