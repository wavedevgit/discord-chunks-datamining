/** Chunk was on 76892 **/
/** chunk id: 326706, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  W: () => s
});
var Chunk647438 = require("./647438.js"),
  Chunk22382 = require("./22382.js"),
  Chunk747071 = require("./747071.js"),
  Chunk469121 = require("./469121.js");

function s(e) {
  let {
    isPlaying: t,
    playSound: n,
    preloadSound: s
  } = (0, l.Z)(null != e ? (0, i.Z)(e.soundId) : null);
  return r.useEffect(() => {
    null != e && s()
  }, [e, s]), {
    isPlaying: t,
    playSound: r.useCallback(() => {
      var t;
      return !!n({
        volume: (0, a.Z)(null != (t = null == e ? true : e.volume) ? t : 1)
      })
    }, [n, null == e ? true : e.volume])
  }
}