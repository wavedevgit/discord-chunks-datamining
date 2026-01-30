/** Chunk was on 64935 **/
/** chunk id: 837057, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  transitionToGlobalDiscovery: () => function e(t) {
    var n, g, _;
    let h = t.tab;
    switch (u.A.setState({
        selectedTab: h
      }), h) {
      case d.GlobalDiscoveryTab.SERVERS:
        let b = t.selectedServersTab;
        return null != b ? l.A.setState({
          selectedTab: b,
          entrypoint: null != (n = t.entrypoint) ? n : f.J8.UNKNOWN
        }) : l.A.setState({
          entrypoint: null != (g = t.entrypoint) ? g : f.J8.UNKNOWN
        }), (0, s.pX)(p.BVt.GLOBAL_DISCOVERY_SERVERS, t.extra);
      case d.GlobalDiscoveryTab.APPS:
        if (null != t.newSessionState) {
          let n = (0, i.YP)(),
            {
              guildId: l,
              entrypoint: a
            } = t.newSessionState;
          if (r.h.setState({
              sessionId: n,
              guildId: null != l ? l : null,
              entrypoint: a,
              trackedOpenedFromExternalEntrypoint: false
            }), c.default.track(p.HAw.APP_DIRECTORY_OPENED, {
              source: null == a ? true : a.name,
              session_id: n,
              guild_id: l,
              user_id: null == (_ = o.default.getCurrentUser()) ? true : _.id
            }), t.newSessionState.restorePreviousView) return e(function() {
            let {
              lastItem: e
            } = r.tS.getState();
            if (null != e) switch (e.type) {
              case r.ev.APPLICATION:
                return {
                  tab: d.GlobalDiscoveryTab.APPS, applicationId: e.applicationId, section: e.section
                };
              case r.ev.CATEGORY:
                return {
                  tab: d.GlobalDiscoveryTab.APPS, categoryId: Number(e.categoryId)
                };
              case r.ev.SEARCH:
                var t;
                return {
                  tab: d.GlobalDiscoveryTab.APPS, query: null != (t = e.query) ? t : "", page: e.page, categoryId: null != e.categoryId ? Number(e.categoryId) : true
                }
            }
            return {
              tab: d.GlobalDiscoveryTab.APPS
            }
          }())
        }
        if (null != t.applicationId) {
          if (t.section === m.GlobalDiscoveryAppsSections.STORE)
            if (null != t.skuId) return (0, s.pX)(p.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.applicationId, t.skuId));
            else return (0, s.pX)(p.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t.applicationId, m.GlobalDiscoveryAppsSections.STORE));
          return (0, s.pX)(p.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(t.applicationId))
        }
        if (null != t.query) {
          let e = new URLSearchParams;
          return "" !== t.query && e.set("q", t.query), null != t.categoryId && e.set("category_id", t.categoryId.toString()), null != t.page && e.set("page", t.page.toString()), (0, s.pX)(p.BVt.GLOBAL_DISCOVERY_APPS_SEARCH, {
            search: e.toString()
          })
        }
        if (null != t.categoryId) return (0, s.pX)(p.BVt.GLOBAL_DISCOVERY_APPS_CATEGORY(t.categoryId.toString()));
        else return (0, s.pX)(p.BVt.GLOBAL_DISCOVERY_APPS);
      case d.GlobalDiscoveryTab.QUESTS:
        return (0, a.navigateToQuestHome)({
          fromContent: t.questContent,
          questId: t.questId,
          forceDiscoveryQuestHomeRoute: true
        });
      default:
        throw Error("[transitionToGlobalDiscovery] Unhandled tab type: ".concat(h))
    }
  }
}), require("./896048.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js"), require("./65821.js");
var Chunk310419 = require("./310419.js"),
  Chunk965660 = require("./965660.js"),
  Chunk601193 = require("./601193.js"),
  Chunk545986 = require("./545986.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk726845 = require("./726845.js"),
  Chunk488995 = require("./488995.js"),
  Chunk652215 = require("./652215.js"),
  Chunk435220 = require("./435220.js"),
  Chunk324580 = require("./324580.js")