/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => c
});
var r = n(259443),
  i = n(845856),
  a = n(894276);

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let s = new r.Yd("NoteStore");
class l extends i.fE {
  getNote(e) {
    return this.get(e)
  }
}
o(l, "displayName", "NoteStore"), s.info("libdiscore enabled: ".concat(a.I.cachedIsEnabled()));
let c = new l(a.I.cachedIsEnabled() ? void 0 : e => ({
  CONNECTION_OPEN: () => e.reset(),
  OVERLAY_INITIALIZE: () => e.reset(),
  USER_NOTE_UPDATE: t => {
    e.set(t.id, {
      loading: !1,
      note: t.note
    })
  },
  USER_NOTE_LOAD_START: t => {
    e.set(t.userId, {
      loading: !0,
      note: null
    })
  }
}))