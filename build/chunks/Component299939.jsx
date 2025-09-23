/** Chunk was on 47495 **/
/** chunk id: 299939, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B: () => g
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk98278 = require("./98278.js"),
  Chunk740594 = require("./740594.jsx"),
  Chunk612659 = require("./612659.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk62222 = require("./62222.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk365875 = require("./365875.js");

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function g(e) {
  let {
    onApply: t,
    onSurpriseMe: n,
    onClose: g,
    canApply: h
  } = e, b = (0, i.m)(d.p9.TIER_2), x = (0, r.jsx)(o.zxk, {
    variant: "secondary",
    size: "md",
    onClick: n,
    icon: o.$2U,
    text: p.intl.string(u.default.NOGFdn)
  }), j = (0, r.jsxs)("div", {
    className: f.subscriberButtonContainer,
    children: [x, (0, r.jsx)(o.ua7, {
      text: p.intl.string(u.default.cVTpnp),
      shouldShow: !h,
      children: e => {
        var n, l;
        return (0, r.jsx)(o.zxk, (n = m({}, e), l = l = {
          onClick: t,
          disabled: !h,
          text: p.intl.string(p.t["1Qm829"]),
          variant: "primary",
          size: "md",
          fullWidth: true
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(l)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
        }), n))
      }
    })]
  }), _ = (0, r.jsxs)("div", {
    className: f.upsell,
    children: [(0, r.jsxs)("div", {
      className: f.descriptionContainer,
      children: [(0, r.jsx)(o.ua7, {
        text: p.intl.string(p.t["5AFxuL"]),
        children: e => (0, r.jsx)(o.SrA, m({
          size: "md",
          color: o.TVs.colors.ICON_PRIMARY
        }, e))
      }), (0, r.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "text-default",
        className: f.description,
        children: p.intl.format(u.default.PWf0xc, {
          onClickNitro: () => {
            s.default.track(c.rMx.DISPLAY_NAME_STYLES_NITRO_CLICKED), (0, l.$)(g)
          }
        })
      })]
    }), (0, r.jsxs)("div", {
      className: f.buttonContainer,
      children: [x, (0, r.jsx)(a.Z, {
        premiumModalAnalyticsLocation: {
          section: c.jXE.DISPLAY_NAME_STYLES_MODAL_FOOTER,
          object: c.qAy.PREMIUM_UPSELL_BUTTON
        },
        subscriptionTier: d.Si.TIER_2
      })]
    })]
  });
  return (0, r.jsx)(o.mzw, {
    "data-migration-pending": true,
    className: f.footer,
    children: b ? j : _
  })
}