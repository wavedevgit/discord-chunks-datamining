/** Chunk was on 30355 **/
/** chunk id: 299560, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => x
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk296009 = require("./296009.js"),
  Chunk481060 = require("./481060.js"),
  Chunk812206 = require("./812206.js"),
  Chunk835473 = require("./835473.js"),
  Chunk804919 = require("./804919.js"),
  Chunk86419 = require("./86419.js"),
  Chunk872269 = require("./872269.js"),
  Chunk248554 = require("./248554.jsx"),
  Chunk228168 = require("./228168.js"),
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
  },
  [Chunk296009.l.APPLICATION]: {
    placeholder: {
      variant: "details"
    },
    getAriaLabel: e => {
      var t, r;
      return b.intl.formatToPlainString(b.t.KfGahI, {
        applicationName: null != (r = null == (t = c.Z.getApplication(e.applicationId)) ? true : t.name) ? r : ""
      })
    }
  }
};

function x(e) {
  let {
    widgetType: t,
    onAddWidget: r,
    size: i = "default",
    loading: c = false,
    trackUserProfileEditAction: d
  } = e, {
    placeholder: b,
    getAriaLabel: x
  } = O[t], y = "small" === i, h = l.useMemo(() => {
    switch (t) {
      case s.l.CURRENT_GAMES:
      case s.l.FAVORITE_GAMES:
      case s.l.PLAYED_GAMES:
      case s.l.WANT_TO_PLAY_GAMES:
        return {
          id: t, type: t, games: []
        };
      case s.l.APPLICATION:
        return {
          id: t, type: t, applicationId: ""
        }
    }
  }, [t]);
  (0, u.q)(h.type === s.l.APPLICATION ? h.applicationId : null);
  let v = l.useCallback(() => {
    c || ((0, f.qH)(t, h), d({
      action: "WIDGET_ADDED",
      widgetEdited: t
    }), (0, m.L$)(g.qb.WIDGET_ADDED), null == r || r())
  }, [c, t, h, d, r]);
  return (0, n.jsxs)(o.P3F, {
    className: a()(j.addButtonContainer, y && j.sizeSmall, c && j.loading),
    onClick: v,
    "aria-label": x(h),
    "aria-busy": c,
    children: ["details" === b.variant ? (0, n.jsx)(p.i, {
      applicationId: b.applicationId,
      size: i
    }) : (0, n.jsx)(p.c, {
      applicationIds: b.applicationIds,
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
        children: (0, f.mR)(h)
      })]
    })]
  })
}