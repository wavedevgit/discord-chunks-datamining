/** Chunk was on 91053 **/
/** chunk id: 961675, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = new Set;
class o extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    null != e && (s = new Set(e))
  }
  hasHidden(e) {
    return s.has(e)
  }
  getState() {
    return s
  }
}
a(o, "displayName", "ForumChannelAdminOnboardingGuideStore"), a(o, "persistKey", "ForumChannelAdminOnboardingGuideStore");
let c = new o(Chunk570140.Z, {
  ADMIN_ONBOARDING_GUIDE_HIDE: function(e) {
    let {
      channelId: t,
      hide: n
    } = e;
    n ? s.add(t) : s.delete(t)
  }
})