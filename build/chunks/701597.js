/** Chunk was on web.js **/
/** chunk id: 701597, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  DM: () => c,
  SF: () => d,
  iY: () => f
}), require("./415506.js");
var Chunk966146 = require("./966146.js"),
  Chunk65154 = require("./65154.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function a(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      o(e, t, n[t])
    })
  }
  return e
}

function s(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function l(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : s(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let c = Object.freeze({
  [Chunk65154.Uc.AUTO]: {},
  [Chunk65154.Uc.FULL]: {
    encode: {
      width: 1280,
      height: 720
    }
  }
});
class u {
  constructor(e) {
    if (o(this, "capture", true), o(this, "encode", true), o(this, "bitrateMin", true), o(this, "bitrateMax", true), o(this, "bitrateTarget", true), o(this, "localWant", true), null == e.capture && null == e.encode) throw Error("Invalid arguments.");
    this.capture = null == e.capture ? true : new d(e.capture), this.encode = null == e.encode ? true : new d(e.encode), this.bitrateMin = e.bitrateMin, this.bitrateMax = e.bitrateMax, this.bitrateTarget = e.bitrateTarget, this.localWant = e.localWant
  }
}
class d {
  static equals(e, t) {
    return null == e && null == t || null != e && null != t && e.width === t.width && e.height === t.height && e.framerate === t.framerate
  }
  static extend(e, t) {
    var n, r, i, o, a;
    if (null == e) return t;
    if (null == t) return e;
    let s = null != (r = null != (n = null == t ? true : t.width) ? n : null == e ? true : e.width) ? r : 0,
      l = null != (o = null != (i = null == t ? true : t.height) ? i : null == e ? true : e.height) ? o : 0;
    return {
      width: s,
      height: l,
      framerate: null != (a = null == t ? true : t.framerate) ? a : null == e ? true : e.framerate,
      pixelCount: s * l
    }
  }
  constructor(e) {
    o(this, "width", true), o(this, "height", true), o(this, "framerate", true), o(this, "pixelCount", true), this.width = e.width, this.height = e.height, this.framerate = e.framerate, this.pixelCount = e.width * e.height
  }
}
class f {
  getQuality(e) {
    let t = this.connection.getLocalWant(e),
      n = 0;
    if (null != e) {
      let t = this.connection.getRemoteVideoSinkPixelCount(e);
      if (null != this.lastGoLivePixelCount[e] && this.lastGoLivePixelCount[e] > 0) {
        let r = t / this.lastGoLivePixelCount[e];
        n = r > 1.05 || r < .95 ? t : this.lastGoLivePixelCount[e]
      } else n = t;
      this.lastGoLivePixelCount[e] = n
    }
    let r = this.isStreamContext ? this.getGoliveQuality(t, n) : this.getVideoQuality(t);
    if (null != this.qualityOverwrite) {
      var i, o, a;
      return new u({
        encode: d.extend(r.encode, this.qualityOverwrite.encode),
        capture: d.extend(r.capture, this.qualityOverwrite.capture),
        bitrateMin: null != (i = this.qualityOverwrite.bitrateMin) ? i : r.bitrateMin,
        bitrateMax: null != (o = this.qualityOverwrite.bitrateMax) ? o : r.bitrateMax,
        bitrateTarget: null != (a = this.qualityOverwrite.bitrateTarget) ? a : r.bitrateTarget,
        localWant: r.localWant
      })
    }
    return r
  }
  applyQualityConstraints(e, t) {
    let n = this.getQuality(t);
    return null != n.capture && (e.encodingVideoWidth = n.capture.width, e.encodingVideoHeight = n.capture.height, e.encodingVideoFrameRate = n.capture.framerate, e.captureVideoFrameRate = n.capture.framerate), null != n.encode && (e.remoteSinkWantsMaxFramerate = n.encode.framerate, e.remoteSinkWantsPixelCount = n.encode.pixelCount), null != n.bitrateTarget ? e.encodingVideoBitRate = n.bitrateTarget : e.encodingVideoBitRate = n.bitrateMax, e.encodingVideoMinBitRate = n.bitrateMin, e.encodingVideoMaxBitRate = n.bitrateMax, null != e.encodingVideoBitRate && null != e.encodingVideoMaxBitRate && (e.encodingVideoBitRate = Math.min(e.encodingVideoBitRate, e.encodingVideoMaxBitRate)), {
      quality: n,
      constraints: e
    }
  }
  setQualityOverwrite(e) {
    this.qualityOverwrite = e
  }
  setGoliveQuality(e) {
    var t, n, r;
    this.goliveMaxQuality = new u({
      capture: d.extend(this.goliveMaxQuality.capture, e.capture),
      encode: d.extend(this.goliveMaxQuality.encode, e.encode),
      bitrateMin: null != (t = e.bitrateMin) ? t : this.goliveMaxQuality.bitrateMin,
      bitrateMax: null != (n = e.bitrateMax) ? n : this.goliveMaxQuality.bitrateMax,
      bitrateTarget: null != (r = e.bitrateTarget) ? r : this.goliveMaxQuality.bitrateTarget,
      localWant: this.goliveMaxQuality.localWant
    })
  }
  configGoLiveSimulcast(e, t) {
    this.goliveSimulcastEnabled = e, this.goliveSimulcastLQBitrateMax = t, this.goliveSimulcastLQBitrateTarget = t
  }
  setGoLiveSimulcastLQTargetBitrate(e) {
    this.goliveSimulcastLQBitrateTarget = e
  }
  shouldEnableGoliveSimulcastForHqQuality(e) {
    return !!this.goliveSimulcastEnabled && (0 === e.width && 0 === e.height || e.width * e.height > i.ef * i.ru)
  }
  getVideoQuality(e) {
    let t = this.ladder.getResolution(e),
      n = this.options.videoBitrate.min * t.budgetPortion,
      r = this.options.videoBitrate.max * t.budgetPortion,
      i = this.isMuted ? t.mutedFramerate : t.framerate;
    return new u({
      encode: l(a({}, t), {
        framerate: i
      }),
      capture: {
        width: this.options.videoCapture.width,
        height: this.options.videoCapture.height,
        framerate: this.options.videoCapture.framerate
      },
      bitrateMin: Math.max(n, this.options.videoBitrateFloor),
      bitrateMax: Math.max(r, this.options.videoBitrateFloor),
      localWant: e
    })
  }
  scaleLinearly(e, t, n) {
    return 0 === t ? 0 : e * n / t
  }
  getGoliveQuality(e, t) {
    var n;
    if (this.goliveSimulcastEnabled && e < 100) return this.getGoliveLQQuality();
    if ((null == (n = this.goliveMaxQuality.encode) ? true : n.pixelCount) === true || t >= this.goliveMaxQuality.encode.pixelCount || t <= 0) return this.goliveMaxQuality;
    let r = Math.min(i.fm * this.goliveMaxQuality.encode.pixelCount * this.goliveMaxQuality.encode.framerate, this.goliveMaxQuality.bitrateMax),
      o = this.scaleLinearly(t, this.goliveMaxQuality.encode.pixelCount, this.goliveMaxQuality.bitrateMin),
      a = this.scaleLinearly(t, this.goliveMaxQuality.encode.pixelCount, this.goliveMaxQuality.bitrateMax),
      s = null != this.goliveMaxQuality.bitrateTarget ? this.scaleLinearly(t, this.goliveMaxQuality.encode.pixelCount, this.goliveMaxQuality.bitrateTarget) : true;
    return new u({
      encode: this.goliveMaxQuality.encode,
      capture: this.goliveMaxQuality.capture,
      bitrateMin: Math.max(Math.ceil(o), this.options.videoBitrateFloor),
      bitrateMax: Math.max(Math.ceil(a), r),
      bitrateTarget: null != s ? Math.max(Math.ceil(s), this.options.videoBitrateFloor) : true,
      localWant: e
    })
  }
  getDefaultGoliveQuality() {
    return new u({
      capture: {
        width: 1280,
        height: 720,
        framerate: Chunk65154.Gs
      },
      encode: {
        width: 1280,
        height: 720,
        framerate: Chunk65154.Gs,
        pixelCount: 921600
      },
      bitrateMin: this.options.desktopBitrate.min,
      bitrateMax: this.options.desktopBitrate.max,
      bitrateTarget: this.options.desktopBitrate.target
    })
  }
  getGoliveLQQuality() {
    var e, t, n, r, o, a, s, l, c, d, f, p;
    let _ = Math.min(Chunk65154.ef, null != (s = null == (e = this.goliveMaxQuality.encode) ? true : module.width) ? s : Chunk65154.ef),
      m = Math.min(Chunk65154.ru, null != (l = null == (t = this.goliveMaxQuality.encode) ? true : exports.height) ? l : Chunk65154.ru),
      h = Math.min(Chunk65154.R$, null != (c = null == (n = this.goliveMaxQuality.encode) ? true : require.framerate) ? c : Chunk65154.R$),
      g = Math.min(Chunk65154.ef, null != (d = null == (r = this.goliveMaxQuality.capture) ? true : Chunk966146.width) ? d : Chunk65154.ef);
    return new u({
      capture: {
        width: g,
        height: Math.min(Chunk65154.ru, null != (f = null == (o = this.goliveMaxQuality.capture) ? true : o.height) ? f : Chunk65154.ru),
        framerate: Math.min(Chunk65154.R$, null != (p = null == (a = this.goliveMaxQuality.capture) ? true : a.framerate) ? p : Chunk65154.R$)
      },
      encode: {
        width: _,
        height: m,
        framerate: h,
        pixelCount: _ * m
      },
      bitrateMin: Chunk65154.UC,
      bitrateMax: this.goliveSimulcastLQBitrateMax,
      bitrateTarget: this.goliveSimulcastLQBitrateTarget
    })
  }
  constructor(e, t, n = i.kS) {
    o(this, "contextType", true), o(this, "connection", true), o(this, "options", true), o(this, "isMuted", true), o(this, "qualityOverwrite", true), o(this, "goliveMaxQuality", true), o(this, "goliveSimulcastEnabled", true), o(this, "goliveSimulcastLQBitrateMax", true), o(this, "goliveSimulcastLQBitrateTarget", true), o(this, "isStreamContext", true), o(this, "ladder", true), o(this, "lastGoLivePixelCount", true), this.contextType = e, this.connection = t, this.options = n, this.isMuted = false, this.isStreamContext = this.contextType === i.Yn.STREAM, this.ladder = new r.x(n), this.goliveMaxQuality = this.getDefaultGoliveQuality(), this.goliveSimulcastEnabled = false, this.goliveSimulcastLQBitrateMax = i.pk, this.goliveSimulcastLQBitrateTarget = i.pk, this.lastGoLivePixelCount = {}
  }
}