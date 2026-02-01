/** Chunk was on 21738 **/
/** chunk id: 184453, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => S
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk696292 = require("./696292.js"),
  Chunk397927 = require("./397927.js"),
  Chunk881615 = require("./881615.js"),
  Chunk416730 = require("./416730.js"),
  Chunk310419 = require("./310419.js"),
  Chunk282026 = require("./282026.js"),
  Chunk601193 = require("./601193.js"),
  Chunk631001 = require("./631001.js"),
  Chunk954571 = require("./954571.js"),
  Chunk726845 = require("./726845.js"),
  Chunk285395 = require("./285395.js"),
  Chunk837057 = require("./837057.js"),
  Chunk488995 = require("./488995.js"),
  Chunk652215 = require("./652215.js"),
  Chunk654487 = require("./654487.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk169653 = require("./169653.js");

function v(e) {
  let {
    tab: t
  } = e, n = f.A.useField("selectedTab"), l = i.useMemo(() => (function(e) {
    switch (e) {
      case b.GlobalDiscoveryTab.SERVERS:
        return (0, r.jsx)(o.RR9, {
          color: "currentColor"
        });
      case b.GlobalDiscoveryTab.APPS:
        return (0, r.jsx)(o.k9F, {
          color: "currentColor"
        });
      case b.GlobalDiscoveryTab.QUESTS:
        return (0, r.jsx)(o.r2v, {
          color: "currentColor"
        })
    }
  })(t), [t]), y = i.useMemo(() => (0, A.t)(t), [t]), v = n === t, S = i.useCallback(() => {
    switch (t) {
      case b.GlobalDiscoveryTab.QUESTS:
        return v && g.A.resetState(), m.default.track(E.HAw.DISCOVERY_QUEST_TAB_CLICKED, {
          client_ad_session_id: (0, c.sN)().uuid
        }), (0, _.transitionToGlobalDiscovery)({
          tab: b.GlobalDiscoveryTab.QUESTS,
          location: O.rE.DISCOVERY_SIDEBAR,
          questContent: s.u.DISCOVERY_SIDEBAR
        });
      case b.GlobalDiscoveryTab.APPS:
        if (!v) return (0, _.transitionToGlobalDiscovery)({
          tab: t,
          newSessionState: {
            entrypoint: {
              name: d.sW.GLOBAL_DISCOVERY_SIDEBAR
            },
            restorePreviousView: true
          }
        });
        u.A.resetState(), (0, _.transitionToGlobalDiscovery)({
          tab: t
        });
        return;
      case b.GlobalDiscoveryTab.SERVERS:
        if (!v) return (0, _.transitionToGlobalDiscovery)({
          tab: t
        });
        p.A.resetState(), h.A.resetState();
        return;
      default:
        return (0, _.transitionToGlobalDiscovery)({
          tab: t
        })
    }
  }, [t, v]);
  return (0, r.jsxs)(o.DUT, {
    onClick: S,
    className: a()(I.pc, {
      [I.wH]: v
    }),
    children: [(0, r.jsx)("div", {
      className: I.wz,
      children: l
    }), (0, r.jsx)(o.Text, {
      variant: "text-md/medium",
      color: "none",
      children: y
    })]
  })
}
let S = function() {
  return (0, r.jsxs)("div", {
    className: I.kL,
    children: [(0, r.jsx)("div", {
      className: I.wx,
      children: (0, r.jsx)(o.Heading, {
        variant: "text-lg/semibold",
        children: y.intl.string(y.t["1KqYnl"])
      })
    }), (0, r.jsx)("nav", {
      className: I.C$,
      children: b.GLOBAL_DISCOVERY_TABS.map(e => (0, r.jsx)(v, {
        tab: e
      }, e))
    })]
  })
}