/** Chunk was on 71611 (f97ce343811d4d7d.js) **/
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