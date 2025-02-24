/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
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