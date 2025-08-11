/** Chunk was on web.js **/
/** chunk id: 255963, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D: () => i,
  x: () => o
});
var Chunk570140 = require("./570140.js");
let i = e => {
  r.Z.dispatch({
    type: "TOGGLE_GUILD_EXPANDED_STATE",
    guildId: e
  })
};

function o(e) {
  r.Z.dispatch({
    type: "EMOJI_INTERACTION_INITIATED",
    interaction: e
  })
}