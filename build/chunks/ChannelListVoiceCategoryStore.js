/** Chunk was on 4192 **/
/** chunk id: 203818, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var l, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function a(e, n, t) {
  return n in e ? Object.defineProperty(e, n, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[n] = t, e
}
let u = {};

function s(e) {
  let {
    guildId: n,
    expand: t
  } = e;
  t ? u[n] = true : delete u[n]
}
class o extends(l = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    u = null != e ? e : {}
  }
  isVoiceCategoryExpanded(e) {
    var n;
    return null != (n = null != e && u[e]) && n
  }
  isVoiceCategoryCollapsed(e) {
    return !this.isVoiceCategoryExpanded(e)
  }
  getState() {
    return u
  }
}
a(o, "displayName", "ChannelListVoiceCategoryStore"), a(o, "persistKey", "ChannelListVoiceCategoryStore");
let d = new o(Chunk570140.Z, {
  VOICE_CATEGORY_COLLAPSE: s,
  VOICE_CATEGORY_EXPAND: s
})