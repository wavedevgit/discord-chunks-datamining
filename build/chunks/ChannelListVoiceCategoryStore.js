/** Chunk was on 3911 **/
/** chunk id: 551851, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => u
});
var i, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

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
class d extends(i = Chunk311907.Ay.PersistedStore) {
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
l(d, "displayName", "ChannelListVoiceCategoryStore"), l(d, "persistKey", "ChannelListVoiceCategoryStore");
let u = new d(Chunk73153.h, {
  VOICE_CATEGORY_COLLAPSE: a,
  VOICE_CATEGORY_EXPAND: a
})