/** Chunk was on 39380 **/
/** chunk id: 299560, original params: e,l,a (module,exports,require) **/
require.d(exports, {
  Z: () => I
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk296009 = require("./296009.js"),
  Chunk481060 = require("./481060.js"),
  Chunk812206 = require("./812206.js"),
  Chunk823379 = require("./823379.js"),
  Chunk804919 = require("./804919.js"),
  Chunk931847 = require("./931847.js"),
  Chunk836197 = require("./836197.js"),
  Chunk86419 = require("./86419.js"),
  Chunk50130 = require("./50130.js"),
  Chunk872269 = require("./872269.js"),
  Chunk248554 = require("./248554.jsx"),
  Chunk70399 = require("./70399.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk229870 = require("./229870.js");
let N = {
  [Chunk296009.l.FAVORITE_GAMES]: {
    placeholder: () => ({
      variant: "details",
      applicationId: Chunk804919.L.LEAGUE_OF_LEGENDS
    }),
    getAriaLabel: () => Chunk388032.intl.string(Chunk388032.t.xJtdIm)
  },
  [Chunk296009.l.CURRENT_GAMES]: {
    placeholder: () => ({
      variant: "details",
      applicationId: Chunk804919.L.VALORANT
    }),
    getAriaLabel: () => Chunk388032.intl.string(Chunk388032.t.Ae8tRi)
  },
  [Chunk296009.l.PLAYED_GAMES]: {
    placeholder: () => ({
      variant: "grid",
      applicationIds: [Chunk804919.L.PEAK, Chunk804919.L.APEX_LEGENDS, Chunk804919.L.REPO, Chunk804919.L.BALDURS_GATE_3]
    }),
    getAriaLabel: () => Chunk388032.intl.string(Chunk388032.t["pBR+4j"])
  },
  [Chunk296009.l.WANT_TO_PLAY_GAMES]: {
    placeholder: () => ({
      variant: "grid",
      applicationIds: [Chunk804919.L.MARVEL_RIVALS, Chunk804919.L.WORLD_OF_WARCRAFT, Chunk804919.L.BATTLEFIELD_6, Chunk804919.L.RUST]
    }),
    getAriaLabel: () => Chunk388032.intl.string(Chunk388032.t.NtoBi1)
  },
  [Chunk296009.l.APPLICATION]: {
    placeholder: e => ({
      variant: "application-widget",
      applicationId: e.applicationId
    }),
    icon: e => {
      var l;
      return null == (l = o.Z.getApplication(e.applicationId)) ? true : l.getIconURL(16)
    },
    getAriaLabel: e => {
      var l, a;
      return A.intl.formatToPlainString(A.t.KfGahB, {
        applicationName: null != (a = null == (l = o.Z.getApplication(e.applicationId)) ? true : l.name) ? a : ""
      })
    }
  }
};

function I(e) {
  let l, {
      widgetType: a,
      onAddWidget: t,
      size: o = "default",
      loading: u = false,
      trackUserProfileEditAction: A
    } = e,
    {
      placeholder: I,
      getAriaLabel: L,
      icon: T
    } = N[a],
    _ = "small" === o,
    {
      config: b
    } = (0, x.G)(),
    O = n.useMemo(() => {
      switch (a) {
        case s.l.CURRENT_GAMES:
        case s.l.FAVORITE_GAMES:
        case s.l.PLAYED_GAMES:
        case s.l.WANT_TO_PLAY_GAMES:
          return new m.zy({
            type: a,
            games: []
          });
        case s.l.APPLICATION:
          let e = null == b ? true : b.application_id;
          if (null == e) return null;
          return new p.q({
            type: a,
            applicationId: e
          })
      }
    }, [a, null == b ? true : b.application_id]),
    R = n.useCallback(() => {
      u || null == O || ((0, v.qH)(a, O), A({
        action: "WIDGET_ADDED",
        widgetEdited: a
      }), (0, f.L$)(j.qb.WIDGET_ADDED), null == t || t())
    }, [u, a, O, A, t]);
  return (null != O && null != T && (l = T(O)), null == O) ? null : (0, i.jsxs)("div", {
    className: g.addButtonContainer,
    children: [(0, i.jsxs)(c.P3F, {
      className: r()(g.addButtonContent, _ && g.sizeSmall, u && g.loading),
      onClick: R,
      "aria-label": L(O),
      "aria-busy": u,
      children: [(() => {
        if (null == O) return null;
        let e = I(O);
        switch (e.variant) {
          case "details":
            return (0, i.jsx)(h.i, {
              className: g.placeholderPadding,
              applicationId: e.applicationId,
              size: o
            });
          case "grid":
            return (0, i.jsx)(h.c, {
              className: g.placeholderPadding,
              applicationIds: e.applicationIds,
              size: o
            });
          case "application-widget":
            return (0, i.jsx)(E.Z, {
              applicationId: e.applicationId,
              size: o
            });
          default:
            return (0, d.vE)(e)
        }
      })(), (0, i.jsxs)("div", {
        className: g.overlay,
        children: [(0, i.jsx)(c.oFk, {
          size: "md",
          color: "currentColor",
          className: g.addButton
        }), (0, i.jsxs)("div", {
          className: g.title,
          children: [(0, i.jsx)(c.Text, {
            variant: "text-md/medium",
            color: "header-primary",
            children: (0, v.mR)(O)
          }), null != l ? (0, i.jsx)("img", {
            src: l,
            alt: "",
            width: 16,
            height: 16,
            className: g.icon
          }) : null]
        })]
      })]
    }), (() => {
      if (null == O) return null;
      let e = I(O);
      return "application-widget" === e.variant ? (0, i.jsx)(E.T, {
        applicationId: e.applicationId,
        size: o
      }) : null
    })()]
  })
}