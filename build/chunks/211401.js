/** Chunk was on web.js **/
/** chunk id: 211401, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => i,
  k: () => a
});
var Chunk73153 = require("./73153.js");

function i(e, t, n, i) {
  r.h.dispatch({
    type: "APP_LAUNCHER_SHOW",
    entrypoint: e,
    activeViewType: t,
    initialState: n,
    activeChannelId: i
  })
}

function a(e) {
  r.h.dispatch({
    type: "APP_LAUNCHER_DISMISS",
    closeReason: e
  })
}