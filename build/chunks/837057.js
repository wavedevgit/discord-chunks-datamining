/** Chunk was on web.js **/
/** chunk id: 837057, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  transitionToGlobalDiscovery: () => h
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
  Chunk324580 = require("./324580.js");

function h(e) {
  var t, n, g;
  let E = e.tab;
  switch (u.A.setState({
      selectedTab: E
    }), E) {
    case d.GlobalDiscoveryTab.SERVERS:
      let b = e.selectedServersTab;
      return null != b ? a.A.setState({
        selectedTab: b,
        entrypoint: null != (t = e.entrypoint) ? t : _.J8.UNKNOWN
      }) : a.A.setState({
        entrypoint: null != (n = e.entrypoint) ? n : _.J8.UNKNOWN
      }), (0, o.pX)(f.BVt.GLOBAL_DISCOVERY_SERVERS, e.extra);
    case d.GlobalDiscoveryTab.APPS:
      if (null != e.newSessionState) {
        let t = (0, i.YP)(),
          {
            guildId: n,
            entrypoint: a
          } = e.newSessionState;
        if (r.h.setState({
            sessionId: t,
            guildId: null != n ? n : null,
            entrypoint: a,
            trackedOpenedFromExternalEntrypoint: false
          }), c.default.track(f.HAw.APP_DIRECTORY_OPENED, {
            source: null == a ? true : a.name,
            session_id: t,
            guild_id: n,
            user_id: null == (g = l.default.getCurrentUser()) ? true : g.id
          }), e.newSessionState.restorePreviousView) return h(m())
      }
      if (null != e.applicationId) {
        if (e.section === p.GlobalDiscoveryAppsSections.STORE)
          if (null != e.skuId) return (0, o.pX)(f.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(e.applicationId, e.skuId));
          else return (0, o.pX)(f.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(e.applicationId, p.GlobalDiscoveryAppsSections.STORE));
        return (0, o.pX)(f.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(e.applicationId))
      }
      if (null != e.query) {
        let t = new URLSearchParams;
        return "" !== e.query && t.set("q", e.query), null != e.categoryId && t.set("category_id", e.categoryId.toString()), null != e.page && t.set("page", e.page.toString()), (0, o.pX)(f.BVt.GLOBAL_DISCOVERY_APPS_SEARCH, {
          search: t.toString()
        })
      }
      if (null != e.categoryId) return (0, o.pX)(f.BVt.GLOBAL_DISCOVERY_APPS_CATEGORY(e.categoryId.toString()));
      else return (0, o.pX)(f.BVt.GLOBAL_DISCOVERY_APPS);
    case d.GlobalDiscoveryTab.QUESTS:
      return (0, s.navigateToQuestHome)({
        fromContent: e.questContent,
        questId: e.questId,
        forceDiscoveryQuestHomeRoute: true
      });
    default:
      throw Error("[transitionToGlobalDiscovery] Unhandled tab type: ".concat(E))
  }
}

function m() {
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
}