/** Chunk was on 28479 **/
/** chunk id: 78865, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => y
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk952265 = require("./952265.js"),
  Chunk174609 = require("./174609.js"),
  Chunk283066 = require("./283066.js"),
  Chunk790527 = require("./790527.jsx"),
  Chunk731502 = require("./731502.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk255740 = require("./255740.js");

function O(e) {
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

function y(e) {
  var {
    onClose: t,
    analyticsSource: r
  } = e, y = function(e, t) {
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
    className: p.art,
    alt: "HD Streaming Nitro Perk",
    src: "https://cdn.discordapp.com/assets/premium/roadblocks/hd_streaming.png"
  });

  function m() {
    (0, a.Z)(), (0, o.pT)(), u.default.track(b.rMx.PREMIUM_PROMOTION_OPENED, {
      location_section: b.jXE.STREAM_UPSELL_MODAL,
      location_object: b.qAy.NAVIGATION_LINK
    }), (0, s.uL)(b.Z5c.APPLICATION_STORE)
  }
  let h = d.intl.string(d.t.ewxv3J),
    j = d.intl.string(d.t.qlsCDB);
  return (0, c.Z)({
    location: "StreamUpsellModal"
  }) ? (0, n.jsx)(i.Z, O({
    onClose: t,
    handleLearnMore: m
  }, y)) : (0, n.jsx)(l.Z, O({
    title: h,
    glowUp: j,
    body: j,
    artElement: g,
    artContainerClassName: p.artContainer,
    type: f.cd.STREAM_QUALITY_UPSELL,
    analyticsLocation: {
      section: b.jXE.STREAM_UPSELL_MODAL,
      object: b.qAy.BUTTON_CTA
    },
    analyticsSource: r,
    onClose: t,
    onSubscribeClick: a.Z,
    secondaryCTA: d.intl.string(d.t.ZnqyZ2),
    onSecondaryClick: m,
    showEnhancedUpsell: true,
    enableArtBoxShadow: false,
    headerClassName: p.header
  }, y))
}