/** Chunk was on 21738 **/
/** chunk id: 857179, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G: () => f,
  o: () => h
}), require("./896048.js"), require("./65821.js");
var Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk205693 = require("./205693.js"),
  Chunk602674 = require("./602674.js"),
  Chunk76788 = require("./76788.js"),
  Chunk536184 = require("./536184.js"),
  Chunk430452 = require("./430452.js"),
  Chunk904054 = require("./904054.js");
let d = new Map;
async function p(e) {
  let t = d.get(e);
  if (null != t) return t;
  let n = await (await fetch(e)).arrayBuffer(),
    r = (0, a.v)(),
    i = await (null == r ? true : r.decodeAudioData(n));
  return null != i && d.set(e, i), i
}

function h(e) {
  let {
    soundKey: t,
    soundURL: n,
    soundVolume: r,
    reportSoundStartedPlaying: a
  } = e;
  return new Promise(async (e, s) => {
    let o = await p(n);
    null == o && e(), c.A.getMediaEngine().eachConnection(n => {
      n.context === l.x.DEFAULT && (a(), i()(null != o, "audioBuffer cannot be null here"), n.startSamplesLocalPlayback(t, o, r, (t, n) => {
        0 !== t ? s(Error("".concat(n))) : e()
      }))
    })
  })
}

function f(e, t) {
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
    let a = new(await (0, o.A)(r));
    a.src = r, a.volume = (0, u.A)(i), a.addEventListener(a instanceof s.A.OGVPlayer ? "loadedmetadata" : "canplaythrough", () => {
      l(), t.set(n, a), a.play()
    }), a.addEventListener("ended", () => {
      t.delete(n), a.src = "", e()
    })
  })
}