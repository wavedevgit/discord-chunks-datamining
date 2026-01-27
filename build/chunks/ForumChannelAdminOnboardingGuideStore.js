/** Chunk was on 41727 **/
/** chunk id: 947094, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let a = new Set;
class o extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    null != e && (a = new Set(e))
  }
  hasHidden(e) {
    return a.has(e)
  }
  getState() {
    return a
  }
}
s(o, "displayName", "ForumChannelAdminOnboardingGuideStore"), s(o, "persistKey", "ForumChannelAdminOnboardingGuideStore");
let c = new o(Chunk73153.h, {
  ADMIN_ONBOARDING_GUIDE_HIDE: function(e) {
    let {
      channelId: t,
      hide: n
    } = e;
    n ? a.add(t) : a.delete(t)
  }
})