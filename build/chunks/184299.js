/** Chunk was on web.js **/
/** chunk id: 184299, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => y,
  iF: () => E,
  iw: () => g,
  km: () => b
});
var Chunk690775 = require("./690775.js"),
  Chunk748521 = require("./748521.js"),
  Chunk731965 = require("./731965.js"),
  Chunk433517 = require("./433517.js");

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

function d(e, t) {
  if (null == e) return {};
  var n, r, i = f(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function f(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function p(e, t) {
  if ("object" !== m(e) || null === e) return e;
  var n = e[Symbol.toPrimitive];
  if (true !== n) {
    var r = n.call(e, t || "default");
    if ("object" !== m(r)) return r;
    throw TypeError("@@toPrimitive must return a primitive value.")
  }
  return ("string" === t ? String : Number)(e)
}

function _(e) {
  var t = p(e, "string");
  return "symbol" === m(t) ? t : String(t)
}

function m(e) {
  return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
}
let h = .3;
var g = function(e) {
    return e.UNKNOWN = "UNKNOWN", e.NOT_STARTED = "NOT_STARTED", e.IN_PROGRESS = "IN_PROGRESS", e.COMPLETED = "COMPLETED", e
  }({}),
  E = function(e) {
    return e.NONE = "NONE", e.FETCHING = "FETCHING", e.SUCCESS = "SUCCESS", e.FAILURE = "FAILURE", e
  }({});
let b = (0, Chunk748521.F)()((0, Chunk690775.tJ)((e, t) => ({
    volume: h,
    muted: false,
    transcriptEnabled: false,
    captionEnabled: false,
    fullScreenEnabled: false,
    videoProgress: {},
    transcript: null,
    setVolume: t => {
      (0, a.j)(() => e({
        volume: t
      }))
    },
    setMuted: t => {
      (0, a.j)(() => e({
        muted: t
      }))
    },
    setVideoProgress: (n, r, i) => {
      var o, s;
      let c = Math.max(null != (s = null == (o = t().videoProgress[n]) ? true : o.maxTimestampSec) ? s : 0, Math.floor(r));
      (0, a.j)(() => e({
        videoProgress: u(l({}, t().videoProgress), {
          [n]: {
            timestampSec: r,
            duration: i,
            maxTimestampSec: c
          }
        })
      }))
    },
    setTranscriptEnabled: t => {
      (0, a.j)(() => e({
        transcriptEnabled: t
      }))
    },
    setCaptionEnabled: t => {
      (0, a.j)(() => e({
        captionEnabled: t
      }))
    },
    setFullScreenEnabled: t => {
      (0, a.j)(() => e({
        fullScreenEnabled: t
      }))
    },
    getVideoProgress: e => t().videoProgress[e],
    getVideoProgressState: e => {
      let n = t().videoProgress[e];
      return null == n ? "UNKNOWN" : 0 === n.timestampSec ? "NOT_STARTED" : n.timestampSec >= n.duration ? "COMPLETED" : "IN_PROGRESS"
    },
    resetQuest: n => {
      (0, a.j)(() => {
        let r = t().videoProgress,
          {
            [n]: i
          } = r;
        e({
          videoProgress: d(r, [n].map(_))
        })
      })
    },
    setTranscriptAsset: t => {
      (0, a.j)(() => {
        e({
          transcript: t
        })
      })
    }
  }), {
    name: "videoQuestUIState",
    storage: (0, Chunk690775.FL)(() => ({
      getItem: e => {
        var t;
        return null != (t = o.K.get(e)) ? t : null
      },
      setItem: (e, t) => o.K.set(e, t),
      removeItem: e => o.K.remove(e)
    })),
    partialize: e => ({
      volume: e.volume,
      muted: e.muted,
      videoProgress: e.videoProgress
    }),
    version: 0
  })),
  y = b