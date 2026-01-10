/** Chunk was on 33131 **/
/** chunk id: 299560, original params: e,a,l (module,exports,require) **/
require.d(exports, {
  Z: () => N
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
let h = {
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
      return null == (a = o.Z.getApplication(e.applicationId)) ? true : a.getIconURL(16)
    },
    getAriaLabel: e => {
      var a, l;
      return x.intl.formatToPlainString(x.t.KfGahB, {
        applicationName: null != (l = null == (a = o.Z.getApplication(e.applicationId)) ? true : a.name) ? l : ""
      })
    }
  }
};

function N(e) {
  let {
    widget: a,
    onAddWidget: l,
    size: n = "default",
    loading: s = false,
    trackUserProfileEditAction: o
  } = e, {
    placeholder: u,
    getAriaLabel: x,
    icon: N
  } = h[a.type], I = "small" === n, b = i.useCallback(() => {
    s || ((0, m.qH)(a), o(function(e) {
      for (var a = 1; a < arguments.length; a++) {
        var l = null != arguments[a] ? arguments[a] : {},
          t = Object.keys(l);
        "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
          return Object.getOwnPropertyDescriptor(l, e).enumerable
        }))), t.forEach(function(a) {
          var t;
          t = l[a], a in e ? Object.defineProperty(e, a, {
            value: t,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[a] = t
        })
      }
      return e
    }({
      action: "WIDGET_ADDED"
    }, a.getProfileEditAnalyticsOptions())), (0, p.L$)(g.qb.WIDGET_ADDED), null == l || l())
  }, [s, a, o, l]), A = null == N ? true : N(a);
  return (0, t.jsxs)("div", {
    className: j.addButtonContainer,
    children: [(0, t.jsxs)(c.P3F, {
      className: r()(j.addButtonContent, I && j.sizeSmall, s && j.loading),
      onClick: b,
      "aria-label": x(a),
      "aria-busy": s,
      children: [(() => {
        let e = u(a);
        switch (e.variant) {
          case "details":
            return (0, t.jsx)(v.i, {
              className: j.placeholderPadding,
              applicationId: e.applicationId,
              size: n
            });
          case "grid":
            return (0, t.jsx)(v.c, {
              className: j.placeholderPadding,
              applicationIds: e.applicationIds,
              size: n
            });
          case "application-widget":
            return (0, t.jsx)(f.Z, {
              applicationId: e.applicationId,
              size: n
            });
          default:
            return (0, d.vE)(e)
        }
      })(), (0, t.jsxs)("div", {
        className: j.overlay,
        children: [(0, t.jsx)(c.oFk, {
          size: "md",
          color: "currentColor",
          className: j.addButton
        }), (0, t.jsxs)("div", {
          className: j.title,
          children: [(0, t.jsx)(c.Text, {
            variant: "text-md/medium",
            color: "text-strong",
            children: (0, m.mR)(a)
          }), null != A ? (0, t.jsx)("img", {
            src: A,
            alt: "",
            width: 16,
            height: 16,
            className: j.icon
          }) : null]
        })]
      })]
    }), (() => {
      let e = u(a);
      return "application-widget" === e.variant ? (0, t.jsx)(f.T, {
        applicationId: e.applicationId,
        size: n
      }) : null
    })()]
  })
}