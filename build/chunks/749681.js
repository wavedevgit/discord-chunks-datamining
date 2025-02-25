/** Chunk was on 93259 **/
n.r(t), n.d(t, {
  transitionToGlobalDiscovery: () => function e(t) {
    var n, g, p;
    let m = t.tab;
    switch (d.Z.setState({
        selectedTab: m
      }), m) {
      case _.GlobalDiscoveryTab.SERVERS:
        let h = t.selectedServersTab;
        return null != h ? r.Z.setState({
          selectedTab: h,
          entrypoint: null !== (n = t.entrypoint) && void 0 !== n ? n : f.Qq.UNKNOWN
        }) : r.Z.setState({
          entrypoint: null !== (g = t.entrypoint) && void 0 !== g ? g : f.Qq.UNKNOWN
        }), (0, l.uL)(u.Z5c.GLOBAL_DISCOVERY_SERVERS, t.extra);
      case _.GlobalDiscoveryTab.APPS:
        if (null != t.newSessionState) {
          let n = (0, o.PM)(),
            {
              guildId: r,
              entrypoint: i
            } = t.newSessionState;
          if (a.z8.setState({
              sessionId: n,
              guildId: null != r ? r : null,
              entrypoint: i,
              trackedOpenedFromExternalEntrypoint: !1
            }), s.default.track(u.rMx.APP_DIRECTORY_OPENED, {
              source: null == i ? void 0 : i.name,
              session_id: n,
              guild_id: r,
              user_id: null === (p = c.default.getCurrentUser()) || void 0 === p ? void 0 : p.id
            }), t.newSessionState.restorePreviousView) return e(function() {
            let {
              lastItem: e
            } = a.aQ.getState();
            if (null != e) switch (e.type) {
              case a.m_.APPLICATION:
                return {
                  tab: _.GlobalDiscoveryTab.APPS, applicationId: e.applicationId, section: e.section
                };
              case a.m_.CATEGORY:
                return {
                  tab: _.GlobalDiscoveryTab.APPS, categoryId: Number(e.categoryId)
                };
              case a.m_.SEARCH:
                var t;
                return {
                  tab: _.GlobalDiscoveryTab.APPS, query: null !== (t = e.query) && void 0 !== t ? t : "", page: e.page, categoryId: null != e.categoryId ? Number(e.categoryId) : void 0
                }
            }
            return {
              tab: _.GlobalDiscoveryTab.APPS
            }
          }())
        }
        if (null != t.applicationId) {
          if (t.section === b.GlobalDiscoveryAppsSections.STORE) {
            if (null != t.skuId) return (0, l.uL)(u.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.applicationId, t.skuId));
            return (0, l.uL)(u.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t.applicationId, b.GlobalDiscoveryAppsSections.STORE))
          }
          return (0, l.uL)(u.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(t.applicationId))
        }
        if (null != t.query) {
          let e = new URLSearchParams;
          return "" !== t.query && e.set("q", t.query), null != t.categoryId && e.set("category_id", t.categoryId.toString()), null != t.page && e.set("page", t.page.toString()), (0, l.uL)(u.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, {
            search: e.toString()
          })
        }
        if (null != t.categoryId) return (0, l.uL)(u.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(t.categoryId.toString()));
        else return (0, l.uL)(u.Z5c.GLOBAL_DISCOVERY_APPS);
      case _.GlobalDiscoveryTab.QUESTS:
        return (0, i.navigateToQuestHome)({
          fromContent: t.questContent,
          questId: t.questId
        });
      default:
        throw Error("[transitionToGlobalDiscovery] Unhandled tab type: ".concat(m))
    }
  }
}), n(610138), n(216116), n(78328), n(815648), n(47120), n(411104);
var a = n(258971),
  o = n(726115),
  r = n(859921),
  i = n(341907),
  l = n(703656),
  c = n(594174),
  s = n(626135),
  d = n(836768),
  _ = n(49898),
  u = n(981631),
  b = n(979007),
  f = n(128449)