/** Chunk was on 56035 **/
/** chunk id: 812613, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Zk: () => d,
  bb: () => f,
  kV: () => h
}), require("./415506.js"), require("./644351.js"), require("./146733.js"), require("./539854.js"), require("./17294.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./410992.js");
var Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk304809 = require("./304809.js"),
  Chunk70956 = require("./70956.js"),
  Chunk208049 = require("./208049.js"),
  Chunk419202 = require("./419202.js");
let u = null;
try {
  let e = (0, Chunk304809.N)();
  if (null == module) throw Error("Failed to create media audio context");
  u = new AudioContext({
    sampleRate: Math.min(module.sampleRate, 48e3)
  })
} catch (e) {}
async function c(e) {
  if (null == u) throw Error("Failed to create audio context");
  let t = await e.arrayBuffer();
  if (!(t instanceof ArrayBuffer)) throw Error("Unexpected file type");
  return u.decodeAudioData(t)
}
async function d(e) {
  var t;
  let n = await (t = t => {
    t.readAsDataURL(e)
  }, new Promise((e, n) => {
    let l = new FileReader,
      a = () => {
        l.removeEventListener("load", a), l.removeEventListener("error", n), e(l.result)
      };
    l.addEventListener("load", a), l.addEventListener("error", n), t(l)
  }));
  if ("string" != typeof n) throw Error("Unexpected file type");
  return n
}
async function f(e) {
  let {
    readPromise: t,
    guildId: n,
    name: l,
    volume: a,
    emojiId: i,
    emojiName: r
  } = e;
  return (0, s.Dx)({
    guildId: n,
    name: l,
    sound: await t,
    volume: a,
    emojiId: i,
    emojiName: r
  })
}
async function m(e) {
  let t = [],
    n = function(e) {
      if (1 === e.length) return e[0];
      if (2 === e.length) {
        let t = e[0],
          n = e[1],
          l = [];
        for (let e = 0; e < t.length; e++) l.push(t[e]), l.push(n[e]);
        let a = new Float32Array(l.length);
        return a.set(l), a
      }
      throw Error("Only handles up to 2 channels")
    }(function(e) {
      let {
        numberOfChannels: t
      } = e, n = [];
      for (let l = 0; l < t; l++) n.push(e.getChannelData(l));
      return n
    }(e)),
    l = new AudioData({
      format: "f32",
      sampleRate: e.sampleRate,
      numberOfFrames: e.length,
      numberOfChannels: e.numberOfChannels,
      timestamp: 1e3 * e.duration * 1e3,
      data: n
    }),
    i = new AudioEncoder({
      output: function(n) {
        a()(null != n.duration, "Chunk duration must not be null");
        let l = n.duration / 1e6 * e.sampleRate,
          i = new Uint8Array(n.byteLength);
        n.copyTo(i), t.push({
          buffer: i,
          numSamples: l
        })
      },
      error: e => {
        throw Error("Audio encoding error: ".concat(e.message))
      }
    });
  return i.configure({
    codec: "opus",
    sampleRate: e.sampleRate,
    numberOfChannels: e.numberOfChannels
  }), i.encode(l), await i.flush(), new Blob([(0, o.Z)(t, {
    channelCount: e.numberOfChannels,
    inputSampleRate: e.sampleRate,
    outputGain: 0,
    channelMappingFamily: 0
  })], {
    type: "audio/ogg"
  })
}
async function h(e, t) {
  let n = function(e, t) {
    let {
      startMs: n,
      endMs: l
    } = t, {
      sampleRate: a,
      numberOfChannels: i,
      duration: s
    } = e, o = s * r.Z.Millis.SECOND, c = Math.min(l, o);
    if (0 === n && c === o) return e;
    if (null == u) throw Error("Failed to create audio context");
    let d = Math.floor(n / o * e.length),
      f = Math.floor(c / o * e.length),
      m = u.createBuffer(i, f - d, a);
    for (let t = 0; t < i; t++) {
      let n = m.getChannelData(t),
        l = e.getChannelData(t),
        a = 0;
      for (let e = d; e <= f; e++) n[a] = l[e], a++
    }
    return m
  }(await c(e), t);
  return new File([await m(n)], "sound.ogg", {
    type: "audio/ogg"
  })
}