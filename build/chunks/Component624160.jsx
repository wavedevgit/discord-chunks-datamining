/** Chunk was on 42944 **/
/** chunk id: 624160, original params: e,a,n (module,exports,require) **/
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk540185 = require("./540185.js"),
  Chunk397927 = require("./397927.js"),
  Chunk587895 = require("./587895.js"),
  Chunk403362 = require("./403362.js"),
  Chunk635344 = require("./635344.js"),
  Chunk735321 = require("./735321.js"),
  Chunk384377 = require("./384377.js"),
  Chunk492280 = require("./492280.jsx"),
  Chunk939899 = require("./939899.jsx"),
  Chunk518477 = require("./518477.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk369134 = require("./369134.js");
let j = {
  [Chunk540185.x.FAVORITE_GAMES]: {
    placeholder: () => ({
      variant: "details",
      applicationId: u.n.LEAGUE_OF_LEGENDS
    }),
    getAriaLabel: () => g.intl.string(g.t.xJtdIm)
  },
  [Chunk540185.x.CURRENT_GAMES]: {
    placeholder: () => ({
      variant: "details",
      applicationId: u.n.VALORANT
    }),
    getAriaLabel: () => g.intl.string(g.t.Ae8tRi)
  },
  [Chunk540185.x.PLAYED_GAMES]: {
    placeholder: () => ({
      variant: "grid",
      applicationIds: [u.n.PEAK, u.n.BATTLEFIELD_6, u.n.REPO, u.n.BALDURS_GATE_3]
    }),
    getAriaLabel: () => g.intl.string(g.t["pBR+4j"])
  },
  [Chunk540185.x.WANT_TO_PLAY_GAMES]: {
    placeholder: () => ({
      variant: "grid",
      applicationIds: [u.n.MARVEL_RIVALS, u.n.WORLD_OF_WARCRAFT, u.n.RUST, u.n.SILKSONG]
    }),
    getAriaLabel: () => g.intl.string(g.t.NtoBi1)
  },
  [Chunk540185.x.APPLICATION]: {
    placeholder: e => ({
      variant: "application-widget",
      applicationId: e.applicationId
    }),
    icon: e => {
      var a;
      return null == (a = c.A.getApplication(e.applicationId)) ? true : a.getIconURL(16)
    },
    getAriaLabel: e => {
      var a, n;
      return g.intl.formatToPlainString(g.t.KfGahB, {
        applicationName: null != (a = null == (n = c.A.getApplication(e.applicationId)) ? true : n.name) ? a : ""
      })
    }
  }
};

function h(e) {
  let a, {
      widget: n,
      onAddWidget: i,
      size: s = "default",
      loading: c = false,
      trackUserProfileEditAction: u
    } = e,
    {
      placeholder: g,
      getAriaLabel: h,
      icon: I
    } = j[n.type],
    N = "small" === s,
    b = l.useCallback(() => {
      c || ((0, m.Y5)(n), u(function(e) {
        for (var a = 1; a < arguments.length; a++) {
          var n = null != arguments[a] ? arguments[a] : {},
            t = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), t.forEach(function(a) {
            var t;
            t = n[a], a in e ? Object.defineProperty(e, a, {
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
      }, n.getProfileEditAnalyticsOptions())), (0, p.XA)(x.jM.WIDGET_ADDED), null == i || i())
    }, [c, n, u, i]),
    E = null == I ? true : I(n);
  return (0, t.jsxs)("div", {
    className: A.LG,
    children: [(0, t.jsxs)(o.DUT, {
      className: r()(A.PH, N && A.PG, c && A.Lq),
      onClick: b,
      "aria-label": h(n),
      "aria-busy": c,
      children: [(() => {
        let e = g(n);
        switch (e.variant) {
          case "details":
            return (0, t.jsx)(f.E, {
              className: A.xR,
              applicationId: e.applicationId,
              size: s
            });
          case "grid":
            return (0, t.jsx)(f.l, {
              className: A.xR,
              applicationIds: e.applicationIds,
              size: s
            });
          case "application-widget":
            return (0, t.jsx)(v.A, {
              applicationId: e.applicationId,
              size: s
            });
          default:
            return (0, d.xb)(e)
        }
      })(), (0, t.jsxs)("div", {
        className: A.Lw,
        children: [(0, t.jsx)(o.U1e, {
          size: "md",
          color: "currentColor",
          className: A.c9
        }), (0, t.jsxs)("div", {
          className: A.DD,
          children: [(0, t.jsx)(o.Text, {
            variant: "text-md/medium",
            color: "text-strong",
            children: (0, m.L)(n)
          }), null != E ? (0, t.jsx)("img", {
            src: E,
            alt: "",
            width: 16,
            height: 16,
            className: A.Kk
          }) : null]
        })]
      })]
    }), "application-widget" === (a = g(n)).variant ? (0, t.jsx)(v.R, {
      applicationId: a.applicationId,
      size: s
    }) : null]
  })
}