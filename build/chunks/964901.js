/** Chunk was on 46875 **/
/** chunk id: 964901, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  E: () => s
});
var Chunk64700 = require("./64700.js"),
  Chunk102597 = require("./102597.js"),
  Chunk904054 = require("./904054.js"),
  Chunk584014 = require("./584014.js");

function s(e) {
  let {
    isPlaying: t,
    playSound: n,
    preloadSound: s
  } = (0, a.A)(null != e ? (0, r.A)(e.soundId) : null);
  return l.useEffect(() => {
    null != e && s()
  }, [e, s]), {
    isPlaying: t,
    playSound: l.useCallback(() => {
      var t;
      return !!n({
        volume: (0, i.A)(null != (t = null == e ? true : e.volume) ? t : 1)
      })
    }, [n, null == e ? true : e.volume])
  }
}