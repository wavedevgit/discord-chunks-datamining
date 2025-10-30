/** Chunk was on 63141 **/
/** chunk id: 906037, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  CR: () => l,
  eM: () => o,
  m3: () => a
});
var Chunk570140 = require("./570140.js"),
  Chunk449224 = require("./449224.js");

function o(e) {
  return !e.isPreviewingInGame && !e.locked || e.pinned
}

function l(e, t, n) {
  (e.locked !== t.locked || e.pinned !== t.pinned || n(e) !== n(t) || o(e) !== o(t)) && a(t, n(t))
}

function a(e, t) {
  var n, l;
  let a = o(e),
    s = r.Z.getGame();
  i.Z.dispatch({
    type: "OVERLAY_WIDGET_CHANGED",
    gameName: null != (n = null == s ? true : s.name) ? n : null,
    gameId: null != (l = null == s ? true : s.id) ? l : null,
    widgetType: e.widget,
    visible: a && t,
    locked: e.locked,
    pinned: e.pinned
  })
}