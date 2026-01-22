/** Chunk was on web.js **/
/** chunk id: 370968, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk607470 = require("./607470.jsx"),
  Chunk422936 = require("./422936.js"),
  Chunk234419 = require("./234419.js"),
  Chunk465794 = require("./465794.jsx"),
  Chunk811611 = require("./811611.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk694230 = require("./694230.js");
let E = "https://cdn.discordapp.com/assets/22_211_SuperReactions_GTM_Hero_v09.mp4",
  b = 32;

function y(e) {
  var t, n;
  let {
    onDismiss: i
  } = e, y = (0, s.bG)([l.A], () => l.A.useReducedMotion), O = m.intl.string(m.t.eikz43), A = (0, d.V)(), v = (0, u.O)(), S = (null == A ? true : A.subscription_trial) != null || null != v, I = {
    object: _.ZSU.BUTTON_CTA,
    section: _.JJy.SUPER_REACTION_PICKER
  };
  return (0, r.jsxs)("div", {
    className: g.iE,
    children: [(0, r.jsx)(o.DUT, {
      onClick: i,
      className: g.b,
      "aria-label": m.intl.string(m.t.WAI6xu),
      children: (0, r.jsx)(o.PGe, {
        size: "md",
        color: "currentColor"
      })
    }), (0, r.jsxs)("div", {
      className: g.Qs,
      children: [(0, r.jsx)("div", {
        className: g.jo,
        children: (0, r.jsx)(c.A, {
          className: a()(g.vK, {
            [g.Vk]: S
          }),
          src: E,
          loop: true,
          autoPlay: !y,
          muted: true,
          controls: true
        })
      }), S ? (0, r.jsx)(p.Ay, {
        type: h.e.BURST_REACTION_QUICK_ACTION_UPSELL,
        subscriptionTier: null != (t = null == A || null == (n = A.subscription_trial) ? true : n.sku_id) ? t : h.pe.TIER_2,
        headingText: m.intl.string(m.t.Wfl5zp),
        analyticsLocationObject: I,
        discountOffer: v,
        trialOffer: A,
        children: O
      }) : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
          className: g.wx,
          children: [(0, r.jsx)(o.tvc, {
            size: "custom",
            color: "currentColor",
            className: g.ax,
            width: b,
            height: b
          }), (0, r.jsx)(o.Heading, {
            className: g.TK,
            variant: "heading-xl/bold",
            children: m.intl.string(m.t.Wfl5zp)
          })]
        }), (0, r.jsx)(o.Text, {
          className: g.Fb,
          variant: "text-md/normal",
          children: O
        }), (0, r.jsx)("div", {
          className: g.sk,
          children: (0, r.jsx)(f.A, {
            subscriptionTier: h.pe.TIER_2,
            textOptions: {
              textOverride: m.intl.string(m.t.sEAnVH)
            }
          })
        })]
      })]
    })]
  })
}