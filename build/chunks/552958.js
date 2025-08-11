/** Chunk was on 95626 **/
/** chunk id: 552958, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk460181 = require("./460181.js"),
  Chunk974180 = require("./974180.js");

function c() {
  let [e, n] = Chunk73800.useState(), t = Chunk73800.useRef(false);
  return {
    playSound: Chunk73800.useCallback(e => {
      n(e), a.GN(o.Ay, o.yk, () => {
        clearTimeout(t.current), t.current = setTimeout(() => {
          n(true)
        }, 500)
      }, e)
    }, []),
    isPlaying: null != module,
    soundpackPlaying: module
  }
}