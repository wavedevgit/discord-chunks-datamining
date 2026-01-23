/** Chunk was on 64228 **/
/** chunk id: 417021, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y
}), require("./896048.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk632738 = require("./632738.jsx"),
  Chunk994500 = require("./994500.js"),
  Chunk562153 = require("./562153.js"),
  Chunk183555 = require("./183555.jsx"),
  Chunk672385 = require("./672385.js"),
  Chunk950191 = require("./950191.js"),
  Chunk249790 = require("./249790.jsx"),
  Chunk946356 = require("./946356.jsx"),
  Chunk254828 = require("./254828.jsx"),
  Chunk783123 = require("./783123.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk996988 = require("./996988.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk599929 = require("./599929.js");

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}

function y(e) {
  let {
    user: t,
    guildId: n,
    channelId: y,
    messageId: _,
    roleId: O,
    transitionState: N,
    openedAt: E,
    onHide: T,
    sourceAnalyticsLocations: P = []
  } = e, C = n === h.ME ? true : n, S = (0, i.bG)([c.A], () => c.A.isBlocked(t.id)), {
    analyticsLocations: L
  } = (0, o.Ay)([...P, S ? s.A.BLOCKED_PROFILE_MODAL : s.A.IGNORED_PROFILE_MODAL]), R = (0, u.pb)({
    layout: "MODAL_V2",
    userId: t.id,
    showGuildProfile: true,
    guildId: C,
    channelId: y,
    messageId: _,
    roleId: O
  }), D = [{
    icon: r.yr3,
    description: v.intl.string(v.t.kcuWva)
  }, {
    icon: r.yr3,
    description: v.intl.string(S ? v.t.QxrDY1 : v.t.W6fjkS)
  }], w = (0, m.Ay)(t.id, C), M = d.Ay.getName(null == w ? true : w.guildId, y, t), G = v.intl.formatToPlainString(v.t.KRe1Fk, {
    name: M
  });
  return (0, l.jsx)(o.f5, {
    value: L,
    children: (0, l.jsx)(u.of, {
      value: R,
      openedAt: E,
      fetchStartedAt: null == w ? true : w.fetchStartedAt,
      fetchEndedAt: null == w ? true : w.fetchEndedAt,
      isLoaded: null == w ? true : w.isLoaded,
      children: (0, l.jsx)(r.EOs, {
        "data-migration-pending": true,
        transitionState: N,
        className: b.zr,
        "aria-label": G,
        parentComponent: "RestrictedUserProfileModalV2",
        children: (0, l.jsxs)(A.A, {
          user: t,
          displayProfile: w,
          themeType: g.d.MODAL_V2,
          children: [(0, l.jsx)("div", {
            className: b.Tp
          }), (0, l.jsxs)("div", {
            className: b.Qs,
            children: [(0, l.jsx)(f.A, {
              user: t,
              guildId: C
            }), (0, l.jsxs)("div", {
              className: b.FS,
              children: [(0, l.jsx)(r.Heading, {
                variant: "heading-xl/bold",
                color: "text-default",
                children: v.intl.string(v.t.b33pLD)
              }), (0, l.jsx)(r.Text, {
                variant: "text-md/medium",
                color: "text-default",
                children: v.intl.format(S ? v.t.T7QiLn : v.t.MnEowy, {
                  username: M
                })
              })]
            }), (0, l.jsx)("div", {
              className: b.vb,
              children: D.map((e, t) => {
                let {
                  icon: n,
                  description: i
                } = e;
                return (0, l.jsx)(a.PQ, {
                  icon: n,
                  title: i,
                  titleVariant: "text-md/normal",
                  color: r.LU0.colors.TEXT_DEFAULT.css
                }, t)
              })
            }), (0, l.jsxs)(r.BJc, {
              align: "center",
              children: [(0, l.jsx)(j.A, {
                size: "md",
                isBlocked: S,
                onClick: () => {
                  T(), (0, p.Wn)(I({
                    action: S ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                    analyticsLocations: L
                  }, R))
                }
              }), (0, l.jsx)(x.A, {
                userId: t.id,
                onClick: () => {
                  T(), (0, p.Wn)(I({
                    action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                    analyticsLocations: L
                  }, R))
                }
              })]
            })]
          })]
        })
      })
    })
  })
}