/** Chunk was on 97161 **/
n.r(t), n.d(t, {
  transitionToGlobalDiscovery: () => function e(t) {
    var n, f, g;
    let m = t.tab;
    switch (_.Z.setState({
        selectedTab: m
      }), m) {
      case d.GlobalDiscoveryTab.SERVERS:
        let h = t.selectedServersTab;
        return null != h ? r.Z.setState({
          selectedTab: h,
          entrypoint: null != (n = t.entrypoint) ? n : p.Qq.UNKNOWN
        }) : r.Z.setState({
          entrypoint: null != (f = t.entrypoint) ? f : p.Qq.UNKNOWN
        }), (0, c.uL)(u.Z5c.GLOBAL_DISCOVERY_SERVERS, t.extra);
      case d.GlobalDiscoveryTab.APPS:
        if (null != t.newSessionState) {
          let n = (0, a.PM)(),
            {
              guildId: r,
              entrypoint: i
            } = t.newSessionState;
          if (o.z8.setState({
              sessionId: n,
              guildId: null != r ? r : null,
              entrypoint: i,
              trackedOpenedFromExternalEntrypoint: !1
            }), s.default.track(u.rMx.APP_DIRECTORY_OPENED, {
              source: null == i ? void 0 : i.name,
              session_id: n,
              guild_id: r,
              user_id: null == (g = l.default.getCurrentUser()) ? void 0 : g.id
            }), t.newSessionState.restorePreviousView) return e(function() {
            let {
              lastItem: e
            } = o.aQ.getState();
            if (null != e) switch (e.type) {
              case o.m_.APPLICATION:
                return {
                  tab: d.GlobalDiscoveryTab.APPS, applicationId: e.applicationId, section: e.section
                };
              case o.m_.CATEGORY:
                return {
                  tab: d.GlobalDiscoveryTab.APPS, categoryId: Number(e.categoryId)
                };
              case o.m_.SEARCH:
                var t;
                return {
                  tab: d.GlobalDiscoveryTab.APPS, query: null != (t = e.query) ? t : "", page: e.page, categoryId: null != e.categoryId ? Number(e.categoryId) : void 0
                }
            }
            return {
              tab: d.GlobalDiscoveryTab.APPS
            }
          }())
        }
        if (null != t.applicationId) {
          if (t.section === b.GlobalDiscoveryAppsSections.STORE)
            if (null != t.skuId) return (0, c.uL)(u.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.applicationId, t.skuId));
            else return (0, c.uL)(u.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t.applicationId, b.GlobalDiscoveryAppsSections.STORE));
          return (0, c.uL)(u.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(t.applicationId))
        }
        if (null != t.query) {
          let e = new URLSearchParams;
          return "" !== t.query && e.set("q", t.query), null != t.categoryId && e.set("category_id", t.categoryId.toString()), null != t.page && e.set("page", t.page.toString()), (0, c.uL)(u.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, {
            search: e.toString()
          })
        }
        if (null != t.categoryId) return (0, c.uL)(u.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(t.categoryId.toString()));
        else return (0, c.uL)(u.Z5c.GLOBAL_DISCOVERY_APPS);
      case d.GlobalDiscoveryTab.QUESTS:
        return (0, i.navigateToQuestHome)({
          fromContent: t.questContent,
          questId: t.questId
        });
      default:
        throw Error("[transitionToGlobalDiscovery] Unhandled tab type: ".concat(m))
    }
  }
}), n(65234), n(111804), n(490233), n(97749), n(388685), n(415506);
var o = n(258971),
  a = n(726115),
  r = n(859921),
  i = n(341907),
  c = n(703656),
  l = n(594174),
  s = n(626135),
  _ = n(836768),
  d = n(49898),
  u = n(981631),
  b = n(979007),
  p = n(128449)