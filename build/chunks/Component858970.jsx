/** Chunk was on 93979 **/
/** chunk id: 858970, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => Z
}), require("./388685.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk442837 = require("./442837.js"),
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

function y(e) {
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
    roleId: O,
    transitionState: N,
    openedAt: T,
    onHide: A,
    sourceAnalyticsLocations: P = []
  } = e, E = t === j.ME ? true : t, C = (0, i.e7)([c.Z], () => c.Z.isBlocked(n.id)), {
    analyticsLocations: S
  } = (0, s.ZP)([...P, C ? r.Z.BLOCKED_PROFILE_MODAL : r.Z.IGNORED_PROFILE_MODAL]), w = (0, u.ZB)({
    layout: "MODAL_V2",
    userId: n.id,
    showGuildProfile: true,
    guildId: E,
    channelId: Z,
    messageId: _,
    roleId: O
  }), D = [{
    icon: o.owK,
    description: b.intl.string(b.t.kcuWva)
  }, {
    icon: o.owK,
    description: b.intl.string(C ? b.t.QxrDY1 : b.t.W6fjkS)
  }], L = (0, f.ZP)(n.id, E), R = d.ZP.getName(null == L ? true : L.guildId, Z, n), M = b.intl.formatToPlainString(b.t.KRe1Fk, {
    name: R
  });
  return (0, l.jsx)(s.Gt, {
    value: S,
    children: (0, l.jsx)(u.Mt, {
      value: w,
      openedAt: T,
      fetchStartedAt: null == L ? true : L.fetchStartedAt,
      fetchEndedAt: null == L ? true : L.fetchEndedAt,
      isLoaded: null == L ? true : L.isLoaded,
      children: (0, l.jsx)(o.Y0X, {
        "data-migration-pending": true,
        transitionState: N,
        className: I.root,
        "aria-label": M,
        parentComponent: "RestrictedUserProfileModalV2",
        children: (0, l.jsxs)(x.Z, {
          user: n,
          displayProfile: L,
          themeType: g.l.MODAL_V2,
          children: [(0, l.jsx)("div", {
            className: I.background
          }), (0, l.jsxs)("div", {
            className: I.content,
            children: [(0, l.jsx)(p.Z, {
              user: n,
              guildId: E
            }), (0, l.jsxs)("div", {
              className: I.textContainer,
              children: [(0, l.jsx)(o.Heading, {
                variant: "heading-xl/bold",
                color: "text-default",
                children: b.intl.string(b.t.b33pLD)
              }), (0, l.jsx)(o.Text, {
                variant: "text-md/medium",
                color: "text-default",
                children: b.intl.format(C ? b.t.T7QiLn : b.t.MnEowy, {
                  username: R
                })
              })]
            }), (0, l.jsx)("div", {
              className: I.safetyTable,
              children: D.map((e, n) => {
                let {
                  icon: t,
                  description: i
                } = e;
                return (0, l.jsx)(a.JZ, {
                  icon: t,
                  title: i,
                  titleVariant: "text-md/normal",
                  color: o.TVs.colors.TEXT_DEFAULT.css
                }, n)
              })
            }), (0, l.jsxs)(o.Kqy, {
              align: "center",
              children: [(0, l.jsx)(v.Z, {
                size: "md",
                isBlocked: C,
                onClick: () => {
                  A(), (0, m.pQ)(y({
                    action: C ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                    analyticsLocations: S
                  }, w))
                }
              }), (0, l.jsx)(h.Z, {
                userId: n.id,
                onClick: () => {
                  A(), (0, m.pQ)(y({
                    action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                    analyticsLocations: S
                  }, w))
                }
              })]
            })]
          })]
        })
      })
    })
  })
}