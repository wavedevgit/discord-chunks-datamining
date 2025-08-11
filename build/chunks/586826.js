/** Chunk was on 56035 **/
/** chunk id: 586826, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  p: () => o
});
var Chunk94171 = require("./94171.js"),
  Chunk362383 = require("./362383.js"),
  Chunk731965 = require("./731965.js"),
  Chunk174727 = require("./174727.js");
let s = (0, Chunk362383.F)(e => ({
  audio: null,
  file: null,
  loading: false,
  loadAudioFromFile: async t => {
    if ((0, i.j)(() => e({
        file: t,
        audio: null,
        loading: null != t
      })), null == t) return;
    let n = await (0, r.lj)(t);
    null != n && (0, i.j)(() => e({
      audio: n,
      loading: false
    }))
  },
  maxVolume: 1,
  setMaxVolume: t => {
    (0, i.j)(() => e({
      maxVolume: t
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
  }), Chunk94171.X)
}