/** Chunk was on 92917 **/
/** chunk id: 898401, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk465794 = require("./465794.jsx"),
  Chunk888675 = require("./888675.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk801741 = require("./801741.js");

function p(e) {
  let {
    message: t,
    channel: n
  } = e, p = null != n.guild_id ? o.JJy.TEXT_IN_VOICE : o.JJy.CHANNEL_TEXT_AREA;
  return (0, r.jsx)(s.A, {
    contentClassName: d.o9,
    iconContainerClassName: d.zc,
    iconNode: (0, r.jsx)(l.XFE, {
      colorClass: d.Kk
    }),
    children: (0, r.jsxs)("div", {
      className: d.kL,
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsx)(l.Text, {
          variant: "text-sm/medium",
          children: t.content
        }), (0, r.jsxs)("div", {
          className: d.C5,
          children: [(0, r.jsx)(l.tvc, {
            size: "xs",
            colorClass: d.bu
          }), (0, r.jsx)(l.Text, {
            variant: "text-xs/medium",
            className: d.vp,
            children: u.intl.string(u.t["BMw+7I"])
          })]
        })]
      }), (0, r.jsx)("div", {
        className: d.UD,
        children: (0, r.jsx)(a.A, {
          showGradient: true,
          iconClassName: d.PC,
          subscriptionTier: c.pe.TIER_2,
          textOptions: {
            textOverride: u.intl.string(u.t.Y2WKTl)
          },
          size: i.$n.Sizes.SMALL,
          premiumModalAnalyticsLocation: {
            section: p,
            object: o.ZSU.MESSAGE
          }
        })
      })]
    })
  })
}