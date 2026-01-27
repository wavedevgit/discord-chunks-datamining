/** Chunk was on 41727 **/
/** chunk id: 211059, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => l
});
var Chunk73153 = require("./73153.js");
let l = {
  viewPrompt: function(e, t) {
    r.h.wait(() => {
      r.h.dispatch({
        type: "GUILD_PROMPT_VIEWED",
        prompt: e,
        guildId: t
      })
    })
  }
}