/** Chunk was on web.js **/
/** chunk id: 499254, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => i,
  y: () => a
});
var Chunk570140 = require("./570140.js");

function i(e, t, n, i) {
  r.Z.dispatch({
    type: "APP_LAUNCHER_SHOW",
    entrypoint: e,
    activeViewType: t,
    initialState: n,
    activeChannelId: i
  })
}

function a(e) {
  r.Z.dispatch({
    type: "APP_LAUNCHER_DISMISS",
    closeReason: e
  })
}