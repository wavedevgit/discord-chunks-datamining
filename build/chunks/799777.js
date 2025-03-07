/** Chunk was on web.js **/
"use strict";
let r;
n.d(t, {
  Z: () => O
});
var i, o = n(392711),
  a = n.n(o),
  s = n(442837),
  l = n(433517),
  c = n(570140),
  u = n(981631);

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let f = "GameLibraryViewStore",
  _ = 200,
  p = u.sHY.ASCENDING,
  h = u.iEv.LAST_PLAYED,
  m = !1,
  g = a().debounce(() => {
    m = !1, y.emitChange()
  }, _);

function E(e) {
  let {
    key: t,
    isKeyboardEvent: n
  } = e;
  n && (m = !0, g()), r = t
}

function v(e) {
  let {
    direction: t,
    key: n
  } = e;
  p = t, h = n, l.K.set(f, {
    sortDirection: p,
    sortKey: h
  })
}
class b extends(i = s.ZP.Store) {
  initialize() {
    var e;
    let t = null !== (e = l.K.get(f)) && void 0 !== e ? e : {};
    null != t.sortDirection && null != t.sortKey && (p = t.sortDirection, h = t.sortKey)
  }
  get sortDirection() {
    return p
  }
  get sortKey() {
    return h
  }
  get activeRowKey() {
    return r
  }
  get isNavigatingByKeyboard() {
    return m
  }
}
d(b, "displayName", "GameLibraryViewStore");
let y = new b(c.Z, {
    LIBRARY_TABLE_SORT_UPDATE: v,
    LIBRARY_TABLE_ACTIVE_ROW_ID_UPDATE: E
  }),
  O = y