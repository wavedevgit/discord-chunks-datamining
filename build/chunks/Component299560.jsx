/** Chunk was on 30355 **/
/** chunk id: 299560, original params: e,t,n (module,exports,require) **/
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
  Chunk931847 = require("./931847.js"),
  Chunk836197 = require("./836197.js"),
  Chunk86419 = require("./86419.js"),
  Chunk872269 = require("./872269.js"),
  Chunk248554 = require("./248554.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk73686 = require("./73686.js");
let v = {
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
      var t, n;
      return y.intl.formatToPlainString(y.t.KfGahI, {
        applicationName: null != (n = null == (t = c.Z.getApplication(e.applicationId)) ? true : t.name) ? n : ""
      })
    }
  }
};

function x(e) {
  let {
    widgetType: t,
    onAddWidget: n,
    size: i = "default",
    loading: c = false,
    trackUserProfileEditAction: d
  } = e, {
    placeholder: y,
    getAriaLabel: x
  } = v[t], O = "small" === i, P = l.useMemo(() => {
    switch (t) {
      case s.l.CURRENT_GAMES:
      case s.l.FAVORITE_GAMES:
      case s.l.PLAYED_GAMES:
      case s.l.WANT_TO_PLAY_GAMES:
        return new m.zy({
          type: t,
          games: []
        });
      case s.l.APPLICATION:
        return new f.q({
          type: t,
          applicationId: ""
        })
    }
  }, [t]);
  (0, u.q)(P.type === s.l.APPLICATION ? P.applicationId : null);
  let S = l.useCallback(() => {
    c || ((0, g.qH)(t, P), d({
      action: "WIDGET_ADDED",
      widgetEdited: t
    }), (0, p.L$)(j.qb.WIDGET_ADDED), null == n || n())
  }, [c, t, P, d, n]);
  return (0, r.jsxs)(o.P3F, {
    className: a()(h.addButtonContainer, O && h.sizeSmall, c && h.loading),
    onClick: S,
    "aria-label": x(P),
    "aria-busy": c,
    children: ["details" === y.variant ? (0, r.jsx)(b.i, {
      applicationId: y.applicationId,
      size: i
    }) : (0, r.jsx)(b.c, {
      applicationIds: y.applicationIds,
      size: i
    }), (0, r.jsxs)("div", {
      className: h.overlay,
      children: [(0, r.jsx)(o.oFk, {
        size: "md",
        color: "currentColor",
        className: h.addButton
      }), (0, r.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "header-primary",
        children: (0, g.mR)(P)
      })]
    })]
  })
}