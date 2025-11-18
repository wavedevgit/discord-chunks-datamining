/** Chunk was on 39380 **/
/** chunk id: 299560, original params: e,a,l (module,exports,require) **/
require.d(exports, {
  Z: () => E
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
let I = {
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
      var a;
      return null == (a = d.Z.getApplication(e.applicationId)) ? true : a.getIconURL(16)
    },
    getAriaLabel: e => {
      var a, l;
      return g.intl.formatToPlainString(g.t.KfGahB, {
        applicationName: null != (l = null == (a = d.Z.getApplication(e.applicationId)) ? true : a.name) ? l : ""
      })
    }
  }
};

function E(e) {
  let a, {
      widgetType: l,
      onAddWidget: n,
      size: d = "default",
      loading: u = false,
      trackUserProfileEditAction: g
    } = e,
    {
      placeholder: E,
      getAriaLabel: L,
      icon: _
    } = I[l],
    O = "small" === d,
    {
      config: T
    } = (0, x.G)(),
    b = t.useMemo(() => {
      switch (l) {
        case s.l.CURRENT_GAMES:
        case s.l.FAVORITE_GAMES:
        case s.l.PLAYED_GAMES:
        case s.l.WANT_TO_PLAY_GAMES:
          return new m.zy({
            type: l,
            games: []
          });
        case s.l.APPLICATION:
          let e = null == T ? true : T.application_id;
          if (null == e) return null;
          return new p.q({
            type: l,
            applicationId: e
          })
      }
    }, [l, null == T ? true : T.application_id]),
    S = t.useCallback(() => {
      u || null == b || ((0, v.qH)(l, b), g({
        action: "WIDGET_ADDED",
        widgetEdited: l,
        applicationId: b instanceof p.q ? b.applicationId : true
      }), (0, j.L$)(N.qb.WIDGET_ADDED), null == n || n())
    }, [u, l, b, g, n]);
  return (null != b && null != _ && (a = _(b)), null == b) ? null : (0, i.jsxs)("div", {
    className: A.addButtonContainer,
    children: [(0, i.jsxs)(c.P3F, {
      className: r()(A.addButtonContent, O && A.sizeSmall, u && A.loading),
      onClick: S,
      "aria-label": L(b),
      "aria-busy": u,
      children: [(() => {
        if (null == b) return null;
        let e = E(b);
        switch (e.variant) {
          case "details":
            return (0, i.jsx)(f.i, {
              className: A.placeholderPadding,
              applicationId: e.applicationId,
              size: d
            });
          case "grid":
            return (0, i.jsx)(f.c, {
              className: A.placeholderPadding,
              applicationIds: e.applicationIds,
              size: d
            });
          case "application-widget":
            return (0, i.jsx)(h.Z, {
              applicationId: e.applicationId,
              size: d
            });
          default:
            return (0, o.vE)(e)
        }
      })(), (0, i.jsxs)("div", {
        className: A.overlay,
        children: [(0, i.jsx)(c.oFk, {
          size: "md",
          color: "currentColor",
          className: A.addButton
        }), (0, i.jsxs)("div", {
          className: A.title,
          children: [(0, i.jsx)(c.Text, {
            variant: "text-md/medium",
            color: "header-primary",
            children: (0, v.mR)(b)
          }), null != a ? (0, i.jsx)("img", {
            src: a,
            alt: "",
            width: 16,
            height: 16,
            className: A.icon
          }) : null]
        })]
      })]
    }), (() => {
      if (null == b) return null;
      let e = E(b);
      return "application-widget" === e.variant ? (0, i.jsx)(h.T, {
        applicationId: e.applicationId,
        size: d
      }) : null
    })()]
  })
}