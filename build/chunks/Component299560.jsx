/** Chunk was on 30355 **/
/** chunk id: 299560, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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
let b = {
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

function h(e) {
  let {
    widgetType: t,
    onAddWidget: r,
    size: i = "default",
    loading: a = false,
    trackUserProfileAction: c
  } = e, {
    placeholder: h,
    getAriaLabel: x
  } = b[t], O = "small" === i, v = l.useCallback(() => {
    a || ((0, u.qH)(t), c({
      action: "EDIT_ACTION"
    }), (0, d.L$)(g.qb.WIDGET_ADDED), null == r || r())
  }, [t, r, a, c]);
  return (0, n.jsxs)(o.P3F, {
    className: s()(j.addButtonContainer, O && j.sizeSmall, a && j.loading),
    onClick: v,
    "aria-label": x(),
    "aria-busy": a,
    children: ["details" === h.variant ? (0, n.jsx)(f.i, {
      applicationId: h.applicationId,
      size: i
    }) : (0, n.jsx)(f.c, {
      applicationIds: h.applicationIds,
      size: i
    }), (0, n.jsxs)("div", {
      className: j.overlay,
      children: [(0, n.jsx)(o.oFk, {
        size: "md",
        color: "currentColor",
        className: j.addButton
      }), (0, n.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "header-primary",
        children: p.intl.string(m.NP[t])
      })]
    })]
  })
}