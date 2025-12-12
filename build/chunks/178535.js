/** Chunk was on web.js **/
/** chunk id: 178535, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk607070 = require("./607070.js"),
  Chunk981631 = require("./981631.js");

function o(e, t, n) {
  var o, a, s, l, c, u, d, f;
  let p = arguments.length > 3 && true !== arguments[3] ? arguments[3] : null;
  return {
    key: null != (a = null != (o = t.key) ? o : p) ? a : "modal",
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