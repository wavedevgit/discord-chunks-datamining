/** Chunk was on 79312 **/
/** chunk id: 749681, original params: e,t,r (module,exports,require) **/
require.r(exports), require.d(exports, {
  transitionToGlobalDiscovery: () => function e(t) {
    var r, m, b;
    let S = t.tab;
    switch (u.Z.setState({
        selectedTab: S
      }), S) {
      case d.GlobalDiscoveryTab.SERVERS:
        let O = t.selectedServersTab;
        return null != O ? l.Z.setState({
          selectedTab: O,
          entrypoint: null != (r = t.entrypoint) ? r : y.Qq.UNKNOWN
        }) : l.Z.setState({
          entrypoint: null != (m = t.entrypoint) ? m : y.Qq.UNKNOWN
        }), (0, o.uL)(p.Z5c.GLOBAL_DISCOVERY_SERVERS, t.extra);
      case d.GlobalDiscoveryTab.APPS:
        if (null != t.newSessionState) {
          let r = (0, a.PM)(),
            {
              guildId: l,
              entrypoint: i
            } = t.newSessionState;
          if (n.z8.setState({
              sessionId: r,
              guildId: null != l ? l : null,
              entrypoint: i,
              trackedOpenedFromExternalEntrypoint: false
            }), c.default.track(p.rMx.APP_DIRECTORY_OPENED, {
              source: null == i ? true : i.name,
              session_id: r,
              guild_id: l,
              user_id: null == (b = s.default.getCurrentUser()) ? true : b.id
            }), t.newSessionState.restorePreviousView) return e(function() {
            let {
              lastItem: e
            } = n.aQ.getState();
            if (null != e) switch (e.type) {
              case n.m_.APPLICATION:
                return {
                  tab: d.GlobalDiscoveryTab.APPS, applicationId: e.applicationId, section: e.section
                };
              case n.m_.CATEGORY:
                return {
                  tab: d.GlobalDiscoveryTab.APPS, categoryId: Number(e.categoryId)
                };
              case n.m_.SEARCH:
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
          if (t.section === f.GlobalDiscoveryAppsSections.STORE)
            if (null != t.skuId) return (0, o.uL)(p.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.applicationId, t.skuId));
            else return (0, o.uL)(p.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t.applicationId, f.GlobalDiscoveryAppsSections.STORE));
          return (0, o.uL)(p.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(t.applicationId))
        }
        if (null != t.query) {
          let e = new URLSearchParams;
          return "" !== t.query && e.set("q", t.query), null != t.categoryId && e.set("category_id", t.categoryId.toString()), null != t.page && e.set("page", t.page.toString()), (0, o.uL)(p.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, {
            search: e.toString()
          })
        }
        if (null != t.categoryId) return (0, o.uL)(p.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(t.categoryId.toString()));
        else return (0, o.uL)(p.Z5c.GLOBAL_DISCOVERY_APPS);
      case d.GlobalDiscoveryTab.QUESTS:
        return (0, i.navigateToQuestHome)({
          fromContent: t.questContent,
          questId: t.questId
        });
      default:
        throw Error("[transitionToGlobalDiscovery] Unhandled tab type: ".concat(S))
    }
  }
}), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js"), require("./415506.js");
var Chunk258971 = require("./258971.js"),
  Chunk726115 = require("./726115.js"),
  Chunk859921 = require("./859921.js"),
  Chunk110560 = require("./110560.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk836768 = require("./836768.js"),
  Chunk49898 = require("./49898.js"),
  Chunk981631 = require("./981631.js"),
  Chunk979007 = require("./979007.js"),
  Chunk128449 = require("./128449.js")