/** Chunk was on 34906 **/
/** chunk id: 639565, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk703656 = require("./703656.js"),
  Chunk626135 = require("./626135.js"),
  Chunk790527 = require("./790527.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk726718 = require("./726718.js"),
  Chunk235810 = require("./235810.js");

function b() {
  return (0, Chunk54381.jsx)("div", {
    className: Chunk726718.artContainer,
    children: (0, Chunk54381.jsx)("img", {
      src: Chunk235810,
      className: Chunk726718.artAsset,
      alt: ""
    })
  })
}

function f(t) {
  var {
    onClose: e,
    source: n
  } = t, u = function(t, e) {
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
  return (0, r.jsx)(a.Z, function(t) {
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
    artElement: (0, r.jsx)(b, {}),
    type: i.cd.FOR_LATER_MODAL_UPSELL,
    title: l.intl.string(l.t.w4DRbZ),
    body: l.intl.string(l.t.F6u3E3),
    glowUp: l.intl.string(l.t.F6u3E3),
    secondaryCTA: l.intl.string(l.t.PcTCB7),
    onSecondaryClick: function() {
      c.default.track(s.rMx.PREMIUM_PROMOTION_OPENED, {
        location_section: s.jXE.PREMIUM_FOR_LATER_UPSELL_MODAL,
        location_object: s.qAy.NAVIGATION_LINK
      }), e(), (0, o.uL)(s.Z5c.APPLICATION_STORE)
    },
    showEnhancedUpsell: true,
    analyticsSource: n,
    analyticsLocation: {
      section: s.jXE.PREMIUM_FOR_LATER_UPSELL_MODAL,
      object: s.qAy.BUTTON_CTA
    },
    onClose: e
  }, u))
}