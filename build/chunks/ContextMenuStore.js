/** Chunk was on web.js **/
/** chunk id: 574254, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk585483 = require("./585483.js"),
  Chunk981631 = require("./981631.js");

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
class p extends(r = Chunk442837.ZP.Store) {
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
    return !!this.isOpen() && (Chunk585483.S.dispatch(Chunk981631.CkL.CONTEXT_MENU_CLOSE), true)
  }
}
l(p, "displayName", "ContextMenuStore");
let _ = new p(Chunk570140.Z, {
  CONTEXT_MENU_OPEN: d,
  LAYER_PUSH: f,
  CONTEXT_MENU_CLOSE: f,
  OVERLAY_SET_INPUT_LOCKED: f,
  OVERLAY_DEACTIVATE_ALL_REGIONS: f
})