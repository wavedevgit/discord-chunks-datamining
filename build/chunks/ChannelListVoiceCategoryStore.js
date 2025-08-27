/** Chunk was on web.js **/
/** chunk id: 203818, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = {};

function l(e) {
  let {
    guildId: t,
    expand: n
  } = e;
  n ? s[t] = true : delete s[t]
}
class c extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    s = null != e ? e : {}
  }
  isVoiceCategoryExpanded(e) {
    var t;
    return null != (t = null != e && s[e]) && t
  }
  isVoiceCategoryCollapsed(e) {
    return !this.isVoiceCategoryExpanded(e)
  }
  getState() {
    return s
  }
}
o(c, "displayName", "ChannelListVoiceCategoryStore"), o(c, "persistKey", "ChannelListVoiceCategoryStore");
let u = new c(Chunk570140.Z, {
  VOICE_CATEGORY_COLLAPSE: l,
  VOICE_CATEGORY_EXPAND: l
})