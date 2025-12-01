/** Chunk was on web.js **/
/** chunk id: 749681, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  transitionToGlobalDiscovery: () => m
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
  Chunk128449 = require("./128449.js");

function m(e) {
  var t, n, g;
  let E = e.tab;
  switch (u.Z.setState({
      selectedTab: E
    }), E) {
    case d.GlobalDiscoveryTab.SERVERS:
      let b = e.selectedServersTab;
      return null != b ? a.Z.setState({
        selectedTab: b,
        entrypoint: null != (t = e.entrypoint) ? t : _.Qq.UNKNOWN
      }) : a.Z.setState({
        entrypoint: null != (n = e.entrypoint) ? n : _.Qq.UNKNOWN
      }), (0, s.uL)(f.Z5c.GLOBAL_DISCOVERY_SERVERS, e.extra);
    case d.GlobalDiscoveryTab.APPS:
      if (null != e.newSessionState) {
        let t = (0, i.PM)(),
          {
            guildId: n,
            entrypoint: a
          } = e.newSessionState;
        if (r.z8.setState({
            sessionId: t,
            guildId: null != n ? n : null,
            entrypoint: a,
            trackedOpenedFromExternalEntrypoint: false
          }), c.default.track(f.rMx.APP_DIRECTORY_OPENED, {
            source: null == a ? true : a.name,
            session_id: t,
            guild_id: n,
            user_id: null == (g = l.default.getCurrentUser()) ? true : g.id
          }), e.newSessionState.restorePreviousView) return m(h())
      }
      if (null != e.applicationId) {
        if (e.section === p.GlobalDiscoveryAppsSections.STORE)
          if (null != e.skuId) return (0, s.uL)(f.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(e.applicationId, e.skuId));
          else return (0, s.uL)(f.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(e.applicationId, p.GlobalDiscoveryAppsSections.STORE));
        return (0, s.uL)(f.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(e.applicationId))
      }
      if (null != e.query) {
        let t = new URLSearchParams;
        return "" !== e.query && t.set("q", e.query), null != e.categoryId && t.set("category_id", e.categoryId.toString()), null != e.page && t.set("page", e.page.toString()), (0, s.uL)(f.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, {
          search: t.toString()
        })
      }
      if (null != e.categoryId) return (0, s.uL)(f.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(e.categoryId.toString()));
      else return (0, s.uL)(f.Z5c.GLOBAL_DISCOVERY_APPS);
    case d.GlobalDiscoveryTab.QUESTS:
      return (0, o.navigateToQuestHome)({
        fromContent: e.questContent,
        questId: e.questId,
        forceDiscoveryQuestHomeRoute: true
      });
    default:
      throw Error("[transitionToGlobalDiscovery] Unhandled tab type: ".concat(E))
  }
}

function h() {
  let {
    lastItem: e
  } = Chunk258971.aQ.getState();
  if (null != module) switch (module.type) {
    case Chunk258971.m_.APPLICATION:
      return {
        tab: Chunk49898.GlobalDiscoveryTab.APPS, applicationId: module.applicationId, section: module.section
      };
    case Chunk258971.m_.CATEGORY:
      return {
        tab: Chunk49898.GlobalDiscoveryTab.APPS, categoryId: Number(module.categoryId)
      };
    case Chunk258971.m_.SEARCH:
      var t;
      return {
        tab: Chunk49898.GlobalDiscoveryTab.APPS, query: null != (t = module.query) ? exports : "", page: module.page, categoryId: null != module.categoryId ? Number(module.categoryId) : true
      }
  }
  return {
    tab: Chunk49898.GlobalDiscoveryTab.APPS
  }
}