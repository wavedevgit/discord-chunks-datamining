/** Chunk was on web.js **/
/** chunk id: 268387, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  A: () => v
});
var i, Chunk735438 = require("./735438.js"),
  o = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk506774 = require("./506774.js"),
  Chunk73153 = require("./73153.js"),
  Chunk652215 = require("./652215.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let f = "GameLibraryViewStore",
  p = 200,
  _ = Chunk652215.tSW.ASCENDING,
  h = Chunk652215.DpB.LAST_PLAYED,
  m = false,
  g = o().debounce(() => {
    m = false, O.emitChange()
  }, p);

function E(e) {
  let {
    key: t,
    isKeyboardEvent: n
  } = e;
  n && (m = true, g()), r = t
}

function y(e) {
  let {
    direction: t,
    key: n
  } = e;
  _ = t, h = n, l.w.set(f, {
    sortDirection: _,
    sortKey: h
  })
}
class b extends(i = Chunk311907.Ay.Store) {
  initialize() {
    var e;
    let t = null != (e = l.w.get(f)) ? e : {};
    null != t.sortDirection && null != t.sortKey && (_ = t.sortDirection, h = t.sortKey)
  }
  get sortDirection() {
    return _
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
let O = new b(Chunk73153.h, {
    LIBRARY_TABLE_SORT_UPDATE: y,
    LIBRARY_TABLE_ACTIVE_ROW_ID_UPDATE: E
  }),
  v = O