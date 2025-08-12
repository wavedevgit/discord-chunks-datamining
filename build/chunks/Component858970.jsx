/** Chunk was on 29458 **/
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
  Chunk931944 = require("./931944.js");

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
    roleId: E,
    transitionState: Z,
    openedAt: N,
    onHide: T,
    sourceAnalyticsLocations: S = []
  } = e, A = n === h.ME ? true : n, w = (0, l.e7)([d.Z], () => d.Z.isBlocked(t.id)), {
    analyticsLocations: C
  } = (0, c.ZP)([...S, w ? a.Z.BLOCKED_PROFILE_MODAL : a.Z.IGNORED_PROFILE_MODAL]), L = (0, f.ZB)({
    layout: "MODAL_V2",
    userId: t.id,
    showGuildProfile: true,
    guildId: A,
    channelId: I,
    messageId: P,
    roleId: E
  }), D = [{
    icon: o.owK,
    description: O.intl.string(O.t.kcuWvb)
  }, {
    icon: o.owK,
    description: O.intl.string(w ? O.t.QxrDY2 : O.t.W6fjkZ)
  }], R = (0, m.ZP)(t.id, A), k = u.ZP.getName(null == R ? true : R.guildId, I, t), M = O.intl.formatToPlainString(O.t.KRe1Fh, {
    name: k
  });
  return (0, r.jsx)(c.Gt, {
    value: C,
    children: (0, r.jsx)(f.Mt, {
      value: L,
      openedAt: N,
      fetchStartedAt: null == R ? true : R.fetchStartedAt,
      fetchEndedAt: null == R ? true : R.fetchEndedAt,
      isLoaded: null == R ? true : R.isLoaded,
      children: (0, r.jsx)(o.Y0X, {
        "data-migration-pending": true,
        transitionState: Z,
        className: v.root,
        "aria-label": M,
        parentComponent: "RestrictedUserProfileModalV2",
        children: (0, r.jsxs)(g.Z, {
          user: t,
          displayProfile: R,
          themeType: x.lY.MODAL_V2,
          children: [(0, r.jsx)("div", {
            className: v.background
          }), (0, r.jsxs)("div", {
            className: v.content,
            children: [(0, r.jsx)(b.Z, {
              user: t,
              guildId: A,
              iconColor: o.TVs.colors.TEXT_DEFAULT
            }), (0, r.jsxs)("div", {
              className: v.textContainer,
              children: [(0, r.jsx)(o.X6q, {
                variant: "heading-xl/bold",
                color: "text-default",
                children: O.intl.string(O.t.b33pLC)
              }), (0, r.jsx)(o.Text, {
                variant: "text-md/medium",
                color: "text-default",
                children: O.intl.format(w ? O.t.T7QiLi : O.t.MnEow8, {
                  username: k
                })
              })]
            }), (0, r.jsx)("div", {
              className: v.safetyTable,
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
              children: [(0, r.jsx)(y.Z, {
                size: i.Ph.MEDIUM,
                isBlocked: w,
                onClick: () => {
                  T(), (0, p.pQ)(_({
                    action: w ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                    analyticsLocations: C
                  }, L))
                }
              }), (0, r.jsx)(j.Z, {
                userId: t.id,
                onClick: () => {
                  T(), (0, p.pQ)(_({
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