/** Chunk was on 37709 **/
/** chunk id: 71259, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
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
  Chunk362791 = require("./362791.js");

function v(e) {
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

function O(e, t) {
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

function j(e) {
  let {
    guildId: t,
    onComplete: n,
    isLastStep: j,
    disableTracking: y
  } = e, N = i.useRef(false), {
    onboardingConnections: P,
    isLoading: C
  } = (0, o.cj)([m.Z], () => ({
    onboardingConnections: m.Z.getConnections(t),
    isLoading: m.Z.isLoading()
  })), E = (0, o.e7)([c.default, d.Z], () => P.some(e => {
    if (e.connection_type === h.zz.APPLICATION && null != e.application_id) {
      let t = c.default.getNewestTokenForApplication(e.application_id);
      return c.default.getFetchStateForApplication(e.application_id) === c.FetchState.FETCHED && null != t
    }
    if (e.connection_type === h.zz.PROVIDER_CONNECTED_ACCOUNT && null != e.provider_id) {
      let t = d.Z.getAccount(null, e.provider_id);
      return null != t && !t.revoked
    }
    returnfalse
  }), [P]);
  i.useEffect(() => {
    if (y || C || 0 === P.length || N.current) return;
    let e = (0, f.OZ)(P),
      n = (0, f.N4)(P);
    u.default.track(x.rMx.GUILD_ONBOARDING_STEP_VIEWED, O(v({}, (0, a.hH)(t)), {
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
      let e = (0, f.OZ)(P),
        n = (0, f.N4)(P);
      u.default.track(x.rMx.GUILD_ONBOARDING_STEP_COMPLETED, O(v({}, (0, a.hH)(t)), {
        step: p.Xx,
        skipped: !E,
        back: false,
        options_selected: 0,
        in_onboarding: true,
        is_final_step: j,
        provider_connections_connected: e.connected,
        provider_connections_not_connected: e.notConnected,
        application_connections_connected: n.connected,
        application_connections_not_connected: n.notConnected
      }))
    }
    n()
  }, [n, y, t, P, E, j]);
  return C ? (0, r.jsxs)("div", {
    className: b.loadingContainer,
    children: [(0, r.jsx)(l.$jN, {}), (0, r.jsx)(l.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: _.intl.string(_.t.ZTNur7)
    })]
  }) : (0, r.jsx)("div", {
    className: b.container,
    children: (0, r.jsxs)("div", {
      className: b.content,
      children: [(0, r.jsxs)("div", {
        className: b.scrollerContent,
        children: [(0, r.jsxs)("div", {
          className: b.header,
          children: [(0, r.jsx)("div", {
            className: b.headerTitle,
            children: (0, r.jsx)(l.Heading, {
              variant: "heading-xl/semibold",
              children: _.intl.string(_.t.eDVMrA)
            })
          }), (0, r.jsx)("div", {
            className: b.headerDescription,
            children: (0, r.jsx)(l.Text, {
              variant: "text-md/normal",
              color: "text-muted",
              children: _.intl.string(_.t.BozOXu)
            })
          })]
        }), (0, r.jsx)("div", {
          className: b.connectionsListScroller,
          children: (0, r.jsx)("div", {
            className: b.connectionsList,
            children: P.map((e, n) => (0, r.jsx)(g.Z, {
              connection: e,
              guildId: t,
              location: s.Z.GUILD_ONBOARDING
            }, n))
          })
        })]
      }), (0, r.jsx)("div", {
        className: b.footer,
        children: (0, r.jsxs)("div", {
          className: b.actions,
          children: [(0, r.jsx)("div", {}), (0, r.jsx)("div", {
            className: b.primaryActions,
            children: (0, r.jsx)(l.Button, {
              variant: E ? "primary" : "secondary",
              onClick: D,
              text: E ? j ? "".concat(_.intl.string(_.t["8SuVoE"]), " \uD83C\uDF89") : _.intl.string(_.t.PDTjLN) : _.intl.string(_.t["5Wxrcd"]),
              icon: j ? true : l.d4D,
              iconPosition: "end"
            })
          })]
        })
      })]
    })
  })
}