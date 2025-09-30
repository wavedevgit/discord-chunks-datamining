/** Chunk was on 74477 **/
/** chunk id: 299560, original params: e,t,r (module,exports,require) **/
"use strict";
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
      var t, r;
      return b.intl.formatToPlainString(b.t.KfGahI, {
        applicationName: null != (r = null == (t = c.Z.getApplication(e.applicationId)) ? true : t.name) ? r : ""
      })
    }
  }
};

function j(e) {
  var t;
  let {
    widgetType: r,
    onAddWidget: l,
    size: c = "default",
    loading: u = false,
    trackUserProfileEditAction: b
  } = e, {
    placeholder: j,
    getAriaLabel: x
  } = O[r], P = "small" === c, S = null == (t = (0, d.uV)().data) ? true : t.map(e => e.application_id), I = i.useMemo(() => {
    switch (r) {
      case s.l.CURRENT_GAMES:
      case s.l.FAVORITE_GAMES:
      case s.l.PLAYED_GAMES:
      case s.l.WANT_TO_PLAY_GAMES:
        return new g.zy({
          type: r,
          games: []
        });
      case s.l.APPLICATION:
        let e = null == S ? true : S[0];
        if (null == e) return null;
        return new f.q({
          type: r,
          applicationId: e
        })
    }
  }, [r, S]), w = i.useCallback(() => {
    u || null == I || ((0, h.qH)(r, I), b({
      action: "WIDGET_ADDED",
      widgetEdited: r
    }), (0, p.L$)(v.qb.WIDGET_ADDED), null == l || l())
  }, [u, r, I, b, l]);
  return null == I ? null : (0, n.jsxs)(o.P3F, {
    className: a()(y.addButtonContainer, P && y.sizeSmall, u && y.loading),
    onClick: w,
    "aria-label": x(I),
    "aria-busy": u,
    children: ["details" === j.variant ? (0, n.jsx)(m.i, {
      applicationId: j.applicationId,
      size: c
    }) : (0, n.jsx)(m.c, {
      applicationIds: j.applicationIds,
      size: c
    }), (0, n.jsxs)("div", {
      className: y.overlay,
      children: [(0, n.jsx)(o.oFk, {
        size: "md",
        color: "currentColor",
        className: y.addButton
      }), (0, n.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "header-primary",
        children: (0, h.mR)(I)
      })]
    })]
  })
}