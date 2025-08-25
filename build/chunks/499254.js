/** Chunk was on web.js **/
/** chunk id: 499254, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Hm: () => s,
  Tv: () => a,
  __: () => i,
  yT: () => o
});
var Chunk570140 = require("./570140.js");

function i(e, t, n) {
  r.Z.dispatch({
    type: "APP_LAUNCHER_SHOW",
    entrypoint: e,
    activeViewType: t,
    initialState: n
  })
}

function o(e) {
  r.Z.dispatch({
    type: "APP_LAUNCHER_DISMISS",
    closeReason: e
  })
}

function a(e) {
  r.Z.dispatch({
    type: "APP_LAUNCHER_ADD_FAILED_APP_DM_LOAD",
    channelId: e
  })
}

function s(e) {
  r.Z.dispatch({
    type: "APP_LAUNCHER_REMOVE_FAILED_APP_DM_LOAD",
    channelId: e
  })
}