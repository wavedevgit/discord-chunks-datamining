/** Chunk was on 21585 **/
/** chunk id: 299560, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk296009 = require("./296009.js"),
  Chunk481060 = require("./481060.js"),
  Chunk804919 = require("./804919.js"),
  Chunk86419 = require("./86419.js"),
  Chunk872269 = require("./872269.js"),
  Chunk248554 = require("./248554.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk247397 = require("./247397.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk229870 = require("./229870.js");
let O = {
  [Chunk296009.l.FAVORITE_GAMES]: {
    placeholder: {
      variant: "details",
      applicationId: Chunk804919.L.LEAGUE_OF_LEGENDS
    },
    getAriaLabel: () => Chunk388032.intl.string(Chunk388032.t.xJtdIi)
  },
  [Chunk296009.l.CURRENT_GAMES]: {
    placeholder: {
      variant: "details",
      applicationId: Chunk804919.L.VALORANT
    },
    getAriaLabel: () => Chunk388032.intl.string(Chunk388032.t.Ae8tRk)
  },
  [Chunk296009.l.PLAYED_GAMES]: {
    placeholder: {
      variant: "grid",
      applicationIds: [Chunk804919.L.PEAK, Chunk804919.L.APEX_LEGENDS, Chunk804919.L.REPO, Chunk804919.L.BALDURS_GATE_3]
    },
    getAriaLabel: () => Chunk388032.intl.string(Chunk388032.t["pBR+4u"])
  },
  [Chunk296009.l.WANT_TO_PLAY_GAMES]: {
    placeholder: {
      variant: "grid",
      applicationIds: [Chunk804919.L.MARVEL_RIVALS, Chunk804919.L.WORLD_OF_WARCRAFT, Chunk804919.L.RUST, Chunk804919.L.DELTA_FORCE]
    },
    getAriaLabel: () => Chunk388032.intl.string(Chunk388032.t.NtoBi4)
  }
};

function j(e) {
  let {
    widgetType: t,
    onAddWidget: r,
    size: a = "default",
    loading: o = false,
    trackUserProfileAction: s
  } = e, {
    placeholder: j,
    getAriaLabel: y
  } = O[t], v = "small" === a, x = i.useCallback(() => {
    o || ((0, u.qH)(t), s({
      action: "EDIT_ACTION"
    }), (0, d.L$)(g.qb.WIDGET_ADDED), null == r || r())
  }, [t, r, o, s]);
  return (0, n.jsxs)(c.P3F, {
    className: l()(m.addButtonContainer, v && m.sizeSmall, o && m.loading),
    onClick: x,
    "aria-label": y(),
    "aria-busy": o,
    children: ["details" === j.variant ? (0, n.jsx)(f.i, {
      applicationId: j.applicationId,
      size: a
    }) : (0, n.jsx)(f.c, {
      applicationIds: j.applicationIds,
      size: a
    }), (0, n.jsxs)("div", {
      className: m.overlay,
      children: [(0, n.jsx)(c.oFk, {
        size: "md",
        color: "currentColor",
        className: m.addButton
      }), (0, n.jsx)(c.Text, {
        variant: "text-md/medium",
        color: "header-primary",
        children: p.intl.string(b.NP[t])
      })]
    })]
  })
}