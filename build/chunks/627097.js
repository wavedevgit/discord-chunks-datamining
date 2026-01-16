/** Chunk was on web.js **/
/** chunk id: 627097, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => f
});
var Chunk121168 = require("./121168.js"),
  Chunk110859 = require("./110859.js"),
  Chunk805422 = require("./805422.js"),
  Chunk390551 = require("./390551.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      s(e, t, n[t])
    })
  }
  return e
}

function c(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function u(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let d = .2,
  f = (0, Chunk121168.U)()((0, Chunk110859.tJ)((e, t) => ({
    songIndex: 0,
    genre: o.AL.SLEEPY,
    playRadio: true,
    globalMute: false,
    volumes: {
      radio: d,
      environment: d,
      campfire: d
    },
    setSongIndex: t => e({
      songIndex: t
    }),
    setGenre: t => e({
      genre: t,
      songIndex: 0
    }),
    setPlayRadio: t => e({
      playRadio: t
    }),
    setGlobalMute: t => e({
      globalMute: t
    }),
    setVolume: (t, n) => e(e => ({
      volumes: u(l({}, e.volumes), {
        [t]: n
      })
    })),
    playNextSong: () => {
      let n = t(),
        r = a.Z.getSongs(n.genre);
      if (null == r) return;
      let i = r.length;
      0 !== i && e({
        songIndex: (n.songIndex + 1) % i
      })
    },
    playPrevSong: () => {
      let n = t(),
        r = a.Z.getSongs(n.genre);
      if (null == r) return;
      let i = r.length;
      0 !== i && e({
        songIndex: n.songIndex - 1 >= 0 ? n.songIndex - 1 : i - 1
      })
    },
    resetPlayback: () => e({
      songIndex: 0,
      playRadio: true
    })
  }), {
    name: "haven-audio-storage",
    partialize: e => ({
      globalMute: e.globalMute,
      genre: e.genre,
      volumes: e.volumes
    })
  }))