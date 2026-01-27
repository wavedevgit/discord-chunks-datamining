/** Chunk was on 21738 **/
/** chunk id: 624160, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => E
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
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
let b = {
  [Chunk540185.x.FAVORITE_GAMES]: {
    placeholder: () => ({
      variant: "details",
      applicationId: d.n.LEAGUE_OF_LEGENDS
    }),
    getAriaLabel: () => A.intl.string(A.t.xJtdIm)
  },
  [Chunk540185.x.CURRENT_GAMES]: {
    placeholder: () => ({
      variant: "details",
      applicationId: d.n.VALORANT
    }),
    getAriaLabel: () => A.intl.string(A.t.Ae8tRi)
  },
  [Chunk540185.x.PLAYED_GAMES]: {
    placeholder: () => ({
      variant: "grid",
      applicationIds: [d.n.PEAK, d.n.BATTLEFIELD_6, d.n.REPO, d.n.BALDURS_GATE_3]
    }),
    getAriaLabel: () => A.intl.string(A.t["pBR+4j"])
  },
  [Chunk540185.x.WANT_TO_PLAY_GAMES]: {
    placeholder: () => ({
      variant: "grid",
      applicationIds: [d.n.MARVEL_RIVALS, d.n.WORLD_OF_WARCRAFT, d.n.RUST, d.n.SILKSONG]
    }),
    getAriaLabel: () => A.intl.string(A.t.NtoBi1)
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
      return A.intl.formatToPlainString(A.t.KfGahB, {
        applicationName: null != (t = null == (n = c.A.getApplication(e.applicationId)) ? true : n.name) ? t : ""
      })
    }
  }
};

function E(e) {
  let t, {
      widget: n,
      onAddWidget: l,
      size: s = "default",
      loading: c = false,
      trackUserProfileEditAction: d
    } = e,
    {
      placeholder: A,
      getAriaLabel: E,
      icon: O
    } = b[n.type],
    y = "small" === s,
    I = i.useCallback(() => {
      c || ((0, p.Y5)(n), d(function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = r
          })
        }
        return e
      }({
        action: "WIDGET_ADDED"
      }, n.getProfileEditAnalyticsOptions())), (0, h.XA)(m.jM.WIDGET_ADDED), null == l || l())
    }, [c, n, d, l]),
    v = null == O ? true : O(n);
  return (0, r.jsxs)("div", {
    className: _.LG,
    children: [(0, r.jsxs)(o.DUT, {
      className: a()(_.PH, y && _.PG, c && _.Lq),
      onClick: I,
      "aria-label": E(n),
      "aria-busy": c,
      children: [(() => {
        let e = A(n);
        switch (e.variant) {
          case "details":
            return (0, r.jsx)(g.E, {
              className: _.xR,
              applicationId: e.applicationId,
              size: s
            });
          case "grid":
            return (0, r.jsx)(g.l, {
              className: _.xR,
              applicationIds: e.applicationIds,
              size: s
            });
          case "application-widget":
            return (0, r.jsx)(f.A, {
              applicationId: e.applicationId,
              size: s
            });
          default:
            return (0, u.xb)(e)
        }
      })(), (0, r.jsxs)("div", {
        className: _.Lw,
        children: [(0, r.jsx)(o.U1e, {
          size: "md",
          color: "currentColor",
          className: _.c9
        }), (0, r.jsxs)("div", {
          className: _.DD,
          children: [(0, r.jsx)(o.Text, {
            variant: "text-md/medium",
            color: "text-strong",
            children: (0, p.L)(n)
          }), null != v ? (0, r.jsx)("img", {
            src: v,
            alt: "",
            width: 16,
            height: 16,
            className: _.Kk
          }) : null]
        })]
      })]
    }), "application-widget" === (t = A(n)).variant ? (0, r.jsx)(f.R, {
      applicationId: t.applicationId,
      size: s
    }) : null]
  })
}