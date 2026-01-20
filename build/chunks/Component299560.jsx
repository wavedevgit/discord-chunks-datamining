/** Chunk was on 45956 **/
/** chunk id: 299560, original params: e,a,t (module,exports,require) **/
require.d(exports, {
  Z: () => I
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
    getAriaLabel: () => x.intl.string(x.t.xJtdIm)
  },
  [Chunk296009.l.CURRENT_GAMES]: {
    placeholder: () => ({
      variant: "details",
      applicationId: u.L.VALORANT
    }),
    getAriaLabel: () => x.intl.string(x.t.Ae8tRi)
  },
  [Chunk296009.l.PLAYED_GAMES]: {
    placeholder: () => ({
      variant: "grid",
      applicationIds: [u.L.PEAK, u.L.BATTLEFIELD_6, u.L.REPO, u.L.BALDURS_GATE_3]
    }),
    getAriaLabel: () => x.intl.string(x.t["pBR+4j"])
  },
  [Chunk296009.l.WANT_TO_PLAY_GAMES]: {
    placeholder: () => ({
      variant: "grid",
      applicationIds: [u.L.MARVEL_RIVALS, u.L.WORLD_OF_WARCRAFT, u.L.RUST, u.L.SILKSONG]
    }),
    getAriaLabel: () => x.intl.string(x.t.NtoBi1)
  },
  [Chunk296009.l.APPLICATION]: {
    placeholder: e => ({
      variant: "application-widget",
      applicationId: e.applicationId
    }),
    icon: e => {
      var a;
      return null == (a = c.Z.getApplication(e.applicationId)) ? true : a.getIconURL(16)
    },
    getAriaLabel: e => {
      var a, t;
      return x.intl.formatToPlainString(x.t.KfGahB, {
        applicationName: null != (t = null == (a = c.Z.getApplication(e.applicationId)) ? true : a.name) ? t : ""
      })
    }
  }
};

function I(e) {
  let {
    widget: a,
    onAddWidget: t,
    size: n = "default",
    loading: s = false,
    trackUserProfileEditAction: c
  } = e, {
    placeholder: u,
    getAriaLabel: x,
    icon: I
  } = j[a.type], N = "small" === n, E = l.useCallback(() => {
    s || ((0, m.qH)(a), c(function(e) {
      for (var a = 1; a < arguments.length; a++) {
        var t = null != arguments[a] ? arguments[a] : {},
          i = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), i.forEach(function(a) {
          var i;
          i = t[a], a in e ? Object.defineProperty(e, a, {
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
    }, a.getProfileEditAnalyticsOptions())), (0, p.L$)(g.qb.WIDGET_ADDED), null == t || t())
  }, [s, a, c, t]), b = null == I ? true : I(a);
  return (0, i.jsxs)("div", {
    className: h.addButtonContainer,
    children: [(0, i.jsxs)(o.P3F, {
      className: r()(h.addButtonContent, N && h.sizeSmall, s && h.loading),
      onClick: E,
      "aria-label": x(a),
      "aria-busy": s,
      children: [(() => {
        let e = u(a);
        switch (e.variant) {
          case "details":
            return (0, i.jsx)(v.i, {
              className: h.placeholderPadding,
              applicationId: e.applicationId,
              size: n
            });
          case "grid":
            return (0, i.jsx)(v.c, {
              className: h.placeholderPadding,
              applicationIds: e.applicationIds,
              size: n
            });
          case "application-widget":
            return (0, i.jsx)(f.Z, {
              applicationId: e.applicationId,
              size: n
            });
          default:
            return (0, d.vE)(e)
        }
      })(), (0, i.jsxs)("div", {
        className: h.overlay,
        children: [(0, i.jsx)(o.oFk, {
          size: "md",
          color: "currentColor",
          className: h.addButton
        }), (0, i.jsxs)("div", {
          className: h.title,
          children: [(0, i.jsx)(o.Text, {
            variant: "text-md/medium",
            color: "text-strong",
            children: (0, m.mR)(a)
          }), null != b ? (0, i.jsx)("img", {
            src: b,
            alt: "",
            width: 16,
            height: 16,
            className: h.icon
          }) : null]
        })]
      })]
    }), (() => {
      let e = u(a);
      return "application-widget" === e.variant ? (0, i.jsx)(f.T, {
        applicationId: e.applicationId,
        size: n
      }) : null
    })()]
  })
}