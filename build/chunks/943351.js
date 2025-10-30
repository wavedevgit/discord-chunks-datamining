/** Chunk was on 98920 **/
/** chunk id: 943351, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  V3: () => a,
  bp: () => r,
  hp: () => i,
  nl: () => l
}), require("./49124.js"), require("./388685.js");
let l = {
    waveformBlockWidth: 2,
    waveformBarWidth: .5,
    fineTuningDelay: 500,
    fineTuningScale: 10,
    loudnessThreshold: .3
  },
  a = (e, t) => {
    let n = "".concat(e[0], "-").concat(e[e.length - 1], "-").concat(e.byteLength);
    return "".concat(n, "-").concat(JSON.stringify(t))
  },
  i = e => "".concat(e.name, "-").concat(e.size, "-").concat(e.lastModified),
  r = new Set(["audio/mpeg", "audio/mp3", "audio/wav", "audio/x-wav", "audio/ogg", "video/mp4"])