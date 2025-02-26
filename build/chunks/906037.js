/** Chunk was on 63141 **/
"use strict";
n.d(t, {
  CR: () => a,
  eM: () => o,
  m3: () => l
});
var i = n(570140),
  r = n(449224);

function o(e) {
  return !e.isPreviewingInGame && !e.locked || e.pinned
}

function a(e, t, n) {
  (e.locked !== t.locked || e.pinned !== t.pinned || n(e) !== n(t) || o(e) !== o(t)) && l(t, n(t))
}

function l(e, t) {
  var n, a;
  let l = o(e),
    s = r.Z.getGame();
  i.Z.dispatch({
    type: "OVERLAY_WIDGET_CHANGED",
    gameName: null !== (n = null == s ? void 0 : s.name) && void 0 !== n ? n : null,
    gameId: null !== (a = null == s ? void 0 : s.id) && void 0 !== a ? a : null,
    widgetType: e.widget,
    visible: l && t,
    locked: e.locked,
    pinned: e.pinned
  })
}