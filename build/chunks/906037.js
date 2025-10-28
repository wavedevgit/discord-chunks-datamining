/** Chunk was on 63141 **/
/** chunk id: 906037, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  CR: () => s,
  eM: () => o,
  m3: () => l
});
var Chunk570140 = require("./570140.js"),
  Chunk449224 = require("./449224.js");

function o(e) {
  return !e.isPreviewingInGame && !e.locked || e.pinned
}

function s(e, t, n) {
  (e.locked !== t.locked || e.pinned !== t.pinned || n(e) !== n(t) || o(e) !== o(t)) && l(t, n(t))
}

function l(e, t) {
  var n, s;
  let l = o(e),
    a = r.Z.getGame();
  i.Z.dispatch({
    type: "OVERLAY_WIDGET_CHANGED",
    gameName: null != (n = null == a ? true : a.name) ? n : null,
    gameId: null != (s = null == a ? true : a.id) ? s : null,
    widgetType: e.widget,
    visible: l && t,
    locked: e.locked,
    pinned: e.pinned
  })
}