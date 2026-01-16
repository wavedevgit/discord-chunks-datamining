/** Chunk was on 56035 **/
/** chunk id: 586826, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  p: () => o
});
var Chunk782425 = require("./782425.js"),
  Chunk524550 = require("./524550.js"),
  Chunk731965 = require("./731965.js"),
  Chunk174727 = require("./174727.js");
let s = (0, Chunk524550.F)(e => ({
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
  }), l.X)
}