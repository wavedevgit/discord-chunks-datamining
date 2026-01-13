/** Chunk was on 1272 **/
/** chunk id: 135864, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk636977 = require("./636977.js"),
  Chunk481060 = require("./481060.js"),
  Chunk930446 = require("./930446.js"),
  Chunk31569 = require("./31569.js"),
  Chunk258971 = require("./258971.js"),
  Chunk164991 = require("./164991.js"),
  Chunk859921 = require("./859921.js"),
  Chunk283833 = require("./283833.js"),
  Chunk626135 = require("./626135.js"),
  Chunk836768 = require("./836768.js"),
  Chunk766219 = require("./766219.js"),
  Chunk749681 = require("./749681.js"),
  Chunk49898 = require("./49898.js"),
  Chunk981631 = require("./981631.js"),
  Chunk324805 = require("./324805.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk394058 = require("./394058.js");

function C(e) {
  let {
    tab: t
  } = e, n = m.Z.useField("selectedTab"), l = i.useMemo(() => (function(e) {
    switch (e) {
      case E.GlobalDiscoveryTab.SERVERS:
        return (0, r.jsx)(s.QTo, {
          color: "currentColor"
        });
      case E.GlobalDiscoveryTab.APPS:
        return (0, r.jsx)(s.jje, {
          color: "currentColor"
        });
      case E.GlobalDiscoveryTab.QUESTS:
        return (0, r.jsx)(s.qDn, {
          color: "currentColor"
        })
    }
  })(t), [t]), I = i.useMemo(() => (0, b.s)(t), [t]), C = n === t, S = i.useCallback(() => {
    switch (t) {
      case E.GlobalDiscoveryTab.QUESTS:
        return C && g.Z.resetState(), h.default.track(O.rMx.DISCOVERY_QUEST_TAB_CLICKED, {
          client_ad_session_id: (0, c.Gy)().uuid
        }), (0, _.transitionToGlobalDiscovery)({
          tab: E.GlobalDiscoveryTab.QUESTS,
          location: v.dr.DISCOVERY_SIDEBAR,
          questContent: o.j.DISCOVERY_SIDEBAR
        });
      case E.GlobalDiscoveryTab.APPS:
        if (!C) return (0, _.transitionToGlobalDiscovery)({
          tab: t,
          newSessionState: {
            entrypoint: {
              name: d.xF.GLOBAL_DISCOVERY_SIDEBAR
            },
            restorePreviousView: true
          }
        });
        u.Z.resetState(), (0, _.transitionToGlobalDiscovery)({
          tab: t
        });
        return;
      case E.GlobalDiscoveryTab.SERVERS:
        if (!C) return (0, _.transitionToGlobalDiscovery)({
          tab: t
        });
        p.Z.resetState(), f.Z.resetState();
        return;
      default:
        return (0, _.transitionToGlobalDiscovery)({
          tab: t
        })
    }
  }, [t, C]);
  return (0, r.jsxs)(s.P3F, {
    onClick: S,
    className: a()(y.navItem, {
      [y.selected]: C
    }),
    children: [(0, r.jsx)("div", {
      className: y.navItemIcon,
      children: l
    }), (0, r.jsx)(s.Text, {
      variant: "text-md/medium",
      color: "none",
      children: I
    })]
  })
}
let S = function() {
  return (0, r.jsxs)("div", {
    className: y.container,
    children: [(0, r.jsx)("div", {
      className: y.header,
      children: (0, r.jsx)(s.Heading, {
        variant: "text-lg/semibold",
        children: I.intl.string(I.t["1KqYnl"])
      })
    }), (0, r.jsx)("nav", {
      className: y.nav,
      children: E.GLOBAL_DISCOVERY_TABS.map(e => (0, r.jsx)(C, {
        tab: e
      }, e))
    })]
  })
}