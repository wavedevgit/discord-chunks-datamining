/** Chunk was on 1272 **/
/** chunk id: 135864, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => T
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk636977 = require("./636977.js"),
  Chunk481060 = require("./481060.js"),
  Chunk456100 = require("./456100.js"),
  Chunk930446 = require("./930446.js"),
  Chunk31569 = require("./31569.js"),
  Chunk258971 = require("./258971.js"),
  Chunk164991 = require("./164991.js"),
  Chunk859921 = require("./859921.js"),
  Chunk220068 = require("./220068.js"),
  Chunk626135 = require("./626135.js"),
  Chunk836768 = require("./836768.js"),
  Chunk766219 = require("./766219.js"),
  Chunk749681 = require("./749681.js"),
  Chunk49898 = require("./49898.js"),
  Chunk981631 = require("./981631.js"),
  Chunk46140 = require("./46140.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk933767 = require("./933767.js");

function S(e) {
  let {
    tab: t
  } = e, {
    enabled: n
  } = c.c.useExperiment({
    location: "GlobalDiscoverySidebar"
  }, {
    autoTrackExposure: true
  }), l = _.Z.useField("selectedTab"), y = i.useMemo(() => (function(e, t) {
    switch (e) {
      case O.GlobalDiscoveryTab.SERVERS:
        return (0, r.jsx)(o.QTo, {
          color: "currentColor"
        });
      case O.GlobalDiscoveryTab.APPS:
        return t ? (0, r.jsx)(o.iWm, {
          color: "currentColor"
        }) : (0, r.jsx)(o.jje, {
          color: "currentColor"
        });
      case O.GlobalDiscoveryTab.QUESTS:
        return (0, r.jsx)(o.qDn, {
          color: "currentColor"
        })
    }
  })(t, n), [t, n]), S = i.useMemo(() => (0, b.s)(t), [t]), T = l === t, N = i.useCallback(() => {
    switch (t) {
      case O.GlobalDiscoveryTab.QUESTS:
        return T && m.Z.resetState(), g.default.track(I.rMx.DISCOVERY_QUEST_TAB_CLICKED, {
          client_ad_session_id: (0, u.Gy)().uuid
        }), (0, E.transitionToGlobalDiscovery)({
          tab: O.GlobalDiscoveryTab.QUESTS,
          location: v.dr.DISCOVERY_SIDEBAR,
          questContent: s.j.DISCOVERY_SIDEBAR
        });
      case O.GlobalDiscoveryTab.APPS:
        if (!T) return (0, E.transitionToGlobalDiscovery)({
          tab: t,
          newSessionState: {
            entrypoint: {
              name: p.xF.GLOBAL_DISCOVERY_SIDEBAR
            },
            restorePreviousView: true
          }
        });
        d.Z.resetState(), (0, E.transitionToGlobalDiscovery)({
          tab: t
        });
        return;
      case O.GlobalDiscoveryTab.SERVERS:
        if (!T) return (0, E.transitionToGlobalDiscovery)({
          tab: t
        });
        f.Z.resetState(), h.Z.resetState();
        return;
      default:
        return (0, E.transitionToGlobalDiscovery)({
          tab: t
        })
    }
  }, [t, T]);
  return (0, r.jsxs)(o.P3F, {
    onClick: N,
    className: a()(C.navItem, {
      [C.selected]: T
    }),
    children: [(0, r.jsx)("div", {
      className: C.navItemIcon,
      children: y
    }), (0, r.jsx)(o.Text, {
      variant: "text-md/medium",
      color: "none",
      children: S
    })]
  })
}
let T = function() {
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk933767.container,
    children: [(0, Chunk951288.jsx)("div", {
      className: Chunk933767.header,
      children: (0, Chunk951288.jsx)(Chunk481060.Heading, {
        variant: "text-lg/semibold",
        children: Chunk388032.intl.string(Chunk388032.t["1KqYnl"])
      })
    }), (0, Chunk951288.jsx)("nav", {
      className: Chunk933767.nav,
      children: Chunk49898.GLOBAL_DISCOVERY_TABS.map(e => (0, r.jsx)(S, {
        tab: e
      }, e))
    })]
  })
}