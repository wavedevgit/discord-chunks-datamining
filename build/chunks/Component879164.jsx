/** Chunk was on 15682 **/
/** chunk id: 879164, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  _: () => p
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk87719 = require("./87719.js"),
  Chunk857586 = require("./857586.jsx"),
  Chunk757036 = require("./757036.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk927961 = require("./927961.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk127134 = require("./127134.js");

function p(e) {
  let {
    onApply: t,
    onSurpriseMe: l,
    onClose: p,
    canApply: x
  } = e, g = (0, o.L)(u.PremiumTypes.TIER_2), j = (0, n.jsx)(s.Button, {
    variant: "secondary",
    size: "md",
    onClick: l,
    icon: {
      type: "rive",
      asset: s.mdx,
      riveProps: {
        dataBinding: {
          fill: s.LU0.colors.ICON_STRONG
        }
      }
    },
    text: m.intl.string(f.default.NOGFds)
  }), h = (0, n.jsxs)("div", {
    className: b.k0,
    children: [j, (0, n.jsx)(a.m, {
      text: m.intl.string(f.default.cVTpnj),
      shouldShow: !x,
      children: (0, n.jsx)(s.Button, {
        onClick: t,
        disabled: !x,
        text: m.intl.string(m.t["1Qm822"]),
        variant: "primary",
        size: "md",
        fullWidth: true
      })
    })]
  }), v = (0, n.jsxs)("div", {
    className: b.UX,
    children: [(0, n.jsxs)("div", {
      className: b.iQ,
      children: [(0, n.jsx)(a.m, {
        text: m.intl.string(m.t["5AFxuK"]),
        children: (0, n.jsx)(s.tvc, {
          size: "md",
          color: s.LU0.colors.ICON_STRONG
        })
      }), (0, n.jsx)(s.Text, {
        variant: "text-md/medium",
        color: "text-default",
        className: b.h_,
        children: m.intl.format(f.default.PWf0xS, {
          onClickNitro: () => {
            c.default.track(d.HAw.DISPLAY_NAME_STYLES_NITRO_CLICKED), (0, r.x)(p)
          }
        })
      })]
    }), (0, n.jsxs)("div", {
      className: b.UD,
      children: [j, (0, n.jsx)(i.A, {
        premiumModalAnalyticsLocation: {
          section: d.JJy.DISPLAY_NAME_STYLES_MODAL_FOOTER,
          object: d.ZSU.PREMIUM_UPSELL_BUTTON
        },
        subscriptionTier: u.pe.TIER_2
      })]
    })]
  });
  return (0, n.jsx)(s.jlY, {
    "data-migration-pending": true,
    className: b.qr,
    children: g ? h : v
  })
}