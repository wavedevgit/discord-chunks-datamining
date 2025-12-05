/** Chunk was on 89522 **/
/** chunk id: 550818, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
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

function I(e) {
  let {
    user: t,
    channel: n,
    onHide: I
  } = e, S = (0, g.ZP)(t.id), E = (0, o.ZP)(), Z = (0, a.e7)([u.Z], () => u.Z.isBlocked(t.id)), {
    analyticsLocations: P
  } = (0, d.ZP)(Z ? c.Z.BLOCKED_PROFILE_PANEL : c.Z.IGNORED_PROFILE_PANEL), T = (0, h.ZB)({
    layout: "SIDEBAR",
    userId: t.id,
    channelId: n.id
  }), N = i.useRef(null);
  return (0, r.jsx)(d.Gt, {
    value: P,
    children: (0, r.jsx)(h.Mt, {
      value: T,
      fetchStartedAt: null == S ? true : S.fetchStartedAt,
      fetchEndedAt: null == S ? true : S.fetchEndedAt,
      isLoaded: null == S ? true : S.isLoaded,
      children: (0, r.jsx)(b.Z, {
        ref: N,
        user: t,
        displayProfile: S,
        themeType: O.l.SIDEBAR,
        themeOverride: E,
        children: (0, r.jsx)(l.u2D, {
          children: (0, r.jsxs)("div", {
            className: j.container,
            children: [(0, r.jsx)("img", {
              alt: "",
              src: v,
              className: j.preview,
              "aria-hidden": true
            }), (0, r.jsxs)("div", {
              className: j.body,
              children: [(0, r.jsxs)("div", {
                className: j.headerContainer,
                children: [(0, r.jsx)(m.Z, {
                  user: t
                }), (0, r.jsx)(s.Heading, {
                  variant: "heading-lg/bold",
                  children: x.intl.string(x.t.b33pLD)
                }), (0, r.jsx)(s.Text, {
                  variant: "text-sm/medium",
                  children: x.intl.format(Z ? x.t["8F+WNz"] : x.t["/cZp5s"], {
                    username: p.ZP.getName(n.guild_id, n.id, t)
                  })
                })]
              }), (0, r.jsxs)(s.Kqy, {
                align: "center",
                children: [(0, r.jsx)(y.Z, {
                  isBlocked: Z,
                  onClick: () => {
                    I(), (0, f.pQ)(C({
                      action: Z ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                      analyticsLocations: P
                    }, T))
                  }
                }), (0, r.jsx)(_.Z, {
                  userId: t.id,
                  onClick: () => {
                    I(), (0, f.pQ)(C({
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