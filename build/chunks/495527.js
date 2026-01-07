/** Chunk was on web.js **/
/** chunk id: 495527, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk579806 = require("./579806.js");
let i = new(require("./710845.js")).Z("IntentsBindings");

function a() {
  var e;
  return null != (e = null === r.Z || true === r.Z ? true : r.Z.features.supports("intents")) && e
}
let o = {
  hasSearch: () => a(),
  hasUserActivity: () => a(),
  clearSearchIndex() {
    try {
      null === r.Z || true === r.Z || r.Z.ipc.invoke("DISCORD_SEARCH_CLEAR_INDEX")
    } catch (e) {
      i.warn("clearSearchIndex: ".concat(e))
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
      null === r.Z || true === r.Z || r.Z.ipc.invoke("DISCORD_INTENTS_RESIGN_ACTIVITY")
    } catch (e) {
      i.warn("resignActivity: ".concat(e))
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