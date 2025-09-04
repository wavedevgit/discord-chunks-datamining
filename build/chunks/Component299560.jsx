/** Chunk was on 30355 **/
/** chunk id: 299560, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk296009 = require("./296009.js"),
  Chunk481060 = require("./481060.js"),
  Chunk804919 = require("./804919.js"),
  Chunk86419 = require("./86419.js"),
  Chunk872269 = require("./872269.js"),
  Chunk248554 = require("./248554.jsx"),
  Chunk228168 = require("./228168.js"),
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
  },
  [Chunk296009.l.APPLICATION]: {
    placeholder: {
      variant: "details"
    },
    getAriaLabel: () => ""
  }
};

function j(e) {
  let {
    widgetType: t,
    onAddWidget: r,
    size: i = "default",
    loading: s = false,
    trackUserProfileEditAction: c
  } = e, {
    placeholder: m,
    getAriaLabel: j
  } = b[t], O = "small" === i, h = l.useCallback(() => {
    s || ((0, u.qH)(t), c({
      action: "WIDGET_ADDED",
      widgetEdited: t
    }), (0, d.L$)(g.qb.WIDGET_ADDED), null == r || r())
  }, [t, r, s, c]);
  return (0, n.jsxs)(o.P3F, {
    className: a()(p.addButtonContainer, O && p.sizeSmall, s && p.loading),
    onClick: h,
    "aria-label": j(),
    "aria-busy": s,
    children: ["details" === m.variant ? (0, n.jsx)(f.i, {
      applicationId: m.applicationId,
      size: i
    }) : (0, n.jsx)(f.c, {
      applicationIds: m.applicationIds,
      size: i
    }), (0, n.jsxs)("div", {
      className: p.overlay,
      children: [(0, n.jsx)(o.oFk, {
        size: "md",
        color: "currentColor",
        className: p.addButton
      }), (0, n.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "header-primary",
        children: (0, u.A5)(t)
      })]
    })]
  })
}