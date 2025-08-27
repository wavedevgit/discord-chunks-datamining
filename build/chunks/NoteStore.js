/** Chunk was on web.js **/
/** chunk id: 432835, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk311929 = require("./311929.js"),
  Chunk894276 = require("./894276.js"),
  Chunk516888 = require("./516888.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = "Note";
class l extends Chunk516888.f {
  getNote(e) {
    return this.get(e)
  }
}
o(l, "displayName", "NoteStore");
let c = new l({
  CONNECTION_OPEN: (e, t) => t.reset(),
  OVERLAY_INITIALIZE: (e, t) => t.reset(),
  USER_NOTE_UPDATE: (e, t) => {
    t.set(e.id, (0, r.bk)(s, {
      loading: false,
      note: e.note
    }))
  },
  USER_NOTE_LOAD_START: (e, t) => {
    t.set(e.userId, (0, r.bk)(s, {
      loading: true,
      note: null
    }))
  }
}, Chunk894276.IZ.getCachedBridgedStoreMode())