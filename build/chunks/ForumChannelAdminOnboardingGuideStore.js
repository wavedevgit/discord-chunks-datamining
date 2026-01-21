/** Chunk was on 82124 **/
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
let o = new Set;
class s extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    null != e && (o = new Set(e))
  }
  hasHidden(e) {
    return o.has(e)
  }
  getState() {
    return o
  }
}
a(s, "displayName", "ForumChannelAdminOnboardingGuideStore"), a(s, "persistKey", "ForumChannelAdminOnboardingGuideStore");
let c = new s(Chunk570140.Z, {
  ADMIN_ONBOARDING_GUIDE_HIDE: function(e) {
    let {
      channelId: t,
      hide: n
    } = e;
    n ? o.add(t) : o.delete(t)
  }
})