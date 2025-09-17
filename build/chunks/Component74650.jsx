/** Chunk was on web.js **/
/** chunk id: 74650, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk767714 = require("./767714.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk921944 = require("./921944.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk716537 = require("./716537.js"),
  Chunk217379 = require("./217379.js");

function h(e) {
  let {
    markAsDismissed: t,
    onCTA: n
  } = e, h = (0, i.e7)([l.default], () => l.default.getCurrentUser()), m = (0, c.M5)(h, d.p9.TIER_2);
  return (0, r.jsx)("div", {
    className: _.popup,
    children: (0, r.jsxs)("div", {
      className: _.content,
      children: [(0, r.jsx)(o.P3F, {
        className: _.closeIcon,
        onClick: () => t(u.L.USER_DISMISS),
        children: (0, r.jsx)(o.Dio, {
          size: "xs"
        })
      }), (0, r.jsx)("img", {
        src: p,
        alt: "",
        className: _.asset
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsx)(o.X6q, {
          variant: "heading-md/semibold",
          color: "text-primary",
          className: _.title,
          children: f.intl.string(f.t["PRXV4+"])
        }), (0, r.jsx)(o.Text, {
          variant: "text-sm/medium",
          color: "text-secondary",
          children: f.intl.string(f.t.RSHtFx)
        })]
      }), m ? (0, r.jsx)(o.zxk, {
        text: f.intl.string(f.t.LhcHi4),
        fullWidth: true,
        onClick: () => {
          t(u.L.TAKE_ACTION), n()
        }
      }) : (0, r.jsx)(s.Z, {
        onClick: () => {
          t(u.L.TAKE_ACTION)
        },
        showGradient: true,
        subscriptionTier: d.Si.TIER_2,
        size: a.zx.Sizes.LARGE,
        color: a.zx.Colors.CUSTOM,
        textOptions: {
          textOverride: f.intl.string(f.t.pj0XBA)
        },
        className: _.button
      })]
    })
  })
}