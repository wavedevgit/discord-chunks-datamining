/** Chunk was on 68197 **/
/** chunk id: 550818, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk491010 = require("./491010.js"),
  Chunk268293 = require("./268293.js");

function j(e) {
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
  } = e, S = (0, m.ZP)(t.id), I = (0, s.ZP)(), P = (0, a.e7)([d.Z], () => d.Z.isBlocked(t.id)), {
    analyticsLocations: Z
  } = (0, u.ZP)(P ? c.Z.BLOCKED_PROFILE_PANEL : c.Z.IGNORED_PROFILE_PANEL), T = (0, h.ZB)({
    layout: "SIDEBAR",
    userId: t.id,
    channelId: n.id
  }), N = i.useRef(null);
  return (0, r.jsx)(u.Gt, {
    value: Z,
    children: (0, r.jsx)(h.Mt, {
      value: T,
      fetchStartedAt: null == S ? true : S.fetchStartedAt,
      fetchEndedAt: null == S ? true : S.fetchEndedAt,
      isLoaded: null == S ? true : S.isLoaded,
      children: (0, r.jsx)(b.Z, {
        ref: N,
        user: t,
        displayProfile: S,
        themeType: C.l.SIDEBAR,
        themeOverride: I,
        children: (0, r.jsx)(l.u2, {
          children: (0, r.jsxs)("div", {
            className: x.container,
            children: [(0, r.jsx)("img", {
              alt: "",
              src: O,
              className: x.preview,
              "aria-hidden": true
            }), (0, r.jsxs)("div", {
              className: x.body,
              children: [(0, r.jsxs)("div", {
                className: x.headerContainer,
                children: [(0, r.jsx)(g.Z, {
                  user: t
                }), (0, r.jsx)(o.X6q, {
                  variant: "heading-lg/bold",
                  children: v.intl.string(v.t.b33pLC)
                }), (0, r.jsx)(o.Text, {
                  variant: "text-sm/medium",
                  children: v.intl.format(P ? v.t["8F+WNz"] : v.t["/cZp5u"], {
                    username: p.ZP.getName(n.guild_id, n.id, t)
                  })
                })]
              }), (0, r.jsxs)(o.Kqy, {
                align: "center",
                children: [(0, r.jsx)(_.Z, {
                  isBlocked: P,
                  onClick: () => {
                    E(), (0, f.pQ)(j({
                      action: P ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                      analyticsLocations: Z
                    }, T))
                  }
                }), (0, r.jsx)(y.Z, {
                  userId: t.id,
                  onClick: () => {
                    E(), (0, f.pQ)(j({
                      action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                      analyticsLocations: Z
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