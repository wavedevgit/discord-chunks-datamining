/** Chunk was on 63141 **/
/** chunk id: 906037, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  CR: () => o,
  eM: () => s,
  m3: () => l
});
var Chunk570140 = require("./570140.js"),
  Chunk449224 = require("./449224.js");

function s(e) {
  return !e.isPreviewingInGame && !e.locked || e.pinned
}

function o(e, t, n) {
  (e.locked !== t.locked || e.pinned !== t.pinned || n(e) !== n(t) || s(e) !== s(t)) && l(t, n(t))
}

function l(e, t) {
  var n, o;
  let l = s(e),
    a = r.Z.getGame();
  i.Z.dispatch({
    type: "OVERLAY_WIDGET_CHANGED",
    gameName: null != (n = null == a ? true : a.name) ? n : null,
    gameId: null != (o = null == a ? true : a.id) ? o : null,
    widgetType: e.widget,
    visible: l && t,
    locked: e.locked,
    pinned: e.pinned
  })
}