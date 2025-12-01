/** Chunk was on web.js **/
/** chunk id: 862077, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
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
  Chunk637079 = require("./637079.js"),
  Chunk609440 = require("./609440.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}

function I(e) {
  let {
    user: t,
    guildId: n,
    setPopoutRef: v,
    channelId: I,
    messageId: T,
    roleId: A,
    openedAt: C,
    onHide: N,
    newAnalyticsLocations: P = [],
    disableAutoFocus: R = false
  } = e, w = (0, a.e7)([c.Z], () => c.Z.isBlocked(t.id)), {
    analyticsLocations: D
  } = (0, l.ZP)([...P, w ? s.Z.BLOCKED_PROFILE_POPOUT : s.Z.IGNORED_PROFILE_POPOUT]), x = (0, d.ZB)({
    layout: "POPOUT",
    userId: t.id,
    guildId: n,
    channelId: I,
    messageId: T,
    roleId: A
  }), L = i.useRef(null), j = (0, p.ZP)(t.id, n);
  i.useEffect(() => {
    null == v || v(null == L ? true : L.current)
  }, [L, v]);
  let M = w ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
    k = R ? "div" : o.VqE;
  return (0, r.jsx)(l.Gt, {
    value: D,
    children: (0, r.jsx)(d.Mt, {
      value: x,
      openedAt: C,
      fetchStartedAt: null == j ? true : j.fetchStartedAt,
      fetchEndedAt: null == j ? true : j.fetchEndedAt,
      isLoaded: null == j ? true : j.isLoaded,
      children: (0, r.jsx)(k, {
        ref: L,
        "aria-label": t.username,
        children: (0, r.jsx)(m.Z, {
          user: t,
          displayProfile: j,
          themeType: E.l.POPOUT,
          children: (0, r.jsxs)("div", {
            className: y.container,
            children: [(0, r.jsx)("img", {
              alt: "",
              src: O,
              className: y.preview,
              "aria-hidden": true
            }), (0, r.jsxs)("div", {
              className: y.body,
              children: [(0, r.jsxs)("div", {
                className: y.headerContainer,
                children: [(0, r.jsx)(_.Z, {
                  user: t,
                  guildId: n
                }), (0, r.jsx)(o.Heading, {
                  variant: "heading-lg/bold",
                  children: b.intl.string(b.t.b33pLD)
                }), (0, r.jsx)(o.Text, {
                  variant: "text-sm/medium",
                  children: b.intl.format(w ? b.t["8F+WNz"] : b.t["/cZp5s"], {
                    username: u.ZP.getName(n, I, t)
                  })
                })]
              }), (0, r.jsxs)(o.Kqy, {
                align: "center",
                children: [(0, r.jsx)(g.Z, {
                  isBlocked: w,
                  onClick: () => {
                    N(), (0, f.pQ)(S({
                      action: M,
                      analyticsLocations: D
                    }, x))
                  }
                }), (0, r.jsx)(h.Z, {
                  userId: t.id,
                  onClick: () => {
                    N(), (0, f.pQ)(S({
                      action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                      analyticsLocations: D
                    }, x))
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