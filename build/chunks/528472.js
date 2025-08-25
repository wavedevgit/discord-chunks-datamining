/** Chunk was on web.js **/
/** chunk id: 528472, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./415506.js"), require("./49124.js");
var Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let a = "mp4a.40.2",
  s = "aac",
  l = 128e3,
  c = 25e5;
class u {
  static getInstance() {
    return (null === u.instance || true === u.instance) && (u.instance = new u), u.instance
  }
  async checkCodecCapability(e, t, n, r, i) {
    try {
      var o, c, u, d;
      let f = {
          type: "file",
          video: {
            contentType: "video/mp4;codecs=".concat(e),
            width: n.width,
            height: n.height,
            bitrate: i,
            framerate: r
          },
          audio: {
            contentType: "audio/mp4;codecs=mp4a.40.2",
            channels: 2,
            samplerate: 48e3,
            bitrate: l
          }
        },
        _ = await (null == (o = navigator.mediaCapabilities) ? true : o.decodingInfo(f));
      return {
        videoCodec: e,
        videoProfile: t,
        resolution: n,
        framerate: r,
        videoBitrate: i,
        audioCodec: a,
        audioProfile: s,
        audioBitrate: l,
        capability: {
          supported: null != (c = null == _ ? true : _.supported) && c,
          smooth: null != (u = null == _ ? true : _.smooth) && u,
          powerEfficient: null != (d = null == _ ? true : _.powerEfficient) && d
        }
      }
    } catch (o) {
      return {
        videoCodec: e,
        videoProfile: t,
        resolution: n,
        framerate: r,
        videoBitrate: i,
        audioCodec: a,
        audioProfile: s,
        audioBitrate: l,
        capability: {
          supported: false,
          smooth: false,
          powerEfficient: false
        }
      }
    }
  }
  detectCapabilities() {
    if (null !== this.capabilities && true !== this.capabilities) return Promise.resolve(this.capabilities);
    if (this.isDetecting) {
      if (null === this.detectionPromise || true === this.detectionPromise) throw Error("Detection promise is null while isDetecting is true");
      return this.detectionPromise
    }
    return this.isDetecting = true, this.detectionPromise = (async () => {
      if (true === navigator.mediaCapabilities) return this.hasAttemptedDetection = true, {
        capabilities: [],
        timestamp: performance.now()
      };
      let e = performance.now(),
        t = [await this.checkCodecCapability("avc1.42E01E", "baseline", {
          width: 1920,
          height: 1080
        }, 30, c), await this.checkCodecCapability("avc1.4D401E", "main", {
          width: 1920,
          height: 1080
        }, 60, c), await this.checkCodecCapability("avc1.64001E", "high", {
          width: 1920,
          height: 1080
        }, 60, c), await this.checkCodecCapability("avc1.58A01E", "extended", {
          width: 1920,
          height: 1080
        }, 30, c), await this.checkCodecCapability("avc1.6E401E", "high10", {
          width: 1920,
          height: 1080
        }, 30, c), await this.checkCodecCapability("avc1.7A401E", "high422", {
          width: 1920,
          height: 1080
        }, 30, c), await this.checkCodecCapability("avc1.7C401E", "high444", {
          width: 1920,
          height: 1080
        }, 30, c), await this.checkCodecCapability("hvc1.1.6.L93.B0", "main", {
          width: 1920,
          height: 1080
        }, 30, c), await this.checkCodecCapability("hvc1.2.6.L93.B0", "main10", {
          width: 1920,
          height: 1080
        }, 30, c), await this.checkCodecCapability("hvc1.3.6.L93.B0", "main12", {
          width: 1920,
          height: 1080
        }, 30, c), await this.checkCodecCapability("hvc1.4.6.L93.B0", "main444", {
          width: 1920,
          height: 1080
        }, 30, c), await this.checkCodecCapability("hvc1.5.6.L93.B0", "main44410", {
          width: 1920,
          height: 1080
        }, 30, c), await this.checkCodecCapability("hvc1.1.6.L93.B0", "main_level5", {
          width: 1920,
          height: 1080
        }, 30, c), await this.checkCodecCapability("hvc1.1.6.L93.B0", "main_level4", {
          width: 1280,
          height: 720
        }, 30, c / 2), await this.checkCodecCapability("hvc1.2.6.L93.B0", "main10_level5", {
          width: 1920,
          height: 1080
        }, 30, c), await this.checkCodecCapability("hvc1.2.6.L93.B0", "main10_level4", {
          width: 1280,
          height: 720
        }, 30, c / 2), await this.checkCodecCapability("hvc1.1.6.L93.H0", "main_high_tier", {
          width: 1920,
          height: 1080
        }, 30, c), await this.checkCodecCapability("hvc1.1.6.L93.M0", "main_main_tier", {
          width: 1920,
          height: 1080
        }, 30, c), await this.checkCodecCapability("hvc1.1.6.L93.B0", "main_8bit", {
          width: 1920,
          height: 1080
        }, 30, c), await this.checkCodecCapability("hvc1.1.6.L93.B1", "main_10bit", {
          width: 1920,
          height: 1080
        }, 30, c), await this.checkCodecCapability("av01.0.04M.08", "main", {
          width: 1920,
          height: 1080
        }, 30, c), await this.checkCodecCapability("av01.1.13H.08", "high", {
          width: 1920,
          height: 1080
        }, 30, c), await this.checkCodecCapability("av01.2.13M.08", "professional", {
          width: 1920,
          height: 1080
        }, 30, c), await this.checkCodecCapability("avc1.42E01E", "baseline", {
          width: 1280,
          height: 720
        }, 30, c / 2), await this.checkCodecCapability("hvc1.1.6.L93.B0", "main", {
          width: 1280,
          height: 720
        }, 30, c / 2), await this.checkCodecCapability("av01.0.04M.08", "main", {
          width: 1280,
          height: 720
        }, 30, c / 2), await this.checkCodecCapability("hvc1.2.6.L93.B0", "main10hdr", {
          width: 1920,
          height: 1080
        }, 30, 2 * c), await this.checkCodecCapability("av01.1.04H.08", "high", {
          width: 1920,
          height: 1080
        }, 30, 2 * c), await this.checkCodecCapability("hvc1.2.6.L93.B0", "main10hdrplus", {
          width: 1920,
          height: 1080
        }, 30, 2 * c)],
        n = performance.now() - module,
        o = {
          capabilities: exports,
          timestamp: performance.now()
        };
      return Chunk626135.default.track(Chunk981631.rMx.MEDIA_VIDEO_CAPABILITIES_DETECTED, {
        detection_duration_ms: require,
        capabilities_json: JSON.stringify(exports)
      }), this.capabilities = o, this.isDetecting = false, this.detectionPromise = null, this.hasAttemptedDetection = true, o
    })(), this.detectionPromise
  }
  async getCapabilities() {
    return this.hasAttemptedDetection && (null === this.capabilities || true === this.capabilities) ? {
      capabilities: [],
      timestamp: performance.now()
    } : await this.detectCapabilities()
  }
  isCodecSupported(e, t) {
    var n;
    if (null === this.capabilities || true === this.capabilities) returnfalse;
    let r = this.capabilities.capabilities.find(n => n.videoCodec === e && n.videoProfile === t);
    return null != (n = null == r ? true : r.capability.supported) && n
  }
  constructor() {
    o(this, "capabilities", null), o(this, "isDetecting", false), o(this, "detectionPromise", null), o(this, "hasAttemptedDetection", false)
  }
}
o(u, "instance", true);
let d = u