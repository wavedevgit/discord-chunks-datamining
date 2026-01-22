/** Chunk was on web.js **/
/** chunk id: 909206, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  MJ: () => s,
  _9: () => o,
  c2: () => i,
  ri: () => a
});
var Chunk73153 = require("./73153.js");

function i() {
  r.h.dispatch({
    type: "DEVELOPER_ACTIVITY_SHELF_TOGGLE_USE_ACTIVITY_URL_OVERRIDE"
  })
}

function a(e) {
  r.h.dispatch({
    type: "DEVELOPER_ACTIVITY_SHELF_SET_ACTIVITY_URL_OVERRIDE",
    activityUrlOverride: e
  })
}

function s(e) {
  r.h.dispatch({
    type: "DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED",
    applicationId: e,
    timestamp: new Date().getTime()
  })
}

function o(e) {
  r.h.dispatch({
    type: "DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER",
    filter: e
  })
}