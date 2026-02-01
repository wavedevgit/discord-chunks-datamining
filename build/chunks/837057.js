/** Chunk was on 49282 **/
/** chunk id: 837057, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  transitionToGlobalDiscovery: () => function e(t) {
    var l, m, _;
    let O = t.tab;
    switch (u.A.setState({
        selectedTab: O
      }), O) {
      case p.GlobalDiscoveryTab.SERVERS:
        let N = t.selectedServersTab;
        return null != N ? r.A.setState({
          selectedTab: N,
          entrypoint: null != (l = t.entrypoint) ? l : E.J8.UNKNOWN
        }) : r.A.setState({
          entrypoint: null != (m = t.entrypoint) ? m : E.J8.UNKNOWN
        }), (0, c.pX)(d.BVt.GLOBAL_DISCOVERY_SERVERS, t.extra);
      case p.GlobalDiscoveryTab.APPS:
        if (null != t.newSessionState) {
          let l = (0, a.YP)(),
            {
              guildId: r,
              entrypoint: s
            } = t.newSessionState;
          if (n.h.setState({
              sessionId: l,
              guildId: null != r ? r : null,
              entrypoint: s,
              trackedOpenedFromExternalEntrypoint: false
            }), o.default.track(d.HAw.APP_DIRECTORY_OPENED, {
              source: null == s ? true : s.name,
              session_id: l,
              guild_id: r,
              user_id: null == (_ = i.default.getCurrentUser()) ? true : _.id
            }), t.newSessionState.restorePreviousView) return e(function() {
            let {
              lastItem: e
            } = n.tS.getState();
            if (null != e) switch (e.type) {
              case n.ev.APPLICATION:
                return {
                  tab: p.GlobalDiscoveryTab.APPS, applicationId: e.applicationId, section: e.section
                };
              case n.ev.CATEGORY:
                return {
                  tab: p.GlobalDiscoveryTab.APPS, categoryId: Number(e.categoryId)
                };
              case n.ev.SEARCH:
                var t;
                return {
                  tab: p.GlobalDiscoveryTab.APPS, query: null != (t = e.query) ? t : "", page: e.page, categoryId: null != e.categoryId ? Number(e.categoryId) : true
                }
            }
            return {
              tab: p.GlobalDiscoveryTab.APPS
            }
          }())
        }
        if (null != t.applicationId) {
          if (t.section === T.GlobalDiscoveryAppsSections.STORE)
            if (null != t.skuId) return (0, c.pX)(d.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.applicationId, t.skuId));
            else return (0, c.pX)(d.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t.applicationId, T.GlobalDiscoveryAppsSections.STORE));
          return (0, c.pX)(d.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(t.applicationId))
        }
        if (null != t.query) {
          let e = new URLSearchParams;
          return "" !== t.query && e.set("q", t.query), null != t.categoryId && e.set("category_id", t.categoryId.toString()), null != t.page && e.set("page", t.page.toString()), (0, c.pX)(d.BVt.GLOBAL_DISCOVERY_APPS_SEARCH, {
            search: e.toString()
          })
        }
        if (null != t.categoryId) return (0, c.pX)(d.BVt.GLOBAL_DISCOVERY_APPS_CATEGORY(t.categoryId.toString()));
        else return (0, c.pX)(d.BVt.GLOBAL_DISCOVERY_APPS);
      case p.GlobalDiscoveryTab.QUESTS:
        return (0, s.navigateToQuestHome)({
          fromContent: t.questContent,
          questId: t.questId,
          forceDiscoveryQuestHomeRoute: true
        });
      default:
        throw Error("[transitionToGlobalDiscovery] Unhandled tab type: ".concat(O))
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