/** Chunk was on web.js **/
/** chunk id: 894010, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G: () => o,
  b: () => s
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk652215 = require("./652215.js");

function s(e, t) {
  r.Bo.patch({
    url: a.Rsh.GAME_NOTIFICATION_SETTING_UPDATE(e),
    body: {
      muted: t
    },
    rejectWithError: true
  }).then(e => {
    let {
      body: t
    } = e;
    i.h.dispatch({
      type: "REPLACE_GAME_MENTION_SETTINGS",
      settings: t
    })
  })
}
async function o() {
  await r.Bo.get({
    url: a.Rsh.GAME_NOTIFICATION_SETTINGS,
    rejectWithError: true
  }).then(e => {
    let {
      body: t
    } = e;
    i.h.dispatch({
      type: "REPLACE_GAME_MENTION_SETTINGS",
      settings: t
    })
  })
}