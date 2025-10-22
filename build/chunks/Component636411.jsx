/** Chunk was on web.js **/
/** chunk id: 636411, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk104494 = require("./104494.js"),
  Chunk639119 = require("./639119.js"),
  Chunk767714 = require("./767714.jsx"),
  Chunk165583 = require("./165583.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk250039 = require("./250039.js");
let E = "https://cdn.discordapp.com/assets/22_211_SuperReactions_GTM_Hero_v09.mp4",
  b = 32;

function y(e) {
  var t, n;
  let {
    onDismiss: i
  } = e, y = (0, o.e7)([l.Z], () => l.Z.useReducedMotion), O = m.intl.string(m.t.eikz43), v = (0, d.N)(), I = (0, u.Ng)(), T = (null == v ? true : v.subscription_trial) != null || null != I, S = {
    object: p.qAy.BUTTON_CTA,
    section: p.jXE.SUPER_REACTION_PICKER
  };
  return (0, r.jsxs)("div", {
    className: g.wrapper,
    children: [(0, r.jsx)(s.P3F, {
      onClick: i,
      className: g.closeButton,
      "aria-label": m.intl.string(m.t.WAI6xu),
      children: (0, r.jsx)(s.Dio, {
        size: "md",
        color: "currentColor"
      })
    }), (0, r.jsxs)("div", {
      className: g.content,
      children: [(0, r.jsx)("div", {
        className: g.contentFill,
        children: (0, r.jsx)(c.Z, {
          className: a()(g.banner, {
            [g.hasTrialOffer]: T
          }),
          src: E,
          loop: true,
          autoPlay: !y,
          muted: true,
          controls: true
        })
      }), T ? (0, r.jsx)(_.ZP, {
        type: h.cd.BURST_REACTION_QUICK_ACTION_UPSELL,
        subscriptionTier: null != (n = null == v || null == (t = v.subscription_trial) ? true : t.sku_id) ? n : h.Si.TIER_2,
        headingText: m.intl.string(m.t.Wfl5zp),
        analyticsLocationObject: S,
        discountOffer: I,
        trialOffer: v,
        children: O
      }) : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
          className: g.header,
          children: [(0, r.jsx)(s.SrA, {
            size: "custom",
            color: "currentColor",
            className: g.nitroWheel,
            width: b,
            height: b
          }), (0, r.jsx)(s.Heading, {
            className: g.headerText,
            variant: "heading-xl/bold",
            children: m.intl.string(m.t.Wfl5zp)
          })]
        }), (0, r.jsx)(s.Text, {
          className: g.subheaderText,
          variant: "text-md/normal",
          children: O
        }), (0, r.jsx)("div", {
          className: g.ctaActionWrapper,
          children: (0, r.jsx)(f.Z, {
            subscriptionTier: h.Si.TIER_2,
            textOptions: {
              textOverride: m.intl.string(m.t.sEAnVH)
            }
          })
        })]
      })]
    })]
  })
}