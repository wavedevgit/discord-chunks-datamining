/** Chunk was on 63141 **/
/** chunk id: 906037, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  CR: () => o,
  eM: () => s,
  m3: () => a
});
var Chunk570140 = require("./570140.js"),
  Chunk449224 = require("./449224.js");

function s(e) {
  return !e.isPreviewingInGame && !e.locked || e.pinned
}

function o(e, t, n) {
  (e.locked !== t.locked || e.pinned !== t.pinned || n(e) !== n(t) || s(e) !== s(t)) && a(t, n(t))
}

function a(e, t) {
  var n, o;
  let a = s(e),
    l = r.Z.getGame();
  i.Z.dispatch({
    type: "OVERLAY_WIDGET_CHANGED",
    gameName: null != (n = null == l ? true : l.name) ? n : null,
    gameId: null != (o = null == l ? true : l.id) ? o : null,
    widgetType: e.widget,
    visible: a && t,
    locked: e.locked,
    pinned: e.pinned
  })
}