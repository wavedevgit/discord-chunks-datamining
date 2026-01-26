/** Chunk was on 97887 **/
/** chunk id: 879124, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E: () => i,
  T: () => l
});
var Chunk73153 = require("./73153.js");

function l(e) {
  r.h.dispatch({
    type: "VOICE_CATEGORY_EXPAND",
    guildId: e,
    expand: true
  })
}

function i(e) {
  r.h.dispatch({
    type: "VOICE_CATEGORY_COLLAPSE",
    guildId: e,
    expand: false
  })
}