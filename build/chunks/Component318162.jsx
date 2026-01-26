/** Chunk was on 67564 **/
/** chunk id: 318162, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => E
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk736653 = require("./736653.js"),
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
  Chunk226632 = require("./226632.js"),
  Chunk724693 = require("./724693.js");

function x(e) {
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
  } = e, C = (0, g.Ay)(t.id), S = (0, o.Ay)(), I = (0, s.bG)([d.A], () => d.A.isBlocked(t.id)), {
    analyticsLocations: N
  } = (0, u.Ay)(I ? c.A.BLOCKED_PROFILE_PANEL : c.A.IGNORED_PROFILE_PANEL), T = (0, h.pb)({
    layout: "SIDEBAR",
    userId: t.id,
    channelId: n.id
  }), P = l.useRef(null);
  return (0, r.jsx)(u.f5, {
    value: N,
    children: (0, r.jsx)(h.of, {
      value: T,
      fetchStartedAt: null == C ? true : C.fetchStartedAt,
      fetchEndedAt: null == C ? true : C.fetchEndedAt,
      isLoaded: null == C ? true : C.isLoaded,
      children: (0, r.jsx)(b.A, {
        ref: P,
        user: t,
        displayProfile: C,
        themeType: _.d.SIDEBAR,
        themeOverride: S,
        children: (0, r.jsx)(i.d_W, {
          children: (0, r.jsxs)("div", {
            className: j.kL,
            children: [(0, r.jsx)("img", {
              alt: "",
              src: v,
              className: j.VH,
              "aria-hidden": true
            }), (0, r.jsxs)("div", {
              className: j.rf,
              children: [(0, r.jsxs)("div", {
                className: j.N1,
                children: [(0, r.jsx)(m.A, {
                  user: t
                }), (0, r.jsx)(a.Heading, {
                  variant: "heading-lg/bold",
                  children: O.intl.string(O.t.b33pLD)
                }), (0, r.jsx)(a.Text, {
                  variant: "text-sm/medium",
                  children: O.intl.format(I ? O.t["8F+WNz"] : O.t["/cZp5s"], {
                    username: p.Ay.getName(n.guild_id, n.id, t)
                  })
                })]
              }), (0, r.jsxs)(a.BJc, {
                align: "center",
                children: [(0, r.jsx)(y.A, {
                  isBlocked: I,
                  onClick: () => {
                    E(), (0, f.Wn)(x({
                      action: I ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                      analyticsLocations: N
                    }, T))
                  }
                }), (0, r.jsx)(A.A, {
                  userId: t.id,
                  onClick: () => {
                    E(), (0, f.Wn)(x({
                      action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                      analyticsLocations: N
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