/** Chunk was on 49152 **/
/** chunk id: 550818, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk597312 = require("./597312.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
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
  Chunk388032 = require("./388032.jsx"),
  Chunk443773 = require("./443773.js"),
  Chunk268293 = require("./268293.js");

function C(e) {
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

function E(e) {
  let {
    user: t,
    channel: n,
    onHide: E
  } = e, S = (0, g.ZP)(t.id), I = (0, o.ZP)(), Z = (0, a.e7)([d.Z], () => d.Z.isBlocked(t.id)), {
    analyticsLocations: P
  } = (0, u.ZP)(Z ? c.Z.BLOCKED_PROFILE_PANEL : c.Z.IGNORED_PROFILE_PANEL), T = (0, p.ZB)({
    layout: "SIDEBAR",
    userId: t.id,
    channelId: n.id
  }), N = i.useRef(null);
  return (0, r.jsx)(u.Gt, {
    value: P,
    children: (0, r.jsx)(p.Mt, {
      value: T,
      fetchStartedAt: null == S ? true : S.fetchStartedAt,
      fetchEndedAt: null == S ? true : S.fetchEndedAt,
      isLoaded: null == S ? true : S.isLoaded,
      children: (0, r.jsx)(b.Z, {
        ref: N,
        user: t,
        displayProfile: S,
        themeType: _.lY.SIDEBAR,
        themeOverride: I,
        children: (0, r.jsx)(l.u2, {
          children: (0, r.jsxs)("div", {
            className: O.container,
            children: [(0, r.jsx)("img", {
              alt: "",
              src: v,
              className: O.preview,
              "aria-hidden": true
            }), (0, r.jsxs)("div", {
              className: O.body,
              children: [(0, r.jsxs)("div", {
                className: O.headerContainer,
                children: [(0, r.jsx)(m.Z, {
                  user: t
                }), (0, r.jsx)(s.X6q, {
                  variant: "heading-lg/bold",
                  children: j.intl.string(j.t.b33pLC)
                }), (0, r.jsx)(s.Text, {
                  variant: "text-sm/medium",
                  children: j.intl.format(Z ? j.t["8F+WNz"] : j.t["/cZp5u"], {
                    username: h.ZP.getName(n.guild_id, n.id, t)
                  })
                })]
              }), (0, r.jsxs)(s.Kqy, {
                align: "center",
                children: [(0, r.jsx)(x.Z, {
                  isBlocked: Z,
                  onClick: () => {
                    E(), (0, f.pQ)(C({
                      action: Z ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                      analyticsLocations: P
                    }, T))
                  }
                }), (0, r.jsx)(y.Z, {
                  userId: t.id,
                  onClick: () => {
                    E(), (0, f.pQ)(C({
                      action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                      analyticsLocations: P
                    }, T))
                  }
                })]
              })]
            })]
          })
        })
      })
    })
  })
}