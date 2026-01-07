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
  Chunk119078 = require("./119078.js");
let I = {
  [Chunk296009.l.FAVORITE_GAMES]: {
    placeholder: () => ({
      variant: "details",
      applicationId: u.L.LEAGUE_OF_LEGENDS
    }),
    getAriaLabel: () => N.intl.string(N.t.xJtdIm)
  },
  [Chunk296009.l.CURRENT_GAMES]: {
    placeholder: () => ({
      variant: "details",
      applicationId: u.L.VALORANT
    }),
    getAriaLabel: () => N.intl.string(N.t.Ae8tRi)
  },
  [Chunk296009.l.PLAYED_GAMES]: {
    placeholder: () => ({
      variant: "grid",
      applicationIds: [u.L.PEAK, u.L.BATTLEFIELD_6, u.L.REPO, u.L.BALDURS_GATE_3]
    }),
    getAriaLabel: () => N.intl.string(N.t["pBR+4j"])
  },
  [Chunk296009.l.WANT_TO_PLAY_GAMES]: {
    placeholder: () => ({
      variant: "grid",
      applicationIds: [u.L.MARVEL_RIVALS, u.L.WORLD_OF_WARCRAFT, u.L.RUST, u.L.SILKSONG]
    }),
    getAriaLabel: () => N.intl.string(N.t.NtoBi1)
  },
  [Chunk296009.l.APPLICATION]: {
    placeholder: e => ({
      variant: "application-widget",
      applicationId: e.applicationId
    }),
    icon: e => {
      var a;
      return null == (a = o.Z.getApplication(e.applicationId)) ? true : a.getIconURL(16)
    },
    getAriaLabel: e => {
      var a, l;
      return N.intl.formatToPlainString(N.t.KfGahB, {
        applicationName: null != (l = null == (a = o.Z.getApplication(e.applicationId)) ? true : a.name) ? l : ""
      })
    }
  }
};

function E(e) {
  let a, {
      widgetType: l,
      onAddWidget: n,
      size: o = "default",
      loading: u = false,
      trackUserProfileEditAction: N
    } = e,
    {
      placeholder: E,
      getAriaLabel: b,
      icon: L
    } = I[l],
    O = "small" === o,
    {
      config: _
    } = (0, f.G)(),
    P = t.useMemo(() => {
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
          let e = null == _ ? true : _.application_id;
          if (null == e) return null;
          return new p.q({
            type: l,
            applicationId: e
          })
      }
    }, [l, null == _ ? true : _.application_id]),
    T = t.useCallback(() => {
      u || null == P || ((0, v.qH)(l, P), N(function(e) {
        for (var a = 1; a < arguments.length; a++) {
          var l = null != arguments[a] ? arguments[a] : {},
            i = Object.keys(l);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
            return Object.getOwnPropertyDescriptor(l, e).enumerable
          }))), i.forEach(function(a) {
            var i;
            i = l[a], a in e ? Object.defineProperty(e, a, {
              value: i,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[a] = i
          })
        }
        return e
      }({
        action: "WIDGET_ADDED"
      }, P.getProfileEditAnalyticsOptions())), (0, x.L$)(h.qb.WIDGET_ADDED), null == n || n())
    }, [u, l, P, N, n]);
  return (null != P && null != L && (a = L(P)), null == P) ? null : (0, i.jsxs)("div", {
    className: A.addButtonContainer,
    children: [(0, i.jsxs)(c.P3F, {
      className: r()(A.addButtonContent, O && A.sizeSmall, u && A.loading),
      onClick: T,
      "aria-label": b(P),
      "aria-busy": u,
      children: [(() => {
        if (null == P) return null;
        let e = E(P);
        switch (e.variant) {
          case "details":
            return (0, i.jsx)(g.i, {
              className: A.placeholderPadding,
              applicationId: e.applicationId,
              size: o
            });
          case "grid":
            return (0, i.jsx)(g.c, {
              className: A.placeholderPadding,
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
        className: A.overlay,
        children: [(0, i.jsx)(c.oFk, {
          size: "md",
          color: "currentColor",
          className: A.addButton
        }), (0, i.jsxs)("div", {
          className: A.title,
          children: [(0, i.jsx)(c.Text, {
            variant: "text-md/medium",
            color: "text-strong",
            children: (0, v.mR)(P)
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
      if (null == P) return null;
      let e = E(P);
      return "application-widget" === e.variant ? (0, i.jsx)(j.T, {
        applicationId: e.applicationId,
        size: o
      }) : null
    })()]
  })
}