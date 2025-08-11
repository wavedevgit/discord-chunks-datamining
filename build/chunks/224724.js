/** Chunk was on web.js **/
/** chunk id: 224724, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let o = null,
  a = false;

function s(e) {
  let {
    widgets: t
  } = e;
  o = t
}

function l() {
  o = null
}

function c(e) {
  a = true
}

function u(e) {
  a = false, null !== o && (o = null)
}

function d(e) {
  a = false
}
class f extends Chunk442837.ZP.Store {
  getPendingWidgets() {
    return o
  }
  hasPendingChanges() {
    return null !== o
  }
  get isSubmitting() {
    return a
  }
}
let _ = new f(Chunk570140.Z, {
  WIDGET_PENDING_SET: s,
  WIDGET_PENDING_SAVE_START: c,
  WIDGET_PENDING_SAVE_SUCCESS: u,
  WIDGET_PENDING_SAVE_FAILURE: d,
  WIDGET_PENDING_CLEAR: l
})