/** Chunk was on 14953 **/
/** chunk id: 600518, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  v: () => i,
  z: () => l
});
var Chunk570140 = require("./570140.js");

function i(e) {
  r.Z.dispatch({
    type: "STAGE_MUSIC_MUTE",
    muted: e
  })
}

function l(e) {
  r.Z.dispatch({
    type: "STAGE_MUSIC_PLAY",
    play: e
  })
}