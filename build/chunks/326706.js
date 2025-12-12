/** Chunk was on 193 **/
/** chunk id: 326706, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  W: () => s
});
var Chunk473749 = require("./473749.js"),
  Chunk22382 = require("./22382.js"),
  Chunk747071 = require("./747071.js"),
  Chunk469121 = require("./469121.js");

function s(e) {
  let {
    isPlaying: t,
    playSound: n,
    preloadSound: s
  } = (0, l.Z)(null != e ? (0, r.Z)(e.soundId) : null);
  return a.useEffect(() => {
    null != e && s()
  }, [e, s]), {
    isPlaying: t,
    playSound: a.useCallback(() => {
      var t;
      return !!n({
        volume: (0, i.Z)(null != (t = null == e ? true : e.volume) ? t : 1)
      })
    }, [n, null == e ? true : e.volume])
  }
}