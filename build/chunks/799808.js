/** Chunk was on 84018 **/
/** chunk id: 799808, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  AE: () => s,
  Mw: () => l,
  j_: () => o
});
var Chunk73153 = require("./73153.js"),
  Chunk157257 = require("./157257.js");

function s(e) {
  return !e.isPreviewingInGame && !e.locked || e.pinned
}

function l(e, t, n) {
  (e.locked !== t.locked || e.pinned !== t.pinned || n(e) !== n(t) || s(e) !== s(t)) && o(t, n(t))
}

function o(e, t) {
  var n, l;
  let o = s(e),
    a = r.A.getGame();
  i.h.dispatch({
    type: "OVERLAY_WIDGET_CHANGED",
    gameName: null != (n = null == a ? true : a.name) ? n : null,
    gameId: null != (l = null == a ? true : a.id) ? l : null,
    widgetType: e.widget,
    visible: o && t,
    locked: e.locked,
    pinned: e.pinned
  })
}