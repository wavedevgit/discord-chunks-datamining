/** Chunk was on 11776 **/
/** chunk id: 858970, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
}), require("./388685.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
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
  Chunk228168 = require("./228168.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk247787 = require("./247787.js");

function _(e) {
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

function I(e) {
  let {
    user: t,
    guildId: n,
    channelId: I,
    messageId: P,
    roleId: Z,
    transitionState: N,
    openedAt: T,
    onHide: E,
    sourceAnalyticsLocations: w = []
  } = e, S = n === y.ME ? true : n, A = (0, l.e7)([d.Z], () => d.Z.isBlocked(t.id)), {
    analyticsLocations: C
  } = (0, c.ZP)([...w, A ? a.Z.BLOCKED_PROFILE_MODAL : a.Z.IGNORED_PROFILE_MODAL]), L = (0, f.ZB)({
    layout: "MODAL_V2",
    userId: t.id,
    showGuildProfile: true,
    guildId: S,
    channelId: I,
    messageId: P,
    roleId: Z
  }), D = [{
    icon: o.owK,
    description: v.intl.string(v.t.kcuWvb)
  }, {
    icon: o.owK,
    description: v.intl.string(A ? v.t.QxrDY2 : v.t.W6fjkZ)
  }], k = (0, p.ZP)(t.id, S), B = u.ZP.getName(null == k ? true : k.guildId, I, t), R = v.intl.formatToPlainString(v.t.KRe1Fh, {
    name: B
  });
  return (0, r.jsx)(c.Gt, {
    value: C,
    children: (0, r.jsx)(f.Mt, {
      value: L,
      openedAt: T,
      fetchStartedAt: null == k ? true : k.fetchStartedAt,
      fetchEndedAt: null == k ? true : k.fetchEndedAt,
      isLoaded: null == k ? true : k.isLoaded,
      children: (0, r.jsx)(o.Y0X, {
        "data-migration-pending": true,
        transitionState: N,
        className: O.root,
        "aria-label": R,
        parentComponent: "RestrictedUserProfileModalV2",
        children: (0, r.jsxs)(b.Z, {
          user: t,
          displayProfile: k,
          themeType: x.lY.MODAL_V2,
          children: [(0, r.jsx)("div", {
            className: O.background
          }), (0, r.jsxs)("div", {
            className: O.content,
            children: [(0, r.jsx)(g.Z, {
              user: t,
              guildId: S,
              iconColor: o.TVs.colors.TEXT_DEFAULT
            }), (0, r.jsxs)("div", {
              className: O.textContainer,
              children: [(0, r.jsx)(o.X6q, {
                variant: "heading-xl/bold",
                color: "text-default",
                children: v.intl.string(v.t.b33pLC)
              }), (0, r.jsx)(o.Text, {
                variant: "text-md/medium",
                color: "text-default",
                children: v.intl.format(A ? v.t.T7QiLi : v.t.MnEow8, {
                  username: B
                })
              })]
            }), (0, r.jsx)("div", {
              className: O.safetyTable,
              children: D.map((e, t) => {
                let {
                  icon: n,
                  description: l
                } = e;
                return (0, r.jsx)(s.JZ, {
                  icon: n,
                  title: l,
                  titleVariant: "text-md/normal",
                  color: o.TVs.colors.TEXT_DEFAULT.css
                }, t)
              })
            }), (0, r.jsxs)(o.Kqy, {
              align: "center",
              children: [(0, r.jsx)(h.Z, {
                size: i.Ph.MEDIUM,
                isBlocked: A,
                onClick: () => {
                  E(), (0, m.pQ)(_({
                    action: A ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                    analyticsLocations: C
                  }, L))
                }
              }), (0, r.jsx)(j.Z, {
                userId: t.id,
                onClick: () => {
                  E(), (0, m.pQ)(_({
                    action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                    analyticsLocations: C
                  }, L))
                }
              })]
            })]
          })]
        })
      })
    })
  })
}