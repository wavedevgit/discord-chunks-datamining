/** Chunk was on 63141 **/
/** chunk id: 906037, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  CR: () => s,
  eM: () => a,
  m3: () => o
});
var Chunk570140 = require("./570140.js"),
  Chunk449224 = require("./449224.js");

function a(e) {
  return !e.isPreviewingInGame && !e.locked || e.pinned
}

function s(e, t, n) {
  (e.locked !== t.locked || e.pinned !== t.pinned || n(e) !== n(t) || a(e) !== a(t)) && o(t, n(t))
}

function o(e, t) {
  var n, s;
  let o = a(e),
    l = r.Z.getGame();
  i.Z.dispatch({
    type: "OVERLAY_WIDGET_CHANGED",
    gameName: null != (n = null == l ? true : l.name) ? n : null,
    gameId: null != (s = null == l ? true : l.id) ? s : null,
    widgetType: e.widget,
    visible: o && t,
    locked: e.locked,
    pinned: e.pinned
  })
}