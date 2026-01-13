/** Chunk was on 55827 **/
/** chunk id: 299560, original params: e,a,l (module,exports,require) **/
require.d(exports, {
  Z: () => I
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk296009 = require("./296009.js"),
  Chunk481060 = require("./481060.js"),
  Chunk812206 = require("./812206.js"),
  Chunk823379 = require("./823379.js"),
  Chunk804919 = require("./804919.js"),
  Chunk86419 = require("./86419.js"),
  Chunk872269 = require("./872269.js"),
  Chunk248554 = require("./248554.jsx"),
  Chunk70399 = require("./70399.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk119078 = require("./119078.js");
let j = {
  [Chunk296009.l.FAVORITE_GAMES]: {
    placeholder: () => ({
      variant: "details",
      applicationId: u.L.LEAGUE_OF_LEGENDS
    }),
    getAriaLabel: () => h.intl.string(h.t.xJtdIm)
  },
  [Chunk296009.l.CURRENT_GAMES]: {
    placeholder: () => ({
      variant: "details",
      applicationId: u.L.VALORANT
    }),
    getAriaLabel: () => h.intl.string(h.t.Ae8tRi)
  },
  [Chunk296009.l.PLAYED_GAMES]: {
    placeholder: () => ({
      variant: "grid",
      applicationIds: [u.L.PEAK, u.L.BATTLEFIELD_6, u.L.REPO, u.L.BALDURS_GATE_3]
    }),
    getAriaLabel: () => h.intl.string(h.t["pBR+4j"])
  },
  [Chunk296009.l.WANT_TO_PLAY_GAMES]: {
    placeholder: () => ({
      variant: "grid",
      applicationIds: [u.L.MARVEL_RIVALS, u.L.WORLD_OF_WARCRAFT, u.L.RUST, u.L.SILKSONG]
    }),
    getAriaLabel: () => h.intl.string(h.t.NtoBi1)
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
      return h.intl.formatToPlainString(h.t.KfGahB, {
        applicationName: null != (l = null == (a = o.Z.getApplication(e.applicationId)) ? true : a.name) ? l : ""
      })
    }
  }
};

function I(e) {
  let {
    widget: a,
    onAddWidget: l,
    size: n = "default",
    loading: r = false,
    trackUserProfileEditAction: o
  } = e, {
    placeholder: u,
    getAriaLabel: h,
    icon: I
  } = j[a.type], N = "small" === n, b = t.useCallback(() => {
    r || ((0, m.qH)(a), o(function(e) {
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
    }, a.getProfileEditAnalyticsOptions())), (0, p.L$)(f.qb.WIDGET_ADDED), null == l || l())
  }, [r, a, o, l]), L = null == I ? true : I(a);
  return (0, i.jsxs)("div", {
    className: x.addButtonContainer,
    children: [(0, i.jsxs)(c.P3F, {
      className: s()(x.addButtonContent, N && x.sizeSmall, r && x.loading),
      onClick: b,
      "aria-label": h(a),
      "aria-busy": r,
      children: [(() => {
        let e = u(a);
        switch (e.variant) {
          case "details":
            return (0, i.jsx)(v.i, {
              className: x.placeholderPadding,
              applicationId: e.applicationId,
              size: n
            });
          case "grid":
            return (0, i.jsx)(v.c, {
              className: x.placeholderPadding,
              applicationIds: e.applicationIds,
              size: n
            });
          case "application-widget":
            return (0, i.jsx)(g.Z, {
              applicationId: e.applicationId,
              size: n
            });
          default:
            return (0, d.vE)(e)
        }
      })(), (0, i.jsxs)("div", {
        className: x.overlay,
        children: [(0, i.jsx)(c.oFk, {
          size: "md",
          color: "currentColor",
          className: x.addButton
        }), (0, i.jsxs)("div", {
          className: x.title,
          children: [(0, i.jsx)(c.Text, {
            variant: "text-md/medium",
            color: "text-strong",
            children: (0, m.mR)(a)
          }), null != L ? (0, i.jsx)("img", {
            src: L,
            alt: "",
            width: 16,
            height: 16,
            className: x.icon
          }) : null]
        })]
      })]
    }), (() => {
      let e = u(a);
      return "application-widget" === e.variant ? (0, i.jsx)(g.T, {
        applicationId: e.applicationId,
        size: n
      }) : null
    })()]
  })
}