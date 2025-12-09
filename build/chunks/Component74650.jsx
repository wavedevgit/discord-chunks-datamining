/** Chunk was on 75393 **/
/** chunk id: 74650, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  U: () => x
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk767714 = require("./767714.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk921944 = require("./921944.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk972979 = require("./972979.js"),
  Chunk217379 = require("./217379.js");

function x(e) {
  let {
    markAsDismissed: t,
    onCTA: n
  } = e, x = (0, r.e7)([o.default], () => o.default.getCurrentUser()), f = (0, c.M5)(x, u.PremiumTypes.TIER_2);
  return (0, a.jsx)("div", {
    className: p.popup,
    children: (0, a.jsxs)("div", {
      className: p.content,
      children: [(0, a.jsx)(l.P3F, {
        className: p.closeIcon,
        onClick: () => t(d.L.USER_DISMISS),
        children: (0, a.jsx)(l.Dio, {
          size: "xs"
        })
      }), (0, a.jsx)("img", {
        src: h,
        alt: "",
        className: p.asset
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsx)(l.Heading, {
          variant: "heading-md/semibold",
          color: "text-strong",
          className: p.title,
          children: m.intl.string(m.t.PRXV49)
        }), (0, a.jsx)(l.Text, {
          variant: "text-sm/medium",
          color: "text-subtle",
          children: m.intl.string(m.t["RSHtF+"])
        })]
      }), f ? (0, a.jsx)(l.Button, {
        text: m.intl.string(m.t.LhcHi5),
        fullWidth: true,
        onClick: () => {
          t(d.L.TAKE_ACTION), n()
        }
      }) : (0, a.jsx)(s.Z, {
        onClick: () => {
          t(d.L.TAKE_ACTION)
        },
        showGradient: true,
        subscriptionTier: u.Si.TIER_2,
        size: i.zx.Sizes.LARGE,
        color: i.zx.Colors.CUSTOM,
        textOptions: {
          textOverride: m.intl.string(m.t.pj0XBN)
        },
        className: p.button
      })]
    })
  })
}