/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";
n.d(t, {
  Z: () => _
});
var r, i = n(442837),
  o = n(570140),
  a = n(585483),
  s = n(981631);

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
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
class p extends(r = i.ZP.Store) {
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
    return !!this.isOpen() && (a.S.dispatch(s.CkL.CONTEXT_MENU_CLOSE), !0)
  }
}
l(p, "displayName", "ContextMenuStore");
let _ = new p(o.Z, {
  CONTEXT_MENU_OPEN: d,
  LAYER_PUSH: f,
  CONTEXT_MENU_CLOSE: f,
  OVERLAY_SET_INPUT_LOCKED: f,
  OVERLAY_DEACTIVATE_ALL_REGIONS: f
})