/** Chunk was on 94709 **/
/** chunk id: 438144, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  M: () => l,
  s: () => i
});
var Chunk570140 = require("./570140.js");

function i(e) {
  r.Z.dispatch({
    type: "VOICE_CATEGORY_EXPAND",
    guildId: e,
    expand: true
  })
}

function l(e) {
  r.Z.dispatch({
    type: "VOICE_CATEGORY_COLLAPSE",
    guildId: e,
    expand: false
  })
}