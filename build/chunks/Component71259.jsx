/** Chunk was on 37709 **/
/** chunk id: 71259, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk367907 = require("./367907.js"),
  Chunk881998 = require("./881998.js"),
  Chunk553795 = require("./553795.js"),
  Chunk626135 = require("./626135.js"),
  Chunk745752 = require("./745752.js"),
  Chunk45966 = require("./45966.js"),
  Chunk637853 = require("./637853.js"),
  Chunk657021 = require("./657021.jsx"),
  Chunk290511 = require("./290511.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk935954 = require("./935954.js");

function O(e) {
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

function j(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function _(e) {
  let {
    guildId: t,
    onComplete: n,
    isLastStep: _,
    disableTracking: y
  } = e, N = i.useRef(false), {
    onboardingConnections: P,
    isLoading: C
  } = (0, o.cj)([f.Z], () => ({
    onboardingConnections: f.Z.getConnections(t),
    isLoading: f.Z.isLoading()
  })), E = (0, o.e7)([c.default, d.Z], () => P.some(e => {
    if (e.connection_type === g.zz.APPLICATION && null != e.application_id) {
      let t = c.default.getNewestTokenForApplication(e.application_id);
      return c.default.getFetchStateForApplication(e.application_id) === c.FetchState.FETCHED && null != t
    }
    if (e.connection_type === g.zz.PROVIDER_CONNECTED_ACCOUNT && null != e.provider_id) {
      let t = d.Z.getAccount(null, e.provider_id);
      return null != t && !t.revoked
    }
    returnfalse
  }), [P]);
  i.useEffect(() => {
    if (y || C || 0 === P.length || N.current) return;
    let e = (0, m.OZ)(P),
      n = (0, m.N4)(P);
    u.default.track(h.rMx.GUILD_ONBOARDING_STEP_VIEWED, j(O({}, (0, s.hH)(t)), {
      step: p.Xx,
      required: false,
      provider_connections_connected: e.connected,
      provider_connections_not_connected: e.notConnected,
      application_connections_connected: n.connected,
      application_connections_not_connected: n.notConnected
    })), N.current = true
  }, [t, C, P, y]);
  let D = i.useCallback(() => {
    if (!y) {
      let e = (0, m.OZ)(P),
        n = (0, m.N4)(P);
      u.default.track(h.rMx.GUILD_ONBOARDING_STEP_COMPLETED, j(O({}, (0, s.hH)(t)), {
        step: p.Xx,
        skipped: !E,
        back: false,
        options_selected: 0,
        in_onboarding: true,
        is_final_step: _,
        provider_connections_connected: e.connected,
        provider_connections_not_connected: e.notConnected,
        application_connections_connected: n.connected,
        application_connections_not_connected: n.notConnected
      }))
    }
    n()
  }, [n, y, t, P, E, _]);
  return C ? (0, r.jsxs)("div", {
    className: v.loadingContainer,
    children: [(0, r.jsx)(a.$jN, {}), (0, r.jsx)(a.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: x.intl.string(x.t.ZTNur7)
    })]
  }) : (0, r.jsx)("div", {
    className: v.container,
    children: (0, r.jsxs)("div", {
      className: v.content,
      children: [(0, r.jsxs)("div", {
        className: v.scrollerContent,
        children: [(0, r.jsxs)("div", {
          className: v.header,
          children: [(0, r.jsx)("div", {
            className: v.headerTitle,
            children: (0, r.jsx)(a.Heading, {
              variant: "heading-xl/semibold",
              children: x.intl.string(x.t.eDVMrA)
            })
          }), (0, r.jsx)("div", {
            className: v.headerDescription,
            children: (0, r.jsx)(a.Text, {
              variant: "text-md/normal",
              color: "text-muted",
              children: x.intl.string(x.t.BozOXu)
            })
          })]
        }), (0, r.jsx)("div", {
          className: v.connectionsListScroller,
          children: (0, r.jsx)("div", {
            className: v.connectionsList,
            children: P.map((e, n) => (0, r.jsx)(b.Z, {
              connection: e,
              guildId: t,
              location: l.Z.GUILD_ONBOARDING
            }, n))
          })
        })]
      }), (0, r.jsx)("div", {
        className: v.footer,
        children: (0, r.jsxs)("div", {
          className: v.actions,
          children: [(0, r.jsx)("div", {}), (0, r.jsx)("div", {
            className: v.primaryActions,
            children: (0, r.jsx)(a.Button, {
              variant: E ? "primary" : "secondary",
              onClick: D,
              text: E ? _ ? "".concat(x.intl.string(x.t["8SuVoE"]), " \uD83C\uDF89") : x.intl.string(x.t.PDTjLN) : x.intl.string(x.t["5Wxrcd"]),
              icon: _ ? true : a.d4D,
              iconPosition: "end"
            })
          })]
        })
      })]
    })
  })
}