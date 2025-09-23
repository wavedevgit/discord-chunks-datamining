/** Chunk was on 49902 **/
/** chunk id: 299560, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk296009 = require("./296009.js"),
  Chunk481060 = require("./481060.js"),
  Chunk812206 = require("./812206.js"),
  Chunk804919 = require("./804919.js"),
  Chunk350327 = require("./350327.js"),
  Chunk931847 = require("./931847.js"),
  Chunk836197 = require("./836197.js"),
  Chunk86419 = require("./86419.js"),
  Chunk872269 = require("./872269.js"),
  Chunk248554 = require("./248554.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk73686 = require("./73686.js");
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
      var t, n;
      return v.intl.formatToPlainString(v.t.KfGahI, {
        applicationName: null != (n = null == (t = c.Z.getApplication(e.applicationId)) ? true : t.name) ? n : ""
      })
    }
  }
};

function j(e) {
  let {
    widgetType: t,
    onAddWidget: n,
    size: l = "default",
    loading: c = false,
    trackUserProfileEditAction: u
  } = e, {
    placeholder: v,
    getAriaLabel: j
  } = O[t], x = "small" === l, P = (0, d.SM)().data, S = i.useMemo(() => {
    switch (t) {
      case o.l.CURRENT_GAMES:
      case o.l.FAVORITE_GAMES:
      case o.l.PLAYED_GAMES:
      case o.l.WANT_TO_PLAY_GAMES:
        return new g.zy({
          type: t,
          games: []
        });
      case o.l.APPLICATION:
        let e = null == P ? true : P[0];
        if (null == e) return null;
        return new f.q({
          type: t,
          applicationId: e
        })
    }
  }, [t, P]), I = i.useCallback(() => {
    c || null == S || ((0, h.qH)(t, S), u({
      action: "WIDGET_ADDED",
      widgetEdited: t
    }), (0, p.L$)(m.qb.WIDGET_ADDED), null == n || n())
  }, [c, t, S, u, n]);
  return null == S ? null : (0, r.jsxs)(s.P3F, {
    className: a()(y.addButtonContainer, x && y.sizeSmall, c && y.loading),
    onClick: I,
    "aria-label": j(S),
    "aria-busy": c,
    children: ["details" === v.variant ? (0, r.jsx)(b.i, {
      applicationId: v.applicationId,
      size: l
    }) : (0, r.jsx)(b.c, {
      applicationIds: v.applicationIds,
      size: l
    }), (0, r.jsxs)("div", {
      className: y.overlay,
      children: [(0, r.jsx)(s.oFk, {
        size: "md",
        color: "currentColor",
        className: y.addButton
      }), (0, r.jsx)(s.Text, {
        variant: "text-md/medium",
        color: "header-primary",
        children: (0, h.mR)(S)
      })]
    })]
  })
}