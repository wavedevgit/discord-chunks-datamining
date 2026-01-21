/** Chunk was on 82124 **/
/** chunk id: 550818, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
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
  Chunk696483 = require("./696483.js"),
  Chunk268293 = require("./268293.js");

function E(e) {
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

function S(e) {
  let {
    user: t,
    channel: n,
    onHide: S
  } = e, _ = (0, g.ZP)(t.id), I = (0, s.ZP)(), P = (0, a.e7)([d.Z], () => d.Z.isBlocked(t.id)), {
    analyticsLocations: Z
  } = (0, u.ZP)(P ? c.Z.BLOCKED_PROFILE_PANEL : c.Z.IGNORED_PROFILE_PANEL), N = (0, f.ZB)({
    layout: "SIDEBAR",
    userId: t.id,
    channelId: n.id
  }), T = i.useRef(null);
  return (0, r.jsx)(u.Gt, {
    value: Z,
    children: (0, r.jsx)(f.Mt, {
      value: N,
      fetchStartedAt: null == _ ? true : _.fetchStartedAt,
      fetchEndedAt: null == _ ? true : _.fetchEndedAt,
      isLoaded: null == _ ? true : _.isLoaded,
      children: (0, r.jsx)(b.Z, {
        ref: T,
        user: t,
        displayProfile: _,
        themeType: O.l.SIDEBAR,
        themeOverride: I,
        children: (0, r.jsx)(l.u2D, {
          children: (0, r.jsxs)("div", {
            className: x.container,
            children: [(0, r.jsx)("img", {
              alt: "",
              src: C,
              className: x.preview,
              "aria-hidden": true
            }), (0, r.jsxs)("div", {
              className: x.body,
              children: [(0, r.jsxs)("div", {
                className: x.headerContainer,
                children: [(0, r.jsx)(m.Z, {
                  user: t
                }), (0, r.jsx)(o.Heading, {
                  variant: "heading-lg/bold",
                  children: j.intl.string(j.t.b33pLD)
                }), (0, r.jsx)(o.Text, {
                  variant: "text-sm/medium",
                  children: j.intl.format(P ? j.t["8F+WNz"] : j.t["/cZp5s"], {
                    username: p.ZP.getName(n.guild_id, n.id, t)
                  })
                })]
              }), (0, r.jsxs)(o.Kqy, {
                align: "center",
                children: [(0, r.jsx)(v.Z, {
                  isBlocked: P,
                  onClick: () => {
                    S(), (0, h.pQ)(E({
                      action: P ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                      analyticsLocations: Z
                    }, N))
                  }
                }), (0, r.jsx)(y.Z, {
                  userId: t.id,
                  onClick: () => {
                    S(), (0, h.pQ)(E({
                      action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                      analyticsLocations: Z
                    }, N))
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