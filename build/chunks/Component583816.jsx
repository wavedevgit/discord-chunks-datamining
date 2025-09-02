/** Chunk was on 93979 **/
/** chunk id: 583816, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => Z
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
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      l = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), l.forEach(function(n) {
      var l;
      l = t[n], n in e ? Object.defineProperty(e, n, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = l
    })
  }
  return e
}

function Z(e) {
  let {
    user: n,
    guildId: t,
    channelId: Z,
    messageId: _,
    roleId: P,
    transitionState: N,
    openedAt: T,
    onHide: A,
    sourceAnalyticsLocations: E = []
  } = e, C = t === v.ME ? true : t, S = (0, o.e7)([d.Z], () => d.Z.isBlocked(n.id)), {
    analyticsLocations: w
  } = (0, s.ZP)([...E, S ? c.Z.BLOCKED_PROFILE_MODAL : c.Z.IGNORED_PROFILE_MODAL]), D = (0, m.ZB)({
    layout: "MODAL_V2",
    userId: n.id,
    showGuildProfile: true,
    guildId: C,
    channelId: Z,
    messageId: _,
    roleId: P
  }), L = [{
    icon: i.owK,
    description: y.intl.string(y.t.kcuWvb)
  }, {
    icon: i.owK,
    description: y.intl.string(S ? y.t.QxrDY2 : y.t.W6fjkZ)
  }], M = (0, p.ZP)(n.id, C), R = u.ZP.getName(null == M ? true : M.guildId, Z, n), B = y.intl.formatToPlainString(y.t.KRe1Fh, {
    name: R
  });
  return (0, l.jsx)(s.Gt, {
    value: w,
    children: (0, l.jsx)(m.Mt, {
      value: D,
      openedAt: T,
      fetchStartedAt: null == M ? true : M.fetchStartedAt,
      fetchEndedAt: null == M ? true : M.fetchEndedAt,
      isLoaded: null == M ? true : M.isLoaded,
      children: (0, l.jsx)(i.Y0X, {
        "data-migration-pending": true,
        transitionState: N,
        className: O.root,
        "aria-label": B,
        parentComponent: "RestrictedUserProfileModalV2",
        children: (0, l.jsxs)(h.Z, {
          user: n,
          displayProfile: M,
          themeType: g.l.MODAL_V2,
          children: [(0, l.jsx)("div", {
            className: O.background
          }), (0, l.jsxs)("div", {
            className: O.content,
            children: [(0, l.jsx)(x.Z, {
              user: n,
              guildId: C,
              iconColor: i.TVs.colors.TEXT_DEFAULT
            }), (0, l.jsxs)("div", {
              className: O.textContainer,
              children: [(0, l.jsx)(i.X6q, {
                variant: "heading-xl/bold",
                color: "text-default",
                children: y.intl.string(y.t.b33pLC)
              }), (0, l.jsx)(i.Text, {
                variant: "text-md/medium",
                color: "text-default",
                children: y.intl.format(S ? y.t.T7QiLi : y.t.MnEow8, {
                  username: R
                })
              })]
            }), (0, l.jsx)("div", {
              className: O.safetyTable,
              children: L.map((e, n) => {
                let {
                  icon: t,
                  description: o
                } = e;
                return (0, l.jsx)(a.JZ, {
                  icon: t,
                  title: o,
                  titleVariant: "text-md/normal",
                  color: i.TVs.colors.TEXT_DEFAULT.css
                }, n)
              })
            }), (0, l.jsxs)(i.Kqy, {
              align: "center",
              children: [(0, l.jsx)(j.Z, {
                size: r.Ph.MEDIUM,
                isBlocked: S,
                onClick: () => {
                  A(), (0, f.pQ)(I({
                    action: S ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                    analyticsLocations: w
                  }, D))
                }
              }), (0, l.jsx)(b.Z, {
                userId: n.id,
                onClick: () => {
                  A(), (0, f.pQ)(I({
                    action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                    analyticsLocations: w
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