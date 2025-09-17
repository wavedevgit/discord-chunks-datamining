/** Chunk was on 31553 **/
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
    messageId: P,
    roleId: N,
    transitionState: T,
    openedAt: E,
    onHide: A,
    sourceAnalyticsLocations: S = []
  } = e, C = t === g.ME ? true : t, w = (0, i.e7)([d.Z], () => d.Z.isBlocked(n.id)), {
    analyticsLocations: _
  } = (0, a.ZP)([...S, w ? s.Z.BLOCKED_PROFILE_MODAL : s.Z.IGNORED_PROFILE_MODAL]), D = (0, m.ZB)({
    layout: "MODAL_V2",
    userId: n.id,
    showGuildProfile: true,
    guildId: C,
    channelId: Z,
    messageId: P,
    roleId: N
  }), R = [{
    icon: o.owK,
    description: y.intl.string(y.t.kcuWvb)
  }, {
    icon: o.owK,
    description: y.intl.string(w ? y.t.QxrDY2 : y.t.W6fjkZ)
  }], L = (0, p.ZP)(n.id, C), M = u.ZP.getName(null == L ? true : L.guildId, Z, n), U = y.intl.formatToPlainString(y.t.KRe1Fh, {
    name: M
  });
  return (0, l.jsx)(a.Gt, {
    value: _,
    children: (0, l.jsx)(m.Mt, {
      value: D,
      openedAt: E,
      fetchStartedAt: null == L ? true : L.fetchStartedAt,
      fetchEndedAt: null == L ? true : L.fetchEndedAt,
      isLoaded: null == L ? true : L.isLoaded,
      children: (0, l.jsx)(o.Y0X, {
        "data-migration-pending": true,
        transitionState: T,
        className: O.root,
        "aria-label": U,
        parentComponent: "RestrictedUserProfileModalV2",
        children: (0, l.jsxs)(j.Z, {
          user: n,
          displayProfile: L,
          themeType: b.l.MODAL_V2,
          children: [(0, l.jsx)("div", {
            className: O.background
          }), (0, l.jsxs)("div", {
            className: O.content,
            children: [(0, l.jsx)(h.Z, {
              user: n,
              guildId: C,
              iconColor: o.TVs.colors.TEXT_DEFAULT
            }), (0, l.jsxs)("div", {
              className: O.textContainer,
              children: [(0, l.jsx)(o.X6q, {
                variant: "heading-xl/bold",
                color: "text-default",
                children: y.intl.string(y.t.b33pLC)
              }), (0, l.jsx)(o.Text, {
                variant: "text-md/medium",
                color: "text-default",
                children: y.intl.format(w ? y.t.T7QiLi : y.t.MnEow8, {
                  username: M
                })
              })]
            }), (0, l.jsx)("div", {
              className: O.safetyTable,
              children: R.map((e, n) => {
                let {
                  icon: t,
                  description: i
                } = e;
                return (0, l.jsx)(c.JZ, {
                  icon: t,
                  title: i,
                  titleVariant: "text-md/normal",
                  color: o.TVs.colors.TEXT_DEFAULT.css
                }, n)
              })
            }), (0, l.jsxs)(o.Kqy, {
              align: "center",
              children: [(0, l.jsx)(v.Z, {
                size: r.Ph.MEDIUM,
                isBlocked: w,
                onClick: () => {
                  A(), (0, f.pQ)(I({
                    action: w ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                    analyticsLocations: _
                  }, D))
                }
              }), (0, l.jsx)(x.Z, {
                userId: n.id,
                onClick: () => {
                  A(), (0, f.pQ)(I({
                    action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                    analyticsLocations: _
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