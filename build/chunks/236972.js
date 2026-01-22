/** Chunk was on 40556 **/
/** chunk id: 236972, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  L: () => u
});
var Chunk942381 = require("./942381.js"),
  Chunk265690 = require("./265690.js"),
  Chunk121894 = require("./121894.js"),
  Chunk667920 = require("./667920.js");
let s = (0, Chunk265690.h)(e => ({
  audio: null,
  file: null,
  loading: false,
  loadAudioFromFile: async t => {
    if ((0, a.r)(() => e({
        file: t,
        audio: null,
        loading: null != t
      })), null == t) return;
    let n = await (0, r.Xi)(t);
    null != n && (0, a.r)(() => e({
      audio: n,
      loading: false
    }))
  },
  maxVolume: 1,
  setMaxVolume: t => {
    (0, a.r)(() => e({
      maxVolume: t
    }))
  }
}));

function u() {
  return s(e => ({
    audio: e.audio,
    file: e.file,
    loading: e.loading,
    loadAudioFromFile: e.loadAudioFromFile,
    maxVolume: e.maxVolume,
    setMaxVolume: e.setMaxVolume
  }), l.x)
}