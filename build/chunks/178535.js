/** Chunk was on web.js **/
/** chunk id: 178535, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk607070 = require("./607070.js"),
  Chunk981631 = require("./981631.js");

function a(e, t, n) {
  var a, o, s, l, c, u, d, f;
  let p = arguments.length > 3 && true !== arguments[3] ? arguments[3] : null;
  return {
    key: null != (o = null != (a = t.key) ? a : p) ? o : "modal",
    modal: e,
    animation: null != (s = t.animation) ? s : r.Z.useReducedMotion ? i.fMv.FADE : i.fMv.SLIDE_UP,
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