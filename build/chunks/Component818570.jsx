/** Chunk was on 91173 **/
/** chunk id: 818570, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk767714 = require("./767714.jsx"),
  Chunk834129 = require("./834129.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk699454 = require("./699454.js");

function p(e) {
  let {
    message: t,
    channel: n
  } = e, p = null != n.guild_id ? s.jXE.TEXT_IN_VOICE : s.jXE.CHANNEL_TEXT_AREA;
  return (0, r.jsx)(a.Z, {
    contentClassName: d.messageContentContainer,
    iconContainerClassName: d.iconContainer,
    iconNode: (0, r.jsx)(l.Dkj, {
      colorClass: d.icon
    }),
    children: (0, r.jsxs)("div", {
      className: d.container,
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsx)(l.Text, {
          variant: "text-sm/medium",
          children: t.content
        }), (0, r.jsxs)("div", {
          className: d.nitroBadge,
          children: [(0, r.jsx)(l.SrA, {
            size: "xs",
            colorClass: d.nitroBadgeIcon
          }), (0, r.jsx)(l.Text, {
            variant: "text-xs/medium",
            className: d.nitroBadgeText,
            children: u.intl.string(u.t["BMw+7O"])
          })]
        })]
      }), (0, r.jsx)("div", {
        className: d.buttonContainer,
        children: (0, r.jsx)(o.Z, {
          showGradient: true,
          iconClassName: d.premiumIcon,
          subscriptionTier: c.Si.TIER_2,
          textOptions: {
            textOverride: u.intl.string(u.t.Y2WKTk)
          },
          size: i.zx.Sizes.SMALL,
          premiumModalAnalyticsLocation: {
            section: p,
            object: s.qAy.MESSAGE
          }
        })
      })]
    })
  })
}