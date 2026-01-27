/** Chunk was on web.js **/
/** chunk id: 279263, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk867051 = require("./867051.js"),
  Chunk23974 = require("./23974.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let o = "Note";
class s extends Chunk23974.f {
  getNote(e) {
    return this.get(e)
  }
}
a(s, "displayName", "NoteStore");
let l = new s({
  CONNECTION_OPEN: (e, t) => t.reset(),
  OVERLAY_INITIALIZE: (e, t) => t.reset(),
  USER_NOTE_UPDATE: (e, t) => {
    t.set(e.id, (0, r.yE)(o, {
      loading: false,
      note: e.note
    }))
  },
  USER_NOTE_LOAD_START: (e, t) => {
    t.set(e.userId, (0, r.yE)(o, {
      loading: true,
      note: null
    }))
  }
})