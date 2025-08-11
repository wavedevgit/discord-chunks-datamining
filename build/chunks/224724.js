/** Chunk was on web.js **/
/** chunk id: 224724, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk594174 = require("./594174.js"),
  Chunk621853 = require("./621853.js");
let c = null,
  u = null,
  d = false;

function f(e) {
  let {
    widgets: t
  } = e;
  if (c = t, null === u) {
    let e = s.default.getCurrentUser();
    if (null != e) {
      var n;
      let t = l.Z.getUserProfile(e.id);
      u = null != (n = null == t ? true : t.widgets) ? n : []
    }
  }
}

function _() {
  c = null, u = null
}

function p(e) {
  d = true
}

function h(e) {
  d = false, null !== c && (u = c, c = null)
}

function m(e) {
  d = false
}
class g extends Chunk442837.ZP.Store {
  getPendingWidgets() {
    return c
  }
  hasPendingChanges() {
    return null !== c && (null === u || !i().isEqual(c, u))
  }
  get isSubmitting() {
    return d
  }
}
let E = new g(Chunk570140.Z, {
  WIDGET_PENDING_SET: f,
  WIDGET_PENDING_SAVE_START: p,
  WIDGET_PENDING_SAVE_SUCCESS: h,
  WIDGET_PENDING_SAVE_FAILURE: m,
  WIDGET_PENDING_CLEAR: _
})