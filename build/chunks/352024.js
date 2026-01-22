/** Chunk was on 80628 **/
/** chunk id: 352024, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  JX: () => p,
  R_: () => g,
  YK: () => f,
  Yo: () => h
}), require("./65821.js"), require("./927092.js"), require("./212978.js"), require("./321073.js"), require("./648691.js"), require("./393431.js"), require("./752391.js"), require("./532706.js"), require("./42231.js"), require("./232424.js"), require("./757074.js"), require("./949626.js"), require("./767709.js"), require("./65162.js"), require("./201528.js");
var Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk602674 = require("./602674.js"),
  Chunk927813 = require("./927813.js"),
  Chunk796774 = require("./796774.js"),
  Chunk80394 = require("./80394.js");
let u = null;
try {
  let e = (0, Chunk602674.v)();
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
async function p(e) {
  let {
    readPromise: t,
    guildId: n,
    name: a,
    volume: i,
    emojiId: r,
    emojiName: l
  } = e;
  return (0, o.lT)({
    guildId: n,
    name: a,
    sound: await t,
    volume: i,
    emojiId: r,
    emojiName: l
  })
}
async function d(e) {
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
  }), r.encode(a), await r.flush(), new Blob([(0, s.A)(t, {
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
      endMs: a
    } = t, {
      sampleRate: i,
      numberOfChannels: r,
      duration: o
    } = e, s = o * l.A.Millis.SECOND, c = Math.min(a, s);
    if (0 === n && c === s) return e;
    if (null == u) throw Error("Failed to create audio context");
    let f = Math.floor(n / s * e.length),
      p = Math.floor(c / s * e.length),
      d = u.createBuffer(r, p - f, i);
    for (let t = 0; t < r; t++) {
      let n = d.getChannelData(t),
        a = e.getChannelData(t),
        i = 0;
      for (let e = f; e <= p; e++) n[i] = a[e], i++
    }
    return d
  }(await c(e), t);
  return new File([await d(n)], "sound.ogg", {
    type: "audio/ogg"
  })
}
async function g(e) {
  let t = new File([e], "audio.mp4", {
      type: e.type
    }),
    n = await c(t);
  return await d(n)
}