/** Chunk was on web.js **/
/** chunk id: 830126, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk775602 = require("./775602.js"),
  Chunk652215 = require("./652215.js");

function a(e, t, n) {
  var a, s, o, l, c, u, d, f;
  let p = arguments.length > 3 && true !== arguments[3] ? arguments[3] : null;
  return {
    key: null != (a = null != (s = t.key) ? s : p) ? a : "modal",
    modal: e,
    animation: null != (o = t.animation) ? o : r.A.useReducedMotion ? i.WMy.FADE : i.WMy.SLIDE_UP,
    shouldPersistUnderModals: null != (l = t.shouldPersistUnderModals) && l,
    props: n,
    backdropStyle: null != (c = t.backdropStyle) ? c : null,
    backdropInstant: null != (u = t.backdropInstant) && u,
    disableAnimation: null != (d = t.disableAnimation) && d,
    closable: "boolean" != typeof t.closable || t.closable,
    label: null != (f = t.label) ? f : "",
    callbacks: {}
  }
}