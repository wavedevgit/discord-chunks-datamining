/** Chunk was on 81985 **/
/** chunk id: 445384, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => i
});
var Chunk570140 = require("./570140.js");
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