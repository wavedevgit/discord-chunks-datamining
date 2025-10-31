/** Chunk was on 63141 **/
/** chunk id: 906037, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  CR: () => o,
  eM: () => l,
  m3: () => s
});
var Chunk570140 = require("./570140.js"),
  Chunk449224 = require("./449224.js");

function l(e) {
  return !e.isPreviewingInGame && !e.locked || e.pinned
}

function o(e, t, n) {
  (e.locked !== t.locked || e.pinned !== t.pinned || n(e) !== n(t) || l(e) !== l(t)) && s(t, n(t))
}

function s(e, t) {
  var n, o;
  let s = l(e),
    a = r.Z.getGame();
  i.Z.dispatch({
    type: "OVERLAY_WIDGET_CHANGED",
    gameName: null != (n = null == a ? true : a.name) ? n : null,
    gameId: null != (o = null == a ? true : a.id) ? o : null,
    widgetType: e.widget,
    visible: s && t,
    locked: e.locked,
    pinned: e.pinned
  })
}