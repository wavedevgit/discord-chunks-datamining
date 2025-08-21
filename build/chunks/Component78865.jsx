/** Chunk was on 28479 **/
/** chunk id: 78865, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk952265 = require("./952265.js"),
  Chunk174609 = require("./174609.js"),
  Chunk47280 = require("./47280.js"),
  Chunk998076 = require("./998076.js"),
  Chunk790527 = require("./790527.jsx"),
  Chunk731502 = require("./731502.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk880916 = require("./880916.js");

function y(e) {
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

function m(e) {
  var {
    onClose: t,
    analyticsSource: r
  } = e, m = function(e, t) {
    if (null == e) return {};
    var r, n, o = function(e, t) {
      if (null == e) return {};
      var r, n, o = {},
        a = Object.keys(e);
      for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
      return o
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      for (n = 0; n < a.length; n++) r = a[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
    }
    return o
  }(e, ["onClose", "analyticsSource"]);
  let g = (0, n.jsx)("img", {
    className: O.art,
    alt: "HD Streaming Nitro Perk",
    src: "https://cdn.discordapp.com/assets/premium/roadblocks/hd_streaming.png"
  });

  function h() {
    (0, a.Z)(), (0, o.pT)(), b.default.track(f.rMx.PREMIUM_PROMOTION_OPENED, {
      location_section: f.jXE.STREAM_UPSELL_MODAL,
      location_object: f.qAy.NAVIGATION_LINK
    }), (0, u.uL)(f.Z5c.APPLICATION_STORE)
  }
  let j = p.intl.string(p.t.ewxv3N),
    S = p.intl.string(p.t.qlsCDA),
    v = (0, c.ZP)({
      location: "StreamUpsellModal"
    }),
    P = (0, l.Z)({
      location: "StreamUpsellModal"
    });
  return v || P ? (0, n.jsx)(s.Z, y({
    onClose: t,
    handleLearnMore: h
  }, m)) : (0, n.jsx)(i.Z, y({
    title: j,
    glowUp: S,
    body: S,
    artElement: g,
    artContainerClassName: O.artContainer,
    type: d.cd.STREAM_QUALITY_UPSELL,
    analyticsLocation: {
      section: f.jXE.STREAM_UPSELL_MODAL,
      object: f.qAy.BUTTON_CTA
    },
    analyticsSource: r,
    onClose: t,
    onSubscribeClick: a.Z,
    secondaryCTA: p.intl.string(p.t.ZnqyZ2),
    onSecondaryClick: h,
    showEnhancedUpsell: true,
    enableArtBoxShadow: false,
    headerClassName: O.header
  }, m))
}