/** Chunk was on web.js **/
/** chunk id: 432835, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk311929 = require("./311929.js"),
  Chunk516888 = require("./516888.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let o = "Note";
class s extends Chunk516888.f {
  getNote(e) {
    return this.get(e)
  }
}
a(s, "displayName", "NoteStore");
let l = new s({
  CONNECTION_OPEN: (e, t) => t.reset(),
  OVERLAY_INITIALIZE: (e, t) => t.reset(),
  USER_NOTE_UPDATE: (e, t) => {
    t.set(e.id, (0, r.bk)(o, {
      loading: false,
      note: e.note
    }))
  },
  USER_NOTE_LOAD_START: (e, t) => {
    t.set(e.userId, (0, r.bk)(o, {
      loading: true,
      note: null
    }))
  }
}, "libdiscore")