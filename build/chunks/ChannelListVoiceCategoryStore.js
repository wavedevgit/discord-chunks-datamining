/** Chunk was on web.js **/
/** chunk id: 551851, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
});
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
let o = {};

function l(e) {
  let {
    guildId: t,
    expand: n
  } = e;
  n ? o[t] = true : delete o[t]
}
class c extends(r = Chunk311907.Ay.PersistedStore) {
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
s(c, "displayName", "ChannelListVoiceCategoryStore"), s(c, "persistKey", "ChannelListVoiceCategoryStore");
let u = new c(Chunk73153.h, {
  VOICE_CATEGORY_COLLAPSE: l,
  VOICE_CATEGORY_EXPAND: l
})