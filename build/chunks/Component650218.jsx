/** Chunk was on web.js **/
/** chunk id: 650218, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => I
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk994500 = require("./994500.js"),
  Chunk562153 = require("./562153.js"),
  Chunk183555 = require("./183555.jsx"),
  Chunk672385 = require("./672385.js"),
  Chunk950191 = require("./950191.js"),
  Chunk249790 = require("./249790.jsx"),
  Chunk946356 = require("./946356.jsx"),
  Chunk254828 = require("./254828.jsx"),
  Chunk783123 = require("./783123.jsx"),
  Chunk996988 = require("./996988.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk612704 = require("./612704.js"),
  Chunk911850 = require("./911850.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function A(e) {
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
    messageId: S,
    roleId: T,
    openedAt: C,
    onHide: N,
    newAnalyticsLocations: w = [],
    disableAutoFocus: R = false,
    onClickContainer: P
  } = e, D = (0, a.bG)([c.A], () => c.A.isBlocked(t.id)), {
    analyticsLocations: L
  } = (0, l.Ay)([...w, D ? s.A.BLOCKED_PROFILE_POPOUT : s.A.IGNORED_PROFILE_POPOUT]), x = (0, d.pb)({
    layout: "POPOUT",
    userId: t.id,
    guildId: n,
    channelId: I,
    messageId: S,
    roleId: T
  }), M = i.useRef(null), j = (0, p.Ay)(t.id, n);
  i.useEffect(() => {
    null == v || v(null == M ? true : M.current)
  }, [M, v]);
  let k = D ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
    U = R ? "div" : o.lGe;
  return (0, r.jsx)(l.f5, {
    value: L,
    children: (0, r.jsx)(d.of, {
      value: x,
      openedAt: C,
      fetchStartedAt: null == j ? true : j.fetchStartedAt,
      fetchEndedAt: null == j ? true : j.fetchEndedAt,
      isLoaded: null == j ? true : j.isLoaded,
      children: (0, r.jsx)(U, {
        ref: M,
        "aria-label": t.username,
        onClick: P,
        children: (0, r.jsx)(h.A, {
          user: t,
          displayProfile: j,
          themeType: E.d.POPOUT,
          children: (0, r.jsxs)("div", {
            className: b.kL,
            children: [(0, r.jsx)("img", {
              alt: "",
              src: O,
              className: b.VH,
              "aria-hidden": true
            }), (0, r.jsxs)("div", {
              className: b.rf,
              children: [(0, r.jsxs)("div", {
                className: b.N1,
                children: [(0, r.jsx)(_.A, {
                  user: t,
                  guildId: n
                }), (0, r.jsx)(o.Heading, {
                  variant: "heading-lg/bold",
                  children: y.intl.string(y.t.b33pLD)
                }), (0, r.jsx)(o.Text, {
                  variant: "text-sm/medium",
                  children: y.intl.format(D ? y.t["8F+WNz"] : y.t["/cZp5s"], {
                    username: u.Ay.getName(n, I, t)
                  })
                })]
              }), (0, r.jsxs)(o.BJc, {
                align: "center",
                children: [(0, r.jsx)(g.A, {
                  isBlocked: D,
                  onClick: () => {
                    N(), (0, f.Wn)(A({
                      action: k,
                      analyticsLocations: L
                    }, x))
                  }
                }), (0, r.jsx)(m.A, {
                  userId: t.id,
                  onClick: () => {
                    N(), (0, f.Wn)(A({
                      action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                      analyticsLocations: L
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