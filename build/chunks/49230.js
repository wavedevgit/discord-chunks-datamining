/** Chunk was on 1272 **/
/** chunk id: 49230, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $: () => f,
  h: () => h
}), require("./388685.js");
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk46973 = require("./46973.js"),
  Chunk839514 = require("./839514.js"),
  Chunk399882 = require("./399882.js"),
  Chunk545511 = require("./545511.js"),
  Chunk131951 = require("./131951.js"),
  Chunk747071 = require("./747071.js");
let d = new Map;
async function p(e) {
  let t = d.get(e);
  if (null != t) return t;
  let n = await (await fetch(e)).arrayBuffer(),
    r = (0, a.N)(),
    i = await (null == r ? true : r.decodeAudioData(n));
  return null != i && d.set(e, i), i
}

function f(e) {
  let {
    soundKey: t,
    soundURL: n,
    soundVolume: r,
    reportSoundStartedPlaying: a
  } = e;
  return new Promise(async e => {
    let s = await p(n);
    null == s && e(), c.Z.getMediaEngine().eachConnection(n => {
      n.context === l.Yn.DEFAULT && (a(), i()(null != s, "audioBuffer cannot be null here"), n.startSamplesLocalPlayback(t, s, r, () => {
        e()
      }))
    })
  })
}

function h(e, t) {
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
    let a = new(await (0, o.Z)(r));
    a.src = r, a.volume = (0, u.Z)(i), a.addEventListener(a instanceof s.Z.OGVPlayer ? "loadedmetadata" : "canplaythrough", () => {
      l(), t.set(n, a), a.play()
    }), a.addEventListener("ended", () => {
      t.delete(n), a.src = "", e()
    })
  })
}