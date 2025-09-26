/** Chunk was on 74477 **/
/** chunk id: 299560, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => O
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
  Chunk229870 = require("./229870.js");
let j = {
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

function O(e) {
  let {
    widgetType: t,
    onAddWidget: r,
    size: l = "default",
    loading: c = false,
    trackUserProfileEditAction: u
  } = e, {
    placeholder: b,
    getAriaLabel: O
  } = j[t], x = "small" === l, P = (0, d.SM)().data, S = i.useMemo(() => {
    switch (t) {
      case s.l.CURRENT_GAMES:
      case s.l.FAVORITE_GAMES:
      case s.l.PLAYED_GAMES:
      case s.l.WANT_TO_PLAY_GAMES:
        return new g.zy({
          type: t,
          games: []
        });
      case s.l.APPLICATION:
        let e = null == P ? true : P[0];
        if (null == e) return null;
        return new f.q({
          type: t,
          applicationId: e
        })
    }
  }, [t, P]), w = i.useCallback(() => {
    c || null == S || ((0, h.qH)(t, S), u({
      action: "WIDGET_ADDED",
      widgetEdited: t
    }), (0, p.L$)(v.qb.WIDGET_ADDED), null == r || r())
  }, [c, t, S, u, r]);
  return null == S ? null : (0, n.jsxs)(o.P3F, {
    className: a()(y.addButtonContainer, x && y.sizeSmall, c && y.loading),
    onClick: w,
    "aria-label": O(S),
    "aria-busy": c,
    children: ["details" === b.variant ? (0, n.jsx)(m.i, {
      applicationId: b.applicationId,
      size: l
    }) : (0, n.jsx)(m.c, {
      applicationIds: b.applicationIds,
      size: l
    }), (0, n.jsxs)("div", {
      className: y.overlay,
      children: [(0, n.jsx)(o.oFk, {
        size: "md",
        color: "currentColor",
        className: y.addButton
      }), (0, n.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "header-primary",
        children: (0, h.mR)(S)
      })]
    })]
  })
}