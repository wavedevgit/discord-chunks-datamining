/** Chunk was on 56035 **/
/** chunk id: 586826, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  p: () => o
});
var Chunk574583 = require("./574583.js"),
  Chunk51835 = require("./51835.js"),
  Chunk731965 = require("./731965.js"),
  Chunk174727 = require("./174727.js");
let s = (0, Chunk51835.F)(e => ({
  audio: null,
  file: null,
  loading: false,
  loadAudioFromFile: async n => {
    if ((0, i.j)(() => e({
        file: n,
        audio: null,
        loading: null != n
      })), null == n) return;
    let t = await (0, r.lj)(n);
    null != t && (0, i.j)(() => e({
      audio: t,
      loading: false
    }))
  },
  maxVolume: 1,
  setMaxVolume: n => {
    (0, i.j)(() => e({
      maxVolume: n
    }))
  }
}));

function o() {
  return s(e => ({
    audio: e.audio,
    file: e.file,
    loading: e.loading,
    loadAudioFromFile: e.loadAudioFromFile,
    maxVolume: e.maxVolume,
    setMaxVolume: e.setMaxVolume
  }), Chunk574583.X)
}