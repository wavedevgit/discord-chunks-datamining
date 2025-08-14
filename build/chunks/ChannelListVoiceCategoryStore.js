/** Chunk was on 62117 **/
/** chunk id: 203818, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let a = {};

function d(e) {
  let {
    guildId: t,
    expand: n
  } = e;
  n ? a[t] = true : delete a[t]
}
class o extends(i = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    a = null != e ? e : {}
  }
  isVoiceCategoryExpanded(e) {
    var t;
    return null != (t = null != e && a[e]) && t
  }
  isVoiceCategoryCollapsed(e) {
    return !this.isVoiceCategoryExpanded(e)
  }
  getState() {
    return a
  }
}
r(o, "displayName", "ChannelListVoiceCategoryStore"), r(o, "persistKey", "ChannelListVoiceCategoryStore");
let h = new o(Chunk570140.Z, {
  VOICE_CATEGORY_COLLAPSE: d,
  VOICE_CATEGORY_EXPAND: d
})