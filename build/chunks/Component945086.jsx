/** Chunk was on 47841 **/
/** chunk id: 945086, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk721923 = require("./721923.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk283008 = require("./283008.js");
let m = e => {
  let {
    guild: t,
    analyticsLocation: n,
    className: i,
    buttonProps: l = {
      color: s.XD.BRAND_INVERTED,
      text: u.intl.string(u.t.oqweNx)
    },
    useExpressiveButton: a
  } = e, {
    color: o,
    text: c
  } = l, g = t.premiumTier + 1;
  return (0, r.jsx)(d.A, {
    color: o,
    analyticsLocation: n,
    guild: t,
    buttonText: c,
    targetBoostedGuildTier: g,
    className: i,
    useExpressiveButton: a
  })
};

function p(e) {
  let {
    header: t,
    text: i,
    analyticsLocation: s,
    guild: d,
    className: u,
    textColor: p,
    headerColor: f,
    buttonProps: b,
    useExpressiveButton: h
  } = e, {
    analyticsLocations: x
  } = (0, c.Ay)(o.A.GUILD_BOOSTING_UPSELL_BANNER);
  return (0, r.jsx)(c.f5, {
    value: x,
    children: (0, r.jsxs)("div", {
      className: l()(g.vK, u),
      children: [(0, r.jsx)("img", {
        className: g.__invalid_headerGraphic,
        alt: "",
        src: n(549408)
      }), (0, r.jsxs)("div", {
        className: g.Qs,
        children: [(0, r.jsx)(a.Text, {
          variant: "text-lg/semibold",
          color: null != f ? f : "always-white",
          className: g.wx,
          children: t
        }), (0, r.jsx)(a.Text, {
          variant: "text-sm/normal",
          color: null != p ? p : "always-white",
          children: i
        })]
      }), (0, r.jsx)("div", {
        className: g.OQ,
        children: (0, r.jsx)(m, {
          guild: d,
          analyticsLocation: s,
          className: g.x6,
          buttonProps: b,
          useExpressiveButton: h
        })
      })]
    })
  })
}