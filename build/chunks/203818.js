/** Chunk was on 89444 (61a9107cfbb37ce6.js) **/
n.d(t, {
  Z: () => d
});
var i, r = n(442837),
  l = n(570140);

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let s = {};

function a(e) {
  let {
    guildId: t,
    expand: n
  } = e;
  n ? s[t] = !0 : delete s[t]
}
class u extends(i = r.ZP.PersistedStore) {
  initialize(e) {
    s = null != e ? e : {}
  }
  isVoiceCategoryExpanded(e) {
    var t;
    return null !== (t = null != e && s[e]) && void 0 !== t && t
  }
  isVoiceCategoryCollapsed(e) {
    return !this.isVoiceCategoryExpanded(e)
  }
  getState() {
    return s
  }
}
o(u, "displayName", "ChannelListVoiceCategoryStore"), o(u, "persistKey", "ChannelListVoiceCategoryStore");
let d = new u(l.Z, {
  VOICE_CATEGORY_COLLAPSE: a,
  VOICE_CATEGORY_EXPAND: a
})