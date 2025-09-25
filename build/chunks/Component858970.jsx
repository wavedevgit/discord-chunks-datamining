/** Chunk was on 31553 **/
/** chunk id: 858970, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => I
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
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
  Chunk65464 = require("./65464.js");

function O(e) {
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

function I(e) {
  let {
    user: n,
    guildId: t,
    channelId: I,
    messageId: Z,
    roleId: P,
    transitionState: N,
    openedAt: T,
    onHide: E,
    sourceAnalyticsLocations: A = []
  } = e, S = t === v.ME ? true : t, C = (0, i.e7)([c.Z], () => c.Z.isBlocked(n.id)), {
    analyticsLocations: w
  } = (0, s.ZP)([...A, C ? o.Z.BLOCKED_PROFILE_MODAL : o.Z.IGNORED_PROFILE_MODAL]), _ = (0, u.ZB)({
    layout: "MODAL_V2",
    userId: n.id,
    showGuildProfile: true,
    guildId: S,
    channelId: I,
    messageId: Z,
    roleId: P
  }), D = [{
    icon: r.owK,
    description: b.intl.string(b.t.kcuWvb)
  }, {
    icon: r.owK,
    description: b.intl.string(C ? b.t.QxrDY2 : b.t.W6fjkZ)
  }], R = (0, p.ZP)(n.id, S), L = d.ZP.getName(null == R ? true : R.guildId, I, n), M = b.intl.formatToPlainString(b.t.KRe1Fh, {
    name: L
  });
  return (0, l.jsx)(s.Gt, {
    value: w,
    children: (0, l.jsx)(u.Mt, {
      value: _,
      openedAt: T,
      fetchStartedAt: null == R ? true : R.fetchStartedAt,
      fetchEndedAt: null == R ? true : R.fetchEndedAt,
      isLoaded: null == R ? true : R.isLoaded,
      children: (0, l.jsx)(r.Y0X, {
        "data-migration-pending": true,
        transitionState: N,
        className: y.root,
        "aria-label": M,
        parentComponent: "RestrictedUserProfileModalV2",
        children: (0, l.jsxs)(h.Z, {
          user: n,
          displayProfile: R,
          themeType: g.l.MODAL_V2,
          children: [(0, l.jsx)("div", {
            className: y.background
          }), (0, l.jsxs)("div", {
            className: y.content,
            children: [(0, l.jsx)(f.Z, {
              user: n,
              guildId: S
            }), (0, l.jsxs)("div", {
              className: y.textContainer,
              children: [(0, l.jsx)(r.X6q, {
                variant: "heading-xl/bold",
                color: "text-default",
                children: b.intl.string(b.t.b33pLC)
              }), (0, l.jsx)(r.Text, {
                variant: "text-md/medium",
                color: "text-default",
                children: b.intl.format(C ? b.t.T7QiLi : b.t.MnEow8, {
                  username: L
                })
              })]
            }), (0, l.jsx)("div", {
              className: y.safetyTable,
              children: D.map((e, n) => {
                let {
                  icon: t,
                  description: i
                } = e;
                return (0, l.jsx)(a.JZ, {
                  icon: t,
                  title: i,
                  titleVariant: "text-md/normal",
                  color: r.TVs.colors.TEXT_DEFAULT.css
                }, n)
              })
            }), (0, l.jsxs)(r.Kqy, {
              align: "center",
              children: [(0, l.jsx)(x.Z, {
                size: "md",
                isBlocked: C,
                onClick: () => {
                  E(), (0, m.pQ)(O({
                    action: C ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                    analyticsLocations: w
                  }, _))
                }
              }), (0, l.jsx)(j.Z, {
                userId: n.id,
                onClick: () => {
                  E(), (0, m.pQ)(O({
                    action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                    analyticsLocations: w
                  }, _))
                }
              })]
            })]
          })]
        })
      })
    })
  })
}