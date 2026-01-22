/** Chunk was on web.js **/
/** chunk id: 189551, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G: () => i,
  K: () => a
});
var Chunk73153 = require("./73153.js");
let i = e => {
  r.h.dispatch({
    type: "TOGGLE_GUILD_EXPANDED_STATE",
    guildId: e
  })
};

function a(e) {
  r.h.dispatch({
    type: "EMOJI_INTERACTION_INITIATED",
    interaction: e
  })
}