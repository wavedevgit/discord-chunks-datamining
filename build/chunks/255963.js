/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  D: () => i,
  x: () => o
});
var r = n(570140);
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