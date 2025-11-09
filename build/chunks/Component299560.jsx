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
  Chunk73686 = require("./73686.js");
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
      applicationIds: [Chunk804919.L.PEAK, Chunk804919.L.BATTLEFIELD_6, Chunk804919.L.REPO, Chunk804919.L.BALDURS_GATE_3]
    }),
    getAriaLabel: () => Chunk388032.intl.string(Chunk388032.t["pBR+4j"])
  },
  [Chunk296009.l.WANT_TO_PLAY_GAMES]: {
    placeholder: () => ({
      variant: "grid",
      applicationIds: [Chunk804919.L.MARVEL_RIVALS, Chunk804919.L.WORLD_OF_WARCRAFT, Chunk804919.L.RUST, Chunk804919.L.SILKSONG]
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
      onAddWidget: n,
      size: o = "default",
      loading: u = false,
      trackUserProfileEditAction: A
    } = e,
    {
      placeholder: I,
      getAriaLabel: L,
      icon: T
    } = N[a],
    b = "small" === o,
    {
      config: _
    } = (0, f.G)(),
    S = t.useMemo(() => {
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
          let e = null == _ ? true : _.application_id;
          if (null == e) return null;
          return new p.q({
            type: a,
            applicationId: e
          })
      }
    }, [a, null == _ ? true : _.application_id]),
    O = t.useCallback(() => {
      u || null == S || ((0, v.qH)(a, S), A({
        action: "WIDGET_ADDED",
        widgetEdited: a
      }), (0, h.L$)(g.qb.WIDGET_ADDED), null == n || n())
    }, [u, a, S, A, n]);
  return (null != S && null != T && (l = T(S)), null == S) ? null : (0, i.jsxs)("div", {
    className: E.addButtonContainer,
    children: [(0, i.jsxs)(c.P3F, {
      className: r()(E.addButtonContent, b && E.sizeSmall, u && E.loading),
      onClick: O,
      "aria-label": L(S),
      "aria-busy": u,
      children: [(() => {
        if (null == S) return null;
        let e = I(S);
        switch (e.variant) {
          case "details":
            return (0, i.jsx)(x.i, {
              className: E.placeholderPadding,
              applicationId: e.applicationId,
              size: o
            });
          case "grid":
            return (0, i.jsx)(x.c, {
              className: E.placeholderPadding,
              applicationIds: e.applicationIds,
              size: o
            });
          case "application-widget":
            return (0, i.jsx)(j.Z, {
              applicationId: e.applicationId,
              size: o
            });
          default:
            return (0, d.vE)(e)
        }
      })(), (0, i.jsxs)("div", {
        className: E.overlay,
        children: [(0, i.jsx)(c.oFk, {
          size: "md",
          color: "currentColor",
          className: E.addButton
        }), (0, i.jsxs)("div", {
          className: E.title,
          children: [(0, i.jsx)(c.Text, {
            variant: "text-md/medium",
            color: "header-primary",
            children: (0, v.mR)(S)
          }), null != l ? (0, i.jsx)("img", {
            src: l,
            alt: "",
            width: 16,
            height: 16,
            className: E.icon
          }) : null]
        })]
      })]
    }), (() => {
      if (null == S) return null;
      let e = I(S);
      return "application-widget" === e.variant ? (0, i.jsx)(j.T, {
        applicationId: e.applicationId,
        size: o
      }) : null
    })()]
  })
}