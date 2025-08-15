/** Chunk was on 81498 **/
/** chunk id: 203818, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let o = {};

function a(e) {
  let {
    guildId: t,
    expand: n
  } = e;
  n ? o[t] = true : delete o[t]
}
class u extends(i = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    o = null != e ? e : {}
  }
  isVoiceCategoryExpanded(e) {
    var t;
    return null != (t = null != e && o[e]) && t
  }
  isVoiceCategoryCollapsed(e) {
    return !this.isVoiceCategoryExpanded(e)
  }
  getState() {
    return o
  }
}
l(u, "displayName", "ChannelListVoiceCategoryStore"), l(u, "persistKey", "ChannelListVoiceCategoryStore");
let c = new u(Chunk570140.Z, {
  VOICE_CATEGORY_COLLAPSE: a,
  VOICE_CATEGORY_EXPAND: a
})