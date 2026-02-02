/** Chunk was on web.js **/
/** chunk id: 279263, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
}), require("./896048.js");
var Chunk867051 = require("./867051.js"),
  Chunk548965 = require("./548965.js"),
  Chunk942269 = require("./942269.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = "Note";
class l extends Chunk942269.yW {
  getNote(e) {
    return this.database.get(e)
  }
  stateWrapper() {
    return this.database
  }
  constructor(...e) {
    super(...e), o(this, "database", this.addKVDatabase("notes"))
  }
}
o(l, "displayName", "NoteStore");
let c = new l({
  CONNECTION_OPEN: (e, t) => t.clear(),
  OVERLAY_INITIALIZE: (e, t) => t.clear(),
  USER_NOTE_UPDATE: (e, t) => {
    t.set(e.id, (0, r.yE)(s, {
      loading: false,
      note: e.note
    }))
  },
  USER_NOTE_LOAD_START: (e, t) => {
    t.set(e.userId, (0, r.yE)(s, {
      loading: true,
      note: null
    }))
  }
}, Chunk548965.P4.getCachedBridgedStoreMode())