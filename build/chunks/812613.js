/** Chunk was on 32157 **/
/** chunk id: 812613, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  NF: () => g,
  Zk: () => f,
  bb: () => d,
  kV: () => p
}), require("./415506.js"), require("./644351.js"), require("./146733.js"), require("./539854.js"), require("./17294.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./410992.js");
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
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
async function f(e) {
  var t;
  let n = await (t = t => {
    t.readAsDataURL(e)
  }, new Promise((e, n) => {
    let a = new FileReader,
      i = () => {
        a.removeEventListener("load", i), a.removeEventListener("error", n), e(a.result)
      };
    a.addEventListener("load", i), a.addEventListener("error", n), t(a)
  }));
  if ("string" != typeof n) throw Error("Unexpected file type");
  return n
}
async function d(e) {
  let {
    readPromise: t,
    guildId: n,
    name: a,
    volume: i,
    emojiId: r,
    emojiName: l
  } = e;
  return (0, o.Dx)({
    guildId: n,
    name: a,
    sound: await t,
    volume: i,
    emojiId: r,
    emojiName: l
  })
}
async function h(e) {
  let t = [],
    n = function(e) {
      if (1 === e.length) return e[0];
      if (2 === e.length) {
        let t = e[0],
          n = e[1],
          a = [];
        for (let e = 0; e < t.length; e++) a.push(t[e]), a.push(n[e]);
        let i = new Float32Array(a.length);
        return i.set(a), i
      }
      throw Error("Only handles up to 2 channels")
    }(function(e) {
      let {
        numberOfChannels: t
      } = e, n = [];
      for (let a = 0; a < t; a++) n.push(e.getChannelData(a));
      return n
    }(e)),
    a = new AudioData({
      format: "f32",
      sampleRate: e.sampleRate,
      numberOfFrames: e.length,
      numberOfChannels: e.numberOfChannels,
      timestamp: 1e3 * e.duration * 1e3,
      data: n
    }),
    r = new AudioEncoder({
      output: function(n) {
        i()(null != n.duration, "Chunk duration must not be null");
        let a = n.duration / 1e6 * e.sampleRate,
          r = new Uint8Array(n.byteLength);
        n.copyTo(r), t.push({
          buffer: r,
          numSamples: a
        })
      },
      error: e => {
        throw Error("Audio encoding error: ".concat(e.message))
      }
    });
  return r.configure({
    codec: "opus",
    sampleRate: e.sampleRate,
    numberOfChannels: e.numberOfChannels
  }), r.encode(a), await r.flush(), new Blob([(0, s.Z)(t, {
    channelCount: e.numberOfChannels,
    inputSampleRate: e.sampleRate,
    outputGain: 0,
    channelMappingFamily: 0
  })], {
    type: "audio/ogg"
  })
}
async function p(e, t) {
  let n = function(e, t) {
    let {
      startMs: n,
      endMs: a
    } = t, {
      sampleRate: i,
      numberOfChannels: r,
      duration: o
    } = e, s = o * l.Z.Millis.SECOND, c = Math.min(a, s);
    if (0 === n && c === s) return e;
    if (null == u) throw Error("Failed to create audio context");
    let f = Math.floor(n / s * e.length),
      d = Math.floor(c / s * e.length),
      h = u.createBuffer(r, d - f, i);
    for (let t = 0; t < r; t++) {
      let n = h.getChannelData(t),
        a = e.getChannelData(t),
        i = 0;
      for (let e = f; e <= d; e++) n[i] = a[e], i++
    }
    return h
  }(await c(e), t);
  return new File([await h(n)], "sound.ogg", {
    type: "audio/ogg"
  })
}
async function g(e) {
  let t = new File([e], "audio.mp4", {
      type: e.type
    }),
    n = await c(t);
  return await h(n)
}