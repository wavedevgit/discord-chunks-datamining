/** Chunk was on 56035 **/
/** chunk id: 943351, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  V3: () => l,
  bp: () => r,
  hp: () => i,
  nl: () => a
}), require("./49124.js"), require("./388685.js");
let a = {
    waveformBlockWidth: 2,
    waveformBarWidth: .5,
    fineTuningDelay: 500,
    fineTuningScale: 10,
    loudnessThreshold: .3
  },
  l = (e, n) => {
    let t = "".concat(e[0], "-").concat(e[e.length - 1], "-").concat(e.byteLength);
    return "".concat(t, "-").concat(JSON.stringify(n))
  },
  i = e => "".concat(e.name, "-").concat(e.size, "-").concat(e.lastModified),
  r = new Set(["audio/mpeg", "audio/mp3", "audio/wav", "audio/x-wav", "audio/ogg", "video/mp4"])