/** Chunk was on 97492 **/
/** chunk id: 947094, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = new Set;
class o extends(r = Chunk311907.Ay.PersistedStore) {
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
let c = new o(Chunk73153.h, {
  ADMIN_ONBOARDING_GUIDE_HIDE: function(e) {
    let {
      channelId: t,
      hide: n
    } = e;
    n ? s.add(t) : s.delete(t)
  }
})