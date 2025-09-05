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
  Chunk73686 = require("./73686.js");
let p = {
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
    placeholder: g,
    getAriaLabel: j
  } = p[t], O = "small" === i, x = l.useCallback(() => {
    s || ((0, u.qH)(t), c({
      action: "WIDGET_ADDED",
      widgetEdited: t
    }), (0, d.L$)(m.qb.WIDGET_ADDED), null == r || r())
  }, [t, r, s, c]);
  return (0, n.jsxs)(o.P3F, {
    className: a()(b.addButtonContainer, O && b.sizeSmall, s && b.loading),
    onClick: x,
    "aria-label": j(),
    "aria-busy": s,
    children: ["details" === g.variant ? (0, n.jsx)(f.i, {
      applicationId: g.applicationId,
      size: i
    }) : (0, n.jsx)(f.c, {
      applicationIds: g.applicationIds,
      size: i
    }), (0, n.jsxs)("div", {
      className: b.overlay,
      children: [(0, n.jsx)(o.oFk, {
        size: "md",
        color: "currentColor",
        className: b.addButton
      }), (0, n.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "header-primary",
        children: (0, u.A5)(t)
      })]
    })]
  })
}