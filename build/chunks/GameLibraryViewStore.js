/** Chunk was on web.js **/
/** chunk id: 799777, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  Z: () => v
});
var i, Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk570140 = require("./570140.js"),
  Chunk981631 = require("./981631.js");

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
  _ = Chunk981631.sHY.ASCENDING,
  m = Chunk981631.iEv.LAST_PLAYED,
  h = false,
  g = a().debounce(() => {
    h = false, O.emitChange()
  }, p);

function E(e) {
  let {
    key: t,
    isKeyboardEvent: n
  } = e;
  n && (h = true, g()), r = t
}

function b(e) {
  let {
    direction: t,
    key: n
  } = e;
  _ = t, m = n, l.K.set(f, {
    sortDirection: _,
    sortKey: m
  })
}
class y extends(i = Chunk442837.ZP.Store) {
  initialize() {
    var e;
    let t = null != (e = Chunk433517.K.get(f)) ? module : {};
    null != exports.sortDirection && null != exports.sortKey && (_ = exports.sortDirection, m = exports.sortKey)
  }
  get sortDirection() {
    return _
  }
  get sortKey() {
    return m
  }
  get activeRowKey() {
    return r
  }
  get isNavigatingByKeyboard() {
    return h
  }
}
d(y, "displayName", "GameLibraryViewStore");
let O = new y(Chunk570140.Z, {
    LIBRARY_TABLE_SORT_UPDATE: b,
    LIBRARY_TABLE_ACTIVE_ROW_ID_UPDATE: E
  }),
  v = O