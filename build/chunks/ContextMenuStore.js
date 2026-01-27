/** Chunk was on web.js **/
/** chunk id: 712687, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk203982 = require("./203982.js"),
  Chunk652215 = require("./652215.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = null,
  u = 0;

function d(e) {
  let {
    contextMenu: t
  } = e;
  u++, c = t
}

function f() {
  c = null
}
class p extends(r = Chunk311907.Ay.Store) {
  isOpen() {
    return null != c
  }
  get version() {
    return u
  }
  getContextMenu() {
    return c
  }
  close() {
    return !!this.isOpen() && (o._.dispatch(s.jej.CONTEXT_MENU_CLOSE), true)
  }
}
l(p, "displayName", "ContextMenuStore");
let _ = new p(Chunk73153.h, {
  CONTEXT_MENU_OPEN: d,
  LAYER_PUSH: f,
  CONTEXT_MENU_CLOSE: f,
  OVERLAY_SET_INPUT_LOCKED: f,
  OVERLAY_DEACTIVATE_ALL_REGIONS: f
})