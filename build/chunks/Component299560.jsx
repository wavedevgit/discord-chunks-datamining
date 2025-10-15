/** Chunk was on 56848 **/
/** chunk id: 299560, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
let O = {
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
      var t;
      return null == (t = c.Z.getApplication(e.applicationId)) ? true : t.getIconURL(16)
    },
    getAriaLabel: e => {
      var t, n;
      return b.intl.formatToPlainString(b.t.KfGahB, {
        applicationName: null != (n = null == (t = c.Z.getApplication(e.applicationId)) ? true : t.name) ? n : ""
      })
    }
  }
};

function I(e) {
  let t, {
      widgetType: n,
      onAddWidget: l,
      size: c = "default",
      loading: d = false,
      trackUserProfileEditAction: b
    } = e,
    {
      placeholder: I,
      getAriaLabel: P,
      icon: S
    } = O[n],
    w = "small" === c,
    {
      config: E
    } = (0, m.G)(),
    T = i.useMemo(() => {
      switch (n) {
        case s.l.CURRENT_GAMES:
        case s.l.FAVORITE_GAMES:
        case s.l.PLAYED_GAMES:
        case s.l.WANT_TO_PLAY_GAMES:
          return new g.zy({
            type: n,
            games: []
          });
        case s.l.APPLICATION:
          let e = null == E ? true : E.application_id;
          if (null == e) return null;
          return new f.q({
            type: n,
            applicationId: e
          })
      }
    }, [n, null == E ? true : E.application_id]),
    A = i.useCallback(() => {
      d || null == T || ((0, p.qH)(n, T), b({
        action: "WIDGET_ADDED",
        widgetEdited: n
      }), (0, h.L$)(j.qb.WIDGET_ADDED), null == l || l())
    }, [d, n, T, b, l]);
  return (null != T && null != S && (t = S(T)), null == T) ? null : (0, r.jsxs)("div", {
    className: x.addButtonContainer,
    children: [(0, r.jsxs)(o.P3F, {
      className: a()(x.addButtonContent, w && x.sizeSmall, d && x.loading),
      onClick: A,
      "aria-label": P(T),
      "aria-busy": d,
      children: [(() => {
        if (null == T) return null;
        let e = I(T);
        switch (e.variant) {
          case "details":
            return (0, r.jsx)(v.i, {
              className: x.placeholderPadding,
              applicationId: e.applicationId,
              size: c
            });
          case "grid":
            return (0, r.jsx)(v.c, {
              className: x.placeholderPadding,
              applicationIds: e.applicationIds,
              size: c
            });
          case "application-widget":
            return (0, r.jsx)(y.Z, {
              applicationId: e.applicationId,
              size: c
            });
          default:
            return (0, u.vE)(e)
        }
      })(), (0, r.jsxs)("div", {
        className: x.overlay,
        children: [(0, r.jsx)(o.oFk, {
          size: "md",
          color: "currentColor",
          className: x.addButton
        }), (0, r.jsxs)("div", {
          className: x.title,
          children: [(0, r.jsx)(o.Text, {
            variant: "text-md/medium",
            color: "header-primary",
            children: (0, p.mR)(T)
          }), null != t ? (0, r.jsx)("img", {
            src: t,
            alt: "",
            width: 16,
            height: 16,
            className: x.icon
          }) : null]
        })]
      })]
    }), (() => {
      if (null == T) return null;
      let e = I(T);
      return "application-widget" === e.variant ? (0, r.jsx)(y.T, {
        applicationId: e.applicationId,
        size: c
      }) : null
    })()]
  })
}