/** Chunk was on 57789 **/
/** chunk id: 552958, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk460181 = require("./460181.js"),
  Chunk974180 = require("./974180.js");

function a() {
  let [e, t] = Chunk647438.useState(), n = Chunk647438.useRef(false);
  return {
    playSound: Chunk647438.useCallback(e => {
      t(e), i.GN(l.Ay, l.yk, () => {
        clearTimeout(n.current), n.current = setTimeout(() => {
          t(true)
        }, 500)
      }, e)
    }, []),
    isPlaying: null != module,
    soundpackPlaying: module
  }
}