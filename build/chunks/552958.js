/** Chunk was on 57789 **/
/** chunk id: 552958, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk460181 = require("./460181.js"),
  Chunk974180 = require("./974180.js");

function a() {
  let [e, t] = Chunk73800.useState(), n = Chunk73800.useRef(false);
  return {
    playSound: Chunk73800.useCallback(e => {
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