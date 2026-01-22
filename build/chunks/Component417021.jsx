/** Chunk was on 64228 **/
/** chunk id: 417021, original params: e,l,t (module,exports,require) **/
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
  for (var l = 1; l < arguments.length; l++) {
    var t = null != arguments[l] ? arguments[l] : {},
      n = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), n.forEach(function(l) {
      var n;
      n = t[l], l in e ? Object.defineProperty(e, l, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[l] = n
    })
  }
  return e
}

function y(e) {
  let {
    user: l,
    guildId: t,
    channelId: y,
    messageId: O,
    roleId: N,
    transitionState: E,
    openedAt: _,
    onHide: T,
    sourceAnalyticsLocations: P = []
  } = e, S = t === h.ME ? true : t, C = (0, i.bG)([d.A], () => d.A.isBlocked(l.id)), {
    analyticsLocations: L
  } = (0, a.Ay)([...P, C ? s.A.BLOCKED_PROFILE_MODAL : s.A.IGNORED_PROFILE_MODAL]), D = (0, u.pb)({
    layout: "MODAL_V2",
    userId: l.id,
    showGuildProfile: true,
    guildId: S,
    channelId: y,
    messageId: O,
    roleId: N
  }), R = [{
    icon: r.yr3,
    description: v.intl.string(v.t.kcuWva)
  }, {
    icon: r.yr3,
    description: v.intl.string(C ? v.t.QxrDY1 : v.t.W6fjkS)
  }], w = (0, p.Ay)(l.id, S), G = c.Ay.getName(null == w ? true : w.guildId, y, l), M = v.intl.formatToPlainString(v.t.KRe1Fk, {
    name: G
  });
  return (0, n.jsx)(a.f5, {
    value: L,
    children: (0, n.jsx)(u.of, {
      value: D,
      openedAt: _,
      fetchStartedAt: null == w ? true : w.fetchStartedAt,
      fetchEndedAt: null == w ? true : w.fetchEndedAt,
      isLoaded: null == w ? true : w.isLoaded,
      children: (0, n.jsx)(r.EOs, {
        "data-migration-pending": true,
        transitionState: E,
        className: b.zr,
        "aria-label": M,
        parentComponent: "RestrictedUserProfileModalV2",
        children: (0, n.jsxs)(x.A, {
          user: l,
          displayProfile: w,
          themeType: g.d.MODAL_V2,
          children: [(0, n.jsx)("div", {
            className: b.Tp
          }), (0, n.jsxs)("div", {
            className: b.Qs,
            children: [(0, n.jsx)(m.A, {
              user: l,
              guildId: S
            }), (0, n.jsxs)("div", {
              className: b.FS,
              children: [(0, n.jsx)(r.Heading, {
                variant: "heading-xl/bold",
                color: "text-default",
                children: v.intl.string(v.t.b33pLD)
              }), (0, n.jsx)(r.Text, {
                variant: "text-md/medium",
                color: "text-default",
                children: v.intl.format(C ? v.t.T7QiLn : v.t.MnEowy, {
                  username: G
                })
              })]
            }), (0, n.jsx)("div", {
              className: b.vb,
              children: R.map((e, l) => {
                let {
                  icon: t,
                  description: i
                } = e;
                return (0, n.jsx)(o.PQ, {
                  icon: t,
                  title: i,
                  titleVariant: "text-md/normal",
                  color: r.LU0.colors.TEXT_DEFAULT.css
                }, l)
              })
            }), (0, n.jsxs)(r.BJc, {
              align: "center",
              children: [(0, n.jsx)(j.A, {
                size: "md",
                isBlocked: C,
                onClick: () => {
                  T(), (0, f.Wn)(I({
                    action: C ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                    analyticsLocations: L
                  }, D))
                }
              }), (0, n.jsx)(A.A, {
                userId: l.id,
                onClick: () => {
                  T(), (0, f.Wn)(I({
                    action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                    analyticsLocations: L
                  }, D))
                }
              })]
            })]
          })]
        })
      })
    })
  })
}