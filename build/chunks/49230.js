/** Chunk was on 1272 **/
/** chunk id: 49230, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $: () => h,
  h: () => g
}), require("./388685.js");
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk46973 = require("./46973.js"),
  Chunk304809 = require("./304809.js"),
  Chunk399882 = require("./399882.js"),
  Chunk545511 = require("./545511.js"),
  Chunk131951 = require("./131951.js"),
  Chunk747071 = require("./747071.js");
let d = null;
try {
  d = (0, Chunk304809.N)()
} catch (e) {}
let p = new Map;
async function f(e) {
  let t = p.get(e);
  if (null != t) return t;
  let n = await (await fetch(e)).arrayBuffer(),
    r = await (null == d ? true : d.decodeAudioData(n));
  return null != r && p.set(e, r), r
}

function h(e) {
  let {
    soundKey: t,
    soundURL: n,
    soundVolume: r,
    reportSoundStartedPlaying: a
  } = e;
  return new Promise(async e => {
    let o = await f(n);
    null == o && e(), c.Z.getMediaEngine().eachConnection(n => {
      n.context === l.Yn.DEFAULT && (a(), i()(null != o, "audioBuffer cannot be null here"), n.startSamplesLocalPlayback(t, o, r, () => {
        e()
      }))
    })
  })
}

function g(e, t) {
  let {
    soundKey: n,
    soundURL: r,
    soundVolume: i,
    reportSoundStartedPlaying: l
  } = e, a = t.get(n);
  if (null != a) {
    a.currentTime = 0;
    return
  }
  return new Promise(async e => {
    let a = new(await (0, s.Z)(r));
    a.src = r, a.volume = (0, u.Z)(i), a.addEventListener(a instanceof o.Z.OGVPlayer ? "loadedmetadata" : "canplaythrough", () => {
      l(), t.set(n, a), a.play()
    }), a.addEventListener("ended", () => {
      t.delete(n), a.src = "", e()
    })
  })
}