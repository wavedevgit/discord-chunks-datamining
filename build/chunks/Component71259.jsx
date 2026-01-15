/** Chunk was on 37709 **/
/** chunk id: 71259, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
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

function v(e, t) {
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

function y(e) {
  let {
    guildId: t,
    onComplete: n,
    isLastStep: y,
    isSubmitting: _ = false,
    disableTracking: P
  } = e, N = i.useRef(false), {
    onboardingConnections: C,
    isLoading: E
  } = (0, o.cj)([f.Z], () => ({
    onboardingConnections: f.Z.getConnections(t),
    isLoading: f.Z.isLoading()
  })), D = (0, o.e7)([c.default, d.Z], () => C.some(e => {
    if (e.connection_type === g.zz.APPLICATION && null != e.application_id) {
      let t = c.default.getNewestTokenForApplication(e.application_id);
      return c.default.getFetchStateForApplication(e.application_id) === c.FetchState.FETCHED && null != t
    }
    if (e.connection_type === g.zz.PROVIDER_CONNECTED_ACCOUNT && null != e.provider_id) {
      let t = d.Z.getAccount(null, e.provider_id);
      return null != t && !t.revoked
    }
    returnfalse
  }), [C]);
  i.useEffect(() => {
    if (P || E || 0 === C.length || N.current) return;
    let e = (0, m.OZ)(C),
      n = (0, m.N4)(C);
    u.default.track(h.rMx.GUILD_ONBOARDING_STEP_VIEWED, v(j({}, (0, s.hH)(t)), {
      step: p.Xx,
      required: false,
      provider_connections_connected: e.connected,
      provider_connections_not_connected: e.notConnected,
      application_connections_connected: n.connected,
      application_connections_not_connected: n.notConnected
    })), N.current = true
  }, [t, E, C, P]);
  let I = i.useCallback(() => {
    if (!P) {
      let e = (0, m.OZ)(C),
        n = (0, m.N4)(C);
      u.default.track(h.rMx.GUILD_ONBOARDING_STEP_COMPLETED, v(j({}, (0, s.hH)(t)), {
        step: p.Xx,
        skipped: !D,
        back: false,
        options_selected: 0,
        in_onboarding: true,
        is_final_step: y,
        provider_connections_connected: e.connected,
        provider_connections_not_connected: e.notConnected,
        application_connections_connected: n.connected,
        application_connections_not_connected: n.notConnected
      }))
    }
    n()
  }, [n, P, t, C, D, y]);
  return E ? (0, r.jsxs)("div", {
    className: O.loadingContainer,
    children: [(0, r.jsx)(a.$jN, {}), (0, r.jsx)(a.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: x.intl.string(x.t.ZTNur7)
    })]
  }) : (0, r.jsx)("div", {
    className: O.container,
    children: (0, r.jsxs)("div", {
      className: O.content,
      children: [(0, r.jsxs)("div", {
        className: O.scrollerContent,
        children: [(0, r.jsxs)("div", {
          className: O.header,
          children: [(0, r.jsx)("div", {
            className: O.headerTitle,
            children: (0, r.jsx)(a.Heading, {
              variant: "heading-xl/semibold",
              children: x.intl.string(x.t.eDVMrA)
            })
          }), (0, r.jsx)("div", {
            className: O.headerDescription,
            children: (0, r.jsx)(a.Text, {
              variant: "text-md/normal",
              color: "text-muted",
              children: x.intl.string(x.t.BozOXu)
            })
          })]
        }), (0, r.jsx)("div", {
          className: O.connectionsListScroller,
          children: (0, r.jsx)("div", {
            className: O.connectionsList,
            children: C.map((e, n) => (0, r.jsx)(b.Z, {
              connection: e,
              guildId: t,
              location: l.Z.GUILD_ONBOARDING
            }, n))
          })
        })]
      }), (0, r.jsx)("div", {
        className: O.footer,
        children: (0, r.jsxs)("div", {
          className: O.actions,
          children: [(0, r.jsx)("div", {}), (0, r.jsx)("div", {
            className: O.primaryActions,
            children: (0, r.jsx)(a.Button, {
              variant: D ? "primary" : "secondary",
              onClick: I,
              text: D ? y ? "".concat(x.intl.string(x.t["8SuVoE"]), " \uD83C\uDF89") : x.intl.string(x.t.PDTjLN) : x.intl.string(x.t["5Wxrcd"]),
              disabled: _,
              loading: _,
              icon: y ? true : a.d4D,
              iconPosition: "end"
            })
          })]
        })
      })]
    })
  })
}