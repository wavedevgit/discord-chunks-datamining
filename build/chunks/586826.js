/** Chunk was on 56035 **/
/** chunk id: 586826, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  p: () => s
});
var Chunk524825 = require("./524825.js"),
  Chunk131193 = require("./131193.js"),
  Chunk731965 = require("./731965.js"),
  Chunk174727 = require("./174727.js");
let o = (0, Chunk131193.F)(e => ({
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

function s() {
  return o(e => ({
    audio: e.audio,
    file: e.file,
    loading: e.loading,
    loadAudioFromFile: e.loadAudioFromFile,
    maxVolume: e.maxVolume,
    setMaxVolume: e.setMaxVolume
  }), Chunk524825.X)
}