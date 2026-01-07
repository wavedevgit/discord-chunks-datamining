/** Chunk was on web.js **/
/** chunk id: 406763, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => s,
  X: () => o
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk981631 = require("./981631.js");

function o(e, t) {
  r.tn.patch({
    url: a.ANM.GAME_NOTIFICATION_SETTING_UPDATE(e),
    body: {
      muted: t
    },
    rejectWithError: true
  }).then(e => {
    let {
      body: t
    } = e;
    i.Z.dispatch({
      type: "REPLACE_GAME_MENTION_SETTINGS",
      settings: t
    })
  })
}
async function s() {
  await r.tn.get({
    url: a.ANM.GAME_NOTIFICATION_SETTINGS,
    rejectWithError: true
  }).then(e => {
    let {
      body: t
    } = e;
    i.Z.dispatch({
      type: "REPLACE_GAME_MENTION_SETTINGS",
      settings: t
    })
  })
}