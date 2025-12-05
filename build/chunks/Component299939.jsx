/** Chunk was on 47495 **/
/** chunk id: 299939, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B: () => g
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk98278 = require("./98278.js"),
  Chunk740594 = require("./740594.jsx"),
  Chunk612659 = require("./612659.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk905170 = require("./905170.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk679101 = require("./679101.js");

function g(e) {
  let {
    onApply: t,
    onSurpriseMe: n,
    onClose: g,
    canApply: h
  } = e, x = (0, s.m)(u.PremiumTypes.TIER_2), b = (0, l.jsx)(r.Button, {
    variant: "secondary",
    size: "md",
    onClick: n,
    icon: {
      type: "rive",
      asset: r.q8_,
      riveProps: {
        dataBinding: {
          fill: r.TVs.colors.ICON_PRIMARY
        }
      }
    },
    text: m.intl.string(p.default.NOGFds)
  }), _ = (0, l.jsxs)("div", {
    className: f.subscriberButtonContainer,
    children: [b, (0, l.jsx)(o.u, {
      text: m.intl.string(p.default.cVTpnj),
      shouldShow: !h,
      children: (0, l.jsx)(r.Button, {
        onClick: t,
        disabled: !h,
        text: m.intl.string(m.t["1Qm822"]),
        variant: "primary",
        size: "md",
        fullWidth: true
      })
    })]
  }), S = (0, l.jsxs)("div", {
    className: f.upsell,
    children: [(0, l.jsxs)("div", {
      className: f.descriptionContainer,
      children: [(0, l.jsx)(o.u, {
        text: m.intl.string(m.t["5AFxuK"]),
        children: (0, l.jsx)(r.SrA, {
          size: "md",
          color: r.TVs.colors.ICON_PRIMARY
        })
      }), (0, l.jsx)(r.Text, {
        variant: "text-md/medium",
        color: "text-default",
        className: f.description,
        children: m.intl.format(p.default.PWf0xS, {
          onClickNitro: () => {
            c.default.track(d.rMx.DISPLAY_NAME_STYLES_NITRO_CLICKED), (0, i.$)(g)
          }
        })
      })]
    }), (0, l.jsxs)("div", {
      className: f.buttonContainer,
      children: [b, (0, l.jsx)(a.Z, {
        premiumModalAnalyticsLocation: {
          section: d.jXE.DISPLAY_NAME_STYLES_MODAL_FOOTER,
          object: d.qAy.PREMIUM_UPSELL_BUTTON
        },
        subscriptionTier: u.Si.TIER_2
      })]
    })]
  });
  return (0, l.jsx)(r.mzw, {
    "data-migration-pending": true,
    className: f.footer,
    children: x ? _ : S
  })
}