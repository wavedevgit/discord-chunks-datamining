/** Chunk was on 42944 **/
/** chunk id: 624160, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
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
      applicationId: d.n.LEAGUE_OF_LEGENDS
    }),
    getAriaLabel: () => x.intl.string(x.t.xJtdIm)
  },
  [Chunk540185.x.CURRENT_GAMES]: {
    placeholder: () => ({
      variant: "details",
      applicationId: d.n.VALORANT
    }),
    getAriaLabel: () => x.intl.string(x.t.Ae8tRi)
  },
  [Chunk540185.x.PLAYED_GAMES]: {
    placeholder: () => ({
      variant: "grid",
      applicationIds: [d.n.PEAK, d.n.BATTLEFIELD_6, d.n.REPO, d.n.BALDURS_GATE_3]
    }),
    getAriaLabel: () => x.intl.string(x.t["pBR+4j"])
  },
  [Chunk540185.x.WANT_TO_PLAY_GAMES]: {
    placeholder: () => ({
      variant: "grid",
      applicationIds: [d.n.MARVEL_RIVALS, d.n.WORLD_OF_WARCRAFT, d.n.RUST, d.n.SILKSONG]
    }),
    getAriaLabel: () => x.intl.string(x.t.NtoBi1)
  },
  [Chunk540185.x.APPLICATION]: {
    placeholder: e => ({
      variant: "application-widget",
      applicationId: e.applicationId
    }),
    icon: e => {
      var t;
      return null == (t = c.A.getApplication(e.applicationId)) ? true : t.getIconURL(16)
    },
    getAriaLabel: e => {
      var t, n;
      return x.intl.formatToPlainString(x.t.KfGahB, {
        applicationName: null != (t = null == (n = c.A.getApplication(e.applicationId)) ? true : n.name) ? t : ""
      })
    }
  }
};

function b(e) {
  let t, {
      widget: n,
      onAddWidget: i,
      size: s = "default",
      loading: c = false,
      trackUserProfileEditAction: d
    } = e,
    {
      placeholder: x,
      getAriaLabel: b,
      icon: I
    } = j[n.type],
    A = "small" === s,
    y = l.useCallback(() => {
      c || ((0, p.Y5)(n), d(function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), a.forEach(function(t) {
            var a;
            a = n[t], t in e ? Object.defineProperty(e, t, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = a
          })
        }
        return e
      }({
        action: "WIDGET_ADDED"
      }, n.getProfileEditAnalyticsOptions())), (0, m.XA)(v.jM.WIDGET_ADDED), null == i || i())
    }, [c, n, d, i]),
    N = null == I ? true : I(n);
  return (0, a.jsxs)("div", {
    className: h.LG,
    children: [(0, a.jsxs)(o.DUT, {
      className: r()(h.PH, A && h.PG, c && h.Lq),
      onClick: y,
      "aria-label": b(n),
      "aria-busy": c,
      children: [(() => {
        let e = x(n);
        switch (e.variant) {
          case "details":
            return (0, a.jsx)(f.E, {
              className: h.xR,
              applicationId: e.applicationId,
              size: s
            });
          case "grid":
            return (0, a.jsx)(f.l, {
              className: h.xR,
              applicationIds: e.applicationIds,
              size: s
            });
          case "application-widget":
            return (0, a.jsx)(g.A, {
              applicationId: e.applicationId,
              size: s
            });
          default:
            return (0, u.xb)(e)
        }
      })(), (0, a.jsxs)("div", {
        className: h.Lw,
        children: [(0, a.jsx)(o.U1e, {
          size: "md",
          color: "currentColor",
          className: h.c9
        }), (0, a.jsxs)("div", {
          className: h.DD,
          children: [(0, a.jsx)(o.Text, {
            variant: "text-md/medium",
            color: "text-strong",
            children: (0, p.L)(n)
          }), null != N ? (0, a.jsx)("img", {
            src: N,
            alt: "",
            width: 16,
            height: 16,
            className: h.Kk
          }) : null]
        })]
      })]
    }), "application-widget" === (t = x(n)).variant ? (0, a.jsx)(g.R, {
      applicationId: t.applicationId,
      size: s
    }) : null]
  })
}