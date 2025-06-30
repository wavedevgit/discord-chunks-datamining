/** Chunk was on 93955 **/
n.r(t), n.d(t, {
  transitionToGlobalDiscovery: () => function e(t) {
    var n, f, m;
    let b = t.tab;
    switch (u.Z.setState({
        selectedTab: b
      }), b) {
      case d.GlobalDiscoveryTab.SERVERS:
        let y = t.selectedServersTab;
        return null != y ? i.Z.setState({
          selectedTab: y,
          entrypoint: null != (n = t.entrypoint) ? n : g.Qq.UNKNOWN
        }) : i.Z.setState({
          entrypoint: null != (f = t.entrypoint) ? f : g.Qq.UNKNOWN
        }), (0, c.uL)(p.Z5c.GLOBAL_DISCOVERY_SERVERS, t.extra);
      case d.GlobalDiscoveryTab.APPS:
        if (null != t.newSessionState) {
          let n = (0, r.PM)(),
            {
              guildId: i,
              entrypoint: o
            } = t.newSessionState;
          if (a.z8.setState({
              sessionId: n,
              guildId: null != i ? i : null,
              entrypoint: o,
              trackedOpenedFromExternalEntrypoint: !1
            }), l.default.track(p.rMx.APP_DIRECTORY_OPENED, {
              source: null == o ? void 0 : o.name,
              session_id: n,
              guild_id: i,
              user_id: null == (m = s.default.getCurrentUser()) ? void 0 : m.id
            }), t.newSessionState.restorePreviousView) return e(function() {
            let {
              lastItem: e
            } = a.aQ.getState();
            if (null != e) switch (e.type) {
              case a.m_.APPLICATION:
                return {
                  tab: d.GlobalDiscoveryTab.APPS, applicationId: e.applicationId, section: e.section
                };
              case a.m_.CATEGORY:
                return {
                  tab: d.GlobalDiscoveryTab.APPS, categoryId: Number(e.categoryId)
                };
              case a.m_.SEARCH:
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
          if (t.section === _.GlobalDiscoveryAppsSections.STORE)
            if (null != t.skuId) return (0, c.uL)(p.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.applicationId, t.skuId));
            else return (0, c.uL)(p.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t.applicationId, _.GlobalDiscoveryAppsSections.STORE));
          return (0, c.uL)(p.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(t.applicationId))
        }
        if (null != t.query) {
          let e = new URLSearchParams;
          return "" !== t.query && e.set("q", t.query), null != t.categoryId && e.set("category_id", t.categoryId.toString()), null != t.page && e.set("page", t.page.toString()), (0, c.uL)(p.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, {
            search: e.toString()
          })
        }
        if (null != t.categoryId) return (0, c.uL)(p.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(t.categoryId.toString()));
        else return (0, c.uL)(p.Z5c.GLOBAL_DISCOVERY_APPS);
      case d.GlobalDiscoveryTab.QUESTS:
        return (0, o.navigateToQuestHome)({
          fromContent: t.questContent,
          questId: t.questId
        });
      default:
        throw Error("[transitionToGlobalDiscovery] Unhandled tab type: ".concat(b))
    }
  }
}), n(65234), n(111804), n(490233), n(97749), n(388685), n(415506);
var a = n(258971),
  r = n(726115),
  i = n(859921),
  o = n(341907),
  c = n(703656),
  s = n(594174),
  l = n(626135),
  u = n(836768),
  d = n(49898),
  p = n(981631),
  _ = n(979007),
  g = n(128449)