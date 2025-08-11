/** Chunk was on web.js **/
/** chunk id: 495527, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk579806 = require("./579806.js");
let i = new(require("./710845.js")).Z("IntentsBindings");

function o() {
  var e;
  return null != (e = null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.features.supports("intents")) && module
}
let a = {
  hasSearch: () => o(),
  hasUserActivity: () => o(),
  clearSearchIndex() {
    try {
      null === Chunk579806.Z || true === Chunk579806.Z || Chunk579806.Z.ipc.invoke("DISCORD_SEARCH_CLEAR_INDEX")
    } catch (e) {
      i.warn("clearSearchIndex: ".concat(module))
    }
  },
  deleteSearchDomains(e) {
    try {
      null === r.Z || true === r.Z || r.Z.ipc.invoke("DISCORD_SEARCH_DELETE_DOMAINS", e)
    } catch (e) {
      i.warn("deleteSearchDomains: ".concat(e))
    }
  },
  deleteSearchItems(e) {
    try {
      null === r.Z || true === r.Z || r.Z.ipc.invoke("DISCORD_SEARCH_DELETE_ITEMS", e)
    } catch (e) {
      i.warn("deleteSearchItems: ".concat(e))
    }
  },
  indexDomains(e) {
    try {
      null === r.Z || true === r.Z || r.Z.ipc.invoke("DISCORD_SEARCH_INDEX_DOMAINS", e)
    } catch (e) {
      i.warn("indexDomains: ".concat(e))
    }
  },
  resignActivity() {
    try {
      null === Chunk579806.Z || true === Chunk579806.Z || Chunk579806.Z.ipc.invoke("DISCORD_INTENTS_RESIGN_ACTIVITY")
    } catch (e) {
      i.warn("resignActivity: ".concat(module))
    }
  },
  setActivity(e) {
    try {
      null === r.Z || true === r.Z || r.Z.ipc.invoke("DISCORD_INTENTS_SET_ACTIVITY", e)
    } catch (e) {
      i.warn("setActivity: ".concat(e))
    }
  }
}