/** Chunk was on 47841 **/
/** chunk id: 945086, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => b
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
let g = e => {
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
    color: c,
    text: o
  } = l, f = t.premiumTier + 1;
  return (0, r.jsx)(d.A, {
    color: c,
    analyticsLocation: n,
    guild: t,
    buttonText: o,
    targetBoostedGuildTier: f,
    className: i,
    useExpressiveButton: a
  })
};

function b(e) {
  let {
    header: t,
    text: i,
    analyticsLocation: s,
    guild: d,
    className: u,
    textColor: b,
    headerColor: m,
    buttonProps: p,
    useExpressiveButton: x
  } = e, {
    analyticsLocations: h
  } = (0, o.Ay)(c.A.GUILD_BOOSTING_UPSELL_BANNER);
  return (0, r.jsx)(o.f5, {
    value: h,
    children: (0, r.jsxs)("div", {
      className: l()(f.vK, u),
      children: [(0, r.jsx)("img", {
        className: f.__invalid_headerGraphic,
        alt: "",
        src: n(549408)
      }), (0, r.jsxs)("div", {
        className: f.Qs,
        children: [(0, r.jsx)(a.Text, {
          variant: "text-lg/semibold",
          color: null != m ? m : "always-white",
          className: f.wx,
          children: t
        }), (0, r.jsx)(a.Text, {
          variant: "text-sm/normal",
          color: null != b ? b : "always-white",
          children: i
        })]
      }), (0, r.jsx)("div", {
        className: f.OQ,
        children: (0, r.jsx)(g, {
          guild: d,
          analyticsLocation: s,
          className: f.x6,
          buttonProps: p,
          useExpressiveButton: x
        })
      })]
    })
  })
}