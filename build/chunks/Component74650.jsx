/** Chunk was on 7384 **/
/** chunk id: 74650, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  U: () => h
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
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

function h(e) {
  let {
    markAsDismissed: t,
    onCTA: n
  } = e, h = (0, r.e7)([o.default], () => o.default.getCurrentUser()), f = (0, c.M5)(h, u.p9.TIER_2);
  return (0, i.jsx)("div", {
    className: p.popup,
    children: (0, i.jsxs)("div", {
      className: p.content,
      children: [(0, i.jsx)(a.P3F, {
        className: p.closeIcon,
        onClick: () => t(d.L.USER_DISMISS),
        children: (0, i.jsx)(a.Dio, {
          size: "xs"
        })
      }), (0, i.jsx)("img", {
        src: g,
        alt: "",
        className: p.asset
      }), (0, i.jsxs)("div", {
        children: [(0, i.jsx)(a.X6q, {
          variant: "heading-md/semibold",
          color: "text-primary",
          className: p.title,
          children: m.intl.string(m.t["PRXV4+"])
        }), (0, i.jsx)(a.Text, {
          variant: "text-sm/medium",
          color: "text-secondary",
          children: m.intl.string(m.t.RSHtFx)
        })]
      }), f ? (0, i.jsx)(a.zxk, {
        text: m.intl.string(m.t.LhcHi4),
        fullWidth: true,
        onClick: () => {
          t(d.L.TAKE_ACTION), n()
        }
      }) : (0, i.jsx)(l.Z, {
        onClick: () => {
          t(d.L.TAKE_ACTION)
        },
        showGradient: true,
        subscriptionTier: u.Si.TIER_2,
        size: s.zx.Sizes.LARGE,
        color: s.zx.Colors.CUSTOM,
        textOptions: {
          textOverride: m.intl.string(m.t.pj0XBA)
        },
        className: p.button
      })]
    })
  })
}