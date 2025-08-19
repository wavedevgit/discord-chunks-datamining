/** Chunk was on 99799 **/
/** chunk id: 858970, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk138201 = require("./138201.jsx"),
  Chunk699516 = require("./699516.js"),
  Chunk5192 = require("./5192.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk221292 = require("./221292.js"),
  Chunk687158 = require("./687158.js"),
  Chunk316027 = require("./316027.jsx"),
  Chunk502762 = require("./502762.jsx"),
  Chunk848780 = require("./848780.jsx"),
  Chunk907179 = require("./907179.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk220566 = require("./220566.js");

function I(e) {
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
}

function O(e) {
  let {
    user: t,
    guildId: n,
    channelId: O,
    messageId: Z,
    roleId: P,
    transitionState: T,
    openedAt: C,
    onHide: A,
    sourceAnalyticsLocations: N = []
  } = e, E = n === _.ME ? true : n, S = (0, o.e7)([d.Z], () => d.Z.isBlocked(t.id)), {
    analyticsLocations: w
  } = (0, c.ZP)([...N, S ? a.Z.BLOCKED_PROFILE_MODAL : a.Z.IGNORED_PROFILE_MODAL]), B = (0, f.ZB)({
    layout: "MODAL_V2",
    userId: t.id,
    showGuildProfile: true,
    guildId: E,
    channelId: O,
    messageId: Z,
    roleId: P
  }), L = [{
    icon: l.owK,
    description: v.intl.string(v.t.kcuWvb)
  }, {
    icon: l.owK,
    description: v.intl.string(S ? v.t.QxrDY2 : v.t.W6fjkZ)
  }], D = (0, m.ZP)(t.id, E), M = u.ZP.getName(null == D ? true : D.guildId, O, t), U = v.intl.formatToPlainString(v.t.KRe1Fh, {
    name: M
  });
  return (0, r.jsx)(c.Gt, {
    value: w,
    children: (0, r.jsx)(f.Mt, {
      value: B,
      openedAt: C,
      fetchStartedAt: null == D ? true : D.fetchStartedAt,
      fetchEndedAt: null == D ? true : D.fetchEndedAt,
      isLoaded: null == D ? true : D.isLoaded,
      children: (0, r.jsx)(l.Y0X, {
        "data-migration-pending": true,
        transitionState: T,
        className: y.root,
        "aria-label": U,
        parentComponent: "RestrictedUserProfileModalV2",
        children: (0, r.jsxs)(g.Z, {
          user: t,
          displayProfile: D,
          themeType: j.l.MODAL_V2,
          children: [(0, r.jsx)("div", {
            className: y.background
          }), (0, r.jsxs)("div", {
            className: y.content,
            children: [(0, r.jsx)(b.Z, {
              user: t,
              guildId: E,
              iconColor: l.TVs.colors.TEXT_DEFAULT
            }), (0, r.jsxs)("div", {
              className: y.textContainer,
              children: [(0, r.jsx)(l.X6q, {
                variant: "heading-xl/bold",
                color: "text-default",
                children: v.intl.string(v.t.b33pLC)
              }), (0, r.jsx)(l.Text, {
                variant: "text-md/medium",
                color: "text-default",
                children: v.intl.format(S ? v.t.T7QiLi : v.t.MnEow8, {
                  username: M
                })
              })]
            }), (0, r.jsx)("div", {
              className: y.safetyTable,
              children: L.map((e, t) => {
                let {
                  icon: n,
                  description: o
                } = e;
                return (0, r.jsx)(s.JZ, {
                  icon: n,
                  title: o,
                  titleVariant: "text-md/normal",
                  color: l.TVs.colors.TEXT_DEFAULT.css
                }, t)
              })
            }), (0, r.jsxs)(l.Kqy, {
              align: "center",
              children: [(0, r.jsx)(x.Z, {
                size: i.Ph.MEDIUM,
                isBlocked: S,
                onClick: () => {
                  A(), (0, p.pQ)(I({
                    action: S ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                    analyticsLocations: w
                  }, B))
                }
              }), (0, r.jsx)(h.Z, {
                userId: t.id,
                onClick: () => {
                  A(), (0, p.pQ)(I({
                    action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                    analyticsLocations: w
                  }, B))
                }
              })]
            })]
          })]
        })
      })
    })
  })
}