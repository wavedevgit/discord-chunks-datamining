/** Chunk was on 29725 **/
/** chunk id: 74650, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  U: () => f
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
  Chunk289630 = require("./289630.js"),
  Chunk217379 = require("./217379.js");

function f(e) {
  let {
    markAsDismissed: t,
    onCTA: n
  } = e, f = (0, r.e7)([o.default], () => o.default.getCurrentUser()), x = (0, c.M5)(f, u.PremiumTypes.TIER_2);
  return (0, a.jsx)("div", {
    className: p.popup,
    children: (0, a.jsxs)("div", {
      className: p.content,
      children: [(0, a.jsx)(i.P3F, {
        className: p.closeIcon,
        onClick: () => t(d.L.USER_DISMISS),
        children: (0, a.jsx)(i.Dio, {
          size: "xs"
        })
      }), (0, a.jsx)("img", {
        src: h,
        alt: "",
        className: p.asset
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsx)(i.Heading, {
          variant: "heading-md/semibold",
          color: "text-strong",
          className: p.title,
          children: m.intl.string(m.t.PRXV49)
        }), (0, a.jsx)(i.Text, {
          variant: "text-sm/medium",
          color: "text-subtle",
          children: m.intl.string(m.t["RSHtF+"])
        })]
      }), x ? (0, a.jsx)(i.Button, {
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
        size: l.zx.Sizes.LARGE,
        color: l.zx.Colors.CUSTOM,
        textOptions: {
          textOverride: m.intl.string(m.t.pj0XBN)
        },
        className: p.button
      })]
    })
  })
}