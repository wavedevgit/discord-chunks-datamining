/** Chunk was on 71611 (6f02c158d7813e32.js) **/
n.d(t, {
  Z: () => i
});
var r = n(570140);
let i = {
  viewPrompt: function(e, t) {
    r.Z.wait(() => {
      r.Z.dispatch({
        type: "GUILD_PROMPT_VIEWED",
        prompt: e,
        guildId: t
      })
    })
  }
}