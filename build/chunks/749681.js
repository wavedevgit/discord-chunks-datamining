/** Chunk was on 98587 **/
n.r(t), n.d(t, {
  transitionToGlobalDiscovery: () => function e(t) {
    var n, f, g;
    let O = t.tab;
    switch (s.Z.setState({
        selectedTab: O
      }), O) {
      case _.GlobalDiscoveryTab.SERVERS:
        let y = t.selectedServersTab;
        return null != y ? i.Z.setState({
          selectedTab: y,
          entrypoint: null != (n = t.entrypoint) ? n : p.Qq.UNKNOWN
        }) : i.Z.setState({
          entrypoint: null != (f = t.entrypoint) ? f : p.Qq.UNKNOWN
        }), (0, c.uL)(b.Z5c.GLOBAL_DISCOVERY_SERVERS, t.extra);
      case _.GlobalDiscoveryTab.APPS:
        if (null != t.newSessionState) {
          let n = (0, o.PM)(),
            {
              guildId: i,
              entrypoint: a
            } = t.newSessionState;
          if (r.z8.setState({
              sessionId: n,
              guildId: null != i ? i : null,
              entrypoint: a,
              trackedOpenedFromExternalEntrypoint: !1
            }), u.default.track(b.rMx.APP_DIRECTORY_OPENED, {
              source: null == a ? void 0 : a.name,
              session_id: n,
              guild_id: i,
              user_id: null == (g = l.default.getCurrentUser()) ? void 0 : g.id
            }), t.newSessionState.restorePreviousView) return e(function() {
            let {
              lastItem: e
            } = r.aQ.getState();
            if (null != e) switch (e.type) {
              case r.m_.APPLICATION:
                return {
                  tab: _.GlobalDiscoveryTab.APPS, applicationId: e.applicationId, section: e.section
                };
              case r.m_.CATEGORY:
                return {
                  tab: _.GlobalDiscoveryTab.APPS, categoryId: Number(e.categoryId)
                };
              case r.m_.SEARCH:
                var t;
                return {
                  tab: _.GlobalDiscoveryTab.APPS, query: null != (t = e.query) ? t : "", page: e.page, categoryId: null != e.categoryId ? Number(e.categoryId) : void 0
                }
            }
            return {
              tab: _.GlobalDiscoveryTab.APPS
            }
          }())
        }
        if (null != t.applicationId) {
          if (t.section === d.GlobalDiscoveryAppsSections.STORE)
            if (null != t.skuId) return (0, c.uL)(b.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.applicationId, t.skuId));
            else return (0, c.uL)(b.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t.applicationId, d.GlobalDiscoveryAppsSections.STORE));
          return (0, c.uL)(b.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(t.applicationId))
        }
        if (null != t.query) {
          let e = new URLSearchParams;
          return "" !== t.query && e.set("q", t.query), null != t.categoryId && e.set("category_id", t.categoryId.toString()), null != t.page && e.set("page", t.page.toString()), (0, c.uL)(b.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, {
            search: e.toString()
          })
        }
        if (null != t.categoryId) return (0, c.uL)(b.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(t.categoryId.toString()));
        else return (0, c.uL)(b.Z5c.GLOBAL_DISCOVERY_APPS);
      case _.GlobalDiscoveryTab.QUESTS:
        return (0, a.navigateToQuestHome)({
          fromContent: t.questContent,
          questId: t.questId
        });
      default:
        throw Error("[transitionToGlobalDiscovery] Unhandled tab type: ".concat(O))
    }
  }
}), n(65234), n(111804), n(490233), n(97749), n(388685), n(415506);
var r = n(258971),
  o = n(726115),
  i = n(859921),
  a = n(341907),
  c = n(703656),
  l = n(594174),
  u = n(626135),
  s = n(836768),
  _ = n(49898),
  b = n(981631),
  d = n(979007),
  p = n(128449)