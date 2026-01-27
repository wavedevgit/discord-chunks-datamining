/** Chunk was on 19418 **/
/** chunk id: 819744, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  g: () => l
});
var Chunk562465 = require("./562465.js"),
  Chunk652215 = require("./652215.js");

function l(e) {
  let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : r.lAJ.GUILD_DEADCHAT_REVIVE_PROMPT;
  i.Bo.post({
    url: r.Rsh.FORCE_SEND_PROMPT(e),
    body: {
      prompt_type: n
    },
    rejectWithError: true
  })
}