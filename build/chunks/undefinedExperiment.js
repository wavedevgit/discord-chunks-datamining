/** Chunk was on 66816 **/
/** chunk id: 10106, original params: e,t,i (module,exports,require) **/
let r;
require.d(exports, {
  ZP: () => ak
});
let s = Number.isFinite || function(e) {
    return "number" == typeof e && isFinite(e)
  },
  a = Number.isSafeInteger || function(e) {
    return "number" == typeof e && Math.abs(e) <= n
  },
  n = Number.MAX_SAFE_INTEGER || 0x1fffffffffffff,
  l = ((y = {}).NETWORK_ERROR = "networkError", y.MEDIA_ERROR = "mediaError", y.KEY_SYSTEM_ERROR = "keySystemError", y.MUX_ERROR = "muxError", y.OTHER_ERROR = "otherError", y),
  o = ((T = {}).KEY_SYSTEM_NO_KEYS = "keySystemNoKeys", T.KEY_SYSTEM_NO_ACCESS = "keySystemNoAccess", T.KEY_SYSTEM_NO_SESSION = "keySystemNoSession", T.KEY_SYSTEM_NO_CONFIGURED_LICENSE = "keySystemNoConfiguredLicense", T.KEY_SYSTEM_LICENSE_REQUEST_FAILED = "keySystemLicenseRequestFailed", T.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED = "keySystemServerCertificateRequestFailed", T.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED = "keySystemServerCertificateUpdateFailed", T.KEY_SYSTEM_SESSION_UPDATE_FAILED = "keySystemSessionUpdateFailed", T.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED = "keySystemStatusOutputRestricted", T.KEY_SYSTEM_STATUS_INTERNAL_ERROR = "keySystemStatusInternalError", T.KEY_SYSTEM_DESTROY_MEDIA_KEYS_ERROR = "keySystemDestroyMediaKeysError", T.KEY_SYSTEM_DESTROY_CLOSE_SESSION_ERROR = "keySystemDestroyCloseSessionError", T.KEY_SYSTEM_DESTROY_REMOVE_SESSION_ERROR = "keySystemDestroyRemoveSessionError", T.MANIFEST_LOAD_ERROR = "manifestLoadError", T.MANIFEST_LOAD_TIMEOUT = "manifestLoadTimeOut", T.MANIFEST_PARSING_ERROR = "manifestParsingError", T.MANIFEST_INCOMPATIBLE_CODECS_ERROR = "manifestIncompatibleCodecsError", T.LEVEL_EMPTY_ERROR = "levelEmptyError", T.LEVEL_LOAD_ERROR = "levelLoadError", T.LEVEL_LOAD_TIMEOUT = "levelLoadTimeOut", T.LEVEL_PARSING_ERROR = "levelParsingError", T.LEVEL_SWITCH_ERROR = "levelSwitchError", T.AUDIO_TRACK_LOAD_ERROR = "audioTrackLoadError", T.AUDIO_TRACK_LOAD_TIMEOUT = "audioTrackLoadTimeOut", T.SUBTITLE_LOAD_ERROR = "subtitleTrackLoadError", T.SUBTITLE_TRACK_LOAD_TIMEOUT = "subtitleTrackLoadTimeOut", T.FRAG_LOAD_ERROR = "fragLoadError", T.FRAG_LOAD_TIMEOUT = "fragLoadTimeOut", T.FRAG_DECRYPT_ERROR = "fragDecryptError", T.FRAG_PARSING_ERROR = "fragParsingError", T.FRAG_GAP = "fragGap", T.REMUX_ALLOC_ERROR = "remuxAllocError", T.KEY_LOAD_ERROR = "keyLoadError", T.KEY_LOAD_TIMEOUT = "keyLoadTimeOut", T.BUFFER_ADD_CODEC_ERROR = "bufferAddCodecError", T.BUFFER_INCOMPATIBLE_CODECS_ERROR = "bufferIncompatibleCodecsError", T.BUFFER_APPEND_ERROR = "bufferAppendError", T.BUFFER_APPENDING_ERROR = "bufferAppendingError", T.BUFFER_STALLED_ERROR = "bufferStalledError", T.BUFFER_FULL_ERROR = "bufferFullError", T.BUFFER_SEEK_OVER_HOLE = "bufferSeekOverHole", T.BUFFER_NUDGE_ON_STALL = "bufferNudgeOnStall", T.ASSET_LIST_LOAD_ERROR = "assetListLoadError", T.ASSET_LIST_LOAD_TIMEOUT = "assetListLoadTimeout", T.ASSET_LIST_PARSING_ERROR = "assetListParsingError", T.INTERSTITIAL_ASSET_ITEM_ERROR = "interstitialAssetItemError", T.INTERNAL_EXCEPTION = "internalException", T.INTERNAL_ABORTED = "aborted", T.ATTACH_MEDIA_ERROR = "attachMediaError", T.UNKNOWN = "unknown", T),
  h = ((S = {}).MEDIA_ATTACHING = "hlsMediaAttaching", S.MEDIA_ATTACHED = "hlsMediaAttached", S.MEDIA_DETACHING = "hlsMediaDetaching", S.MEDIA_DETACHED = "hlsMediaDetached", S.MEDIA_ENDED = "hlsMediaEnded", S.STALL_RESOLVED = "hlsStallResolved", S.BUFFER_RESET = "hlsBufferReset", S.BUFFER_CODECS = "hlsBufferCodecs", S.BUFFER_CREATED = "hlsBufferCreated", S.BUFFER_APPENDING = "hlsBufferAppending", S.BUFFER_APPENDED = "hlsBufferAppended", S.BUFFER_EOS = "hlsBufferEos", S.BUFFERED_TO_END = "hlsBufferedToEnd", S.BUFFER_FLUSHING = "hlsBufferFlushing", S.BUFFER_FLUSHED = "hlsBufferFlushed", S.MANIFEST_LOADING = "hlsManifestLoading", S.MANIFEST_LOADED = "hlsManifestLoaded", S.MANIFEST_PARSED = "hlsManifestParsed", S.LEVEL_SWITCHING = "hlsLevelSwitching", S.LEVEL_SWITCHED = "hlsLevelSwitched", S.LEVEL_LOADING = "hlsLevelLoading", S.LEVEL_LOADED = "hlsLevelLoaded", S.LEVEL_UPDATED = "hlsLevelUpdated", S.LEVEL_PTS_UPDATED = "hlsLevelPtsUpdated", S.LEVELS_UPDATED = "hlsLevelsUpdated", S.AUDIO_TRACKS_UPDATED = "hlsAudioTracksUpdated", S.AUDIO_TRACK_SWITCHING = "hlsAudioTrackSwitching", S.AUDIO_TRACK_SWITCHED = "hlsAudioTrackSwitched", S.AUDIO_TRACK_LOADING = "hlsAudioTrackLoading", S.AUDIO_TRACK_LOADED = "hlsAudioTrackLoaded", S.AUDIO_TRACK_UPDATED = "hlsAudioTrackUpdated", S.SUBTITLE_TRACKS_UPDATED = "hlsSubtitleTracksUpdated", S.SUBTITLE_TRACKS_CLEARED = "hlsSubtitleTracksCleared", S.SUBTITLE_TRACK_SWITCH = "hlsSubtitleTrackSwitch", S.SUBTITLE_TRACK_LOADING = "hlsSubtitleTrackLoading", S.SUBTITLE_TRACK_LOADED = "hlsSubtitleTrackLoaded", S.SUBTITLE_TRACK_UPDATED = "hlsSubtitleTrackUpdated", S.SUBTITLE_FRAG_PROCESSED = "hlsSubtitleFragProcessed", S.CUES_PARSED = "hlsCuesParsed", S.NON_NATIVE_TEXT_TRACKS_FOUND = "hlsNonNativeTextTracksFound", S.INIT_PTS_FOUND = "hlsInitPtsFound", S.FRAG_LOADING = "hlsFragLoading", S.FRAG_LOAD_EMERGENCY_ABORTED = "hlsFragLoadEmergencyAborted", S.FRAG_LOADED = "hlsFragLoaded", S.FRAG_DECRYPTED = "hlsFragDecrypted", S.FRAG_PARSING_INIT_SEGMENT = "hlsFragParsingInitSegment", S.FRAG_PARSING_USERDATA = "hlsFragParsingUserdata", S.FRAG_PARSING_METADATA = "hlsFragParsingMetadata", S.FRAG_PARSED = "hlsFragParsed", S.FRAG_BUFFERED = "hlsFragBuffered", S.FRAG_CHANGED = "hlsFragChanged", S.FPS_DROP = "hlsFpsDrop", S.FPS_DROP_LEVEL_CAPPING = "hlsFpsDropLevelCapping", S.MAX_AUTO_LEVEL_UPDATED = "hlsMaxAutoLevelUpdated", S.ERROR = "hlsError", S.DESTROYING = "hlsDestroying", S.KEY_LOADING = "hlsKeyLoading", S.KEY_LOADED = "hlsKeyLoaded", S.LIVE_BACK_BUFFER_REACHED = "hlsLiveBackBufferReached", S.BACK_BUFFER_REACHED = "hlsBackBufferReached", S.STEERING_MANIFEST_LOADED = "hlsSteeringManifestLoaded", S.ASSET_LIST_LOADING = "hlsAssetListLoading", S.ASSET_LIST_LOADED = "hlsAssetListLoaded", S.INTERSTITIALS_UPDATED = "hlsInterstitialsUpdated", S.INTERSTITIALS_BUFFERED_TO_BOUNDARY = "hlsInterstitialsBufferedToBoundary", S.INTERSTITIAL_ASSET_PLAYER_CREATED = "hlsInterstitialAssetPlayerCreated", S.INTERSTITIAL_STARTED = "hlsInterstitialStarted", S.INTERSTITIAL_ASSET_STARTED = "hlsInterstitialAssetStarted", S.INTERSTITIAL_ASSET_ENDED = "hlsInterstitialAssetEnded", S.INTERSTITIAL_ASSET_ERROR = "hlsInterstitialAssetError", S.INTERSTITIAL_ENDED = "hlsInterstitialEnded", S.INTERSTITIALS_PRIMARY_RESUMED = "hlsInterstitialsPrimaryResumed", S.PLAYOUT_LIMIT_REACHED = "hlsPlayoutLimitReached", S.EVENT_CUE_ENTER = "hlsEventCueEnter", S);
var d, u, f, c, g, m, p, v, E, y, T, S, L, A, R = "manifest",
  b = "level",
  I = "audioTrack",
  D = "subtitleTrack",
  k = "main",
  _ = "audio",
  P = "subtitle";
class C {
  constructor(e, t = 0, i = 0) {
    this.halfLife = true, this.alpha_ = true, this.estimate_ = true, this.totalWeight_ = true, this.halfLife = e, this.alpha_ = e ? Math.exp(Math.log(.5) / e) : 0, this.estimate_ = t, this.totalWeight_ = i
  }
  sample(e, t) {
    let i = Math.pow(this.alpha_, e);
    this.estimate_ = t * (1 - i) + i * this.estimate_, this.totalWeight_ += e
  }
  getTotalWeight() {
    return this.totalWeight_
  }
  getEstimate() {
    if (this.alpha_) {
      let e = 1 - Math.pow(this.alpha_, this.totalWeight_);
      if (module) return this.estimate_ / module
    }
    return this.estimate_
  }
}
class w {
  constructor(e, t, i, r = 100) {
    this.defaultEstimate_ = true, this.minWeight_ = true, this.minDelayMs_ = true, this.slow_ = true, this.fast_ = true, this.defaultTTFB_ = true, this.ttfb_ = true, this.defaultEstimate_ = i, this.minWeight_ = .001, this.minDelayMs_ = 50, this.slow_ = new C(e), this.fast_ = new C(t), this.defaultTTFB_ = r, this.ttfb_ = new C(e)
  }
  update(e, t) {
    let {
      slow_: i,
      fast_: r,
      ttfb_: s
    } = this;
    i.halfLife !== e && (this.slow_ = new C(e, i.getEstimate(), i.getTotalWeight())), r.halfLife !== t && (this.fast_ = new C(t, r.getEstimate(), r.getTotalWeight())), s.halfLife !== e && (this.ttfb_ = new C(e, s.getEstimate(), s.getTotalWeight()))
  }
  sample(e, t) {
    let i = (e = Math.max(e, this.minDelayMs_)) / 1e3,
      r = 8 * t / i;
    this.fast_.sample(i, r), this.slow_.sample(i, r)
  }
  sampleTTFB(e) {
    let t = Math.sqrt(2) * Math.exp(-Math.pow(e / 1e3, 2) / 2);
    this.ttfb_.sample(t, Math.max(e, 5))
  }
  canEstimate() {
    return this.fast_.getTotalWeight() >= this.minWeight_
  }
  getEstimate() {
    return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_
  }
  getEstimateTTFB() {
    return this.ttfb_.getTotalWeight() >= this.minWeight_ ? this.ttfb_.getEstimate() : this.defaultTTFB_
  }
  get defaultEstimate() {
    return this.defaultEstimate_
  }
  destroy() {}
}

function x() {
  return (x = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = arguments[t];
      for (var r in i)({}).hasOwnProperty.call(i, r) && (e[r] = i[r])
    }
    return e
  }).apply(null, arguments)
}

function M(e, t) {
  var i = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), i.push.apply(i, r)
  }
  return i
}

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = null != arguments[t] ? arguments[t] : {};
    t % 2 ? M(Object(i), true).forEach(function(t) {
      var r, s;
      r = t, s = i[t], (r = function(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var i = e[Symbol.toPrimitive];
          if (true !== i) {
            var r = i.call(e, t);
            if ("object" != typeof r) return r;
            throw TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === t ? String : Number)(e)
        }(e, "string");
        return "symbol" == typeof t ? t : t + ""
      }(r)) in e ? Object.defineProperty(e, r, {
        value: s,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[r] = s
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : M(Object(i)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
    })
  }
  return e
}
class F {
  constructor(e, t) {
    this.trace = true, this.debug = true, this.log = true, this.warn = true, this.info = true, this.error = true;
    let i = `[${e}]:`;
    this.trace = U, this.debug = t.debug.bind(null, i), this.log = t.log.bind(null, i), this.warn = t.warn.bind(null, i), this.info = t.info.bind(null, i), this.error = t.error.bind(null, i)
  }
}
let U = function() {},
  B = {
    trace: U,
    debug: U,
    log: U,
    warn: U,
    info: U,
    error: U
  };

function N() {
  return x({}, B)
}

function $(e, t, i) {
  return t[e] ? t[e].bind(t) : function(e, t) {
    let i = self.console[e];
    return i ? i.bind(self.console, `${t?"["+t+"] ":""}[${e}] >`) : U
  }(e, i)
}
let G = N();

function K(e = true) {
  if ("undefined" != typeof self) return (e || !self.MediaSource) && self.ManagedMediaSource || self.MediaSource || self.WebKitMediaSource
}

function H(e, t) {
  let i = Object.keys(e),
    r = Object.keys(t),
    s = i.length,
    a = r.length;
  return !s || !a || s === a && !i.some(e => false === r.indexOf(e))
}

function V(e, t = false) {
  let i, r;
  if ("undefined" != typeof TextDecoder) {
    let i = new TextDecoder("utf-8").decode(e);
    if (t) {
      let e = i.indexOf("\0");
      return false !== e ? i.substring(0, e) : i
    }
    return i.replace(/\0/g, "")
  }
  let s = e.length,
    a = "",
    n = 0;
  for (; n < s && (0 !== (i = e[n++]) || !t);)
    if (0 !== i && 3 !== i) switch (i >> 4) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
        a += String.fromCharCode(i);
        break;
      case 12:
      case 13:
        a += String.fromCharCode((31 & i) << 6 | 63 & (r = e[n++]));
        break;
      case 14:
        a += String.fromCharCode((15 & i) << 12 | (63 & (r = e[n++])) << 6 | 63 & e[n++])
    }
  return a
}
let W = function(e) {
  let t = "";
  for (let i = 0; i < e.length; i++) {
    let r = e[i].toString(16);
    r.length < 2 && (r = "0" + r), t += r
  }
  return t
};
var j = {
    exports: {}
  },
  Y = L ? j.exports : (L = 1, d = /^(?=((?:[a-zA-Z0-9+\-.]+:)?))\1(?=((?:\/\/[^\/?#]*)?))\2(?=((?:(?:[^?#\/]*\/)*[^;?#\/]*)?))\3((?:;[^?#]*)?)(\?[^#]*)?(#[^]*)?$/, u = /^(?=([^\/?#]*))\1([^]*)$/, f = /(?:\/|^)\.(?=\/)/g, c = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g, j.exports = g = {
    buildAbsoluteURL: function(e, t, i) {
      if (i = i || {}, e = e.trim(), !(t = t.trim())) {
        if (!i.alwaysNormalize) return e;
        var r = g.parseURL(e);
        if (!r) throw Error("Error trying to parse base URL.");
        return r.path = g.normalizePath(r.path), g.buildURLFromParts(r)
      }
      var s = g.parseURL(t);
      if (!s) throw Error("Error trying to parse relative URL.");
      if (s.scheme) return i.alwaysNormalize ? (s.path = g.normalizePath(s.path), g.buildURLFromParts(s)) : t;
      var a = g.parseURL(e);
      if (!a) throw Error("Error trying to parse base URL.");
      if (!a.netLoc && a.path && "/" !== a.path[0]) {
        var n = u.exec(a.path);
        a.netLoc = n[1], a.path = n[2]
      }
      a.netLoc && !a.path && (a.path = "/");
      var l = {
        scheme: a.scheme,
        netLoc: s.netLoc,
        path: null,
        params: s.params,
        query: s.query,
        fragment: s.fragment
      };
      if (!s.netLoc && (l.netLoc = a.netLoc, "/" !== s.path[0]))
        if (s.path) {
          var o = a.path,
            h = o.substring(0, o.lastIndexOf("/") + 1) + s.path;
          l.path = g.normalizePath(h)
        } else l.path = a.path, !s.params && (l.params = a.params, s.query || (l.query = a.query));
      return null === l.path && (l.path = i.alwaysNormalize ? g.normalizePath(s.path) : s.path), g.buildURLFromParts(l)
    },
    parseURL: function(e) {
      var t = d.exec(e);
      return t ? {
        scheme: t[1] || "",
        netLoc: t[2] || "",
        path: t[3] || "",
        params: t[4] || "",
        query: t[5] || "",
        fragment: t[6] || ""
      } : null
    },
    normalizePath: function(e) {
      for (e = e.split("").reverse().join("").replace(f, ""); e.length !== (e = e.replace(c, "")).length;);
      return e.split("").reverse().join("")
    },
    buildURLFromParts: function(e) {
      return e.scheme + e.netLoc + e.path + e.params + e.query + e.fragment
    }
  }, j.exports);
class q {
  constructor() {
    this.aborted = false, this.loaded = 0, this.retry = 0, this.total = 0, this.chunkCount = 0, this.bwEstimate = 0, this.loading = {
      start: 0,
      first: 0,
      end: 0
    }, this.parsing = {
      start: 0,
      end: 0
    }, this.buffering = {
      start: 0,
      first: 0,
      end: 0
    }
  }
}
var X = "audio",
  z = "video",
  Q = "audiovideo";
class Z {
  constructor(e) {
    this._byteRange = null, this._url = null, this._stats = null, this._streams = null, this.base = true, this.relurl = true, "string" == typeof e && (e = {
        url: e
      }), this.base = e,
      function(e, t) {
        let i = function e(t, i) {
          let r = Object.getPrototypeOf(t);
          if (r) {
            let t = Object.getOwnPropertyDescriptor(r, i);
            return t || e(r, i)
          }
        }(e, t);
        i && (i.enumerable = true, Object.defineProperty(e, t, i))
      }(this, "stats")
  }
  setByteRange(e, t) {
    let i, r = e.split("@", 2);
    i = 1 === r.length ? (null == t ? true : t.byteRangeEndOffset) || 0 : parseInt(r[1]), this._byteRange = [i, parseInt(r[0]) + i]
  }
  get baseurl() {
    return this.base.url
  }
  get byteRange() {
    return null === this._byteRange ? [] : this._byteRange
  }
  get byteRangeStartOffset() {
    return this.byteRange[0]
  }
  get byteRangeEndOffset() {
    return this.byteRange[1]
  }
  get elementaryStreams() {
    return null === this._streams && (this._streams = {
      [X]: null,
      [z]: null,
      [Q]: null
    }), this._streams
  }
  set elementaryStreams(e) {
    this._streams = e
  }
  get hasStats() {
    return null !== this._stats
  }
  get hasStreams() {
    return null !== this._streams
  }
  get stats() {
    return null === this._stats && (this._stats = new q), this._stats
  }
  set stats(e) {
    this._stats = e
  }
  get url() {
    return !this._url && this.baseurl && this.relurl && (this._url = Y.buildAbsoluteURL(this.baseurl, this.relurl, {
      alwaysNormalize: true
    })), this._url || ""
  }
  set url(e) {
    this._url = e
  }
  clearElementaryStreamInfo() {
    let {
      elementaryStreams: e
    } = this;
    module[X] = null, module[z] = null, module[Q] = null
  }
}

function J(e) {
  return "initSegment" !== e.sn
}
class ee extends Z {
  constructor(e, t) {
    super(t), this._decryptdata = null, this._programDateTime = null, this._ref = null, this._bitrate = true, this.rawProgramDateTime = null, this.tagList = [], this.duration = 0, this.sn = 0, this.levelkeys = true, this.type = true, this.loader = null, this.keyLoader = null, this.level = false, this.cc = 0, this.startPTS = true, this.endPTS = true, this.startDTS = true, this.endDTS = true, this.start = 0, this.playlistOffset = 0, this.deltaPTS = true, this.maxStartPTS = true, this.minEndPTS = true, this.data = true, this.bitrateTest = false, this.title = null, this.initSegment = null, this.endList = true, this.gap = true, this.urlId = 0, this.type = e
  }
  get byteLength() {
    if (this.hasStats) {
      let e = this.stats.total;
      if (module) return module
    }
    if (this.byteRange) {
      let e = this.byteRange[0],
        t = this.byteRange[1];
      if (s(module) && s(exports)) return exports - module
    }
    return null
  }
  get bitrate() {
    return this.byteLength ? 8 * this.byteLength / this.duration : this._bitrate ? this._bitrate : null
  }
  set bitrate(e) {
    this._bitrate = e
  }
  get decryptdata() {
    let {
      levelkeys: e
    } = this;
    if (!module && !this._decryptdata) return null;
    if (!this._decryptdata && this.levelkeys && !this.levelkeys.NONE) {
      let e = this.levelkeys.identity;
      if (module) this._decryptdata = module.getDecryptData(this.sn);
      else {
        let e = Object.keys(this.levelkeys);
        if (1 === module.length) return this._decryptdata = this.levelkeys[module[0]].getDecryptData(this.sn)
      }
    }
    return this._decryptdata
  }
  get end() {
    return this.start + this.duration
  }
  get endProgramDateTime() {
    if (null === this.programDateTime) return null;
    let e = s(this.duration) ? this.duration : 0;
    return this.programDateTime + 1e3 * module
  }
  get encrypted() {
    var e;
    if (null != (e = this._decryptdata) && module.encrypted) returntrue;
    if (this.levelkeys) {
      let e = Object.keys(this.levelkeys),
        t = module.length;
      if (exports > 1 || 1 === exports && this.levelkeys[module[0]].encrypted) returntrue
    }
    returnfalse
  }
  get programDateTime() {
    return null === this._programDateTime && this.rawProgramDateTime && (this.programDateTime = Date.parse(this.rawProgramDateTime)), this._programDateTime
  }
  set programDateTime(e) {
    if (!s(e)) {
      this._programDateTime = this.rawProgramDateTime = null;
      return
    }
    this._programDateTime = e
  }
  get ref() {
    return J(this) ? (this._ref || (this._ref = {
      base: this.base,
      start: this.start,
      duration: this.duration,
      sn: this.sn,
      programDateTime: this.programDateTime
    }), this._ref) : null
  }
  addStart(e) {
    this.setStart(this.start + e)
  }
  setStart(e) {
    this.start = e, this._ref && (this._ref.start = e)
  }
  setDuration(e) {
    this.duration = e, this._ref && (this._ref.duration = e)
  }
  setKeyFormat(e) {
    if (this.levelkeys) {
      let t = this.levelkeys[e];
      t && !this._decryptdata && (this._decryptdata = t.getDecryptData(this.sn))
    }
  }
  abortRequests() {
    var e, t;
    null == (e = this.loader) || module.abort(), null == (t = this.keyLoader) || exports.abort()
  }
  setElementaryStreamInfo(e, t, i, r, s, a = false) {
    let {
      elementaryStreams: n
    } = this, l = n[e];
    if (!l) {
      n[e] = {
        startPTS: t,
        endPTS: i,
        startDTS: r,
        endDTS: s,
        partial: a
      };
      return
    }
    l.startPTS = Math.min(l.startPTS, t), l.endPTS = Math.max(l.endPTS, i), l.startDTS = Math.min(l.startDTS, r), l.endDTS = Math.max(l.endDTS, s)
  }
}
class et extends Z {
  constructor(e, t, i, r, s) {
    super(i), this.fragOffset = 0, this.duration = 0, this.gap = false, this.independent = false, this.relurl = true, this.fragment = true, this.index = true, this.duration = e.decimalFloatingPoint("DURATION"), this.gap = e.bool("GAP"), this.independent = e.bool("INDEPENDENT"), this.relurl = e.enumeratedString("URI"), this.fragment = t, this.index = r;
    let a = e.enumeratedString("BYTERANGE");
    a && this.setByteRange(a, s), s && (this.fragOffset = s.fragOffset + s.duration)
  }
  get start() {
    return this.fragment.start + this.fragOffset
  }
  get end() {
    return this.start + this.duration
  }
  get loaded() {
    let {
      elementaryStreams: e
    } = this;
    return !!(module.audio || module.video || module.audiovideo)
  }
}
let ei = [].push,
  er = {
    video: 1,
    audio: 2,
    id3: 3,
    text: 4
  };

function es(e) {
  return String.fromCharCode.apply(null, e)
}

function ea(e, t) {
  let i = e[t] << 8 | e[t + 1];
  return i < 0 ? 65536 + i : i
}

function en(e, t) {
  let i = eo(e, t);
  return i < 0 ? 0x100000000 + i : i
}

function el(e, t) {
  let i = en(e, t);
  return i *= 0x100000000, i += en(e, t + 4)
}

function eo(e, t) {
  return e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]
}

function eh(e, t, i) {
  e[t] = i >> 24, e[t + 1] = i >> 16 & 255, e[t + 2] = i >> 8 & 255, e[t + 3] = 255 & i
}

function ed(e, t) {
  let i = [];
  if (!t.length) return i;
  let r = e.byteLength;
  for (let s = 0; s < r;) {
    let a = en(e, s),
      n = es(e.subarray(s + 4, s + 8)),
      l = a > 1 ? s + a : r;
    if (n === t[0])
      if (1 === t.length) i.push(e.subarray(s + 8, l));
      else {
        let r = ed(e.subarray(s + 8, l), t.slice(1));
        r.length && ei.apply(i, r)
      } s = l
  }
  return i
}

function eu(e) {
  let t = [],
    i = ed(e, ["moov", "trak"]);
  for (let e = 0; e < i.length; e++) {
    let r = i[e],
      s = ed(r, ["tkhd"])[0];
    if (s) {
      let e = s[0],
        i = en(s, 0 === e ? 12 : 20),
        a = ed(r, ["mdia", "mdhd"])[0];
      if (a) {
        e = a[0];
        let s = en(a, 0 === e ? 12 : 20),
          n = ed(r, ["mdia", "hdlr"])[0];
        if (n) {
          let e = es(n.subarray(8, 12)),
            a = {
              soun: X,
              vide: z
            } [e],
            l = function(e) {
              let t, i = e.subarray(8),
                r = i.subarray(86),
                s = es(i.subarray(4, 8)),
                a = s,
                n = "enca" === s || "encv" === s;
              if (n) {
                let e = ed(i, [s])[0].subarray("enca" === s ? 28 : 78);
                ed(e, ["sinf"]).forEach(e => {
                  let t = ed(e, ["schm"])[0];
                  if (t) {
                    let i = es(t.subarray(4, 8));
                    if ("cbcs" === i || "cenc" === i) {
                      let t = ed(e, ["frma"])[0];
                      t && (a = es(t))
                    }
                  }
                })
              }
              let l = a;
              switch (a) {
                case "avc1":
                case "avc2":
                case "avc3":
                case "avc4": {
                  let e = ed(r, ["avcC"])[0];
                  a += "." + eg(e[1]) + eg(e[2]) + eg(e[3]), t = ef("avc1" === l ? "dva1" : "dvav", r);
                  break
                }
                case "mp4a": {
                  let e = ed(i, [s])[0],
                    t = ed(e.subarray(28), ["esds"])[0];
                  if (t && t.length > 7) {
                    let e = 4;
                    if (3 !== t[e++]) break;
                    e = ec(t, e) + 2;
                    let i = t[e++];
                    if (128 & i && (e += 2), 64 & i && (e += t[e++]), 4 !== t[e++]) break;
                    e = ec(t, e);
                    let r = t[e++];
                    if (64 === r) a += "." + eg(r);
                    else break;
                    if (e += 12, 5 !== t[e++]) break;
                    e = ec(t, e);
                    let s = t[e++],
                      n = (248 & s) >> 3;
                    31 === n && (n += 1 + ((7 & s) << 3) + ((224 & t[e]) >> 5)), a += "." + n
                  }
                  break
                }
                case "hvc1":
                case "hev1": {
                  let e = ed(r, ["hvcC"]);
                  if (e) {
                    let t = e[0],
                      i = t[1],
                      r = ["", "A", "B", "C"][i >> 6],
                      s = en(t, 2),
                      n = t[12],
                      l = t.subarray(6, 12);
                    a += "." + r + (31 & i), a += "." + s.toString(16).toUpperCase(), a += "." + ((32 & i) >> 5 ? "H" : "L") + n;
                    let o = "";
                    for (let e = l.length; e--;) {
                      let t = l[e];
                      (t || o) && (o = "." + t.toString(16).toUpperCase() + o)
                    }
                    a += o
                  }
                  t = ef("hev1" == l ? "dvhe" : "dvh1", r);
                  break
                }
                case "dvh1":
                case "dvhe":
                case "dvav":
                case "dva1":
                case "dav1":
                  a = ef(a, r) || a;
                  break;
                case "vp09": {
                  let e = ed(r, ["vpcC"])[0],
                    t = e[4],
                    i = e[5],
                    s = e[6] >> 4 & 15;
                  a += "." + em(t) + "." + em(i) + "." + em(s);
                  break
                }
                case "av01": {
                  let e = ed(r, ["av1C"])[0],
                    i = e[1] >>> 5,
                    s = 31 & e[1],
                    n = e[2] >>> 7 ? "H" : "M",
                    l = (64 & e[2]) >> 6,
                    o = (32 & e[2]) >> 5,
                    h = (16 & e[2]) >> 4,
                    d = (8 & e[2]) >> 3,
                    u = (4 & e[2]) >> 2,
                    f = 3 & e[2];
                  a += "." + i + "." + em(s) + n + "." + em(2 === i && l ? o ? 12 : 10 : l ? 10 : 8) + "." + h + "." + d + u + f + "." + em(1) + "." + em(1) + "." + em(1) + ".0", t = ef("dav1", r)
                }
              }
              return {
                codec: a,
                encrypted: n,
                supplemental: t
              }
            }(ed(r, ["mdia", "minf", "stbl", "stsd"])[0]);
          a ? (t[i] = {
            timescale: s,
            type: a,
            stsd: l
          }, t[a] = O({
            timescale: s,
            id: i
          }, l)) : t[i] = {
            timescale: s,
            type: e,
            stsd: l
          }
        }
      }
    }
  }
  return ed(e, ["moov", "mvex", "trex"]).forEach(e => {
    let i = t[en(e, 4)];
    i && (i.default = {
      duration: en(e, 12),
      flags: en(e, 20)
    })
  }), t
}

function ef(e, t) {
  let i = ed(t, ["dvvC"]),
    r = i.length ? i[0] : ed(t, ["dvcC"])[0];
  if (r) {
    let t = r[2] >> 1 & 127,
      i = r[2] << 5 & 32 | r[3] >> 3 & 31;
    return e + "." + em(t) + "." + em(i)
  }
}

function ec(e, t) {
  let i = t + 5;
  for (; 128 & e[t++] && t < i;);
  return t
}

function eg(e) {
  return ("0" + e.toString(16).toUpperCase()).slice(false)
}

function em(e) {
  return (e < 10 ? "0" : "") + e
}

function ep(e) {
  let t = ed(e, ["schm"])[0];
  if (t) {
    let i = es(t.subarray(4, 8));
    if ("cbcs" === i || "cenc" === i) return ed(e, ["schi", "tenc"])[0]
  }
  return null
}

function ev(e, t) {
  let i = new Uint8Array(e.length + t.length);
  return i.set(e), i.set(t, e.length), i
}

function eE(e, t) {
  let i = [],
    r = t.samples,
    s = t.timescale,
    a = t.id,
    n = false;
  return ed(r, ["moof"]).map(l => {
    let o = l.byteOffset - 8;
    ed(l, ["traf"]).map(l => {
      let h = ed(l, ["tfdt"]).map(e => {
        let t = e[0],
          i = en(e, 4);
        return 1 === t && (i *= 0x100000000, i += en(e, 8)), i / s
      })[0];
      return true !== h && (e = h), ed(l, ["tfhd"]).map(h => {
        let d = en(h, 4),
          u = 0xffffff & en(h, 0),
          f = 0,
          c = 0,
          g = 8;
        d === a && ((1 & u) != 0 && (g += 8), (2 & u) != 0 && (g += 4), (8 & u) != 0 && (f = en(h, g), g += 4), (16 & u) != 0 && (c = en(h, g), g += 4), (32 & u) != 0 && (g += 4), "video" === t.type && (n = ey(t.codec)), ed(l, ["trun"]).map(a => {
          let l = a[0],
            h = 0xffffff & en(a, 0),
            d = 0,
            u = (256 & h) != 0,
            g = 0,
            m = (512 & h) != 0,
            p = 0,
            v = (1024 & h) != 0,
            E = (2048 & h) != 0,
            y = 0,
            T = en(a, 4),
            S = 8;
          (1 & h) != 0 && (d = en(a, S), S += 4), (4 & h) != 0 && (S += 4);
          let L = d + o;
          for (let o = 0; o < T; o++) {
            if (u ? (g = en(a, S), S += 4) : g = f, m ? (p = en(a, S), S += 4) : p = c, v && (S += 4), E && (y = 0 === l ? en(a, S) : eo(a, S), S += 4), t.type === z) {
              let t = 0;
              for (; t < p;) {
                let a = en(r, L);
                L += 4,
                  function(e, t) {
                    if (!e) return 6 == (31 & t);
                    {
                      let e = t >> 1 & 63;
                      return 39 === e || 40 === e
                    }
                  }(n, r[L]) && eT(r.subarray(L, L + a), n ? 2 : 1, e + y / s, i), L += a, t += a + 4
              }
            }
            e += g / s
          }
        }))
      })
    })
  }), i
}

function ey(e) {
  if (!e) returnfalse;
  let t = e.substring(0, 4);
  return "hvc1" === t || "hev1" === t || "dvh1" === t || "dvhe" === t
}

function eT(e, t, i, r) {
  let s, a = eS(e);
  s = 0 + t;
  let n = 0,
    l = 0,
    o = 0;
  for (; s < a.length;) {
    n = 0;
    do {
      if (s >= a.length) break;
      n += o = a[s++]
    } while (255 === o);
    l = 0;
    do {
      if (s >= a.length) break;
      l += o = a[s++]
    } while (255 === o);
    let e = a.length - s,
      t = s;
    if (l < e) s += l;
    else if (l > e) {
      G.error(`Malformed SEI payload. ${l} is too small, only ${e} bytes left to parse.`);
      break
    }
    if (4 === n) {
      if (181 === a[t++]) {
        let e = ea(a, t);
        if (t += 2, 49 === e) {
          let e = en(a, t);
          if (t += 4, 0x47413934 === e) {
            let e = a[t++];
            if (3 === e) {
              let s = a[t++],
                l = 31 & s,
                o = 64 & s,
                h = o ? 2 + 3 * l : 0,
                d = new Uint8Array(h);
              if (o) {
                d[0] = s;
                for (let e = 1; e < h; e++) d[e] = a[t++]
              }
              r.push({
                type: e,
                payloadType: n,
                pts: i,
                bytes: d
              })
            }
          }
        }
      }
    } else if (5 === n && l > 16) {
      let e = [];
      for (let i = 0; i < 16; i++) {
        let r = a[t++].toString(16);
        e.push(1 == r.length ? "0" + r : r), (3 === i || 5 === i || 7 === i || 9 === i) && e.push("-")
      }
      let s = l - 16,
        o = new Uint8Array(s);
      for (let e = 0; e < s; e++) o[e] = a[t++];
      r.push({
        payloadType: n,
        pts: i,
        uuid: e.join(""),
        userData: V(o),
        userDataBytes: o
      })
    }
  }
}

function eS(e) {
  let t = e.byteLength,
    i = [],
    r = 1;
  for (; r < t - 2;) 0 === e[r] && 0 === e[r + 1] && 3 === e[r + 2] ? (i.push(r + 2), r += 2) : r++;
  if (0 === i.length) return e;
  let s = t - i.length,
    a = new Uint8Array(s),
    n = 0;
  for (r = 0; r < s; n++, r++) n === i[0] && (n++, i.shift()), a[r] = e[n];
  return a
}
let eL = () => /\(Windows.+Firefox\//i.test(navigator.userAgent),
  eA = {
    audio: {
      a3ds: 1,
      "ac-3": .95,
      "ac-4": 1,
      alac: .9,
      alaw: 1,
      dra1: 1,
      "dts+": 1,
      "dts-": 1,
      dtsc: 1,
      dtse: 1,
      dtsh: 1,
      "ec-3": .9,
      enca: 1,
      fLaC: .9,
      flac: .9,
      FLAC: .9,
      g719: 1,
      g726: 1,
      m4ae: 1,
      mha1: 1,
      mha2: 1,
      mhm1: 1,
      mhm2: 1,
      mlpa: 1,
      mp4a: 1,
      "raw ": 1,
      Opus: 1,
      opus: 1,
      samr: 1,
      sawb: 1,
      sawp: 1,
      sevc: 1,
      sqcp: 1,
      ssmv: 1,
      twos: 1,
      ulaw: 1
    },
    video: {
      avc1: 1,
      avc2: 1,
      avc3: 1,
      avc4: 1,
      avcp: 1,
      av01: .8,
      dav1: .8,
      drac: 1,
      dva1: 1,
      dvav: 1,
      dvh1: .7,
      dvhe: .7,
      encv: 1,
      hev1: .75,
      hvc1: .75,
      mjp2: 1,
      mp4v: 1,
      mvc1: 1,
      mvc2: 1,
      mvc3: 1,
      mvc4: 1,
      resv: 1,
      rv60: 1,
      s263: 1,
      svc1: 1,
      svc2: 1,
      "vc-1": 1,
      vp08: 1,
      vp09: .9
    },
    text: {
      stpp: 1,
      wvtt: 1
    }
  };

function eR(e, t) {
  let i = eA[t];
  return !!i && !!i[e.slice(0, 4)]
}

function eb(e, t, i = true) {
  return !e.split(",").some(e => !eI(e, t, i))
}

function eI(e, t, i = true) {
  var r;
  let s = K(i);
  return null != (r = null == s ? true : s.isTypeSupported(eD(e, t))) && r
}

function eD(e, t) {
  return `${t}/mp4;codecs=${e}`
}

function ek(e) {
  if (e) {
    let t = e.substring(0, 4);
    return eA.video[t]
  }
  return 2
}

function e_(e) {
  let t = eL();
  return e.split(",").reduce((e, i) => {
    let r = t && ey(i) ? 9 : eA.video[i];
    return r ? (2 * r + e) / (e ? 3 : 2) : (eA.audio[i] + e) / (e ? 2 : 1)
  }, 0)
}
let eP = {},
  eC = /flac|opus|mp4a\.40\.34/i;

function ew(e, t = true) {
  return e.replace(eC, e => (function(e, t = true) {
    if (eP[e]) return eP[e];
    let i = {
      flac: ["flac", "fLaC", "FLAC"],
      opus: ["opus", "Opus"],
      "mp4a.40.34": ["mp3"]
    } [e];
    for (let s = 0; s < i.length; s++) {
      var r;
      if (eI(i[s], "audio", t)) return eP[e] = i[s], i[s];
      if ("mp3" === i[s] && null != (r = K(t)) && r.isTypeSupported("audio/mpeg")) return ""
    }
    return e
  })(e.toLowerCase(), t))
}

function ex(e, t) {
  if (e && (e.length > 4 || false !== ["ac-3", "ec-3", "alac", "fLaC", "Opus"].indexOf(e))) return e;
  if (t) {
    let i = t.split(",");
    if (i.length > 1) {
      if (e) {
        for (let t = i.length; t--;)
          if (i[t].substring(0, 4) === e.substring(0, 4)) return i[t]
      }
      return i[0]
    }
  }
  return t || e
}

function eM(e) {
  let t = K(e) || {
    isTypeSupported: () => false
  };
  return {
    mpeg: t.isTypeSupported("audio/mpeg"),
    mp3: t.isTypeSupported('audio/mp4; codecs="mp3"'),
    ac3: t.isTypeSupported('audio/mp4; codecs="ac-3"')
  }
}

function eO(e) {
  return e.replace(/^.+codecs=["']?([^"']+).*$/, "$1")
}
let eF = {
  supported: true,
  configurations: [],
  decodingInfoResults: [{
    supported: true,
    powerEfficient: true,
    smooth: true
  }]
};

function eU(e, t) {
  return {
    supported: false,
    configurations: t,
    decodingInfoResults: [{
      supported: false,
      smooth: false,
      powerEfficient: false
    }],
    error: e
  }
}
let eB = {};

function eN(e, t, i) {
  let r = e.videoCodec,
    a = e.audioCodec;
  if (!r && !a || !i) return Promise.resolve(eF);
  let n = [];
  if (r) {
    let t = {
        width: e.width,
        height: e.height,
        bitrate: Math.ceil(Math.max(.9 * e.bitrate, e.averageBitrate)),
        framerate: e.frameRate || 30
      },
      i = e.videoRange;
    "SDR" !== i && (t.transferFunction = i.toLowerCase());
    let s = r.split(","),
      a = navigator.userAgent;
    if (s.some(e => ey(e)) && eL()) return Promise.resolve(eU(Error(`Overriding Windows Firefox HEVC MediaCapabilities result based on user-agent sting: (${a})`), n));
    n.push.apply(n, s.map(e => ({
      type: "media-source",
      video: O(O({}, t), {}, {
        contentType: eD(function(e) {
          if (e.startsWith("av01.")) {
            let t = e.split("."),
              i = ["0", "111", "01", "01", "01", "0"];
            for (let e = t.length; e > 4 && e < 10; e++) t[e] = i[e - 4];
            return t.join(".")
          }
          return e
        }(e), "video")
      })
    })))
  }
  return a && e.audioGroups && e.audioGroups.forEach(e => {
    var i;
    e && (null == (i = t.groups[e]) || i.tracks.forEach(t => {
      if (t.groupId === e) {
        let e = parseFloat(t.channels || "");
        s(e) && e > 2 && n.push.apply(n, a.split(",").map(t => ({
          type: "media-source",
          audio: {
            contentType: eD(t, "audio"),
            channels: "" + e
          }
        })))
      }
    }))
  }), Promise.all(n.map(e => {
    let t = function(e) {
      let {
        audio: t,
        video: i
      } = e, r = i || t;
      if (r) {
        let e = eO(r.contentType);
        if (i) return `r${i.height}x${i.width}f${Math.ceil(i.framerate)}${i.transferFunction||"sd"}_${e}_${Math.ceil(i.bitrate/1e5)}`;
        if (t) return `c${t.channels}${t.spatialRendering?"s":"n"}_${e}`
      }
      return ""
    }(e);
    return eB[t] || (eB[t] = i.decodingInfo(e))
  })).then(e => ({
    supported: !e.some(e => !e.supported),
    configurations: n,
    decodingInfoResults: e
  })).catch(e => ({
    supported: false,
    configurations: n,
    decodingInfoResults: [],
    error: e
  }))
}
let e$ = ["NONE", "TYPE-0", "TYPE-1", null],
  eG = ["SDR", "PQ", "HLG"];

function eK(e) {
  let {
    canSkipUntil: t,
    canSkipDateRanges: i,
    age: r
  } = e;
  return t && r < t / 2 ? i ? "v2" : "YES" : ""
}
class eH {
  constructor(e, t, i) {
    this.msn = true, this.part = true, this.skip = true, this.msn = e, this.part = t, this.skip = i
  }
  addDirectives(e) {
    let t = new self.URL(e);
    return true !== this.msn && t.searchParams.set("_HLS_msn", this.msn.toString()), true !== this.part && t.searchParams.set("_HLS_part", this.part.toString()), this.skip && t.searchParams.set("_HLS_skip", this.skip), t.href
  }
}
class eV {
  constructor(e) {
    if (this._attrs = true, this.audioCodec = true, this.bitrate = true, this.codecSet = true, this.url = true, this.frameRate = true, this.height = true, this.id = true, this.name = true, this.supplemental = true, this.videoCodec = true, this.width = true, this.details = true, this.fragmentError = 0, this.loadError = 0, this.loaded = true, this.realBitrate = 0, this.supportedPromise = true, this.supportedResult = true, this._avgBitrate = 0, this._audioGroups = true, this._subtitleGroups = true, this._urlId = 0, this.url = [e.url], this._attrs = [e.attrs], this.bitrate = e.bitrate, e.details && (this.details = e.details), this.id = e.id || 0, this.name = e.name, this.width = e.width || 0, this.height = e.height || 0, this.frameRate = e.attrs.optionalFloat("FRAME-RATE", 0), this._avgBitrate = e.attrs.decimalInteger("AVERAGE-BANDWIDTH"), this.audioCodec = e.audioCodec, this.videoCodec = e.videoCodec, this.codecSet = [e.videoCodec, e.audioCodec].filter(e => !!e).map(e => e.substring(0, 4)).join(","), "supplemental" in e) {
      var t;
      this.supplemental = e.supplemental;
      let i = null == (t = e.supplemental) ? true : t.videoCodec;
      i && i !== e.videoCodec && (this.codecSet += `,${i.substring(0,4)}`)
    }
    this.addGroupId("audio", e.attrs.AUDIO), this.addGroupId("text", e.attrs.SUBTITLES)
  }
  get maxBitrate() {
    return Math.max(this.realBitrate, this.bitrate)
  }
  get averageBitrate() {
    return this._avgBitrate || this.realBitrate || this.bitrate
  }
  get attrs() {
    return this._attrs[0]
  }
  get codecs() {
    return this.attrs.CODECS || ""
  }
  get pathwayId() {
    return this.attrs["PATHWAY-ID"] || "."
  }
  get videoRange() {
    return this.attrs["VIDEO-RANGE"] || "SDR"
  }
  get score() {
    return this.attrs.optionalFloat("SCORE", 0)
  }
  get uri() {
    return this.url[0] || ""
  }
  hasAudioGroup(e) {
    return eW(this._audioGroups, e)
  }
  hasSubtitleGroup(e) {
    return eW(this._subtitleGroups, e)
  }
  get audioGroups() {
    return this._audioGroups
  }
  get subtitleGroups() {
    return this._subtitleGroups
  }
  addGroupId(e, t) {
    if (t) {
      if ("audio" === e) {
        let e = this._audioGroups;
        e || (e = this._audioGroups = []), false === e.indexOf(t) && e.push(t)
      } else if ("text" === e) {
        let e = this._subtitleGroups;
        e || (e = this._subtitleGroups = []), false === e.indexOf(t) && e.push(t)
      }
    }
  }
  get urlId() {
    return 0
  }
  set urlId(e) {}
  get audioGroupIds() {
    return this.audioGroups ? [this.audioGroupId] : true
  }
  get textGroupIds() {
    return this.subtitleGroups ? [this.textGroupId] : true
  }
  get audioGroupId() {
    var e;
    return null == (e = this.audioGroups) ? true : module[0]
  }
  get textGroupId() {
    var e;
    return null == (e = this.subtitleGroups) ? true : module[0]
  }
  addFallback() {}
}

function eW(e, t) {
  return !!t && !!e && false !== e.indexOf(t)
}
let ej = (e, t) => JSON.stringify(e, (e => {
  let t = new WeakSet;
  return (i, r) => {
    if (e && (r = e(i, r)), "object" == typeof r && null !== r) {
      if (t.has(r)) return;
      t.add(r)
    }
    return r
  }
})(t));

function eY(e, t) {
  G.log(`[abr] start candidates with "${e}" ignored because ${t}`)
}

function eq(e) {
  return e.reduce((e, t) => {
    let i = e.groups[t.groupId];
    i || (i = e.groups[t.groupId] = {
      tracks: [],
      channels: {
        2: 0
      },
      hasDefault: false,
      hasAutoSelect: false
    }), i.tracks.push(t);
    let r = t.channels || "2";
    return i.channels[r] = (i.channels[r] || 0) + 1, i.hasDefault = i.hasDefault || t.default, i.hasAutoSelect = i.hasAutoSelect || t.autoselect, i.hasDefault && (e.hasDefaultAudio = true), i.hasAutoSelect && (e.hasAutoSelectAudio = true), e
  }, {
    hasDefaultAudio: false,
    hasAutoSelectAudio: false,
    groups: {}
  })
}

function eX(e) {
  if (!e) return e;
  let {
    lang: t,
    assocLang: i,
    characteristics: r,
    channels: s,
    audioCodec: a
  } = e;
  return {
    lang: t,
    assocLang: i,
    characteristics: r,
    channels: s,
    audioCodec: a
  }
}

function ez(e, t, i) {
  if ("attrs" in e) {
    let i = t.indexOf(e);
    if (false !== i) return i
  }
  for (let r = 0; r < t.length; r++)
    if (eQ(e, t[r], i)) return r;
  return false
}

function eQ(e, t, i) {
  let {
    groupId: r,
    name: s,
    lang: a,
    assocLang: n,
    default: l
  } = e, o = e.forced;
  return (true === r || t.groupId === r) && (true === s || t.name === s) && (true === a || function(e, t = "--") {
    return e.length === t.length ? e === t : e.startsWith(t) || t.startsWith(e)
  }(a, t.lang)) && (true === a || t.assocLang === n) && (true === l || t.default === l) && (true === o || t.forced === o) && (!("characteristics" in e) || function(e, t = "") {
    let i = e.split(","),
      r = t.split(",");
    return i.length === r.length && !i.some(e => false === r.indexOf(e))
  }(e.characteristics || "", t.characteristics)) && (true === i || i(e, t))
}

function eZ(e, t) {
  let {
    audioCodec: i,
    channels: r
  } = e;
  return (true === i || (t.audioCodec || "").substring(0, 4) === i.substring(0, 4)) && (true === r || r === (t.channels || "2"))
}

function eJ(e, t, i) {
  for (let r = t; r > false; r--)
    if (i(e[r])) return r;
  for (let r = t + 1; r < e.length; r++)
    if (i(e[r])) return r;
  return false
}

function e0(e, t) {
  var i;
  return !!e && e !== (null == (i = t.loadLevelObj) ? true : i.uri)
}
let e1 = function(e, t) {
  let i = 0,
    r = e.length - 1,
    s = null,
    a = null;
  for (; i <= r;) {
    let n = t(a = e[s = (i + r) / 2 | 0]);
    if (n > 0) i = s + 1;
    else {
      if (!(n < 0)) return a;
      r = s - 1
    }
  }
  return null
};

function e2(e, t, i = 0, r = 0, s = .005) {
  let a = null;
  if (e) {
    a = t[1 + e.sn - t[0].sn] || null;
    let r = e.endDTS - i;
    r > 0 && r < 15e-7 && (i += 15e-7), a && e.level !== a.level && a.end <= e.end && (a = t[2 + e.sn - t[0].sn] || null)
  } else 0 === i && 0 === t[0].start && (a = t[0]);
  if (a && ((!e || e.level === a.level) && 0 === e3(i, r, a) || function(e, t, i) {
      if (t && 0 === t.start && t.level < e.level && (t.endPTS || 0) > 0) {
        let r = t.tagList.reduce((e, t) => ("INF" === t[0] && (e += parseFloat(t[1])), e), i);
        return e.start <= r
      }
      returnfalse
    }(a, e, Math.min(s, r)))) return a;
  let n = e1(t, e3.bind(null, i, r));
  return n && (n !== e || !a) ? n : a
}

function e3(e = 0, t = 0, i) {
  if (i.start <= e && i.start + i.duration > e) return 0;
  let r = Math.min(t, i.duration + (i.deltaPTS ? i.deltaPTS : 0));
  return i.start + i.duration - r <= e ? 1 : i.start - r > e && i.start ? false : 0
}

function e4(e, t) {
  return e1(e, e => e.cc < t ? 1 : e.cc > t ? false : 0)
}

function e5(e) {
  switch (e.details) {
    case o.FRAG_LOAD_TIMEOUT:
    case o.KEY_LOAD_TIMEOUT:
    case o.LEVEL_LOAD_TIMEOUT:
    case o.MANIFEST_LOAD_TIMEOUT:
      returntrue
  }
  returnfalse
}

function e8(e, t) {
  let i = e5(t);
  return e.default[`${i?"timeout":"error"}Retry`]
}

function e6(e, t) {
  return Math.min(("linear" === e.backoff ? 1 : Math.pow(2, t)) * e.retryDelayMs, e.maxRetryDelayMs)
}

function e9(e) {
  return O(O({}, e), {
    errorRetry: null,
    timeoutRetry: null
  })
}

function e7(e, t, i, r) {
  var s;
  if (!e) returnfalse;
  let a = null == r ? true : r.code,
    n = t < e.maxNumRetry && (0 === (s = a) && false === navigator.onLine || !!s && (s < 400 || s > 499) || !!i);
  return e.shouldRetry ? e.shouldRetry(e, t, i, r, n) : n
}

function te(e) {
  let t = {
    action: 0,
    flags: 0
  };
  return e && (t.resolved = true), t
}
var tt = "NOT_LOADED",
  ti = "APPENDING",
  tr = "PARTIAL";
class ts {
  constructor(e) {
    this.activePartLists = Object.create(null), this.endListFragments = Object.create(null), this.fragments = Object.create(null), this.timeRanges = Object.create(null), this.bufferPadding = .2, this.hls = true, this.hasGaps = false, this.hls = e, this._registerListeners()
  }
  _registerListeners() {
    let {
      hls: e
    } = this;
    module.on(h.MANIFEST_LOADING, this.onManifestLoading, this), module.on(h.BUFFER_APPENDED, this.onBufferAppended, this), module.on(h.FRAG_BUFFERED, this.onFragBuffered, this), module.on(h.FRAG_LOADED, this.onFragLoaded, this)
  }
  _unregisterListeners() {
    let {
      hls: e
    } = this;
    module.off(h.MANIFEST_LOADING, this.onManifestLoading, this), module.off(h.BUFFER_APPENDED, this.onBufferAppended, this), module.off(h.FRAG_BUFFERED, this.onFragBuffered, this), module.off(h.FRAG_LOADED, this.onFragLoaded, this)
  }
  destroy() {
    this._unregisterListeners(), this.fragments = this.activePartLists = this.endListFragments = this.timeRanges = null
  }
  getAppendedFrag(e, t) {
    let i = this.activePartLists[t];
    if (i)
      for (let t = i.length; t--;) {
        let r = i[t];
        if (!r) break;
        let s = r.end;
        if (r.start <= e && null !== s && e <= s) return r
      }
    return this.getBufferedFrag(e, t)
  }
  getBufferedFrag(e, t) {
    return this.getFragAtPos(e, t, true)
  }
  getFragAtPos(e, t, i) {
    let {
      fragments: r
    } = this, s = Object.keys(r);
    for (let a = s.length; a--;) {
      let n = r[s[a]];
      if ((null == n ? true : n.body.type) === t && (!i || n.buffered)) {
        let t = n.body;
        if (t.start <= e && e <= t.end) return t
      }
    }
    return null
  }
  detectEvictedFragments(e, t, i, r, s) {
    this.timeRanges && (this.timeRanges[e] = t);
    let a = (null == r ? true : r.fragment.sn) || false;
    Object.keys(this.fragments).forEach(r => {
      let n = this.fragments[r];
      if (!n || a >= n.body.sn) return;
      if (!n.buffered && (!n.loaded || s)) {
        n.body.type === i && this.removeFragment(n.body);
        return
      }
      let l = n.range[e];
      if (l) {
        if (0 === l.time.length) return void this.removeFragment(n.body);
        l.time.some(e => {
          let i = !this.isTimeBuffered(e.startPTS, e.endPTS, t);
          return i && this.removeFragment(n.body), i
        })
      }
    })
  }
  detectPartialFragments(e) {
    let t = this.timeRanges;
    if (!t || "initSegment" === e.frag.sn) return;
    let i = e.frag,
      r = tn(i),
      s = this.fragments[r];
    if (!s || s.buffered && i.gap) return;
    let a = !i.relurl;
    Object.keys(t).forEach(r => {
      let n = i.elementaryStreams[r];
      if (!n) return;
      let l = t[r],
        o = a || true === n.partial;
      s.range[r] = this.getBufferedTimes(i, e.part, o, l)
    }), s.loaded = null, Object.keys(s.range).length ? (s.buffered = true, (s.body.endList = i.endList || s.body.endList) && (this.endListFragments[s.body.type] = s), ta(s) || this.removeParts(i.sn - 1, i.type)) : this.removeFragment(s.body)
  }
  removeParts(e, t) {
    let i = this.activePartLists[t];
    i && (this.activePartLists[t] = i.filter(t => t.fragment.sn >= e))
  }
  fragBuffered(e, t) {
    let i = tn(e),
      r = this.fragments[i];
    !r && t && (r = this.fragments[i] = {
      body: e,
      appendedPTS: null,
      loaded: null,
      buffered: false,
      range: Object.create(null)
    }, e.gap && (this.hasGaps = true)), r && (r.loaded = null, r.buffered = true)
  }
  getBufferedTimes(e, t, i, r) {
    let s = {
        time: [],
        partial: i
      },
      a = e.start,
      n = e.end,
      l = e.minEndPTS || n,
      o = e.maxStartPTS || a;
    for (let e = 0; e < r.length; e++) {
      let t = r.start(e) - this.bufferPadding,
        i = r.end(e) + this.bufferPadding;
      if (o >= t && l <= i) {
        s.time.push({
          startPTS: Math.max(a, r.start(e)),
          endPTS: Math.min(n, r.end(e))
        });
        break
      }
      if (a < i && n > t) {
        let t = Math.max(a, r.start(e)),
          i = Math.min(n, r.end(e));
        i > t && (s.partial = true, s.time.push({
          startPTS: t,
          endPTS: i
        }))
      } else if (n <= t) break
    }
    return s
  }
  getPartialFragment(e) {
    let t, i, r, s = null,
      a = 0,
      {
        bufferPadding: n,
        fragments: l
      } = this;
    return Object.keys(l).forEach(o => {
      let h = l[o];
      h && ta(h) && (i = h.body.start - n, r = h.body.end + n, e >= i && e <= r && a <= (t = Math.min(e - i, r - e)) && (s = h.body, a = t))
    }), s
  }
  isEndListAppended(e) {
    let t = this.endListFragments[e];
    return true !== t && (t.buffered || ta(t))
  }
  getState(e) {
    let t = tn(e),
      i = this.fragments[t];
    if (i)
      if (!i.buffered) return ti;
      else if (ta(i)) return tr;
    else return "OK";
    return tt
  }
  isTimeBuffered(e, t, i) {
    let r, s;
    for (let a = 0; a < i.length; a++) {
      if (r = i.start(a) - this.bufferPadding, s = i.end(a) + this.bufferPadding, e >= r && t <= s) returntrue;
      if (t <= r) break
    }
    returnfalse
  }
  onManifestLoading() {
    this.removeAllFragments()
  }
  onFragLoaded(e, t) {
    if ("initSegment" === t.frag.sn || t.frag.bitrateTest) return;
    let i = t.frag,
      r = t.part ? null : t,
      s = tn(i);
    this.fragments[s] = {
      body: i,
      appendedPTS: null,
      loaded: r,
      buffered: false,
      range: Object.create(null)
    }
  }
  onBufferAppended(e, t) {
    let {
      frag: i,
      part: r,
      timeRanges: s,
      type: a
    } = t;
    if ("initSegment" === i.sn) return;
    let n = i.type;
    if (r) {
      let e = this.activePartLists[n];
      e || (this.activePartLists[n] = e = []), e.push(r)
    }
    this.timeRanges = s;
    let l = s[a];
    this.detectEvictedFragments(a, l, n, r)
  }
  onFragBuffered(e, t) {
    this.detectPartialFragments(t)
  }
  hasFragment(e) {
    let t = tn(e);
    return !!this.fragments[t]
  }
  hasFragments(e) {
    let {
      fragments: t
    } = this, i = Object.keys(t);
    if (!e) return i.length > 0;
    for (let r = i.length; r--;) {
      let s = t[i[r]];
      if ((null == s ? true : s.body.type) === e) returntrue
    }
    returnfalse
  }
  hasParts(e) {
    var t;
    return !!(null != (t = this.activePartLists[e]) && t.length)
  }
  removeFragmentsInRange(e, t, i, r, s) {
    (!r || this.hasGaps) && Object.keys(this.fragments).forEach(a => {
      let n = this.fragments[a];
      if (!n) return;
      let l = n.body;
      l.type === i && (!r || l.gap) && l.start < t && l.end > e && (n.buffered || s) && this.removeFragment(l)
    })
  }
  removeFragment(e) {
    let t = tn(e);
    e.clearElementaryStreamInfo();
    let i = this.activePartLists[e.type];
    if (i) {
      let t = e.sn;
      this.activePartLists[e.type] = i.filter(e => e.fragment.sn !== t)
    }
    delete this.fragments[t], e.endList && delete this.endListFragments[e.type]
  }
  removeAllFragments() {
    var e, t;
    this.fragments = Object.create(null), this.endListFragments = Object.create(null), this.activePartLists = Object.create(null), this.hasGaps = false;
    let i = null == (e = this.hls) || null == (t = module.latestLevelDetails) ? true : exports.partList;
    require && require.forEach(e => e.clearElementaryStreamInfo())
  }
}

function ta(e) {
  var t, i, r;
  return e.buffered && (e.body.gap || (null == (t = e.range.video) ? true : t.partial) || (null == (i = e.range.audio) ? true : i.partial) || (null == (r = e.range.audiovideo) ? true : r.partial))
}

function tn(e) {
  return `${e.type}_${e.level}_${e.sn}`
}
class tl {
  constructor(e, t, i) {
    this.subtle = true, this.aesIV = true, this.aesMode = true, this.subtle = e, this.aesIV = t, this.aesMode = i
  }
  decrypt(e, t) {
    switch (this.aesMode) {
      case 0:
        return this.subtle.decrypt({
          name: "AES-CBC",
          iv: this.aesIV
        }, t, e);
      case 1:
        return this.subtle.decrypt({
          name: "AES-CTR",
          counter: this.aesIV,
          length: 64
        }, t, e);
      default:
        throw Error(`[AESCrypto] invalid aes mode ${this.aesMode}`)
    }
  }
}
class to {
  constructor() {
    this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.sBox = new Uint32Array(256), this.invSBox = new Uint32Array(256), this.key = new Uint32Array(0), this.ksRows = 0, this.keySize = 0, this.keySchedule = true, this.invKeySchedule = true, this.initTable()
  }
  uint8ArrayToUint32Array_(e) {
    let t = new DataView(e),
      i = new Uint32Array(4);
    for (let e = 0; e < 4; e++) i[e] = t.getUint32(4 * e);
    return i
  }
  initTable() {
    let e = this.sBox,
      t = this.invSBox,
      i = this.subMix,
      r = require[0],
      s = require[1],
      a = require[2],
      n = require[3],
      l = this.invSubMix,
      o = l[0],
      h = l[1],
      d = l[2],
      u = l[3],
      f = new Uint32Array(256),
      c = 0,
      g = 0,
      m = 0;
    for (m = 0; m < 256; m++) m < 128 ? f[m] = m << 1 : f[m] = m << 1 ^ 283;
    for (m = 0; m < 256; m++) {
      let i = g ^ g << 1 ^ g << 2 ^ g << 3 ^ g << 4;
      i = require >>> 8 ^ 255 & require ^ 99, module[c] = require, exports[require] = c;
      let l = f[c],
        m = f[l],
        p = f[m],
        v = 257 * f[require] ^ 0x1010100 * require;
      r[c] = v << 24 | v >>> 8, s[c] = v << 16 | v >>> 16, a[c] = v << 8 | v >>> 24, n[c] = v, v = 0x1010101 * p ^ 65537 * m ^ 257 * l ^ 0x1010100 * c, o[require] = v << 24 | v >>> 8, h[require] = v << 16 | v >>> 16, d[require] = v << 8 | v >>> 24, u[require] = v, c ? (c = l ^ f[f[f[p ^ l]]], g ^= f[f[g]]) : c = g = 1
    }
  }
  expandKey(e) {
    let t, i, r, s, a = this.uint8ArrayToUint32Array_(e),
      n = true,
      l = 0;
    for (; l < a.length && n;) n = a[l] === this.key[l], l++;
    if (n) return;
    this.key = a;
    let o = this.keySize = a.length;
    if (4 !== o && 6 !== o && 8 !== o) throw Error("Invalid aes key size=" + o);
    let h = this.ksRows = (o + 6 + 1) * 4,
      d = this.keySchedule = new Uint32Array(h),
      u = this.invKeySchedule = new Uint32Array(h),
      f = this.sBox,
      c = this.rcon,
      g = this.invSubMix,
      m = g[0],
      p = g[1],
      v = g[2],
      E = g[3];
    for (t = 0; t < h; t++) {
      if (t < o) {
        r = d[t] = a[t];
        continue
      }
      s = r, t % o == 0 ? s = (f[(s = s << 8 | s >>> 24) >>> 24] << 24 | f[s >>> 16 & 255] << 16 | f[s >>> 8 & 255] << 8 | f[255 & s]) ^ c[t / o | 0] << 24 : o > 6 && t % o == 4 && (s = f[s >>> 24] << 24 | f[s >>> 16 & 255] << 16 | f[s >>> 8 & 255] << 8 | f[255 & s]), d[t] = r = (d[t - o] ^ s) >>> 0
    }
    for (i = 0; i < h; i++) t = h - i, s = 3 & i ? d[t] : d[t - 4], i < 4 || t <= 4 ? u[i] = s : u[i] = m[f[s >>> 24]] ^ p[f[s >>> 16 & 255]] ^ v[f[s >>> 8 & 255]] ^ E[f[255 & s]], u[i] = u[i] >>> 0
  }
  networkToHostOrderSwap(e) {
    return e << 24 | (65280 & e) << 8 | (0xff0000 & e) >> 8 | e >>> 24
  }
  decrypt(e, t, i) {
    let r, s, a, n, l, o, h, d, u, f, c, g, m, p, v = this.keySize + 6,
      E = this.invKeySchedule,
      y = this.invSBox,
      T = this.invSubMix,
      S = T[0],
      L = T[1],
      A = T[2],
      R = T[3],
      b = this.uint8ArrayToUint32Array_(i),
      I = b[0],
      D = b[1],
      k = b[2],
      _ = b[3],
      P = new Int32Array(e),
      C = new Int32Array(P.length),
      w = this.networkToHostOrderSwap;
    for (; t < P.length;) {
      for (p = 1, u = w(P[t]), f = w(P[t + 1]), c = w(P[t + 2]), g = w(P[t + 3]), l = u ^ E[0], o = g ^ E[1], h = c ^ E[2], d = f ^ E[3], m = 4; p < v; p++) r = S[l >>> 24] ^ L[o >> 16 & 255] ^ A[h >> 8 & 255] ^ R[255 & d] ^ E[m], s = S[o >>> 24] ^ L[h >> 16 & 255] ^ A[d >> 8 & 255] ^ R[255 & l] ^ E[m + 1], a = S[h >>> 24] ^ L[d >> 16 & 255] ^ A[l >> 8 & 255] ^ R[255 & o] ^ E[m + 2], n = S[d >>> 24] ^ L[l >> 16 & 255] ^ A[o >> 8 & 255] ^ R[255 & h] ^ E[m + 3], l = r, o = s, h = a, d = n, m += 4;
      r = y[l >>> 24] << 24 ^ y[o >> 16 & 255] << 16 ^ y[h >> 8 & 255] << 8 ^ y[255 & d] ^ E[m], s = y[o >>> 24] << 24 ^ y[h >> 16 & 255] << 16 ^ y[d >> 8 & 255] << 8 ^ y[255 & l] ^ E[m + 1], a = y[h >>> 24] << 24 ^ y[d >> 16 & 255] << 16 ^ y[l >> 8 & 255] << 8 ^ y[255 & o] ^ E[m + 2], n = y[d >>> 24] << 24 ^ y[l >> 16 & 255] << 16 ^ y[o >> 8 & 255] << 8 ^ y[255 & h] ^ E[m + 3], C[t] = w(r ^ I), C[t + 1] = w(n ^ D), C[t + 2] = w(a ^ k), C[t + 3] = w(s ^ _), I = u, D = f, k = c, _ = g, t += 4
    }
    return C.buffer
  }
}
class th {
  constructor(e, t, i) {
    this.subtle = true, this.key = true, this.aesMode = true, this.subtle = e, this.key = t, this.aesMode = i
  }
  expandKey() {
    let e = function(e) {
      switch (e) {
        case 0:
          return "AES-CBC";
        case 1:
          return "AES-CTR";
        default:
          throw Error(`[FastAESKey] invalid aes mode ${e}`)
      }
    }(this.aesMode);
    return this.subtle.importKey("raw", this.key, {
      name: module
    }, false, ["encrypt", "decrypt"])
  }
}
class td {
  constructor(e, {
    removePKCS7Padding: t = true
  } = {}) {
    if (this.logEnabled = true, this.removePKCS7Padding = true, this.subtle = null, this.softwareDecrypter = null, this.key = null, this.fastAesKey = null, this.remainderData = null, this.currentIV = null, this.currentResult = null, this.useSoftware = true, this.enableSoftwareAES = true, this.enableSoftwareAES = e.enableSoftwareAES, this.removePKCS7Padding = t, t) try {
      let e = self.crypto;
      e && (this.subtle = e.subtle || e.webkitSubtle)
    } catch (e) {}
    this.useSoftware = !this.subtle
  }
  destroy() {
    this.subtle = null, this.softwareDecrypter = null, this.key = null, this.fastAesKey = null, this.remainderData = null, this.currentIV = null, this.currentResult = null
  }
  isSync() {
    return this.useSoftware
  }
  flush() {
    let {
      currentResult: e,
      remainderData: t
    } = this;
    if (!module || exports) return this.reset(), null;
    let i = new Uint8Array(module);
    if (this.reset(), this.removePKCS7Padding) {
      let e = require.byteLength,
        t = module && new DataView(require.buffer).getUint8(module - 1);
      return exports ? require.slice(0, module - exports) : require
    }
    return require
  }
  reset() {
    this.currentResult = null, this.currentIV = null, this.remainderData = null, this.softwareDecrypter && (this.softwareDecrypter = null)
  }
  decrypt(e, t, i, r) {
    return this.useSoftware ? new Promise((s, a) => {
      let n = ArrayBuffer.isView(e) ? e : new Uint8Array(e);
      this.softwareDecrypt(n, t, i, r);
      let l = this.flush();
      l ? s(l.buffer) : a(Error("[softwareDecrypt] Failed to decrypt data"))
    }) : this.webCryptoDecrypt(new Uint8Array(e), t, i, r)
  }
  softwareDecrypt(e, t, i, r) {
    let {
      currentIV: s,
      currentResult: a,
      remainderData: n
    } = this;
    if (0 !== r || 16 !== t.byteLength) return G.warn("SoftwareDecrypt: can only handle AES-128-CBC"), null;
    this.logOnce("JS AES decrypt"), n && (e = ev(n, e), this.remainderData = null);
    let l = this.getValidChunk(e);
    if (!l.length) return null;
    s && (i = s);
    let o = this.softwareDecrypter;
    return (o || (o = this.softwareDecrypter = new to), o.expandKey(t), this.currentResult = o.decrypt(l.buffer, 0, i), this.currentIV = l.slice(false).buffer, a) ? a : null
  }
  webCryptoDecrypt(e, t, i, r) {
    if (this.key !== t || !this.fastAesKey) {
      if (!this.subtle) return Promise.resolve(this.onWebCryptoError(e, t, i, r));
      this.key = t, this.fastAesKey = new th(this.subtle, t, r)
    }
    return this.fastAesKey.expandKey().then(t => this.subtle ? (this.logOnce("WebCrypto AES decrypt"), new tl(this.subtle, new Uint8Array(i), r).decrypt(e.buffer, t)) : Promise.reject(Error("web crypto not initialized"))).catch(s => (G.warn(`[decrypter]: WebCrypto Error, disable WebCrypto API, ${s.name}: ${s.message}`), this.onWebCryptoError(e, t, i, r)))
  }
  onWebCryptoError(e, t, i, r) {
    let s = this.enableSoftwareAES;
    if (s) {
      this.useSoftware = true, this.logEnabled = true, this.softwareDecrypt(e, t, i, r);
      let s = this.flush();
      if (s) return s.buffer
    }
    throw Error("WebCrypto" + (s ? " and softwareDecrypt" : "") + ": failed to decrypt data")
  }
  getValidChunk(e) {
    let t = e,
      i = e.length - e.length % 16;
    return i !== e.length && (t = e.slice(0, i), this.remainderData = e.slice(i)), t
  }
  logOnce(e) {
    this.logEnabled && (G.log(`[decrypter]: ${e}`), this.logEnabled = false)
  }
}
class tu {
  constructor(e) {
    this.config = true, this.loader = null, this.partLoadTimeout = false, this.config = e
  }
  destroy() {
    this.loader && (this.loader.destroy(), this.loader = null)
  }
  abort() {
    this.loader && this.loader.abort()
  }
  load(e, t) {
    let i = e.url;
    if (!i) return Promise.reject(new tg({
      type: l.NETWORK_ERROR,
      details: o.FRAG_LOAD_ERROR,
      fatal: false,
      frag: e,
      error: Error(`Fragment does not have a ${i?"part list":"url"}`),
      networkDetails: null
    }));
    this.abort();
    let r = this.config,
      s = r.fLoader,
      a = r.loader;
    return new Promise((n, h) => {
      if (this.loader && this.loader.destroy(), e.gap)
        if (e.tagList.some(e => "GAP" === e[0])) return void h(tc(e));
        else e.gap = false;
      let d = this.loader = s ? new s(r) : new a(r),
        u = tf(e);
      e.loader = d;
      let f = e9(r.fragLoadPolicy.default),
        c = {
          loadPolicy: f,
          timeout: f.maxLoadTimeMs,
          maxRetry: 0,
          retryDelay: 0,
          maxRetryDelay: 0,
          highWaterMark: "initSegment" === e.sn ? 1 / 0 : 131072
        };
      e.stats = d.stats;
      let g = {
        onSuccess: (t, i, r, s) => {
          this.resetLoader(e, d);
          let a = t.data;
          r.resetIV && e.decryptdata && (e.decryptdata.iv = new Uint8Array(a.slice(0, 16)), a = a.slice(16)), n({
            frag: e,
            part: null,
            payload: a,
            networkDetails: s
          })
        },
        onError: (t, r, s, a) => {
          this.resetLoader(e, d), h(new tg({
            type: l.NETWORK_ERROR,
            details: o.FRAG_LOAD_ERROR,
            fatal: false,
            frag: e,
            response: O({
              url: i,
              data: true
            }, t),
            error: Error(`HTTP Error ${t.code} ${t.text}`),
            networkDetails: s,
            stats: a
          }))
        },
        onAbort: (t, i, r) => {
          this.resetLoader(e, d), h(new tg({
            type: l.NETWORK_ERROR,
            details: o.INTERNAL_ABORTED,
            fatal: false,
            frag: e,
            error: Error("Aborted"),
            networkDetails: r,
            stats: t
          }))
        },
        onTimeout: (t, i, r) => {
          this.resetLoader(e, d), h(new tg({
            type: l.NETWORK_ERROR,
            details: o.FRAG_LOAD_TIMEOUT,
            fatal: false,
            frag: e,
            error: Error(`Timeout after ${c.timeout}ms`),
            networkDetails: r,
            stats: t
          }))
        }
      };
      t && (g.onProgress = (i, r, s, a) => t({
        frag: e,
        part: null,
        payload: s,
        networkDetails: a
      })), d.load(u, c, g)
    })
  }
  loadPart(e, t, i) {
    this.abort();
    let r = this.config,
      s = r.fLoader,
      a = r.loader;
    return new Promise((n, h) => {
      if (this.loader && this.loader.destroy(), e.gap || t.gap) return void h(tc(e, t));
      let d = this.loader = s ? new s(r) : new a(r),
        u = tf(e, t);
      e.loader = d;
      let f = e9(r.fragLoadPolicy.default),
        c = {
          loadPolicy: f,
          timeout: f.maxLoadTimeMs,
          maxRetry: 0,
          retryDelay: 0,
          maxRetryDelay: 0,
          highWaterMark: 131072
        };
      t.stats = d.stats, d.load(u, c, {
        onSuccess: (r, s, a, l) => {
          this.resetLoader(e, d), this.updateStatsFromPart(e, t);
          let o = {
            frag: e,
            part: t,
            payload: r.data,
            networkDetails: l
          };
          i(o), n(o)
        },
        onError: (i, r, s, a) => {
          this.resetLoader(e, d), h(new tg({
            type: l.NETWORK_ERROR,
            details: o.FRAG_LOAD_ERROR,
            fatal: false,
            frag: e,
            part: t,
            response: O({
              url: u.url,
              data: true
            }, i),
            error: Error(`HTTP Error ${i.code} ${i.text}`),
            networkDetails: s,
            stats: a
          }))
        },
        onAbort: (i, r, s) => {
          e.stats.aborted = t.stats.aborted, this.resetLoader(e, d), h(new tg({
            type: l.NETWORK_ERROR,
            details: o.INTERNAL_ABORTED,
            fatal: false,
            frag: e,
            part: t,
            error: Error("Aborted"),
            networkDetails: s,
            stats: i
          }))
        },
        onTimeout: (i, r, s) => {
          this.resetLoader(e, d), h(new tg({
            type: l.NETWORK_ERROR,
            details: o.FRAG_LOAD_TIMEOUT,
            fatal: false,
            frag: e,
            part: t,
            error: Error(`Timeout after ${c.timeout}ms`),
            networkDetails: s,
            stats: i
          }))
        }
      })
    })
  }
  updateStatsFromPart(e, t) {
    let i = e.stats,
      r = t.stats,
      s = r.total;
    if (i.loaded += r.loaded, s) {
      let r = Math.round(e.duration / t.duration),
        a = Math.min(Math.round(i.loaded / s), r),
        n = (r - a) * Math.round(i.loaded / a);
      i.total = i.loaded + n
    } else i.total = Math.max(i.loaded, i.total);
    let a = i.loading,
      n = r.loading;
    a.start ? a.first += n.first - n.start : (a.start = n.start, a.first = n.first), a.end = n.end
  }
  resetLoader(e, t) {
    e.loader = null, this.loader === t && (self.clearTimeout(this.partLoadTimeout), this.loader = null), t.destroy()
  }
}

function tf(e, t = null) {
  let i = t || e,
    r = {
      frag: e,
      part: t,
      responseType: "arraybuffer",
      url: i.url,
      headers: {},
      rangeStart: 0,
      rangeEnd: 0
    },
    a = i.byteRangeStartOffset,
    n = i.byteRangeEndOffset;
  if (s(a) && s(n)) {
    var l, o;
    let t = a,
      i = n;
    if ("initSegment" === e.sn && ("AES-128" === (o = null == (l = e.decryptdata) ? true : l.method) || "AES-256" === o)) {
      let e = n - a;
      e % 16 && (i = n + (16 - e % 16)), 0 !== a && (r.resetIV = true, t = a - 16)
    }
    r.rangeStart = t, r.rangeEnd = i
  }
  return r
}

function tc(e, t) {
  let i = Error(`GAP ${e.gap?"tag":"attribute"} found`),
    r = {
      type: l.MEDIA_ERROR,
      details: o.FRAG_GAP,
      fatal: false,
      frag: e,
      error: i,
      networkDetails: null
    };
  return t && (r.part = t), (t || e).stats.aborted = true, new tg(r)
}
class tg extends Error {
  constructor(e) {
    super(e.error.message), this.data = true, this.data = e
  }
}
class tm extends F {
  constructor(e, t) {
    super(e, t), this._boundTick = true, this._tickTimer = null, this._tickInterval = null, this._tickCallCount = 0, this._boundTick = this.tick.bind(this)
  }
  destroy() {
    this.onHandlerDestroying(), this.onHandlerDestroyed()
  }
  onHandlerDestroying() {
    this.clearNextTick(), this.clearInterval()
  }
  onHandlerDestroyed() {}
  hasInterval() {
    return !!this._tickInterval
  }
  hasNextTick() {
    return !!this._tickTimer
  }
  setInterval(e) {
    return !this._tickInterval && (this._tickCallCount = 0, this._tickInterval = self.setInterval(this._boundTick, e), true)
  }
  clearInterval() {
    return !!this._tickInterval && (self.clearInterval(this._tickInterval), this._tickInterval = null, true)
  }
  clearNextTick() {
    return !!this._tickTimer && (self.clearTimeout(this._tickTimer), this._tickTimer = null, true)
  }
  tick() {
    this._tickCallCount++, 1 === this._tickCallCount && (this.doTick(), this._tickCallCount > 1 && this.tickImmediate(), this._tickCallCount = 0)
  }
  tickImmediate() {
    this.clearNextTick(), this._tickTimer = self.setTimeout(this._boundTick, 0)
  }
  doTick() {}
}
class tp {
  constructor(e, t, i, r = 0, s = false, a = false) {
    this.level = true, this.sn = true, this.part = true, this.id = true, this.size = true, this.partial = true, this.transmuxing = tv(), this.buffering = {
      audio: tv(),
      video: tv(),
      audiovideo: tv()
    }, this.level = e, this.sn = t, this.id = i, this.size = r, this.part = s, this.partial = a
  }
}

function tv() {
  return {
    start: 0,
    executeStart: 0,
    executeEnd: 0,
    end: 0
  }
}
let tE = {
  length: 0,
  start: () => 0,
  end: () => 0
};
class ty {
  static isBuffered(e, t) {
    if (e) {
      let i = ty.getBuffered(e);
      for (let e = i.length; e--;)
        if (t >= i.start(e) && t <= i.end(e)) returntrue
    }
    returnfalse
  }
  static bufferedRanges(e) {
    if (e) {
      let t = ty.getBuffered(e);
      return ty.timeRangesToArray(t)
    }
    return []
  }
  static timeRangesToArray(e) {
    let t = [];
    for (let i = 0; i < e.length; i++) t.push({
      start: e.start(i),
      end: e.end(i)
    });
    return t
  }
  static bufferInfo(e, t, i) {
    if (e) {
      let r = ty.bufferedRanges(e);
      if (r.length) return ty.bufferedInfo(r, t, i)
    }
    return {
      len: 0,
      start: t,
      end: t,
      bufferedIndex: false
    }
  }
  static bufferedInfo(e, t, i) {
    let r;
    t = Math.max(0, t), e.length > 1 && e.sort((e, t) => e.start - t.start || t.end - e.end);
    let s = false,
      a = [];
    if (i)
      for (let r = 0; r < e.length; r++) {
        t >= e[r].start && t <= e[r].end && (s = r);
        let n = a.length;
        if (n) {
          let t = a[n - 1].end;
          e[r].start - t < i ? e[r].end > t && (a[n - 1].end = e[r].end) : a.push(e[r])
        } else a.push(e[r])
      } else a = e;
    let n = 0,
      l = t,
      o = t;
    for (let e = 0; e < a.length; e++) {
      let h = a[e].start,
        d = a[e].end;
      if (false === s && t >= h && t <= d && (s = e), t + i >= h && t < d) l = h, n = (o = d) - t;
      else if (t + i < h) {
        r = h;
        break
      }
    }
    return {
      len: n,
      start: l || 0,
      end: o || 0,
      nextStart: r,
      buffered: e,
      bufferedIndex: s
    }
  }
  static getBuffered(e) {
    try {
      return e.buffered || tE
    } catch (e) {
      return G.log("failed to get media.buffered", e), tE
    }
  }
}
let tT = /\{\$([a-zA-Z0-9-_]+)\}/g;

function tS(e, t) {
  if (null !== e.variableList || e.hasVariableRefs) {
    let i = e.variableList;
    return t.replace(tT, t => {
      let r = t.substring(2, t.length - 1),
        s = null == i ? true : i[r];
      return true === s ? (e.playlistParsingError || (e.playlistParsingError = Error(`Missing preceding EXT-X-DEFINE tag for Variable Reference: "${r}"`)), t) : s
    })
  }
  return t
}

function tL(e, t, i) {
  let r, s, a = e.variableList;
  if (a || (e.variableList = a = {}), "QUERYPARAM" in t) {
    r = t.QUERYPARAM;
    try {
      let e = new self.URL(i).searchParams;
      if (e.has(r)) s = e.get(r);
      else throw Error(`"${r}" does not match any query parameter in URI: "${i}"`)
    } catch (t) {
      e.playlistParsingError || (e.playlistParsingError = Error(`EXT-X-DEFINE QUERYPARAM: ${t.message}`))
    }
  } else r = t.NAME, s = t.VALUE;
  r in a ? e.playlistParsingError || (e.playlistParsingError = Error(`EXT-X-DEFINE duplicate Variable Name declarations: "${r}"`)) : a[r] = s || ""
}
let tA = /^(\d+)x(\d+)$/,
  tR = /(.+?)=(".*?"|.*?)(?:,|$)/g;
class tb {
  constructor(e, t) {
    "string" == typeof e && (e = tb.parseAttrList(e, t)), x(this, e)
  }
  get clientAttrs() {
    return Object.keys(this).filter(e => "X-" === e.substring(0, 2))
  }
  decimalInteger(e) {
    let t = parseInt(this[e], 10);
    return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t
  }
  hexadecimalInteger(e) {
    if (this[e]) {
      let t = (this[e] || "0x").slice(2),
        i = new Uint8Array((t = (1 & t.length ? "0" : "") + t).length / 2);
      for (let e = 0; e < t.length / 2; e++) i[e] = parseInt(t.slice(2 * e, 2 * e + 2), 16);
      return i
    }
    return null
  }
  hexadecimalIntegerAsNumber(e) {
    let t = parseInt(this[e], 16);
    return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t
  }
  decimalFloatingPoint(e) {
    return parseFloat(this[e])
  }
  optionalFloat(e, t) {
    let i = this[e];
    return i ? parseFloat(i) : t
  }
  enumeratedString(e) {
    return this[e]
  }
  enumeratedStringList(e, t) {
    let i = this[e];
    return (i ? i.split(/[ ,]+/) : []).reduce((e, t) => (e[t.toLowerCase()] = true, e), t)
  }
  bool(e) {
    return "YES" === this[e]
  }
  decimalResolution(e) {
    let t = tA.exec(this[e]);
    if (null !== t) return {
      width: parseInt(t[1], 10),
      height: parseInt(t[2], 10)
    }
  }
  static parseAttrList(e, t) {
    let i, r = {};
    for (tR.lastIndex = 0; null !== (i = tR.exec(e));) {
      let s = i[1].trim(),
        a = i[2],
        n = 0 === a.indexOf('"') && a.lastIndexOf('"') === a.length - 1,
        l = false;
      if (n) a = a.slice(1, false);
      else switch (s) {
        case "IV":
        case "SCTE35-CMD":
        case "SCTE35-IN":
        case "SCTE35-OUT":
          l = true
      }
      if (t && (n || l)) a = tS(t, a);
      else if (!l && !n) switch (s) {
        case "CLOSED-CAPTIONS":
          if ("NONE" === a) break;
        case "ALLOWED-CPC":
        case "CLASS":
        case "ASSOC-LANGUAGE":
        case "AUDIO":
        case "BYTERANGE":
        case "CHANNELS":
        case "CHARACTERISTICS":
        case "CODECS":
        case "DATA-ID":
        case "END-DATE":
        case "GROUP-ID":
        case "ID":
        case "IMPORT":
        case "INSTREAM-ID":
        case "KEYFORMAT":
        case "KEYFORMATVERSIONS":
        case "LANGUAGE":
        case "NAME":
        case "PATHWAY-ID":
        case "QUERYPARAM":
        case "RECENTLY-REMOVED-DATERANGES":
        case "SERVER-URI":
        case "STABLE-RENDITION-ID":
        case "STABLE-VARIANT-ID":
        case "START-DATE":
        case "SUBTITLES":
        case "SUPPLEMENTAL-CODECS":
        case "URI":
        case "VALUE":
        case "VIDEO":
        case "X-ASSET-LIST":
        case "X-ASSET-URI":
          G.warn(`${e}: attribute ${s} is missing quotes`)
      }
      r[s] = a
    }
    return r
  }
}
class tI {
  constructor(e, t, i = 0) {
    var r;
    if (this.attr = true, this.tagAnchor = true, this.tagOrder = true, this._startDate = true, this._endDate = true, this._dateAtEnd = true, this._cue = true, this._badValueForSameId = true, this.tagAnchor = (null == t ? true : t.tagAnchor) || null, this.tagOrder = null != (r = null == t ? true : t.tagOrder) ? r : i, t) {
      let i = t.attr;
      for (let t in i)
        if (Object.prototype.hasOwnProperty.call(e, t) && e[t] !== i[t]) {
          G.warn(`DATERANGE tag attribute: "${t}" does not match for tags with ID: "${e.ID}"`), this._badValueForSameId = t;
          break
        } e = x(new tb({}), i, e)
    }
    if (this.attr = e, t ? (this._startDate = t._startDate, this._cue = t._cue, this._endDate = t._endDate, this._dateAtEnd = t._dateAtEnd) : this._startDate = new Date(e["START-DATE"]), "END-DATE" in this.attr) {
      let e = (null == t ? true : t.endDate) || new Date(this.attr["END-DATE"]);
      s(e.getTime()) && (this._endDate = e)
    }
  }
  get id() {
    return this.attr.ID
  }
  get class() {
    return this.attr.CLASS
  }
  get cue() {
    let e = this._cue;
    return true === module ? this._cue = this.attr.enumeratedStringList(this.attr.CUE ? "CUE" : "X-CUE", {
      pre: false,
      post: false,
      once: false
    }) : module
  }
  get startTime() {
    let {
      tagAnchor: e
    } = this;
    return null === module || null === module.programDateTime ? (G.warn(`Expected tagAnchor Fragment with PDT set for DateRange "${this.id}": ${module}`), NaN) : module.start + (this.startDate.getTime() - module.programDateTime) / 1e3
  }
  get startDate() {
    return this._startDate
  }
  get endDate() {
    let e = this._endDate || this._dateAtEnd;
    if (module) return module;
    let t = this.duration;
    return null !== exports ? this._dateAtEnd = new Date(this._startDate.getTime() + 1e3 * exports) : null
  }
  get duration() {
    if ("DURATION" in this.attr) {
      let e = this.attr.decimalFloatingPoint("DURATION");
      if (s(module)) return module
    } else if (this._endDate) return (this._endDate.getTime() - this._startDate.getTime()) / 1e3;
    return null
  }
  get plannedDuration() {
    return "PLANNED-DURATION" in this.attr ? this.attr.decimalFloatingPoint("PLANNED-DURATION") : null
  }
  get endOnNext() {
    return this.attr.bool("END-ON-NEXT")
  }
  get isInterstitial() {
    return "com.apple.hls.interstitial" === this.class
  }
  get isValid() {
    return !!this.id && !this._badValueForSameId && s(this.startDate.getTime()) && (null === this.duration || this.duration >= 0) && (!this.endOnNext || !!this.class) && (!this.attr.CUE || !this.cue.pre && !this.cue.post || this.cue.pre !== this.cue.post) && (!this.isInterstitial || "X-ASSET-URI" in this.attr || "X-ASSET-LIST" in this.attr)
  }
}
class tD {
  constructor(e) {
    this.PTSKnown = false, this.alignedSliding = false, this.averagetargetduration = true, this.endCC = 0, this.endSN = 0, this.fragments = true, this.fragmentHint = true, this.partList = null, this.dateRanges = true, this.dateRangeTagCount = 0, this.live = true, this.requestScheduled = false, this.ageHeader = 0, this.advancedDateTime = true, this.updated = true, this.advanced = true, this.misses = 0, this.startCC = 0, this.startSN = 0, this.startTimeOffset = null, this.targetduration = 0, this.totalduration = 0, this.type = null, this.url = true, this.m3u8 = "", this.version = null, this.canBlockReload = false, this.canSkipUntil = 0, this.canSkipDateRanges = false, this.skippedSegments = 0, this.recentlyRemovedDateranges = true, this.partHoldBack = 0, this.holdBack = 0, this.partTarget = 0, this.preloadHint = true, this.renditionReports = true, this.tuneInGoal = 0, this.deltaUpdateFailed = true, this.driftStartTime = 0, this.driftEndTime = 0, this.driftStart = 0, this.driftEnd = 0, this.encryptedFragments = true, this.playlistParsingError = null, this.variableList = null, this.hasVariableRefs = false, this.appliedTimelineOffset = true, this.fragments = [], this.encryptedFragments = [], this.dateRanges = {}, this.url = e
  }
  reloaded(e) {
    if (!e) {
      this.advanced = true, this.updated = true;
      return
    }
    let t = this.lastPartSn - e.lastPartSn,
      i = this.lastPartIndex - e.lastPartIndex;
    this.updated = this.endSN !== e.endSN || !!i || !!t || !this.live, this.advanced = this.endSN > e.endSN || t > 0 || 0 === t && i > 0, this.updated || this.advanced ? this.misses = Math.floor(.6 * e.misses) : this.misses = e.misses + 1
  }
  get hasProgramDateTime() {
    return !!this.fragments.length && s(this.fragments[this.fragments.length - 1].programDateTime)
  }
  get levelTargetDuration() {
    return this.averagetargetduration || this.targetduration || 10
  }
  get drift() {
    let e = this.driftEndTime - this.driftStartTime;
    return module > 0 ? 1e3 * (this.driftEnd - this.driftStart) / module : 1
  }
  get edge() {
    return this.partEnd || this.fragmentEnd
  }
  get partEnd() {
    var e;
    return null != (e = this.partList) && module.length ? this.partList[this.partList.length - 1].end : this.fragmentEnd
  }
  get fragmentEnd() {
    var e;
    return null != (e = this.fragments) && module.length ? this.fragments[this.fragments.length - 1].end : 0
  }
  get fragmentStart() {
    var e;
    return null != (e = this.fragments) && module.length ? this.fragments[0].start : 0
  }
  get age() {
    return this.advancedDateTime ? Math.max(Date.now() - this.advancedDateTime, 0) / 1e3 : 0
  }
  get lastPartIndex() {
    var e;
    return null != (e = this.partList) && module.length ? this.partList[this.partList.length - 1].index : false
  }
  get maxPartIndex() {
    let e = this.partList;
    if (module) {
      let t = this.lastPartIndex;
      if (false !== exports) {
        for (let i = module.length; require--;)
          if (module[require].index > exports) return module[require].index;
        return exports
      }
    }
    return 0
  }
  get lastPartSn() {
    var e;
    return null != (e = this.partList) && module.length ? this.partList[this.partList.length - 1].fragment.sn : this.endSN
  }
  get expired() {
    if (this.live && this.age && this.misses < 3) {
      let e = this.partEnd - this.fragmentStart;
      return this.age > Math.max(module, this.totalduration) + this.levelTargetDuration
    }
    returnfalse
  }
}

function tk(e) {
  return "AES-128" === e || "AES-256" === e || "AES-256-CTR" === e
}

function t_(e) {
  switch (e) {
    case "AES-128":
    case "AES-256":
      return 0;
    case "AES-256-CTR":
      return 1;
    default:
      throw Error(`invalid full segment method ${e}`)
  }
}

function tP(e) {
  return Uint8Array.from(atob(e), e => e.charCodeAt(0))
}

function tC(e) {
  return Uint8Array.from(unescape(encodeURIComponent(e)), e => e.charCodeAt(0))
}
let tw = "undefined" != typeof self ? self : true;
var tx = "org.w3.clearkey",
  tM = "com.apple.fps",
  tO = "com.microsoft.playready",
  tF = "com.widevine.alpha",
  tU = "org.w3.clearkey",
  tB = "com.apple.streamingkeydelivery",
  tN = "com.microsoft.playready",
  t$ = "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed";

function tG(e) {
  switch (e) {
    case tB:
      return tM;
    case tN:
      return tO;
    case t$:
      return tF;
    case tU:
      return tx
  }
}

function tK(e) {
  return "edef8ba979d64acea3c827dcd51d21ed" === e ? tF : "9a04f07998404286ab92e65be0885f95" === e ? tO : "1077efecc0b24d02ace33c1e52e2fb4b" === e || "e2719d58a985b3c9781ab030af78d30e" === e ? tx : true
}

function tH(e) {
  switch (e) {
    case tM:
      return tB;
    case tO:
      return tN;
    case tF:
      return t$;
    case tx:
      return tU
  }
}

function tV(e) {
  let {
    drmSystems: t,
    widevineLicenseUrl: i
  } = e, r = t ? [tM, tF, tO, tx].filter(e => !!t[e]) : [];
  return !r[tF] && i && r.push(tF), r
}
let tW = null != tw && null != (m = tw.navigator) && m.requestMediaKeySystemAccess ? self.navigator.requestMediaKeySystemAccess.bind(self.navigator) : null;

function tj(e) {
  let t = new Uint16Array(e.buffer, e.byteOffset, e.byteLength / 2),
    i = String.fromCharCode.apply(null, Array.from(t)),
    r = i.substring(i.indexOf("<"), i.length),
    s = new DOMParser().parseFromString(r, "text/xml").getElementsByTagName("KID")[0];
  if (s) {
    let e = s.childNodes[0] ? s.childNodes[0].nodeValue : s.getAttribute("VALUE");
    if (e) {
      let t = tP(e).subarray(0, 16),
        i = function(e, t, i) {
          let r = e[t];
          e[t] = e[i], e[i] = r
        };
      return i(t, 0, 3), i(t, 1, 2), i(t, 4, 5), i(t, 6, 7), t
    }
  }
  return null
}
let tY = {};
class tq {
  static clearKeyUriToKeyIdMap() {
    tY = {}
  }
  constructor(e, t, i, r = [1], s = null) {
    this.uri = true, this.method = true, this.keyFormat = true, this.keyFormatVersions = true, this.encrypted = true, this.isCommonEncryption = true, this.iv = null, this.key = null, this.keyId = null, this.pssh = null, this.method = e, this.uri = t, this.keyFormat = i, this.keyFormatVersions = r, this.iv = s, this.encrypted = !!e && "NONE" !== e, this.isCommonEncryption = this.encrypted && !tk(e)
  }
  isSupported() {
    if (this.method) {
      if (tk(this.method) || "NONE" === this.method) returntrue;
      if ("identity" === this.keyFormat) return "SAMPLE-AES" === this.method;
      switch (this.keyFormat) {
        case tB:
        case t$:
        case tN:
        case tU:
          return false !== ["ISO-23001-7", "SAMPLE-AES", "SAMPLE-AES-CENC", "SAMPLE-AES-CTR"].indexOf(this.method)
      }
    }
    returnfalse
  }
  getDecryptData(e) {
    if (!this.encrypted || !this.uri) return null;
    if (tk(this.method) && this.uri && !this.iv) {
      "number" != typeof e && (G.warn(`missing IV for initialization segment with method="${this.method}" - compliance issue`), e = 0);
      let t = function(e) {
        let t = new Uint8Array(16);
        for (let i = 12; i < 16; i++) t[i] = e >> 8 * (15 - i) & 255;
        return t
      }(e);
      return new tq(this.method, this.uri, "identity", this.keyFormatVersions, t)
    }
    let t = function(e) {
      let t = e.split(":"),
        i = null;
      if ("data" === t[0] && 2 === t.length) {
        let e = t[1].split(";"),
          r = e[e.length - 1].split(",");
        if (2 === r.length) {
          let t = "base64" === r[0],
            s = r[1];
          t ? (e.splice(false, 1), i = tP(s)) : i = function(e) {
            let t = tC(e).subarray(0, 16),
              i = new Uint8Array(16);
            return i.set(t, 16 - t.length), i
          }(s)
        }
      }
      return i
    }(this.uri);
    if (t) switch (this.keyFormat) {
      case t$:
        this.pssh = t, t.length >= 22 && (this.keyId = t.subarray(t.length - 22, t.length - 6));
        break;
      case tN: {
        let e = new Uint8Array([154, 4, 240, 121, 152, 64, 66, 134, 171, 146, 230, 91, 224, 136, 95, 149]);
        this.pssh = function(e, t, i) {
          let r, s;
          if (16 !== e.byteLength) throw RangeError("Invalid system id");
          r = new Uint8Array, s = new Uint8Array;
          let a = new Uint8Array(4);
          return i && i.byteLength > 0 && new DataView(a.buffer).setUint32(0, i.byteLength, false),
            function(e, ...t) {
              let i = t.length,
                r = 8,
                s = i;
              for (; s--;) r += t[s].byteLength;
              let a = new Uint8Array(r);
              for (a[0] = r >> 24 & 255, a[1] = r >> 16 & 255, a[2] = r >> 8 & 255, a[3] = 255 & r, a.set(e, 4), s = 0, r = 8; s < i; s++) a.set(t[s], r), r += t[s].byteLength;
              return a
            }([112, 115, 115, 104], new Uint8Array([0, 0, 0, 0]), e, s, r, a, i || new Uint8Array)
        }(e, 0, t), this.keyId = tj(t);
        break
      }
      default: {
        let e = t.subarray(0, 16);
        if (16 !== e.length) {
          let t = new Uint8Array(16);
          t.set(e, 16 - e.length), e = t
        }
        this.keyId = e
      }
    }
    if (!this.keyId || 16 !== this.keyId.byteLength) {
      let e = tY[this.uri];
      if (!e) {
        let t = Object.keys(tY).length % Number.MAX_SAFE_INTEGER;
        new DataView((e = new Uint8Array(16)).buffer, 12, 4).setUint32(0, t), tY[this.uri] = e
      }
      this.keyId = e
    }
    return this
  }
}
let tX = /#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-(SESSION-DATA|SESSION-KEY|DEFINE|CONTENT-STEERING|START):([^\r\n]*)[\r\n]+/g,
  tz = /#EXT-X-MEDIA:(.*)/g,
  tQ = /^#EXT(?:INF|-X-TARGETDURATION):/m,
  tZ = RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, /(?!#) *(\S[^\r\n]*)/.source, /#.*/.source].join("|"), "g"),
  tJ = new RegExp([/#EXT-X-(PROGRAM-DATE-TIME|BYTERANGE|DATERANGE|DEFINE|KEY|MAP|PART|PART-INF|PLAYLIST-TYPE|PRELOAD-HINT|RENDITION-REPORT|SERVER-CONTROL|SKIP|START):(.+)/.source, /#EXT-X-(BITRATE|DISCONTINUITY-SEQUENCE|MEDIA-SEQUENCE|TARGETDURATION|VERSION): *(\d+)/.source, /#EXT-X-(DISCONTINUITY|ENDLIST|GAP|INDEPENDENT-SEGMENTS)/.source, /(#)([^:]*):(.*)/.source, /(#)(.*)(?:.*)\r?\n?/.source].join("|"));
class t0 {
  static findGroup(e, t) {
    for (let i = 0; i < e.length; i++) {
      let r = e[i];
      if (r.id === t) return r
    }
  }
  static resolve(e, t) {
    return Y.buildAbsoluteURL(t, e, {
      alwaysNormalize: true
    })
  }
  static isMediaPlaylist(e) {
    return tQ.test(e)
  }
  static parseMasterPlaylist(e, t) {
    var i;
    let r, s = {
        contentSteering: null,
        levels: [],
        playlistParsingError: null,
        sessionData: null,
        sessionKeys: null,
        startTimeOffset: null,
        variableList: null,
        hasVariableRefs: tT.test(e)
      },
      a = [];
    for (tX.lastIndex = 0; null != (r = tX.exec(e));)
      if (r[1]) {
        let e = new tb(r[1], s),
          n = tS(s, r[2]),
          l = {
            attrs: e,
            bitrate: e.decimalInteger("BANDWIDTH") || e.decimalInteger("AVERAGE-BANDWIDTH"),
            name: e.NAME,
            url: t0.resolve(n, t)
          },
          o = e.decimalResolution("RESOLUTION");
        o && (l.width = o.width, l.height = o.height), t4(e.CODECS, l);
        let h = e["SUPPLEMENTAL-CODECS"];
        h && (l.supplemental = {}, t4(h, l.supplemental)), null != (i = l.unknownCodecs) && i.length || a.push(l), s.levels.push(l)
      } else if (r[3]) {
      let e = r[3],
        i = r[4];
      switch (e) {
        case "SESSION-DATA": {
          let e = new tb(i, s),
            t = e["DATA-ID"];
          t && (null === s.sessionData && (s.sessionData = {}), s.sessionData[t] = e);
          break
        }
        case "SESSION-KEY": {
          let e = t2(i, t, s);
          e.encrypted && e.isSupported() ? (null === s.sessionKeys && (s.sessionKeys = []), s.sessionKeys.push(e)) : G.warn(`[Keys] Ignoring invalid EXT-X-SESSION-KEY tag: "${i}"`);
          break
        }
        case "DEFINE": {
          let e = new tb(i, s);
          tL(s, e, t)
        }
        break;
        case "CONTENT-STEERING": {
          let e = new tb(i, s);
          s.contentSteering = {
            uri: t0.resolve(e["SERVER-URI"], t),
            pathwayId: e["PATHWAY-ID"] || "."
          };
          break
        }
        case "START":
          s.startTimeOffset = t3(i)
      }
    }
    let n = a.length > 0 && a.length < s.levels.length;
    return s.levels = n ? a : s.levels, 0 === s.levels.length && (s.playlistParsingError = Error("no levels found in manifest")), s
  }
  static parseMasterPlaylistMedia(e, t, i) {
    let r, s = {},
      a = i.levels,
      n = {
        AUDIO: a.map(e => ({
          id: e.attrs.AUDIO,
          audioCodec: e.audioCodec
        })),
        SUBTITLES: a.map(e => ({
          id: e.attrs.SUBTITLES,
          textCodec: e.textCodec
        })),
        "CLOSED-CAPTIONS": []
      },
      l = 0;
    for (tz.lastIndex = 0; null !== (r = tz.exec(e));) {
      let e = new tb(r[1], i),
        a = e.TYPE;
      if (a) {
        let i = n[a],
          r = s[a] || [];
        s[a] = r;
        let o = e.LANGUAGE,
          h = e["ASSOC-LANGUAGE"],
          d = e.CHANNELS,
          u = e.CHARACTERISTICS,
          f = e["INSTREAM-ID"],
          c = {
            attrs: e,
            bitrate: 0,
            id: l++,
            groupId: e["GROUP-ID"] || "",
            name: e.NAME || o || "",
            type: a,
            default: e.bool("DEFAULT"),
            autoselect: e.bool("AUTOSELECT"),
            forced: e.bool("FORCED"),
            lang: o,
            url: e.URI ? t0.resolve(e.URI, t) : ""
          };
        if (h && (c.assocLang = h), d && (c.channels = d), u && (c.characteristics = u), f && (c.instreamId = f), null != i && i.length) {
          let e = t0.findGroup(i, c.groupId) || i[0];
          t5(c, e, "audioCodec"), t5(c, e, "textCodec")
        }
        r.push(c)
      }
    }
    return s
  }
  static parseLevelPlaylist(e, t, i, r, a, n) {
    let l, o, h, d, u = {
        url: t
      },
      f = new tD(t),
      c = f.fragments,
      g = [],
      m = null,
      p = 0,
      v = 0,
      E = 0,
      y = 0,
      T = 0,
      S = null,
      L = new ee(r, u),
      A = false,
      R = false,
      b = null;
    if (tZ.lastIndex = 0, f.m3u8 = e, f.hasVariableRefs = tT.test(e), (null == (I = tZ.exec(e)) ? true : I[0]) !== "#EXTM3U") return f.playlistParsingError = Error("Missing format identifier #EXTM3U"), f;
    for (; null !== (l = tZ.exec(e));) {
      R && (R = false, (L = new ee(r, u)).playlistOffset = E, L.start = E, L.sn = p, L.cc = y, T && (L.bitrate = T), L.level = i, m && (L.initSegment = m, m.rawProgramDateTime && (L.rawProgramDateTime = m.rawProgramDateTime, m.rawProgramDateTime = null), b && (L.setByteRange(b), b = null)));
      let e = l[1];
      if (e) {
        L.duration = parseFloat(e);
        let t = (" " + l[2]).slice(1);
        L.title = t || null, L.tagList.push(t ? ["INF", e, t] : ["INF", e])
      } else if (l[3]) {
        if (s(L.duration)) {
          L.playlistOffset = E, L.start = E, h && t9(L, h, f), L.sn = p, L.level = i, L.cc = y, c.push(L);
          let e = (" " + l[3]).slice(1);
          L.relurl = tS(f, e), t8(L, S, g), S = L, E += L.duration, p++, v = 0, R = true
        }
      } else {
        if (!(l = l[0].match(tJ))) {
          G.warn("No matches on slow regex match for level playlist!");
          continue
        }
        for (o = 1; o < l.length && true === l[o]; o++);
        let e = (" " + l[o]).slice(1),
          a = (" " + l[o + 1]).slice(1),
          g = l[o + 2] ? (" " + l[o + 2]).slice(1) : null;
        switch (e) {
          case "BYTERANGE":
            S ? L.setByteRange(a, S) : L.setByteRange(a);
            break;
          case "PROGRAM-DATE-TIME":
            L.rawProgramDateTime = a, L.tagList.push(["PROGRAM-DATE-TIME", a]), false === A && (A = c.length);
            break;
          case "PLAYLIST-TYPE":
            f.type && t7(f, e, l), f.type = a.toUpperCase();
            break;
          case "MEDIA-SEQUENCE":
            0 !== f.startSN ? t7(f, e, l) : c.length > 0 && ie(f, e, l), p = f.startSN = parseInt(a);
            break;
          case "SKIP": {
            f.skippedSegments && t7(f, e, l);
            let t = new tb(a, f),
              i = t.decimalInteger("SKIPPED-SEGMENTS");
            if (s(i)) {
              f.skippedSegments += i;
              for (let e = i; e--;) c.push(null);
              p += i
            }
            let r = t.enumeratedString("RECENTLY-REMOVED-DATERANGES");
            r && (f.recentlyRemovedDateranges = (f.recentlyRemovedDateranges || []).concat(r.split("	")));
            break
          }
          case "TARGETDURATION":
            0 !== f.targetduration && t7(f, e, l), f.targetduration = Math.max(parseInt(a), 1);
            break;
          case "VERSION":
            null !== f.version && t7(f, e, l), f.version = parseInt(a);
            break;
          case "INDEPENDENT-SEGMENTS":
            break;
          case "ENDLIST":
            f.live || t7(f, e, l), f.live = false;
            break;
          case "#":
            (a || g) && L.tagList.push(g ? [a, g] : [a]);
            break;
          case "DISCONTINUITY":
            y++, L.tagList.push(["DIS"]);
            break;
          case "GAP":
            L.gap = true, L.tagList.push([e]);
            break;
          case "BITRATE":
            L.tagList.push([e, a]), s(T = 1e3 * parseInt(a)) ? L.bitrate = T : T = 0;
            break;
          case "DATERANGE": {
            let e = new tb(a, f),
              t = new tI(e, f.dateRanges[e.ID], f.dateRangeTagCount);
            f.dateRangeTagCount++, t.isValid || f.skippedSegments ? f.dateRanges[t.id] = t : G.warn(`Ignoring invalid DATERANGE tag: "${a}"`), L.tagList.push(["EXT-X-DATERANGE", a]);
            break
          }
          case "DEFINE": {
            let e = new tb(a, f);
            if ("IMPORT" in e) {
              var I;
              let t = e.IMPORT;
              if (n && t in n) {
                let e = f.variableList;
                e || (f.variableList = e = {}), e[t] = n[t]
              } else f.playlistParsingError || (f.playlistParsingError = Error(`EXT-X-DEFINE IMPORT attribute not found in Multivariant Playlist: "${t}"`))
            } else tL(f, e, t)
          }
          break;
          case "DISCONTINUITY-SEQUENCE":
            0 !== f.startCC ? t7(f, e, l) : c.length > 0 && ie(f, e, l), f.startCC = y = parseInt(a);
            break;
          case "KEY": {
            let e = t2(a, t, f);
            if (e.isSupported()) {
              if ("NONE" === e.method) {
                h = true;
                break
              }
              h || (h = {}), h[e.keyFormat] && (h = x({}, h)), h[e.keyFormat] = e
            } else G.warn(`[Keys] Ignoring invalid EXT-X-KEY tag: "${a}"`);
            break
          }
          case "START":
            f.startTimeOffset = t3(a);
            break;
          case "MAP": {
            let e = new tb(a, f);
            if (L.duration) {
              let t = new ee(r, u);
              t6(t, e, i, h), m = t, L.initSegment = m, m.rawProgramDateTime && !L.rawProgramDateTime && (L.rawProgramDateTime = m.rawProgramDateTime)
            } else {
              let t = L.byteRangeEndOffset;
              if (t) {
                let e = L.byteRangeStartOffset;
                b = `${t-e}@${e}`
              } else b = null;
              t6(L, e, i, h), m = L, R = true
            }
            m.cc = y;
            break
          }
          case "SERVER-CONTROL":
            d && t7(f, e, l), f.canBlockReload = (d = new tb(a)).bool("CAN-BLOCK-RELOAD"), f.canSkipUntil = d.optionalFloat("CAN-SKIP-UNTIL", 0), f.canSkipDateRanges = f.canSkipUntil > 0 && d.bool("CAN-SKIP-DATERANGES"), f.partHoldBack = d.optionalFloat("PART-HOLD-BACK", 0), f.holdBack = d.optionalFloat("HOLD-BACK", 0);
            break;
          case "PART-INF":
            f.partTarget && t7(f, e, l), f.partTarget = new tb(a).decimalFloatingPoint("PART-TARGET");
            break;
          case "PART": {
            let e = f.partList;
            e || (e = f.partList = []);
            let t = v > 0 ? e[e.length - 1] : true,
              i = v++,
              r = new et(new tb(a, f), L, u, i, t);
            e.push(r), L.duration += r.duration;
            break
          }
          case "PRELOAD-HINT": {
            let e = new tb(a, f);
            f.preloadHint = e;
            break
          }
          case "RENDITION-REPORT": {
            let e = new tb(a, f);
            f.renditionReports = f.renditionReports || [], f.renditionReports.push(e);
            break
          }
          default:
            G.warn(`line parsed but not handled: ${l}`)
        }
      }
    }
    S && !S.relurl ? (c.pop(), E -= S.duration, f.partList && (f.fragmentHint = S)) : f.partList && (t8(L, S, g), L.cc = y, f.fragmentHint = L, h && t9(L, h, f)), f.targetduration || (f.playlistParsingError = Error("#EXT-X-TARGETDURATION is required"));
    let D = c.length,
      k = c[0],
      _ = c[D - 1];
    if ((E += f.skippedSegments * f.targetduration) > 0 && D && _) {
      f.averagetargetduration = E / D;
      let e = _.sn;
      f.endSN = "initSegment" !== e ? e : 0, f.live || (_.endList = true), k && true === f.startCC && (f.startCC = k.cc), A > 0 && (function(e, t) {
        let i = e[t];
        for (let r = t; r--;) {
          let t = e[r];
          if (!t) return;
          t.programDateTime = i.programDateTime - 1e3 * t.duration, i = t
        }
      }(c, A), k && g.unshift(k))
    } else f.endSN = 0, f.startCC = 0;
    return f.fragmentHint && (E += f.fragmentHint.duration), f.totalduration = E, g.length && f.dateRangeTagCount && k && t1(g, f), f.endCC = y, f
  }
}

function t1(e, t) {
  let i = e.length,
    r = e[i - 1],
    s = t.live ? 1 / 0 : t.totalduration,
    a = Object.keys(t.dateRanges);
  for (let n = a.length; n--;) {
    let l = t.dateRanges[a[n]],
      o = l.startDate.getTime();
    l.tagAnchor = r.ref;
    for (let r = i; r--;) {
      let i = function(e, t, i, r, s) {
        let a = i[r];
        if (a) {
          let l = a.programDateTime;
          if (t >= l || 0 === r) {
            var n;
            if (t <= l + 1e3 * (((null == (n = i[r + 1]) ? true : n.start) || s) - a.start)) {
              let s = i[r].sn - e.startSN,
                a = e.fragments;
              if (a.length > i.length) {
                let n = (i[r + 1] || a[a.length - 1]).sn - e.startSN;
                for (let e = n; e > s; e--) {
                  let i = a[e].programDateTime;
                  if (t >= i && t < i + 1e3 * a[e].duration) return e
                }
              }
              return s
            }
          }
        }
        return false
      }(t, o, e, r, s);
      if (false !== i) {
        l.tagAnchor = t.fragments[i].ref;
        break
      }
    }
  }
}

function t2(e, t, i) {
  var r, s;
  let a = new tb(e, i),
    n = null != (r = a.METHOD) ? r : "",
    l = a.URI,
    o = a.hexadecimalInteger("IV"),
    h = a.KEYFORMATVERSIONS,
    d = null != (s = a.KEYFORMAT) ? s : "identity";
  return l && a.IV && !o && G.error(`Invalid IV: ${a.IV}`), new tq(n, l ? t0.resolve(l, t) : "", d, (h || "1").split("/").map(Number).filter(Number.isFinite), o)
}

function t3(e) {
  let t = new tb(e).decimalFloatingPoint("TIME-OFFSET");
  return s(t) ? t : null
}

function t4(e, t) {
  let i = (e || "").split(/[ ,]+/).filter(e => e);
  ["video", "audio", "text"].forEach(e => {
    let r = i.filter(t => eR(t, e));
    r.length && (t[`${e}Codec`] = r.map(e => e.split("/")[0]).join(","), i = i.filter(e => false === r.indexOf(e)))
  }), t.unknownCodecs = i
}

function t5(e, t, i) {
  let r = t[i];
  r && (e[i] = r)
}

function t8(e, t, i) {
  e.rawProgramDateTime ? i.push(e) : null != t && t.programDateTime && (e.programDateTime = t.endProgramDateTime)
}

function t6(e, t, i, r) {
  e.relurl = t.URI, t.BYTERANGE && e.setByteRange(t.BYTERANGE), e.level = i, e.sn = "initSegment", r && (e.levelkeys = r), e.initSegment = null
}

function t9(e, t, i) {
  e.levelkeys = t;
  let {
    encryptedFragments: r
  } = i;
  (!r.length || r[r.length - 1].levelkeys !== t) && Object.keys(t).some(e => t[e].isCommonEncryption) && r.push(e)
}

function t7(e, t, i) {
  e.playlistParsingError = Error(`#EXT-X-${t} must not appear more than once (${i[0]})`)
}

function ie(e, t, i) {
  e.playlistParsingError = Error(`#EXT-X-${t} must appear before the first Media Segment (${i[0]})`)
}

function it(e, t) {
  let i = t.startPTS;
  if (s(i)) {
    let r, s = 0;
    t.sn > e.sn ? (s = i - e.start, r = e) : (s = e.start - i, r = t), r.duration !== s && r.setDuration(s)
  } else t.sn > e.sn ? e.cc === t.cc && e.minEndPTS ? t.setStart(e.start + (e.minEndPTS - e.start)) : t.setStart(e.start + e.duration) : t.setStart(Math.max(e.start - t.duration, 0))
}

function ii(e, t, i, r, a, n) {
  let l;
  r - i <= 0 && (G.warn("Fragment should have a positive duration", t), r = i + t.duration, n = a + t.duration);
  let o = i,
    h = r,
    d = t.startPTS,
    u = t.endPTS;
  if (s(d)) {
    let e = Math.abs(d - i);
    s(t.deltaPTS) ? t.deltaPTS = Math.max(e, t.deltaPTS) : t.deltaPTS = e, o = Math.max(i, d), i = Math.min(i, d), a = Math.min(a, t.startDTS), h = Math.min(r, u), r = Math.max(r, u), n = Math.max(n, t.endDTS)
  }
  let f = i - t.start;
  0 !== t.start && t.setStart(i), t.setDuration(r - t.start), t.startPTS = i, t.maxStartPTS = o, t.startDTS = a, t.endPTS = r, t.minEndPTS = h, t.endDTS = n;
  let c = t.sn;
  if (!e || c < e.startSN || c > e.endSN) return 0;
  let g = c - e.startSN,
    m = e.fragments;
  for (m[g] = t, l = g; l > 0; l--) it(m[l], m[l - 1]);
  for (l = g; l < m.length - 1; l++) it(m[l], m[l + 1]);
  return e.fragmentHint && it(m[m.length - 1], e.fragmentHint), e.PTSKnown = e.alignedSliding = true, f
}

function ir(e, t, i, r, s) {
  return Error(`${e} ${s.url}
Playlist starting @${t.startSN}
${t.m3u8}

Playlist starting @${i.startSN}
${i.m3u8}`)
}

function is(e, t, i = true) {
  let r = t.startSN + t.skippedSegments - e.startSN,
    s = e.fragments,
    a = r >= 0,
    n = 0;
  if (a && r < s.length) n = s[r].start;
  else if (a && t.startSN === e.endSN + 1) n = e.fragmentEnd;
  else if (a && i) n = e.fragmentStart + r * t.levelTargetDuration;
  else {
    if (t.skippedSegments || 0 !== t.fragmentStart) return;
    n = e.fragmentStart
  }
  ia(t, n)
}

function ia(e, t) {
  if (t) {
    let i = e.fragments;
    for (let r = e.skippedSegments; r < i.length; r++) i[r].addStart(t);
    e.fragmentHint && e.fragmentHint.addStart(t)
  }
}

function il(e, t = 1 / 0) {
  let i = 1e3 * e.targetduration;
  if (e.updated) {
    let r = e.fragments;
    if (r.length && 4 * i > t) {
      let e = 1e3 * r[r.length - 1].duration;
      e < i && (i = e)
    }
  } else i /= 2;
  return Math.round(i)
}

function io(e, t, i) {
  return e ? ih(e.partList, t, i) : null
}

function ih(e, t, i) {
  if (e)
    for (let r = e.length; r--;) {
      let s = e[r];
      if (s.index === i && s.fragment.sn === t) return s
    }
  return null
}

function id(e) {
  e.forEach((e, t) => {
    var i;
    null == (i = e.details) || i.fragments.forEach(e => {
      e.level = t, e.initSegment && (e.initSegment.level = t)
    })
  })
}

function iu(e, t) {
  for (let r = 0, s = e.length; r < s; r++) {
    var i;
    if ((null == (i = e[r]) ? true : i.cc) === t) return e[r]
  }
  return null
}

function ic(e, t) {
  if (e) {
    let i = e.start + t;
    e.start = e.startPTS = i, e.endPTS = i + e.duration
  }
}

function ig(e, t) {
  let i = t.fragments;
  for (let t = 0, r = i.length; t < r; t++) ic(i[t], e);
  t.fragmentHint && ic(t.fragmentHint, e), t.alignedSliding = true
}

function im(e, t) {
  if ((!t || !(e.startCC < t.endCC) || !(e.endCC > t.startCC)) && 1) return;
  let i = Math.min(t.endCC, e.endCC),
    r = iu(t.fragments, i),
    s = iu(e.fragments, i);
  r && s && (G.log(`Aligning playlist at start of dicontinuity sequence ${i}`), ig(r.start - s.start, e))
}

function ip(e, t) {
  let i, r;
  if (!e.hasProgramDateTime || !t.hasProgramDateTime) return;
  let s = e.fragments,
    a = t.fragments;
  if (!s.length || !a.length) return;
  let n = Math.min(t.endCC, e.endCC);
  t.startCC < n && e.startCC < n && (i = iu(a, n), r = iu(s, n)), i && r || (r = iu(s, (i = a[Math.floor(a.length / 2)]).cc) || s[Math.floor(s.length / 2)]);
  let l = i.programDateTime,
    o = r.programDateTime;
  l && o && ig((o - l) / 1e3 - (r.start - i.start), e)
}
let iv = function(e) {
    let t = "",
      i = e.length;
    for (let r = 0; r < i; r++) t += `[${e.start(r).toFixed(3)}-${e.end(r).toFixed(3)}]`;
    return t
  },
  iE = "STOPPED",
  iy = "IDLE",
  iT = "KEY_LOADING",
  iS = "FRAG_LOADING",
  iL = "FRAG_LOADING_WAITING_RETRY",
  iA = "WAITING_TRACK",
  iR = "PARSING",
  ib = "PARSED",
  iI = "ENDED",
  iD = "ERROR",
  ik = "WAITING_INIT_PTS",
  i_ = "WAITING_LEVEL";
class iP extends tm {
  constructor(e, t, i, r, a) {
    super(r, e.logger), this.hls = true, this.fragPrevious = null, this.fragCurrent = null, this.fragmentTracker = true, this.transmuxer = null, this._state = iE, this.playlistType = true, this.media = null, this.mediaBuffer = null, this.config = true, this.bitrateTest = false, this.lastCurrentTime = 0, this.nextLoadPosition = 0, this.startPosition = 0, this.startTimeOffset = null, this.retryDate = 0, this.levels = null, this.fragmentLoader = true, this.keyLoader = true, this.levelLastLoaded = null, this.startFragRequested = false, this.decrypter = true, this.initPTS = [], this.buffering = true, this.loadingParts = false, this.loopSn = true, this.onMediaSeeking = () => {
      let {
        config: e,
        fragCurrent: t,
        media: i,
        mediaBuffer: r,
        state: a
      } = this, n = i ? i.currentTime : 0, l = ty.bufferInfo(r || i, n, e.maxBufferHole);
      if (this.log(`media seeking to ${s(n)?n.toFixed(3):n}, state: ${a}`), this.state === iI) this.resetLoadingState();
      else if (t) {
        let i = e.maxFragLookUpTolerance,
          r = t.start - i,
          s = t.start + t.duration + i;
        if (!l.len || s < l.start || r > l.end) {
          let e = n > s;
          (n < r || e) && (e && t.loader && (this.log("seeking outside of buffer while fragment load in progress, cancel fragment load"), t.abortRequests(), this.resetLoadingState()), this.fragPrevious = null)
        }
      }
      if (i && (this.fragmentTracker.removeFragmentsInRange(n, 1 / 0, this.playlistType, true), n > this.lastCurrentTime && (this.lastCurrentTime = n), !this.loadingParts)) {
        let e = Math.max(l.end, n),
          t = this.shouldLoadParts(this.getLevelDetails(), e);
        t && (this.log(`LL-Part loading ON after seeking to ${n.toFixed(2)} with buffer @${e.toFixed(2)}`), this.loadingParts = t)
      }
      this.hls.hasEnoughToStart || l.len || (this.log(`setting startPosition to ${n} because of seek before start`), this.nextLoadPosition = this.startPosition = n), this.tickImmediate()
    }, this.onMediaEnded = () => {
      this.log("setting startPosition to 0 because media ended"), this.startPosition = this.lastCurrentTime = 0
    }, this.playlistType = a, this.hls = e, this.fragmentLoader = new tu(e.config), this.keyLoader = i, this.fragmentTracker = t, this.config = e.config, this.decrypter = new td(e.config)
  }
  registerListeners() {
    let {
      hls: e
    } = this;
    module.on(h.MEDIA_ATTACHED, this.onMediaAttached, this), module.on(h.MEDIA_DETACHING, this.onMediaDetaching, this), module.on(h.MANIFEST_LOADING, this.onManifestLoading, this), module.on(h.MANIFEST_LOADED, this.onManifestLoaded, this), module.on(h.ERROR, this.onError, this)
  }
  unregisterListeners() {
    let {
      hls: e
    } = this;
    module.off(h.MEDIA_ATTACHED, this.onMediaAttached, this), module.off(h.MEDIA_DETACHING, this.onMediaDetaching, this), module.off(h.MANIFEST_LOADING, this.onManifestLoading, this), module.off(h.MANIFEST_LOADED, this.onManifestLoaded, this), module.off(h.ERROR, this.onError, this)
  }
  doTick() {
    this.onTickEnd()
  }
  onTickEnd() {}
  startLoad(e) {}
  stopLoad() {
    if (this.state === iE) return;
    this.fragmentLoader.abort(), this.keyLoader.abort(this.playlistType);
    let e = this.fragCurrent;
    null != module && module.loader && (module.abortRequests(), this.fragmentTracker.removeFragment(module)), this.resetTransmuxer(), this.fragCurrent = null, this.fragPrevious = null, this.clearInterval(), this.clearNextTick(), this.state = iE
  }
  get startPositionValue() {
    let {
      nextLoadPosition: e,
      startPosition: t
    } = this;
    return false === exports && module ? module : exports
  }
  get bufferingEnabled() {
    return this.buffering
  }
  pauseBuffering() {
    this.buffering = false
  }
  resumeBuffering() {
    this.buffering = true
  }
  get inFlightFrag() {
    return {
      frag: this.fragCurrent,
      state: this.state
    }
  }
  _streamEnded(e, t) {
    if (t.live || !this.media) returnfalse;
    let i = e.end || 0,
      r = this.config.timelineOffset || 0;
    if (i <= r) returnfalse;
    let s = e.nextStart;
    if (s && s > r && s < t.edge || this.media.currentTime < e.start) returnfalse;
    let a = t.partList;
    if (null != a && a.length) {
      let e = a[a.length - 1];
      return ty.isBuffered(this.media, e.start + e.duration / 2)
    }
    let n = t.fragments[t.fragments.length - 1].type;
    return this.fragmentTracker.isEndListAppended(n)
  }
  getLevelDetails() {
    if (this.levels && null !== this.levelLastLoaded) {
      var e;
      return null == (e = this.levelLastLoaded) ? true : module.details
    }
  }
  get timelineOffset() {
    let e = this.config.timelineOffset;
    if (module) {
      var t;
      return (null == (t = this.getLevelDetails()) ? true : exports.appliedTimelineOffset) || module
    }
    return 0
  }
  onMediaAttached(e, t) {
    let i = this.media = this.mediaBuffer = t.media;
    i.removeEventListener("seeking", this.onMediaSeeking), i.removeEventListener("ended", this.onMediaEnded), i.addEventListener("seeking", this.onMediaSeeking), i.addEventListener("ended", this.onMediaEnded);
    let r = this.config;
    this.levels && r.autoStartLoad && this.state === iE && this.startLoad(r.startPosition)
  }
  onMediaDetaching(e, t) {
    let i = !!t.transferMedia,
      r = this.media;
    if (null !== r) {
      if (r.ended && (this.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0), r.removeEventListener("seeking", this.onMediaSeeking), r.removeEventListener("ended", this.onMediaEnded), this.keyLoader && !i && this.keyLoader.detach(), this.media = this.mediaBuffer = null, this.loopSn = true, i) {
        this.resetLoadingState(), this.resetTransmuxer();
        return
      }
      this.loadingParts = false, this.fragmentTracker.removeAllFragments(), this.stopLoad()
    }
  }
  onManifestLoading() {
    this.initPTS = [], this.levels = this.levelLastLoaded = this.fragCurrent = null, this.lastCurrentTime = this.startPosition = 0, this.startFragRequested = false
  }
  onError(e, t) {}
  onManifestLoaded(e, t) {
    this.startTimeOffset = t.startTimeOffset
  }
  onHandlerDestroying() {
    this.stopLoad(), this.transmuxer && (this.transmuxer.destroy(), this.transmuxer = null), super.onHandlerDestroying(), this.hls = this.onMediaSeeking = this.onMediaEnded = null
  }
  onHandlerDestroyed() {
    this.state = iE, this.fragmentLoader && this.fragmentLoader.destroy(), this.keyLoader && this.keyLoader.destroy(), this.decrypter && this.decrypter.destroy(), this.hls = this.log = this.warn = this.decrypter = this.keyLoader = this.fragmentLoader = this.fragmentTracker = null, super.onHandlerDestroyed()
  }
  loadFragment(e, t, i) {
    this.startFragRequested = true, this._loadFragForPlayback(e, t, i)
  }
  _loadFragForPlayback(e, t, i) {
    let r = e => {
      let t = e.frag;
      if (this.fragContextChanged(t)) {
        this.warn(`${t.type} sn: ${t.sn}${e.part?" part: "+e.part.index:""} of ${this.fragInfo(t,false,e.part)}) was dropped during download.`), this.fragmentTracker.removeFragment(t);
        return
      }
      t.stats.chunkCount++, this._handleFragmentLoadProgress(e)
    };
    this._doFragLoad(e, t, i, r).then(e => {
      if (!e) return;
      let t = this.state,
        i = e.frag;
      if (this.fragContextChanged(i)) {
        t !== iS && (this.fragCurrent || t !== iR) || (this.fragmentTracker.removeFragment(i), this.state = iy);
        return
      }
      "payload" in e && (this.log(`Loaded ${i.type} sn: ${i.sn} of ${this.playlistLabel()} ${i.level}`), this.hls.trigger(h.FRAG_LOADED, e)), this._handleFragmentLoadComplete(e)
    }).catch(t => {
      this.state !== iE && this.state !== iD && (this.warn(`Frag error: ${(null==t?true:t.message)||t}`), this.resetFragmentLoading(e))
    })
  }
  clearTrackerIfNeeded(e) {
    var t;
    let {
      fragmentTracker: i
    } = this;
    if (i.getState(e) === ti) {
      let t = e.type,
        r = this.getFwdBufferInfo(this.mediaBuffer, t),
        s = Math.max(e.duration, r ? r.len : this.config.maxBufferLength),
        a = this.backtrackFragment;
      (1 == (a ? e.sn - a.sn : 0) || this.reduceMaxBufferLength(s, e.duration)) && i.removeFragment(e)
    } else(null == (t = this.mediaBuffer) ? true : t.buffered.length) === 0 ? i.removeAllFragments() : i.hasParts(e.type) && (i.detectPartialFragments({
      frag: e,
      part: null,
      stats: e.stats,
      id: e.type
    }), i.getState(e) === tr && i.removeFragment(e))
  }
  checkLiveUpdate(e) {
    if (e.updated && !e.live) {
      let t = e.fragments[e.fragments.length - 1];
      this.fragmentTracker.detectPartialFragments({
        frag: t,
        part: null,
        stats: t.stats,
        id: t.type
      })
    }
    e.fragments[0] || (e.deltaUpdateFailed = true)
  }
  waitForLive(e) {
    let t = e.details;
    return (null == t ? true : t.live) && "EVENT" !== t.type && (this.levelLastLoaded !== e || t.expired)
  }
  flushMainBuffer(e, t, i = null) {
    e - t && this.hls.trigger(h.BUFFER_FLUSHING, {
      startOffset: e,
      endOffset: t,
      type: i
    })
  }
  _loadInitSegment(e, t) {
    this._doFragLoad(e, t).then(e => {
      let t = null == e ? true : e.frag;
      if (!t || this.fragContextChanged(t) || !this.levels) throw Error("init load aborted");
      return e
    }).then(e => {
      let {
        hls: t
      } = this, {
        frag: i,
        payload: r
      } = e, s = i.decryptdata;
      if (r && r.byteLength > 0 && null != s && s.key && s.iv && tk(s.method)) {
        let a = self.performance.now();
        return this.decrypter.decrypt(new Uint8Array(r), s.key.buffer, s.iv.buffer, t_(s.method)).catch(e => {
          throw t.trigger(h.ERROR, {
            type: l.MEDIA_ERROR,
            details: o.FRAG_DECRYPT_ERROR,
            fatal: false,
            error: e,
            reason: e.message,
            frag: i
          }), e
        }).then(r => {
          let s = self.performance.now();
          return t.trigger(h.FRAG_DECRYPTED, {
            frag: i,
            payload: r,
            stats: {
              tstart: a,
              tdecrypt: s
            }
          }), e.payload = r, this.completeInitSegmentLoad(e)
        })
      }
      return this.completeInitSegmentLoad(e)
    }).catch(t => {
      this.state !== iE && this.state !== iD && (this.warn(t), this.resetFragmentLoading(e))
    })
  }
  completeInitSegmentLoad(e) {
    let {
      levels: t
    } = this;
    if (!t) throw Error("init load aborted, missing levels");
    let i = e.frag.stats;
    this.state !== iE && (this.state = iy), e.frag.data = new Uint8Array(e.payload), i.parsing.start = i.buffering.start = self.performance.now(), i.parsing.end = i.buffering.end = self.performance.now(), this.tick()
  }
  fragContextChanged(e) {
    let {
      fragCurrent: t
    } = this;
    return !e || !t || e.sn !== t.sn || e.level !== t.level
  }
  fragBufferedComplete(e, t) {
    let i = this.mediaBuffer ? this.mediaBuffer : this.media;
    if (this.log(`Buffered ${e.type} sn: ${e.sn}${t?" part: "+t.index:""} of ${this.fragInfo(e,false,t)} > buffer:${i?iv(ty.getBuffered(i)):"(detached)"})`), J(e)) {
      var r;
      if (e.type !== P) {
        let t = e.elementaryStreams;
        if (!Object.keys(t).some(e => !!t[e])) {
          this.state = iy;
          return
        }
      }
      let t = null == (r = this.levels) ? true : r[e.level];
      null != t && t.fragmentError && (this.log(`Resetting level fragment error count of ${t.fragmentError} on frag buffered`), t.fragmentError = 0)
    }
    this.state = iy
  }
  _handleFragmentLoadComplete(e) {
    let {
      transmuxer: t
    } = this;
    if (!t) return;
    let {
      frag: i,
      part: r,
      partsLoaded: s
    } = e, a = !s || 0 === s.length || s.some(e => !e), n = new tp(i.level, i.sn, i.stats.chunkCount + 1, 0, r ? r.index : false, !a);
    t.flush(n)
  }
  _handleFragmentLoadProgress(e) {}
  _doFragLoad(e, t, i = null, r) {
    var a;
    let n;
    this.fragCurrent = e;
    let l = null == t ? true : t.details;
    if (!this.levels || !l) throw Error(`frag load aborted, missing level${l?"":" detail"}s`);
    let o = null;
    e.encrypted && !(null != (a = e.decryptdata) && a.key) ? (this.log(`Loading key for ${e.sn} of [${l.startSN}-${l.endSN}], ${this.playlistLabel()} ${e.level}`), this.state = iT, this.fragCurrent = e, o = this.keyLoader.load(e).then(e => {
      if (!this.fragContextChanged(e.frag)) return this.hls.trigger(h.KEY_LOADED, e), this.state === iT && (this.state = iy), e
    }), this.hls.trigger(h.KEY_LOADING, {
      frag: e
    }), null === this.fragCurrent && (o = Promise.reject(Error("frag load aborted, context changed in KEY_LOADING")))) : !e.encrypted && l.encryptedFragments.length && this.keyLoader.loadClear(e, l.encryptedFragments);
    let d = this.fragPrevious;
    if (J(e) && (!d || e.sn !== d.sn)) {
      let i = this.shouldLoadParts(t.details, e.end);
      i !== this.loadingParts && (this.log(`LL-Part loading ${i?"ON":"OFF"} loading sn ${null==d?true:d.sn}->${e.sn}`), this.loadingParts = i)
    }
    if (i = Math.max(e.start, i || 0), this.loadingParts && J(e)) {
      let s = l.partList;
      if (s && r) {
        i > e.end && l.fragmentHint && (e = l.fragmentHint);
        let a = this.getNextPart(s, e, i);
        if (a > false) {
          let n, d = s[a];
          return (e = this.fragCurrent = d.fragment, this.log(`Loading ${e.type} sn: ${e.sn} part: ${d.index} (${a}/${s.length-1}) of ${this.fragInfo(e,false,d)}) cc: ${e.cc} [${l.startSN}-${l.endSN}], target: ${parseFloat(i.toFixed(3))}`), this.nextLoadPosition = d.start + d.duration, this.state = iS, n = o ? o.then(i => !i || this.fragContextChanged(i.frag) ? null : this.doFragPartsLoad(e, d, t, r)).catch(e => this.handleFragLoadError(e)) : this.doFragPartsLoad(e, d, t, r).catch(e => this.handleFragLoadError(e)), this.hls.trigger(h.FRAG_LOADING, {
            frag: e,
            part: d,
            targetBufferTime: i
          }), null === this.fragCurrent) ? Promise.reject(Error("frag load aborted, context changed in FRAG_LOADING parts")) : n
        }
        if (!e.url || this.loadedEndOfParts(s, i)) return Promise.resolve(null)
      }
    }
    if (J(e) && this.loadingParts) this.log(`LL-Part loading OFF after next part miss @${i.toFixed(2)}`), this.loadingParts = false;
    else if (!e.url) return Promise.resolve(null);
    this.log(`Loading ${e.type} sn: ${e.sn} of ${this.fragInfo(e,false)}) cc: ${e.cc} ${l?"["+l.startSN+"-"+l.endSN+"]":""}, target: ${parseFloat(i.toFixed(3))}`), s(e.sn) && !this.bitrateTest && (this.nextLoadPosition = e.start + e.duration), this.state = iS;
    let u = this.config.progressive;
    return (n = u && o ? o.then(t => !t || this.fragContextChanged(null == t ? true : t.frag) ? null : this.fragmentLoader.load(e, r)).catch(e => this.handleFragLoadError(e)) : Promise.all([this.fragmentLoader.load(e, u ? r : true), o]).then(([e]) => (!u && e && r && r(e), e)).catch(e => this.handleFragLoadError(e)), this.hls.trigger(h.FRAG_LOADING, {
      frag: e,
      targetBufferTime: i
    }), null === this.fragCurrent) ? Promise.reject(Error("frag load aborted, context changed in FRAG_LOADING")) : n
  }
  doFragPartsLoad(e, t, i, r) {
    return new Promise((s, a) => {
      var n;
      let l = [],
        o = null == (n = i.details) ? true : n.partList,
        d = t => {
          this.fragmentLoader.loadPart(e, t, r).then(r => {
            l[t.index] = r;
            let a = r.part;
            this.hls.trigger(h.FRAG_LOADED, r);
            let n = io(i.details, e.sn, t.index + 1) || ih(o, e.sn, t.index + 1);
            if (!n) return s({
              frag: e,
              part: a,
              partsLoaded: l
            });
            d(n)
          }).catch(a)
        };
      d(t)
    })
  }
  handleFragLoadError(e) {
    if ("data" in e) {
      let t = e.data;
      e.data && t.details === o.INTERNAL_ABORTED ? this.handleFragLoadAborted(t.frag, t.part) : this.hls.trigger(h.ERROR, t)
    } else this.hls.trigger(h.ERROR, {
      type: l.OTHER_ERROR,
      details: o.INTERNAL_EXCEPTION,
      err: e,
      error: e,
      fatal: true
    });
    return null
  }
  _handleTransmuxerFlush(e) {
    let t = this.getCurrentContext(e);
    if (!t || this.state !== iR) {
      this.fragCurrent || this.state === iE || this.state === iD || (this.state = iy);
      return
    }
    let {
      frag: i,
      part: r,
      level: s
    } = t, a = self.performance.now();
    i.stats.parsing.end = a, r && (r.stats.parsing.end = a);
    let n = this.getLevelDetails(),
      l = n && i.sn > n.endSN || this.shouldLoadParts(n, i.end);
    l !== this.loadingParts && (this.log(`LL-Part loading ${l?"ON":"OFF"} after parsing segment ending @${i.end.toFixed(2)}`), this.loadingParts = l), this.updateLevelTiming(i, r, s, e.partial)
  }
  shouldLoadParts(e, t) {
    if (this.config.lowLatencyMode) {
      if (!e) return this.loadingParts;
      if (null != e && e.partList) {
        var i, r;
        let s = e.partList[0];
        if (t >= s.end + ((null == (i = e.fragmentHint) ? true : i.duration) || 0) && (this.hls.hasEnoughToStart ? (null == (r = this.media) ? true : r.currentTime) || this.lastCurrentTime : this.getLoadPosition()) > s.start - s.fragment.duration) returntrue
      }
    }
    returnfalse
  }
  getCurrentContext(e) {
    let {
      levels: t,
      fragCurrent: i
    } = this, {
      level: r,
      sn: s,
      part: a
    } = e;
    if (!(null != t && t[r])) return this.warn(`Levels object was unset while buffering fragment ${s} of ${this.playlistLabel()} ${r}. The current chunk will not be buffered.`), null;
    let n = t[r],
      l = n.details,
      o = a > false ? io(l, s, a) : null,
      h = o ? o.fragment : function(e, t, i) {
        if (!e) return null;
        let r = e.fragments[t - e.startSN];
        return r || (r = e.fragmentHint) && r.sn === t ? r : t < e.startSN && i && i.sn === t ? i : null
      }(l, s, i);
    return h ? (i && i !== h && (h.stats = i.stats), {
      frag: h,
      part: o,
      level: n
    }) : null
  }
  bufferFragmentData(e, t, i, r, s) {
    var a;
    if (!e || this.state !== iR) return;
    let {
      data1: n,
      data2: l
    } = e, o = n;
    if (n && l && (o = ev(n, l)), !(null != (a = o) && a.length)) return;
    let d = {
      type: e.type,
      frag: t,
      part: i,
      chunkMeta: r,
      parent: t.type,
      data: o
    };
    if (this.hls.trigger(h.BUFFER_APPENDING, d), e.dropped && e.independent && !i) {
      if (s) return;
      this.flushBufferGap(t)
    }
  }
  flushBufferGap(e) {
    let t = this.media;
    if (!t) return;
    if (!ty.isBuffered(t, t.currentTime)) return void this.flushMainBuffer(0, e.start);
    let i = t.currentTime,
      r = ty.bufferInfo(t, i, 0),
      s = e.duration,
      a = Math.min(2 * this.config.maxFragLookUpTolerance, .25 * s),
      n = Math.max(Math.min(e.start - a, r.end - a), i + a);
    e.start - n > a && this.flushMainBuffer(n, e.start)
  }
  getFwdBufferInfo(e, t) {
    var i;
    let r = this.getLoadPosition();
    if (!s(r)) return null;
    let a = this.lastCurrentTime > r || null != (i = this.media) && i.paused ? 0 : this.config.maxBufferHole;
    return this.getFwdBufferInfoAtPos(e, r, t, a)
  }
  getFwdBufferInfoAtPos(e, t, i, r) {
    let s = ty.bufferInfo(e, t, r);
    if (0 === s.len && true !== s.nextStart) {
      let a = this.fragmentTracker.getBufferedFrag(t, i);
      if (a && (s.nextStart <= a.end || a.gap)) {
        let i = Math.max(Math.min(s.nextStart, a.end) - t, r);
        return ty.bufferInfo(e, t, i)
      }
    }
    return s
  }
  getMaxBufferLength(e) {
    let {
      config: t
    } = this;
    return Math.min(e ? Math.max(8 * t.maxBufferSize / e, t.maxBufferLength) : t.maxBufferLength, t.maxMaxBufferLength)
  }
  reduceMaxBufferLength(e, t) {
    let i = this.config,
      r = Math.max(Math.min(e - t, i.maxBufferLength), t),
      s = Math.max(e - 3 * t, i.maxMaxBufferLength / 2, r);
    return s >= r && (i.maxMaxBufferLength = s, this.warn(`Reduce max buffer length to ${s}s`), true)
  }
  getAppendedFrag(e, t = k) {
    var i;
    let r = null == (i = this.fragmentTracker) ? true : i.getAppendedFrag(e, t);
    return r && "fragment" in r ? r.fragment : r
  }
  getNextFragment(e, t) {
    let i = t.fragments,
      r = i.length;
    if (!r) return null;
    let {
      config: s
    } = this, a = i[0].start, n = s.lowLatencyMode && !!t.partList, l = null;
    if (t.live) {
      let h = s.initialLiveManifestSize;
      if (r < h) return this.warn(`Not enough fragments to start playback (have: ${r}, need: ${h})`), null;
      if (!t.PTSKnown && !this.startFragRequested && false === this.startPosition || e < a) {
        var o;
        n && !this.loadingParts && (this.log("LL-Part loading ON for initial live fragment"), this.loadingParts = true), l = this.getInitialLiveFragment(t, i);
        let r = this.hls.startPosition,
          s = this.hls.liveSyncPosition,
          h = l ? (false !== r && r >= a ? r : s) || l.start : e;
        this.log(`Setting startPosition to ${h} to match start frag at live edge. mainStart: ${r} liveSyncPosition: ${s} frag.start: ${null==(o=l)?true:o.start}`), this.startPosition = this.nextLoadPosition = h
      }
    } else e <= a && (l = i[0]);
    if (!l) {
      let i = this.loadingParts ? t.partEnd : t.fragmentEnd;
      l = this.getFragmentAtPosition(e, i, t)
    }
    let h = this.filterReplacedPrimary(l, t);
    if (!h && l) {
      let e = l.sn - t.startSN;
      h = this.filterReplacedPrimary(i[e + 1] || null, t)
    }
    return this.mapToInitFragWhenRequired(h)
  }
  isLoopLoading(e, t) {
    let i = this.fragmentTracker.getState(e);
    return ("OK" === i || i === tr && !!e.gap) && this.nextLoadPosition > t
  }
  getNextFragmentLoopLoading(e, t, i, r, s) {
    let a = null;
    if (e.gap && (a = this.getNextFragment(this.nextLoadPosition, t)) && !a.gap && i.nextStart) {
      let e = this.getFwdBufferInfoAtPos(this.mediaBuffer ? this.mediaBuffer : this.media, i.nextStart, r, 0);
      if (null !== e && i.len + e.len >= s) {
        let e = a.sn;
        return this.loopSn !== e && (this.log(`buffer full after gaps in "${r}" playlist starting at sn: ${e}`), this.loopSn = e), null
      }
    }
    return this.loopSn = true, a
  }
  get primaryPrefetch() {
    if (iC(this.hls.config)) {
      var e, t;
      if (null == (e = this.hls.interstitialsManager) || null == (t = module.playingItem) ? true : exports.event) returntrue
    }
    returnfalse
  }
  filterReplacedPrimary(e, t) {
    if (!e) return e;
    if (iC(this.hls.config) && e.type !== P) {
      let i = this.hls.interstitialsManager,
        r = null == i ? true : i.bufferingItem;
      if (r) {
        let i = r.event;
        if (i) {
          if (i.appendInPlace || Math.abs(e.start - r.start) > 1 || 0 === r.start) return null
        } else if (e.end <= r.start && (null == t ? true : t.live) === false || e.start > r.end && r.nextEvent && (r.nextEvent.appendInPlace || e.start - r.end > 1)) return null
      }
      let s = null == i ? true : i.playerQueue;
      if (s)
        for (let t = s.length; t--;) {
          let i = s[t].interstitial;
          if (i.appendInPlace && e.start >= i.startTime && e.end <= i.resumeTime) return null
        }
    }
    return e
  }
  mapToInitFragWhenRequired(e) {
    return null == e || !e.initSegment || null != e && e.initSegment.data || this.bitrateTest ? e : e.initSegment
  }
  getNextPart(e, t, i) {
    let r = false,
      s = false,
      a = true;
    for (let n = 0, l = e.length; n < l; n++) {
      let l = e[n];
      if (a = a && !l.independent, r > false && i < l.start) break;
      let o = l.loaded;
      o ? r = false : (s || l.independent || a) && l.fragment === t && (r = n), s = o
    }
    return r
  }
  loadedEndOfParts(e, t) {
    let i = e[e.length - 1];
    return i && t > i.start && i.loaded
  }
  getInitialLiveFragment(e, t) {
    let i = this.fragPrevious,
      r = null;
    if (i) {
      if (e.hasProgramDateTime && (this.log(`Live playlist, switching playlist, load frag with same PDT: ${i.programDateTime}`), r = function(e, t, i) {
          if (null === t || !Array.isArray(e) || !e.length || !s(t) || t < (e[0].programDateTime || 0) || t >= (e[e.length - 1].endProgramDateTime || 0)) return null;
          i = i || 0;
          for (let r = 0; r < e.length; ++r) {
            let s = e[r];
            if (function(e, t, i) {
                let r = 1e3 * Math.min(t, i.duration + (i.deltaPTS ? i.deltaPTS : 0));
                return (i.endProgramDateTime || 0) - r > e
              }(t, i, s)) return s
          }
          return null
        }(t, i.endProgramDateTime, this.config.maxFragLookUpTolerance)), !r) {
        let s = i.sn + 1;
        if (s >= e.startSN && s <= e.endSN) {
          let a = t[s - e.startSN];
          i.cc === a.cc && (r = a, this.log(`Live playlist, switching playlist, load frag with next SN: ${r.sn}`))
        }!r && (r = e4(t, i.cc)) && this.log(`Live playlist, switching playlist, load frag with same CC: ${r.sn}`)
      }
    } else {
      let t = this.hls.liveSyncPosition;
      null !== t && (r = this.getFragmentAtPosition(t, this.bitrateTest ? e.fragmentEnd : e.edge, e))
    }
    return r
  }
  getFragmentAtPosition(e, t, i) {
    let r, {
        config: s
      } = this,
      {
        fragPrevious: a
      } = this,
      {
        fragments: n,
        endSN: l
      } = i,
      {
        fragmentHint: o
      } = i,
      {
        maxFragLookUpTolerance: h
      } = s,
      d = i.partList,
      u = !!(this.loadingParts && null != d && d.length && o);
    if (u && o && !this.bitrateTest && d[d.length - 1].fragment.sn === o.sn && (n = n.concat(o), l = o.sn), e < t) {
      var f;
      let i = e < this.lastCurrentTime || e > t - h || null != (f = this.media) && f.paused || !this.startFragRequested ? 0 : h;
      r = e2(a, n, e, i)
    } else r = n[n.length - 1];
    if (r) {
      let e = r.sn - i.startSN,
        t = this.fragmentTracker.getState(r);
      if (("OK" === t || t === tr && r.gap) && (a = r), a && r.sn === a.sn && (!u || d[0].fragment.sn > r.sn || !i.live && !u) && a && r.level === a.level) {
        let t = n[e + 1];
        r = r.sn < l && "OK" !== this.fragmentTracker.getState(t) ? t : null
      }
    }
    return r
  }
  alignPlaylists(e, t, i) {
    let r = e.fragments.length;
    if (!r) return this.warn("No fragments in live playlist"), 0;
    let a = e.fragmentStart,
      n = !t,
      l = e.alignedSliding && s(a);
    if (n || !l && !a) {
      i && (im(e, i), !e.alignedSliding && i && ip(e, i), e.alignedSliding || !i || e.skippedSegments || is(i, e, false));
      let s = e.fragmentStart;
      return this.log(`Live playlist sliding: ${s.toFixed(2)} start-sn: ${t?t.startSN:"na"}->${e.startSN} fragments: ${r}`), s
    }
    return a
  }
  waitForCdnTuneIn(e) {
    return e.live && e.canBlockReload && e.partTarget && e.tuneInGoal > Math.max(e.partHoldBack, 3 * e.partTarget)
  }
  setStartPosition(e, t) {
    let i = this.startPosition;
    i < t && (i = false);
    let r = this.timelineOffset;
    if (false === i) {
      let a = null !== this.startTimeOffset,
        n = a ? this.startTimeOffset : e.startTimeOffset;
      null !== n && s(n) ? (i = t + n, n < 0 && (i += e.edge), i = Math.min(Math.max(t, i), t + e.totalduration), this.log(`Setting startPosition to ${i} for start time offset ${n} found in ${a?"multivariant":"media"} playlist`), this.startPosition = i) : e.live ? (i = this.hls.liveSyncPosition || t, this.log(`Setting startPosition to -1 to start at live edge ${i}`), this.startPosition = false) : (this.log("setting startPosition to 0 by default"), this.startPosition = i = 0), this.lastCurrentTime = i + r
    }
    this.nextLoadPosition = i + r
  }
  getLoadPosition() {
    var e;
    let {
      media: t
    } = this, i = 0;
    return null != (e = this.hls) && module.hasEnoughToStart && exports ? i = exports.currentTime : this.nextLoadPosition >= 0 && (i = this.nextLoadPosition), require
  }
  handleFragLoadAborted(e, t) {
    this.transmuxer && e.type === this.playlistType && J(e) && e.stats.aborted && (this.warn(`Fragment ${e.sn}${t?" part "+t.index:""} of ${this.playlistLabel()} ${e.level} was aborted`), this.resetFragmentLoading(e))
  }
  resetFragmentLoading(e) {
    this.fragCurrent && (this.fragContextChanged(e) || this.state === iL) || (this.state = iy)
  }
  onFragmentOrKeyLoadError(e, t) {
    if (t.chunkMeta && !t.frag) {
      let e = this.getCurrentContext(t.chunkMeta);
      e && (t.frag = e.frag)
    }
    let i = t.frag;
    if (!i || i.type !== e || !this.levels) return;
    if (this.fragContextChanged(i)) {
      var r;
      this.warn(`Frag load error must match current frag to retry ${i.url} > ${null==(r=this.fragCurrent)?true:r.url}`);
      return
    }
    let s = t.details === o.FRAG_GAP;
    s && this.fragmentTracker.fragBuffered(i, true);
    let a = t.errorAction,
      {
        action: n,
        flags: l,
        retryCount: h = 0,
        retryConfig: d
      } = a || {},
      u = !!a && !!d,
      f = u && 5 === n,
      c = u && !a.resolved && 1 === l;
    if (!f && c && J(i) && !i.endList) this.resetFragmentErrors(e), this.treatAsGap(i), a.resolved = true;
    else if ((f || c) && h < d.maxNumRetry) {
      this.resetStartWhenNotLoaded(this.levelLastLoaded);
      let r = e6(d, h);
      this.warn(`Fragment ${i.sn} of ${e} ${i.level} errored with ${t.details}, retrying loading ${h+1}/${d.maxNumRetry} in ${r}ms`), a.resolved = true, this.retryDate = self.performance.now() + r, this.state = iL
    } else if (d && a) {
      if (this.resetFragmentErrors(e), !(h < d.maxNumRetry)) return void this.warn(`${t.details} reached or exceeded max retry (${h})`);
      s || 3 === n || (a.resolved = true)
    } else 2 === n ? this.state = i_ : this.state = iD;
    this.tickImmediate()
  }
  reduceLengthAndFlushBuffer(e) {
    if (this.state === iR || this.state === ib) {
      let t = e.frag,
        i = e.parent,
        r = this.getFwdBufferInfo(this.mediaBuffer, i),
        s = r && r.len > .5;
      s && this.reduceMaxBufferLength(r.len, (null == t ? true : t.duration) || 10);
      let a = !s;
      return a && this.warn(`Buffer full error while media.currentTime is not buffered, flush ${i} buffer`), t && (this.fragmentTracker.removeFragment(t), this.nextLoadPosition = t.start), this.resetLoadingState(), a
    }
    returnfalse
  }
  resetFragmentErrors(e) {
    e === _ && (this.fragCurrent = null), this.hls.hasEnoughToStart || (this.startFragRequested = false), this.state !== iE && (this.state = iy)
  }
  afterBufferFlushed(e, t, i) {
    if (!e) return;
    let r = ty.getBuffered(e);
    this.fragmentTracker.detectEvictedFragments(t, r, i), this.state === iI && this.resetLoadingState()
  }
  resetLoadingState() {
    this.log("Reset loading state"), this.fragCurrent = null, this.fragPrevious = null, this.state !== iE && (this.state = iy)
  }
  resetStartWhenNotLoaded(e) {
    if (!this.hls.hasEnoughToStart) {
      this.startFragRequested = false;
      let t = e ? e.details : null;
      null != t && t.live ? (this.log("resetting startPosition for live start"), this.startPosition = false, this.setStartPosition(t, t.fragmentStart), this.resetLoadingState()) : this.nextLoadPosition = this.startPosition
    }
  }
  resetWhenMissingContext(e) {
    this.warn(`The loading context changed while buffering fragment ${e.sn} of ${this.playlistLabel()} ${e.level}. This chunk will not be buffered.`), this.removeUnbufferedFrags(), this.resetStartWhenNotLoaded(this.levelLastLoaded), this.resetLoadingState()
  }
  removeUnbufferedFrags(e = 0) {
    this.fragmentTracker.removeFragmentsInRange(e, 1 / 0, this.playlistType, false, true)
  }
  updateLevelTiming(e, t, i, r) {
    let s = i.details;
    if (!s) return void this.warn("level.details undefined");
    if (!Object.keys(e.elementaryStreams).reduce((t, a) => {
        let n = e.elementaryStreams[a];
        if (n) {
          let l = n.endPTS - n.startPTS;
          if (l <= 0) return this.warn(`Could not parse fragment ${e.sn} ${a} duration reliably (${l})`), t || false;
          let o = r ? 0 : ii(s, e, n.startPTS, n.endPTS, n.startDTS, n.endDTS);
          return this.hls.trigger(h.LEVEL_PTS_UPDATED, {
            details: s,
            level: i,
            drift: o,
            type: a,
            frag: e,
            start: n.startPTS,
            end: n.endPTS
          }), true
        }
        return t
      }, false)) {
      var a;
      if (0 === i.fragmentError && this.treatAsGap(e, i), (null == (a = this.transmuxer) ? true : a.error) === null) {
        let t = Error(`Found no media in fragment ${e.sn} of ${this.playlistLabel()} ${e.level} resetting transmuxer to fallback to playlist timing`);
        if (this.warn(t.message), this.hls.trigger(h.ERROR, {
            type: l.MEDIA_ERROR,
            details: o.FRAG_PARSING_ERROR,
            fatal: false,
            error: t,
            frag: e,
            reason: `Found no media in msn ${e.sn} of ${this.playlistLabel()} "${i.url}"`
          }), !this.hls) return;
        this.resetTransmuxer()
      }
    }
    this.state = ib, this.log(`Parsed ${e.type} sn: ${e.sn}${t?" part: "+t.index:""} of ${this.fragInfo(e,false,t)})`), this.hls.trigger(h.FRAG_PARSED, {
      frag: e,
      part: t
    })
  }
  playlistLabel() {
    return this.playlistType === k ? "level" : "track"
  }
  fragInfo(e, t = true, i) {
    var r, s;
    return `${this.playlistLabel()} ${e.level} (${i?"part":"frag"}:[${(null!=(r=t&&!i?e.startPTS:(i||e).start)?r:NaN).toFixed(3)}-${(null!=(s=t&&!i?e.endPTS:(i||e).end)?s:NaN).toFixed(3)}]${i&&"main"===e.type?"INDEPENDENT="+(i.independent?"YES":"NO"):""}`
  }
  treatAsGap(e, t) {
    t && t.fragmentError++, e.gap = true, this.fragmentTracker.removeFragment(e), this.fragmentTracker.fragBuffered(e, true)
  }
  resetTransmuxer() {
    var e;
    null == (e = this.transmuxer) || module.reset()
  }
  recoverWorkerError(e) {
    "demuxerWorker" === e.event && (this.fragmentTracker.removeAllFragments(), this.transmuxer && (this.transmuxer.destroy(), this.transmuxer = null), this.resetStartWhenNotLoaded(this.levelLastLoaded), this.resetLoadingState())
  }
  set state(e) {
    let t = this._state;
    t !== e && (this._state = e, this.log(`${t}->${e}`))
  }
  get state() {
    return this._state
  }
}

function iC(e) {
  return !!e.interstitialsController && false !== e.enableInterstitialPlayback
}
class iw {
  constructor() {
    this.chunks = [], this.dataLength = 0
  }
  push(e) {
    this.chunks.push(e), this.dataLength += e.length
  }
  flush() {
    let e, {
      chunks: t,
      dataLength: i
    } = this;
    return exports.length ? (e = 1 === exports.length ? exports[0] : function(e, t) {
      let i = new Uint8Array(t),
        r = 0;
      for (let t = 0; t < e.length; t++) {
        let s = e[t];
        i.set(s, r), r += s.length
      }
      return i
    }(exports, require), this.reset(), module) : new Uint8Array(0)
  }
  reset() {
    this.chunks.length = 0, this.dataLength = 0
  }
}
var ix = {
    exports: {}
  },
  iM = (A || (A = 1, ! function(e) {
    var t = Object.prototype.hasOwnProperty,
      i = "~";

    function r() {}

    function s(e, t, i) {
      this.fn = e, this.context = t, this.once = i || false
    }

    function a(e, t, r, a, n) {
      if ("function" != typeof r) throw TypeError("The listener must be a function");
      var l = new s(r, a || e, n),
        o = i ? i + t : t;
      return e._events[o] ? e._events[o].fn ? e._events[o] = [e._events[o], l] : e._events[o].push(l) : (e._events[o] = l, e._eventsCount++), e
    }

    function n(e, t) {
      0 == --e._eventsCount ? e._events = new r : delete e._events[t]
    }

    function l() {
      this._events = new r, this._eventsCount = 0
    }
    Object.create && (r.prototype = Object.create(null), new r().__proto__ || (i = false)), l.prototype.eventNames = function() {
      var e, r, s = [];
      if (0 === this._eventsCount) return s;
      for (r in e = this._events) t.call(e, r) && s.push(i ? r.slice(1) : r);
      return Object.getOwnPropertySymbols ? s.concat(Object.getOwnPropertySymbols(e)) : s
    }, l.prototype.listeners = function(e) {
      var t = i ? i + e : e,
        r = this._events[t];
      if (!r) return [];
      if (r.fn) return [r.fn];
      for (var s = 0, a = r.length, n = Array(a); s < a; s++) n[s] = r[s].fn;
      return n
    }, l.prototype.listenerCount = function(e) {
      var t = i ? i + e : e,
        r = this._events[t];
      return r ? r.fn ? 1 : r.length : 0
    }, l.prototype.emit = function(e, t, r, s, a, n) {
      var l = i ? i + e : e;
      if (!this._events[l]) returnfalse;
      var o, h, d = this._events[l],
        u = arguments.length;
      if (d.fn) {
        switch (d.once && this.removeListener(e, d.fn, true, true), u) {
          case 1:
            return d.fn.call(d.context), true;
          case 2:
            return d.fn.call(d.context, t), true;
          case 3:
            return d.fn.call(d.context, t, r), true;
          case 4:
            return d.fn.call(d.context, t, r, s), true;
          case 5:
            return d.fn.call(d.context, t, r, s, a), true;
          case 6:
            return d.fn.call(d.context, t, r, s, a, n), true
        }
        for (h = 1, o = Array(u - 1); h < u; h++) o[h - 1] = arguments[h];
        d.fn.apply(d.context, o)
      } else {
        var f, c = d.length;
        for (h = 0; h < c; h++) switch (d[h].once && this.removeListener(e, d[h].fn, true, true), u) {
          case 1:
            d[h].fn.call(d[h].context);
            break;
          case 2:
            d[h].fn.call(d[h].context, t);
            break;
          case 3:
            d[h].fn.call(d[h].context, t, r);
            break;
          case 4:
            d[h].fn.call(d[h].context, t, r, s);
            break;
          default:
            if (!o)
              for (f = 1, o = Array(u - 1); f < u; f++) o[f - 1] = arguments[f];
            d[h].fn.apply(d[h].context, o)
        }
      }
      returntrue
    }, l.prototype.on = function(e, t, i) {
      return a(this, e, t, i, false)
    }, l.prototype.once = function(e, t, i) {
      return a(this, e, t, i, true)
    }, l.prototype.removeListener = function(e, t, r, s) {
      var a = i ? i + e : e;
      if (!this._events[a]) return this;
      if (!t) return n(this, a), this;
      var l = this._events[a];
      if (l.fn) l.fn !== t || s && !l.once || r && l.context !== r || n(this, a);
      else {
        for (var o = 0, h = [], d = l.length; o < d; o++)(l[o].fn !== t || s && !l[o].once || r && l[o].context !== r) && h.push(l[o]);
        h.length ? this._events[a] = 1 === h.length ? h[0] : h : n(this, a)
      }
      return this
    }, l.prototype.removeAllListeners = function(e) {
      var t;
      return e ? (t = i ? i + e : e, this._events[t] && n(this, t)) : (this._events = new r, this._eventsCount = 0), this
    }, l.prototype.off = l.prototype.removeListener, l.prototype.addListener = l.prototype.on, l.prefixed = i, l.EventEmitter = l, e.exports = l
  }(ix)), (p = ix.exports) && p.__esModule && Object.prototype.hasOwnProperty.call(p, "default")) ? p.default : p;
let iO = "1.6.0",
  iF = {};

function iU(e, t) {
  return t + 10 <= e.length && 51 === e[t] && 68 === e[t + 1] && 73 === e[t + 2] && e[t + 3] < 255 && e[t + 4] < 255 && e[t + 6] < 128 && e[t + 7] < 128 && e[t + 8] < 128 && e[t + 9] < 128 || false
}

function iB(e, t) {
  return t + 10 <= e.length && 73 === e[t] && 68 === e[t + 1] && 51 === e[t + 2] && e[t + 3] < 255 && e[t + 4] < 255 && e[t + 6] < 128 && e[t + 7] < 128 && e[t + 8] < 128 && e[t + 9] < 128 || false
}

function iN(e, t) {
  return (127 & e[t]) << 21 | (127 & e[t + 1]) << 14 | (127 & e[t + 2]) << 7 | 127 & e[t + 3]
}

function i$(e, t) {
  let i = t,
    r = 0;
  for (; iB(e, t);) r += 10, r += iN(e, t + 6), iU(e, t + 10) && (r += 10), t += r;
  if (r > 0) return e.subarray(i, i + r)
}

function iG(e, t) {
  return 255 === e[t] && (246 & e[t + 1]) == 240
}

function iK(e, t) {
  return 1 & e[t + 1] ? 7 : 9
}

function iH(e, t) {
  return (3 & e[t + 3]) << 11 | e[t + 4] << 3 | (224 & e[t + 5]) >>> 5
}

function iV(e, t) {
  return t + 1 < e.length && iG(e, t)
}

function iW(e, t, i, r, s) {
  if (!e.samplerate) {
    let a = function(e, t, i, r) {
      let s = t[i + 2],
        a = s >> 2 & 15;
      if (a > 12) {
        let t = Error(`invalid ADTS sampling index:${a}`);
        e.emit(h.ERROR, h.ERROR, {
          type: l.MEDIA_ERROR,
          details: o.FRAG_PARSING_ERROR,
          fatal: true,
          error: t,
          reason: t.message
        });
        return
      }
      let n = (s >> 6 & 3) + 1,
        d = t[i + 3] >> 6 & 3 | (1 & s) << 2,
        u = "mp4a.40." + n,
        f = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350][a],
        c = a;
      (5 === n || 29 === n) && (c -= 3);
      let g = [n << 3 | (14 & c) >> 1, (1 & c) << 7 | d << 3];
      return G.log(`manifest codec:${r}, parsed codec:${u}, channels:${d}, rate:${f} (ADTS object type:${n} sampling index:${a})`), {
        config: g,
        samplerate: f,
        channelCount: d,
        codec: u,
        parsedCodec: u,
        manifestCodec: r
      }
    }(t, i, r, s);
    a && x(e, a)
  }
}

function ij(e, t, i, r, s) {
  let a, n = r + s * (9216e4 / e.samplerate),
    l = function(e, t) {
      let i = iK(e, t);
      if (t + i <= e.length) {
        let r = iH(e, t) - i;
        if (r > 0) return {
          headerLength: i,
          frameLength: r
        }
      }
    }(t, i);
  if (l) {
    let {
      frameLength: r,
      headerLength: s
    } = l, o = s + r, h = Math.max(0, i + o - t.length);
    h ? (a = new Uint8Array(o - s)).set(t.subarray(i + s, t.length), 0) : a = t.subarray(i + s, i + o);
    let d = {
      unit: a,
      pts: n
    };
    return h || e.samples.push(d), {
      sample: d,
      length: o,
      missing: h
    }
  }
  let o = t.length - i;
  return (a = new Uint8Array(o)).set(t.subarray(i, t.length), 0), {
    sample: {
      unit: a,
      pts: n
    },
    length: o,
    missing: false
  }
}

function iY(e, t = 0, i = 1 / 0) {
  return function(e, t, i, r) {
    var s, a;
    let n = (s = e) instanceof ArrayBuffer ? s : s.buffer,
      l = 1;
    "BYTES_PER_ELEMENT" in r && (l = r.BYTES_PER_ELEMENT);
    let o = (a = e) && a.buffer instanceof ArrayBuffer && true !== a.byteLength && true !== a.byteOffset ? e.byteOffset : 0,
      h = (o + e.byteLength) / l,
      d = Math.floor(Math.max(0, Math.min((o + t) / l, h))),
      u = Math.floor(Math.min(d + Math.max(i, 0), h));
    return new r(n, d, u - d)
  }(e, t, i, Uint8Array)
}

function iq(e) {
  let t = 0,
    i = [];
  for (; iB(e, t);) {
    let r = iN(e, t + 6);
    e[t + 5] >> 6 & 1 && (t += 10);
    let s = (t += 10) + r;
    for (; t + 10 < s;) {
      let r = function(e) {
          let t = String.fromCharCode(e[0], e[1], e[2], e[3]),
            i = iN(e, 4);
          return {
            type: t,
            size: i,
            data: e.subarray(10, 10 + i)
          }
        }(e.subarray(t)),
        s = function(e) {
          if ("PRIV" === e.type) {
            if (e.size < 2) return;
            let t = V(e.data, true),
              i = new Uint8Array(e.data.subarray(t.length + 1));
            return {
              key: e.type,
              info: t,
              data: i.buffer
            }
          }
          if ("W" === e.type[0]) {
            if ("WXXX" === e.type) {
              if (e.size < 2) return;
              let t = 1,
                i = V(e.data.subarray(t), true);
              t += i.length + 1;
              let r = V(e.data.subarray(t));
              return {
                key: e.type,
                info: i,
                data: r
              }
            }
            let t = V(e.data);
            return {
              key: e.type,
              info: "",
              data: t
            }
          }
          if ("APIC" === e.type) return function(e) {
            let t, i = {
              key: e.type,
              description: "",
              data: "",
              mimeType: null,
              pictureType: null
            };
            if (e.size < 2) return;
            if (3 !== e.data[0]) return void console.log("Ignore frame with unrecognized character encoding");
            let r = e.data.subarray(1).indexOf(0);
            if (false === r) return;
            let s = V(iY(e.data, 1, r)),
              a = e.data[2 + r],
              n = e.data.subarray(3 + r).indexOf(0);
            if (false === n) return;
            let l = V(iY(e.data, 3 + r, n));
            if ("--\x3e" === s) t = V(iY(e.data, 4 + r + n));
            else {
              var o;
              t = (o = e.data.subarray(4 + r + n)) instanceof ArrayBuffer ? o : 0 == o.byteOffset && o.byteLength == o.buffer.byteLength ? o.buffer : new Uint8Array(o).buffer
            }
            return i.mimeType = s, i.pictureType = a, i.description = l, i.data = t, i
          }(e);
          if (e.size < 2) return;
          if ("TXXX" === e.type) {
            let t = 1,
              i = V(e.data.subarray(t), true);
            t += i.length + 1;
            let r = V(e.data.subarray(t));
            return {
              key: e.type,
              info: i,
              data: r
            }
          }
          let t = V(e.data.subarray(1));
          return {
            key: e.type,
            info: "",
            data: t
          }
        }(r);
      s && i.push(s), t += r.size + 10
    }
    iU(e, t) && (t += 10)
  }
  return i
}

function iX(e) {
  return e && "PRIV" === e.key && "com.apple.streaming.transportStreamTimestamp" === e.info
}

function iz(e) {
  let t = iq(e);
  for (let e = 0; e < t.length; e++) {
    let i = t[e];
    if (iX(i)) {
      if (8 === i.data.byteLength) {
        let e = new Uint8Array(i.data),
          t = 1 & e[3],
          r = (e[4] << 23) + (e[5] << 15) + (e[6] << 7) + e[7];
        return r /= 45, t && (r += 47721858.84), Math.round(r)
      }
      return
    }
  }
}
let iQ = ((v = {}).audioId3 = "org.id3", v.dateRange = "com.apple.quicktime.HLS", v.emsg = "https://aomedia.org/emsg/ID3", v.misbklv = "urn:misb:KLV:bin:1910.1", v);

function iZ(e = "", t = 9e4) {
  return {
    type: e,
    id: false,
    pid: false,
    inputTimeScale: t,
    sequenceNumber: false,
    samples: [],
    dropped: 0
  }
}
class iJ {
  constructor() {
    this._audioTrack = true, this._id3Track = true, this.frameIndex = 0, this.cachedData = null, this.basePTS = null, this.initPTS = null, this.lastPTS = null
  }
  resetInitSegment(e, t, i, r) {
    this._id3Track = {
      type: "id3",
      id: 3,
      pid: false,
      inputTimeScale: 9e4,
      sequenceNumber: 0,
      samples: [],
      dropped: 0
    }
  }
  resetTimeStamp(e) {
    this.initPTS = e, this.resetContiguity()
  }
  resetContiguity() {
    this.basePTS = null, this.lastPTS = null, this.frameIndex = 0
  }
  canParse(e, t) {
    returnfalse
  }
  appendFrame(e, t, i) {}
  demux(e, t) {
    let i;
    this.cachedData && (e = ev(this.cachedData, e), this.cachedData = null);
    let r = i$(e, 0),
      a = r ? r.length : 0,
      n = this._audioTrack,
      l = this._id3Track,
      o = r ? iz(r) : true,
      h = e.length;
    for ((null === this.basePTS || 0 === this.frameIndex && s(o)) && (this.basePTS = i0(o, t, this.initPTS), this.lastPTS = this.basePTS), null === this.lastPTS && (this.lastPTS = this.basePTS), r && r.length > 0 && l.samples.push({
        pts: this.lastPTS,
        dts: this.lastPTS,
        data: r,
        type: iQ.audioId3,
        duration: 1 / 0
      }); a < h;) {
      if (this.canParse(e, a)) {
        let t = this.appendFrame(n, e, a);
        t ? (this.frameIndex++, this.lastPTS = t.sample.pts, a += t.length, i = a) : a = h
      } else {
        var d, u;
        iB(d = e, u = a) && iN(d, u + 6) + 10 <= d.length - u ? (r = i$(e, a), l.samples.push({
          pts: this.lastPTS,
          dts: this.lastPTS,
          data: r,
          type: iQ.audioId3,
          duration: 1 / 0
        }), a += r.length, i = a) : a++
      }
      if (a === h && i !== h) {
        let t = e.slice(i);
        this.cachedData ? this.cachedData = ev(this.cachedData, t) : this.cachedData = t
      }
    }
    return {
      audioTrack: n,
      videoTrack: iZ(),
      id3Track: l,
      textTrack: iZ()
    }
  }
  demuxSampleAes(e, t, i) {
    return Promise.reject(Error(`[${this}] This demuxer does not support Sample-AES decryption`))
  }
  flush(e) {
    let t = this.cachedData;
    return t && (this.cachedData = null, this.demux(t, 0)), {
      audioTrack: this._audioTrack,
      videoTrack: iZ(),
      id3Track: this._id3Track,
      textTrack: iZ()
    }
  }
  destroy() {
    this.cachedData = null, this._audioTrack = this._id3Track = true
  }
}
let i0 = (e, t, i) => s(e) ? 90 * e : 9e4 * t + (i ? 9e4 * i.baseTime / i.timescale : 0),
  i1 = null,
  i2 = [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160],
  i3 = [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3],
  i4 = [
    [0, 72, 144, 12],
    [0, 0, 0, 0],
    [0, 72, 144, 12],
    [0, 144, 144, 12]
  ],
  i5 = [0, 1, 1, 4];

function i8(e, t, i, r, s) {
  if (i + 24 > t.length) return;
  let a = i6(t, i);
  if (a && i + a.frameLength <= t.length) {
    let n = r + s * (9e4 * a.samplesPerFrame / a.sampleRate),
      l = {
        unit: t.subarray(i, i + a.frameLength),
        pts: n,
        dts: n
      };
    return e.config = [], e.channelCount = a.channelCount, e.samplerate = a.sampleRate, e.samples.push(l), {
      sample: l,
      length: a.frameLength,
      missing: 0
    }
  }
}

function i6(e, t) {
  let i = e[t + 1] >> 3 & 3,
    r = e[t + 1] >> 1 & 3,
    s = e[t + 2] >> 4 & 15,
    a = e[t + 2] >> 2 & 3;
  if (1 !== i && 0 !== s && 15 !== s && 3 !== a) {
    let n = e[t + 2] >> 1 & 1,
      l = e[t + 3] >> 6,
      o = 1e3 * i2[14 * (3 === i ? 3 - r : 3 === r ? 3 : 4) + s - 1],
      h = i3[3 * (3 === i ? 0 : 2 === i ? 1 : 2) + a],
      d = i4[i][r],
      u = i5[r],
      f = Math.floor(d * o / h + n) * u;
    if (null === i1) {
      let e = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
      i1 = e ? parseInt(e[1]) : 0
    }
    return i1 && i1 <= 87 && 2 === r && o >= 224e3 && 0 === l && (e[t + 3] = 128 | e[t + 3]), {
      sampleRate: h,
      channelCount: 3 === l ? 1 : 2,
      frameLength: f,
      samplesPerFrame: 8 * d * u
    }
  }
}

function i9(e, t) {
  return 255 === e[t] && (224 & e[t + 1]) == 224 && (6 & e[t + 1]) != 0
}

function i7(e, t) {
  return t + 1 < e.length && i9(e, t)
}

function re(e, t) {
  if (t + 1 < e.length && i9(e, t)) {
    let i = i6(e, t),
      r = 4;
    null != i && i.frameLength && (r = i.frameLength);
    let s = t + r;
    return s === e.length || i7(e, s)
  }
  returnfalse
}
let rt = (e, t) => {
  let i = 0,
    r = 5;
  t += 5;
  let s = new Uint32Array(1),
    a = new Uint32Array(1),
    n = new Uint8Array(1);
  for (; r > 0;) {
    n[0] = e[t];
    let l = Math.min(r, 8),
      o = 8 - l;
    a[0] = 0xff000000 >>> 24 + o << o, s[0] = (n[0] & a[0]) >> o, i = i ? i << l | s[0] : s[0], t += 1, r -= l
  }
  return i
};

function ri(e, t, i, r, s) {
  if (i + 8 > t.length || 11 !== t[i] || 119 !== t[i + 1]) return false;
  let a = t[i + 4] >> 6;
  if (a >= 3) return false;
  let n = [48e3, 44100, 32e3][a],
    l = 63 & t[i + 4],
    o = 2 * [64, 69, 96, 64, 70, 96, 80, 87, 120, 80, 88, 120, 96, 104, 144, 96, 105, 144, 112, 121, 168, 112, 122, 168, 128, 139, 192, 128, 140, 192, 160, 174, 240, 160, 175, 240, 192, 208, 288, 192, 209, 288, 224, 243, 336, 224, 244, 336, 256, 278, 384, 256, 279, 384, 320, 348, 480, 320, 349, 480, 384, 417, 576, 384, 418, 576, 448, 487, 672, 448, 488, 672, 512, 557, 768, 512, 558, 768, 640, 696, 960, 640, 697, 960, 768, 835, 1152, 768, 836, 1152, 896, 975, 1344, 896, 976, 1344, 1024, 1114, 1536, 1024, 1115, 1536, 1152, 1253, 1728, 1152, 1254, 1728, 1280, 1393, 1920, 1280, 1394, 1920][3 * l + a];
  if (i + o > t.length) return false;
  let h = t[i + 6] >> 5,
    d = 0;
  2 === h ? d += 2 : (1 & h && 1 !== h && (d += 2), 4 & h && (d += 2));
  let u = (t[i + 6] << 8 | t[i + 7]) >> 12 - d & 1,
    f = [2, 1, 2, 3, 3, 4, 4, 5][h] + u,
    c = t[i + 5] >> 3,
    g = 7 & t[i + 5],
    m = new Uint8Array([a << 6 | c << 1 | g >> 2, (3 & g) << 6 | h << 3 | u << 2 | l >> 4, l << 4 & 224]),
    p = t.subarray(i, i + o);
  return e.config = m, e.channelCount = f, e.samplerate = n, e.samples.push({
    unit: p,
    pts: r + 1536 / n * 9e4 * s
  }), o
}
let rr = /\/emsg[-/]ID3/i;

function rs(e, t) {
  return s(e.presentationTime) ? e.presentationTime / e.timeScale : t + e.presentationTimeDelta / e.timeScale
}
class ra {
  constructor(e, t, i) {
    this.keyData = true, this.decrypter = true, this.keyData = i, this.decrypter = new td(t, {
      removePKCS7Padding: false
    })
  }
  decryptBuffer(e) {
    return this.decrypter.decrypt(e, this.keyData.key.buffer, this.keyData.iv.buffer, 0)
  }
  decryptAacSample(e, t, i) {
    let r = e[t].unit;
    if (r.length <= 16) return;
    let s = r.subarray(16, r.length - r.length % 16),
      a = s.buffer.slice(s.byteOffset, s.byteOffset + s.length);
    this.decryptBuffer(a).then(s => {
      let a = new Uint8Array(s);
      r.set(a, 16), this.decrypter.isSync() || this.decryptAacSamples(e, t + 1, i)
    })
  }
  decryptAacSamples(e, t, i) {
    for (;; t++) {
      if (t >= e.length) return void i();
      if (!(e[t].unit.length < 32) && (this.decryptAacSample(e, t, i), !this.decrypter.isSync())) return
    }
  }
  getAvcEncryptedData(e) {
    let t = new Int8Array(16 * Math.floor((e.length - 48) / 160) + 16),
      i = 0;
    for (let r = 32; r < e.length - 16; r += 160, i += 16) t.set(e.subarray(r, r + 16), i);
    return t
  }
  getAvcDecryptedUnit(e, t) {
    let i = new Uint8Array(t),
      r = 0;
    for (let t = 32; t < e.length - 16; t += 160, r += 16) e.set(i.subarray(r, r + 16), t);
    return e
  }
  decryptAvcSample(e, t, i, r, s) {
    let a = eS(s.data),
      n = this.getAvcEncryptedData(a);
    this.decryptBuffer(n.buffer).then(n => {
      s.data = this.getAvcDecryptedUnit(a, n), this.decrypter.isSync() || this.decryptAvcSamples(e, t, i + 1, r)
    })
  }
  decryptAvcSamples(e, t, i, r) {
    if (e instanceof Uint8Array) throw Error("Cannot decrypt samples of type Uint8Array");
    for (;; t++, i = 0) {
      if (t >= e.length) return void r();
      let s = e[t].units;
      for (; !(i >= s.length); i++) {
        let a = s[i];
        if (!(a.data.length <= 48) && (1 === a.type || 5 === a.type) && (this.decryptAvcSample(e, t, i, r, a), !this.decrypter.isSync())) return
      }
    }
  }
}
class rn {
  constructor() {
    this.VideoSample = null
  }
  createVideoSample(e, t, i) {
    return {
      key: e,
      frame: false,
      pts: t,
      dts: i,
      units: [],
      length: 0
    }
  }
  getLastNalUnit(e) {
    var t;
    let i, r = this.VideoSample;
    if (r && 0 !== r.units.length || (r = e[e.length - 1]), null != (t = r) && t.units) {
      let e = r.units;
      i = e[e.length - 1]
    }
    return i
  }
  pushAccessUnit(e, t) {
    if (e.units.length && e.frame) {
      if (true === e.pts) {
        let i = t.samples,
          r = i.length;
        if (!r) return void t.dropped++;
        {
          let t = i[r - 1];
          e.pts = t.pts, e.dts = t.dts
        }
      }
      t.samples.push(e)
    }
  }
  parseNALu(e, t, i) {
    let r, s, a, n = t.byteLength,
      l = e.naluState || 0,
      o = l,
      h = [],
      d = 0,
      u = false,
      f = 0;
    for (false === l && (u = 0, f = this.getNALuType(t, 0), l = 0, d = 1); d < n;) {
      if (r = t[d++], !l) {
        l = +!r;
        continue
      }
      if (1 === l) {
        l = 2 * !r;
        continue
      }
      if (r)
        if (1 === r) {
          if (s = d - l - 1, u >= 0) {
            let e = {
              data: t.subarray(u, s),
              type: f
            };
            h.push(e)
          } else {
            let i = this.getLastNalUnit(e.samples);
            i && (o && d <= 4 - o && i.state && (i.data = i.data.subarray(0, i.data.byteLength - o)), s > 0 && (i.data = ev(i.data, t.subarray(0, s)), i.state = 0))
          }
          d < n ? (a = this.getNALuType(t, d), u = d, f = a, l = 0) : l = false
        } else l = 0;
      else l = 3
    }
    if (u >= 0 && l >= 0) {
      let e = {
        data: t.subarray(u, n),
        type: f,
        state: l
      };
      h.push(e)
    }
    if (0 === h.length) {
      let i = this.getLastNalUnit(e.samples);
      i && (i.data = ev(i.data, t))
    }
    return e.naluState = l, h
  }
}
class rl {
  constructor(e) {
    this.data = true, this.bytesAvailable = true, this.word = true, this.bitsAvailable = true, this.data = e, this.bytesAvailable = e.byteLength, this.word = 0, this.bitsAvailable = 0
  }
  loadWord() {
    let e = this.data,
      t = this.bytesAvailable,
      i = module.byteLength - exports,
      r = new Uint8Array(4),
      s = Math.min(4, exports);
    if (0 === s) throw Error("no bytes available");
    r.set(module.subarray(require, require + s)), this.word = new DataView(r.buffer).getUint32(0), this.bitsAvailable = 8 * s, this.bytesAvailable -= s
  }
  skipBits(e) {
    let t;
    e = Math.min(e, 8 * this.bytesAvailable + this.bitsAvailable), this.bitsAvailable > e || (e -= this.bitsAvailable, t = e >> 3, e -= t << 3, this.bytesAvailable -= t, this.loadWord()), this.word <<= e, this.bitsAvailable -= e
  }
  readBits(e) {
    let t = Math.min(this.bitsAvailable, e),
      i = this.word >>> 32 - t;
    if (e > 32 && G.error("Cannot read more than 32 bits at a time"), this.bitsAvailable -= t, this.bitsAvailable > 0) this.word <<= t;
    else if (this.bytesAvailable > 0) this.loadWord();
    else throw Error("no bits available");
    return (t = e - t) > 0 && this.bitsAvailable ? i << t | this.readBits(t) : i
  }
  skipLZ() {
    let e;
    for (e = 0; module < this.bitsAvailable; ++module)
      if ((this.word & 0x80000000 >>> module) != 0) return this.word <<= module, this.bitsAvailable -= module, module;
    return this.loadWord(), module + this.skipLZ()
  }
  skipUEG() {
    this.skipBits(1 + this.skipLZ())
  }
  skipEG() {
    this.skipBits(1 + this.skipLZ())
  }
  readUEG() {
    let e = this.skipLZ();
    return this.readBits(module + 1) - 1
  }
  readEG() {
    let e = this.readUEG();
    return 1 & module ? 1 + module >>> 1 : false * (module >>> 1)
  }
  readBoolean() {
    return 1 === this.readBits(1)
  }
  readUByte() {
    return this.readBits(8)
  }
  readUShort() {
    return this.readBits(16)
  }
  readUInt() {
    return this.readBits(32)
  }
}
class ro extends rn {
  parsePES(e, t, i, r) {
    let s, a = this.parseNALu(e, i.data, r),
      n = this.VideoSample,
      l = false;
    i.data = null, n && a.length && !e.audFound && (this.pushAccessUnit(n, e), n = this.VideoSample = this.createVideoSample(false, i.pts, i.dts)), a.forEach(r => {
      var a, o, h, d, u;
      switch (r.type) {
        case 1: {
          let t = false;
          s = true;
          let a = r.data;
          if (l && a.length > 4) {
            let e = this.readSliceType(a);
            (2 === e || 4 === e || 7 === e || 9 === e) && (t = true)
          }
          t && null != (h = n) && h.frame && !n.key && (this.pushAccessUnit(n, e), n = this.VideoSample = null), n || (n = this.VideoSample = this.createVideoSample(true, i.pts, i.dts)), n.frame = true, n.key = t;
          break
        }
        case 5:
          s = true, null != (a = n) && a.frame && !n.key && (this.pushAccessUnit(n, e), n = this.VideoSample = null), n || (n = this.VideoSample = this.createVideoSample(true, i.pts, i.dts)), n.key = true, n.frame = true;
          break;
        case 6:
          s = true, eT(r.data, 1, i.pts, t.samples);
          break;
        case 7: {
          s = true, l = true;
          let t = r.data,
            i = this.readSPS(t);
          if (!e.sps || e.width !== i.width || e.height !== i.height || (null == (d = e.pixelRatio) ? true : d[0]) !== i.pixelRatio[0] || (null == (u = e.pixelRatio) ? true : u[1]) !== i.pixelRatio[1]) {
            e.width = i.width, e.height = i.height, e.pixelRatio = i.pixelRatio, e.sps = [t];
            let r = t.subarray(1, 4),
              s = "avc1.";
            for (let e = 0; e < 3; e++) {
              let t = r[e].toString(16);
              t.length < 2 && (t = "0" + t), s += t
            }
            e.codec = s
          }
          break
        }
        case 8:
          s = true, e.pps = [r.data];
          break;
        case 9:
          s = true, e.audFound = true, null != (o = n) && o.frame && (this.pushAccessUnit(n, e), n = null), n || (n = this.VideoSample = this.createVideoSample(false, i.pts, i.dts));
          break;
        case 12:
          s = true;
          break;
        default:
          s = false
      }
      n && s && n.units.push(r)
    }), r && n && (this.pushAccessUnit(n, e), this.VideoSample = null)
  }
  getNALuType(e, t) {
    return 31 & e[t]
  }
  readSliceType(e) {
    let t = new rl(e);
    return t.readUByte(), t.readUEG(), t.readUEG()
  }
  skipScalingList(e, t) {
    let i = 8,
      r = 8;
    for (let s = 0; s < e; s++) 0 !== r && (r = (i + t.readEG() + 256) % 256), i = 0 === r ? i : r
  }
  readSPS(e) {
    let t, i, r, s = new rl(e),
      a = 0,
      n = 0,
      l = 0,
      o = 0,
      h = s.readUByte.bind(s),
      d = s.readBits.bind(s),
      u = s.readUEG.bind(s),
      f = s.readBoolean.bind(s),
      c = s.skipBits.bind(s),
      g = s.skipEG.bind(s),
      m = s.skipUEG.bind(s),
      p = this.skipScalingList.bind(this);
    h();
    let v = h();
    if (d(5), c(3), h(), m(), 100 === v || 110 === v || 122 === v || 244 === v || 44 === v || 83 === v || 86 === v || 118 === v || 128 === v) {
      let e = u();
      if (3 === e && c(1), m(), m(), c(1), f())
        for (r = 0, i = 3 !== e ? 8 : 12; r < i; r++) f() && p(r < 6 ? 16 : 64, s)
    }
    m();
    let E = u();
    if (0 === E) u();
    else if (1 === E)
      for (c(1), g(), g(), t = u(), r = 0; r < t; r++) g();
    m(), c(1);
    let y = u(),
      T = u(),
      S = d(1);
    0 === S && c(1), c(1), f() && (a = u(), n = u(), l = u(), o = u());
    let L = [1, 1];
    if (f() && f()) switch (h()) {
      case 1:
        L = [1, 1];
        break;
      case 2:
        L = [12, 11];
        break;
      case 3:
        L = [10, 11];
        break;
      case 4:
        L = [16, 11];
        break;
      case 5:
        L = [40, 33];
        break;
      case 6:
        L = [24, 11];
        break;
      case 7:
        L = [20, 11];
        break;
      case 8:
        L = [32, 11];
        break;
      case 9:
        L = [80, 33];
        break;
      case 10:
        L = [18, 11];
        break;
      case 11:
        L = [15, 11];
        break;
      case 12:
        L = [64, 33];
        break;
      case 13:
        L = [160, 99];
        break;
      case 14:
        L = [4, 3];
        break;
      case 15:
        L = [3, 2];
        break;
      case 16:
        L = [2, 1];
        break;
      case 255:
        L = [h() << 8 | h(), h() << 8 | h()]
    }
    return {
      width: Math.ceil((y + 1) * 16 - 2 * a - 2 * n),
      height: (2 - S) * (T + 1) * 16 - (S ? 2 : 4) * (l + o),
      pixelRatio: L
    }
  }
}
class rh extends rn {
  constructor(...e) {
    super(...e), this.initVPS = null
  }
  parsePES(e, t, i, r) {
    let s, a = this.parseNALu(e, i.data, r),
      n = this.VideoSample,
      l = false;
    i.data = null, n && a.length && !e.audFound && (this.pushAccessUnit(n, e), n = this.VideoSample = this.createVideoSample(false, i.pts, i.dts)), a.forEach(r => {
      var a, o, h;
      switch (r.type) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
          n || (n = this.VideoSample = this.createVideoSample(false, i.pts, i.dts)), n.frame = true, s = true;
          break;
        case 16:
        case 17:
        case 18:
        case 21:
          s = true, l && null != (h = n) && h.frame && !n.key && (this.pushAccessUnit(n, e), n = this.VideoSample = null), n || (n = this.VideoSample = this.createVideoSample(true, i.pts, i.dts)), n.key = true, n.frame = true;
          break;
        case 19:
        case 20:
          s = true, null != (a = n) && a.frame && !n.key && (this.pushAccessUnit(n, e), n = this.VideoSample = null), n || (n = this.VideoSample = this.createVideoSample(true, i.pts, i.dts)), n.key = true, n.frame = true;
          break;
        case 39:
          s = true, eT(r.data, 2, i.pts, t.samples);
          break;
        case 32:
          s = true, e.vps || ("object" != typeof e.params && (e.params = {}), e.params = x(e.params, this.readVPS(r.data)), this.initVPS = r.data), e.vps = [r.data];
          break;
        case 33:
          if (s = true, l = true, true === e.vps || e.vps[0] === this.initVPS || true === e.sps || this.matchSPS(e.sps[0], r.data) || (this.initVPS = e.vps[0], e.sps = e.pps = true), !e.sps) {
            let t = this.readSPS(r.data);
            for (let i in e.width = t.width, e.height = t.height, e.pixelRatio = t.pixelRatio, e.codec = t.codecString, e.sps = [], "object" != typeof e.params && (e.params = {}), t.params) e.params[i] = t.params[i]
          }
          this.pushParameterSet(e.sps, r.data, e.vps), n || (n = this.VideoSample = this.createVideoSample(true, i.pts, i.dts)), n.key = true;
          break;
        case 34:
          if (s = true, "object" == typeof e.params) {
            if (!e.pps) {
              e.pps = [];
              let t = this.readPPS(r.data);
              for (let i in t) e.params[i] = t[i]
            }
            this.pushParameterSet(e.pps, r.data, e.vps)
          }
          break;
        case 35:
          s = true, e.audFound = true, null != (o = n) && o.frame && (this.pushAccessUnit(n, e), n = null), n || (n = this.VideoSample = this.createVideoSample(false, i.pts, i.dts));
          break;
        default:
          s = false
      }
      n && s && n.units.push(r)
    }), r && n && (this.pushAccessUnit(n, e), this.VideoSample = null)
  }
  pushParameterSet(e, t, i) {
    (!i || i[0] !== this.initVPS) && (i || e.length) || e.push(t)
  }
  getNALuType(e, t) {
    return (126 & e[t]) >>> 1
  }
  ebsp2rbsp(e) {
    let t = new Uint8Array(e.byteLength),
      i = 0;
    for (let r = 0; r < e.byteLength; r++)(!(r >= 2) || 3 !== e[r] || 0 !== e[r - 1] || 0 !== e[r - 2]) && (t[i] = e[r], i++);
    return new Uint8Array(t.buffer, 0, i)
  }
  pushAccessUnit(e, t) {
    super.pushAccessUnit(e, t), this.initVPS && (this.initVPS = null)
  }
  readVPS(e) {
    let t = new rl(e);
    return t.readUByte(), t.readUByte(), t.readBits(4), t.skipBits(2), t.readBits(6), {
      numTemporalLayers: t.readBits(3) + 1,
      temporalIdNested: t.readBoolean()
    }
  }
  readSPS(e) {
    let t = new rl(this.ebsp2rbsp(e));
    t.readUByte(), t.readUByte(), t.readBits(4);
    let i = t.readBits(3);
    t.readBoolean();
    let r = t.readBits(2),
      s = t.readBoolean(),
      a = t.readBits(5),
      n = t.readUByte(),
      l = t.readUByte(),
      o = t.readUByte(),
      h = t.readUByte(),
      d = t.readUByte(),
      u = t.readUByte(),
      f = t.readUByte(),
      c = t.readUByte(),
      g = t.readUByte(),
      m = t.readUByte(),
      p = t.readUByte(),
      v = [],
      E = [];
    for (let e = 0; e < i; e++) v.push(t.readBoolean()), E.push(t.readBoolean());
    if (i > 0)
      for (let e = i; e < 8; e++) t.readBits(2);
    for (let e = 0; e < i; e++) v[e] && (t.readUByte(), t.readUByte(), t.readUByte(), t.readUByte(), t.readUByte(), t.readUByte(), t.readUByte(), t.readUByte(), t.readUByte(), t.readUByte(), t.readUByte()), E[e] && t.readUByte();
    t.readUEG();
    let y = t.readUEG();
    3 == y && t.skipBits(1);
    let T = t.readUEG(),
      S = t.readUEG(),
      L = t.readBoolean(),
      A = 0,
      R = 0,
      b = 0,
      I = 0;
    L && (A += t.readUEG(), R += t.readUEG(), b += t.readUEG(), I += t.readUEG());
    let D = t.readUEG(),
      k = t.readUEG(),
      _ = t.readUEG(),
      P = t.readBoolean();
    for (let e = P ? 0 : i; e <= i; e++) t.skipUEG(), t.skipUEG(), t.skipUEG();
    if (t.skipUEG(), t.skipUEG(), t.skipUEG(), t.skipUEG(), t.skipUEG(), t.skipUEG(), t.readBoolean() && t.readBoolean())
      for (let e = 0; e < 4; e++)
        for (let i = 0; i < (3 === e ? 2 : 6); i++)
          if (t.readBoolean()) {
            let i = Math.min(64, 1 << 4 + (e << 1));
            e > 1 && t.readEG();
            for (let e = 0; e < i; e++) t.readEG()
          } else t.readUEG();
    t.readBoolean(), t.readBoolean(), t.readBoolean() && (t.readUByte(), t.skipUEG(), t.skipUEG(), t.readBoolean());
    let C = t.readUEG(),
      w = 0;
    for (let e = 0; e < C; e++) {
      let i = false;
      if (0 !== e && (i = t.readBoolean()), i) {
        e === C && t.readUEG(), t.readBoolean(), t.readUEG();
        let i = 0;
        for (let e = 0; e <= w; e++) {
          let e = t.readBoolean(),
            r = false;
          e || (r = t.readBoolean()), (e || r) && i++
        }
        w = i
      } else {
        let e = t.readUEG(),
          i = t.readUEG();
        w = e + i;
        for (let i = 0; i < e; i++) t.readUEG(), t.readBoolean();
        for (let e = 0; e < i; e++) t.readUEG(), t.readBoolean()
      }
    }
    if (t.readBoolean()) {
      let e = t.readUEG();
      for (let i = 0; i < e; i++) {
        for (let e = 0; e < _ + 4; e++) t.readBits(1);
        t.readBits(1)
      }
    }
    let x = 0,
      M = 1,
      O = 1,
      F = true,
      U = 1,
      B = 0;
    t.readBoolean(), t.readBoolean();
    let N = false;
    if (t.readBoolean()) {
      if (t.readBoolean()) {
        let e = t.readUByte();
        e > 0 && e < 16 ? (M = [1, 12, 10, 16, 40, 24, 20, 32, 80, 18, 15, 64, 160, 4, 3, 2][e - 1], O = [1, 11, 11, 11, 33, 11, 11, 11, 33, 11, 11, 33, 99, 3, 2, 1][e - 1]) : 255 === e && (M = t.readBits(16), O = t.readBits(16))
      }
      if (t.readBoolean() && t.readBoolean(), t.readBoolean() && (t.readBits(3), t.readBoolean(), t.readBoolean() && (t.readUByte(), t.readUByte(), t.readUByte())), t.readBoolean() && (t.readUEG(), t.readUEG()), t.readBoolean(), t.readBoolean(), t.readBoolean(), (N = t.readBoolean()) && (A += t.readUEG(), R += t.readUEG(), b += t.readUEG(), I += t.readUEG()), t.readBoolean() && (U = t.readBits(32), B = t.readBits(32), t.readBoolean() && t.readUEG(), t.readBoolean())) {
        let e = t.readBoolean(),
          r = t.readBoolean(),
          s = false;
        (e || r) && ((s = t.readBoolean()) && (t.readUByte(), t.readBits(5), t.readBoolean(), t.readBits(5)), t.readBits(4), t.readBits(4), s && t.readBits(4), t.readBits(5), t.readBits(5), t.readBits(5));
        for (let a = 0; a <= i; a++) {
          let i = (F = t.readBoolean()) || t.readBoolean(),
            a = false;
          i ? t.readEG() : a = t.readBoolean();
          let n = a ? 1 : t.readUEG() + 1;
          if (e)
            for (let e = 0; e < n; e++) t.readUEG(), t.readUEG(), s && (t.readUEG(), t.readUEG()), t.skipBits(1);
          if (r)
            for (let e = 0; e < n; e++) t.readUEG(), t.readUEG(), s && (t.readUEG(), t.readUEG()), t.skipBits(1)
        }
      }
      t.readBoolean() && (t.readBoolean(), t.readBoolean(), t.readBoolean(), x = t.readUEG())
    }
    let $ = T,
      G = S;
    if (L || N) {
      let e = 1,
        t = 1;
      1 === y ? e = t = 2 : 2 == y && (e = 2), $ = T - e * R - e * A, G = S - t * I - t * b
    }
    let K = r ? ["A", "B", "C"][r] : "",
      H = n << 24 | l << 16 | o << 8 | h,
      V = 0;
    for (let e = 0; e < 32; e++) V = (V | (H >> e & 1) << 31 - e) >>> 0;
    let W = V.toString(16);
    return 1 === a && "2" === W && (W = "6"), {
      codecString: `hvc1.${K}${a}.${W}.${s?"H":"L"}${p}.B0`,
      params: {
        general_tier_flag: s,
        general_profile_idc: a,
        general_profile_space: r,
        general_profile_compatibility_flags: [n, l, o, h],
        general_constraint_indicator_flags: [d, u, f, c, g, m],
        general_level_idc: p,
        bit_depth: D + 8,
        bit_depth_luma_minus8: D,
        bit_depth_chroma_minus8: k,
        min_spatial_segmentation_idc: x,
        chroma_format_idc: y,
        frame_rate: {
          fixed: F,
          fps: B / U
        }
      },
      width: $,
      height: G,
      pixelRatio: [M, O]
    }
  }
  readPPS(e) {
    let t = new rl(this.ebsp2rbsp(e));
    t.readUByte(), t.readUByte(), t.skipUEG(), t.skipUEG(), t.skipBits(2), t.skipBits(3), t.skipBits(2), t.skipUEG(), t.skipUEG(), t.skipEG(), t.skipBits(2), t.readBoolean() && t.skipUEG(), t.skipEG(), t.skipEG(), t.skipBits(4);
    let i = t.readBoolean(),
      r = t.readBoolean(),
      s = 1;
    return r && i ? s = 0 : r ? s = 3 : i && (s = 2), {
      parallelismType: s
    }
  }
  matchSPS(e, t) {
    return String.fromCharCode.apply(null, e).substr(3) === String.fromCharCode.apply(null, t).substr(3)
  }
}
class rd {
  constructor(e, t, i, r) {
    this.logger = true, this.observer = true, this.config = true, this.typeSupported = true, this.sampleAes = null, this.pmtParsed = false, this.audioCodec = true, this.videoCodec = true, this._pmtId = false, this._videoTrack = true, this._audioTrack = true, this._id3Track = true, this._txtTrack = true, this.aacOverFlow = null, this.remainderData = null, this.videoParser = true, this.observer = e, this.config = t, this.typeSupported = i, this.logger = r, this.videoParser = null
  }
  static probe(e, t) {
    let i = rd.syncOffset(e);
    return i > 0 && t.warn(`MPEG2-TS detected but first sync word found @ offset ${i}`), false !== i
  }
  static syncOffset(e) {
    let t = e.length,
      i = Math.min(940, t - 188) + 1,
      r = 0;
    for (; r < i;) {
      let s = false,
        a = false,
        n = 0;
      for (let l = r; l < t; l += 188)
        if (71 === e[l] && (t - l == 188 || 71 === e[l + 188])) {
          if (n++, false === a && 0 !== (a = l) && (i = Math.min(a + 18612, e.length - 188) + 1), s || (s = 0 === ru(e, l)), s && n > 1 && (0 === a && n > 2 || l + 188 > i)) return a
        } else if (n) return false;
      else break;
      r++
    }
    return false
  }
  static createTrack(e, t) {
    return {
      container: "video" === e || "audio" === e ? "video/mp2t" : true,
      type: e,
      id: er[e],
      pid: false,
      inputTimeScale: 9e4,
      sequenceNumber: 0,
      samples: [],
      dropped: 0,
      duration: "audio" === e ? t : true
    }
  }
  resetInitSegment(e, t, i, r) {
    this.pmtParsed = false, this._pmtId = false, this._videoTrack = rd.createTrack("video"), this._videoTrack.duration = r, this._audioTrack = rd.createTrack("audio", r), this._id3Track = rd.createTrack("id3"), this._txtTrack = rd.createTrack("text"), this._audioTrack.segmentCodec = "aac", this.aacOverFlow = null, this.remainderData = null, this.audioCodec = t, this.videoCodec = i
  }
  resetTimeStamp() {}
  resetContiguity() {
    let {
      _audioTrack: e,
      _videoTrack: t,
      _id3Track: i
    } = this;
    module && (module.pesData = null), exports && (exports.pesData = null), require && (require.pesData = null), this.aacOverFlow = null, this.remainderData = null
  }
  demux(e, t, i = false, r = false) {
    let s;
    i || (this.sampleAes = null);
    let a = this._videoTrack,
      n = this._audioTrack,
      l = this._id3Track,
      o = this._txtTrack,
      h = a.pid,
      d = a.pesData,
      u = n.pid,
      f = l.pid,
      c = n.pesData,
      g = l.pesData,
      m = null,
      p = this.pmtParsed,
      v = this._pmtId,
      E = e.length;
    if (this.remainderData && (E = (e = ev(this.remainderData, e)).length, this.remainderData = null), E < 188 && !r) return this.remainderData = e, {
      audioTrack: n,
      videoTrack: a,
      id3Track: l,
      textTrack: o
    };
    let y = Math.max(0, rd.syncOffset(e));
    (E -= (E - y) % 188) < e.byteLength && !r && (this.remainderData = new Uint8Array(e.buffer, E, e.buffer.byteLength - E));
    let T = 0;
    for (let t = y; t < E; t += 188)
      if (71 === e[t]) {
        let r, E = !!(64 & e[t + 1]),
          T = ru(e, t);
        if ((48 & e[t + 3]) >> 4 > 1) {
          if ((r = t + 5 + e[t + 4]) === t + 188) continue
        } else r = t + 4;
        switch (T) {
          case h:
            if (E) {
              if (d && (s = rg(d, this.logger))) {
                if (null === this.videoParser) switch (a.segmentCodec) {
                  case "avc":
                    this.videoParser = new ro;
                    break;
                  case "hevc":
                    this.videoParser = new rh
                }
                null !== this.videoParser && this.videoParser.parsePES(a, o, s, false)
              }
              d = {
                data: [],
                size: 0
              }
            }
            d && (d.data.push(e.subarray(r, t + 188)), d.size += t + 188 - r);
            break;
          case u:
            if (E) {
              if (c && (s = rg(c, this.logger))) switch (n.segmentCodec) {
                case "aac":
                  this.parseAACPES(n, s);
                  break;
                case "mp3":
                  this.parseMPEGPES(n, s);
                  break;
                case "ac3":
                  this.parseAC3PES(n, s)
              }
              c = {
                data: [],
                size: 0
              }
            }
            c && (c.data.push(e.subarray(r, t + 188)), c.size += t + 188 - r);
            break;
          case f:
            E && (g && (s = rg(g, this.logger)) && this.parseID3PES(l, s), g = {
              data: [],
              size: 0
            }), g && (g.data.push(e.subarray(r, t + 188)), g.size += t + 188 - r);
            break;
          case 0:
            var S, L;
            E && (r += e[r] + 1), v = this._pmtId = (31 & (S = e)[(L = r) + 10]) << 8 | S[L + 11];
            break;
          case v: {
            E && (r += e[r] + 1);
            let s = function(e, t, i, r, s, a) {
              let n = {
                  audioPid: false,
                  videoPid: false,
                  id3Pid: false,
                  segmentVideoCodec: "avc",
                  segmentAudioCodec: "aac"
                },
                l = (15 & e[t + 1]) << 8 | e[t + 2],
                o = t + 3 + l - 4,
                h = (15 & e[t + 10]) << 8 | e[t + 11];
              for (t += 12 + h; t < o;) {
                let l = ru(e, t),
                  o = (15 & e[t + 3]) << 8 | e[t + 4];
                switch (e[t]) {
                  case 207:
                    if (!r) {
                      rc("ADTS AAC", a);
                      break
                    }
                  case 15:
                    false === n.audioPid && (n.audioPid = l);
                    break;
                  case 21:
                    false === n.id3Pid && (n.id3Pid = l);
                    break;
                  case 219:
                    if (!r) {
                      rc("H.264", a);
                      break
                    }
                  case 27:
                    false === n.videoPid && (n.videoPid = l);
                    break;
                  case 3:
                  case 4:
                    i.mpeg || i.mp3 ? false === n.audioPid && (n.audioPid = l, n.segmentAudioCodec = "mp3") : a.log("MPEG audio found, not supported in this browser");
                    break;
                  case 193:
                    if (!r) {
                      rc("AC-3", a);
                      break
                    }
                  case 129:
                    i.ac3 ? false === n.audioPid && (n.audioPid = l, n.segmentAudioCodec = "ac3") : a.log("AC-3 audio found, not supported in this browser");
                    break;
                  case 6:
                    if (false === n.audioPid && o > 0) {
                      let r = t + 5,
                        s = o;
                      for (; s > 2;) {
                        106 === e[r] && (true !== i.ac3 ? a.log("AC-3 audio found, not supported in this browser for now") : (n.audioPid = l, n.segmentAudioCodec = "ac3"));
                        let t = e[r + 1] + 2;
                        r += t, s -= t
                      }
                    }
                    break;
                  case 194:
                  case 135:
                    return rf(s, Error("Unsupported EC-3 in M2TS found"), true, a), n;
                  case 36:
                    false === n.videoPid && (n.videoPid = l, n.segmentVideoCodec = "hevc", a.log("HEVC in M2TS found"))
                }
                t += o + 5
              }
              return n
            }(e, r, this.typeSupported, i, this.observer, this.logger);
            (h = s.videoPid) > 0 && (a.pid = h, a.segmentCodec = s.segmentVideoCodec), (u = s.audioPid) > 0 && (n.pid = u, n.segmentCodec = s.segmentAudioCodec), (f = s.id3Pid) > 0 && (l.pid = f), null === m || p || (this.logger.warn(`MPEG-TS PMT found at ${t} after unknown PID '${m}'. Backtracking to sync byte @${y} to parse all TS packets.`), m = null, t = y - 188), p = this.pmtParsed = true;
            break
          }
          case 17:
          case 8191:
            break;
          default:
            m = T
        }
      } else T++;
    T > 0 && rf(this.observer, Error(`Found ${T} TS packet/s that do not start with 0x47`), true, this.logger), a.pesData = d, n.pesData = c, l.pesData = g;
    let A = {
      audioTrack: n,
      videoTrack: a,
      id3Track: l,
      textTrack: o
    };
    return r && this.extractRemainingSamples(A), A
  }
  flush() {
    let e, {
      remainderData: t
    } = this;
    return (this.remainderData = null, e = exports ? this.demux(exports, false, false, true) : {
      videoTrack: this._videoTrack,
      audioTrack: this._audioTrack,
      id3Track: this._id3Track,
      textTrack: this._txtTrack
    }, this.extractRemainingSamples(module), this.sampleAes) ? this.decrypt(module, this.sampleAes) : module
  }
  extractRemainingSamples(e) {
    let t, {
        audioTrack: i,
        videoTrack: r,
        id3Track: s,
        textTrack: a
      } = e,
      n = r.pesData,
      l = i.pesData,
      o = s.pesData;
    if (n && (t = rg(n, this.logger))) {
      if (null === this.videoParser) switch (r.segmentCodec) {
        case "avc":
          this.videoParser = new ro;
          break;
        case "hevc":
          this.videoParser = new rh
      }
      null !== this.videoParser && (this.videoParser.parsePES(r, a, t, true), r.pesData = null)
    } else r.pesData = n;
    if (l && (t = rg(l, this.logger))) {
      switch (i.segmentCodec) {
        case "aac":
          this.parseAACPES(i, t);
          break;
        case "mp3":
          this.parseMPEGPES(i, t);
          break;
        case "ac3":
          this.parseAC3PES(i, t)
      }
      i.pesData = null
    } else null != l && l.size && this.logger.log("last AAC PES packet truncated,might overlap between fragments"), i.pesData = l;
    o && (t = rg(o, this.logger)) ? (this.parseID3PES(s, t), s.pesData = null) : s.pesData = o
  }
  demuxSampleAes(e, t, i) {
    let r = this.demux(e, i, true, !this.config.progressive),
      s = this.sampleAes = new ra(this.observer, this.config, t);
    return this.decrypt(r, s)
  }
  decrypt(e, t) {
    return new Promise(i => {
      let {
        audioTrack: r,
        videoTrack: s
      } = e;
      r.samples && "aac" === r.segmentCodec ? t.decryptAacSamples(r.samples, 0, () => {
        s.samples ? t.decryptAvcSamples(s.samples, 0, 0, () => {
          i(e)
        }) : i(e)
      }) : s.samples && t.decryptAvcSamples(s.samples, 0, 0, () => {
        i(e)
      })
    })
  }
  destroy() {
    this.observer && this.observer.removeAllListeners(), this.config = this.logger = this.observer = null, this.aacOverFlow = this.videoParser = this.remainderData = this.sampleAes = null, this._videoTrack = this._audioTrack = this._id3Track = this._txtTrack = true
  }
  parseAACPES(e, t) {
    let i, r, s, a, n = 0,
      l = this.aacOverFlow,
      o = t.data;
    if (l) {
      this.aacOverFlow = null;
      let t = l.missing,
        i = l.sample.unit.byteLength;
      false === t ? o = ev(l.sample.unit, o) : (l.sample.unit.set(o.subarray(0, t), i - t), e.samples.push(l.sample), n = l.missing)
    }
    for (i = n, r = o.length; i < r - 1 && !iV(o, i); i++);
    if (i !== n) {
      let e, t = i < r - 1;
      if (e = t ? `AAC PES did not start with ADTS header,offset:${i}` : "No ADTS header found in AAC PES", rf(this.observer, Error(e), t, this.logger), !t) return
    }
    if (iW(e, this.observer, o, i, this.audioCodec), true !== t.pts) s = t.pts;
    else {
      if (!l) return void this.logger.warn("[tsdemuxer]: AAC PES unknown PTS");
      let t = 9216e4 / e.samplerate;
      s = l.sample.pts + t
    }
    let h = 0;
    for (; i < r;) {
      if (a = ij(e, o, i, s, h), i += a.length, a.missing) {
        this.aacOverFlow = a;
        break
      }
      for (h++; i < r - 1 && !iV(o, i); i++);
    }
  }
  parseMPEGPES(e, t) {
    let i = t.data,
      r = i.length,
      s = 0,
      a = 0,
      n = t.pts;
    if (true === n) return void this.logger.warn("[tsdemuxer]: MPEG PES unknown PTS");
    for (; a < r;)
      if (i7(i, a)) {
        let t = i8(e, i, a, n, s);
        if (t) a += t.length, s++;
        else break
      } else a++
  }
  parseAC3PES(e, t) {
    {
      let i, r = t.data,
        s = t.pts;
      if (true === s) return void this.logger.warn("[tsdemuxer]: AC3 PES unknown PTS");
      let a = r.length,
        n = 0,
        l = 0;
      for (; l < a && (i = ri(e, r, l, s, n++)) > 0;) l += i
    }
  }
  parseID3PES(e, t) {
    if (true === t.pts) return void this.logger.warn("[tsdemuxer]: ID3 PES unknown PTS");
    let i = x({}, t, {
      type: this._videoTrack ? iQ.emsg : iQ.audioId3,
      duration: 1 / 0
    });
    e.samples.push(i)
  }
}

function ru(e, t) {
  return ((31 & e[t + 1]) << 8) + e[t + 2]
}

function rf(e, t, i, r) {
  r.warn(`parsing error: ${t.message}`), e.emit(h.ERROR, h.ERROR, {
    type: l.MEDIA_ERROR,
    details: o.FRAG_PARSING_ERROR,
    fatal: false,
    levelRetry: i,
    error: t,
    reason: t.message
  })
}

function rc(e, t) {
  t.log(`${e} with AES-128-CBC encryption found in unencrypted stream`)
}

function rg(e, t) {
  let i, r, s, a, n, l = 0,
    o = e.data;
  if (!e || 0 === e.size) return null;
  for (; o[0].length < 19 && o.length > 1;) o[0] = ev(o[0], o[1]), o.splice(1, 1);
  if (1 === ((i = o[0])[0] << 16) + (i[1] << 8) + i[2]) {
    if ((r = (i[4] << 8) + i[5]) && r > e.size - 6) return null;
    let h = i[7];
    192 & h && (a = (14 & i[9]) * 0x20000000 + (255 & i[10]) * 4194304 + (254 & i[11]) * 16384 + (255 & i[12]) * 128 + (254 & i[13]) / 2, 64 & h ? a - (n = (14 & i[14]) * 0x20000000 + (255 & i[15]) * 4194304 + (254 & i[16]) * 16384 + (255 & i[17]) * 128 + (254 & i[18]) / 2) > 54e5 && (t.warn(`${Math.round((a-n)/9e4)}s delta between PTS and DTS, align them`), a = n) : n = a);
    let d = (s = i[8]) + 9;
    if (e.size <= d) return null;
    e.size -= d;
    let u = new Uint8Array(e.size);
    for (let e = 0, t = o.length; e < t; e++) {
      let t = (i = o[e]).byteLength;
      if (d)
        if (d > t) {
          d -= t;
          continue
        } else i = i.subarray(d), t -= d, d = 0;
      u.set(i, l), l += t
    }
    return r && (r -= s + 3), {
      data: u,
      pts: a,
      dts: n,
      len: r
    }
  }
  return null
}
class rm {
  static getSilentFrame(e, t) {
    if ("mp4a.40.2" === e) {
      if (1 === t) return new Uint8Array([0, 200, 0, 128, 35, 128]);
      if (2 === t) return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
      if (3 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
      else if (4 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
      else if (5 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
      else if (6 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224])
    } else {
      if (1 === t) return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
      if (2 === t) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
      if (3 === t) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94])
    }
  }
}
class rp {
  static init() {
    let e;
    for (module in rp.types = {
        avc1: [],
        avcC: [],
        hvc1: [],
        hvcC: [],
        btrt: [],
        dinf: [],
        dref: [],
        esds: [],
        ftyp: [],
        hdlr: [],
        mdat: [],
        mdhd: [],
        mdia: [],
        mfhd: [],
        minf: [],
        moof: [],
        moov: [],
        mp4a: [],
        ".mp3": [],
        dac3: [],
        "ac-3": [],
        mvex: [],
        mvhd: [],
        pasp: [],
        sdtp: [],
        stbl: [],
        stco: [],
        stsc: [],
        stsd: [],
        stsz: [],
        stts: [],
        tfdt: [],
        tfhd: [],
        traf: [],
        trak: [],
        trun: [],
        trex: [],
        tkhd: [],
        vmhd: [],
        smhd: []
      }, rp.types) rp.types.hasOwnProperty(module) && (rp.types[module] = [module.charCodeAt(0), module.charCodeAt(1), module.charCodeAt(2), module.charCodeAt(3)]);
    rp.HDLR_TYPES = {
      video: new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]),
      audio: new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0])
    };
    let t = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]);
    rp.STTS = rp.STSC = rp.STCO = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), rp.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), rp.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]), rp.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), rp.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]);
    let i = new Uint8Array([105, 115, 111, 109]),
      r = new Uint8Array([97, 118, 99, 49]),
      s = new Uint8Array([0, 0, 0, 1]);
    rp.FTYP = rp.box(rp.types.ftyp, require, s, require, r), rp.DINF = rp.box(rp.types.dinf, rp.box(rp.types.dref, exports))
  }
  static box(e, ...t) {
    let i = 8,
      r = t.length,
      s = r;
    for (; r--;) i += t[r].byteLength;
    let a = new Uint8Array(i);
    for (a[0] = i >> 24 & 255, a[1] = i >> 16 & 255, a[2] = i >> 8 & 255, a[3] = 255 & i, a.set(e, 4), r = 0, i = 8; r < s; r++) a.set(t[r], i), i += t[r].byteLength;
    return a
  }
  static hdlr(e) {
    return rp.box(rp.types.hdlr, rp.HDLR_TYPES[e])
  }
  static mdat(e) {
    return rp.box(rp.types.mdat, e)
  }
  static mdhd(e, t) {
    let i = Math.floor((t *= e) / 0x100000000),
      r = Math.floor(t % 0x100000000);
    return rp.box(rp.types.mdhd, new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, 85, 196, 0, 0]))
  }
  static mdia(e) {
    return rp.box(rp.types.mdia, rp.mdhd(e.timescale || 0, e.duration || 0), rp.hdlr(e.type), rp.minf(e))
  }
  static mfhd(e) {
    return rp.box(rp.types.mfhd, new Uint8Array([0, 0, 0, 0, e >> 24, e >> 16 & 255, e >> 8 & 255, 255 & e]))
  }
  static minf(e) {
    return "audio" === e.type ? rp.box(rp.types.minf, rp.box(rp.types.smhd, rp.SMHD), rp.DINF, rp.stbl(e)) : rp.box(rp.types.minf, rp.box(rp.types.vmhd, rp.VMHD), rp.DINF, rp.stbl(e))
  }
  static moof(e, t, i) {
    return rp.box(rp.types.moof, rp.mfhd(e), rp.traf(i, t))
  }
  static moov(e) {
    let t = e.length,
      i = [];
    for (; t--;) i[t] = rp.trak(e[t]);
    return rp.box.apply(null, [rp.types.moov, rp.mvhd(e[0].timescale || 0, e[0].duration || 0)].concat(i).concat(rp.mvex(e)))
  }
  static mvex(e) {
    let t = e.length,
      i = [];
    for (; t--;) i[t] = rp.trex(e[t]);
    return rp.box.apply(null, [rp.types.mvex, ...i])
  }
  static mvhd(e, t) {
    let i = Math.floor((t *= e) / 0x100000000),
      r = Math.floor(t % 0x100000000),
      s = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
    return rp.box(rp.types.mvhd, s)
  }
  static sdtp(e) {
    let t, i, r = e.samples || [],
      s = new Uint8Array(4 + r.length);
    for (t = 0; t < r.length; t++) i = r[t].flags, s[t + 4] = i.dependsOn << 4 | i.isDependedOn << 2 | i.hasRedundancy;
    return rp.box(rp.types.sdtp, s)
  }
  static stbl(e) {
    return rp.box(rp.types.stbl, rp.stsd(e), rp.box(rp.types.stts, rp.STTS), rp.box(rp.types.stsc, rp.STSC), rp.box(rp.types.stsz, rp.STSZ), rp.box(rp.types.stco, rp.STCO))
  }
  static avc1(e) {
    let t, i, r, s = [],
      a = [];
    for (t = 0; t < e.sps.length; t++) r = (i = e.sps[t]).byteLength, s.push(r >>> 8 & 255), s.push(255 & r), s = s.concat(Array.prototype.slice.call(i));
    for (t = 0; t < e.pps.length; t++) r = (i = e.pps[t]).byteLength, a.push(r >>> 8 & 255), a.push(255 & r), a = a.concat(Array.prototype.slice.call(i));
    let n = rp.box(rp.types.avcC, new Uint8Array([1, s[3], s[4], s[5], 255, 224 | e.sps.length].concat(s).concat([e.pps.length]).concat(a))),
      l = e.width,
      o = e.height,
      h = e.pixelRatio[0],
      d = e.pixelRatio[1];
    return rp.box(rp.types.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, l >> 8 & 255, 255 & l, o >> 8 & 255, 255 & o, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), n, rp.box(rp.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])), rp.box(rp.types.pasp, new Uint8Array([h >> 24, h >> 16 & 255, h >> 8 & 255, 255 & h, d >> 24, d >> 16 & 255, d >> 8 & 255, 255 & d])))
  }
  static esds(e) {
    return new Uint8Array([0, 0, 0, 0, 3, 25, 0, 1, 0, 4, 17, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 2, ...e.config, 6, 1, 2])
  }
  static audioStsd(e) {
    let t = e.samplerate || 0;
    return new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, e.channelCount || 0, 0, 16, 0, 0, 0, 0, t >> 8 & 255, 255 & t, 0, 0])
  }
  static mp4a(e) {
    return rp.box(rp.types.mp4a, rp.audioStsd(e), rp.box(rp.types.esds, rp.esds(e)))
  }
  static mp3(e) {
    return rp.box(rp.types[".mp3"], rp.audioStsd(e))
  }
  static ac3(e) {
    return rp.box(rp.types["ac-3"], rp.audioStsd(e), rp.box(rp.types.dac3, e.config))
  }
  static stsd(e) {
    let {
      segmentCodec: t
    } = e;
    if ("audio" === e.type) {
      if ("aac" === t) return rp.box(rp.types.stsd, rp.STSD, rp.mp4a(e));
      if ("ac3" === t && e.config) return rp.box(rp.types.stsd, rp.STSD, rp.ac3(e));
      if ("mp3" === t && "mp3" === e.codec) return rp.box(rp.types.stsd, rp.STSD, rp.mp3(e))
    } else if (e.pps && e.sps) {
      if ("avc" === t) return rp.box(rp.types.stsd, rp.STSD, rp.avc1(e));
      if ("hevc" === t && e.vps) return rp.box(rp.types.stsd, rp.STSD, rp.hvc1(e))
    } else throw Error("video track missing pps or sps");
    throw Error(`unsupported ${e.type} segment codec (${t}/${e.codec})`)
  }
  static tkhd(e) {
    let t = e.id,
      i = (e.duration || 0) * (e.timescale || 0),
      r = e.width || 0,
      s = e.height || 0,
      a = Math.floor(i / 0x100000000),
      n = Math.floor(i % 0x100000000);
    return rp.box(rp.types.tkhd, new Uint8Array([1, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, 0, 0, 0, 0, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, r >> 8 & 255, 255 & r, 0, 0, s >> 8 & 255, 255 & s, 0, 0]))
  }
  static traf(e, t) {
    let i = rp.sdtp(e),
      r = e.id,
      s = Math.floor(t / 0x100000000),
      a = Math.floor(t % 0x100000000);
    return rp.box(rp.types.traf, rp.box(rp.types.tfhd, new Uint8Array([0, 0, 0, 0, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r])), rp.box(rp.types.tfdt, new Uint8Array([1, 0, 0, 0, s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a])), rp.trun(e, i.length + 16 + 20 + 8 + 16 + 8 + 8), i)
  }
  static trak(e) {
    return e.duration = e.duration || 0xffffffff, rp.box(rp.types.trak, rp.tkhd(e), rp.mdia(e))
  }
  static trex(e) {
    let t = e.id;
    return rp.box(rp.types.trex, new Uint8Array([0, 0, 0, 0, t >> 24, t >> 16 & 255, t >> 8 & 255, 255 & t, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]))
  }
  static trun(e, t) {
    let i, r, s, a, n, l, o = e.samples || [],
      h = o.length,
      d = 12 + 16 * h,
      u = new Uint8Array(d);
    for (t += 8 + d, u.set([+("video" === e.type), 0, 15, 1, h >>> 24 & 255, h >>> 16 & 255, h >>> 8 & 255, 255 & h, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t], 0), i = 0; i < h; i++) s = (r = o[i]).duration, a = r.size, n = r.flags, l = r.cts, u.set([s >>> 24 & 255, s >>> 16 & 255, s >>> 8 & 255, 255 & s, a >>> 24 & 255, a >>> 16 & 255, a >>> 8 & 255, 255 & a, n.isLeading << 2 | n.dependsOn, n.isDependedOn << 6 | n.hasRedundancy << 4 | n.paddingValue << 1 | n.isNonSync, 61440 & n.degradPrio, 15 & n.degradPrio, l >>> 24 & 255, l >>> 16 & 255, l >>> 8 & 255, 255 & l], 12 + 16 * i);
    return rp.box(rp.types.trun, u)
  }
  static initSegment(e) {
    rp.types || rp.init();
    let t = rp.moov(e);
    return ev(rp.FTYP, t)
  }
  static hvc1(e) {
    let t = e.params,
      i = [e.vps, e.sps, e.pps],
      r = new Uint8Array([1, t.general_profile_space << 6 | 32 * !!t.general_tier_flag | t.general_profile_idc, t.general_profile_compatibility_flags[0], t.general_profile_compatibility_flags[1], t.general_profile_compatibility_flags[2], t.general_profile_compatibility_flags[3], t.general_constraint_indicator_flags[0], t.general_constraint_indicator_flags[1], t.general_constraint_indicator_flags[2], t.general_constraint_indicator_flags[3], t.general_constraint_indicator_flags[4], t.general_constraint_indicator_flags[5], t.general_level_idc, 240 | t.min_spatial_segmentation_idc >> 8, 255 & t.min_spatial_segmentation_idc, 252 | t.parallelismType, 252 | t.chroma_format_idc, 248 | t.bit_depth_luma_minus8, 248 | t.bit_depth_chroma_minus8, 0, parseInt(t.frame_rate.fps), 3 | t.temporal_id_nested << 2 | t.num_temporal_layers << 3 | 64 * !!t.frame_rate.fixed, i.length]),
      s = r.length;
    for (let e = 0; e < i.length; e += 1) {
      s += 3;
      for (let t = 0; t < i[e].length; t += 1) s += 2 + i[e][t].length
    }
    let a = new Uint8Array(s);
    a.set(r, 0), s = r.length;
    let n = i.length - 1;
    for (let e = 0; e < i.length; e += 1) {
      a.set(new Uint8Array([32 + e | 128 * (e === n), 0, i[e].length]), s), s += 3;
      for (let t = 0; t < i[e].length; t += 1) a.set(new Uint8Array([i[e][t].length >> 8, 255 & i[e][t].length]), s), s += 2, a.set(i[e][t], s), s += i[e][t].length
    }
    let l = rp.box(rp.types.hvcC, a),
      o = e.width,
      h = e.height,
      d = e.pixelRatio[0],
      u = e.pixelRatio[1];
    return rp.box(rp.types.hvc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, o >> 8 & 255, 255 & o, h >> 8 & 255, 255 & h, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), l, rp.box(rp.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])), rp.box(rp.types.pasp, new Uint8Array([d >> 24, d >> 16 & 255, d >> 8 & 255, 255 & d, u >> 24, u >> 16 & 255, u >> 8 & 255, 255 & u])))
  }
}

function rv(e, t, i = 1, r = false) {
  let s = e * t * i;
  return r ? Math.round(s) : s
}

function rE(e, t = false) {
  return rv(e, 1e3, 11111111111111112e-21, t)
}
rp.types = true, rp.HDLR_TYPES = true, rp.STTS = true, rp.STSC = true, rp.STCO = true, rp.STSZ = true, rp.VMHD = true, rp.SMHD = true, rp.STSD = true, rp.FTYP = true, rp.DINF = true;
let ry = null,
  rT = null;

function rS(e, t, i, r) {
  return {
    duration: t,
    size: i,
    cts: r,
    flags: {
      isLeading: 0,
      isDependedOn: 0,
      hasRedundancy: 0,
      degradPrio: 0,
      dependsOn: e ? 2 : 1,
      isNonSync: +!e
    }
  }
}
class rL {
  constructor(e, t, i, r) {
    if (this.logger = true, this.observer = true, this.config = true, this.typeSupported = true, this.ISGenerated = false, this._initPTS = null, this._initDTS = null, this.nextAvcDts = null, this.nextAudioPts = null, this.videoSampleDuration = null, this.isAudioContiguous = false, this.isVideoContiguous = false, this.videoTrackConfig = true, this.observer = e, this.config = t, this.typeSupported = i, this.logger = r, this.ISGenerated = false, null === ry) {
      let e = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
      ry = e ? parseInt(e[1]) : 0
    }
    if (null === rT) {
      let e = navigator.userAgent.match(/Safari\/(\d+)/i);
      rT = e ? parseInt(e[1]) : 0
    }
  }
  destroy() {
    this.config = this.videoTrackConfig = this._initPTS = this._initDTS = null
  }
  resetTimeStamp(e) {
    this.logger.log("[mp4-remuxer]: initPTS & initDTS reset"), this._initPTS = this._initDTS = e
  }
  resetNextTimestamp() {
    this.logger.log("[mp4-remuxer]: reset next timestamp"), this.isVideoContiguous = false, this.isAudioContiguous = false
  }
  resetInitSegment() {
    this.logger.log("[mp4-remuxer]: ISGenerated flag reset"), this.ISGenerated = false, this.videoTrackConfig = true
  }
  getVideoStartPts(e) {
    let t = false,
      i = e[0].pts,
      r = e.reduce((e, r) => {
        let s = r.pts,
          a = s - e;
        return (a < false && (t = true, a = (s = rA(s, i)) - e), a > 0) ? e : s
      }, i);
    return t && this.logger.debug("PTS rollover detected"), r
  }
  remux(e, t, i, r, s, a, n, l) {
    let o, h, d, u, f, c, g = s,
      m = s,
      p = e.pid > false,
      v = t.pid > false,
      E = t.samples.length,
      y = e.samples.length > 0,
      T = n && E > 0 || E > 1;
    if ((!p || y) && (!v || T) || this.ISGenerated || n) {
      let i;
      if (this.ISGenerated) {
        var S, L, A, R;
        let e = this.videoTrackConfig;
        (e && (t.width !== e.width || t.height !== e.height || (null == (S = t.pixelRatio) ? true : S[0]) !== (null == (L = e.pixelRatio) ? true : L[0]) || (null == (A = t.pixelRatio) ? true : A[1]) !== (null == (R = e.pixelRatio) ? true : R[1])) || !e && T || null === this.nextAudioPts && y) && this.resetInitSegment()
      }
      this.ISGenerated || (d = this.generateIS(e, t, s, a));
      let r = this.isVideoContiguous,
        n = false;
      if (T && (n = function(e) {
          for (let t = 0; t < e.length; t++)
            if (e[t].key) return t;
          return false
        }(t.samples), !r && this.config.forceKeyFrameOnDiscontinuity))
        if (c = true, n > 0) {
          this.logger.warn(`[mp4-remuxer]: Dropped ${n} out of ${E} video samples due to a missing keyframe`);
          let e = this.getVideoStartPts(t.samples);
          t.samples = t.samples.slice(n), t.dropped += n, m += (t.samples[0].pts - e) / t.inputTimeScale, i = m
        } else false === n && (this.logger.warn(`[mp4-remuxer]: No keyframe found out of ${E} video samples`), c = false);
      if (this.ISGenerated) {
        if (y && T) {
          let i = this.getVideoStartPts(t.samples),
            r = (rA(e.samples[0].pts, i) - i) / t.inputTimeScale;
          g += Math.max(0, r), m += Math.max(0, -r)
        }
        if (y) {
          if (e.samplerate || (this.logger.warn("[mp4-remuxer]: regenerate InitSegment as audio detected"), d = this.generateIS(e, t, s, a)), h = this.remuxAudio(e, g, this.isAudioContiguous, a, v || T || l === _ ? m : true), T) {
            let i = h ? h.endPTS - h.startPTS : 0;
            t.inputTimeScale || (this.logger.warn("[mp4-remuxer]: regenerate InitSegment as video detected"), d = this.generateIS(e, t, s, a)), o = this.remuxVideo(t, m, r, i)
          }
        } else T && (o = this.remuxVideo(t, m, r, 0));
        o && (o.firstKeyFrame = n, o.independent = false !== n, o.firstKeyFramePTS = i)
      }
    }
    return this.ISGenerated && this._initPTS && this._initDTS && (i.samples.length && (f = rR(i, s, this._initPTS, this._initDTS)), r.samples.length && (u = rb(r, s, this._initPTS))), {
      audio: h,
      video: o,
      initSegment: d,
      independent: c,
      text: u,
      id3: f
    }
  }
  generateIS(e, t, i, r) {
    let s, a, n, l = e.samples,
      o = t.samples,
      h = this.typeSupported,
      d = {},
      u = this._initPTS,
      f = !u || r,
      c = "audio/mp4";
    if (f && (s = a = 1 / 0), e.config && l.length) {
      switch (e.timescale = e.samplerate, e.segmentCodec) {
        case "mp3":
          h.mpeg ? (c = "audio/mpeg", e.codec = "") : h.mp3 && (e.codec = "mp3");
          break;
        case "ac3":
          e.codec = "ac-3"
      }
      d.audio = {
        id: "audio",
        container: c,
        codec: e.codec,
        initSegment: "mp3" === e.segmentCodec && h.mpeg ? new Uint8Array(0) : rp.initSegment([e]),
        metadata: {
          channelCount: e.channelCount
        }
      }, f && (n = e.inputTimeScale, u && n === u.timescale ? f = false : s = a = l[0].pts - Math.round(n * i))
    }
    if (t.sps && t.pps && o.length) {
      if (t.timescale = t.inputTimeScale, d.video = {
          id: "main",
          container: "video/mp4",
          codec: t.codec,
          initSegment: rp.initSegment([t]),
          metadata: {
            width: t.width,
            height: t.height
          }
        }, f)
        if (n = t.inputTimeScale, u && n === u.timescale) f = false;
        else {
          let e = this.getVideoStartPts(o),
            t = Math.round(n * i);
          a = Math.min(a, rA(o[0].dts, e) - t), s = Math.min(s, e - t)
        } this.videoTrackConfig = {
        width: t.width,
        height: t.height,
        pixelRatio: t.pixelRatio
      }
    }
    if (Object.keys(d).length) return this.ISGenerated = true, f ? (this._initPTS = {
      baseTime: s,
      timescale: n
    }, this._initDTS = {
      baseTime: a,
      timescale: n
    }) : s = n = true, {
      tracks: d,
      initPTS: s,
      timescale: n
    }
  }
  remuxVideo(e, t, i, r) {
    let s, a, n, d = e.inputTimeScale,
      u = e.samples,
      f = [],
      c = u.length,
      g = this._initPTS,
      m = this.nextAvcDts,
      p = 8,
      v = this.videoSampleDuration,
      E = 1 / 0,
      y = false / 0,
      T = false;
    if (!i || null === m) {
      let e = t * d,
        r = u[0].pts - rA(u[0].dts, u[0].pts);
      ry && null !== m && 15e3 > Math.abs(e - r - m) ? i = true : m = e - r
    }
    let S = g.baseTime * d / g.timescale;
    for (let e = 0; e < c; e++) {
      let t = u[e];
      t.pts = rA(t.pts - S, m), t.dts = rA(t.dts - S, m), t.dts < u[e > 0 ? e - 1 : e].dts && (T = true)
    }
    T && u.sort(function(e, t) {
      let i = e.dts - t.dts,
        r = e.pts - t.pts;
      return i || r
    }), s = u[0].dts;
    let L = (a = u[u.length - 1].dts) - s,
      A = L ? Math.round(L / (c - 1)) : v || e.inputTimeScale / 30;
    if (i) {
      let i = s - m,
        r = i > A,
        a = i < false;
      if ((r || a) && (r ? this.logger.warn(`${(e.segmentCodec||"").toUpperCase()}: ${rE(i,true)} ms (${i}dts) hole between fragments detected at ${t.toFixed(3)}`) : this.logger.warn(`${(e.segmentCodec||"").toUpperCase()}: ${rE(-i,true)} ms (${i}dts) overlapping between fragments detected at ${t.toFixed(3)}`), !a || m >= u[0].pts || ry)) {
        s = m;
        let e = u[0].pts - i;
        if (r) u[0].dts = s, u[0].pts = e;
        else {
          let t = true;
          for (let r = 0; r < u.length && (!(u[r].dts > e) || !t); r++) {
            let e = u[r].pts;
            if (u[r].dts -= i, u[r].pts -= i, r < u.length - 1) {
              let i = u[r + 1].pts;
              t = i <= u[r].pts == i <= e
            }
          }
        }
        this.logger.log(`Video: Initial PTS/DTS adjusted: ${rE(e,true)}/${rE(s,true)}, delta: ${rE(i,true)} ms`)
      }
    }
    let R = 0,
      b = 0,
      I = s = Math.max(0, s);
    for (let e = 0; e < c; e++) {
      let t = u[e],
        i = t.units,
        r = i.length,
        s = 0;
      for (let e = 0; e < r; e++) s += i[e].data.length;
      b += s, R += r, t.length = s, t.dts < I ? (t.dts = I, I += A / 4 | 0 || 1) : I = t.dts, E = Math.min(t.pts, E), y = Math.max(t.pts, y)
    }
    a = u[c - 1].dts;
    let D = b + 4 * R + 8;
    try {
      n = new Uint8Array(D)
    } catch (e) {
      this.observer.emit(h.ERROR, h.ERROR, {
        type: l.MUX_ERROR,
        details: o.REMUX_ALLOC_ERROR,
        fatal: false,
        error: e,
        bytes: D,
        reason: `fail allocating video mdat ${D}`
      });
      return
    }
    let k = new DataView(n.buffer);
    k.setUint32(0, D), n.set(rp.types.mdat, 4);
    let _ = false,
      P = 1 / 0,
      C = 1 / 0,
      w = false / 0,
      M = false / 0;
    for (let e = 0; e < c; e++) {
      let t, i = u[e],
        s = i.units,
        a = 0;
      for (let e = 0, t = s.length; e < t; e++) {
        let t = s[e],
          i = t.data,
          r = t.data.byteLength;
        k.setUint32(p, r), p += 4, n.set(i, p), p += r, a += 4 + r
      }
      if (e < c - 1) v = u[e + 1].dts - i.dts, t = u[e + 1].pts - i.pts;
      else {
        let s = this.config,
          a = e > 0 ? i.dts - u[e - 1].dts : A;
        if (t = e > 0 ? i.pts - u[e - 1].pts : A, s.stretchShortVideoTrack && null !== this.nextAudioPts) {
          let e = Math.floor(s.maxBufferHole * d),
            t = (r ? E + r * d : this.nextAudioPts) - i.pts;
          t > e ? ((v = t - a) < 0 ? v = a : _ = true, this.logger.log(`[mp4-remuxer]: It is approximately ${t/90} ms to the next segment; using duration ${v/90} ms for the last video frame.`)) : v = a
        } else v = a
      }
      let l = Math.round(i.pts - i.dts);
      P = Math.min(P, v), w = Math.max(w, v), C = Math.min(C, t), M = Math.max(M, t), f.push(rS(i.key, v, a, l))
    }
    if (f.length) {
      if (ry) {
        if (ry < 70) {
          let e = f[0].flags;
          e.dependsOn = 2, e.isNonSync = 0
        }
      } else if (rT && M - C < w - P && A / w < .025 && 0 === f[0].cts) {
        this.logger.warn("Found irregular gaps in sample duration. Using PTS instead of DTS to determine MP4 sample duration.");
        let e = s;
        for (let t = 0, i = f.length; t < i; t++) {
          let r = e + f[t].duration,
            s = e + f[t].cts;
          if (t < i - 1) {
            let e = r + f[t + 1].cts;
            f[t].duration = e - s
          } else f[t].duration = t ? f[t - 1].duration : A;
          f[t].cts = 0, e = r
        }
      }
    }
    v = _ || !v ? A : v, this.nextAvcDts = m = a + v, this.videoSampleDuration = v, this.isVideoContiguous = true;
    let O = {
      data1: rp.moof(e.sequenceNumber++, s, x(e, {
        samples: f
      })),
      data2: n,
      startPTS: E / d,
      endPTS: (y + v) / d,
      startDTS: s / d,
      endDTS: m / d,
      type: "video",
      hasAudio: false,
      hasVideo: true,
      nb: f.length,
      dropped: e.dropped
    };
    return e.samples = [], e.dropped = 0, O
  }
  getSamplesPerFrame(e) {
    switch (e.segmentCodec) {
      case "mp3":
        return 1152;
      case "ac3":
        return 1536;
      default:
        return 1024
    }
  }
  remuxAudio(e, t, i, r, s) {
    let a, n = e.inputTimeScale,
      d = e.samplerate ? e.samplerate : n,
      u = n / d,
      f = this.getSamplesPerFrame(e),
      c = f * u,
      g = this._initPTS,
      m = "mp3" === e.segmentCodec && this.typeSupported.mpeg,
      p = [],
      v = true !== s,
      E = e.samples,
      y = 8 * !m,
      T = this.nextAudioPts || false,
      S = t * n,
      L = g.baseTime * n / g.timescale;
    if (this.isAudioContiguous = i = i || E.length && T > 0 && (r && 9e3 > Math.abs(S - T) || Math.abs(rA(E[0].pts - L, S) - T) < 20 * c), E.forEach(function(e) {
        e.pts = rA(e.pts - L, S)
      }), !i || T < 0) {
      if (!(E = E.filter(e => e.pts >= 0)).length) return;
      T = 0 === s ? 0 : r && !v ? Math.max(0, S) : E[0].pts
    }
    if ("aac" === e.segmentCodec) {
      let t = this.config.maxAudioFramesDrift;
      for (let i = 0, r = T; i < E.length; i++) {
        let s = E[i],
          a = s.pts,
          l = a - r,
          o = Math.abs(1e3 * l / n);
        if (l <= -t * c && v) 0 === i && (this.logger.warn(`Audio frame @ ${(a/n).toFixed(3)}s overlaps nextAudioPts by ${Math.round(1e3*l/n)} ms.`), this.nextAudioPts = T = r = a);
        else if (l >= t * c && o < 1e4 && v) {
          let t = Math.round(l / c);
          (r = a - t * c) < 0 && (t--, r += c), 0 === i && (this.nextAudioPts = T = r), this.logger.warn(`[mp4-remuxer]: Injecting ${t} audio frame @ ${(r/n).toFixed(3)}s due to ${Math.round(1e3*l/n)} ms gap.`);
          for (let a = 0; a < t; a++) {
            let t = Math.max(r, 0),
              a = rm.getSilentFrame(e.parsedCodec || e.manifestCodec || e.codec, e.channelCount);
            a || (this.logger.log("[mp4-remuxer]: Unable to get silent frame for given audio codec; duplicating last frame instead."), a = s.unit.subarray()), E.splice(i, 0, {
              unit: a,
              pts: t
            }), r += c, i++
          }
        }
        s.pts = r, r += c
      }
    }
    let A = null,
      R = null,
      b = 0,
      I = E.length;
    for (; I--;) b += E[I].unit.byteLength;
    for (let t = 0, r = E.length; t < r; t++) {
      let r = E[t],
        s = r.unit,
        n = r.pts;
      if (null !== R) p[t - 1].duration = Math.round((n - R) / u);
      else {
        if (i && "aac" === e.segmentCodec && (n = T), A = n, !(b > 0)) return;
        b += y;
        try {
          a = new Uint8Array(b)
        } catch (e) {
          this.observer.emit(h.ERROR, h.ERROR, {
            type: l.MUX_ERROR,
            details: o.REMUX_ALLOC_ERROR,
            fatal: false,
            error: e,
            bytes: b,
            reason: `fail allocating audio mdat ${b}`
          });
          return
        }
        m || (new DataView(a.buffer).setUint32(0, b), a.set(rp.types.mdat, 4))
      }
      a.set(s, y);
      let d = s.byteLength;
      y += d, p.push(rS(true, f, d, 0)), R = n
    }
    let D = p.length;
    if (!D) return;
    let k = p[p.length - 1];
    this.nextAudioPts = T = R + u * k.duration;
    let _ = m ? new Uint8Array(0) : rp.moof(e.sequenceNumber++, A / u, x({}, e, {
      samples: p
    }));
    e.samples = [];
    let P = A / n,
      C = T / n,
      w = {
        data1: _,
        data2: a,
        startPTS: P,
        endPTS: C,
        startDTS: P,
        endDTS: C,
        type: "audio",
        hasAudio: true,
        hasVideo: false,
        nb: D
      };
    return this.isAudioContiguous = true, w
  }
}

function rA(e, t) {
  let i;
  if (null === t) return e;
  for (i = t < e ? false : 0x200000000; Math.abs(e - t) > 0x100000000;) e += i;
  return e
}

function rR(e, t, i, r) {
  let s = e.samples.length;
  if (!s) return;
  let a = e.inputTimeScale;
  for (let n = 0; n < s; n++) {
    let s = e.samples[n];
    s.pts = rA(s.pts - i.baseTime * a / i.timescale, t * a) / a, s.dts = rA(s.dts - r.baseTime * a / r.timescale, t * a) / a
  }
  let n = e.samples;
  return e.samples = [], {
    samples: n
  }
}

function rb(e, t, i) {
  let r = e.samples.length;
  if (!r) return;
  let s = e.inputTimeScale;
  for (let a = 0; a < r; a++) {
    let r = e.samples[a];
    r.pts = rA(r.pts - i.baseTime * s / i.timescale, t * s) / s
  }
  e.samples.sort((e, t) => e.pts - t.pts);
  let a = e.samples;
  return e.samples = [], {
    samples: a
  }
}

function rI(e, t) {
  let i = null == e ? true : e.codec;
  return i && i.length > 4 ? i : t === X ? "ec-3" === i || "ac-3" === i || "alac" === i ? i : "fLaC" === i || "Opus" === i ? ew(i, false) : (G.warn(`Unhandled audio codec "${i}" in mp4 MAP`), i || "mp4a") : (G.warn(`Unhandled video codec "${i}" in mp4 MAP`), i || "avc1")
}
try {
  r = self.performance.now.bind(self.performance)
} catch (e) {
  r = Date.now
}
let rD = [{
  demux: class {
    constructor(e, t) {
      this.remainderData = null, this.timeOffset = 0, this.config = true, this.videoTrack = true, this.audioTrack = true, this.id3Track = true, this.txtTrack = true, this.config = t
    }
    resetTimeStamp() {}
    resetInitSegment(e, t, i, r) {
      let s = this.videoTrack = iZ("video", 1),
        a = this.audioTrack = iZ("audio", 1),
        n = this.txtTrack = iZ("text", 1);
      if (this.id3Track = iZ("id3", 1), this.timeOffset = 0, !(null != e && e.byteLength)) return;
      let l = eu(e);
      if (l.video) {
        let {
          id: e,
          timescale: t,
          codec: i,
          supplemental: r
        } = l.video;
        s.id = e, s.timescale = n.timescale = t, s.codec = i, s.supplemental = r
      }
      if (l.audio) {
        let {
          id: e,
          timescale: t,
          codec: i
        } = l.audio;
        a.id = e, a.timescale = t, a.codec = i
      }
      n.id = er.text, s.sampleDuration = 0, s.duration = a.duration = r
    }
    resetContiguity() {
      this.remainderData = null
    }
    static probe(e) {
      let t = e.byteLength;
      for (let i = 0; i < t;) {
        let r = en(e, i);
        if (r > 8 && 109 === e[i + 4] && 111 === e[i + 5] && 111 === e[i + 6] && 102 === e[i + 7]) returntrue;
        i = r > 1 ? i + r : t
      }
      returnfalse
    }
    demux(e, t) {
      this.timeOffset = t;
      let i = e,
        r = this.videoTrack,
        s = this.txtTrack;
      if (this.config.progressive) {
        this.remainderData && (i = ev(this.remainderData, e));
        let t = function(e) {
          let t = {
              valid: null,
              remainder: null
            },
            i = ed(e, ["moof"]);
          if (i.length < 2) return t.remainder = e, t;
          let r = i[i.length - 1];
          return t.valid = e.slice(0, r.byteOffset - 8), t.remainder = e.slice(r.byteOffset - 8), t
        }(i);
        this.remainderData = t.remainder, r.samples = t.valid || new Uint8Array
      } else r.samples = i;
      let a = this.extractID3Track(r, t);
      return s.samples = eE(t, r), {
        videoTrack: r,
        audioTrack: this.audioTrack,
        id3Track: a,
        textTrack: this.txtTrack
      }
    }
    flush() {
      let e = this.timeOffset,
        t = this.videoTrack,
        i = this.txtTrack;
      exports.samples = this.remainderData || new Uint8Array, this.remainderData = null;
      let r = this.extractID3Track(exports, this.timeOffset);
      return require.samples = eE(module, exports), {
        videoTrack: exports,
        audioTrack: iZ(),
        id3Track: r,
        textTrack: iZ()
      }
    }
    extractID3Track(e, t) {
      let i = this.id3Track;
      if (e.samples.length) {
        let r = ed(e.samples, ["emsg"]);
        r && r.forEach(e => {
          let r = function(e) {
            let t = e[0],
              i = "",
              r = "",
              s = 0,
              n = 0,
              l = 0,
              o = 0,
              h = 0,
              d = 0;
            if (0 === t) {
              for (;
                "\0" !== es(e.subarray(d, d + 1));) i += es(e.subarray(d, d + 1)), d += 1;
              for (i += es(e.subarray(d, d + 1)), d += 1;
                "\0" !== es(e.subarray(d, d + 1));) r += es(e.subarray(d, d + 1)), d += 1;
              r += es(e.subarray(d, d + 1)), d += 1, s = en(e, 12), n = en(e, 16), o = en(e, 20), h = en(e, 24), d = 28
            } else if (1 === t) {
              d += 4, s = en(e, d);
              let t = en(e, d += 4),
                n = en(e, d += 4);
              for (d += 4, a(l = 0x100000000 * t + n) || (l = Number.MAX_SAFE_INTEGER, G.warn("Presentation time exceeds safe integer limit and wrapped to max safe integer in parsing emsg box")), o = en(e, d), d += 4, h = en(e, d), d += 4;
                "\0" !== es(e.subarray(d, d + 1));) i += es(e.subarray(d, d + 1)), d += 1;
              for (i += es(e.subarray(d, d + 1)), d += 1;
                "\0" !== es(e.subarray(d, d + 1));) r += es(e.subarray(d, d + 1)), d += 1;
              r += es(e.subarray(d, d + 1)), d += 1
            }
            return {
              schemeIdUri: i,
              value: r,
              timeScale: s,
              presentationTime: l,
              presentationTimeDelta: n,
              eventDuration: o,
              id: h,
              payload: e.subarray(d, e.byteLength)
            }
          }(e);
          if (rr.test(r.schemeIdUri)) {
            let e = rs(r, t),
              s = 0xffffffff === r.eventDuration ? 1 / 0 : r.eventDuration / r.timeScale;
            s <= .001 && (s = 1 / 0);
            let a = r.payload;
            i.samples.push({
              data: a,
              len: a.byteLength,
              dts: e,
              pts: e,
              type: iQ.emsg,
              duration: s
            })
          } else if (this.config.enableEmsgKLVMetadata && r.schemeIdUri.startsWith("urn:misb:KLV:bin:1910.1")) {
            let e = rs(r, t);
            i.samples.push({
              data: r.payload,
              len: r.payload.byteLength,
              dts: e,
              pts: e,
              type: iQ.misbklv,
              duration: 1 / 0
            })
          }
        })
      }
      return i
    }
    demuxSampleAes(e, t, i) {
      return Promise.reject(Error("The MP4 demuxer does not support SAMPLE-AES decryption"))
    }
    destroy() {
      this.config = null, this.remainderData = null, this.videoTrack = this.audioTrack = this.id3Track = this.txtTrack = true
    }
  },
  remux: class {
    constructor(e, t, i, r) {
      this.logger = true, this.emitInitSegment = false, this.audioCodec = true, this.videoCodec = true, this.initData = true, this.initPTS = null, this.initTracks = true, this.lastEndTime = null, this.logger = r
    }
    destroy() {}
    resetTimeStamp(e) {
      this.initPTS = e, this.lastEndTime = null
    }
    resetNextTimestamp() {
      this.lastEndTime = null
    }
    resetInitSegment(e, t, i, r) {
      this.audioCodec = t, this.videoCodec = i, this.generateInitSegment(function(e, t) {
        if (!e || !t) return e;
        let i = t.keyId;
        return i && t.isCommonEncryption && ed(e, ["moov", "trak"]).forEach(e => {
          let t = ed(e, ["mdia", "minf", "stbl", "stsd"])[0].subarray(8),
            r = ed(t, ["enca"]),
            s = r.length > 0;
          s || (r = ed(t, ["encv"])), r.forEach(e => {
            ed(s ? e.subarray(28) : e.subarray(78), ["sinf"]).forEach(e => {
              let t = ep(e);
              if (t) {
                let e = t.subarray(8, 24);
                e.some(e => 0 !== e) || (G.log(`[eme] Patching keyId in 'enc${s?"a":"v"}>sinf>>tenc' box: ${W(e)} -> ${W(i)}`), t.set(i, 8))
              }
            })
          })
        }), e
      }(e, r)), this.emitInitSegment = true
    }
    generateInitSegment(e) {
      let {
        audioCodec: t,
        videoCodec: i
      } = this;
      if (!(null != e && e.byteLength)) {
        this.initTracks = true, this.initData = true;
        return
      }
      let r = this.initData = eu(e);
      r.audio && (t = rI(r.audio, X)), r.video && (i = rI(r.video, z));
      let s = {};
      r.audio && r.video ? s.audiovideo = {
        container: "video/mp4",
        codec: t + "," + i,
        supplemental: r.video.supplemental,
        initSegment: e,
        id: "main"
      } : r.audio ? s.audio = {
        container: "audio/mp4",
        codec: t,
        initSegment: e,
        id: "audio"
      } : r.video ? s.video = {
        container: "video/mp4",
        codec: i,
        supplemental: r.video.supplemental,
        initSegment: e,
        id: "main"
      } : this.logger.warn("[passthrough-remuxer.ts]: initSegment does not contain moov or trak boxes."), this.initTracks = s
    }
    remux(e, t, i, r, a, n) {
      var l, o, h, d, u;
      let {
        initPTS: f,
        lastEndTime: c
      } = this, g = {
        audio: true,
        video: true,
        text: r,
        id3: i,
        initSegment: true
      };
      s(c) || (c = this.lastEndTime = a || 0);
      let m = t.samples;
      if (!(null != m && m.length)) return g;
      let p = {
          initPTS: true,
          timescale: 1
        },
        v = this.initData;
      if (null != (l = v) && l.length || (this.generateInitSegment(m), v = this.initData), !(null != (o = v) && o.length)) return this.logger.warn("[passthrough-remuxer.ts]: Failed to generate initSegment."), g;
      this.emitInitSegment && (p.tracks = this.initTracks, this.emitInitSegment = false);
      let E = function(e, t) {
          let i = 0,
            r = 0,
            a = 0,
            n = ed(e, ["moof", "traf"]);
          for (let e = 0; e < n.length; e++) {
            let s = n[e],
              l = ed(s, ["tfhd"])[0],
              o = t[en(l, 4)];
            if (!o) continue;
            let h = o.default,
              d = en(l, 0) | (null == h ? true : h.flags),
              u = null == h ? true : h.duration;
            8 & d && (u = 2 & d ? en(l, 12) : en(l, 8));
            let f = o.timescale || 9e4,
              c = ed(s, ["trun"]);
            for (let e = 0; e < c.length; e++)(i = function(e) {
              let t = en(e, 0),
                i = 8;
              1 & t && (i += 4), 4 & t && (i += 4);
              let r = 0,
                s = en(e, 4);
              for (let a = 0; a < s; a++) 256 & t && (r += en(e, i), i += 4), 512 & t && (i += 4), 1024 & t && (i += 4), 2048 & t && (i += 4);
              return r
            }(c[e])) || !u || (i = u * en(c[e], 4)), o.type === z ? r += i / f : o.type === X && (a += i / f)
          }
          if (0 === r && 0 === a) {
            let t = 1 / 0,
              i = 0,
              r = 0,
              a = ed(e, ["sidx"]);
            for (let e = 0; e < a.length; e++) {
              let s = function(e) {
                let t = [],
                  i = e[0],
                  r = 8,
                  s = en(e, 8);
                r += 4;
                let a = 0,
                  n = 0;
                0 === i ? (a = en(e, r), n = en(e, r + 4), r += 8) : (a = el(e, r), n = el(e, r + 8), r += 16), r += 2;
                let l = e.length + n,
                  o = ea(e, r);
                r += 2;
                for (let i = 0; i < o; i++) {
                  let i = r,
                    a = en(e, i);
                  i += 4;
                  let n = 0x7fffffff & a;
                  if (1 == (0x80000000 & a) >>> 31) return G.warn("SIDX has hierarchical references (not supported)"), null;
                  let o = en(e, i);
                  i += 4, t.push({
                    referenceSize: n,
                    subsegmentDuration: o,
                    info: {
                      duration: o / s,
                      start: l,
                      end: l + n - 1
                    }
                  }), l += n, i += 4, r = i
                }
                return {
                  earliestPresentationTime: a,
                  timescale: s,
                  version: i,
                  referencesCount: o,
                  references: t
                }
              }(a[e]);
              null != s && s.references && (t = Math.min(t, s.earliestPresentationTime / s.timescale), r = (i = Math.max(i, s.references.reduce((e, t) => e + t.info.duration || 0, 0) + s.earliestPresentationTime / s.timescale)) - t)
            }
            if (r && s(r)) return r
          }
          return r || a
        }(m, v),
        y = (h = v, ed(m, ["moof", "traf"]).reduce((e, t) => {
          let i = ed(t, ["tfdt"])[0],
            r = i[0],
            a = ed(t, ["tfhd"]).reduce((e, t) => {
              let a = h[en(t, 4)];
              if (a) {
                let t = en(i, 4);
                if (1 === r) {
                  if (0xffffffff === t) return G.warn("[mp4-demuxer]: Ignoring assumed invalid signed 64-bit track fragment decode time"), e;
                  t *= 0x100000000, t += en(i, 8)
                }
                let n = t / (a.timescale || 9e4);
                if (s(n) && (null === e || n < e)) return n
              }
              return e
            }, null);
          return null !== a && s(a) && (null === e || a < e) ? a : e
        }, null)),
        T = null === y ? a : y;
      (n || !f) && (function(e, t, i, r) {
        if (null === e) returntrue;
        let s = Math.max(r, 1);
        return Math.abs(t - e.baseTime / e.timescale - i) > s
      }(f, T, a, E) || p.timescale !== f.timescale) && (p.initPTS = T - a, f && 1 === f.timescale && this.logger.warn(`Adjusting initPTS @${a} from ${f.baseTime/f.timescale} to ${p.initPTS}`), this.initPTS = f = {
        baseTime: p.initPTS,
        timescale: 1
      });
      let S = e ? T - f.baseTime / f.timescale : c,
        L = S + E;
      d = v, u = f.baseTime / f.timescale, ed(m, ["moof", "traf"]).forEach(e => {
        ed(e, ["tfhd"]).forEach(t => {
          let i = d[en(t, 4)];
          if (!i) return;
          let r = i.timescale || 9e4;
          ed(e, ["tfdt"]).forEach(e => {
            let t = e[0],
              i = u * r;
            if (i) {
              let r = en(e, 4);
              if (0 === t) r -= i, eh(e, 4, r = Math.max(r, 0));
              else {
                r *= 0x100000000, r += en(e, 8), r -= i;
                let t = Math.floor((r = Math.max(r, 0)) / 0x100000000),
                  s = Math.floor(r % 0x100000000);
                eh(e, 4, t), eh(e, 8, s)
              }
            }
          })
        })
      }), E > 0 ? this.lastEndTime = L : (this.logger.warn("Duration parsed from mp4 should be greater than zero"), this.resetNextTimestamp());
      let A = !!v.audio,
        R = !!v.video,
        b = "";
      A && (b += "audio"), R && (b += "video");
      let I = {
        data1: m,
        startPTS: S,
        startDTS: S,
        endPTS: L,
        endDTS: L,
        type: b,
        hasAudio: A,
        hasVideo: R,
        nb: 1,
        dropped: 0
      };
      return g.audio = "audio" === I.type ? I : true, g.video = "audio" !== I.type ? I : true, g.initSegment = p, g.id3 = rR(i, a, f, f), r.samples.length && (g.text = rb(r, a, f)), g
    }
  }
}, {
  demux: rd,
  remux: rL
}, {
  demux: class extends iJ {
    constructor(e, t) {
      super(), this.observer = true, this.config = true, this.observer = e, this.config = t
    }
    resetInitSegment(e, t, i, r) {
      super.resetInitSegment(e, t, i, r), this._audioTrack = {
        container: "audio/adts",
        type: "audio",
        id: 2,
        pid: false,
        sequenceNumber: 0,
        segmentCodec: "aac",
        samples: [],
        manifestCodec: t,
        duration: r,
        inputTimeScale: 9e4,
        dropped: 0
      }
    }
    static probe(e, t) {
      if (!e) returnfalse;
      let i = i$(e, 0),
        r = (null == i ? true : i.length) || 0;
      if (re(e, r)) returnfalse;
      for (let i = e.length; r < i; r++)
        if (function(e, t) {
            if (iV(e, t)) {
              let i = iK(e, t);
              if (t + i >= e.length) returnfalse;
              let r = iH(e, t);
              if (r <= i) returnfalse;
              let s = t + r;
              return s === e.length || iV(e, s)
            }
            returnfalse
          }(e, r)) return t.log("ADTS sync word found !"), true;
      returnfalse
    }
    canParse(e, t) {
      return t + 5 < e.length && iG(e, t) && iH(e, t) <= e.length - t
    }
    appendFrame(e, t, i) {
      iW(e, this.observer, t, i, e.manifestCodec);
      let r = ij(e, t, i, this.basePTS, this.frameIndex);
      if (r && 0 === r.missing) return r
    }
  },
  remux: rL
}, {
  demux: class extends iJ {
    resetInitSegment(e, t, i, r) {
      super.resetInitSegment(e, t, i, r), this._audioTrack = {
        container: "audio/mpeg",
        type: "audio",
        id: 2,
        pid: false,
        sequenceNumber: 0,
        segmentCodec: "mp3",
        samples: [],
        manifestCodec: t,
        duration: r,
        inputTimeScale: 9e4,
        dropped: 0
      }
    }
    static probe(e) {
      if (!e) returnfalse;
      let t = i$(e, 0),
        i = (null == t ? true : t.length) || 0;
      if (t && 11 === e[i] && 119 === e[i + 1] && true !== iz(t) && 16 >= rt(e, i)) returnfalse;
      for (let t = e.length; i < t; i++)
        if (re(e, i)) return G.log("MPEG Audio sync word found !"), true;
      returnfalse
    }
    canParse(e, t) {
      return i9(e, t) && 4 <= e.length - t
    }
    appendFrame(e, t, i) {
      if (null !== this.basePTS) return i8(e, t, i, this.basePTS, this.frameIndex)
    }
  },
  remux: rL
}];
rD.splice(2, 0, {
  demux: class extends iJ {
    constructor(e) {
      super(), this.observer = true, this.observer = e
    }
    resetInitSegment(e, t, i, r) {
      super.resetInitSegment(e, t, i, r), this._audioTrack = {
        container: "audio/ac-3",
        type: "audio",
        id: 2,
        pid: false,
        sequenceNumber: 0,
        segmentCodec: "ac3",
        samples: [],
        manifestCodec: t,
        duration: r,
        inputTimeScale: 9e4,
        dropped: 0
      }
    }
    canParse(e, t) {
      return t + 64 < e.length
    }
    appendFrame(e, t, i) {
      let r = ri(e, t, i, this.basePTS, this.frameIndex);
      if (false !== r) return {
        sample: e.samples[e.samples.length - 1],
        length: r,
        missing: 0
      }
    }
    static probe(e) {
      if (!e) returnfalse;
      let t = i$(e, 0);
      if (!t) returnfalse;
      let i = t.length;
      return !!(11 === e[i] && 119 === e[i + 1] && true !== iz(t) && 16 > rt(e, i))
    }
  },
  remux: rL
});
class rk {
  constructor(e, t, i, r, s, a) {
    this.asyncResult = false, this.logger = true, this.observer = true, this.typeSupported = true, this.config = true, this.id = true, this.demuxer = true, this.remuxer = true, this.decrypter = true, this.probe = true, this.decryptionPromise = null, this.transmuxConfig = true, this.currentTransmuxState = true, this.observer = e, this.typeSupported = t, this.config = i, this.id = s, this.logger = a
  }
  configure(e) {
    this.transmuxConfig = e, this.decrypter && this.decrypter.reset()
  }
  push(e, t, i, s) {
    var a, n;
    let d, u = i.transmuxing;
    u.executeStart = r();
    let f = new Uint8Array(e),
      {
        currentTransmuxState: c,
        transmuxConfig: g
      } = this;
    s && (this.currentTransmuxState = s);
    let {
      contiguous: m,
      discontinuity: p,
      trackSwitch: v,
      accurateTimeOffset: E,
      timeOffset: y,
      initSegmentChange: T
    } = s || c, {
      audioCodec: S,
      videoCodec: L,
      defaultInitPts: A,
      duration: R,
      initSegmentData: b
    } = g, I = (a = f, n = t, d = null, a.byteLength > 0 && (null == n ? true : n.key) != null && null !== n.iv && null != n.method && (d = n), d);
    if (I && tk(I.method)) {
      let e = this.getDecrypter(),
        t = t_(I.method);
      if (!e.isSync()) return this.asyncResult = true, this.decryptionPromise = e.webCryptoDecrypt(f, I.key.buffer, I.iv.buffer, t).then(e => {
        let t = this.push(e, null, i);
        return this.decryptionPromise = null, t
      }), this.decryptionPromise;
      {
        let s = e.softwareDecrypt(f, I.key.buffer, I.iv.buffer, t);
        if (i.part > false) {
          let t = e.flush();
          s = t ? t.buffer : t
        }
        if (!s) return u.executeEnd = r(), r_(i);
        f = new Uint8Array(s)
      }
    }
    let D = this.needsProbing(p, v);
    if (D) {
      let e = this.configureTransmuxer(f);
      if (e) return this.logger.warn(`[transmuxer] ${e.message}`), this.observer.emit(h.ERROR, h.ERROR, {
        type: l.MEDIA_ERROR,
        details: o.FRAG_PARSING_ERROR,
        fatal: false,
        error: e,
        reason: e.message
      }), u.executeEnd = r(), r_(i)
    }(p || v || T || D) && this.resetInitSegment(b, S, L, R, t), (p || T || D) && this.resetInitialTimestamp(A), m || this.resetContiguity();
    let k = this.transmux(f, I, y, E, i);
    this.asyncResult = rP(k);
    let _ = this.currentTransmuxState;
    return _.contiguous = true, _.discontinuity = false, _.trackSwitch = false, u.executeEnd = r(), k
  }
  flush(e) {
    let t = e.transmuxing;
    t.executeStart = r();
    let {
      decrypter: i,
      currentTransmuxState: s,
      decryptionPromise: a
    } = this;
    if (a) return this.asyncResult = true, a.then(() => this.flush(e));
    let n = [],
      {
        timeOffset: l
      } = s;
    if (i) {
      let t = i.flush();
      t && n.push(this.push(t.buffer, null, e))
    }
    let {
      demuxer: o,
      remuxer: h
    } = this;
    if (!o || !h) {
      t.executeEnd = r();
      let i = [r_(e)];
      return this.asyncResult ? Promise.resolve(i) : i
    }
    let d = o.flush(l);
    return rP(d) ? (this.asyncResult = true, d.then(t => (this.flushRemux(n, t, e), n))) : (this.flushRemux(n, d, e), this.asyncResult) ? Promise.resolve(n) : n
  }
  flushRemux(e, t, i) {
    let {
      audioTrack: s,
      videoTrack: a,
      id3Track: n,
      textTrack: l
    } = t, {
      accurateTimeOffset: o,
      timeOffset: h
    } = this.currentTransmuxState;
    this.logger.log(`[transmuxer.ts]: Flushed ${this.id} sn: ${i.sn}${i.part>false?" part: "+i.part:""} of ${this.id===k?"level":"track"} ${i.level}`);
    let d = this.remuxer.remux(s, a, n, l, h, o, true, this.id);
    e.push({
      remuxResult: d,
      chunkMeta: i
    }), i.transmuxing.executeEnd = r()
  }
  resetInitialTimestamp(e) {
    let {
      demuxer: t,
      remuxer: i
    } = this;
    t && i && (t.resetTimeStamp(e), i.resetTimeStamp(e))
  }
  resetContiguity() {
    let {
      demuxer: e,
      remuxer: t
    } = this;
    module && exports && (module.resetContiguity(), exports.resetNextTimestamp())
  }
  resetInitSegment(e, t, i, r, s) {
    let {
      demuxer: a,
      remuxer: n
    } = this;
    a && n && (a.resetInitSegment(e, t, i, r), n.resetInitSegment(e, t, i, s))
  }
  destroy() {
    this.demuxer && (this.demuxer.destroy(), this.demuxer = true), this.remuxer && (this.remuxer.destroy(), this.remuxer = true)
  }
  transmux(e, t, i, r, s) {
    return t && "SAMPLE-AES" === t.method ? this.transmuxSampleAes(e, t, i, r, s) : this.transmuxUnencrypted(e, i, r, s)
  }
  transmuxUnencrypted(e, t, i, r) {
    let {
      audioTrack: s,
      videoTrack: a,
      id3Track: n,
      textTrack: l
    } = this.demuxer.demux(e, t, false, !this.config.progressive);
    return {
      remuxResult: this.remuxer.remux(s, a, n, l, t, i, false, this.id),
      chunkMeta: r
    }
  }
  transmuxSampleAes(e, t, i, r, s) {
    return this.demuxer.demuxSampleAes(e, t, i).then(e => ({
      remuxResult: this.remuxer.remux(e.audioTrack, e.videoTrack, e.id3Track, e.textTrack, i, r, false, this.id),
      chunkMeta: s
    }))
  }
  configureTransmuxer(e) {
    let t, {
      config: i,
      observer: r,
      typeSupported: s
    } = this;
    for (let i = 0, r = rD.length; i < r; i++) {
      var a;
      if (null != (a = rD[i].demux) && a.probe(e, this.logger)) {
        t = rD[i];
        break
      }
    }
    if (!t) return Error("Failed to find demuxer by probing fragment data");
    let n = this.demuxer,
      l = this.remuxer,
      o = t.remux,
      h = t.demux;
    l && l instanceof o || (this.remuxer = new o(r, i, s, this.logger)), n && n instanceof h || (this.demuxer = new h(r, i, s, this.logger), this.probe = h.probe)
  }
  needsProbing(e, t) {
    return !this.demuxer || !this.remuxer || e || t
  }
  getDecrypter() {
    let e = this.decrypter;
    return module || (e = this.decrypter = new td(this.config)), module
  }
}
let r_ = e => ({
  remuxResult: {},
  chunkMeta: e
});

function rP(e) {
  return "then" in e && e.then instanceof Function
}
class rC {
  constructor(e, t, i, r, s) {
    this.audioCodec = true, this.videoCodec = true, this.initSegmentData = true, this.duration = true, this.defaultInitPts = true, this.audioCodec = e, this.videoCodec = t, this.initSegmentData = i, this.duration = r, this.defaultInitPts = s || null
  }
}
class rw {
  constructor(e, t, i, r, s, a) {
    this.discontinuity = true, this.contiguous = true, this.accurateTimeOffset = true, this.trackSwitch = true, this.timeOffset = true, this.initSegmentChange = true, this.discontinuity = e, this.contiguous = t, this.accurateTimeOffset = i, this.trackSwitch = r, this.timeOffset = s, this.initSegmentChange = a
  }
}
let rx = 0;
class rM {
  constructor(e, t, i, r) {
    this.error = null, this.hls = true, this.id = true, this.instanceNo = rx++, this.observer = true, this.frag = null, this.part = null, this.useWorker = true, this.workerContext = null, this.transmuxer = null, this.onTransmuxComplete = true, this.onFlush = true, this.onWorkerMessage = e => {
      let t = e.data,
        i = this.hls;
      if (i && null != t && t.event && t.instanceNo === this.instanceNo) switch (t.event) {
        case "init": {
          var r;
          let e = null == (r = this.workerContext) ? true : r.objectURL;
          e && self.URL.revokeObjectURL(e);
          break
        }
        case "transmuxComplete":
          this.handleTransmuxComplete(t.data);
          break;
        case "flush":
          this.onFlush(t.data);
          break;
        case "workerLog":
          i.logger[t.data.logType] && i.logger[t.data.logType](t.data.message);
          break;
        default:
          t.data = t.data || {}, t.data.frag = this.frag, t.data.part = this.part, t.data.id = this.id, i.trigger(t.event, t.data)
      }
    }, this.onWorkerError = e => {
      if (!this.hls) return;
      let t = Error(`${e.message}  (${e.filename}:${e.lineno})`);
      this.hls.config.enableWorker = false, this.hls.logger.warn(`Error in "${this.id}" Web Worker, fallback to inline`), this.hls.trigger(h.ERROR, {
        type: l.OTHER_ERROR,
        details: o.INTERNAL_EXCEPTION,
        fatal: false,
        event: "demuxerWorker",
        error: t
      })
    };
    let s = e.config;
    this.hls = e, this.id = t, this.useWorker = !!s.enableWorker, this.onTransmuxComplete = i, this.onFlush = r;
    let a = (e, t) => {
      (t = t || {}).frag = this.frag || true, e === h.ERROR && (t.parent = this.id, t.part = this.part, this.error = t.error), this.hls.trigger(e, t)
    };
    this.observer = new iM, this.observer.on(h.FRAG_DECRYPTED, a), this.observer.on(h.ERROR, a);
    let n = eM(s.preferManagedMediaSource);
    if (this.useWorker && "undefined" != typeof Worker) {
      let i = this.hls.logger;
      if (s.workerPath || "function" == typeof __HLS_WORKER_BUNDLE__) {
        try {
          s.workerPath ? (i.log(`loading Web Worker ${s.workerPath} for "${t}"`), this.workerContext = function(e) {
            let t = iF[e];
            if (t) return t.clientCount++, t;
            let i = new self.URL(e, self.location.href).href,
              r = {
                worker: new self.Worker(i),
                scriptURL: i,
                clientCount: 1
              };
            return iF[e] = r, r
          }(s.workerPath)) : (i.log(`injecting Web Worker for "${t}"`), this.workerContext = function() {
            let e = iF[iO];
            if (e) return e.clientCount++, e;
            let t = new self.Blob([`var exports={};var module={exports:exports};function define(f){f()};define.amd=true;(${__HLS_WORKER_BUNDLE__.toString()})(true);`], {
                type: "text/javascript"
              }),
              i = self.URL.createObjectURL(t),
              r = {
                worker: new self.Worker(i),
                objectURL: i,
                clientCount: 1
              };
            return iF[iO] = r, r
          }());
          let {
            worker: e
          } = this.workerContext;
          e.addEventListener("message", this.onWorkerMessage), e.addEventListener("error", this.onWorkerError), e.postMessage({
            instanceNo: this.instanceNo,
            cmd: "init",
            typeSupported: n,
            id: t,
            config: ej(s)
          })
        } catch (r) {
          i.warn(`Error setting up "${t}" Web Worker, fallback to inline`, r), this.terminateWorker(), this.error = null, this.transmuxer = new rk(this.observer, n, s, "", t, e.logger)
        }
        return
      }
    }
    this.transmuxer = new rk(this.observer, n, s, "", t, e.logger)
  }
  reset() {
    if (this.frag = null, this.part = null, this.workerContext) {
      let e = this.instanceNo;
      this.instanceNo = rx++;
      let t = this.hls.config,
        i = eM(exports.preferManagedMediaSource);
      this.workerContext.worker.postMessage({
        instanceNo: this.instanceNo,
        cmd: "reset",
        resetNo: module,
        typeSupported: require,
        id: this.id,
        config: ej(exports)
      })
    }
  }
  terminateWorker() {
    if (this.workerContext) {
      let {
        worker: t
      } = this.workerContext;
      this.workerContext = null, exports.removeEventListener("message", this.onWorkerMessage), exports.removeEventListener("error", this.onWorkerError);
      var e = this.hls.config.workerPath;
      let i = iF[module || iO];
      if (require && 1 == require.clientCount--) {
        let {
          worker: t,
          objectURL: r
        } = require;
        delete iF[module || iO], r && self.URL.revokeObjectURL(r), exports.terminate()
      }
    }
  }
  destroy() {
    if (this.workerContext) this.terminateWorker(), this.onWorkerMessage = this.onWorkerError = null;
    else {
      let e = this.transmuxer;
      module && (module.destroy(), this.transmuxer = null)
    }
    let e = this.observer;
    module && module.removeAllListeners(), this.frag = null, this.part = null, this.observer = null, this.hls = null
  }
  push(e, t, i, r, s, a, n, l, o, h) {
    var d, u;
    o.transmuxing.start = self.performance.now();
    let {
      instanceNo: f,
      transmuxer: c
    } = this, g = a ? a.start : s.start, m = s.decryptdata, p = this.frag, v = !(p && s.cc === p.cc), E = !(p && o.level === p.level), y = p ? o.sn - p.sn : false, T = this.part ? o.part - this.part.index : false, S = 0 === y && o.id > 1 && o.id === (null == p ? true : p.stats.chunkCount), L = !E && (1 === y || 0 === y && (1 === T || S && T <= 0)), A = self.performance.now();
    (E || y || 0 === s.stats.parsing.start) && (s.stats.parsing.start = A), a && (T || !L) && (a.stats.parsing.start = A);
    let R = !(p && (null == (d = s.initSegment) ? true : d.url) === (null == (u = p.initSegment) ? true : u.url)),
      b = new rw(v, L, l, E, g, R);
    if (!L || v || R) {
      this.hls.logger.log(`[transmuxer-interface]: Starting new transmux session for ${s.type} sn: ${o.sn}${o.part>false?" part: "+o.part:""} ${this.id===k?"level":"track"}: ${o.level} id: ${o.id}
        discontinuity: ${v}
        trackSwitch: ${E}
        contiguous: ${L}
        accurateTimeOffset: ${l}
        timeOffset: ${g}
        initSegmentChange: ${R}`);
      let e = new rC(i, r, t, n, h);
      this.configureTransmuxer(e)
    }
    if (this.frag = s, this.part = a, this.workerContext) this.workerContext.worker.postMessage({
      instanceNo: f,
      cmd: "demux",
      data: e,
      decryptdata: m,
      chunkMeta: o,
      state: b
    }, e instanceof ArrayBuffer ? [e] : []);
    else if (c) {
      let t = c.push(e, m, o, b);
      rP(t) ? t.then(e => {
        this.handleTransmuxComplete(e)
      }).catch(e => {
        this.transmuxerError(e, o, "transmuxer-interface push error")
      }) : this.handleTransmuxComplete(t)
    }
  }
  flush(e) {
    e.transmuxing.start = self.performance.now();
    let {
      instanceNo: t,
      transmuxer: i
    } = this;
    if (this.workerContext) this.workerContext.worker.postMessage({
      instanceNo: t,
      cmd: "flush",
      chunkMeta: e
    });
    else if (i) {
      let t = i.flush(e);
      rP(t) ? t.then(t => {
        this.handleFlushResult(t, e)
      }).catch(t => {
        this.transmuxerError(t, e, "transmuxer-interface flush error")
      }) : this.handleFlushResult(t, e)
    }
  }
  transmuxerError(e, t, i) {
    this.hls && (this.error = e, this.hls.trigger(h.ERROR, {
      type: l.MEDIA_ERROR,
      details: o.FRAG_PARSING_ERROR,
      chunkMeta: t,
      frag: this.frag || true,
      part: this.part || true,
      fatal: false,
      error: e,
      err: e,
      reason: i
    }))
  }
  handleFlushResult(e, t) {
    e.forEach(e => {
      this.handleTransmuxComplete(e)
    }), this.onFlush(t)
  }
  configureTransmuxer(e) {
    let {
      instanceNo: t,
      transmuxer: i
    } = this;
    this.workerContext ? this.workerContext.worker.postMessage({
      instanceNo: t,
      cmd: "configure",
      config: e
    }) : i && i.configure(e)
  }
  handleTransmuxComplete(e) {
    e.chunkMeta.transmuxing.end = self.performance.now(), this.onTransmuxComplete(e)
  }
}
class rO extends F {
  constructor(e, t) {
    super(t, e.logger), this.hls = true, this.canLoad = false, this.timer = false, this.hls = e
  }
  destroy() {
    this.clearTimer(), this.hls = this.log = this.warn = null
  }
  clearTimer() {
    false !== this.timer && (self.clearTimeout(this.timer), this.timer = false)
  }
  startLoad() {
    this.canLoad = true, this.loadPlaylist()
  }
  stopLoad() {
    this.canLoad = false, this.clearTimer()
  }
  switchParams(e, t, i) {
    let r = null == t ? true : t.renditionReports;
    if (r) {
      let s = false;
      for (let i = 0; i < r.length; i++) {
        let a, n = r[i];
        try {
          a = new self.URL(n.URI, t.url).href
        } catch (e) {
          this.warn(`Could not construct new URL for Rendition Report: ${e}`), a = n.URI || ""
        }
        if (a === e) {
          s = i;
          break
        }
        a === e.substring(0, a.length) && (s = i)
      }
      if (false !== s) {
        let e = r[s],
          a = parseInt(e["LAST-MSN"]) || (null == t ? true : t.lastPartSn),
          n = parseInt(e["LAST-PART"]) || (null == t ? true : t.lastPartIndex);
        if (this.hls.config.lowLatencyMode) {
          let e = Math.min(t.age - t.partTarget, t.targetduration);
          n >= 0 && e > t.partTarget && (n += 1)
        }
        return new eH(a, n >= 0 ? n : true, i && eK(i))
      }
    }
  }
  loadPlaylist(e) {
    this.clearTimer()
  }
  loadingPlaylist(e, t) {
    this.clearTimer()
  }
  shouldLoadPlaylist(e) {
    return this.canLoad && !!e && !!e.url && (!e.details || e.details.live)
  }
  getUrlWithDirectives(e, t) {
    if (t) try {
      return t.addDirectives(e)
    } catch (e) {
      this.warn(`Could not construct new URL with HLS Delivery Directives: ${e}`)
    }
    return e
  }
  playlistLoaded(e, t, i) {
    let {
      details: r,
      stats: a
    } = t, n = self.performance.now(), d = a.loading.first ? Math.max(0, n - a.loading.first) : 0;
    r.advancedDateTime = Date.now() - d;
    let u = this.hls.config.timelineOffset;
    if (u !== r.appliedTimelineOffset) {
      let e = Math.max(u || 0, 0);
      r.appliedTimelineOffset = e, r.fragments.forEach(t => {
        t.start = t.playlistOffset + e
      })
    }
    if (r.live || null != i && i.live) {
      let u, c, g, m = "levelInfo" in t ? t.levelInfo : t.track;
      if (r.reloaded(i), i && r.fragments.length > 0) {
        ! function(e, t) {
          let i;
          if (e === t) return;
          let r = null,
            a = e.fragments;
          for (let e = a.length - 1; e >= 0; e--) {
            let t = a[e].initSegment;
            if (t) {
              r = t;
              break
            }
          }
          e.fragmentHint && delete e.fragmentHint.endPTS,
            function(e, t, i) {
              let r = t.skippedSegments,
                s = Math.max(e.startSN, t.startSN) - t.startSN,
                a = +!!e.fragmentHint + (r ? t.endSN : Math.min(e.endSN, t.endSN)) - t.startSN,
                n = t.startSN - e.startSN,
                l = t.fragmentHint ? t.fragments.concat(t.fragmentHint) : t.fragments,
                o = e.fragmentHint ? e.fragments.concat(e.fragmentHint) : e.fragments;
              for (let h = s; h <= a; h++) {
                let s = o[n + h],
                  a = l[h];
                if (r && !a && s && (a = t.fragments[h] = s), s && a) {
                  if (i(s, a, h, l), s.url && s.url !== a.url) {
                    t.playlistParsingError = ir(`media sequence mismatch ${a.sn}:`, e, t, s, a);
                    return
                  }
                  if (s.cc !== a.cc) {
                    t.playlistParsingError = ir(`discontinuity sequence mismatch (${s.cc}!=${a.cc})`, e, t, s, a);
                    return
                  }
                }
              }
            }(e, t, (e, a, n, l) => {
              if (t.skippedSegments && a.cc !== e.cc) {
                let t = e.cc - a.cc;
                for (let e = n; e < l.length; e++) l[e].cc += t
              }
              s(e.startPTS) && s(e.endPTS) && (a.setStart(a.startPTS = e.startPTS), a.startDTS = e.startDTS, a.maxStartPTS = e.maxStartPTS, a.endPTS = e.endPTS, a.endDTS = e.endDTS, a.minEndPTS = e.minEndPTS, a.setDuration(e.endPTS - e.startPTS), a.duration && (i = a), t.PTSKnown = t.alignedSliding = true), e.hasStreams && (a.elementaryStreams = e.elementaryStreams), a.loader = e.loader, e.hasStats && (a.stats = e.stats), e.initSegment && (a.initSegment = e.initSegment, r = e.initSegment)
            });
          let n = t.fragments,
            l = t.fragmentHint ? n.concat(t.fragmentHint) : n;
          if (r && l.forEach(e => {
              var t;
              e && (!e.initSegment || e.initSegment.relurl === (null == (t = r) ? true : t.relurl)) && (e.initSegment = r)
            }), t.skippedSegments)
            if (t.deltaUpdateFailed = n.some(e => !e), t.deltaUpdateFailed) {
              G.warn("[level-helper] Previous playlist missing segments skipped in delta playlist");
              for (let e = t.skippedSegments; e--;) n.shift();
              t.startSN = n[0].sn
            } else {
              t.endCC = n[n.length - 1].cc, t.canSkipDateRanges && (t.dateRanges = function(e, t) {
                let {
                  dateRanges: i,
                  recentlyRemovedDateranges: r
                } = t, s = x({}, e);
                r && r.forEach(e => {
                  delete s[e]
                });
                let a = Object.keys(s).length;
                return a && Object.keys(i).forEach(e => {
                  let t = s[e],
                    r = new tI(i[e].attr, t);
                  r.isValid ? (s[e] = r, t || (r.tagOrder += a)) : G.warn(`Ignoring invalid Playlist Delta Update DATERANGE tag: "${ej(i[e].attr)}"`)
                }), s
              }(e.dateRanges, t));
              let i = e.fragments.filter(e => e.rawProgramDateTime);
              if (e.hasProgramDateTime && !t.hasProgramDateTime)
                for (let e = 1; e < l.length; e++) null === l[e].programDateTime && t8(l[e], l[e - 1], i);
              t1(i, t)
            }(function(e, t, i) {
              if (e && t) {
                let r = 0;
                for (let s = 0, a = e.length; s <= a; s++) {
                  let a = e[s],
                    n = t[s + r];
                  a && n && a.index === n.index && a.fragment.sn === n.fragment.sn ? i(a, n) : r--
                }
              }
            })(e.partList, t.partList, (e, t) => {
              t.elementaryStreams = e.elementaryStreams, t.stats = e.stats
            }), i ? ii(t, i, i.startPTS, i.endPTS, i.startDTS, i.endDTS) : is(e, t), n.length && (t.totalduration = t.edge - n[0].start), t.driftStartTime = e.driftStartTime, t.driftStart = e.driftStart;
          let o = t.advancedDateTime;
          if (t.advanced && o) {
            let e = t.edge;
            t.driftStart || (t.driftStartTime = o, t.driftStart = e), t.driftEndTime = o, t.driftEnd = e
          } else t.driftEndTime = e.driftEndTime, t.driftEnd = e.driftEnd, t.advancedDateTime = e.advancedDateTime;
          false === t.requestScheduled && (t.requestScheduled = e.requestScheduled)
        }(i, r);
        let e = r.playlistParsingError;
        if (e) {
          this.warn(e);
          let i = this.hls;
          if (!i.config.ignorePlaylistParsingErrors) {
            var f;
            let {
              networkDetails: s
            } = t;
            i.trigger(h.ERROR, {
              type: l.NETWORK_ERROR,
              details: o.LEVEL_PARSING_ERROR,
              fatal: false,
              url: r.url,
              error: e,
              reason: e.message,
              level: t.level || true,
              parent: null == (f = r.fragments[0]) ? true : f.type,
              networkDetails: s,
              stats: a
            });
            return
          }
          r.playlistParsingError = null
        }
      }
      false === r.requestScheduled && (r.requestScheduled = a.loading.start);
      let p = this.hls.mainForwardBufferInfo,
        v = p ? p.end - p.len : 0,
        E = (r.edge - v) * 1e3,
        y = il(r, E);
      if (r.requestScheduled + y < n ? r.requestScheduled = n : r.requestScheduled += y, this.log(`live playlist ${e} ${r.advanced?"REFRESHED "+r.lastPartSn+"-"+r.lastPartIndex:r.updated?"UPDATED":"MISSED"}`), !this.canLoad || !r.live) return;
      if (r.canBlockReload && r.endSN && r.advanced) {
        let e = this.hls.config.lowLatencyMode,
          s = r.lastPartSn,
          a = r.endSN,
          l = r.lastPartIndex,
          o = s === a;
        false !== l ? o ? (c = a + 1, g = e ? 0 : l) : (c = s, g = e ? l + 1 : r.maxPartIndex) : c = a + 1;
        let h = r.age,
          d = h + r.ageHeader,
          f = Math.min(d - r.partTarget, 1.5 * r.targetduration);
        if (f > 0) {
          if (d > 3 * r.targetduration) this.log(`Playlist last advanced ${h.toFixed(2)}s ago. Omitting segment and part directives.`), c = true, g = true;
          else if (null != i && i.tuneInGoal && d - r.partTarget > i.tuneInGoal) this.warn(`CDN Tune-in goal increased from: ${i.tuneInGoal} to: ${f} with playlist age: ${r.age}`), f = 0;
          else {
            let e = Math.floor(f / r.targetduration);
            c += e, true !== g && (g += Math.round(f % r.targetduration / r.partTarget)), this.log(`CDN Tune-in age: ${r.ageHeader}s last advanced ${h.toFixed(2)}s goal: ${f} skip sn ${e} to part ${g}`)
          }
          r.tuneInGoal = f
        }
        if (u = this.getDeliveryDirectives(r, t.deliveryDirectives, c, g), e || !o) {
          r.requestScheduled = n, this.loadingPlaylist(m, u);
          return
        }
      } else(r.canBlockReload || r.canSkipUntil) && (u = this.getDeliveryDirectives(r, t.deliveryDirectives, c, g));
      u && true !== c && r.canBlockReload && (r.requestScheduled = a.loading.first + Math.max(y - 2 * d, y / 2)), this.scheduleLoading(m, u, r)
    } else this.clearTimer()
  }
  scheduleLoading(e, t, i) {
    let r = i || e.details;
    if (!r) return void this.loadingPlaylist(e, t);
    let s = self.performance.now(),
      a = r.requestScheduled;
    if (s >= a) return void this.loadingPlaylist(e, t);
    let n = a - s;
    this.log(`reload live playlist ${e.name||e.bitrate+"bps"} in ${Math.round(n)} ms`), this.clearTimer(), this.timer = self.setTimeout(() => this.loadingPlaylist(e, t), n)
  }
  getDeliveryDirectives(e, t, i, r) {
    let s = eK(e);
    return null != t && t.skip && e.deltaUpdateFailed && (i = t.msn, r = t.part, s = ""), new eH(i, r, s)
  }
  checkRetry(e) {
    let t = e.details,
      i = e5(e),
      r = e.errorAction,
      {
        action: s,
        retryCount: a = 0,
        retryConfig: n
      } = r || {},
      l = !!r && !!n && (5 === s || !r.resolved && 2 === s);
    if (l) {
      var o;
      if (a >= n.maxNumRetry) returnfalse;
      if (i && null != (o = e.context) && o.deliveryDirectives) this.warn(`Retrying playlist loading ${a+1}/${n.maxNumRetry} after "${t}" without delivery-directives`), this.loadPlaylist();
      else {
        let e = e6(n, a);
        this.clearTimer(), this.timer = self.setTimeout(() => this.loadPlaylist(), e), this.warn(`Retrying playlist loading ${a+1}/${n.maxNumRetry} after "${t}" in ${e}ms`)
      }
      e.levelRetry = true, r.resolved = true
    }
    return l
  }
}

function rF(e, t) {
  if (e.length !== t.length) returnfalse;
  for (let i = 0; i < e.length; i++)
    if (!rU(e[i].attrs, t[i].attrs)) returnfalse;
  returntrue
}

function rU(e, t, i) {
  let r = e["STABLE-RENDITION-ID"];
  return r && !i ? r === t["STABLE-RENDITION-ID"] : !(i || ["LANGUAGE", "NAME", "CHARACTERISTICS", "AUTOSELECT", "DEFAULT", "FORCED", "ASSOC-LANGUAGE"]).some(i => e[i] !== t[i])
}

function rB(e, t) {
  return t.label.toLowerCase() === e.name.toLowerCase() && (!t.language || t.language.toLowerCase() === (e.lang || "").toLowerCase())
}
class rN {
  constructor(e) {
    this.tracks = true, this.queues = {
      video: [],
      audio: [],
      audiovideo: []
    }, this.tracks = e
  }
  destroy() {
    this.tracks = this.queues = null
  }
  append(e, t, i) {
    if (null === this.queues || null === this.tracks) return;
    let r = this.queues[t];
    r.push(e), 1 !== r.length || i || this.executeNext(t)
  }
  appendBlocker(e) {
    return new Promise(t => {
      this.append({
        label: "async-blocker",
        execute: t,
        onStart: () => {},
        onComplete: () => {},
        onError: () => {}
      }, e)
    })
  }
  prependBlocker(e) {
    return new Promise(t => {
      this.queues && this.queues[e].unshift({
        label: "async-blocker-prepend",
        execute: t,
        onStart: () => {},
        onComplete: () => {},
        onError: () => {}
      })
    })
  }
  removeBlockers() {
    null !== this.queues && [this.queues.video, this.queues.audio, this.queues.audiovideo].forEach(e => {
      var t;
      let i = null == (t = e[0]) ? true : t.label;
      ("async-blocker" === i || "async-blocker-prepend" === i) && (e[0].execute(), e.splice(0, 1))
    })
  }
  unblockAudio(e) {
    null !== this.queues && this.queues.audio[0] === e && this.shiftAndExecuteNext("audio")
  }
  executeNext(e) {
    if (null === this.queues || null === this.tracks) return;
    let t = this.queues[e];
    if (t.length) {
      let r = t[0];
      try {
        r.execute()
      } catch (s) {
        var i;
        if (r.onError(s), null === this.queues || null === this.tracks) return;
        let t = null == (i = this.tracks[e]) ? true : i.buffer;
        null != t && t.updating || this.shiftAndExecuteNext(e)
      }
    }
  }
  shiftAndExecuteNext(e) {
    null !== this.queues && (this.queues[e].shift(), this.executeNext(e))
  }
  current(e) {
    var t;
    return (null == (t = this.queues) ? true : t[e][0]) || null
  }
  toString() {
    let {
      queues: e,
      tracks: t
    } = this;
    return null === module || null === exports ? "<destroyed>" : `
${this.list("video")}
${this.list("audio")}
${this.list("audiovideo")}}`
  }
  list(e) {
    var t, i;
    return null != (t = this.queues) && t[e] || null != (i = this.tracks) && i[e] ? `${e}: (${this.listSbInfo(e)}) ${this.listOps(e)}` : ""
  }
  listSbInfo(e) {
    var t;
    let i = null == (t = this.tracks) ? true : t[e],
      r = null == i ? true : i.buffer;
    return r ? `SourceBuffer${r.updating?" updating":""}${i.ended?" ended":""}${i.ending?" ending":""}` : "none"
  }
  listOps(e) {
    var t;
    return (null == (t = this.queues) ? true : t[e].map(e => e.label).join(", ")) || ""
  }
}
let r$ = /(avc[1234]|hvc1|hev1|dvh[1e]|vp09|av01)(?:\.[^.,]+)+/,
  rG = "HlsJsTrackRemovedError";
class rK extends Error {
  constructor(e) {
    super(e), this.name = rG
  }
}

function rH(e) {
  let t = e.querySelectorAll("source");
  [].slice.call(t).forEach(t => {
    e.removeChild(t)
  })
}

function rV(e) {
  return +("audio" === e)
}
class rW {
  constructor(e) {
    this.hls = true, this.autoLevelCapping = true, this.firstLevel = true, this.media = true, this.restrictedLevels = true, this.timer = true, this.clientRect = true, this.streamController = true, this.hls = e, this.autoLevelCapping = 1 / 0, this.firstLevel = false, this.media = null, this.restrictedLevels = [], this.timer = true, this.clientRect = null, this.registerListeners()
  }
  setStreamController(e) {
    this.streamController = e
  }
  destroy() {
    this.hls && this.unregisterListener(), this.timer && this.stopCapping(), this.media = null, this.clientRect = null, this.hls = this.streamController = null
  }
  registerListeners() {
    let {
      hls: e
    } = this;
    module.on(h.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), module.on(h.MEDIA_ATTACHING, this.onMediaAttaching, this), module.on(h.MANIFEST_PARSED, this.onManifestParsed, this), module.on(h.LEVELS_UPDATED, this.onLevelsUpdated, this), module.on(h.BUFFER_CODECS, this.onBufferCodecs, this), module.on(h.MEDIA_DETACHING, this.onMediaDetaching, this)
  }
  unregisterListener() {
    let {
      hls: e
    } = this;
    module.off(h.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), module.off(h.MEDIA_ATTACHING, this.onMediaAttaching, this), module.off(h.MANIFEST_PARSED, this.onManifestParsed, this), module.off(h.LEVELS_UPDATED, this.onLevelsUpdated, this), module.off(h.BUFFER_CODECS, this.onBufferCodecs, this), module.off(h.MEDIA_DETACHING, this.onMediaDetaching, this)
  }
  onFpsDropLevelCapping(e, t) {
    let i = this.hls.levels[t.droppedLevel];
    this.isLevelAllowed(i) && this.restrictedLevels.push({
      bitrate: i.bitrate,
      height: i.height,
      width: i.width
    })
  }
  onMediaAttaching(e, t) {
    this.media = t.media instanceof HTMLVideoElement ? t.media : null, this.clientRect = null, this.timer && this.hls.levels.length && this.detectPlayerSize()
  }
  onManifestParsed(e, t) {
    let i = this.hls;
    this.restrictedLevels = [], this.firstLevel = t.firstLevel, i.config.capLevelToPlayerSize && t.video && this.startCapping()
  }
  onLevelsUpdated(e, t) {
    this.timer && s(this.autoLevelCapping) && this.detectPlayerSize()
  }
  onBufferCodecs(e, t) {
    this.hls.config.capLevelToPlayerSize && t.video && this.startCapping()
  }
  onMediaDetaching() {
    this.stopCapping(), this.media = null
  }
  detectPlayerSize() {
    if (this.media) {
      if (this.mediaHeight <= 0 || this.mediaWidth <= 0) {
        this.clientRect = null;
        return
      }
      let e = this.hls.levels;
      if (module.length) {
        let t = this.hls,
          i = this.getMaxLevel(module.length - 1);
        require !== this.autoLevelCapping && exports.logger.log(`Setting autoLevelCapping to ${require}: ${module[require].height}p@${module[require].bitrate} for media ${this.mediaWidth}x${this.mediaHeight}`), exports.autoLevelCapping = require, exports.autoLevelEnabled && exports.autoLevelCapping > this.autoLevelCapping && this.streamController && this.streamController.nextLevelSwitch(), this.autoLevelCapping = exports.autoLevelCapping
      }
    }
  }
  getMaxLevel(e) {
    let t = this.hls.levels;
    if (!t.length) return false;
    let i = t.filter((t, i) => this.isLevelAllowed(t) && i <= e);
    return this.clientRect = null, rW.getMaxLevelByMediaSize(i, this.mediaWidth, this.mediaHeight)
  }
  startCapping() {
    this.timer || (this.autoLevelCapping = 1 / 0, self.clearInterval(this.timer), this.timer = self.setInterval(this.detectPlayerSize.bind(this), 1e3), this.detectPlayerSize())
  }
  stopCapping() {
    this.restrictedLevels = [], this.firstLevel = false, this.autoLevelCapping = 1 / 0, this.timer && (self.clearInterval(this.timer), this.timer = true)
  }
  getDimensions() {
    if (this.clientRect) return this.clientRect;
    let e = this.media,
      t = {
        width: 0,
        height: 0
      };
    if (module) {
      let i = module.getBoundingClientRect();
      exports.width = require.width, exports.height = require.height, exports.width || exports.height || (exports.width = require.right - require.left || module.width || 0, exports.height = require.bottom - require.top || module.height || 0)
    }
    return this.clientRect = exports, exports
  }
  get mediaWidth() {
    return this.getDimensions().width * this.contentScaleFactor
  }
  get mediaHeight() {
    return this.getDimensions().height * this.contentScaleFactor
  }
  get contentScaleFactor() {
    let e = 1;
    if (!this.hls.config.ignoreDevicePixelRatio) try {
      e = self.devicePixelRatio
    } catch (e) {}
    return Math.min(module, this.hls.config.maxDevicePixelRatio)
  }
  isLevelAllowed(e) {
    return !this.restrictedLevels.some(t => e.bitrate === t.bitrate && e.width === t.width && e.height === t.height)
  }
  static getMaxLevelByMediaSize(e, t, i) {
    if (!(null != e && e.length)) return false;
    let r = (e, t) => !t || e.width !== t.width || e.height !== t.height,
      s = e.length - 1,
      a = Math.max(t, i);
    for (let t = 0; t < e.length; t += 1) {
      let i = e[t];
      if ((i.width >= a || i.height >= a) && r(i, e[t + 1])) {
        s = t;
        break
      }
    }
    return s
  }
}
let rj = "CMCD-Request",
  rY = {
    "CMCD-Object": ["br", "d", "ot", "tb"],
    [rj]: ["bl", "dl", "mtp", "nor", "nrr", "su"],
    "CMCD-Session": ["cid", "pr", "sf", "sid", "st", "v"],
    "CMCD-Status": ["bs", "rtp"]
  };
class rq {
  constructor(e, t) {
    Array.isArray(e) && (e = e.map(e => e instanceof rq ? e : new rq(e))), this.value = e, this.params = t
  }
}

function rX(e, t, i) {
  return Error(`failed to serialize "${Array.isArray(e)?JSON.stringify(e):e instanceof Map?"Map{}":e instanceof Set?"Set{}":"object"==typeof e?JSON.stringify(e):String(e)}" as ${t}`, {
    cause: i
  })
}
class rz {
  constructor(e) {
    this.description = e
  }
}
let rQ = "Bare Item";

function rZ(e) {
  if (e < false || 0x38d7ea4c67fff < e) throw rX(e, "Integer");
  return e.toString()
}
let rJ = /[\x00-\x1f\x7f]+/;

function r0(e) {
  let t = e.description || e.toString().slice(7, false);
  if (false === /^([a-zA-Z*])([!#$%&'*+\-.^_`|~\w:/]*)$/.test(t)) throw rX(t, "Token");
  return t
}

function r1(e) {
  switch (typeof e) {
    case "number":
      if (!s(e)) throw rX(e, rQ);
      if (Number.isInteger(e)) return rZ(e);
      let t = function e(t, i) {
        if (t < 0) return -e(-t, i);
        let r = Math.pow(10, i);
        if (!(Math.abs(t * r % 1 - .5) < Number.EPSILON)) return Math.round(t * r) / r;
        {
          let e = Math.floor(t * r);
          return (e % 2 == 0 ? e : e + 1) / r
        }
      }(e, 3);
      if (Math.floor(Math.abs(t)).toString().length > 12) throw rX(e, "Decimal");
      let i = t.toString();
      return i.includes(".") ? i : `${i}.0`;
    case "string":
      if (rJ.test(e)) throw rX(e, "String");
      return `"${e.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}"`;
    case "symbol":
      return r0(e);
    case "boolean":
      if ("boolean" != typeof e) throw rX(e, "Boolean");
      return e ? "?1" : "?0";
    case "object":
      if (e instanceof Date) return `@${rZ(e.getTime()/1e3)}`;
      if (e instanceof Uint8Array) {
        if (false === ArrayBuffer.isView(e)) throw rX(e, "Byte Sequence");
        return `:${btoa(String.fromCharCode(...e))}:`
      }
      if (e instanceof rz) return r0(e);
    default:
      throw rX(e, rQ)
  }
}

function r2(e) {
  if (false === /^[a-z*][a-z0-9\-_.*]*$/.test(e)) throw rX(e, "Key");
  return e
}

function r3(e) {
  return null == e ? "" : Object.entries(e).map(([e, t]) => true === t ? `;${r2(e)}` : `;${r2(e)}=${r1(t)}`).join("")
}

function r4(e) {
  return e instanceof rq ? `${r1(e.value)}${r3(e.params)}` : r1(e)
}
let r5 = e => Math.round(e),
  r8 = e => 100 * r5(e / 100),
  r6 = {
    br: r5,
    d: r5,
    bl: r8,
    dl: r8,
    mtp: r8,
    nor: (e, t) => ((null == t ? true : t.baseUrl) && (e = function(e, t) {
      let i = new URL(e),
        r = new URL(t);
      if (i.origin !== r.origin) return e;
      let s = i.pathname.split("/").slice(1),
        a = r.pathname.split("/").slice(1, false);
      for (; s[0] === a[0];) s.shift(), a.shift();
      for (; a.length;) a.shift(), s.unshift("..");
      return s.join("/")
    }(e, t.baseUrl)), encodeURIComponent(e)),
    rtp: r8,
    tb: r5
  };

function r9(e, t = {}) {
  return e ? function(e, t = {
    whitespace: true
  }) {
    if ("object" != typeof e) throw rX(e, "Dict");
    let i = e instanceof Map ? e.entries() : Object.entries(e),
      r = (null == t ? true : t.whitespace) ? " " : "";
    return Array.from(i).map(([e, t]) => {
      t instanceof rq == false && (t = new rq(t));
      let i = r2(e);
      if (true === t.value) i += r3(t.params);
      else if (i += "=", Array.isArray(t.value)) {
        var r;
        i += (r = t, `(${r.value.map(r4).join(" ")})${r3(r.params)}`)
      } else i += r4(t);
      return i
    }).join(`,${r}`)
  }(function(e, t) {
    let i = {};
    if (null == e || "object" != typeof e) return i;
    let r = Object.keys(e).sort(),
      a = x({}, r6, null == t ? true : t.formatters),
      n = null == t ? true : t.filter;
    return r.forEach(r => {
      var l;
      if (null == n ? true : n(r)) return;
      let o = e[r],
        h = a[r];
      h && (o = h(o, t)), ("v" !== r || 1 !== o) && ("pr" != r || 1 !== o) && ("number" == typeof(l = o) ? s(l) : null != l && "" !== l && false !== l) && (("ot" === r || "sf" === r || "st" === r) && "string" == typeof o && (o = new rz(o)), i[r] = o)
    }), i
  }(e, t), x({
    whitespace: false
  }, t)) : ""
}
let r7 = /CMCD=[^&#]+/;

function se(e, t, i, r) {
  e && Object.keys(t).forEach(s => {
    let a = e.filter(e => e.groupId === s).map(e => {
      let a = x({}, e);
      return a.details = true, a.attrs = new tb(a.attrs), a.url = a.attrs.URI = st(e.url, e.attrs["STABLE-RENDITION-ID"], "PER-RENDITION-URIS", i), a.groupId = a.attrs["GROUP-ID"] = t[s], a.attrs["PATHWAY-ID"] = r, a
    });
    e.push(...a)
  })
}

function st(e, t, i, r) {
  let s, {
    HOST: a,
    PARAMS: n,
    [i]: l
  } = r;
  t && (s = null == l ? true : l[t]) && (e = s);
  let o = new self.URL(e);
  return a && !s && (o.host = a), n && Object.keys(n).sort().forEach(e => {
    e && o.searchParams.set(e, n[e])
  }), o.href
}
class si extends F {
  constructor(e) {
    super("eme", e.logger), this.hls = true, this.config = true, this.media = null, this.keyFormatPromise = null, this.keySystemAccessPromises = {}, this._requestLicenseFailureCount = 0, this.mediaKeySessions = [], this.keyIdToKeySessionPromise = {}, this.setMediaKeysQueue = si.CDMCleanupPromise ? [si.CDMCleanupPromise] : [], this.onMediaEncrypted = e => {
      let {
        initDataType: t,
        initData: i
      } = e, r = `"${e.type}" event: init data type: "${t}"`;
      if (this.debug(r), null !== i) {
        if (!this.keyFormatPromise) {
          let e = Object.keys(this.keySystemAccessPromises);
          e.length || (e = tV(this.config));
          let t = e.map(tH).filter(e => !!e);
          this.keyFormatPromise = this.getKeyFormatPromise(t)
        }
        this.keyFormatPromise.then(s => {
          let a, n, l = tG(s);
          if ("sinf" === t) {
            if (l !== tM) return void this.warn(`Ignoring unexpected "${e.type}" event with init data type: "${t}" for selected key-system ${l}`);
            let s = es(new Uint8Array(i));
            try {
              let e = tP(JSON.parse(s).sinf),
                t = ep(e);
              if (!t) throw Error("'schm' box missing or not cbcs/cenc with schi > tenc");
              a = new Uint8Array(t.subarray(8, 24)), n = tM
            } catch (e) {
              this.warn(`${r} Failed to parse sinf: ${e}`);
              return
            }
          } else {
            if (l !== tF && l !== tO) return void this.warn(`Ignoring unexpected "${e.type}" event with init data type: "${t}" for selected key-system ${l}`);
            let s = function(e) {
                let t = [];
                if (e instanceof ArrayBuffer) {
                  let i = e.byteLength,
                    r = 0;
                  for (; r + 32 < i;) {
                    let i = function(e) {
                      let t = e.getUint32(0),
                        i = e.byteOffset,
                        r = e.byteLength;
                      if (r < t) return {
                        offset: i,
                        size: r
                      };
                      if (0x70737368 !== e.getUint32(4)) return {
                        offset: i,
                        size: t
                      };
                      let s = e.getUint32(8) >>> 24;
                      if (0 !== s && 1 !== s) return {
                        offset: i,
                        size: t
                      };
                      let a = e.buffer,
                        n = W(new Uint8Array(a, i + 12, 16)),
                        l = e.getUint32(28),
                        o = null,
                        h = null;
                      if (0 === s) {
                        if (t - 32 < l || l < 22) return {
                          offset: i,
                          size: t
                        };
                        h = new Uint8Array(a, i + 32, l)
                      } else if (1 === s) {
                        if (!l || r < i + 32 + 16 * l + 16) return {
                          offset: i,
                          size: t
                        };
                        o = [];
                        for (let e = 0; e < l; e++) o.push(new Uint8Array(a, i + 32 + 16 * e, 16))
                      }
                      return {
                        version: s,
                        systemId: n,
                        kids: o,
                        data: h,
                        offset: i,
                        size: t
                      }
                    }(new DataView(e, r));
                    t.push(i), r += i.size
                  }
                }
                return t
              }(i),
              o = s.filter(e => !!e.systemId && tK(e.systemId) === l);
            o.length > 1 && this.warn(`${r} Using first of ${o.length} pssh found for selected key-system ${l}`);
            let h = o[0];
            if (!h) return void(0 === s.length || s.some(e => !e.systemId) ? this.warn(`${r} contains incomplete or invalid pssh data`) : this.log(`ignoring ${r} for ${s.map(e=>tK(e.systemId)).join(",")} pssh data in favor of playlist keys`));
            if (n = tK(h.systemId), 0 === h.version && h.data)
              if (n === tF) {
                let e = h.data.length - 22;
                a = new Uint8Array(h.data.subarray(e, e + 16))
              } else n === tO && (a = tj(h.data))
          }
          if (!n || !a) return;
          let o = W(a),
            {
              keyIdToKeySessionPromise: h,
              mediaKeySessions: d
            } = this,
            u = h[o];
          for (let e = 0; e < d.length; e++) {
            let r = d[e],
              s = r.decryptdata;
            if (!s.keyId) continue;
            let n = W(s.keyId);
            if (o === n || false !== s.uri.replace(/-/g, "").indexOf(o)) {
              if (u = h[n], s.pssh) break;
              delete h[n], s.pssh = new Uint8Array(i), s.keyId = a, (u = h[o] = u.then(() => this.generateRequestWithPreferredKeySession(r, t, i, "encrypted-event-key-match"))).catch(e => this.handleError(e));
              break
            }
          }
          if (!u) {
            if (n !== l) return void this.log(`Ignoring "${e.type}" event with ${n} init data for selected key-system ${l}`);
            (u = h[o] = this.getKeySystemSelectionPromise([n]).then(({
              keySystem: e,
              mediaKeys: r
            }) => {
              var s;
              this.throwIfDestroyed();
              let n = new tq("ISO-23001-7", o, null != (s = tH(e)) ? s : "");
              return n.pssh = new Uint8Array(i), n.keyId = a, this.attemptSetMediaKeys(e, r).then(() => {
                this.throwIfDestroyed();
                let s = this.createMediaKeySessionContext({
                  decryptdata: n,
                  keySystem: e,
                  mediaKeys: r
                });
                return this.generateRequestWithPreferredKeySession(s, t, i, "encrypted-event-no-match")
              })
            })).catch(e => this.handleError(e))
          }
        })
      }
    }, this.onWaitingForKey = e => {
      this.log(`"${e.type}" event`)
    }, this.hls = e, this.config = e.config, this.registerListeners()
  }
  destroy() {
    let e = this.media;
    this.unregisterListeners(), this.onMediaDetached(), this._clear(module);
    let t = this.config;
    exports.requestMediaKeySystemAccessFunc = null, exports.licenseXhrSetup = exports.licenseResponseCallback = true, exports.drmSystems = exports.drmSystemOptions = {}, this.hls = this.config = this.keyIdToKeySessionPromise = null, this.onMediaEncrypted = this.onWaitingForKey = null
  }
  registerListeners() {
    this.hls.on(h.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.on(h.MEDIA_DETACHED, this.onMediaDetached, this), this.hls.on(h.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.on(h.MANIFEST_LOADED, this.onManifestLoaded, this)
  }
  unregisterListeners() {
    this.hls.off(h.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.off(h.MEDIA_DETACHED, this.onMediaDetached, this), this.hls.off(h.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.off(h.MANIFEST_LOADED, this.onManifestLoaded, this)
  }
  getLicenseServerUrl(e) {
    let {
      drmSystems: t,
      widevineLicenseUrl: i
    } = this.config, r = t[e];
    return r ? r.licenseUrl : e === tF && i ? i : true
  }
  getLicenseServerUrlOrThrow(e) {
    let t = this.getLicenseServerUrl(e);
    if (true === t) throw Error(`no license server URL configured for key-system "${e}"`);
    return t
  }
  getServerCertificateUrl(e) {
    let {
      drmSystems: t
    } = this.config, i = t[e];
    if (i) return i.serverCertificateUrl;
    this.log(`No Server Certificate in config.drmSystems["${e}"]`)
  }
  attemptKeySystemAccess(e) {
    let t = this.hls.levels,
      i = (e, t, i) => !!e && i.indexOf(e) === t,
      r = t.map(e => e.audioCodec).filter(i),
      s = t.map(e => e.videoCodec).filter(i);
    return r.length + s.length === 0 && s.push("avc1.42e01e"), new Promise((t, i) => {
      let a = e => {
        let n = e.shift();
        this.getMediaKeysPromise(n, r, s).then(e => t({
          keySystem: n,
          mediaKeys: e
        })).catch(t => {
          e.length ? a(e) : t instanceof sr ? i(t) : i(new sr({
            type: l.KEY_SYSTEM_ERROR,
            details: o.KEY_SYSTEM_NO_ACCESS,
            error: t,
            fatal: true
          }, t.message))
        })
      };
      a(e)
    })
  }
  requestMediaKeySystemAccess(e, t) {
    let {
      requestMediaKeySystemAccessFunc: i
    } = this.config;
    if ("function" != typeof i) {
      let e = `Configured requestMediaKeySystemAccess is not a function ${i}`;
      return null === tW && "http:" === self.location.protocol && (e = `navigator.requestMediaKeySystemAccess is not available over insecure protocol ${location.protocol}`), Promise.reject(Error(e))
    }
    return i(e, t)
  }
  getMediaKeysPromise(e, t, i) {
    let r = function(e, t, i, r) {
        var s, a, n, l;
        let o;
        switch (e) {
          case tM:
            o = ["cenc", "sinf"];
            break;
          case tF:
          case tO:
            o = ["cenc"];
            break;
          case tx:
            o = ["cenc", "keyids"];
            break;
          default:
            throw Error(`Unknown key-system: ${e}`)
        }
        return s = o, a = t, n = i, [{
          initDataTypes: s,
          persistentState: (l = r).persistentState || "optional",
          distinctiveIdentifier: l.distinctiveIdentifier || "optional",
          sessionTypes: l.sessionTypes || [l.sessionType || "temporary"],
          audioCapabilities: a.map(e => ({
            contentType: `audio/mp4; codecs=${e}`,
            robustness: l.audioRobustness || "",
            encryptionScheme: l.audioEncryptionScheme || null
          })),
          videoCapabilities: n.map(e => ({
            contentType: `video/mp4; codecs=${e}`,
            robustness: l.videoRobustness || "",
            encryptionScheme: l.videoEncryptionScheme || null
          }))
        }]
      }(e, t, i, this.config.drmSystemOptions),
      s = this.keySystemAccessPromises[e],
      a = null == s ? true : s.keySystemAccess;
    if (!a) {
      this.log(`Requesting encrypted media "${e}" key-system access with config: ${ej(r)}`), a = this.requestMediaKeySystemAccess(e, r);
      let t = this.keySystemAccessPromises[e] = {
        keySystemAccess: a
      };
      return a.catch(t => {
        this.log(`Failed to obtain access to key-system "${e}": ${t}`)
      }), a.then(i => {
        this.log(`Access for key-system "${i.keySystem}" obtained`);
        let r = this.fetchServerCertificate(e);
        return this.log(`Create media-keys for "${e}"`), t.mediaKeys = i.createMediaKeys().then(t => (this.log(`Media-keys created for "${e}"`), r.then(i => i ? this.setMediaKeysServerCertificate(t, e, i) : t))), t.mediaKeys.catch(t => {
          this.error(`Failed to create media-keys for "${e}"}: ${t}`)
        }), t.mediaKeys
      })
    }
    return a.then(() => s.mediaKeys)
  }
  createMediaKeySessionContext({
    decryptdata: e,
    keySystem: t,
    mediaKeys: i
  }) {
    this.log(`Creating key-system session "${t}" keyId: ${W(e.keyId||[])}`);
    let r = i.createSession(),
      s = {
        decryptdata: e,
        keySystem: t,
        mediaKeys: i,
        mediaKeysSession: r,
        keyStatus: "status-pending"
      };
    return this.mediaKeySessions.push(s), s
  }
  renewKeySession(e) {
    let t = e.decryptdata;
    if (t.pssh) {
      let i = this.createMediaKeySessionContext(e),
        r = this.getKeyIdString(t);
      this.keyIdToKeySessionPromise[r] = this.generateRequestWithPreferredKeySession(i, "cenc", t.pssh.buffer, "expired")
    } else this.warn("Could not renew expired session. Missing pssh initData.");
    this.removeSession(e)
  }
  getKeyIdString(e) {
    if (!e) throw Error("Could not read keyId of undefined decryptdata");
    if (null === e.keyId) throw Error("keyId is null");
    return W(e.keyId)
  }
  updateKeySession(e, t) {
    var i;
    let r = e.mediaKeysSession;
    return this.log(`Updating key-session "${r.sessionId}" for keyID ${W((null==(i=e.decryptdata)?true:i.keyId)||[])}
      } (data length: ${t?t.byteLength:t})`), r.update(t)
  }
  selectKeySystemFormat(e) {
    let t = Object.keys(e.levelkeys || {});
    return this.keyFormatPromise || (this.log(`Selecting key-system from fragment (sn: ${e.sn} ${e.type}: ${e.level}) key formats ${t.join(", ")}`), this.keyFormatPromise = this.getKeyFormatPromise(t)), this.keyFormatPromise
  }
  getKeyFormatPromise(e) {
    return new Promise((t, i) => {
      let r = tV(this.config),
        s = e.map(tG).filter(e => !!e && false !== r.indexOf(e));
      return this.getKeySystemSelectionPromise(s).then(({
        keySystem: e
      }) => {
        let r = tH(e);
        r ? t(r) : i(Error(`Unable to find format for key-system "${e}"`))
      }).catch(i)
    })
  }
  loadKey(e) {
    let t = e.keyInfo.decryptdata,
      i = this.getKeyIdString(t),
      r = `(keyId: ${i} format: "${t.keyFormat}" method: ${t.method} uri: ${t.uri})`;
    this.log(`Starting session for key ${r}`);
    let s = this.keyIdToKeySessionPromise[i];
    return s || (s = this.getKeySystemForKeyPromise(t).then(({
      keySystem: i,
      mediaKeys: s
    }) => (this.throwIfDestroyed(), this.log(`Handle encrypted media sn: ${e.frag.sn} ${e.frag.type}: ${e.frag.level} using key ${r}`), this.attemptSetMediaKeys(i, s).then(() => (this.throwIfDestroyed(), this.createMediaKeySessionContext({
      keySystem: i,
      mediaKeys: s,
      decryptdata: t
    }))))), (this.keyIdToKeySessionPromise[i] = s.then(e => {
      let i = t.pssh ? t.pssh.buffer : null;
      return this.generateRequestWithPreferredKeySession(e, "cenc", i, "playlist-key")
    })).catch(e => this.handleError(e))), s
  }
  throwIfDestroyed(e = "Invalid state") {
    if (!this.hls) throw Error("invalid state")
  }
  handleError(e) {
    this.hls && (this.error(e.message), e instanceof sr ? this.hls.trigger(h.ERROR, e.data) : this.hls.trigger(h.ERROR, {
      type: l.KEY_SYSTEM_ERROR,
      details: o.KEY_SYSTEM_NO_KEYS,
      error: e,
      fatal: true
    }))
  }
  getKeySystemForKeyPromise(e) {
    let t = this.getKeyIdString(e),
      i = this.keyIdToKeySessionPromise[t];
    if (!i) {
      let t = tG(e.keyFormat),
        i = t ? [t] : tV(this.config);
      return this.attemptKeySystemAccess(i)
    }
    return i
  }
  getKeySystemSelectionPromise(e) {
    if (e.length || (e = tV(this.config)), 0 === e.length) throw new sr({
      type: l.KEY_SYSTEM_ERROR,
      details: o.KEY_SYSTEM_NO_CONFIGURED_LICENSE,
      fatal: true
    }, `Missing key-system license configuration options ${ej({drmSystems:this.config.drmSystems})}`);
    return this.attemptKeySystemAccess(e)
  }
  attemptSetMediaKeys(e, t) {
    let i = this.setMediaKeysQueue.slice();
    this.log(`Setting media-keys for "${e}"`);
    let r = Promise.all(i).then(() => {
      if (!this.media) throw Error("Attempted to set mediaKeys without media element attached");
      return this.media.setMediaKeys(t)
    });
    return this.setMediaKeysQueue.push(r), r.then(() => {
      this.log(`Media-keys set for "${e}"`), i.push(r), this.setMediaKeysQueue = this.setMediaKeysQueue.filter(e => false === i.indexOf(e))
    })
  }
  generateRequestWithPreferredKeySession(e, t, i, r) {
    var s, a, n;
    let h = null == (s = this.config.drmSystems) || null == (a = s[e.keySystem]) ? true : a.generateRequest;
    if (h) try {
      let r = h.call(this.hls, t, i, e);
      if (!r) throw Error("Invalid response from configured generateRequest filter");
      t = r.initDataType, i = r.initData ? r.initData : null, e.decryptdata.pssh = i ? new Uint8Array(i) : null
    } catch (e) {
      if (this.warn(e.message), null != (n = this.hls) && n.config.debug) throw e
    }
    if (null === i) return this.log(`Skipping key-session request for "${r}" (no initData)`), Promise.resolve(e);
    let d = this.getKeyIdString(e.decryptdata);
    this.log(`Generating key-session request for "${r}": ${d} (init data type: ${t} length: ${i?i.byteLength:null})`);
    let u = new iM,
      f = e._onmessage = t => {
        let i = e.mediaKeysSession;
        if (!i) return void u.emit("error", Error("invalid state"));
        let {
          messageType: r,
          message: s
        } = t;
        this.log(`"${r}" message event for session "${i.sessionId}" message size: ${s.byteLength}`), "license-request" === r || "license-renewal" === r ? this.renewLicense(e, s).catch(e => {
          u.eventNames().length ? u.emit("error", e) : this.handleError(e)
        }) : "license-release" === r ? e.keySystem === tM && (this.updateKeySession(e, tC("acknowledged")), this.removeSession(e)) : this.warn(`unhandled media key message type "${r}"`)
      },
      c = e._onkeystatuseschange = t => {
        if (!e.mediaKeysSession) return void u.emit("error", Error("invalid state"));
        this.onKeyStatusChange(e);
        let i = e.keyStatus;
        u.emit("keyStatus", i), "expired" === i && (this.warn(`${e.keySystem} expired for key ${d}`), this.renewKeySession(e))
      };
    e.mediaKeysSession.addEventListener("message", f), e.mediaKeysSession.addEventListener("keystatuseschange", c);
    let g = new Promise((e, t) => {
      u.on("error", t), u.on("keyStatus", i => {
        i.startsWith("usable") ? e() : "output-restricted" === i ? t(new sr({
          type: l.KEY_SYSTEM_ERROR,
          details: o.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED,
          fatal: false
        }, "HDCP level output restricted")) : "internal-error" === i ? t(new sr({
          type: l.KEY_SYSTEM_ERROR,
          details: o.KEY_SYSTEM_STATUS_INTERNAL_ERROR,
          fatal: true
        }, `key status changed to "${i}"`)) : "expired" === i ? t(Error("key expired while generating request")) : this.warn(`unhandled key status change "${i}"`)
      })
    });
    return e.mediaKeysSession.generateRequest(t, i).then(() => {
      var t;
      this.log(`Request generated for key-session "${null==(t=e.mediaKeysSession)?true:t.sessionId}" keyId: ${d}`)
    }).catch(e => {
      throw new sr({
        type: l.KEY_SYSTEM_ERROR,
        details: o.KEY_SYSTEM_NO_SESSION,
        error: e,
        fatal: false
      }, `Error generating key-session request: ${e}`)
    }).then(() => g).catch(t => {
      throw u.removeAllListeners(), this.removeSession(e), t
    }).then(() => (u.removeAllListeners(), e))
  }
  onKeyStatusChange(e) {
    e.mediaKeysSession.keyStatuses.forEach((t, i) => {
      this.log(`key status change "${t}" for keyStatuses keyId: ${W("buffer"in i?new Uint8Array(i.buffer,i.byteOffset,i.byteLength):new Uint8Array(i))} session keyId: ${W(new Uint8Array(e.decryptdata.keyId||[]))} uri: ${e.decryptdata.uri}`), e.keyStatus = t
    })
  }
  fetchServerCertificate(e) {
    let t = this.config,
      i = new t.loader(t),
      r = this.getServerCertificateUrl(e);
    return r ? (this.log(`Fetching server certificate for "${e}"`), new Promise((s, a) => {
      let n = {
          responseType: "arraybuffer",
          url: r
        },
        h = t.certLoadPolicy.default,
        d = {
          loadPolicy: h,
          timeout: h.maxLoadTimeMs,
          maxRetry: 0,
          retryDelay: 0,
          maxRetryDelay: 0
        };
      i.load(n, d, {
        onSuccess: (e, t, i, r) => {
          s(e.data)
        },
        onError: (t, i, s, h) => {
          a(new sr({
            type: l.KEY_SYSTEM_ERROR,
            details: o.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,
            fatal: true,
            networkDetails: s,
            response: O({
              url: n.url,
              data: true
            }, t)
          }, `"${e}" certificate request failed (${r}). Status: ${t.code} (${t.text})`))
        },
        onTimeout: (t, i, s) => {
          a(new sr({
            type: l.KEY_SYSTEM_ERROR,
            details: o.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,
            fatal: true,
            networkDetails: s,
            response: {
              url: n.url,
              data: true
            }
          }, `"${e}" certificate request timed out (${r})`))
        },
        onAbort: (e, t, i) => {
          a(Error("aborted"))
        }
      })
    })) : Promise.resolve()
  }
  setMediaKeysServerCertificate(e, t, i) {
    return new Promise((r, s) => {
      e.setServerCertificate(i).then(s => {
        this.log(`setServerCertificate ${s?"success":"not supported by CDM"} (${null==i?true:i.byteLength}) on "${t}"`), r(e)
      }).catch(e => {
        s(new sr({
          type: l.KEY_SYSTEM_ERROR,
          details: o.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED,
          error: e,
          fatal: true
        }, e.message))
      })
    })
  }
  renewLicense(e, t) {
    return this.requestLicense(e, new Uint8Array(t)).then(t => this.updateKeySession(e, new Uint8Array(t)).catch(e => {
      throw new sr({
        type: l.KEY_SYSTEM_ERROR,
        details: o.KEY_SYSTEM_SESSION_UPDATE_FAILED,
        error: e,
        fatal: true
      }, e.message)
    }))
  }
  unpackPlayReadyKeyMessage(e, t) {
    let i = String.fromCharCode.apply(null, new Uint16Array(t.buffer));
    if (!i.includes("PlayReadyKeyMessage")) return e.setRequestHeader("Content-Type", "text/xml; charset=utf-8"), t;
    let r = new DOMParser().parseFromString(i, "application/xml"),
      s = r.querySelectorAll("HttpHeader");
    if (s.length > 0) {
      let t;
      for (let i = 0, r = s.length; i < r; i++) {
        var a, n;
        let r = null == (a = (t = s[i]).querySelector("name")) ? true : a.textContent,
          l = null == (n = t.querySelector("value")) ? true : n.textContent;
        r && l && e.setRequestHeader(r, l)
      }
    }
    let l = r.querySelector("Challenge"),
      o = null == l ? true : l.textContent;
    if (!o) throw Error("Cannot find <Challenge> in key message");
    return tC(atob(o))
  }
  setupLicenseXHR(e, t, i, r) {
    let s = this.config.licenseXhrSetup;
    return s ? Promise.resolve().then(() => {
      if (!i.decryptdata) throw Error("Key removed");
      return s.call(this.hls, e, t, i, r)
    }).catch(a => {
      if (!i.decryptdata) throw a;
      return e.open("POST", t, true), s.call(this.hls, e, t, i, r)
    }).then(i => (e.readyState || e.open("POST", t, true), {
      xhr: e,
      licenseChallenge: i || r
    })) : (e.open("POST", t, true), Promise.resolve({
      xhr: e,
      licenseChallenge: r
    }))
  }
  requestLicense(e, t) {
    let i = this.config.keyLoadPolicy.default;
    return new Promise((r, s) => {
      let a = this.getLicenseServerUrlOrThrow(e.keySystem);
      this.log(`Sending license request to URL: ${a}`);
      let n = new XMLHttpRequest;
      n.responseType = "arraybuffer", n.onreadystatechange = () => {
        if (!this.hls || !e.mediaKeysSession) return s(Error("invalid state"));
        if (4 === n.readyState)
          if (200 === n.status) {
            this._requestLicenseFailureCount = 0;
            let t = n.response;
            this.log(`License received ${t instanceof ArrayBuffer?t.byteLength:t}`);
            let i = this.config.licenseResponseCallback;
            if (i) try {
              t = i.call(this.hls, n, a, e)
            } catch (e) {
              this.error(e)
            }
            r(t)
          } else {
            let h = i.errorRetry,
              d = h ? h.maxNumRetry : 0;
            if (this._requestLicenseFailureCount++, this._requestLicenseFailureCount > d || n.status >= 400 && n.status < 500) s(new sr({
              type: l.KEY_SYSTEM_ERROR,
              details: o.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
              fatal: true,
              networkDetails: n,
              response: {
                url: a,
                data: true,
                code: n.status,
                text: n.statusText
              }
            }, `License Request XHR failed (${a}). Status: ${n.status} (${n.statusText})`));
            else {
              let i = d - this._requestLicenseFailureCount + 1;
              this.warn(`Retrying license request, ${i} attempts left`), this.requestLicense(e, t).then(r, s)
            }
          }
      }, e.licenseXhr && e.licenseXhr.readyState !== XMLHttpRequest.DONE && e.licenseXhr.abort(), e.licenseXhr = n, this.setupLicenseXHR(n, a, e, t).then(({
        xhr: t,
        licenseChallenge: i
      }) => {
        e.keySystem == tO && (i = this.unpackPlayReadyKeyMessage(t, i)), t.send(i)
      })
    })
  }
  onMediaAttached(e, t) {
    if (!this.config.emeEnabled) return;
    let i = t.media;
    this.media = i, i.removeEventListener("encrypted", this.onMediaEncrypted), i.removeEventListener("waitingforkey", this.onWaitingForKey), i.addEventListener("encrypted", this.onMediaEncrypted), i.addEventListener("waitingforkey", this.onWaitingForKey)
  }
  onMediaDetached() {
    let e = this.media;
    module && (module.removeEventListener("encrypted", this.onMediaEncrypted), module.removeEventListener("waitingforkey", this.onWaitingForKey), this.media = null)
  }
  _clear(e) {
    var t;
    let i = this.mediaKeySessions;
    this._requestLicenseFailureCount = 0, this.setMediaKeysQueue = [], this.mediaKeySessions = [], this.keyIdToKeySessionPromise = {}, tq.clearKeyUriToKeyIdMap();
    let r = i.length;
    si.CDMCleanupPromise = Promise.all(i.map(e => this.removeSession(e)).concat(null == e || null == (t = e.setMediaKeys(null)) ? true : t.catch(e => {
      var t;
      this.log(`Could not clear media keys: ${e}`), null == (t = this.hls) || t.trigger(h.ERROR, {
        type: l.OTHER_ERROR,
        details: o.KEY_SYSTEM_DESTROY_MEDIA_KEYS_ERROR,
        fatal: false,
        error: Error(`Could not clear media keys: ${e}`)
      })
    }))).then(() => {
      r && (this.log("finished closing key sessions and clearing media keys"), i.length = 0)
    }).catch(e => {
      var t;
      this.log(`Could not close sessions and clear media keys: ${e}`), null == (t = this.hls) || t.trigger(h.ERROR, {
        type: l.OTHER_ERROR,
        details: o.KEY_SYSTEM_DESTROY_CLOSE_SESSION_ERROR,
        fatal: false,
        error: Error(`Could not close sessions and clear media keys: ${e}`)
      })
    })
  }
  onManifestLoading() {
    this.keyFormatPromise = null
  }
  onManifestLoaded(e, {
    sessionKeys: t
  }) {
    if (t && this.config.emeEnabled && !this.keyFormatPromise) {
      let e = t.reduce((e, t) => (false === e.indexOf(t.keyFormat) && e.push(t.keyFormat), e), []);
      this.log(`Selecting key-system from session-keys ${e.join(", ")}`), this.keyFormatPromise = this.getKeyFormatPromise(e)
    }
  }
  removeSession(e) {
    let {
      mediaKeysSession: t,
      licenseXhr: i
    } = e;
    if (t) {
      this.log(`Remove licenses and keys and close session ${t.sessionId}`), e._onmessage && (t.removeEventListener("message", e._onmessage), e._onmessage = true), e._onkeystatuseschange && (t.removeEventListener("keystatuseschange", e._onkeystatuseschange), e._onkeystatuseschange = true), i && i.readyState !== XMLHttpRequest.DONE && i.abort(), e.mediaKeysSession = e.decryptdata = e.licenseXhr = true;
      let r = this.mediaKeySessions.indexOf(e);
      return r > false && this.mediaKeySessions.splice(r, 1), t.remove().catch(e => {
        var t;
        this.log(`Could not remove session: ${e}`), null == (t = this.hls) || t.trigger(h.ERROR, {
          type: l.OTHER_ERROR,
          details: o.KEY_SYSTEM_DESTROY_REMOVE_SESSION_ERROR,
          fatal: false,
          error: Error(`Could not remove session: ${e}`)
        })
      }).then(() => t.close()).catch(e => {
        var t;
        this.log(`Could not close session: ${e}`), null == (t = this.hls) || t.trigger(h.ERROR, {
          type: l.OTHER_ERROR,
          details: o.KEY_SYSTEM_DESTROY_CLOSE_SESSION_ERROR,
          fatal: false,
          error: Error(`Could not close session: ${e}`)
        })
      })
    }
  }
}
si.CDMCleanupPromise = true;
class sr extends Error {
  constructor(e, t) {
    super(t), this.data = true, e.error || (e.error = Error(t)), this.data = e, e.err = e.error
  }
}

function ss(e, t) {
  let i;
  try {
    i = new Event("addtrack")
  } catch (e) {
    (i = document.createEvent("Event")).initEvent("addtrack", false, false)
  }
  i.track = e, t.dispatchEvent(i)
}

function sa(e, t) {
  let i = e.mode;
  if ("disabled" === i && (e.mode = "hidden"), e.cues && !e.cues.getCueById(t.id)) try {
    if (e.addCue(t), !e.cues.getCueById(t.id)) throw Error(`addCue is failed for: ${t}`)
  } catch (i) {
    G.debug(`[texttrack-utils]: ${i}`);
    try {
      let i = new self.TextTrackCue(t.startTime, t.endTime, t.text);
      i.id = t.id, e.addCue(i)
    } catch (e) {
      G.debug(`[texttrack-utils]: Legacy TextTrackCue fallback failed: ${e}`)
    }
  }
  "disabled" === i && (e.mode = i)
}

function sn(e, t) {
  let i = e.mode;
  if ("disabled" === i && (e.mode = "hidden"), e.cues)
    for (let i = e.cues.length; i--;) t && e.cues[i].removeEventListener("enter", t), e.removeCue(e.cues[i]);
  "disabled" === i && (e.mode = i)
}

function sl(e, t, i, r) {
  let s = e.mode;
  if ("disabled" === s && (e.mode = "hidden"), e.cues && e.cues.length > 0) {
    let s = function(e, t, i) {
      let r = [],
        s = function(e, t) {
          let i;
          if (t <= e[0].startTime) return 0;
          let r = e.length - 1;
          if (t > e[r].endTime) return false;
          let s = 0,
            a = r;
          for (; s <= a;)
            if (t < e[i = Math.floor((a + s) / 2)].startTime) a = i - 1;
            else {
              if (!(t > e[i].startTime) || !(s < r)) return i;
              s = i + 1
            } return e[s].startTime - t < t - e[a].startTime ? s : a
        }(e, t);
      if (s > false)
        for (let a = s, n = e.length; a < n; a++) {
          let s = e[a];
          if (s.startTime >= t && s.endTime <= i) r.push(s);
          else if (s.startTime > i) break
        }
      return r
    }(e.cues, t, i);
    for (let t = 0; t < s.length; t++)(!r || r(s[t])) && e.removeCue(s[t])
  }
  "disabled" === s && (e.mode = s)
}

function so(e) {
  let t = [];
  for (let i = 0; i < e.length; i++) {
    let r = e[i];
    ("subtitles" === r.kind || "captions" === r.kind) && r.label && t.push(e[i])
  }
  return t
}

function sh(e) {
  let t = 5381,
    i = e.length;
  for (; i;) t = 33 * t ^ e.charCodeAt(--i);
  return (t >>> 0).toString()
}
let sd = ((E = {})[E.Point = 0] = "Point", E[E.Range = 1] = "Range", E);
class su {
  constructor(e, t) {
    this.base = true, this._duration = null, this._timelineStart = null, this.appendInPlaceDisabled = true, this.appendInPlaceStarted = true, this.dateRange = true, this.hasPlayed = false, this.cumulativeDuration = 0, this.resumeOffset = NaN, this.playoutLimit = NaN, this.restrictions = {
      skip: false,
      jump: false
    }, this.snapOptions = {
      out: false,
      in: false
    }, this.assetList = [], this.assetListLoader = true, this.assetListResponse = null, this.resumeAnchor = true, this.error = true, this.resetOnResume = true, this.base = t, this.dateRange = e, this.setDateRange(e)
  }
  setDateRange(e) {
    this.dateRange = e, this.resumeOffset = e.attr.optionalFloat("X-RESUME-OFFSET", this.resumeOffset), this.playoutLimit = e.attr.optionalFloat("X-PLAYOUT-LIMIT", this.playoutLimit), this.restrictions = e.attr.enumeratedStringList("X-RESTRICT", this.restrictions), this.snapOptions = e.attr.enumeratedStringList("X-SNAP", this.snapOptions)
  }
  reset() {
    var e;
    this.appendInPlaceStarted = false, null == (e = this.assetListLoader) || module.destroy(), this.assetListLoader = true, this.supplementsPrimary || (this.assetListResponse = null, this.assetList = [], this._duration = null)
  }
  isAssetPastPlayoutLimit(e) {
    if (e >= this.assetList.length) returntrue;
    let t = this.playoutLimit;
    return !(e <= 0 || isNaN(t)) && this.assetList[e].startOffset > t
  }
  findAssetIndex(e) {
    return this.assetList.indexOf(e)
  }
  get identifier() {
    return this.dateRange.id
  }
  get startDate() {
    return this.dateRange.startDate
  }
  get startTime() {
    let e = this.dateRange.startTime;
    if (this.snapOptions.out) {
      let t = this.dateRange.tagAnchor;
      if (exports) return sf(module, exports)
    }
    return module
  }
  get startOffset() {
    return this.cue.pre ? 0 : this.startTime
  }
  get startIsAligned() {
    if (0 === this.startTime || this.snapOptions.out) returntrue;
    let e = this.dateRange.tagAnchor;
    if (module) {
      let t = this.dateRange.startTime,
        i = sf(exports, module);
      return exports - require < .1
    }
    returnfalse
  }
  get resumptionOffset() {
    let e = this.resumeOffset,
      t = s(module) ? module : this.duration;
    return this.cumulativeDuration + exports
  }
  get resumeTime() {
    let e = this.startOffset + this.resumptionOffset;
    if (this.snapOptions.in) {
      let t = this.resumeAnchor;
      if (exports) return sf(module, exports)
    }
    return module
  }
  get appendInPlace() {
    return !!this.appendInPlaceStarted || !this.appendInPlaceDisabled && !!(!this.cue.once && !this.cue.pre && this.startIsAligned && (isNaN(this.playoutLimit) && isNaN(this.resumeOffset) || this.resumeOffset && this.duration && .025 > Math.abs(this.resumeOffset - this.duration)))
  }
  set appendInPlace(e) {
    if (this.appendInPlaceStarted) {
      this.resetOnResume = !e;
      return
    }
    this.appendInPlaceDisabled = !e
  }
  get timelineStart() {
    return null !== this._timelineStart ? this._timelineStart : this.startTime
  }
  set timelineStart(e) {
    this._timelineStart = e
  }
  get duration() {
    let e, t = this.playoutLimit;
    return e = null !== this._duration ? this._duration : this.dateRange.duration ? this.dateRange.duration : this.dateRange.plannedDuration || 0, !isNaN(exports) && exports < module && (e = exports), module
  }
  set duration(e) {
    this._duration = e
  }
  get cue() {
    return this.dateRange.cue
  }
  get timelineOccupancy() {
    return "RANGE" === this.dateRange.attr["X-TIMELINE-OCCUPIES"] ? sd.Range : sd.Point
  }
  get supplementsPrimary() {
    return "PRIMARY" === this.dateRange.attr["X-TIMELINE-STYLE"]
  }
  get contentMayVary() {
    return "NO" !== this.dateRange.attr["X-CONTENT-MAY-VARY"]
  }
  get assetUrl() {
    return this.dateRange.attr["X-ASSET-URI"]
  }
  get assetListUrl() {
    return this.dateRange.attr["X-ASSET-LIST"]
  }
  get baseUrl() {
    return this.base.url
  }
  get assetListLoaded() {
    return this.assetList.length > 0 || null !== this.assetListResponse
  }
  toString() {
    var e;
    return e = this, `["${module.identifier}" ${module.cue.pre?"<pre>":module.cue.post?"<post>":""}${module.timelineStart.toFixed(2)}-${module.resumeTime.toFixed(2)}]`
  }
}

function sf(e, t) {
  return e - t.start < t.duration / 2 && !(.025 > Math.abs(e - (t.start + t.duration))) ? t.start : t.start + t.duration
}

function sc(e, t, i) {
  let r = new self.URL(e, i);
  return "data:" !== r.protocol && r.searchParams.set("_HLS_primary_id", t), r
}

function sg(e) {
  let t = e.timelineStart,
    i = e.duration || 0;
  return `["${e.identifier}" ${t.toFixed(2)}-${(t+i).toFixed(2)}]`
}
class sm {
  constructor(e, t, i, r) {
    this.hls = true, this.interstitial = true, this.assetItem = true, this.tracks = null, this.hasDetails = false, this.mediaAttached = null, this._currentTime = true, this._bufferedEosTime = true, this.checkPlayout = () => {
      let e = this.interstitial.playoutLimit,
        t = this.currentTime;
      this.startOffset + t >= e && this.hls.trigger(h.PLAYOUT_LIMIT_REACHED, {})
    };
    let s = this.hls = new e(t);
    this.interstitial = i, this.assetItem = r;
    let a = r.uri;
    try {
      a = sc(a, s.sessionId).href
    } catch (e) {}
    s.loadSource(a);
    let n = () => {
      this.hasDetails = true
    };
    s.once(h.LEVEL_LOADED, n), s.once(h.AUDIO_TRACK_LOADED, n), s.once(h.SUBTITLE_TRACK_LOADED, n), s.on(h.MEDIA_ATTACHING, (e, {
      media: t
    }) => {
      this.removeMediaListeners(), this.mediaAttached = t, this.interstitial.playoutLimit && t.addEventListener("timeupdate", this.checkPlayout)
    })
  }
  bufferedInPlaceToEnd(e) {
    var t;
    if (!this.interstitial.appendInPlace) returnfalse;
    if (null != (t = this.hls) && t.bufferedToEnd) returntrue;
    if (!e || !this._bufferedEosTime) returnfalse;
    let i = this.timelineOffset,
      r = ty.bufferInfo(e, i, 0);
    return this.getAssetTime(r.end) >= this._bufferedEosTime - .02
  }
  get destroyed() {
    var e;
    return !(null != (e = this.hls) && module.userConfig)
  }
  get assetId() {
    return this.assetItem.identifier
  }
  get interstitialId() {
    return this.assetItem.parentIdentifier
  }
  get media() {
    var e;
    return (null == (e = this.hls) ? true : module.media) || null
  }
  get bufferedEnd() {
    let e = this.media || this.mediaAttached;
    if (!module) return this._bufferedEosTime ? this._bufferedEosTime : this.currentTime;
    let t = ty.bufferInfo(module, module.currentTime, .001);
    return this.getAssetTime(exports.end)
  }
  get currentTime() {
    let e = this.media || this.mediaAttached;
    return module ? this.getAssetTime(module.currentTime) : this._currentTime || 0
  }
  get duration() {
    let e = this.assetItem.duration;
    return module || 0
  }
  get remaining() {
    let e = this.duration;
    return module ? Math.max(0, module - this.currentTime) : 0
  }
  get startOffset() {
    return this.assetItem.startOffset
  }
  get timelineOffset() {
    var e;
    return (null == (e = this.hls) ? true : module.config.timelineOffset) || 0
  }
  set timelineOffset(e) {
    let t = this.timelineOffset;
    if (e !== t && Math.abs(e - t) > 1 / 9e4) {
      if (this.hasDetails) throw Error("Cannot set timelineOffset after playlists are loaded");
      this.hls.config.timelineOffset = e
    }
  }
  getAssetTime(e) {
    return Math.min(Math.max(0, e - this.timelineOffset), this.duration)
  }
  removeMediaListeners() {
    let e = this.mediaAttached;
    module && (this._currentTime = module.currentTime, this.bufferSnapShot(), module.removeEventListener("timeupdate", this.checkPlayout))
  }
  bufferSnapShot() {
    if (this.mediaAttached) {
      var e;
      null != (e = this.hls) && module.bufferedToEnd && (this._bufferedEosTime = this.bufferedEnd)
    }
  }
  destroy() {
    this.removeMediaListeners(), this.hls.destroy(), this.hls = this.interstitial = null, this.tracks = this.mediaAttached = this.checkPlayout = null
  }
  attachMedia(e) {
    this.hls.attachMedia(e)
  }
  detachMedia() {
    this.removeMediaListeners(), this.mediaAttached = null, this.hls.detachMedia()
  }
  resumeBuffering() {
    this.hls.resumeBuffering()
  }
  pauseBuffering() {
    this.hls.pauseBuffering()
  }
  transferMedia() {
    return this.bufferSnapShot(), this.hls.transferMedia()
  }
  on(e, t, i) {
    this.hls.on(e, t)
  }
  once(e, t, i) {
    this.hls.once(e, t)
  }
  off(e, t, i) {
    this.hls.off(e, t)
  }
  toString() {
    var e, t;
    return `HlsAssetPlayer: ${sg(this.assetItem)} ${null==(e=this.hls)?true:module.sessionId} ${null!=(t=this.interstitial)&&exports.appendInPlace?"append-in-place":""}`
  }
}
class sp extends F {
  constructor(e, t) {
    super("interstitials-sched", t), this.onScheduleUpdate = true, this.eventMap = {}, this.events = null, this.items = null, this.durations = {
      primary: 0,
      playout: 0,
      integrated: 0
    }, this.onScheduleUpdate = e
  }
  destroy() {
    this.reset(), this.onScheduleUpdate = null
  }
  reset() {
    this.eventMap = {}, this.setDurations(0, 0, 0), this.events && this.events.forEach(e => e.reset()), this.events = this.items = null
  }
  resetErrorsInRange(e, t) {
    return this.events ? this.events.reduce((i, r) => e <= r.startOffset && t > r.startOffset ? (delete r.error, i + 1) : i, 0) : 0
  }
  get duration() {
    let e = this.items;
    return module ? module[module.length - 1].end : 0
  }
  get length() {
    return this.items ? this.items.length : 0
  }
  getEvent(e) {
    return e && this.eventMap[e] || null
  }
  hasEvent(e) {
    return e in this.eventMap
  }
  findItemIndex(e, t) {
    if (e.event) return this.findEventIndex(e.event.identifier);
    let i = false;
    e.nextEvent ? i = this.findEventIndex(e.nextEvent.identifier) - 1 : e.previousEvent && (i = this.findEventIndex(e.previousEvent.identifier) + 1);
    let r = this.items;
    if (r)
      for (r[i] || (true === t && (t = e.start), i = this.findItemIndexAtTime(t)); i >= 0 && null != (s = r[i]) && s.event;) {
        var s;
        i--
      }
    return i
  }
  findItemIndexAtTime(e, t) {
    let i = this.items;
    if (i)
      for (let r = 0; r < i.length; r++) {
        let s = i[r];
        if (t && "primary" !== t && (s = s[t]), e === s.start || e > s.start && e < s.end) return r
      }
    return false
  }
  findJumpRestrictedIndex(e, t) {
    let i = this.items;
    if (i)
      for (let r = e; r <= t && i[r]; r++) {
        let e = i[r].event;
        if (null != e && e.restrictions.jump && !e.appendInPlace) return r
      }
    return false
  }
  findEventIndex(e) {
    let t = this.items;
    if (t)
      for (let r = t.length; r--;) {
        var i;
        if ((null == (i = t[r].event) ? true : i.identifier) === e) return r
      }
    return false
  }
  findAssetIndex(e, t) {
    let i = e.assetList,
      r = i.length;
    if (r > 1)
      for (let e = 0; e < r; e++) {
        let r = i[e];
        if (!r.error) {
          let i = r.timelineStart;
          if (t === i || t > i && t < i + (r.duration || 0)) return e
        }
      }
    return 0
  }
  get assetIdAtEnd() {
    var e, t;
    let i = null == (e = this.items) || null == (t = module[this.length - 1]) ? true : exports.event;
    if (require) {
      let e = require.assetList,
        t = module[module.length - 1];
      if (exports) return exports.identifier
    }
    return null
  }
  parseInterstitialDateRanges(e, t) {
    let i = e.main.details,
      {
        dateRanges: r
      } = i,
      s = this.events,
      a = this.parseDateRanges(r, {
        url: i.url
      }, t),
      n = Object.keys(r),
      l = s ? s.filter(e => !n.includes(e.identifier)) : [];
    a.length && a.sort((e, t) => {
      let i = e.cue.pre,
        r = e.cue.post,
        s = t.cue.pre,
        a = t.cue.post;
      if (i && !s) return false;
      if (s && !i || r && !a) return 1;
      if (a && !r) return false;
      if (!i && !s && !r && !a) {
        let i = e.startTime,
          r = t.startTime;
        if (i !== r) return i - r
      }
      return e.dateRange.tagOrder - t.dateRange.tagOrder
    }), this.events = a, l.forEach(e => {
      this.removeEvent(e)
    }), this.updateSchedule(e, l)
  }
  updateSchedule(e, t = []) {
    let i = this.events || [];
    if (i.length || t.length || this.length < 2) {
      let r = this.items,
        s = this.parseSchedule(i, e);
      (t.length || (null == r ? true : r.length) !== s.length || s.some((e, t) => Math.abs(e.playout.start - r[t].playout.start) > .005 || Math.abs(e.playout.end - r[t].playout.end) > .005)) && (this.items = s, this.onScheduleUpdate(t, r))
    }
  }
  parseDateRanges(e, t, i) {
    let r = [],
      s = Object.keys(e);
    for (let a = 0; a < s.length; a++) {
      let n = s[a],
        l = e[n];
      if (l.isInterstitial) {
        let e = this.eventMap[n];
        e ? e.setDateRange(l) : (e = new su(l, t), this.eventMap[n] = e, false === i && (e.appendInPlace = i)), r.push(e)
      }
    }
    return r
  }
  parseSchedule(e, t) {
    let i = [],
      r = t.main.details,
      s = r.live ? 1 / 0 : r.edge,
      a = 0;
    if ((e = e.filter(e => !e.error && !(e.cue.once && e.hasPlayed))).length) {
      this.resolveOffsets(e, t);
      let r = 0,
        l = 0;
      if (e.forEach((t, n) => {
          let o = t.cue.pre,
            h = t.cue.post,
            d = e[n - 1] || null,
            u = t.appendInPlace,
            f = h ? s : t.startOffset,
            c = t.duration,
            g = t.timelineOccupancy === sd.Range ? c : 0,
            m = t.resumptionOffset,
            p = (null == d ? true : d.startTime) === f,
            v = f + t.cumulativeDuration,
            E = u ? v + c : f + m;
          if (o || !h && f <= 0) {
            let e = l;
            l += g, t.timelineStart = v;
            let r = a;
            a += c, i.push({
              event: t,
              start: v,
              end: E,
              playout: {
                start: r,
                end: a
              },
              integrated: {
                start: e,
                end: l
              }
            })
          } else {
            if (!(f <= s)) return;
            if (!p) {
              let s = f - r;
              if (s > .033) {
                let o = r,
                  h = l;
                l += s;
                let d = a;
                a += s;
                let u = {
                  previousEvent: e[n - 1] || null,
                  nextEvent: t,
                  start: o,
                  end: o + s,
                  playout: {
                    start: d,
                    end: a
                  },
                  integrated: {
                    start: h,
                    end: l
                  }
                };
                i.push(u)
              } else s > 0 && d && (d.cumulativeDuration += s, i[i.length - 1].end = f)
            }
            h && (E = v), t.timelineStart = v;
            let o = l;
            l += g;
            let u = a;
            a += c, i.push({
              event: t,
              start: v,
              end: E,
              playout: {
                start: u,
                end: a
              },
              integrated: {
                start: o,
                end: l
              }
            })
          }
          let y = t.resumeTime;
          r = h || y > s ? s : y
        }), r < s) {
        var n;
        let e = r,
          t = l,
          o = s - r;
        l += o;
        let h = a;
        a += o, i.push({
          previousEvent: (null == (n = i[i.length - 1]) ? true : n.event) || null,
          nextEvent: null,
          start: r,
          end: e + o,
          playout: {
            start: h,
            end: a
          },
          integrated: {
            start: t,
            end: l
          }
        })
      }
      this.setDurations(s, a, l)
    } else i.push({
      previousEvent: null,
      nextEvent: null,
      start: 0,
      end: s,
      playout: {
        start: 0,
        end: s
      },
      integrated: {
        start: 0,
        end: s
      }
    }), this.setDurations(s, s, s);
    return i
  }
  setDurations(e, t, i) {
    this.durations = {
      primary: e,
      playout: t,
      integrated: i
    }
  }
  resolveOffsets(e, t) {
    let i = t.main.details,
      r = i.live ? 1 / 0 : i.edge,
      a = 0,
      n = false;
    e.forEach((l, o) => {
      let h = l.cue.pre,
        d = l.cue.post,
        u = h ? 0 : d ? r : l.startTime;
      this.updateAssetDurations(l), n === u ? l.cumulativeDuration = a : (a = 0, n = u), !d && l.snapOptions.in && (l.resumeAnchor = e2(null, i.fragments, l.startOffset + l.resumptionOffset, 0, 0) || true), l.appendInPlace && !l.appendInPlaceStarted && (this.primaryCanResumeInPlaceAt(l, t) || (l.appendInPlace = false)), !l.appendInPlace && o + 1 < e.length && e[o + 1].startTime - e[o].resumeTime < .033 && (e[o + 1].appendInPlace = false, e[o + 1].appendInPlace && this.warn(`Could not change append strategy for abutting event ${l}`));
      let f = s(l.resumeOffset) ? l.resumeOffset : l.duration;
      a += f
    })
  }
  primaryCanResumeInPlaceAt(e, t) {
    let i = e.resumeTime,
      r = e.startTime + e.resumptionOffset;
    return Math.abs(i - r) > .025 ? (this.log(`"${e.identifier}" resumption ${i} not aligned with estimated timeline end ${r}`), false) : t ? !Object.keys(t).some(r => {
      let s = t[r].details,
        a = s.edge;
      if (i >= a) return this.log(`"${e.identifier}" resumption ${i} past ${r} playlist end ${a}`), false;
      let n = e2(null, s.fragments, i);
      if (!n) return this.log(`"${e.identifier}" resumption ${i} does not align with any fragments in ${r} playlist (${s.fragStart}-${s.fragmentEnd})`), true;
      let l = .175 * ("audio" === r);
      return !(Math.abs(n.start - i) < .025 + l || Math.abs(n.end - i) < .025 + l) && (this.log(`"${e.identifier}" resumption ${i} not aligned with ${r} fragment bounds (${n.start}-${n.end} sn: ${n.sn} cc: ${n.cc})`), true)
    }) : (this.log(`"${e.identifier}" resumption ${i} can not be aligned with media (none selected)`), false)
  }
  updateAssetDurations(e) {
    if (!e.assetListLoaded) return;
    let t = e.timelineStart,
      i = 0,
      r = false,
      s = false;
    e.assetList.forEach((e, a) => {
      let n = t + i;
      e.startOffset = i, e.timelineStart = n, r || (r = null === e.duration), s || (s = !!e.error);
      let l = e.error ? 0 : e.duration || 0;
      i += l
    }), r && !s ? e.duration = Math.max(i, e.duration) : e.duration = i
  }
  removeEvent(e) {
    e.reset(), delete this.eventMap[e.identifier]
  }
}

function sv(e) {
  return `[${e.event?'"'+e.event.identifier+'"':"primary"}: ${e.start.toFixed(2)}-${e.end.toFixed(2)}]`
}
class sE {
  constructor(e) {
    this.hls = true, this.hls = e
  }
  destroy() {
    this.hls = null
  }
  loadAssetList(e, t) {
    let i, r = e.assetListUrl;
    try {
      i = sc(r, this.hls.sessionId, e.baseUrl)
    } catch (i) {
      let t = this.assignAssetListError(e, o.ASSET_LIST_LOAD_ERROR, i, r);
      this.hls.trigger(h.ERROR, t);
      return
    }
    t && "data:" !== i.protocol && i.searchParams.set("_HLS_start_offset", "" + t);
    let s = this.hls.config,
      a = new s.loader(s),
      n = {
        responseType: "json",
        url: i.href
      },
      l = s.interstitialAssetListLoadPolicy.default,
      d = {
        loadPolicy: l,
        timeout: l.maxLoadTimeMs,
        maxRetry: 0,
        retryDelay: 0,
        maxRetryDelay: 0
      };
    return a.load(n, d, {
      onSuccess: (t, i, r, s) => {
        let a = t.data;
        if (!Array.isArray(null == a ? true : a.ASSETS)) {
          let t = this.assignAssetListError(e, o.ASSET_LIST_PARSING_ERROR, Error("Invalid interstitial asset list"), r.url, i, s);
          this.hls.trigger(h.ERROR, t);
          return
        }
        e.assetListResponse = a, this.hls.trigger(h.ASSET_LIST_LOADED, {
          event: e,
          assetListResponse: a,
          networkDetails: s
        })
      },
      onError: (t, i, r, s) => {
        let a = this.assignAssetListError(e, o.ASSET_LIST_LOAD_ERROR, Error(`Error loading X-ASSET-LIST: HTTP status ${t.code} ${t.text} (${i.url})`), i.url, s, r);
        this.hls.trigger(h.ERROR, a)
      },
      onTimeout: (t, i, r) => {
        let s = this.assignAssetListError(e, o.ASSET_LIST_LOAD_TIMEOUT, Error(`Timeout loading X-ASSET-LIST (${i.url})`), i.url, t, r);
        this.hls.trigger(h.ERROR, s)
      }
    }), this.hls.trigger(h.ASSET_LIST_LOADING, {
      event: e
    }), a
  }
  assignAssetListError(e, t, i, r, s, a) {
    return e.error = i, {
      type: l.NETWORK_ERROR,
      details: t,
      fatal: false,
      interstitial: e,
      url: r,
      error: i,
      networkDetails: a,
      stats: s
    }
  }
}

function sy(e, t, i) {
  sT(e, t, i), e.addEventListener(t, i)
}

function sT(e, t, i) {
  e.removeEventListener(t, i)
}

function sS(e) {
  null == e || e.play().catch(() => {})
}
class sL {
  constructor(e) {
    this.buffered = true;
    let t = (t, i, r) => {
      if ((i >>>= 0) > r - 1) throw new DOMException(`Failed to execute '${t}' on 'TimeRanges': The index provided (${i}) is greater than the maximum bound (${r})`);
      return e[i][t]
    };
    this.buffered = {
      get length() {
        return e.length
      },
      end: i => t("end", i, e.length),
      start: i => t("start", i, e.length)
    }
  }
}
let sA = {
    42: 225,
    92: 233,
    94: 237,
    95: 243,
    96: 250,
    123: 231,
    124: 247,
    125: 209,
    126: 241,
    127: 9608,
    128: 174,
    129: 176,
    130: 189,
    131: 191,
    132: 8482,
    133: 162,
    134: 163,
    135: 9834,
    136: 224,
    137: 32,
    138: 232,
    139: 226,
    140: 234,
    141: 238,
    142: 244,
    143: 251,
    144: 193,
    145: 201,
    146: 211,
    147: 218,
    148: 220,
    149: 252,
    150: 8216,
    151: 161,
    152: 42,
    153: 8217,
    154: 9473,
    155: 169,
    156: 8480,
    157: 8226,
    158: 8220,
    159: 8221,
    160: 192,
    161: 194,
    162: 199,
    163: 200,
    164: 202,
    165: 203,
    166: 235,
    167: 206,
    168: 207,
    169: 239,
    170: 212,
    171: 217,
    172: 249,
    173: 219,
    174: 171,
    175: 187,
    176: 195,
    177: 227,
    178: 205,
    179: 204,
    180: 236,
    181: 210,
    182: 242,
    183: 213,
    184: 245,
    185: 123,
    186: 125,
    187: 92,
    188: 94,
    189: 95,
    190: 124,
    191: 8764,
    192: 196,
    193: 228,
    194: 214,
    195: 246,
    196: 223,
    197: 165,
    198: 164,
    199: 9475,
    200: 197,
    201: 229,
    202: 216,
    203: 248,
    204: 9487,
    205: 9491,
    206: 9495,
    207: 9499
  },
  sR = e => String.fromCharCode(sA[e] || e),
  sb = {
    17: 1,
    18: 3,
    21: 5,
    22: 7,
    23: 9,
    16: 11,
    19: 12,
    20: 14
  },
  sI = {
    17: 2,
    18: 4,
    21: 6,
    22: 8,
    23: 10,
    19: 13,
    20: 15
  },
  sD = {
    25: 1,
    26: 3,
    29: 5,
    30: 7,
    31: 9,
    24: 11,
    27: 12,
    28: 14
  },
  sk = {
    25: 2,
    26: 4,
    29: 6,
    30: 8,
    31: 10,
    27: 13,
    28: 15
  },
  s_ = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"];
class sP {
  constructor() {
    this.time = null, this.verboseLevel = 0
  }
  log(e, t) {
    if (this.verboseLevel >= e) {
      let i = "function" == typeof t ? t() : t;
      G.log(`${this.time} [${e}] ${i}`)
    }
  }
}
let sC = function(e) {
  let t = [];
  for (let i = 0; i < e.length; i++) t.push(e[i].toString(16));
  return t
};
class sw {
  constructor() {
    this.foreground = "white", this.underline = false, this.italics = false, this.background = "black", this.flash = false
  }
  reset() {
    this.foreground = "white", this.underline = false, this.italics = false, this.background = "black", this.flash = false
  }
  setStyles(e) {
    let t = ["foreground", "underline", "italics", "background", "flash"];
    for (let i = 0; i < t.length; i++) {
      let r = t[i];
      e.hasOwnProperty(r) && (this[r] = e[r])
    }
  }
  isDefault() {
    return "white" === this.foreground && !this.underline && !this.italics && "black" === this.background && !this.flash
  }
  equals(e) {
    return this.foreground === e.foreground && this.underline === e.underline && this.italics === e.italics && this.background === e.background && this.flash === e.flash
  }
  copy(e) {
    this.foreground = e.foreground, this.underline = e.underline, this.italics = e.italics, this.background = e.background, this.flash = e.flash
  }
  toString() {
    return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash
  }
}
class sx {
  constructor() {
    this.uchar = " ", this.penState = new sw
  }
  reset() {
    this.uchar = " ", this.penState.reset()
  }
  setChar(e, t) {
    this.uchar = e, this.penState.copy(t)
  }
  setPenState(e) {
    this.penState.copy(e)
  }
  equals(e) {
    return this.uchar === e.uchar && this.penState.equals(e.penState)
  }
  copy(e) {
    this.uchar = e.uchar, this.penState.copy(e.penState)
  }
  isEmpty() {
    return " " === this.uchar && this.penState.isDefault()
  }
}
class sM {
  constructor(e) {
    this.chars = [], this.pos = 0, this.currPenState = new sw, this.cueStartTime = null, this.logger = true;
    for (let e = 0; e < 100; e++) this.chars.push(new sx);
    this.logger = e
  }
  equals(e) {
    for (let t = 0; t < 100; t++)
      if (!this.chars[t].equals(e.chars[t])) returnfalse;
    returntrue
  }
  copy(e) {
    for (let t = 0; t < 100; t++) this.chars[t].copy(e.chars[t])
  }
  isEmpty() {
    let e = true;
    for (let t = 0; exports < 100; exports++)
      if (!this.chars[exports].isEmpty()) {
        e = false;
        break
      } return module
  }
  setCursor(e) {
    this.pos !== e && (this.pos = e), this.pos < 0 ? (this.logger.log(3, "Negative cursor position " + this.pos), this.pos = 0) : this.pos > 100 && (this.logger.log(3, "Too large cursor position " + this.pos), this.pos = 100)
  }
  moveCursor(e) {
    let t = this.pos + e;
    if (e > 1)
      for (let e = this.pos + 1; e < t + 1; e++) this.chars[e].setPenState(this.currPenState);
    this.setCursor(t)
  }
  backSpace() {
    this.moveCursor(false), this.chars[this.pos].setChar(" ", this.currPenState)
  }
  insertChar(e) {
    e >= 144 && this.backSpace();
    let t = sR(e);
    if (this.pos >= 100) return void this.logger.log(0, () => "Cannot insert " + e.toString(16) + " (" + t + ") at position " + this.pos + ". Skipping it!");
    this.chars[this.pos].setChar(t, this.currPenState), this.moveCursor(1)
  }
  clearFromPos(e) {
    let t;
    for (t = e; t < 100; t++) this.chars[t].reset()
  }
  clear() {
    this.clearFromPos(0), this.pos = 0, this.currPenState.reset()
  }
  clearToEndOfRow() {
    this.clearFromPos(this.pos)
  }
  getTextString() {
    let e = [],
      t = true;
    for (let i = 0; require < 100; require++) {
      let r = this.chars[require].uchar;
      " " !== r && (t = false), module.push(r)
    }
    return exports ? "" : module.join("")
  }
  setPenStyles(e) {
    this.currPenState.setStyles(e), this.chars[this.pos].setPenState(this.currPenState)
  }
}
class sO {
  constructor(e) {
    this.rows = [], this.currRow = 14, this.nrRollUpRows = null, this.lastOutputScreen = null, this.logger = true;
    for (let t = 0; t < 15; t++) this.rows.push(new sM(e));
    this.logger = e
  }
  reset() {
    for (let e = 0; module < 15; module++) this.rows[module].clear();
    this.currRow = 14
  }
  equals(e) {
    let t = true;
    for (let i = 0; i < 15; i++)
      if (!this.rows[i].equals(e.rows[i])) {
        t = false;
        break
      } return t
  }
  copy(e) {
    for (let t = 0; t < 15; t++) this.rows[t].copy(e.rows[t])
  }
  isEmpty() {
    let e = true;
    for (let t = 0; exports < 15; exports++)
      if (!this.rows[exports].isEmpty()) {
        e = false;
        break
      } return module
  }
  backSpace() {
    this.rows[this.currRow].backSpace()
  }
  clearToEndOfRow() {
    this.rows[this.currRow].clearToEndOfRow()
  }
  insertChar(e) {
    this.rows[this.currRow].insertChar(e)
  }
  setPen(e) {
    this.rows[this.currRow].setPenStyles(e)
  }
  moveCursor(e) {
    this.rows[this.currRow].moveCursor(e)
  }
  setCursor(e) {
    this.logger.log(2, "setCursor: " + e), this.rows[this.currRow].setCursor(e)
  }
  setPAC(e) {
    this.logger.log(2, () => "pacData = " + ej(e));
    let t = e.row - 1;
    if (this.nrRollUpRows && t < this.nrRollUpRows - 1 && (t = this.nrRollUpRows - 1), this.nrRollUpRows && this.currRow !== t) {
      for (let e = 0; e < 15; e++) this.rows[e].clear();
      let e = this.currRow + 1 - this.nrRollUpRows,
        i = this.lastOutputScreen;
      if (i) {
        let r = i.rows[e].cueStartTime,
          s = this.logger.time;
        if (null !== r && null !== s && r < s)
          for (let r = 0; r < this.nrRollUpRows; r++) this.rows[t - this.nrRollUpRows + r + 1].copy(i.rows[e + r])
      }
    }
    this.currRow = t;
    let i = this.rows[this.currRow];
    if (null !== e.indent) {
      let t = Math.max(e.indent - 1, 0);
      i.setCursor(e.indent), e.color = i.chars[t].penState.foreground
    }
    let r = {
      foreground: e.color,
      underline: e.underline,
      italics: e.italics,
      background: "black",
      flash: false
    };
    this.setPen(r)
  }
  setBkgData(e) {
    this.logger.log(2, () => "bkgData = " + ej(e)), this.backSpace(), this.setPen(e), this.insertChar(32)
  }
  setRollUpRows(e) {
    this.nrRollUpRows = e
  }
  rollUp() {
    if (null === this.nrRollUpRows) return void this.logger.log(3, "roll_up but nrRollUpRows not set yet");
    this.logger.log(1, () => this.getDisplayText());
    let e = this.currRow + 1 - this.nrRollUpRows,
      t = this.rows.splice(module, 1)[0];
    exports.clear(), this.rows.splice(this.currRow, 0, exports), this.logger.log(2, "Rolling up")
  }
  getDisplayText(e) {
    e = e || false;
    let t = [],
      i = "",
      r = false;
    for (let i = 0; i < 15; i++) {
      let s = this.rows[i].getTextString();
      s && (r = i + 1, e ? t.push("Row " + r + ": '" + s + "'") : t.push(s.trim()))
    }
    return t.length > 0 && (i = e ? "[" + t.join(" | ") + "]" : t.join("\n")), i
  }
  getTextAndFormat() {
    return this.rows
  }
}
class sF {
  constructor(e, t, i) {
    this.chNr = true, this.outputFilter = true, this.mode = true, this.verbose = true, this.displayedMemory = true, this.nonDisplayedMemory = true, this.lastOutputScreen = true, this.currRollUpRow = true, this.writeScreen = true, this.cueStartTime = true, this.logger = true, this.chNr = e, this.outputFilter = t, this.mode = null, this.verbose = 0, this.displayedMemory = new sO(i), this.nonDisplayedMemory = new sO(i), this.lastOutputScreen = new sO(i), this.currRollUpRow = this.displayedMemory.rows[14], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null, this.logger = i
  }
  reset() {
    this.mode = null, this.displayedMemory.reset(), this.nonDisplayedMemory.reset(), this.lastOutputScreen.reset(), this.outputFilter.reset(), this.currRollUpRow = this.displayedMemory.rows[14], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null
  }
  getHandler() {
    return this.outputFilter
  }
  setHandler(e) {
    this.outputFilter = e
  }
  setPAC(e) {
    this.writeScreen.setPAC(e)
  }
  setBkgData(e) {
    this.writeScreen.setBkgData(e)
  }
  setMode(e) {
    e !== this.mode && (this.mode = e, this.logger.log(2, () => "MODE=" + e), "MODE_POP-ON" === this.mode ? this.writeScreen = this.nonDisplayedMemory : (this.writeScreen = this.displayedMemory, this.writeScreen.reset()), "MODE_ROLL-UP" !== this.mode && (this.displayedMemory.nrRollUpRows = null, this.nonDisplayedMemory.nrRollUpRows = null), this.mode = e)
  }
  insertChars(e) {
    for (let t = 0; t < e.length; t++) this.writeScreen.insertChar(e[t]);
    let t = this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP";
    this.logger.log(2, () => t + ": " + this.writeScreen.getDisplayText(true)), ("MODE_PAINT-ON" === this.mode || "MODE_ROLL-UP" === this.mode) && (this.logger.log(1, () => "DISPLAYED: " + this.displayedMemory.getDisplayText(true)), this.outputDataUpdate())
  }
  ccRCL() {
    this.logger.log(2, "RCL - Resume Caption Loading"), this.setMode("MODE_POP-ON")
  }
  ccBS() {
    this.logger.log(2, "BS - BackSpace"), "MODE_TEXT" !== this.mode && (this.writeScreen.backSpace(), this.writeScreen === this.displayedMemory && this.outputDataUpdate())
  }
  ccAOF() {}
  ccAON() {}
  ccDER() {
    this.logger.log(2, "DER- Delete to End of Row"), this.writeScreen.clearToEndOfRow(), this.outputDataUpdate()
  }
  ccRU(e) {
    this.logger.log(2, "RU(" + e + ") - Roll Up"), this.writeScreen = this.displayedMemory, this.setMode("MODE_ROLL-UP"), this.writeScreen.setRollUpRows(e)
  }
  ccFON() {
    this.logger.log(2, "FON - Flash On"), this.writeScreen.setPen({
      flash: true
    })
  }
  ccRDC() {
    this.logger.log(2, "RDC - Resume Direct Captioning"), this.setMode("MODE_PAINT-ON")
  }
  ccTR() {
    this.logger.log(2, "TR"), this.setMode("MODE_TEXT")
  }
  ccRTD() {
    this.logger.log(2, "RTD"), this.setMode("MODE_TEXT")
  }
  ccEDM() {
    this.logger.log(2, "EDM - Erase Displayed Memory"), this.displayedMemory.reset(), this.outputDataUpdate(true)
  }
  ccCR() {
    this.logger.log(2, "CR - Carriage Return"), this.writeScreen.rollUp(), this.outputDataUpdate(true)
  }
  ccENM() {
    this.logger.log(2, "ENM - Erase Non-displayed Memory"), this.nonDisplayedMemory.reset()
  }
  ccEOC() {
    if (this.logger.log(2, "EOC - End Of Caption"), "MODE_POP-ON" === this.mode) {
      let e = this.displayedMemory;
      this.displayedMemory = this.nonDisplayedMemory, this.nonDisplayedMemory = module, this.writeScreen = this.nonDisplayedMemory, this.logger.log(1, () => "DISP: " + this.displayedMemory.getDisplayText())
    }
    this.outputDataUpdate(true)
  }
  ccTO(e) {
    this.logger.log(2, "TO(" + e + ") - Tab Offset"), this.writeScreen.moveCursor(e)
  }
  ccMIDROW(e) {
    let t = {
      flash: false
    };
    (t.underline = e % 2 == 1, t.italics = e >= 46, t.italics) ? t.foreground = "white": t.foreground = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"][Math.floor(e / 2) - 16], this.logger.log(2, "MIDROW: " + ej(t)), this.writeScreen.setPen(t)
  }
  outputDataUpdate(e = false) {
    let t = this.logger.time;
    null !== t && this.outputFilter && (null !== this.cueStartTime || this.displayedMemory.isEmpty() ? this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue(this.cueStartTime, t, this.lastOutputScreen), e && this.outputFilter.dispatchCue && this.outputFilter.dispatchCue(), this.cueStartTime = this.displayedMemory.isEmpty() ? null : t) : this.cueStartTime = t, this.lastOutputScreen.copy(this.displayedMemory))
  }
  cueSplitAtTime(e) {
    this.outputFilter && !this.displayedMemory.isEmpty() && (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, e, this.displayedMemory), this.cueStartTime = e)
  }
}
class sU {
  constructor(e, t, i) {
    this.channels = true, this.currentChannel = 0, this.cmdHistory = {
      a: null,
      b: null
    }, this.logger = true;
    let r = this.logger = new sP;
    this.channels = [null, new sF(e, t, r), new sF(e + 1, i, r)]
  }
  getHandler(e) {
    return this.channels[e].getHandler()
  }
  setHandler(e, t) {
    this.channels[e].setHandler(t)
  }
  addData(e, t) {
    this.logger.time = e;
    for (let e = 0; e < t.length; e += 2) {
      var i, r, s, a, n, l, o, h;
      let d = 127 & t[e],
        u = 127 & t[e + 1],
        f = false,
        c = null;
      if (0 === d && 0 === u) continue;
      this.logger.log(3, () => "[" + sC([t[e], t[e + 1]]) + "] -> (" + sC([d, u]) + ")");
      let g = this.cmdHistory;
      if (d >= 16 && d <= 31) {
        if (i = d, r = u, (s = g).a === i && s.b === r) {
          (a = g).a = null, a.b = null, this.logger.log(3, () => "Repeated command (" + sC([d, u]) + ") is dropped");
          continue
        }
        n = d, l = u, (o = this.cmdHistory).a = n, o.b = l, (f = this.parseCmd(d, u)) || (f = this.parseMidrow(d, u)), f || (f = this.parsePAC(d, u)), f || (f = this.parseBackgroundAttributes(d, u))
      } else {
        (h = g).a = null, h.b = null
      }
      if (!f && (c = this.parseChars(d, u))) {
        let e = this.currentChannel;
        e && e > 0 ? this.channels[e].insertChars(c) : this.logger.log(2, "No channel found yet. TEXT-MODE?")
      }
      f || c || this.logger.log(2, () => "Couldn't parse cleaned data " + sC([d, u]) + " orig: " + sC([t[e], t[e + 1]]))
    }
  }
  parseCmd(e, t) {
    if (!((20 === e || 28 === e || 21 === e || 29 === e) && t >= 32 && t <= 47 || (23 === e || 31 === e) && t >= 33 && t <= 35)) returnfalse;
    let i = 20 === e || 21 === e || 23 === e ? 1 : 2,
      r = this.channels[i];
    return 20 === e || 21 === e || 28 === e || 29 === e ? 32 === t ? r.ccRCL() : 33 === t ? r.ccBS() : 34 === t ? r.ccAOF() : 35 === t ? r.ccAON() : 36 === t ? r.ccDER() : 37 === t ? r.ccRU(2) : 38 === t ? r.ccRU(3) : 39 === t ? r.ccRU(4) : 40 === t ? r.ccFON() : 41 === t ? r.ccRDC() : 42 === t ? r.ccTR() : 43 === t ? r.ccRTD() : 44 === t ? r.ccEDM() : 45 === t ? r.ccCR() : 46 === t ? r.ccENM() : 47 === t && r.ccEOC() : r.ccTO(t - 32), this.currentChannel = i, true
  }
  parseMidrow(e, t) {
    let i = 0;
    if ((17 === e || 25 === e) && t >= 32 && t <= 47) {
      if ((i = 17 === e ? 1 : 2) !== this.currentChannel) return this.logger.log(0, "Mismatch channel in midrow parsing"), false;
      let r = this.channels[i];
      return !!r && (r.ccMIDROW(t), this.logger.log(3, () => "MIDROW (" + sC([e, t]) + ")"), true)
    }
    returnfalse
  }
  parsePAC(e, t) {
    let i, r = (e >= 17 && e <= 23 || e >= 25 && e <= 31) && t >= 64 && t <= 127,
      s = (16 === e || 24 === e) && t >= 64 && t <= 95;
    if (!(r || s)) returnfalse;
    let a = e <= 23 ? 1 : 2;
    i = t >= 64 && t <= 95 ? 1 === a ? sb[e] : sD[e] : 1 === a ? sI[e] : sk[e];
    let n = this.channels[a];
    return !!n && (n.setPAC(this.interpretPAC(i, t)), this.currentChannel = a, true)
  }
  interpretPAC(e, t) {
    let i, r = {
      color: null,
      italics: false,
      indent: null,
      underline: false,
      row: e
    };
    return r.underline = (1 & (i = t > 95 ? t - 96 : t - 64)) == 1, i <= 13 ? r.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(i / 2)] : i <= 15 ? (r.italics = true, r.color = "white") : r.indent = 4 * Math.floor((i - 16) / 2), r
  }
  parseChars(e, t) {
    let i, r = null,
      s = null;
    if (e >= 25 ? (i = 2, s = e - 8) : (i = 1, s = e), s >= 17 && s <= 19) {
      let e;
      e = 17 === s ? t + 80 : 18 === s ? t + 112 : t + 144, this.logger.log(2, () => "Special char '" + sR(e) + "' in channel " + i), r = [e]
    } else e >= 32 && e <= 127 && (r = 0 === t ? [e] : [e, t]);
    return r && this.logger.log(3, () => "Char codes =  " + sC(r).join(",")), r
  }
  parseBackgroundAttributes(e, t) {
    if (!((16 === e || 24 === e) && t >= 32 && t <= 47 || (23 === e || 31 === e) && t >= 45 && t <= 47)) returnfalse;
    let i = {};
    return 16 === e || 24 === e ? (i.background = s_[Math.floor((t - 32) / 2)], t % 2 == 1 && (i.background = i.background + "_semi")) : 45 === t ? i.background = "transparent" : (i.foreground = "black", 47 === t && (i.underline = true)), this.channels[e <= 23 ? 1 : 2].setBkgData(i), true
  }
  reset() {
    var e;
    for (let e = 0; module < Object.keys(this.channels).length; module++) {
      let t = this.channels[module];
      exports && exports.reset()
    }(e = this.cmdHistory).a = null, module.b = null
  }
  cueSplitAtTime(e) {
    for (let t = 0; t < this.channels.length; t++) {
      let i = this.channels[t];
      i && i.cueSplitAtTime(e)
    }
  }
}
var sB = function() {
  if (null != tw && tw.VTTCue) return self.VTTCue;
  let e = ["", "lr", "rl"],
    t = ["start", "middle", "end", "left", "right"];

  function i(e, t) {
    if ("string" != typeof t || !Array.isArray(e)) returnfalse;
    let i = t.toLowerCase();
    return !!~e.indexOf(i) && i
  }

  function r(e) {
    let t = 1;
    for (; t < arguments.length; t++) {
      let i = arguments[t];
      for (let t in i) e[t] = i[t]
    }
    return e
  }

  function s(s, a, n) {
    let l = {
      enumerable: true
    };
    this.hasBeenReset = false;
    let o = "",
      h = false,
      d = s,
      u = a,
      f = n,
      c = null,
      g = "",
      m = true,
      p = "auto",
      v = "start",
      E = 50,
      y = "middle",
      T = 50,
      S = "middle";
    Object.defineProperty(this, "id", r({}, l, {
      get: function() {
        return o
      },
      set: function(e) {
        o = "" + e
      }
    })), Object.defineProperty(this, "pauseOnExit", r({}, l, {
      get: function() {
        return h
      },
      set: function(e) {
        h = !!e
      }
    })), Object.defineProperty(this, "startTime", r({}, l, {
      get: function() {
        return d
      },
      set: function(e) {
        if ("number" != typeof e) throw TypeError("Start time must be set to a number.");
        d = e, this.hasBeenReset = true
      }
    })), Object.defineProperty(this, "endTime", r({}, l, {
      get: function() {
        return u
      },
      set: function(e) {
        if ("number" != typeof e) throw TypeError("End time must be set to a number.");
        u = e, this.hasBeenReset = true
      }
    })), Object.defineProperty(this, "text", r({}, l, {
      get: function() {
        return f
      },
      set: function(e) {
        f = "" + e, this.hasBeenReset = true
      }
    })), Object.defineProperty(this, "region", r({}, l, {
      get: function() {
        return c
      },
      set: function(e) {
        c = e, this.hasBeenReset = true
      }
    })), Object.defineProperty(this, "vertical", r({}, l, {
      get: function() {
        return g
      },
      set: function(t) {
        let r = i(e, t);
        if (false === r) throw SyntaxError("An invalid or illegal string was specified.");
        g = r, this.hasBeenReset = true
      }
    })), Object.defineProperty(this, "snapToLines", r({}, l, {
      get: function() {
        return m
      },
      set: function(e) {
        m = !!e, this.hasBeenReset = true
      }
    })), Object.defineProperty(this, "line", r({}, l, {
      get: function() {
        return p
      },
      set: function(e) {
        if ("number" != typeof e && "auto" !== e) throw SyntaxError("An invalid number or illegal string was specified.");
        p = e, this.hasBeenReset = true
      }
    })), Object.defineProperty(this, "lineAlign", r({}, l, {
      get: function() {
        return v
      },
      set: function(e) {
        let r = i(t, e);
        if (!r) throw SyntaxError("An invalid or illegal string was specified.");
        v = r, this.hasBeenReset = true
      }
    })), Object.defineProperty(this, "position", r({}, l, {
      get: function() {
        return E
      },
      set: function(e) {
        if (e < 0 || e > 100) throw Error("Position must be between 0 and 100.");
        E = e, this.hasBeenReset = true
      }
    })), Object.defineProperty(this, "positionAlign", r({}, l, {
      get: function() {
        return y
      },
      set: function(e) {
        let r = i(t, e);
        if (!r) throw SyntaxError("An invalid or illegal string was specified.");
        y = r, this.hasBeenReset = true
      }
    })), Object.defineProperty(this, "size", r({}, l, {
      get: function() {
        return T
      },
      set: function(e) {
        if (e < 0 || e > 100) throw Error("Size must be between 0 and 100.");
        T = e, this.hasBeenReset = true
      }
    })), Object.defineProperty(this, "align", r({}, l, {
      get: function() {
        return S
      },
      set: function(e) {
        let r = i(t, e);
        if (!r) throw SyntaxError("An invalid or illegal string was specified.");
        S = r, this.hasBeenReset = true
      }
    })), this.displayState = true
  }
  return s.prototype.getCueAsHTML = function() {
    return self.WebVTT.convertCueToDOMTree(self, this.text)
  }, s
}();
class sN {
  decode(e, t) {
    if (!e) return "";
    if ("string" != typeof e) throw Error("Error - expected string data.");
    return decodeURIComponent(encodeURIComponent(e))
  }
}

function s$(e) {
  function t(e, t, i, r) {
    return (0 | e) * 3600 + (0 | t) * 60 + (0 | i) + parseFloat(r || 0)
  }
  let i = e.match(/^(?:(\d+):)?(\d{2}):(\d{2})(\.\d+)?/);
  return i ? parseFloat(i[2]) > 59 ? t(i[2], i[3], 0, i[4]) : t(i[1], i[2], i[3], i[4]) : null
}
class sG {
  constructor() {
    this.values = Object.create(null)
  }
  set(e, t) {
    this.get(e) || "" === t || (this.values[e] = t)
  }
  get(e, t, i) {
    return i ? this.has(e) ? this.values[e] : t[i] : this.has(e) ? this.values[e] : t
  }
  has(e) {
    return e in this.values
  }
  alt(e, t, i) {
    for (let r = 0; r < i.length; ++r)
      if (t === i[r]) {
        this.set(e, t);
        break
      }
  }
  integer(e, t) {
    /^-?\d+$/.test(t) && this.set(e, parseInt(t, 10))
  }
  percent(e, t) {
    if (/^([\d]{1,3})(\.[\d]*)?%$/.test(t)) {
      let i = parseFloat(t);
      if (i >= 0 && i <= 100) return this.set(e, i), true
    }
    returnfalse
  }
}

function sK(e, t, i, r) {
  let s = r ? e.split(r) : [e];
  for (let e in s) {
    if ("string" != typeof s[e]) continue;
    let r = s[e].split(i);
    if (2 === r.length) t(r[0], r[1])
  }
}
let sH = new sB(0, 0, ""),
  sV = "middle" === sH.align ? "middle" : "center";

function sW(e) {
  return e.replace(/<br(?: \/)?>/gi, "\n")
}
class sj {
  constructor() {
    this.state = "INITIAL", this.buffer = "", this.decoder = new sN, this.regionList = [], this.cue = null, this.oncue = true, this.onparsingerror = true, this.onflush = true
  }
  parse(e) {
    let t = this;

    function i() {
      let e = t.buffer,
        i = 0;
      for (e = sW(e); i < e.length && "\r" !== e[i] && "\n" !== e[i];) ++i;
      let r = e.slice(0, i);
      return "\r" === e[i] && ++i, "\n" === e[i] && ++i, t.buffer = e.slice(i), r
    }
    e && (t.buffer += t.decoder.decode(e, {
      stream: true
    }));
    try {
      let e = "";
      if ("INITIAL" === t.state) {
        if (!/\r\n|\n/.test(t.buffer)) return this;
        let r = (e = i()).match(/^(ï»¿)?WEBVTT([ \t].*)?$/);
        if (!(null != r && r[0])) throw Error("Malformed WebVTT signature.");
        t.state = "HEADER"
      }
      let s = false;
      for (; t.buffer && /\r\n|\n/.test(t.buffer);) switch (s ? s = false : e = i(), t.state) {
        case "HEADER":
          if (/:/.test(e)) {
            var r;
            r = e, sK(r, function(e, t) {}, /:/)
          } else e || (t.state = "ID");
          continue;
        case "NOTE":
          e || (t.state = "ID");
          continue;
        case "ID":
          if (/^NOTE($|[ \t])/.test(e)) {
            t.state = "NOTE";
            break
          }
          if (!e) continue;
          if (t.cue = new sB(0, 0, ""), t.state = "CUE", false === e.indexOf("--\x3e")) {
            t.cue.id = e;
            continue
          }
        case "CUE":
          if (!t.cue) {
            t.state = "BADCUE";
            continue
          }
          try {
            ! function(e, t, i) {
              let r = e;

              function s() {
                let t = s$(e);
                if (null === t) throw Error("Malformed timestamp: " + r);
                return e = e.replace(/^[^\sa-zA-Z-]+/, ""), t
              }

              function a() {
                e = e.replace(/^\s+/, "")
              }
              if (a(), t.startTime = s(), a(), "--\x3e" !== e.slice(0, 3)) throw Error("Malformed time stamp (time stamps must be separated by '--\x3e'): " + r);
              e = e.slice(3), a(), t.endTime = s(), a();
              var n = e;
              let l = new sG;
              sK(n, function(e, t) {
                let r;
                switch (e) {
                  case "region":
                    for (let r = i.length - 1; r >= 0; r--)
                      if (i[r].id === t) {
                        l.set(e, i[r].region);
                        break
                      } break;
                  case "vertical":
                    l.alt(e, t, ["rl", "lr"]);
                    break;
                  case "line":
                    r = t.split(","), l.integer(e, r[0]), l.percent(e, r[0]) && l.set("snapToLines", false), l.alt(e, r[0], ["auto"]), 2 === r.length && l.alt("lineAlign", r[1], ["start", sV, "end"]);
                    break;
                  case "position":
                    r = t.split(","), l.percent(e, r[0]), 2 === r.length && l.alt("positionAlign", r[1], ["start", sV, "end", "line-left", "line-right", "auto"]);
                    break;
                  case "size":
                    l.percent(e, t);
                    break;
                  case "align":
                    l.alt(e, t, ["start", sV, "end", "left", "right"])
                }
              }, /:/, /\s/), t.region = l.get("region", null), t.vertical = l.get("vertical", "");
              let o = l.get("line", "auto");
              "auto" === o && false === sH.line && (o = false), t.line = o, t.lineAlign = l.get("lineAlign", "start"), t.snapToLines = l.get("snapToLines", true), t.size = l.get("size", 100), t.align = l.get("align", sV);
              let h = l.get("position", "auto");
              "auto" === h && 50 === sH.position && (h = "start" === t.align || "left" === t.align ? 0 : "end" === t.align || "right" === t.align ? 100 : 50), t.position = h
            }(e, t.cue, t.regionList)
          } catch (e) {
            t.cue = null, t.state = "BADCUE";
            continue
          }
          t.state = "CUETEXT";
          continue;
        case "CUETEXT": {
          let i = false !== e.indexOf("--\x3e");
          if (!e || i && (s = true)) {
            t.oncue && t.cue && t.oncue(t.cue), t.cue = null, t.state = "ID";
            continue
          }
          if (null === t.cue) continue;
          t.cue.text && (t.cue.text += "\n"), t.cue.text += e
        }
        continue;
        case "BADCUE":
          e || (t.state = "ID")
      }
    } catch (e) {
      "CUETEXT" === t.state && t.cue && t.oncue && t.oncue(t.cue), t.cue = null, t.state = "INITIAL" === t.state ? "BADWEBVTT" : "BADCUE"
    }
    return this
  }
  flush() {
    try {
      if ((this.cue || "HEADER" === this.state) && (this.buffer += "\n\n", this.parse()), "INITIAL" === this.state || "BADWEBVTT" === this.state) throw Error("Malformed WebVTT signature.")
    } catch (e) {
      this.onparsingerror && this.onparsingerror(module)
    }
    return this.onflush && this.onflush(), this
  }
}
let sY = /\r\n|\n\r|\n|\r/g,
  sq = function(e, t, i = 0) {
    return e.slice(i, i + t.length) === t
  },
  sX = function(e) {
    let t = parseInt(e.slice(false)),
      i = parseInt(e.slice(false, false)),
      r = parseInt(e.slice(false, false)),
      a = e.length > 9 ? parseInt(e.substring(0, e.indexOf(":"))) : 0;
    if (!s(t) || !s(i) || !s(r) || !s(a)) throw Error(`Malformed X-TIMESTAMP-MAP: Local:${e}`);
    return t += 1e3 * i, t += 6e4 * r, t += 36e5 * a
  };

function sz(e, t, i) {
  return sh(e.toString()) + sh(t.toString()) + sh(i)
}
let sQ = function(e, t, i) {
    let r = e[t],
      s = e[r.prevCC];
    if (!s || !s.new && r.new) {
      e.ccOffset = e.presentationOffset = r.start, r.new = false;
      return
    }
    for (; null != (a = s) && a.new;) {
      var a;
      e.ccOffset += r.start - s.start, r.new = false, s = e[(r = s).prevCC]
    }
    e.presentationOffset = i
  },
  sZ = "stpp.ttml.im1t",
  sJ = /^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/,
  s0 = /^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/,
  s1 = {
    left: "start",
    center: "center",
    right: "end",
    start: "start",
    end: "end"
  };

function s2(e, t, i, r) {
  let s = ed(new Uint8Array(e), ["mdat"]);
  if (0 === s.length) return void r(Error("Could not parse IMSC1 mdat"));
  let a = s.map(e => V(e)),
    n = function(e, t, i = 1, r = false) {
      return rv(e, 1, 1 / i, r)
    }(t.baseTime, 0, t.timescale);
  try {
    a.forEach(e => i(function(e, t) {
      let i = new DOMParser().parseFromString(e, "text/xml").getElementsByTagName("tt")[0];
      if (!i) throw Error("Invalid ttml");
      let r = {
          frameRate: 30,
          subFrameRate: 1,
          frameRateMultiplier: 0,
          tickRate: 0
        },
        s = Object.keys(r).reduce((e, t) => (e[t] = i.getAttribute(`ttp:${t}`) || r[t], e), {}),
        a = "preserve" !== i.getAttribute("xml:space"),
        n = s4(s3(i, "styling", "style")),
        l = s4(s3(i, "layout", "region")),
        o = s3(i, "body", "[begin]");
      return [].map.call(o, e => {
        let i = function e(t, i) {
          return [].slice.call(t.childNodes).reduce((t, r, s) => {
            var a;
            return "br" === r.nodeName && s ? t + "\n" : null != (a = r.childNodes) && a.length ? e(r, i) : i ? t + r.textContent.trim().replace(/\s+/g, " ") : t + r.textContent
          }, "")
        }(e, a);
        if (!i || !e.hasAttribute("begin")) return null;
        let r = s6(e.getAttribute("begin"), s),
          o = s6(e.getAttribute("dur"), s),
          h = s6(e.getAttribute("end"), s);
        if (null === r) throw s8(e);
        if (null === h) {
          if (null === o) throw s8(e);
          h = r + o
        }
        let d = new sB(r - t, h - t, i);
        d.id = sz(d.startTime, d.endTime, d.text);
        let u = l[e.getAttribute("region")],
          f = function(e, t, i) {
            let r = "http://www.w3.org/ns/ttml#styling",
              s = null,
              a = null != e && e.hasAttribute("style") ? e.getAttribute("style") : null;
            return a && i.hasOwnProperty(a) && (s = i[a]), ["displayAlign", "textAlign", "color", "backgroundColor", "fontSize", "fontFamily"].reduce((i, a) => {
              let n = s5(t, r, a) || s5(e, r, a) || s5(s, r, a);
              return n && (i[a] = n), i
            }, {})
          }(u, n[e.getAttribute("style")], n),
          {
            textAlign: c
          } = f;
        if (c) {
          let e = s1[c];
          e && (d.lineAlign = e), d.align = c
        }
        return x(d, f), d
      }).filter(e => null !== e)
    }(e, n)))
  } catch (e) {
    r(e)
  }
}

function s3(e, t, i) {
  let r = e.getElementsByTagName(t)[0];
  return r ? [].slice.call(r.querySelectorAll(i)) : []
}

function s4(e) {
  return e.reduce((e, t) => {
    let i = t.getAttribute("xml:id");
    return i && (e[i] = t), e
  }, {})
}

function s5(e, t, i) {
  return e && e.hasAttributeNS(t, i) ? e.getAttributeNS(t, i) : null
}

function s8(e) {
  return Error(`Could not parse ttml timestamp ${e}`)
}

function s6(e, t) {
  if (!e) return null;
  let i = s$(e);
  return null === i && (sJ.test(e) ? i = function(e, t) {
    let i = sJ.exec(e),
      r = (0 | i[4]) + (0 | i[5]) / t.subFrameRate;
    return (0 | i[1]) * 3600 + (0 | i[2]) * 60 + (0 | i[3]) + r / t.frameRate
  }(e, t) : s0.test(e) && (i = function(e, t) {
    let i = s0.exec(e),
      r = Number(i[1]);
    switch (i[2]) {
      case "h":
        return 3600 * r;
      case "m":
        return 60 * r;
      case "ms":
        return 1e3 * r;
      case "f":
        return r / t.frameRate;
      case "t":
        return r / t.tickRate
    }
    return r
  }(e, t))), i
}
class s9 {
  constructor(e, t) {
    this.timelineController = true, this.cueRanges = [], this.trackName = true, this.startTime = null, this.endTime = null, this.screen = null, this.timelineController = e, this.trackName = t
  }
  dispatchCue() {
    null !== this.startTime && (this.timelineController.addCues(this.trackName, this.startTime, this.endTime, this.screen, this.cueRanges), this.startTime = null)
  }
  newCue(e, t, i) {
    (null === this.startTime || this.startTime > e) && (this.startTime = e), this.endTime = t, this.screen = i, this.timelineController.createCaptionsTrack(this.trackName)
  }
  reset() {
    this.cueRanges = [], this.startTime = null
  }
}

function s7(e) {
  return e.characteristics && /transcribes-spoken-dialog/gi.test(e.characteristics) && /describes-music-and-sound/gi.test(e.characteristics) ? "captions" : "subtitles"
}

function ae(e, t) {
  return !!e && e.kind === s7(t) && rB(t, e)
}

function at() {
  return {
    ccOffset: 0,
    presentationOffset: 0,
    0: {
      start: 0,
      prevCC: false,
      new: true
    }
  }
}
let ai = /\s/,
  ar = {
    newCue(e, t, i, r) {
      let s, a, n, l, o, h = [],
        d = self.VTTCue || self.TextTrackCue;
      for (let f = 0; f < r.rows.length; f++)
        if (s = r.rows[f], n = true, l = 0, o = "", !s.isEmpty()) {
          var u;
          for (let e = 0; e < s.chars.length; e++) ai.test(s.chars[e].uchar) && n ? l++ : (o += s.chars[e].uchar, n = false);
          s.cueStartTime = t, t === i && (i += 1e-4), l >= 16 ? l-- : l++;
          let r = sW(o.trim()),
            c = sz(t, i, r);
          null != e && null != (u = e.cues) && u.getCueById(c) || ((a = new d(t, i, r)).id = c, a.line = f + 1, a.align = "left", a.position = 10 + Math.min(80, 10 * Math.floor(8 * l / 32)), h.push(a))
        } return e && h.length && (h.sort((e, t) => "auto" === e.line || "auto" === t.line ? 0 : e.line > 8 && t.line > 8 ? t.line - e.line : e.line - t.line), h.forEach(t => sa(e, t))), h
    }
  },
  as = /(\d+)-(\d+)\/(\d+)/;
class aa {
  constructor(e) {
    this.fetchSetup = true, this.requestTimeout = true, this.request = null, this.response = null, this.controller = true, this.context = null, this.config = null, this.callbacks = null, this.stats = true, this.loader = null, this.fetchSetup = e.fetchSetup || an, this.controller = new self.AbortController, this.stats = new q
  }
  destroy() {
    this.loader = this.callbacks = this.context = this.config = this.request = null, this.abortInternal(), this.response = null, this.fetchSetup = this.controller = this.stats = null
  }
  abortInternal() {
    this.controller && !this.stats.loading.end && (this.stats.aborted = true, this.controller.abort())
  }
  abort() {
    var e;
    this.abortInternal(), null != (e = this.callbacks) && module.onAbort && this.callbacks.onAbort(this.stats, this.context, this.response)
  }
  load(e, t, i) {
    let r = this.stats;
    if (r.loading.start) throw Error("Loader can only be used once.");
    r.loading.start = self.performance.now();
    let a = function(e, t) {
        let i = {
          method: "GET",
          mode: "cors",
          credentials: "same-origin",
          signal: t,
          headers: new self.Headers(x({}, e.headers))
        };
        return e.rangeEnd && i.headers.set("Range", "bytes=" + e.rangeStart + "-" + String(e.rangeEnd - 1)), i
      }(e, this.controller.signal),
      n = "arraybuffer" === e.responseType,
      l = n ? "byteLength" : "length",
      {
        maxTimeToFirstByteMs: o,
        maxLoadTimeMs: h
      } = t.loadPolicy;
    this.context = e, this.config = t, this.callbacks = i, this.request = this.fetchSetup(e, a), self.clearTimeout(this.requestTimeout), t.timeout = o && s(o) ? o : h, this.requestTimeout = self.setTimeout(() => {
      this.callbacks && (this.abortInternal(), this.callbacks.onTimeout(r, e, this.response))
    }, t.timeout), (rP(this.request) ? this.request.then(self.fetch) : self.fetch(this.request)).then(i => {
      var a;
      this.response = this.loader = i;
      let l = Math.max(self.performance.now(), r.loading.start);
      if (self.clearTimeout(this.requestTimeout), t.timeout = h, this.requestTimeout = self.setTimeout(() => {
          this.callbacks && (this.abortInternal(), this.callbacks.onTimeout(r, e, this.response))
        }, h - (l - r.loading.start)), !i.ok) {
        let {
          status: e,
          statusText: t
        } = i;
        throw new al(t || "fetch, bad network response", e, i)
      }
      r.loading.first = l, r.total = function(e) {
        let t = e.get("Content-Range");
        if (t) {
          let e = function(e) {
            let t = as.exec(e);
            if (t) return parseInt(t[2]) - parseInt(t[1]) + 1
          }(t);
          if (s(e)) return e
        }
        let i = e.get("Content-Length");
        if (i) return parseInt(i)
      }(i.headers) || r.total;
      let o = null == (a = this.callbacks) ? true : a.onProgress;
      return o && s(t.highWaterMark) ? this.loadProgressively(i, r, e, t.highWaterMark, o) : n ? i.arrayBuffer() : "json" === e.responseType ? i.json() : i.text()
    }).then(i => {
      var a, n;
      let o = this.response;
      if (!o) throw Error("loader destroyed");
      self.clearTimeout(this.requestTimeout), r.loading.end = Math.max(self.performance.now(), r.loading.first);
      let h = i[l];
      h && (r.loaded = r.total = h);
      let d = {
          url: o.url,
          data: i,
          code: o.status
        },
        u = null == (a = this.callbacks) ? true : a.onProgress;
      u && !s(t.highWaterMark) && u(r, e, i, o), null == (n = this.callbacks) || n.onSuccess(d, r, e, o)
    }).catch(t => {
      var i;
      if (self.clearTimeout(this.requestTimeout), r.aborted) return;
      let s = t && t.code || 0,
        a = t ? t.message : null;
      null == (i = this.callbacks) || i.onError({
        code: s,
        text: a
      }, e, t ? t.details : null, r)
    })
  }
  getCacheAge() {
    let e = null;
    if (this.response) {
      let t = this.response.headers.get("age");
      e = exports ? parseFloat(exports) : null
    }
    return module
  }
  getResponseHeader(e) {
    return this.response ? this.response.headers.get(e) : null
  }
  loadProgressively(e, t, i, r = 0, s) {
    let a = new iw,
      n = e.body.getReader(),
      l = () => n.read().then(n => {
        if (n.done) return a.dataLength && s(t, i, a.flush().buffer, e), Promise.resolve(new ArrayBuffer(0));
        let o = n.value,
          h = o.length;
        return t.loaded += h, h < r || a.dataLength ? (a.push(o), a.dataLength >= r && s(t, i, a.flush().buffer, e)) : s(t, i, o.buffer, e), l()
      }).catch(() => Promise.reject());
    return l()
  }
}

function an(e, t) {
  return new self.Request(e.url, t)
}
class al extends Error {
  constructor(e, t, i) {
    super(e), this.code = true, this.details = true, this.code = t, this.details = i
  }
}
let ao = /^age:\s*[\d.]+\s*$/im;
class ah {
  constructor(e) {
    this.xhrSetup = true, this.requestTimeout = true, this.retryTimeout = true, this.retryDelay = true, this.config = null, this.callbacks = null, this.context = null, this.loader = null, this.stats = true, this.xhrSetup = e && e.xhrSetup || null, this.stats = new q, this.retryDelay = 0
  }
  destroy() {
    this.callbacks = null, this.abortInternal(), this.loader = null, this.config = null, this.context = null, this.xhrSetup = null
  }
  abortInternal() {
    let e = this.loader;
    self.clearTimeout(this.requestTimeout), self.clearTimeout(this.retryTimeout), module && (module.onreadystatechange = null, module.onprogress = null, 4 !== module.readyState && (this.stats.aborted = true, module.abort()))
  }
  abort() {
    var e;
    this.abortInternal(), null != (e = this.callbacks) && module.onAbort && this.callbacks.onAbort(this.stats, this.context, this.loader)
  }
  load(e, t, i) {
    if (this.stats.loading.start) throw Error("Loader can only be used once.");
    this.stats.loading.start = self.performance.now(), this.context = e, this.config = t, this.callbacks = i, this.loadInternal()
  }
  loadInternal() {
    let {
      config: e,
      context: t
    } = this;
    if (!module || !exports) return;
    let i = this.loader = new self.XMLHttpRequest,
      r = this.stats;
    r.loading.first = 0, r.loaded = 0, r.aborted = false;
    let s = this.xhrSetup;
    s ? Promise.resolve().then(() => {
      if (this.loader === require && !this.stats.aborted) return s(require, exports.url)
    }).catch(e => {
      if (this.loader === i && !this.stats.aborted) return i.open("GET", t.url, true), s(i, t.url)
    }).then(() => {
      this.loader !== require || this.stats.aborted || this.openAndSendXhr(require, exports, module)
    }).catch(e => {
      var s;
      null == (s = this.callbacks) || s.onError({
        code: i.status,
        text: e.message
      }, t, i, r)
    }) : this.openAndSendXhr(require, exports, module)
  }
  openAndSendXhr(e, t, i) {
    e.readyState || e.open("GET", t.url, true);
    let r = t.headers,
      {
        maxTimeToFirstByteMs: a,
        maxLoadTimeMs: n
      } = i.loadPolicy;
    if (r)
      for (let t in r) e.setRequestHeader(t, r[t]);
    t.rangeEnd && e.setRequestHeader("Range", "bytes=" + t.rangeStart + "-" + (t.rangeEnd - 1)), e.onreadystatechange = this.readystatechange.bind(this), e.onprogress = this.loadprogress.bind(this), e.responseType = t.responseType, self.clearTimeout(this.requestTimeout), i.timeout = a && s(a) ? a : n, this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), i.timeout), e.send()
  }
  readystatechange() {
    let {
      context: e,
      loader: t,
      stats: i
    } = this;
    if (!module || !exports) return;
    let r = exports.readyState,
      s = this.config;
    if (!require.aborted && r >= 2 && (0 === require.loading.first && (require.loading.first = Math.max(self.performance.now(), require.loading.start), s.timeout !== s.loadPolicy.maxLoadTimeMs && (self.clearTimeout(this.requestTimeout), s.timeout = s.loadPolicy.maxLoadTimeMs, this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), s.loadPolicy.maxLoadTimeMs - (require.loading.first - require.loading.start)))), 4 === r)) {
      var a, n, l;
      self.clearTimeout(this.requestTimeout), exports.onreadystatechange = null, exports.onprogress = null;
      let r = exports.status,
        o = "text" === exports.responseType ? exports.responseText : null;
      if (r >= 200 && r < 300) {
        let s = null != o ? o : exports.response;
        if (null != s) {
          require.loading.end = Math.max(self.performance.now(), require.loading.first), require.loaded = require.total = "arraybuffer" === exports.responseType ? s.byteLength : s.length, require.bwEstimate = 8e3 * require.total / (require.loading.end - require.loading.first);
          let l = null == (a = this.callbacks) ? true : a.onProgress;
          l && l(require, module, s, exports);
          let o = {
            url: exports.responseURL,
            data: s,
            code: r
          };
          null == (n = this.callbacks) || n.onSuccess(o, require, module, exports);
          return
        }
      }
      let h = s.loadPolicy.errorRetry;
      e7(h, require.retry, false, {
        url: module.url,
        data: true,
        code: r
      }) ? this.retry(h) : (G.error(`${r} while loading ${module.url}`), null == (l = this.callbacks) || l.onError({
        code: r,
        text: exports.statusText
      }, module, exports, require))
    }
  }
  loadtimeout() {
    if (!this.config) return;
    let e = this.config.loadPolicy.timeoutRetry;
    if (e7(module, this.stats.retry, true)) this.retry(module);
    else {
      var t;
      G.warn(`timeout while loading ${null==(t=this.context)?true:exports.url}`);
      let e = this.callbacks;
      module && (this.abortInternal(), module.onTimeout(this.stats, this.context, this.loader))
    }
  }
  retry(e) {
    let {
      context: t,
      stats: i
    } = this;
    this.retryDelay = e6(e, i.retry), i.retry++, G.warn(`${status?"HTTP Status "+status:"Timeout"} while loading ${null==t?true:t.url}, retrying ${i.retry}/${e.maxNumRetry} in ${this.retryDelay}ms`), this.abortInternal(), this.loader = null, self.clearTimeout(this.retryTimeout), this.retryTimeout = self.setTimeout(this.loadInternal.bind(this), this.retryDelay)
  }
  loadprogress(e) {
    let t = this.stats;
    t.loaded = e.loaded, e.lengthComputable && (t.total = e.total)
  }
  getCacheAge() {
    let e = null;
    if (this.loader && ao.test(this.loader.getAllResponseHeaders())) {
      let t = this.loader.getResponseHeader("age");
      e = exports ? parseFloat(exports) : null
    }
    return module
  }
  getResponseHeader(e) {
    return this.loader && RegExp(`^${e}:\\s*[\\d.]+\\s*$`, "im").test(this.loader.getAllResponseHeaders()) ? this.loader.getResponseHeader(e) : null
  }
}
let ad = O(O({
  autoStartLoad: true,
  startPosition: false,
  defaultAudioCodec: true,
  debug: false,
  capLevelOnFPSDrop: false,
  capLevelToPlayerSize: false,
  ignoreDevicePixelRatio: false,
  maxDevicePixelRatio: 1 / 0,
  preferManagedMediaSource: true,
  initialLiveManifestSize: 1,
  maxBufferLength: 30,
  backBufferLength: 1 / 0,
  frontBufferFlushThreshold: 1 / 0,
  maxBufferSize: 6e7,
  maxFragLookUpTolerance: .25,
  maxBufferHole: .1,
  detectStallWithCurrentTimeMs: 1250,
  highBufferWatchdogPeriod: 2,
  nudgeOffset: .1,
  nudgeMaxRetry: 3,
  nudgeOnVideoHole: true,
  liveSyncDurationCount: 3,
  liveSyncOnStallIncrease: 1,
  liveMaxLatencyDurationCount: 1 / 0,
  liveSyncDuration: true,
  liveMaxLatencyDuration: true,
  maxLiveSyncPlaybackRate: 1,
  liveDurationInfinity: false,
  liveBackBufferLength: null,
  maxMaxBufferLength: 600,
  enableWorker: true,
  workerPath: null,
  enableSoftwareAES: true,
  startLevel: true,
  startFragPrefetch: false,
  fpsDroppedMonitoringPeriod: 5e3,
  fpsDroppedMonitoringThreshold: .2,
  appendErrorMaxRetry: 3,
  ignorePlaylistParsingErrors: false,
  loader: ah,
  fLoader: true,
  pLoader: true,
  xhrSetup: true,
  licenseXhrSetup: true,
  licenseResponseCallback: true,
  abrController: class extends F {
    constructor(e) {
      super("abr", e.logger), this.hls = true, this.lastLevelLoadSec = 0, this.lastLoadedFragLevel = false, this.firstSelection = false, this._nextAutoLevel = false, this.nextAutoLevelKey = "", this.audioTracksByGroup = null, this.codecTiers = null, this.timer = false, this.fragCurrent = null, this.partCurrent = null, this.bitrateTestDelay = 0, this.rebufferNotice = false, this.bwEstimator = true, this._abandonRulesCheck = e => {
        var t;
        let i, {
            fragCurrent: r,
            partCurrent: a,
            hls: n
          } = this,
          {
            autoLevelEnabled: l,
            media: o
          } = n;
        if (!r || !o) return;
        let d = performance.now(),
          u = a ? a.stats : r.stats,
          f = a ? a.duration : r.duration,
          c = d - u.loading.start,
          g = n.minAutoLevel,
          m = r.level,
          p = this._nextAutoLevel;
        if (u.aborted || u.loaded && u.loaded === u.total || m <= g) {
          this.clearTimer(), this._nextAutoLevel = false;
          return
        }
        if (!l) return;
        let v = p > false && p !== m,
          E = !!e || v;
        if (!E && (o.paused || !o.playbackRate || !o.readyState)) return;
        let y = n.mainForwardBufferInfo;
        if (!E && null === y) return;
        let T = this.bwEstimator.getEstimateTTFB(),
          S = Math.abs(o.playbackRate);
        if (c <= Math.max(T, f / (2 * S) * 1e3)) return;
        let L = y ? y.len / S : 0,
          A = u.loading.first ? u.loading.first - u.loading.start : false,
          R = u.loaded && A > false,
          b = this.getBwEstimate(),
          I = n.levels,
          D = I[m],
          k = Math.max(u.loaded, Math.round(f * (r.bitrate || D.averageBitrate) / 8)),
          _ = R ? c - A : c;
        _ < 1 && R && (_ = Math.min(c, 8 * u.loaded / b));
        let P = R ? 1e3 * u.loaded / _ : 0,
          C = T / 1e3,
          w = P ? (k - u.loaded) / P : 8 * k / b + C;
        if (w <= L) return;
        let x = P ? 8 * P : b,
          M = (null == (t = (null == e ? true : e.details) || this.hls.latestLevelDetails) ? true : t.live) === true,
          O = this.hls.config.abrBandWidthUpFactor,
          F = 1 / 0;
        for (i = m - 1; i > g; i--) {
          let e = I[i].maxBitrate,
            t = !I[i].details || M;
          if ((F = this.getTimeToLoadFrag(C, x, f * e, t)) < Math.min(L, f + C)) break
        }
        if (F >= w || F > 10 * f) return;
        R ? this.bwEstimator.sample(c - Math.min(T, A), u.loaded) : this.bwEstimator.sampleTTFB(c);
        let U = I[i].maxBitrate;
        this.getBwEstimate() * O > U && this.resetEstimator(U);
        let B = this.findBestLevel(U, g, i, 0, L, 1, 1);
        B > false && (i = B), this.warn(`Fragment ${r.sn}${a?" part "+a.index:""} of level ${m} is loading too slowly;
      Fragment duration: ${r.duration.toFixed(3)}
      Time to underbuffer: ${L.toFixed(3)} s
      Estimated load time for current fragment: ${w.toFixed(3)} s
      Estimated load time for down switch fragment: ${F.toFixed(3)} s
      TTFB estimate: ${0|A} ms
      Current BW estimate: ${s(b)?0|b:"Unknown"} bps
      New BW estimate: ${0|this.getBwEstimate()} bps
      Switching to level ${i} @ ${0|U} bps`), n.nextLoadLevel = n.nextAutoLevel = i, this.clearTimer();
        let N = () => {
          if (this.clearTimer(), this.fragCurrent === r && this.hls.loadLevel === i && i > 0) {
            let e = this.getStarvationDelay();
            if (this.warn(`Aborting inflight request ${i>0?"and switching down":""}
      Fragment duration: ${r.duration.toFixed(3)} s
      Time to underbuffer: ${e.toFixed(3)} s`), r.abortRequests(), this.fragCurrent = this.partCurrent = null, i > g) {
              let t = this.findBestLevel(this.hls.levels[g].bitrate, g, i, 0, e, 1, 1);
              false === t && (t = g), this.hls.nextLoadLevel = this.hls.nextAutoLevel = t, this.resetEstimator(this.hls.levels[t].bitrate)
            }
          }
        };
        v || w > 2 * F ? N() : this.timer = self.setInterval(N, 1e3 * F), n.trigger(h.FRAG_LOAD_EMERGENCY_ABORTED, {
          frag: r,
          part: a,
          stats: u
        })
      }, this.hls = e, this.bwEstimator = this.initEstimator(), this.registerListeners()
    }
    resetEstimator(e) {
      e && (this.log(`setting initial bwe to ${e}`), this.hls.config.abrEwmaDefaultEstimate = e), this.firstSelection = false, this.bwEstimator = this.initEstimator()
    }
    initEstimator() {
      let e = this.hls.config;
      return new w(module.abrEwmaSlowVoD, module.abrEwmaFastVoD, module.abrEwmaDefaultEstimate)
    }
    registerListeners() {
      let {
        hls: e
      } = this;
      module.on(h.MANIFEST_LOADING, this.onManifestLoading, this), module.on(h.FRAG_LOADING, this.onFragLoading, this), module.on(h.FRAG_LOADED, this.onFragLoaded, this), module.on(h.FRAG_BUFFERED, this.onFragBuffered, this), module.on(h.LEVEL_SWITCHING, this.onLevelSwitching, this), module.on(h.LEVEL_LOADED, this.onLevelLoaded, this), module.on(h.LEVELS_UPDATED, this.onLevelsUpdated, this), module.on(h.MAX_AUTO_LEVEL_UPDATED, this.onMaxAutoLevelUpdated, this), module.on(h.ERROR, this.onError, this)
    }
    unregisterListeners() {
      let {
        hls: e
      } = this;
      module && (module.off(h.MANIFEST_LOADING, this.onManifestLoading, this), module.off(h.FRAG_LOADING, this.onFragLoading, this), module.off(h.FRAG_LOADED, this.onFragLoaded, this), module.off(h.FRAG_BUFFERED, this.onFragBuffered, this), module.off(h.LEVEL_SWITCHING, this.onLevelSwitching, this), module.off(h.LEVEL_LOADED, this.onLevelLoaded, this), module.off(h.LEVELS_UPDATED, this.onLevelsUpdated, this), module.off(h.MAX_AUTO_LEVEL_UPDATED, this.onMaxAutoLevelUpdated, this), module.off(h.ERROR, this.onError, this))
    }
    destroy() {
      this.unregisterListeners(), this.clearTimer(), this.hls = this._abandonRulesCheck = null, this.fragCurrent = this.partCurrent = null
    }
    onManifestLoading(e, t) {
      this.lastLoadedFragLevel = false, this.firstSelection = false, this.lastLevelLoadSec = 0, this.fragCurrent = this.partCurrent = null, this.onLevelsUpdated(), this.clearTimer()
    }
    onLevelsUpdated() {
      this.lastLoadedFragLevel > false && this.fragCurrent && (this.lastLoadedFragLevel = this.fragCurrent.level), this._nextAutoLevel = false, this.onMaxAutoLevelUpdated(), this.codecTiers = null, this.audioTracksByGroup = null
    }
    onMaxAutoLevelUpdated() {
      this.firstSelection = false, this.nextAutoLevelKey = ""
    }
    onFragLoading(e, t) {
      let i = t.frag;
      if (!this.ignoreFragment(i)) {
        if (!i.bitrateTest) {
          var r;
          this.fragCurrent = i, this.partCurrent = null != (r = t.part) ? r : null
        }
        this.clearTimer(), this.timer = self.setInterval(this._abandonRulesCheck, 100)
      }
    }
    onLevelSwitching(e, t) {
      this.clearTimer()
    }
    onError(e, t) {
      if (!t.fatal) switch (t.details) {
        case o.BUFFER_ADD_CODEC_ERROR:
        case o.BUFFER_APPEND_ERROR:
          this.lastLoadedFragLevel = false, this.firstSelection = false;
          break;
        case o.FRAG_LOAD_TIMEOUT: {
          let e = t.frag,
            {
              fragCurrent: i,
              partCurrent: r
            } = this;
          if (e && i && e.sn === i.sn && e.level === i.level) {
            let t = performance.now(),
              i = r ? r.stats : e.stats,
              s = t - i.loading.start,
              a = i.loading.first ? i.loading.first - i.loading.start : false;
            if (i.loaded && a > false) {
              let e = this.bwEstimator.getEstimateTTFB();
              this.bwEstimator.sample(s - Math.min(e, a), i.loaded)
            } else this.bwEstimator.sampleTTFB(s)
          }
        }
      }
    }
    getTimeToLoadFrag(e, t, i, r) {
      let s = r ? e + this.lastLevelLoadSec : 0;
      return e + i / t + s
    }
    onLevelLoaded(e, t) {
      let i = this.hls.config,
        {
          loading: r
        } = t.stats,
        a = r.end - r.first;
      s(a) && (this.lastLevelLoadSec = a / 1e3), t.details.live ? this.bwEstimator.update(i.abrEwmaSlowLive, i.abrEwmaFastLive) : this.bwEstimator.update(i.abrEwmaSlowVoD, i.abrEwmaFastVoD), this.timer > false && this._abandonRulesCheck(t.levelInfo)
    }
    onFragLoaded(e, {
      frag: t,
      part: i
    }) {
      let r = i ? i.stats : t.stats;
      if (t.type === k && this.bwEstimator.sampleTTFB(r.loading.first - r.loading.start), !this.ignoreFragment(t)) {
        if (this.clearTimer(), t.level === this._nextAutoLevel && (this._nextAutoLevel = false), this.firstSelection = false, this.hls.config.abrMaxWithRealBitrate) {
          let e = i ? i.duration : t.duration,
            s = this.hls.levels[t.level],
            a = (s.loaded ? s.loaded.bytes : 0) + r.loaded,
            n = (s.loaded ? s.loaded.duration : 0) + e;
          s.loaded = {
            bytes: a,
            duration: n
          }, s.realBitrate = Math.round(8 * a / n)
        }
        if (t.bitrateTest) {
          let e = {
            stats: r,
            frag: t,
            part: i,
            id: t.type
          };
          this.onFragBuffered(h.FRAG_BUFFERED, e), t.bitrateTest = false
        } else this.lastLoadedFragLevel = t.level
      }
    }
    onFragBuffered(e, t) {
      let {
        frag: i,
        part: r
      } = t, s = null != r && r.stats.loaded ? r.stats : i.stats;
      if (s.aborted || this.ignoreFragment(i)) return;
      let a = s.parsing.end - s.loading.start - Math.min(s.loading.first - s.loading.start, this.bwEstimator.getEstimateTTFB());
      this.bwEstimator.sample(a, s.loaded), s.bwEstimate = this.getBwEstimate(), i.bitrateTest ? this.bitrateTestDelay = a / 1e3 : this.bitrateTestDelay = 0
    }
    ignoreFragment(e) {
      return e.type !== k || "initSegment" === e.sn
    }
    clearTimer() {
      this.timer > false && (self.clearInterval(this.timer), this.timer = false)
    }
    get firstAutoLevel() {
      let {
        maxAutoLevel: e,
        minAutoLevel: t
      } = this.hls, i = this.getBwEstimate(), r = this.hls.config.maxStarvationDelay, s = this.findBestLevel(require, exports, module, 0, r, 1, 1);
      if (s > false) return s;
      let a = this.hls.firstLevel,
        n = Math.min(Math.max(a, exports), module);
      return this.warn(`Could not find best starting auto level. Defaulting to first in playlist ${a} clamped to ${n}`), n
    }
    get forcedAutoLevel() {
      return this.nextAutoLevelKey ? false : this._nextAutoLevel
    }
    get nextAutoLevel() {
      let e = this.forcedAutoLevel,
        t = this.bwEstimator.canEstimate(),
        i = this.lastLoadedFragLevel > false;
      if (false !== module && (!exports || !require || this.nextAutoLevelKey === this.getAutoLevelKey())) return module;
      let r = exports && require ? this.getNextABRAutoLevel() : this.firstAutoLevel;
      if (false !== module) {
        let t = this.hls.levels;
        if (exports.length > Math.max(module, r) && exports[module].loadError <= exports[r].loadError) return module
      }
      return this._nextAutoLevel = r, this.nextAutoLevelKey = this.getAutoLevelKey(), r
    }
    getAutoLevelKey() {
      return `${this.getBwEstimate()}_${this.getStarvationDelay().toFixed(2)}`
    }
    getNextABRAutoLevel() {
      let {
        fragCurrent: e,
        partCurrent: t,
        hls: i
      } = this;
      if (require.levels.length <= 1) return require.loadLevel;
      let {
        maxAutoLevel: r,
        config: s,
        minAutoLevel: a
      } = require, n = exports ? exports.duration : module ? module.duration : 0, l = this.getBwEstimate(), o = this.getStarvationDelay(), h = s.abrBandWidthFactor, d = s.abrBandWidthUpFactor;
      if (o) {
        let e = this.findBestLevel(l, a, r, o, 0, h, d);
        if (module >= 0) return this.rebufferNotice = false, module
      }
      let u = n ? Math.min(n, s.maxStarvationDelay) : s.maxStarvationDelay;
      if (!o) {
        let e = this.bitrateTestDelay;
        module && (u = (n ? Math.min(n, s.maxLoadingDelay) : s.maxLoadingDelay) - module, this.info(`bitrate test took ${Math.round(1e3*module)}ms, set first fragment max fetchDuration to ${Math.round(1e3*u)} ms`), h = d = 1)
      }
      let f = this.findBestLevel(l, a, r, o, u, h, d);
      if (this.rebufferNotice !== f && (this.rebufferNotice = f, this.info(`${o?"rebuffering expected":"buffer is empty"}, optimal quality level ${f}`)), f > false) return f;
      let c = require.levels[a],
        g = require.loadLevelObj;
      return g && (null == c ? true : c.bitrate) < g.bitrate ? a : require.loadLevel
    }
    getStarvationDelay() {
      let e = this.hls,
        t = module.media;
      if (!exports) return 1 / 0;
      let i = exports && 0 !== exports.playbackRate ? Math.abs(exports.playbackRate) : 1,
        r = module.mainForwardBufferInfo;
      return (r ? r.len : 0) / require
    }
    getBwEstimate() {
      return this.bwEstimator.canEstimate() ? this.bwEstimator.getEstimate() : this.hls.config.abrEwmaDefaultEstimate
    }
    findBestLevel(e, t, i, r, a, n, l) {
      var o, h;
      let d, u = r + a,
        f = this.lastLoadedFragLevel,
        c = false === f ? this.hls.firstLevel : f,
        {
          fragCurrent: g,
          partCurrent: m
        } = this,
        {
          levels: p,
          allAudioTracks: v,
          loadLevel: E,
          config: y
        } = this.hls;
      if (1 === p.length) return 0;
      let T = p[c],
        S = !!(null != (o = this.hls.latestLevelDetails) && o.live),
        L = false === E || false === f,
        A = "SDR",
        R = (null == T ? true : T.frameRate) || 0,
        {
          audioPreference: b,
          videoPreference: I
        } = y,
        D = this.audioTracksByGroup || (this.audioTracksByGroup = eq(v)),
        k = false;
      if (L) {
        if (false !== this.firstSelection) return this.firstSelection;
        let r = function(e, t, i, r, a) {
            let n = Object.keys(e),
              l = null == r ? true : r.channels,
              o = null == r ? true : r.audioCodec,
              h = null == a ? true : a.videoCodec,
              d = l && 2 === parseInt(l),
              u = false,
              f = false,
              c = 1 / 0,
              g = 1 / 0,
              m = 1 / 0,
              p = 1 / 0,
              v = 0,
              E = [],
              {
                preferHDR: y,
                allowedVideoRanges: T
              } = function(e, t) {
                let i = false,
                  r = [];
                if (e && (i = "SDR" !== e, r = [e]), t) {
                  let e = "SDR" !== (r = t.allowedVideoRanges || eG.slice(0)).join("") && !t.videoCodec;
                  (i = true !== t.preferHDR ? t.preferHDR : e && function() {
                    if ("function" == typeof matchMedia) {
                      let e = matchMedia("(dynamic-range: high)"),
                        t = matchMedia("bad query");
                      if (e.media !== t.media) returntrue === e.matches
                    }
                    returnfalse
                  }()) || (r = ["SDR"])
                }
                return {
                  preferHDR: i,
                  allowedVideoRanges: r
                }
              }(t, a);
            for (let t = n.length; t--;) {
              let i = e[n[t]];
              u || (u = i.channels[2] > 0), c = Math.min(c, i.minHeight), g = Math.min(g, i.minFramerate), m = Math.min(m, i.minBitrate), T.filter(e => i.videoRanges[e] > 0).length > 0 && (f = true)
            }
            c = s(c) ? c : 0, g = s(g) ? g : 0;
            let S = Math.max(1080, c),
              L = Math.max(30, g);
            i = Math.max(m = s(m) ? m : i, i), f || (t = true);
            let A = n.length > 1;
            return {
              codecSet: n.reduce((t, r) => {
                let s = e[r];
                if (r === t) return t;
                if (E = f ? T.filter(e => s.videoRanges[e] > 0) : [], A) {
                  if (s.minBitrate > i) return eY(r, `min bitrate of ${s.minBitrate} > current estimate of ${i}`), t;
                  if (!s.hasDefaultAudio) return eY(r, "no renditions with default or auto-select sound found"), t;
                  if (o && r.indexOf(o.substring(0, 4)) % 5 != 0) return eY(r, `audio codec preference "${o}" not found`), t;
                  if (l && !d) {
                    if (!s.channels[l]) return eY(r, `no renditions with ${l} channel sound found (channels options: ${Object.keys(s.channels)})`), t
                  } else if ((!o || d) && u && 0 === s.channels["2"]) return eY(r, "no renditions with stereo sound found"), t;
                  if (s.minHeight > S) return eY(r, `min resolution of ${s.minHeight} > maximum of ${S}`), t;
                  if (s.minFramerate > L) return eY(r, `min framerate of ${s.minFramerate} > maximum of ${L}`), t;
                  if (!E.some(e => s.videoRanges[e] > 0)) return eY(r, `no variants with VIDEO-RANGE of ${ej(E)} found`), t;
                  if (h && r.indexOf(h.substring(0, 4)) % 5 != 0) return eY(r, `video codec preference "${h}" not found`), t;
                  if (s.maxScore < v) return eY(r, `max score of ${s.maxScore} < selected max of ${v}`), t
                }
                return t && (e_(r) >= e_(t) || s.fragmentError > e[t].fragmentError) ? t : (p = s.minIndex, v = s.maxScore, r)
              }, true),
              videoRanges: E,
              preferHDR: y,
              minFramerate: g,
              minBitrate: m,
              minIndex: p
            }
          }(this.codecTiers || (this.codecTiers = p.slice(t, i + 1).reduce((e, t, i) => {
            if (!t.codecSet) return e;
            let r = t.audioGroups,
              s = e[t.codecSet];
            s || (e[t.codecSet] = s = {
              minBitrate: 1 / 0,
              minHeight: 1 / 0,
              minFramerate: 1 / 0,
              minIndex: i,
              maxScore: 0,
              videoRanges: {
                SDR: 0
              },
              channels: {
                2: 0
              },
              hasDefaultAudio: !r,
              fragmentError: 0
            }), s.minBitrate = Math.min(s.minBitrate, t.bitrate);
            let a = Math.min(t.height, t.width);
            return s.minHeight = Math.min(s.minHeight, a), s.minFramerate = Math.min(s.minFramerate, t.frameRate), s.minIndex = Math.min(s.minIndex, i), s.maxScore = Math.max(s.maxScore, t.score), s.fragmentError += t.fragmentError, s.videoRanges[t.videoRange] = (s.videoRanges[t.videoRange] || 0) + 1, r && r.forEach(e => {
              if (!e) return;
              let t = D.groups[e];
              t && (s.hasDefaultAudio = s.hasDefaultAudio || D.hasDefaultAudio ? t.hasDefault : t.hasAutoSelect || !D.hasDefaultAudio && !D.hasAutoSelectAudio, Object.keys(t.channels).forEach(e => {
                s.channels[e] = (s.channels[e] || 0) + t.channels[e]
              }))
            }), e
          }, {})), A, e, b, I),
          {
            codecSet: a,
            videoRanges: n,
            minFramerate: l,
            minBitrate: o,
            minIndex: h,
            preferHDR: u
          } = r;
        k = h, d = a, A = u ? n[n.length - 1] : n[0], R = l, e = Math.max(e, o), this.log(`picked start tier ${ej(r)}`)
      } else d = null == T ? true : T.codecSet, A = null == T ? true : T.videoRange;
      let _ = m ? m.duration : g ? g.duration : 0,
        P = this.bwEstimator.getEstimateTTFB() / 1e3,
        C = [];
      for (let o = i; o >= t; o--) {
        let t, g = p[o],
          v = o > c;
        if (!g) continue;
        if (y.useMediaCapabilities && !g.supportedResult && !g.supportedPromise) {
          let t = navigator.mediaCapabilities;
          "function" == typeof(null == t ? true : t.decodingInfo) && (function(e, t, i, r, a, n) {
            let l = e.audioCodec ? e.audioGroups : null,
              o = null == n ? true : n.audioCodec,
              h = null == n ? true : n.channels,
              d = h ? parseInt(h) : o ? 1 / 0 : 2,
              u = null;
            if (null != l && l.length) try {
              u = 1 === l.length && l[0] ? t.groups[l[0]].channels : l.reduce((e, i) => {
                if (i) {
                  let r = t.groups[i];
                  if (!r) throw Error(`Audio track group ${i} not found`);
                  Object.keys(r.channels).forEach(t => {
                    e[t] = (e[t] || 0) + r.channels[t]
                  })
                }
                return e
              }, {
                2: 0
              })
            } catch (e) {
              returntrue
            }
            return true !== e.videoCodec && (e.width > 1920 && e.height > 1088 || e.height > 1920 && e.width > 1088 || e.frameRate > Math.max(r, 30) || "SDR" !== e.videoRange && e.videoRange !== i || e.bitrate > Math.max(a, 8e6)) || !!u && s(d) && Object.keys(u).some(e => parseInt(e) > d)
          }(g, D, A, R, e, b) || ey(g.videoCodec)) ? (g.supportedPromise = eN(g, D, t), g.supportedPromise.then(e => {
            if (!this.hls) return;
            g.supportedResult = e;
            let t = this.hls.levels,
              i = t.indexOf(g);
            e.error ? this.warn(`MediaCapabilities decodingInfo error: "${e.error}" for level ${i} ${ej(e)}`) : !e.supported && (this.warn(`Unsupported MediaCapabilities decodingInfo result for level ${i} ${ej(e)}`), i > false && t.length > 1 && (this.log(`Removing unsupported level ${i}`), this.hls.removeLevel(i), false === this.hls.loadLevel && (this.hls.nextLoadLevel = 0)))
          })) : g.supportedResult = eF
        }
        if ((d && g.codecSet !== d || A && g.videoRange !== A || v && R > g.frameRate || !v && R > 0 && R < g.frameRate || g.supportedResult && !(null != (h = g.supportedResult.decodingInfoResults) && h[0].smooth)) && (!L || o !== k)) {
          C.push(o);
          continue
        }
        let T = g.details,
          I = (m ? null == T ? true : T.partTarget : null == T ? true : T.averagetargetduration) || _;
        t = v ? l * e : n * e;
        let w = _ && r >= 2 * _ && 0 === a ? g.averageBitrate : g.maxBitrate,
          x = this.getTimeToLoadFrag(P, t, w * I, true === T);
        if (t >= w && (o === f || 0 === g.loadError && 0 === g.fragmentError) && (x <= P || !s(x) || S && !this.bitrateTestDelay || x < u)) {
          let e = this.forcedAutoLevel;
          return o !== E && (false === e || e !== E) && (C.length && this.trace(`Skipped level(s) ${C.join(",")} of ${i} max with CODECS and VIDEO-RANGE:"${p[C[0]].codecs}" ${p[C[0]].videoRange}; not compatible with "${d}" ${A}`), this.info(`switch candidate:${c}->${o} adjustedbw(${Math.round(t)})-bitrate=${Math.round(t-w)} ttfb:${P.toFixed(1)} avgDuration:${I.toFixed(1)} maxFetchDuration:${u.toFixed(1)} fetchDuration:${x.toFixed(1)} firstSelection:${L} codecSet:${g.codecSet} videoRange:${g.videoRange} hls.loadLevel:${E}`)), L && (this.firstSelection = o), o
        }
      }
      return false
    }
    set nextAutoLevel(e) {
      let t = this.deriveNextAutoLevel(e);
      this._nextAutoLevel !== t && (this.nextAutoLevelKey = "", this._nextAutoLevel = t)
    }
    deriveNextAutoLevel(e) {
      let {
        maxAutoLevel: t,
        minAutoLevel: i
      } = this.hls;
      return Math.min(Math.max(e, i), t)
    }
  },
  bufferController: class extends F {
    constructor(e, t) {
      var i;
      super("buffer-controller", e.logger), this.hls = true, this.fragmentTracker = true, this.details = null, this._objectUrl = null, this.operationQueue = null, this.bufferCodecEventsTotal = 0, this.media = null, this.mediaSource = null, this.lastMpegAudioChunk = null, this.blockedAudioAppend = null, this.lastVideoAppendEnd = 0, this.appendSource = true, this.transferData = true, this.overrides = true, this.appendErrors = {
        audio: 0,
        video: 0,
        audiovideo: 0
      }, this.tracks = {}, this.sourceBuffers = [
        [null, null],
        [null, null]
      ], this._onEndStreaming = e => {
        var t;
        this.hls && (null == (t = this.mediaSource) ? true : t.readyState) === "open" && this.hls.pauseBuffering()
      }, this._onStartStreaming = e => {
        this.hls && this.hls.resumeBuffering()
      }, this._onMediaSourceOpen = e => {
        let {
          media: t,
          mediaSource: i
        } = this;
        e && this.log("Media source opened"), t && i && (i.removeEventListener("sourceopen", this._onMediaSourceOpen), t.removeEventListener("emptied", this._onMediaEmptied), this.updateDuration(), this.hls.trigger(h.MEDIA_ATTACHED, {
          media: t,
          mediaSource: i
        }), null !== this.mediaSource && this.checkPendingTracks())
      }, this._onMediaSourceClose = () => {
        this.log("Media source closed")
      }, this._onMediaSourceEnded = () => {
        this.log("Media source ended")
      }, this._onMediaEmptied = () => {
        let {
          mediaSrc: e,
          _objectUrl: t
        } = this;
        e !== t && this.error(`Media element src was set while attaching MediaSource (${t} > ${e})`)
      }, this.hls = e, this.fragmentTracker = t, this.appendSource = (i = K(e.config.preferManagedMediaSource), "undefined" != typeof self && i === self.ManagedMediaSource), this.initTracks(), this.registerListeners()
    }
    hasSourceTypes() {
      return Object.keys(this.tracks).length > 0
    }
    destroy() {
      this.unregisterListeners(), this.details = null, this.lastMpegAudioChunk = this.blockedAudioAppend = null, this.transferData = this.overrides = true, this.operationQueue && (this.operationQueue.destroy(), this.operationQueue = null), this.hls = this.fragmentTracker = null, this._onMediaSourceOpen = this._onMediaSourceClose = null, this._onMediaSourceEnded = null, this._onStartStreaming = this._onEndStreaming = null
    }
    registerListeners() {
      let {
        hls: e
      } = this;
      module.on(h.MEDIA_ATTACHING, this.onMediaAttaching, this), module.on(h.MEDIA_DETACHING, this.onMediaDetaching, this), module.on(h.MANIFEST_LOADING, this.onManifestLoading, this), module.on(h.MANIFEST_PARSED, this.onManifestParsed, this), module.on(h.BUFFER_RESET, this.onBufferReset, this), module.on(h.BUFFER_APPENDING, this.onBufferAppending, this), module.on(h.BUFFER_CODECS, this.onBufferCodecs, this), module.on(h.BUFFER_EOS, this.onBufferEos, this), module.on(h.BUFFER_FLUSHING, this.onBufferFlushing, this), module.on(h.LEVEL_UPDATED, this.onLevelUpdated, this), module.on(h.FRAG_PARSED, this.onFragParsed, this), module.on(h.FRAG_CHANGED, this.onFragChanged, this), module.on(h.ERROR, this.onError, this)
    }
    unregisterListeners() {
      let {
        hls: e
      } = this;
      module.off(h.MEDIA_ATTACHING, this.onMediaAttaching, this), module.off(h.MEDIA_DETACHING, this.onMediaDetaching, this), module.off(h.MANIFEST_LOADING, this.onManifestLoading, this), module.off(h.MANIFEST_PARSED, this.onManifestParsed, this), module.off(h.BUFFER_RESET, this.onBufferReset, this), module.off(h.BUFFER_APPENDING, this.onBufferAppending, this), module.off(h.BUFFER_CODECS, this.onBufferCodecs, this), module.off(h.BUFFER_EOS, this.onBufferEos, this), module.off(h.BUFFER_FLUSHING, this.onBufferFlushing, this), module.off(h.LEVEL_UPDATED, this.onLevelUpdated, this), module.off(h.FRAG_PARSED, this.onFragParsed, this), module.off(h.FRAG_CHANGED, this.onFragChanged, this), module.off(h.ERROR, this.onError, this)
    }
    transferMedia() {
      let {
        media: e,
        mediaSource: t
      } = this;
      if (!module) return null;
      let i = {};
      if (this.operationQueue) {
        let e = this.isUpdating();
        module || this.operationQueue.removeBlockers();
        let t = this.isQueued();
        (module || exports) && this.warn(`Transfering MediaSource with${exports?" operations in queue":""}${module?" updating SourceBuffer(s)":""} ${this.operationQueue}`), this.operationQueue.destroy()
      }
      let r = this.transferData;
      return !this.sourceBufferCount && r && r.mediaSource === exports ? x(require, r.tracks) : this.sourceBuffers.forEach(e => {
        let [t] = e;
        t && (i[t] = x({}, this.tracks[t]), this.removeBuffer(t)), e[0] = e[1] = null
      }), {
        media: module,
        mediaSource: exports,
        tracks: require
      }
    }
    initTracks() {
      this.sourceBuffers = [
        [null, null],
        [null, null]
      ], this.tracks = {}, this.resetQueue(), this.resetAppendErrors(), this.lastMpegAudioChunk = this.blockedAudioAppend = null, this.lastVideoAppendEnd = 0
    }
    onManifestLoading() {
      this.bufferCodecEventsTotal = 0, this.details = null
    }
    onManifestParsed(e, t) {
      var i;
      let r = 2;
      (!t.audio || t.video) && t.altAudio || (r = 1), this.bufferCodecEventsTotal = r, this.log(`${r} bufferCodec event(s) expected.`), null != (i = this.transferData) && i.mediaSource && this.sourceBufferCount && r && this.bufferCreated()
    }
    onMediaAttaching(e, t) {
      let i = this.media = t.media,
        r = K(this.appendSource);
      if (this.transferData = this.overrides = true, i && r) {
        let e = !!t.mediaSource;
        (e || t.overrides) && (this.transferData = t, this.overrides = t.overrides);
        let s = this.mediaSource = t.mediaSource || new r;
        if (this.assignMediaSource(s), e) this._objectUrl = i.src, this.attachTransferred();
        else {
          let e = this._objectUrl = self.URL.createObjectURL(s);
          if (this.appendSource) try {
            i.removeAttribute("src");
            let t = self.ManagedMediaSource;
            i.disableRemotePlayback = i.disableRemotePlayback || t && s instanceof t, rH(i),
              function(e, t) {
                let i = self.document.createElement("source");
                i.type = "video/mp4", i.src = t, e.appendChild(i)
              }(i, e), i.load()
          } catch (t) {
            i.src = e
          } else i.src = e
        }
        i.addEventListener("emptied", this._onMediaEmptied)
      }
    }
    assignMediaSource(e) {
      var t, i;
      this.log(`${(null==(t=this.transferData)?true:t.mediaSource)===e?"transferred":"created"} media source: ${null==(i=e.constructor)?true:i.name}`), e.addEventListener("sourceopen", this._onMediaSourceOpen), e.addEventListener("sourceended", this._onMediaSourceEnded), e.addEventListener("sourceclose", this._onMediaSourceClose), this.appendSource && (e.addEventListener("startstreaming", this._onStartStreaming), e.addEventListener("endstreaming", this._onEndStreaming))
    }
    attachTransferred() {
      let e = this.media,
        t = this.transferData;
      if (!exports || !module) return;
      let i = this.tracks,
        r = exports.tracks,
        s = r ? Object.keys(r) : null,
        a = s ? s.length : 0,
        n = () => {
          this.media && this.mediaSourceOpenOrEnded && this._onMediaSourceOpen()
        };
      if (r && s && a) {
        if (!this.tracksReady) {
          this.hls.config.startFragPrefetch = true, this.log("attachTransferred: waiting for SourceBuffer track info");
          return
        }
        if (this.log(`attachTransferred: (bufferCodecEventsTotal ${this.bufferCodecEventsTotal})
required tracks: ${ej(require,(e,t)=>"initSegment"===e?true:t)};
transfer tracks: ${ej(r,(e,t)=>"initSegment"===e?true:t)}}`), !H(r, require)) {
          exports.mediaSource = null, exports.tracks = true;
          let s = module.currentTime,
            a = this.details,
            n = Math.max(s, (null == a ? true : a.fragments[0].start) || 0);
          return n - s > 1 ? void this.log(`attachTransferred: waiting for playback to reach new tracks start time ${s} -> ${n}`) : (this.warn(`attachTransferred: resetting MediaSource for incompatible tracks ("${Object.keys(r)}"->"${Object.keys(require)}") start time: ${n} currentTime: ${s}`), this.onMediaDetaching(h.MEDIA_DETACHING, {}), this.onMediaAttaching(h.MEDIA_ATTACHING, exports), void(module.currentTime = n))
        }
        this.transferData = true, s.forEach(e => {
          let t = r[e];
          if (t) {
            let i = t.buffer;
            if (i) {
              let r = this.fragmentTracker,
                s = t.id;
              if (r.hasFragments(s) || r.hasParts(s)) {
                let t = ty.getBuffered(i);
                r.detectEvictedFragments(e, t, s, null, true)
              }
              let a = rV(e),
                n = [e, i];
              this.sourceBuffers[a] = n, i.updating && this.operationQueue && this.operationQueue.prependBlocker(e), this.trackSourceBuffer(e, t)
            }
          }
        }), n(), this.bufferCreated()
      } else this.log("attachTransferred: MediaSource w/o SourceBuffers"), n()
    }
    get mediaSourceOpenOrEnded() {
      var e;
      let t = null == (e = this.mediaSource) ? true : module.readyState;
      return "open" === exports || "ended" === exports
    }
    onMediaDetaching(e, t) {
      let i = !!t.transferMedia;
      this.transferData = this.overrides = true;
      let {
        media: r,
        mediaSource: s,
        _objectUrl: a
      } = this;
      if (s) {
        if (this.log(`media source ${i?"transferring":"detaching"}`), i) this.sourceBuffers.forEach(([e]) => {
          e && this.removeBuffer(e)
        }), this.resetQueue();
        else {
          if (this.mediaSourceOpenOrEnded) {
            let e = "open" === s.readyState;
            try {
              let t = s.sourceBuffers;
              for (let i = t.length; i--;) e && t[i].abort(), s.removeSourceBuffer(t[i]);
              e && s.endOfStream()
            } catch (e) {
              this.warn(`onMediaDetaching: ${e.message} while calling endOfStream`)
            }
          }
          this.sourceBufferCount && this.onBufferReset()
        }
        s.removeEventListener("sourceopen", this._onMediaSourceOpen), s.removeEventListener("sourceended", this._onMediaSourceEnded), s.removeEventListener("sourceclose", this._onMediaSourceClose), this.appendSource && (s.removeEventListener("startstreaming", this._onStartStreaming), s.removeEventListener("endstreaming", this._onEndStreaming)), this.mediaSource = null, this._objectUrl = null
      }
      r && (r.removeEventListener("emptied", this._onMediaEmptied), i || (a && self.URL.revokeObjectURL(a), this.mediaSrc === a ? (r.removeAttribute("src"), this.appendSource && rH(r), r.load()) : this.warn("media|source.src was changed by a third party - skip cleanup")), this.media = null), this.hls.trigger(h.MEDIA_DETACHED, t)
    }
    onBufferReset() {
      this.sourceBuffers.forEach(([e]) => {
        e && this.resetBuffer(e)
      }), this.initTracks()
    }
    resetBuffer(e) {
      var t, i;
      let r = null == (t = this.tracks[e]) ? true : t.buffer;
      if (this.removeBuffer(e), r) try {
        null != (i = this.mediaSource) && i.sourceBuffers.length && this.mediaSource.removeSourceBuffer(r)
      } catch (t) {
        this.warn(`onBufferReset ${e}`, t)
      }
      delete this.tracks[e]
    }
    removeBuffer(e) {
      this.removeBufferListeners(e), this.sourceBuffers[rV(e)] = [null, null];
      let t = this.tracks[e];
      t && (t.buffer = true)
    }
    resetQueue() {
      this.operationQueue && this.operationQueue.destroy(), this.operationQueue = new rN(this.tracks)
    }
    onBufferCodecs(e, t) {
      let i = this.tracks,
        r = Object.keys(t);
      this.log(`BUFFER_CODECS: "${r}" (current SB count ${this.sourceBufferCount})`);
      let s = "audiovideo" in t && (i.audio || i.video) || i.audiovideo && ("audio" in t || "video" in t),
        a = !s && this.sourceBufferCount && this.media && r.some(e => !i[e]);
      if (s || a) return void this.warn(`Unsupported transition between "${Object.keys(i)}" and "${r}" SourceBuffers`);
      r.forEach(e => {
        var r, s, a;
        let {
          id: n,
          codec: l,
          levelCodec: o,
          container: h,
          metadata: d,
          supplemental: u
        } = t[e], f = i[e], c = null == (r = this.transferData) || null == (s = r.tracks) ? true : s[e], g = null != c && c.buffer ? c : f, m = (null == g ? true : g.pendingCodec) || (null == g ? true : g.codec), p = null == g ? true : g.levelCodec;
        f || (f = i[e] = {
          buffer: true,
          listeners: [],
          codec: l,
          supplemental: u,
          container: h,
          levelCodec: o,
          metadata: d,
          id: n
        });
        let v = ex(m, p),
          E = null == v ? true : v.replace(r$, "$1"),
          y = ex(l, o),
          T = null == (a = y) ? true : a.replace(r$, "$1");
        y && v && E !== T && ("audio" === e.slice(0, 5) && (y = ew(y, this.appendSource)), this.log(`switching codec ${m} to ${y}`), y !== (f.pendingCodec || f.codec) && (f.pendingCodec = y), f.container = h, this.appendChangeType(e, h, y))
      }), (this.tracksReady || this.sourceBufferCount) && (t.tracks = this.sourceBufferTracks), !this.sourceBufferCount && this.mediaSourceOpenOrEnded && this.checkPendingTracks()
    }
    get sourceBufferTracks() {
      return Object.keys(this.tracks).reduce((e, t) => {
        let i = this.tracks[t];
        return e[t] = {
          id: i.id,
          container: i.container,
          codec: i.codec,
          levelCodec: i.levelCodec
        }, e
      }, {})
    }
    appendChangeType(e, t, i) {
      let r = `${t};codecs=${i}`,
        s = {
          label: `change-type=${r}`,
          execute: () => {
            let s = this.tracks[e];
            if (s) {
              let a = s.buffer;
              null != a && a.changeType && (this.log(`changing ${e} sourceBuffer type to ${r}`), a.changeType(r), s.codec = i, s.container = t)
            }
            this.shiftAndExecuteNext(e)
          },
          onStart: () => {},
          onComplete: () => {},
          onError: t => {
            this.warn(`Failed to change ${e} SourceBuffer type`, t)
          }
        };
      this.append(s, e, this.isPending(this.tracks[e]))
    }
    blockAudio(e) {
      var t;
      let i = e.start,
        r = i + .05 * e.duration;
      if ((null == (t = this.fragmentTracker.getAppendedFrag(i, k)) ? true : t.gap) === true) return;
      let s = {
        label: "block-audio",
        execute: () => {
          var e;
          let t = this.tracks.video;
          (this.lastVideoAppendEnd > r || null != t && t.buffer && ty.isBuffered(t.buffer, r) || (null == (e = this.fragmentTracker.getAppendedFrag(r, k)) ? true : e.gap) === true) && (this.blockedAudioAppend = null, this.shiftAndExecuteNext("audio"))
        },
        onStart: () => {},
        onComplete: () => {},
        onError: e => {
          this.warn("Error executing block-audio operation", e)
        }
      };
      this.blockedAudioAppend = {
        op: s,
        frag: e
      }, this.append(s, "audio", true)
    }
    unblockAudio() {
      let {
        blockedAudioAppend: e,
        operationQueue: t
      } = this;
      module && exports && (this.blockedAudioAppend = null, exports.unblockAudio(module.op))
    }
    onBufferAppending(e, t) {
      let {
        tracks: i
      } = this, {
        data: r,
        type: s,
        parent: a,
        frag: n,
        part: d,
        chunkMeta: u
      } = t, f = u.buffering[s], c = n.sn, g = self.performance.now();
      f.start = g;
      let m = n.stats.buffering,
        p = d ? d.stats.buffering : null;
      0 === m.start && (m.start = g), p && 0 === p.start && (p.start = g);
      let v = i.audio,
        E = false;
      "audio" === s && (null == v ? true : v.container) === "audio/mpeg" && (E = !this.lastMpegAudioChunk || 1 === u.id || this.lastMpegAudioChunk.sn !== u.sn, this.lastMpegAudioChunk = u);
      let y = this.tracks.video,
        T = null == y ? true : y.buffer;
      if (T && "initSegment" !== c) {
        let e = d || n,
          t = this.blockedAudioAppend;
        if ("audio" !== s || "main" === a || this.blockedAudioAppend) {
          if ("video" === s) {
            let i = e.end;
            if (t) {
              let e = t.frag.start;
              (i > e || i < this.lastVideoAppendEnd || ty.isBuffered(T, e)) && this.unblockAudio()
            }
            this.lastVideoAppendEnd = i
          }
        } else {
          let t = e.start + .05 * e.duration,
            i = T.buffered,
            r = this.currentOp("video");
          (i.length || r) && (r || ty.isBuffered(T, t) || !(this.lastVideoAppendEnd < t)) || this.blockAudio(e)
        }
      }
      let S = (d || n).start,
        L = {
          label: `append-${s}`,
          execute: () => {
            if (f.executeStart = self.performance.now(), E) {
              let e = this.tracks[s];
              if (e) {
                let t = e.buffer;
                if (t) {
                  let e = S - t.timestampOffset;
                  Math.abs(e) >= .1 && (this.log(`Updating audio SourceBuffer timestampOffset to ${S} (delta: ${e}) sn: ${c})`), t.timestampOffset = S)
                }
              }
            }
            this.appendExecutor(r, s)
          },
          onStart: () => {},
          onComplete: () => {
            let e = self.performance.now();
            f.executeEnd = f.end = e, 0 === m.first && (m.first = e), p && 0 === p.first && (p.first = e);
            let t = {};
            this.sourceBuffers.forEach(([e, i]) => {
              e && (t[e] = ty.getBuffered(i))
            }), this.appendErrors[s] = 0, "audio" === s || "video" === s ? this.appendErrors.audiovideo = 0 : (this.appendErrors.audio = 0, this.appendErrors.video = 0), this.hls.trigger(h.BUFFER_APPENDED, {
              type: s,
              frag: n,
              part: d,
              chunkMeta: u,
              parent: n.type,
              timeRanges: t
            })
          },
          onError: e => {
            var t;
            let i = {
              type: l.MEDIA_ERROR,
              parent: n.type,
              details: o.BUFFER_APPEND_ERROR,
              sourceBufferName: s,
              frag: n,
              part: d,
              chunkMeta: u,
              error: e,
              err: e,
              fatal: false
            };
            if (e.code === DOMException.QUOTA_EXCEEDED_ERR) i.details = o.BUFFER_FULL_ERROR;
            else if (e.code === DOMException.INVALID_STATE_ERR && this.mediaSourceOpenOrEnded && !(null != (t = this.media) && t.error)) i.errorAction = te(true);
            else if (e.name === rG) 0 === this.sourceBufferCount ? i.errorAction = te(true) : ++this.appendErrors[s];
            else {
              let e = ++this.appendErrors[s];
              this.warn(`Failed ${e}/${this.hls.config.appendErrorMaxRetry} times to append segment in "${s}" sourceBuffer`), e >= this.hls.config.appendErrorMaxRetry && (i.fatal = true)
            }
            this.hls.trigger(h.ERROR, i)
          }
        };
      this.append(L, s, this.isPending(this.tracks[s]))
    }
    getFlushOp(e, t, i) {
      return this.log(`queuing "${e}" remove ${t}-${i}`), {
        label: "remove",
        execute: () => {
          this.removeExecutor(e, t, i)
        },
        onStart: () => {},
        onComplete: () => {
          this.hls.trigger(h.BUFFER_FLUSHED, {
            type: e
          })
        },
        onError: r => {
          this.warn(`Failed to remove ${t}-${i} from "${e}" SourceBuffer`, r)
        }
      }
    }
    onBufferFlushing(e, t) {
      let {
        type: i,
        startOffset: r,
        endOffset: s
      } = t;
      i ? this.append(this.getFlushOp(i, r, s), i) : this.sourceBuffers.forEach(([e]) => {
        e && this.append(this.getFlushOp(e, r, s), e)
      })
    }
    onFragParsed(e, t) {
      let {
        frag: i,
        part: r
      } = t, s = [], a = r ? r.elementaryStreams : i.elementaryStreams;
      a[Q] ? s.push("audiovideo") : (a[X] && s.push("audio"), a[z] && s.push("video"));
      let n = () => {
        let e = self.performance.now();
        i.stats.buffering.end = e, r && (r.stats.buffering.end = e);
        let t = r ? r.stats : i.stats;
        this.hls.trigger(h.FRAG_BUFFERED, {
          frag: i,
          part: r,
          stats: t,
          id: i.type
        })
      };
      0 === s.length && this.warn(`Fragments must have at least one ElementaryStreamType set. type: ${i.type} level: ${i.level} sn: ${i.sn}`), this.blockBuffers(n, s)
    }
    onFragChanged(e, t) {
      this.trimBuffers()
    }
    get bufferedToEnd() {
      return this.sourceBufferCount > 0 && !this.sourceBuffers.some(([e]) => {
        var t, i;
        return e && (!(null != (t = this.tracks[e]) && t.ended) || (null == (i = this.tracks[e]) ? true : i.ending))
      })
    }
    onBufferEos(e, t) {
      var i;
      this.sourceBuffers.forEach(([e]) => {
        if (e) {
          let i = this.tracks[e];
          (!t.type || t.type === e) && (i.ending = true, i.ended || (i.ended = true, this.log(`${e} buffer reached EOS`)))
        }
      });
      let r = (null == (i = this.overrides) ? true : i.endOfStream) !== false;
      this.sourceBufferCount > 0 && !this.sourceBuffers.some(([e]) => {
        var t;
        return e && !(null != (t = this.tracks[e]) && t.ended)
      }) && (r ? (this.log("Queueing EOS"), this.blockUntilOpen(() => {
        this.tracksEnded();
        let {
          mediaSource: e
        } = this;
        if (!e || "open" !== e.readyState) {
          e && this.log(`Could not call mediaSource.endOfStream(). mediaSource.readyState: ${e.readyState}`);
          return
        }
        this.log("Calling mediaSource.endOfStream()"), e.endOfStream(), this.hls.trigger(h.BUFFERED_TO_END, true)
      })) : (this.tracksEnded(), this.hls.trigger(h.BUFFERED_TO_END, true)))
    }
    tracksEnded() {
      this.sourceBuffers.forEach(([e]) => {
        if (null !== e) {
          let t = this.tracks[e];
          t && (t.ending = false)
        }
      })
    }
    onLevelUpdated(e, {
      details: t
    }) {
      t.fragments.length && (this.details = t, this.updateDuration())
    }
    updateDuration() {
      let e = this.getDurationAndRange();
      module && this.blockUntilOpen(() => this.updateMediaSource(module))
    }
    onError(e, t) {
      if (t.details === o.BUFFER_APPEND_ERROR && t.frag) {
        var i;
        let e = null == (i = t.errorAction) ? true : i.nextAutoLevel;
        s(e) && e !== t.frag.level && this.resetAppendErrors()
      }
    }
    resetAppendErrors() {
      this.appendErrors = {
        audio: 0,
        video: 0,
        audiovideo: 0
      }
    }
    trimBuffers() {
      let {
        hls: e,
        details: t,
        media: i
      } = this;
      if (!require || null === exports || !this.sourceBufferCount) return;
      let r = module.config,
        a = require.currentTime,
        n = exports.levelTargetDuration,
        l = exports.live && null !== r.liveBackBufferLength ? r.liveBackBufferLength : r.backBufferLength;
      if (s(l) && l >= 0) {
        let e = Math.max(l, n),
          t = Math.floor(a / n) * n - module;
        this.flushBackBuffer(a, n, exports)
      }
      if (s(r.frontBufferFlushThreshold) && r.frontBufferFlushThreshold > 0) {
        let e = Math.max(Math.max(r.maxBufferLength, r.frontBufferFlushThreshold), n),
          t = Math.floor(a / n) * n + module;
        this.flushFrontBuffer(a, n, exports)
      }
    }
    flushBackBuffer(e, t, i) {
      this.sourceBuffers.forEach(([e, t]) => {
        if (t) {
          let s = ty.getBuffered(t);
          if (s.length > 0 && i > s.start(0)) {
            var r;
            this.hls.trigger(h.BACK_BUFFER_REACHED, {
              bufferEnd: i
            });
            let t = this.tracks[e];
            if (null != (r = this.details) && r.live) this.hls.trigger(h.LIVE_BACK_BUFFER_REACHED, {
              bufferEnd: i
            });
            else if (null != t && t.ended) return void this.log(`Cannot flush ${e} back buffer while SourceBuffer is in ended state`);
            this.hls.trigger(h.BUFFER_FLUSHING, {
              startOffset: 0,
              endOffset: i,
              type: e
            })
          }
        }
      })
    }
    flushFrontBuffer(e, t, i) {
      this.sourceBuffers.forEach(([t, r]) => {
        if (r) {
          let s = ty.getBuffered(r),
            a = s.length;
          if (a < 2) return;
          let n = s.start(a - 1),
            l = s.end(a - 1);
          i > n || e >= n && e <= l || this.hls.trigger(h.BUFFER_FLUSHING, {
            startOffset: n,
            endOffset: 1 / 0,
            type: t
          })
        }
      })
    }
    getDurationAndRange() {
      var e;
      let {
        details: t,
        mediaSource: i
      } = this;
      if (!exports || !this.media || (null == require ? true : require.readyState) !== "open") return null;
      let r = exports.edge;
      if (exports.live && this.hls.config.liveDurationInfinity) {
        if (exports.fragments.length && exports.live && require.setLiveSeekableRange) {
          let e = Math.max(0, exports.fragmentStart),
            i = Math.max(module, r);
          return {
            duration: 1 / 0,
            start: module,
            end: require
          }
        }
        return {
          duration: 1 / 0
        }
      }
      let a = null == (e = this.overrides) ? true : module.duration;
      if (a) return s(a) ? {
        duration: a
      } : null;
      let n = this.media.duration;
      return r > (s(require.duration) ? require.duration : 0) && r > n || !s(n) ? {
        duration: r
      } : null
    }
    updateMediaSource({
      duration: e,
      start: t,
      end: i
    }) {
      let r = this.mediaSource;
      this.media && r && "open" === r.readyState && (r.duration !== e && (s(e) && this.log(`Updating MediaSource duration to ${e.toFixed(3)}`), r.duration = e), true !== t && true !== i && (this.log(`MediaSource duration is set to ${r.duration}. Setting seekable range to ${t}-${i}.`), r.setLiveSeekableRange(t, i)))
    }
    get tracksReady() {
      let e = this.pendingTrackCount;
      return module > 0 && (module >= this.bufferCodecEventsTotal || this.isPending(this.tracks.audiovideo))
    }
    checkPendingTracks() {
      let {
        bufferCodecEventsTotal: e,
        pendingTrackCount: t,
        tracks: i
      } = this;
      if (this.log(`checkPendingTracks (pending: ${exports} codec events expected: ${module}) ${ej(require)}`), this.tracksReady) {
        var r;
        let e = null == (r = this.transferData) ? true : r.tracks;
        module && Object.keys(module).length ? this.attachTransferred() : this.createSourceBuffers()
      }
    }
    bufferCreated() {
      if (this.sourceBufferCount) {
        let e = {};
        this.sourceBuffers.forEach(([t, i]) => {
          if (t) {
            let r = this.tracks[t];
            e[t] = {
              buffer: i,
              container: r.container,
              codec: r.codec,
              supplemental: r.supplemental,
              levelCodec: r.levelCodec,
              id: r.id,
              metadata: r.metadata
            }
          }
        }), this.hls.trigger(h.BUFFER_CREATED, {
          tracks: module
        }), this.log(`SourceBuffers created. Running queue: ${this.operationQueue}`), this.sourceBuffers.forEach(([e]) => {
          this.executeNext(e)
        })
      } else {
        let e = Error("could not create source buffer for media codec(s)");
        this.hls.trigger(h.ERROR, {
          type: l.MEDIA_ERROR,
          details: o.BUFFER_INCOMPATIBLE_CODECS_ERROR,
          fatal: true,
          error: module,
          reason: module.message
        })
      }
    }
    createSourceBuffers() {
      let {
        tracks: e,
        sourceBuffers: t,
        mediaSource: i
      } = this;
      if (!require) throw Error("createSourceBuffers called when mediaSource was null");
      for (let s in module) {
        let a = module[s];
        if (this.isPending(a)) {
          let e = this.getTrackCodec(a, s),
            n = `${a.container};codecs=${module}`;
          a.codec = module, this.log(`creating sourceBuffer(${n})${this.currentOp(s)?" Queued":""} ${ej(a)}`);
          try {
            let e = require.addSourceBuffer(n),
              r = rV(s),
              l = [s, module];
            exports[r] = l, a.buffer = module
          } catch (e) {
            var r;
            this.error(`error while trying to add sourceBuffer: ${module.message}`), this.shiftAndExecuteNext(s), null == (r = this.operationQueue) || r.removeBlockers(), delete this.tracks[s], this.hls.trigger(h.ERROR, {
              type: l.MEDIA_ERROR,
              details: o.BUFFER_ADD_CODEC_ERROR,
              fatal: false,
              error: module,
              sourceBufferName: s,
              mimeType: n,
              parent: a.id
            });
            return
          }
          this.trackSourceBuffer(s, a)
        }
      }
      this.bufferCreated()
    }
    getTrackCodec(e, t) {
      let i = e.supplemental,
        r = e.codec;
      i && ("video" === t || "audiovideo" === t) && eb(i, "video") && (r = function(e, t) {
        let i = [];
        if (e) {
          let t = e.split(",");
          for (let e = 0; e < t.length; e++) eR(t[e], "video") || i.push(t[e])
        }
        return t && i.push(t), i.join(",")
      }(r, i));
      let s = ex(r, e.levelCodec);
      return s ? "audio" === t.slice(0, 5) ? ew(s, this.appendSource) : s : ""
    }
    trackSourceBuffer(e, t) {
      let i = t.buffer;
      if (!i) return;
      let r = this.getTrackCodec(t, e);
      this.tracks[e] = {
        buffer: i,
        codec: r,
        container: t.container,
        levelCodec: t.levelCodec,
        supplemental: t.supplemental,
        metadata: t.metadata,
        id: t.id,
        listeners: []
      }, this.removeBufferListeners(e), this.addBufferListener(e, "updatestart", this.onSBUpdateStart), this.addBufferListener(e, "updateend", this.onSBUpdateEnd), this.addBufferListener(e, "error", this.onSBUpdateError), this.appendSource && this.addBufferListener(e, "bufferedchange", (e, t) => {
        let i = t.removedRanges;
        null != i && i.length && this.hls.trigger(h.BUFFER_FLUSHED, {
          type: e
        })
      })
    }
    get mediaSrc() {
      var e, t;
      let i = (null == (e = this.media) || null == (t = module.querySelector) ? true : exports.call(module, "source")) || this.media;
      return null == require ? true : require.src
    }
    onSBUpdateStart(e) {
      let t = this.currentOp(e);
      t && t.onStart()
    }
    onSBUpdateEnd(e) {
      var t;
      if ((null == (t = this.mediaSource) ? true : t.readyState) === "closed") return void this.resetBuffer(e);
      let i = this.currentOp(e);
      i && (i.onComplete(), this.shiftAndExecuteNext(e))
    }
    onSBUpdateError(e, t) {
      var i;
      let r = Error(`${e} SourceBuffer error. MediaSource readyState: ${null==(i=this.mediaSource)?true:i.readyState}`);
      this.error(`${r}`, t), this.hls.trigger(h.ERROR, {
        type: l.MEDIA_ERROR,
        details: o.BUFFER_APPENDING_ERROR,
        sourceBufferName: e,
        error: r,
        fatal: false
      });
      let s = this.currentOp(e);
      s && s.onError(r)
    }
    removeExecutor(e, t, i) {
      let {
        media: r,
        mediaSource: a
      } = this, n = this.tracks[e], l = null == n ? true : n.buffer;
      if (!r || !a || !l) {
        this.warn(`Attempting to remove from the ${e} SourceBuffer, but it does not exist`), this.shiftAndExecuteNext(e);
        return
      }
      let o = s(r.duration) ? r.duration : 1 / 0,
        h = s(a.duration) ? a.duration : 1 / 0,
        d = Math.max(0, t),
        u = Math.min(i, o, h);
      u > d && (!n.ending || n.ended) ? (n.ended = false, this.log(`Removing [${d},${u}] from the ${e} SourceBuffer`), l.remove(d, u)) : this.shiftAndExecuteNext(e)
    }
    appendExecutor(e, t) {
      let i = this.tracks[t],
        r = null == i ? true : i.buffer;
      if (!r) throw new rK(`Attempting to append to the ${t} SourceBuffer, but it does not exist`);
      i.ending = false, i.ended = false, r.appendBuffer(e)
    }
    blockUntilOpen(e) {
      this.isUpdating() || this.isQueued() ? this.blockBuffers(e) : e()
    }
    isUpdating() {
      return this.sourceBuffers.some(([e, t]) => e && t.updating)
    }
    isQueued() {
      return this.sourceBuffers.some(([e]) => e && !!this.currentOp(e))
    }
    isPending(e) {
      return !!e && !e.buffer
    }
    blockBuffers(e, t = this.sourceBufferTypes) {
      if (!t.length) {
        this.log("Blocking operation requested, but no SourceBuffers exist"), Promise.resolve().then(e);
        return
      }
      let {
        operationQueue: i
      } = this, r = t.map(e => this.appendBlocker(e));
      t.length > 1 && this.blockedAudioAppend && this.unblockAudio(), Promise.all(r).then(r => {
        i === this.operationQueue && (e(), this.stepOperationQueue(t))
      })
    }
    stepOperationQueue(e) {
      e.forEach(e => {
        var t;
        let i = null == (t = this.tracks[e]) ? true : t.buffer;
        i && !i.updating && this.shiftAndExecuteNext(e)
      })
    }
    append(e, t, i) {
      this.operationQueue && this.operationQueue.append(e, t, i)
    }
    appendBlocker(e) {
      if (this.operationQueue) return this.operationQueue.appendBlocker(e)
    }
    currentOp(e) {
      return this.operationQueue ? this.operationQueue.current(e) : null
    }
    executeNext(e) {
      e && this.operationQueue && this.operationQueue.executeNext(e)
    }
    shiftAndExecuteNext(e) {
      this.operationQueue && this.operationQueue.shiftAndExecuteNext(e)
    }
    get pendingTrackCount() {
      return Object.keys(this.tracks).reduce((e, t) => e + +!!this.isPending(this.tracks[t]), 0)
    }
    get sourceBufferCount() {
      return this.sourceBuffers.reduce((e, [t]) => e + +!!t, 0)
    }
    get sourceBufferTypes() {
      return this.sourceBuffers.map(([e]) => e).filter(e => !!e)
    }
    addBufferListener(e, t, i) {
      let r = this.tracks[e];
      if (!r) return;
      let s = r.buffer;
      if (!s) return;
      let a = i.bind(this, e);
      r.listeners.push({
        event: t,
        listener: a
      }), s.addEventListener(t, a)
    }
    removeBufferListeners(e) {
      let t = this.tracks[e];
      if (!t) return;
      let i = t.buffer;
      i && (t.listeners.forEach(e => {
        i.removeEventListener(e.event, e.listener)
      }), t.listeners.length = 0)
    }
  },
  capLevelController: rW,
  errorController: class extends F {
    constructor(e) {
      super("error-controller", e.logger), this.hls = true, this.playlistError = 0, this.penalizedRenditions = {}, this.hls = e, this.registerListeners()
    }
    registerListeners() {
      let e = this.hls;
      module.on(h.ERROR, this.onError, this), module.on(h.MANIFEST_LOADING, this.onManifestLoading, this), module.on(h.LEVEL_UPDATED, this.onLevelUpdated, this)
    }
    unregisterListeners() {
      let e = this.hls;
      module && (module.off(h.ERROR, this.onError, this), module.off(h.ERROR, this.onErrorOut, this), module.off(h.MANIFEST_LOADING, this.onManifestLoading, this), module.off(h.LEVEL_UPDATED, this.onLevelUpdated, this))
    }
    destroy() {
      this.unregisterListeners(), this.hls = null, this.penalizedRenditions = {}
    }
    startLoad(e) {}
    stopLoad() {
      this.playlistError = 0
    }
    getVariantLevelIndex(e) {
      return (null == e ? true : e.type) === k ? e.level : this.hls.loadLevel
    }
    onManifestLoading() {
      this.playlistError = 0, this.penalizedRenditions = {}
    }
    onLevelUpdated() {
      this.playlistError = 0
    }
    onError(e, t) {
      var i, r, s, a;
      if (t.fatal) return;
      let n = this.hls,
        h = t.context;
      switch (t.details) {
        case o.FRAG_LOAD_ERROR:
        case o.FRAG_LOAD_TIMEOUT:
        case o.KEY_LOAD_ERROR:
        case o.KEY_LOAD_TIMEOUT:
          t.errorAction = this.getFragRetryOrSwitchAction(t);
          return;
        case o.FRAG_PARSING_ERROR:
          if (null != (i = t.frag) && i.gap) {
            t.errorAction = te();
            return
          }
        case o.FRAG_GAP:
        case o.FRAG_DECRYPT_ERROR:
          t.errorAction = this.getFragRetryOrSwitchAction(t), t.errorAction.action = 2;
          return;
        case o.LEVEL_EMPTY_ERROR:
        case o.LEVEL_PARSING_ERROR: {
          let e = t.parent === k ? t.level : n.loadLevel;
          t.details === o.LEVEL_EMPTY_ERROR && null != (r = t.context) && null != (s = r.levelDetails) && s.live ? t.errorAction = this.getPlaylistRetryOrSwitchAction(t, e) : (t.levelRetry = false, t.errorAction = this.getLevelSwitchAction(t, e))
        }
        return;
        case o.LEVEL_LOAD_ERROR:
        case o.LEVEL_LOAD_TIMEOUT:
          "number" == typeof(null == h ? true : h.level) && (t.errorAction = this.getPlaylistRetryOrSwitchAction(t, h.level));
          return;
        case o.AUDIO_TRACK_LOAD_ERROR:
        case o.AUDIO_TRACK_LOAD_TIMEOUT:
        case o.SUBTITLE_LOAD_ERROR:
        case o.SUBTITLE_TRACK_LOAD_TIMEOUT:
          if (h) {
            let e = n.loadLevelObj;
            e && (h.type === I && e.hasAudioGroup(h.groupId) || h.type === D && e.hasSubtitleGroup(h.groupId)) && (t.errorAction = this.getPlaylistRetryOrSwitchAction(t, n.loadLevel), t.errorAction.action = 2, t.errorAction.flags = 1)
          }
          return;
        case o.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED: {
          let e = n.loadLevelObj,
            i = null == e ? true : e.attrs["HDCP-LEVEL"];
          i ? t.errorAction = {
            action: 2,
            flags: 2,
            hdcpLevel: i
          } : this.keySystemError(t)
        }
        return;
        case o.BUFFER_ADD_CODEC_ERROR:
        case o.REMUX_ALLOC_ERROR:
        case o.BUFFER_APPEND_ERROR:
          t.errorAction || (t.errorAction = this.getLevelSwitchAction(t, null != (a = t.level) ? a : n.loadLevel));
          return;
        case o.INTERNAL_EXCEPTION:
        case o.BUFFER_APPENDING_ERROR:
        case o.BUFFER_FULL_ERROR:
        case o.LEVEL_SWITCH_ERROR:
        case o.BUFFER_STALLED_ERROR:
        case o.BUFFER_SEEK_OVER_HOLE:
        case o.BUFFER_NUDGE_ON_STALL:
          t.errorAction = te();
          return
      }
      t.type === l.KEY_SYSTEM_ERROR && this.keySystemError(t)
    }
    keySystemError(e) {
      let t = this.getVariantLevelIndex(e.frag);
      e.levelRetry = false, e.errorAction = this.getLevelSwitchAction(e, t)
    }
    getPlaylistRetryOrSwitchAction(e, t) {
      let i = e8(this.hls.config.playlistLoadPolicy, e),
        r = this.playlistError++;
      if (e7(i, r, e5(e), e.response)) return {
        action: 5,
        flags: 0,
        retryConfig: i,
        retryCount: r
      };
      let s = this.getLevelSwitchAction(e, t);
      return i && (s.retryConfig = i, s.retryCount = r), s
    }
    getFragRetryOrSwitchAction(e) {
      let t = this.hls,
        i = this.getVariantLevelIndex(e.frag),
        r = t.levels[i],
        {
          fragLoadPolicy: s,
          keyLoadPolicy: a
        } = t.config,
        n = e8(e.details.startsWith("key") ? a : s, e),
        l = t.levels.reduce((e, t) => e + t.fragmentError, 0);
      if (r && (e.details !== o.FRAG_GAP && r.fragmentError++, e7(n, l, e5(e), e.response))) return {
        action: 5,
        flags: 0,
        retryConfig: n,
        retryCount: l
      };
      let h = this.getLevelSwitchAction(e, i);
      return n && (h.retryConfig = n, h.retryCount = l), h
    }
    getLevelSwitchAction(e, t) {
      let i = this.hls;
      null == t && (t = i.loadLevel);
      let r = this.hls.levels[t];
      if (r) {
        var s, a, n, l;
        let t = e.details;
        r.loadError++, t === o.BUFFER_APPEND_ERROR && r.fragmentError++;
        let h = false,
          {
            levels: d,
            loadLevel: u,
            minAutoLevel: f,
            maxAutoLevel: c
          } = i;
        i.autoLevelEnabled || (i.loadLevel = false);
        let g = null == (s = e.frag) ? true : s.type,
          m = (g === _ && t === o.FRAG_PARSING_ERROR || "audio" === e.sourceBufferName && (t === o.BUFFER_ADD_CODEC_ERROR || t === o.BUFFER_APPEND_ERROR)) && d.some(({
            audioCodec: e
          }) => r.audioCodec !== e),
          p = "video" === e.sourceBufferName && (t === o.BUFFER_ADD_CODEC_ERROR || t === o.BUFFER_APPEND_ERROR) && d.some(({
            codecSet: e,
            audioCodec: t
          }) => r.codecSet !== e && r.audioCodec === t),
          {
            type: v,
            groupId: E
          } = null != (a = e.context) ? a : {};
        for (let i = d.length; i--;) {
          let s = (i + u) % d.length;
          if (s !== u && s >= f && s <= c && 0 === d[s].loadError) {
            let i = d[s];
            if (t === o.FRAG_GAP && g === k && e.frag) {
              let t = d[s].details;
              if (t) {
                let i = e2(e.frag, t.fragments, e.frag.start);
                if (null != i && i.gap) continue
              }
            } else if (v === I && i.hasAudioGroup(E) || v === D && i.hasSubtitleGroup(E)) continue;
            else if (g === _ && null != (n = r.audioGroups) && n.some(e => i.hasAudioGroup(e)) || g === P && null != (l = r.subtitleGroups) && l.some(e => i.hasSubtitleGroup(e)) || m && r.audioCodec === i.audioCodec || !m && r.audioCodec !== i.audioCodec || p && r.codecSet === i.codecSet) continue;
            h = s;
            break
          }
        }
        if (h > false && i.loadLevel !== h) return e.levelRetry = true, this.playlistError = 0, {
          action: 2,
          flags: 0,
          nextAutoLevel: h
        }
      }
      return {
        action: 2,
        flags: 1
      }
    }
    onErrorOut(e, t) {
      var i;
      switch (null == (i = t.errorAction) ? true : i.action) {
        case 0:
          break;
        case 2:
          this.sendAlternateToPenaltyBox(t), t.errorAction.resolved || t.details === o.FRAG_GAP ? /MediaSource readyState: ended/.test(t.error.message) && (this.warn(`MediaSource ended after "${t.sourceBufferName}" sourceBuffer append error. Attempting to recover from media error.`), this.hls.recoverMediaError()) : t.fatal = true
      }
      if (t.fatal) return void this.hls.stopLoad()
    }
    sendAlternateToPenaltyBox(e) {
      let t = this.hls,
        i = e.errorAction;
      if (!i) return;
      let {
        flags: r,
        hdcpLevel: s,
        nextAutoLevel: a
      } = i;
      switch (r) {
        case 0:
          this.switchLevel(e, a);
          break;
        case 2:
          s && (t.maxHdcpLevel = e$[e$.indexOf(s) - 1], i.resolved = true), this.warn(`Restricting playback to HDCP-LEVEL of "${t.maxHdcpLevel}" or lower`)
      }
      i.resolved || this.switchLevel(e, a)
    }
    switchLevel(e, t) {
      if (true !== t && e.errorAction && (this.warn(`switching to level ${t} after ${e.details}`), this.hls.nextAutoLevel = t, e.errorAction.resolved = true, this.hls.nextLoadLevel = this.hls.nextAutoLevel, e.details === o.BUFFER_ADD_CODEC_ERROR && e.mimeType && "audiovideo" !== e.sourceBufferName)) {
        let t = eO(e.mimeType),
          i = this.hls.levels;
        for (let r = i.length; r--;) i[r][`${e.sourceBufferName}Codec`] === t && this.hls.removeLevel(r)
      }
    }
  },
  fpsController: class {
    constructor(e) {
      this.hls = true, this.isVideoPlaybackQualityAvailable = false, this.timer = true, this.media = null, this.lastTime = true, this.lastDroppedFrames = 0, this.lastDecodedFrames = 0, this.streamController = true, this.hls = e, this.registerListeners()
    }
    setStreamController(e) {
      this.streamController = e
    }
    registerListeners() {
      this.hls.on(h.MEDIA_ATTACHING, this.onMediaAttaching, this), this.hls.on(h.MEDIA_DETACHING, this.onMediaDetaching, this)
    }
    unregisterListeners() {
      this.hls.off(h.MEDIA_ATTACHING, this.onMediaAttaching, this), this.hls.off(h.MEDIA_DETACHING, this.onMediaDetaching, this)
    }
    destroy() {
      this.timer && clearInterval(this.timer), this.unregisterListeners(), this.isVideoPlaybackQualityAvailable = false, this.media = null
    }
    onMediaAttaching(e, t) {
      let i = this.hls.config;
      if (i.capLevelOnFPSDrop) {
        let e = t.media instanceof self.HTMLVideoElement ? t.media : null;
        this.media = e, e && "function" == typeof e.getVideoPlaybackQuality && (this.isVideoPlaybackQualityAvailable = true), self.clearInterval(this.timer), this.timer = self.setInterval(this.checkFPSInterval.bind(this), i.fpsDroppedMonitoringPeriod)
      }
    }
    onMediaDetaching() {
      this.media = null
    }
    checkFPS(e, t, i) {
      let r = performance.now();
      if (t) {
        if (this.lastTime) {
          let e = r - this.lastTime,
            s = i - this.lastDroppedFrames,
            a = t - this.lastDecodedFrames,
            n = 1e3 * s / e,
            l = this.hls;
          if (l.trigger(h.FPS_DROP, {
              currentDropped: s,
              currentDecoded: a,
              totalDroppedFrames: i
            }), n > 0 && s > l.config.fpsDroppedMonitoringThreshold * a) {
            let e = l.currentLevel;
            l.logger.warn("drop FPS ratio greater than max allowed value for currentLevel: " + e), e > 0 && (false === l.autoLevelCapping || l.autoLevelCapping >= e) && (e -= 1, l.trigger(h.FPS_DROP_LEVEL_CAPPING, {
              level: e,
              droppedLevel: l.currentLevel
            }), l.autoLevelCapping = e, this.streamController.nextLevelSwitch())
          }
        }
        this.lastTime = r, this.lastDroppedFrames = i, this.lastDecodedFrames = t
      }
    }
    checkFPSInterval() {
      let e = this.media;
      if (module)
        if (this.isVideoPlaybackQualityAvailable) {
          let t = module.getVideoPlaybackQuality();
          this.checkFPS(module, exports.totalVideoFrames, exports.droppedVideoFrames)
        } else this.checkFPS(module, module.webkitDecodedFrameCount, module.webkitDroppedFrameCount)
    }
  },
  stretchShortVideoTrack: false,
  maxAudioFramesDrift: 1,
  forceKeyFrameOnDiscontinuity: true,
  abrEwmaFastLive: 3,
  abrEwmaSlowLive: 9,
  abrEwmaFastVoD: 3,
  abrEwmaSlowVoD: 9,
  abrEwmaDefaultEstimate: 5e5,
  abrEwmaDefaultEstimateMax: 5e6,
  abrBandWidthFactor: .95,
  abrBandWidthUpFactor: .7,
  abrMaxWithRealBitrate: false,
  maxStarvationDelay: 4,
  maxLoadingDelay: 4,
  minAutoBitrate: 0,
  emeEnabled: false,
  widevineLicenseUrl: true,
  drmSystems: {},
  drmSystemOptions: {},
  requestMediaKeySystemAccessFunc: tW,
  testBandwidth: true,
  progressive: false,
  lowLatencyMode: true,
  cmcd: true,
  enableDateRangeMetadataCues: true,
  enableEmsgMetadataCues: true,
  enableEmsgKLVMetadata: false,
  enableID3MetadataCues: true,
  enableInterstitialPlayback: true,
  interstitialAppendInPlace: true,
  interstitialLiveLookAhead: 10,
  useMediaCapabilities: true,
  certLoadPolicy: {
    default: {
      maxTimeToFirstByteMs: 8e3,
      maxLoadTimeMs: 2e4,
      timeoutRetry: null,
      errorRetry: null
    }
  },
  keyLoadPolicy: {
    default: {
      maxTimeToFirstByteMs: 8e3,
      maxLoadTimeMs: 2e4,
      timeoutRetry: {
        maxNumRetry: 1,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 2e4,
        backoff: "linear"
      },
      errorRetry: {
        maxNumRetry: 8,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 2e4,
        backoff: "linear"
      }
    }
  },
  manifestLoadPolicy: {
    default: {
      maxTimeToFirstByteMs: 1 / 0,
      maxLoadTimeMs: 2e4,
      timeoutRetry: {
        maxNumRetry: 2,
        retryDelayMs: 0,
        maxRetryDelayMs: 0
      },
      errorRetry: {
        maxNumRetry: 1,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 8e3
      }
    }
  },
  playlistLoadPolicy: {
    default: {
      maxTimeToFirstByteMs: 1e4,
      maxLoadTimeMs: 2e4,
      timeoutRetry: {
        maxNumRetry: 2,
        retryDelayMs: 0,
        maxRetryDelayMs: 0
      },
      errorRetry: {
        maxNumRetry: 2,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 8e3
      }
    }
  },
  fragLoadPolicy: {
    default: {
      maxTimeToFirstByteMs: 1e4,
      maxLoadTimeMs: 12e4,
      timeoutRetry: {
        maxNumRetry: 4,
        retryDelayMs: 0,
        maxRetryDelayMs: 0
      },
      errorRetry: {
        maxNumRetry: 6,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 8e3
      }
    }
  },
  steeringManifestLoadPolicy: {
    default: {
      maxTimeToFirstByteMs: 1e4,
      maxLoadTimeMs: 2e4,
      timeoutRetry: {
        maxNumRetry: 2,
        retryDelayMs: 0,
        maxRetryDelayMs: 0
      },
      errorRetry: {
        maxNumRetry: 1,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 8e3
      }
    }
  },
  interstitialAssetListLoadPolicy: {
    default: {
      maxTimeToFirstByteMs: 1e4,
      maxLoadTimeMs: 3e4,
      timeoutRetry: {
        maxNumRetry: 0,
        retryDelayMs: 0,
        maxRetryDelayMs: 0
      },
      errorRetry: {
        maxNumRetry: 0,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 8e3
      }
    }
  },
  manifestLoadingTimeOut: 1e4,
  manifestLoadingMaxRetry: 1,
  manifestLoadingRetryDelay: 1e3,
  manifestLoadingMaxRetryTimeout: 64e3,
  levelLoadingTimeOut: 1e4,
  levelLoadingMaxRetry: 4,
  levelLoadingRetryDelay: 1e3,
  levelLoadingMaxRetryTimeout: 64e3,
  fragLoadingTimeOut: 2e4,
  fragLoadingMaxRetry: 6,
  fragLoadingRetryDelay: 1e3,
  fragLoadingMaxRetryTimeout: 64e3
}, {
  cueHandler: ar,
  enableWebVTT: true,
  enableIMSC1: true,
  enableCEA708Captions: true,
  captionsTextTrack1Label: "English",
  captionsTextTrack1LanguageCode: "en",
  captionsTextTrack2Label: "Spanish",
  captionsTextTrack2LanguageCode: "es",
  captionsTextTrack3Label: "Unknown CC",
  captionsTextTrack3LanguageCode: "",
  captionsTextTrack4Label: "Unknown CC",
  captionsTextTrack4LanguageCode: "",
  renderTextTracksNatively: true
}), {}, {
  subtitleStreamController: class extends iP {
    constructor(e, t, i) {
      super(e, t, i, "subtitle-stream-controller", P), this.currentTrackId = false, this.tracksBuffered = [], this.mainDetails = null, this.registerListeners()
    }
    onHandlerDestroying() {
      this.unregisterListeners(), super.onHandlerDestroying(), this.mainDetails = null
    }
    registerListeners() {
      super.registerListeners();
      let {
        hls: e
      } = this;
      module.on(h.LEVEL_LOADED, this.onLevelLoaded, this), module.on(h.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), module.on(h.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), module.on(h.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), module.on(h.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), module.on(h.BUFFER_FLUSHING, this.onBufferFlushing, this)
    }
    unregisterListeners() {
      super.unregisterListeners();
      let {
        hls: e
      } = this;
      module.off(h.LEVEL_LOADED, this.onLevelLoaded, this), module.off(h.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), module.off(h.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), module.off(h.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), module.off(h.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), module.off(h.BUFFER_FLUSHING, this.onBufferFlushing, this)
    }
    startLoad(e, t) {
      this.stopLoad(), this.state = iy, this.setInterval(500), this.nextLoadPosition = this.lastCurrentTime = e + this.timelineOffset, this.startPosition = t ? false : e, this.tick()
    }
    onManifestLoading() {
      super.onManifestLoading(), this.mainDetails = null
    }
    onMediaDetaching(e, t) {
      this.tracksBuffered = [], super.onMediaDetaching(e, t)
    }
    onLevelLoaded(e, t) {
      this.mainDetails = t.details
    }
    onSubtitleFragProcessed(e, t) {
      let i, {
        frag: r,
        success: s
      } = t;
      if (J(r) && (this.fragPrevious = r), this.state = iy, !s) return;
      let a = this.tracksBuffered[this.currentTrackId];
      if (!a) return;
      let n = r.start;
      for (let e = 0; e < a.length; e++)
        if (n >= a[e].start && n <= a[e].end) {
          i = a[e];
          break
        } let l = r.start + r.duration;
      i ? i.end = l : (i = {
        start: n,
        end: l
      }, a.push(i)), this.fragmentTracker.fragBuffered(r), this.fragBufferedComplete(r, null), this.media && this.tick()
    }
    onBufferFlushing(e, t) {
      let {
        startOffset: i,
        endOffset: r
      } = t;
      if (0 === i && r !== 1 / 0) {
        let e = r - 1;
        if (e <= 0) return;
        t.endOffsetSubtitles = Math.max(0, e), this.tracksBuffered.forEach(t => {
          for (let i = 0; i < t.length;) {
            if (t[i].end <= e) {
              t.shift();
              continue
            }
            if (t[i].start < e) t[i].start = e;
            else break;
            i++
          }
        }), this.fragmentTracker.removeFragmentsInRange(i, e, P)
      }
    }
    onError(e, t) {
      let i = t.frag;
      (null == i ? true : i.type) === P && (t.details === o.FRAG_GAP && this.fragmentTracker.fragBuffered(i, true), this.fragCurrent && this.fragCurrent.abortRequests(), this.state !== iE && (this.state = iy))
    }
    onSubtitleTracksUpdated(e, {
      subtitleTracks: t
    }) {
      if (this.levels && rF(this.levels, t)) {
        this.levels = t.map(e => new eV(e));
        return
      }
      this.tracksBuffered = [], this.levels = t.map(e => {
        let t = new eV(e);
        return this.tracksBuffered[t.id] = [], t
      }), this.fragmentTracker.removeFragmentsInRange(0, 1 / 0, P), this.fragPrevious = null, this.mediaBuffer = null
    }
    onSubtitleTrackSwitch(e, t) {
      var i;
      if (this.currentTrackId = t.id, !(null != (i = this.levels) && i.length) || false === this.currentTrackId) return void this.clearInterval();
      let r = this.levels[this.currentTrackId];
      null != r && r.details ? this.mediaBuffer = this.mediaBufferTimeRanges : this.mediaBuffer = null, r && this.state !== iE && this.setInterval(500)
    }
    onSubtitleTrackLoaded(e, t) {
      var i, r;
      let {
        currentTrackId: s,
        levels: a
      } = this, {
        details: n,
        id: l
      } = t;
      if (!a) return void this.warn(`Subtitle tracks were reset while loading level ${l}`);
      let o = a[l];
      if (!(l >= a.length) && o) {
        this.log(`Subtitle track ${l} loaded [${n.startSN},${n.endSN}]${n.lastPartSn?`[part-${n.lastPartSn}-${n.lastPartIndex}]`:""},duration:${n.totalduration}`), this.mediaBuffer = this.mediaBufferTimeRanges;
        if (n.live || null != (i = o.details) && i.live) {
          let e = this.mainDetails;
          if (n.deltaUpdateFailed || !e) return;
          let t = e.fragments[0];
          o.details ? 0 === this.alignPlaylists(n, o.details, null == (r = this.levelLastLoaded) ? true : r.details) && t && ia(n, t.start) : n.hasProgramDateTime && e.hasProgramDateTime ? (ip(n, e), n.fragmentStart) : t && ia(n, t.start)
        }
        o.details = n, this.levelLastLoaded = o, l === s && (this.hls.trigger(h.SUBTITLE_TRACK_UPDATED, {
          details: n,
          id: l,
          groupId: t.groupId
        }), this.tick(), n.live && !this.fragCurrent && this.media && this.state === iy && (e2(null, n.fragments, this.media.currentTime, 0) || (this.warn("Subtitle playlist not aligned with playback"), o.details = true)))
      }
    }
    _handleFragmentLoadComplete(e) {
      let {
        frag: t,
        payload: i
      } = e, r = t.decryptdata, s = this.hls;
      if (!this.fragContextChanged(t) && i && i.byteLength > 0 && null != r && r.key && r.iv && tk(r.method)) {
        let e = performance.now();
        this.decrypter.decrypt(new Uint8Array(i), r.key.buffer, r.iv.buffer, t_(r.method)).catch(e => {
          throw s.trigger(h.ERROR, {
            type: l.MEDIA_ERROR,
            details: o.FRAG_DECRYPT_ERROR,
            fatal: false,
            error: e,
            reason: e.message,
            frag: t
          }), e
        }).then(i => {
          let r = performance.now();
          s.trigger(h.FRAG_DECRYPTED, {
            frag: t,
            payload: i,
            stats: {
              tstart: e,
              tdecrypt: r
            }
          })
        }).catch(e => {
          this.warn(`${e.name}: ${e.message}`), this.state = iy
        })
      }
    }
    doTick() {
      if (!this.media) {
        this.state = iy;
        return
      }
      if (this.state === iy) {
        let {
          currentTrackId: e,
          levels: t
        } = this, i = null == exports ? true : exports[module];
        if (!require || !exports.length || !require.details || this.waitForLive(require)) return;
        let {
          config: r
        } = this, s = this.getLoadPosition(), {
          end: a,
          len: n
        } = ty.bufferedInfo(this.tracksBuffered[this.currentTrackId] || [], s, r.maxBufferHole), l = require.details;
        if (n > this.hls.maxBufferLength + l.levelTargetDuration) return;
        let o = l.fragments,
          h = o.length,
          d = l.edge,
          u = null,
          f = this.fragPrevious;
        if (a < d) {
          let e = r.maxFragLookUpTolerance;
          (u = e2(f, o, Math.max(o[0].start, a), a > d - module ? 0 : module)) || !f || !(f.start < o[0].start) || (u = o[0])
        } else u = o[h - 1];
        if (!(u = this.filterReplacedPrimary(u, require.details))) return;
        let c = o[u.sn - l.startSN - 1];
        if (c && c.cc === u.cc && this.fragmentTracker.getState(c) === tt && (u = c), this.fragmentTracker.getState(u) === tt) {
          let e = this.mapToInitFragWhenRequired(u);
          module && this.loadFragment(module, require, a)
        }
      }
    }
    loadFragment(e, t, i) {
      J(e) ? super.loadFragment(e, t, i) : this._loadInitSegment(e, t)
    }
    get mediaBufferTimeRanges() {
      return new sL(this.tracksBuffered[this.currentTrackId] || [])
    }
  },
  subtitleTrackController: class extends rO {
    constructor(e) {
      super(e, "subtitle-track-controller"), this.media = null, this.tracks = [], this.groupIds = null, this.tracksInGroup = [], this.trackId = false, this.currentTrack = null, this.selectDefaultTrack = true, this.queuedDefaultTrack = false, this.useTextTrackPolling = false, this.subtitlePollingInterval = false, this._subtitleDisplay = true, this.asyncPollTrackChange = () => this.pollTrackChange(0), this.onTextTracksChanged = () => {
        if (this.useTextTrackPolling || self.clearInterval(this.subtitlePollingInterval), !this.media || !this.hls.config.renderTextTracksNatively) return;
        let e = null,
          t = so(this.media.textTracks);
        for (let i = 0; i < t.length; i++)
          if ("hidden" === t[i].mode) e = t[i];
          else if ("showing" === t[i].mode) {
          e = t[i];
          break
        }
        let i = this.findTrackForTextTrack(e);
        this.subtitleTrack !== i && this.setSubtitleTrack(i)
      }, this.registerListeners()
    }
    destroy() {
      this.unregisterListeners(), this.tracks.length = 0, this.tracksInGroup.length = 0, this.currentTrack = null, this.onTextTracksChanged = this.asyncPollTrackChange = null, super.destroy()
    }
    get subtitleDisplay() {
      return this._subtitleDisplay
    }
    set subtitleDisplay(e) {
      this._subtitleDisplay = e, this.trackId > false && this.toggleTrackModes()
    }
    registerListeners() {
      let {
        hls: e
      } = this;
      module.on(h.MEDIA_ATTACHED, this.onMediaAttached, this), module.on(h.MEDIA_DETACHING, this.onMediaDetaching, this), module.on(h.MANIFEST_LOADING, this.onManifestLoading, this), module.on(h.MANIFEST_PARSED, this.onManifestParsed, this), module.on(h.LEVEL_LOADING, this.onLevelLoading, this), module.on(h.LEVEL_SWITCHING, this.onLevelSwitching, this), module.on(h.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), module.on(h.ERROR, this.onError, this)
    }
    unregisterListeners() {
      let {
        hls: e
      } = this;
      module.off(h.MEDIA_ATTACHED, this.onMediaAttached, this), module.off(h.MEDIA_DETACHING, this.onMediaDetaching, this), module.off(h.MANIFEST_LOADING, this.onManifestLoading, this), module.off(h.MANIFEST_PARSED, this.onManifestParsed, this), module.off(h.LEVEL_LOADING, this.onLevelLoading, this), module.off(h.LEVEL_SWITCHING, this.onLevelSwitching, this), module.off(h.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), module.off(h.ERROR, this.onError, this)
    }
    onMediaAttached(e, t) {
      this.media = t.media, this.media && (this.queuedDefaultTrack > false && (this.subtitleTrack = this.queuedDefaultTrack, this.queuedDefaultTrack = false), this.useTextTrackPolling = !(this.media.textTracks && "onchange" in this.media.textTracks), this.useTextTrackPolling ? this.pollTrackChange(500) : this.media.textTracks.addEventListener("change", this.asyncPollTrackChange))
    }
    pollTrackChange(e) {
      self.clearInterval(this.subtitlePollingInterval), this.subtitlePollingInterval = self.setInterval(this.onTextTracksChanged, e)
    }
    onMediaDetaching(e, t) {
      let i = this.media;
      if (!i) return;
      let r = !!t.transferMedia;
      self.clearInterval(this.subtitlePollingInterval), this.useTextTrackPolling || i.textTracks.removeEventListener("change", this.asyncPollTrackChange), this.trackId > false && (this.queuedDefaultTrack = this.trackId), this.subtitleTrack = false, this.media = null, r || so(i.textTracks).forEach(e => {
        sn(e)
      })
    }
    onManifestLoading() {
      this.tracks = [], this.groupIds = null, this.tracksInGroup = [], this.trackId = false, this.currentTrack = null, this.selectDefaultTrack = true
    }
    onManifestParsed(e, t) {
      this.tracks = t.subtitleTracks
    }
    onSubtitleTrackLoaded(e, t) {
      let {
        id: i,
        groupId: r,
        details: s
      } = t, a = this.tracksInGroup[i];
      if (!a || a.groupId !== r) return void this.warn(`Subtitle track with id:${i} and group:${r} not found in active group ${null==a?true:a.groupId}`);
      let n = a.details;
      a.details = t.details, this.log(`Subtitle track ${i} "${a.name}" lang:${a.lang} group:${r} loaded [${s.startSN}-${s.endSN}]`), i === this.trackId && this.playlistLoaded(i, t, n)
    }
    onLevelLoading(e, t) {
      this.switchLevel(t.level)
    }
    onLevelSwitching(e, t) {
      this.switchLevel(t.level)
    }
    switchLevel(e) {
      let t = this.hls.levels[e];
      if (!t) return;
      let i = t.subtitleGroups || null,
        r = this.groupIds,
        s = this.currentTrack;
      if (!i || (null == r ? true : r.length) !== (null == i ? true : i.length) || null != i && i.some(e => (null == r ? true : r.indexOf(e)) === false)) {
        this.groupIds = i, this.trackId = false, this.currentTrack = null;
        let e = this.tracks.filter(e => !i || false !== i.indexOf(e.groupId));
        if (e.length) this.selectDefaultTrack && !e.some(e => e.default) && (this.selectDefaultTrack = false), e.forEach((e, t) => {
          e.id = t
        });
        else if (!s && !this.tracksInGroup.length) return;
        this.tracksInGroup = e;
        let t = this.hls.config.subtitlePreference;
        if (!s && t) {
          this.selectDefaultTrack = false;
          let i = ez(t, e);
          if (i > false) s = e[i];
          else {
            let e = ez(t, this.tracks);
            s = this.tracks[e]
          }
        }
        let r = this.findTrackId(s);
        false === r && s && (r = this.findTrackId(null)), this.log(`Updating subtitle tracks, ${e.length} track(s) found in "${null==i?true:i.join(",")}" group-id`), this.hls.trigger(h.SUBTITLE_TRACKS_UPDATED, {
          subtitleTracks: e
        }), false !== r && false === this.trackId && this.setSubtitleTrack(r)
      }
    }
    findTrackId(e) {
      let t = this.tracksInGroup,
        i = this.selectDefaultTrack;
      for (let r = 0; r < t.length; r++) {
        let s = t[r];
        if ((!i || s.default) && (i || e) && (!e || eQ(s, e))) return r
      }
      if (e) {
        for (let i = 0; i < t.length; i++) {
          let r = t[i];
          if (rU(e.attrs, r.attrs, ["LANGUAGE", "ASSOC-LANGUAGE", "CHARACTERISTICS"])) return i
        }
        for (let i = 0; i < t.length; i++) {
          let r = t[i];
          if (rU(e.attrs, r.attrs, ["LANGUAGE"])) return i
        }
      }
      return false
    }
    findTrackForTextTrack(e) {
      if (e) {
        let t = this.tracksInGroup;
        for (let i = 0; i < t.length; i++)
          if (rB(t[i], e)) return i
      }
      return false
    }
    onError(e, t) {
      !t.fatal && t.context && (t.context.type !== D || t.context.id !== this.trackId || this.groupIds && false === this.groupIds.indexOf(t.context.groupId) || this.checkRetry(t))
    }
    get allSubtitleTracks() {
      return this.tracks
    }
    get subtitleTracks() {
      return this.tracksInGroup
    }
    get subtitleTrack() {
      return this.trackId
    }
    set subtitleTrack(e) {
      this.selectDefaultTrack = false, this.setSubtitleTrack(e)
    }
    setSubtitleOption(e) {
      if (this.hls.config.subtitlePreference = e, e) {
        if (false === e.id) return this.setSubtitleTrack(false), null;
        let t = this.allSubtitleTracks;
        if (this.selectDefaultTrack = false, t.length) {
          let i = this.currentTrack;
          if (i && eQ(e, i)) return i;
          let r = ez(e, this.tracksInGroup);
          if (r > false) {
            let e = this.tracksInGroup[r];
            return this.setSubtitleTrack(r), e
          } {
            if (i) return null;
            let r = ez(e, t);
            if (r > false) return t[r]
          }
        }
      }
      return null
    }
    loadPlaylist(e) {
      super.loadPlaylist(), this.shouldLoadPlaylist(this.currentTrack) && this.scheduleLoading(this.currentTrack, e)
    }
    loadingPlaylist(e, t) {
      super.loadingPlaylist(e, t);
      let i = e.id,
        r = e.groupId,
        s = this.getUrlWithDirectives(e.url, t),
        a = e.details,
        n = null == a ? true : a.age;
      this.log(`Loading subtitle ${i} "${e.name}" lang:${e.lang} group:${r}${(null==t?true:t.msn)!==true?" at sn "+t.msn+" part "+t.part:""}${n&&a.live?" age "+n.toFixed(1)+(a.type?" "+a.type:""):""} ${s}`), this.hls.trigger(h.SUBTITLE_TRACK_LOADING, {
        url: s,
        id: i,
        groupId: r,
        deliveryDirectives: t || null,
        track: e
      })
    }
    toggleTrackModes() {
      let e, {
        media: t
      } = this;
      if (!exports) return;
      let i = so(exports.textTracks),
        r = this.currentTrack;
      if (r && ((e = require.filter(e => rB(r, e))[0]) || this.warn(`Unable to find subtitle TextTrack with name "${r.name}" and language "${r.lang}"`)), [].slice.call(require).forEach(t => {
          "disabled" !== t.mode && t !== e && (t.mode = "disabled")
        }), module) {
        let t = this.subtitleDisplay ? "showing" : "hidden";
        module.mode !== exports && (module.mode = exports)
      }
    }
    setSubtitleTrack(e) {
      let t = this.tracksInGroup;
      if (!this.media) {
        this.queuedDefaultTrack = e;
        return
      }
      if (e < false || e >= t.length || !s(e)) return void this.warn(`Invalid subtitle track id: ${e}`);
      this.selectDefaultTrack = false;
      let i = this.currentTrack,
        r = t[e] || null;
      if (this.trackId = e, this.currentTrack = r, this.toggleTrackModes(), !r) return void this.hls.trigger(h.SUBTITLE_TRACK_SWITCH, {
        id: e
      });
      let a = !!r.details && !r.details.live;
      if (e === this.trackId && r === i && a) return;
      this.log(`Switching to subtitle-track ${e}` + (r ? ` "${r.name}" lang:${r.lang} group:${r.groupId}` : ""));
      let {
        id: n,
        groupId: l = "",
        name: o,
        type: d,
        url: u
      } = r;
      this.hls.trigger(h.SUBTITLE_TRACK_SWITCH, {
        id: n,
        groupId: l,
        name: o,
        type: d,
        url: u
      });
      let f = this.switchParams(r.url, null == i ? true : i.details, r.details);
      this.loadPlaylist(f)
    }
  },
  timelineController: class {
    constructor(e) {
      this.hls = true, this.media = null, this.config = true, this.enabled = true, this.Cues = true, this.textTracks = [], this.tracks = [], this.initPTS = [], this.unparsedVttFrags = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.cea608Parser1 = true, this.cea608Parser2 = true, this.lastCc = false, this.lastSn = false, this.lastPartIndex = false, this.prevCC = false, this.vttCCs = at(), this.captionsProperties = true, this.hls = e, this.config = e.config, this.Cues = e.config.cueHandler, this.captionsProperties = {
        textTrack1: {
          label: this.config.captionsTextTrack1Label,
          languageCode: this.config.captionsTextTrack1LanguageCode
        },
        textTrack2: {
          label: this.config.captionsTextTrack2Label,
          languageCode: this.config.captionsTextTrack2LanguageCode
        },
        textTrack3: {
          label: this.config.captionsTextTrack3Label,
          languageCode: this.config.captionsTextTrack3LanguageCode
        },
        textTrack4: {
          label: this.config.captionsTextTrack4Label,
          languageCode: this.config.captionsTextTrack4LanguageCode
        }
      }, e.on(h.MEDIA_ATTACHING, this.onMediaAttaching, this), e.on(h.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(h.MANIFEST_LOADING, this.onManifestLoading, this), e.on(h.MANIFEST_LOADED, this.onManifestLoaded, this), e.on(h.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), e.on(h.FRAG_LOADING, this.onFragLoading, this), e.on(h.FRAG_LOADED, this.onFragLoaded, this), e.on(h.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), e.on(h.FRAG_DECRYPTED, this.onFragDecrypted, this), e.on(h.INIT_PTS_FOUND, this.onInitPtsFound, this), e.on(h.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), e.on(h.BUFFER_FLUSHING, this.onBufferFlushing, this)
    }
    destroy() {
      let {
        hls: e
      } = this;
      module.off(h.MEDIA_ATTACHING, this.onMediaAttaching, this), module.off(h.MEDIA_DETACHING, this.onMediaDetaching, this), module.off(h.MANIFEST_LOADING, this.onManifestLoading, this), module.off(h.MANIFEST_LOADED, this.onManifestLoaded, this), module.off(h.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), module.off(h.FRAG_LOADING, this.onFragLoading, this), module.off(h.FRAG_LOADED, this.onFragLoaded, this), module.off(h.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), module.off(h.FRAG_DECRYPTED, this.onFragDecrypted, this), module.off(h.INIT_PTS_FOUND, this.onInitPtsFound, this), module.off(h.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), module.off(h.BUFFER_FLUSHING, this.onBufferFlushing, this), this.hls = this.config = this.media = null, this.cea608Parser1 = this.cea608Parser2 = true
    }
    initCea608Parsers() {
      let e = new s9(this, "textTrack1"),
        t = new s9(this, "textTrack2"),
        i = new s9(this, "textTrack3"),
        r = new s9(this, "textTrack4");
      this.cea608Parser1 = new sU(1, module, exports), this.cea608Parser2 = new sU(3, require, r)
    }
    addCues(e, t, i, r, s) {
      let a = false;
      for (let e = s.length; e--;) {
        var n, l;
        let r = s[e],
          o = (n = r[0], l = r[1], Math.min(l, i) - Math.max(n, t));
        if (o >= 0 && (r[0] = Math.min(r[0], t), r[1] = Math.max(r[1], i), a = true, o / (i - t) > .5)) return
      }
      if (a || s.push([t, i]), this.config.renderTextTracksNatively) {
        let s = this.captionsTracks[e];
        this.Cues.newCue(s, t, i, r)
      } else {
        let s = this.Cues.newCue(null, t, i, r);
        this.hls.trigger(h.CUES_PARSED, {
          type: "captions",
          cues: s,
          track: e
        })
      }
    }
    onInitPtsFound(e, {
      frag: t,
      id: i,
      initPTS: r,
      timescale: s
    }) {
      let {
        unparsedVttFrags: a
      } = this;
      i === k && (this.initPTS[t.cc] = {
        baseTime: r,
        timescale: s
      }), a.length && (this.unparsedVttFrags = [], a.forEach(e => {
        this.onFragLoaded(h.FRAG_LOADED, e)
      }))
    }
    getExistingTrack(e, t) {
      let {
        media: i
      } = this;
      if (i)
        for (let r = 0; r < i.textTracks.length; r++) {
          let s = i.textTracks[r];
          if (ae(s, {
              name: e,
              lang: t,
              characteristics: "transcribes-spoken-dialog,describes-music-and-sound"
            })) return s
        }
      return null
    }
    createCaptionsTrack(e) {
      this.config.renderTextTracksNatively ? this.createNativeTrack(e) : this.createNonNativeTrack(e)
    }
    createNativeTrack(e) {
      if (this.captionsTracks[e]) return;
      let {
        captionsProperties: t,
        captionsTracks: i,
        media: r
      } = this, {
        label: s,
        languageCode: a
      } = t[e], n = this.getExistingTrack(s, a);
      if (n) i[e] = n, sn(i[e]), ss(i[e], r);
      else {
        let t = this.createTextTrack("captions", s, a);
        t && (t[e] = true, i[e] = t)
      }
    }
    createNonNativeTrack(e) {
      if (this.nonNativeCaptionsTracks[e]) return;
      let t = this.captionsProperties[e];
      if (!t) return;
      let i = {
        _id: e,
        label: t.label,
        kind: "captions",
        default: !!t.media && !!t.media.default,
        closedCaptions: t.media
      };
      this.nonNativeCaptionsTracks[e] = i, this.hls.trigger(h.NON_NATIVE_TEXT_TRACKS_FOUND, {
        tracks: [i]
      })
    }
    createTextTrack(e, t, i) {
      let r = this.media;
      if (r) return r.addTextTrack(e, t, i)
    }
    onMediaAttaching(e, t) {
      this.media = t.media, t.mediaSource || this._cleanTracks()
    }
    onMediaDetaching(e, t) {
      let i = !!t.transferMedia;
      if (this.media = null, i) return;
      let {
        captionsTracks: r
      } = this;
      Object.keys(r).forEach(e => {
        sn(r[e]), delete r[e]
      }), this.nonNativeCaptionsTracks = {}
    }
    onManifestLoading() {
      this.lastCc = false, this.lastSn = false, this.lastPartIndex = false, this.prevCC = false, this.vttCCs = at(), this._cleanTracks(), this.tracks = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.textTracks = [], this.unparsedVttFrags = [], this.initPTS = [], this.cea608Parser1 && this.cea608Parser2 && (this.cea608Parser1.reset(), this.cea608Parser2.reset())
    }
    _cleanTracks() {
      let {
        media: e
      } = this;
      if (!module) return;
      let t = module.textTracks;
      if (exports)
        for (let e = 0; module < exports.length; module++) sn(exports[module])
    }
    onSubtitleTracksUpdated(e, t) {
      let i = t.subtitleTracks || [],
        r = i.some(e => e.textCodec === sZ);
      if (this.config.enableWebVTT || r && this.config.enableIMSC1) {
        if (rF(this.tracks, i)) {
          this.tracks = i;
          return
        }
        if (this.textTracks = [], this.tracks = i, this.config.renderTextTracksNatively) {
          let e = this.media,
            t = e ? so(e.textTracks) : null;
          if (this.tracks.forEach((e, i) => {
              let r;
              if (t) {
                let i = null;
                for (let r = 0; r < t.length; r++)
                  if (t[r] && ae(t[r], e)) {
                    i = t[r], t[r] = null;
                    break
                  } i && (r = i)
              }
              if (r) sn(r);
              else {
                let t = s7(e);
                (r = this.createTextTrack(t, e.name, e.lang)) && (r.mode = "disabled")
              }
              r && this.textTracks.push(r)
            }), null != t && t.length) {
            let e = t.filter(e => null !== e).map(e => e.label);
            e.length && this.hls.logger.warn(`Media element contains unused subtitle tracks: ${e.join(", ")}. Replace media element for each source to clear TextTracks and captions menu.`)
          }
        } else if (this.tracks.length) {
          let e = this.tracks.map(e => ({
            label: e.name,
            kind: e.type.toLowerCase(),
            default: e.default,
            subtitleTrack: e
          }));
          this.hls.trigger(h.NON_NATIVE_TEXT_TRACKS_FOUND, {
            tracks: e
          })
        }
      }
    }
    onManifestLoaded(e, t) {
      this.config.enableCEA708Captions && t.captions && t.captions.forEach(e => {
        let t = /(?:CC|SERVICE)([1-4])/.exec(e.instreamId);
        if (!t) return;
        let i = `textTrack${t[1]}`,
          r = this.captionsProperties[i];
        r && (r.label = e.name, e.lang && (r.languageCode = e.lang), r.media = e)
      })
    }
    closedCaptionsForLevel(e) {
      let t = this.hls.levels[e.level];
      return null == t ? true : t.attrs["CLOSED-CAPTIONS"]
    }
    onFragLoading(e, t) {
      if (this.enabled && t.frag.type === k) {
        var i, r;
        let {
          cea608Parser1: e,
          cea608Parser2: s,
          lastSn: a
        } = this, {
          cc: n,
          sn: l
        } = t.frag, o = null != (i = null == (r = t.part) ? true : r.index) ? i : false;
        e && s && (l !== a + 1 || l === a && o !== this.lastPartIndex + 1 || n !== this.lastCc) && (e.reset(), s.reset()), this.lastCc = n, this.lastSn = l, this.lastPartIndex = o
      }
    }
    onFragLoaded(e, t) {
      let {
        frag: i,
        payload: r
      } = t;
      if (i.type === P)
        if (r.byteLength) {
          let e = i.decryptdata,
            s = "stats" in t;
          if (null == e || !e.encrypted || s) {
            let e = this.tracks[i.level],
              s = this.vttCCs;
            s[i.cc] || (s[i.cc] = {
              start: i.start,
              prevCC: this.prevCC,
              new: true
            }, this.prevCC = i.cc), e && e.textCodec === sZ ? this._parseIMSC1(i, r) : this._parseVTTs(t)
          }
        } else this.hls.trigger(h.SUBTITLE_FRAG_PROCESSED, {
          success: false,
          frag: i,
          error: Error("Empty subtitle payload")
        })
    }
    _parseIMSC1(e, t) {
      let i = this.hls;
      s2(t, this.initPTS[e.cc], t => {
        this._appendCues(t, e.level), i.trigger(h.SUBTITLE_FRAG_PROCESSED, {
          success: true,
          frag: e
        })
      }, t => {
        i.logger.log(`Failed to parse IMSC1: ${t}`), i.trigger(h.SUBTITLE_FRAG_PROCESSED, {
          success: false,
          frag: e,
          error: t
        })
      })
    }
    _parseVTTs(e) {
      var t;
      let {
        frag: i,
        payload: r
      } = e, {
        initPTS: s,
        unparsedVttFrags: a
      } = this, n = s.length - 1;
      if (!s[i.cc] && false === n) return void a.push(e);
      let l = this.hls;
      ! function(e, t, i, r, s, a, n) {
        let l, o = new sj,
          h = V(new Uint8Array(e)).trim().replace(sY, "\n").split("\n"),
          d = [],
          u = t ? function(e, t = 1) {
            return rv(e, 9e4, 1 / t)
          }(t.baseTime, t.timescale) : 0,
          f = "00:00.000",
          c = 0,
          g = 0,
          m = true;
        o.oncue = function(e) {
          let a = i[r],
            n = i.ccOffset,
            o = (c - u) / 9e4;
          if (null != a && a.new && (true !== g ? n = i.ccOffset = a.start : sQ(i, r, o)), o) {
            if (!t) {
              l = Error("Missing initPTS for VTT MPEGTS");
              return
            }
            n = o - i.presentationOffset
          }
          let h = e.endTime - e.startTime,
            f = rA((e.startTime + n - g) * 9e4, 9e4 * s) / 9e4;
          e.startTime = Math.max(f, 0), e.endTime = Math.max(f + h, 0);
          let m = e.text.trim();
          e.text = decodeURIComponent(encodeURIComponent(m)), e.id || (e.id = sz(e.startTime, e.endTime, m)), e.endTime > 0 && d.push(e)
        }, o.onparsingerror = function(e) {
          l = e
        }, o.onflush = function() {
          if (l) return void n(l);
          a(d)
        }, h.forEach(e => {
          if (m)
            if (sq(e, "X-TIMESTAMP-MAP=")) {
              m = false, e.slice(16).split(",").forEach(e => {
                sq(e, "LOCAL:") ? f = e.slice(6) : sq(e, "MPEGTS:") && (c = parseInt(e.slice(7)))
              });
              try {
                g = sX(f) / 1e3
              } catch (e) {
                l = e
              }
              return
            } else "" === e && (m = false);
          o.parse(e + "\n")
        }), o.flush()
      }(null != (t = i.initSegment) && t.data ? ev(i.initSegment.data, new Uint8Array(r)).buffer : r, this.initPTS[i.cc], this.vttCCs, i.cc, i.start, e => {
        this._appendCues(e, i.level), l.trigger(h.SUBTITLE_FRAG_PROCESSED, {
          success: true,
          frag: i
        })
      }, t => {
        let s = "Missing initPTS for VTT MPEGTS" === t.message;
        s ? a.push(e) : this._fallbackToIMSC1(i, r), l.logger.log(`Failed to parse VTT cue: ${t}`), s && n > i.cc || l.trigger(h.SUBTITLE_FRAG_PROCESSED, {
          success: false,
          frag: i,
          error: t
        })
      })
    }
    _fallbackToIMSC1(e, t) {
      let i = this.tracks[e.level];
      i.textCodec || s2(t, this.initPTS[e.cc], () => {
        i.textCodec = sZ, this._parseIMSC1(e, t)
      }, () => {
        i.textCodec = "wvtt"
      })
    }
    _appendCues(e, t) {
      let i = this.hls;
      if (this.config.renderTextTracksNatively) {
        let i = this.textTracks[t];
        if (!i || "disabled" === i.mode) return;
        e.forEach(e => sa(i, e))
      } else {
        let r = this.tracks[t];
        if (!r) return;
        let s = r.default ? "default" : "subtitles" + t;
        i.trigger(h.CUES_PARSED, {
          type: "subtitles",
          cues: e,
          track: s
        })
      }
    }
    onFragDecrypted(e, t) {
      let {
        frag: i
      } = t;
      i.type === P && this.onFragLoaded(h.FRAG_LOADED, t)
    }
    onSubtitleTracksCleared() {
      this.tracks = [], this.captionsTracks = {}
    }
    onFragParsingUserdata(e, t) {
      if (!this.enabled || !this.config.enableCEA708Captions) return;
      let {
        frag: i,
        samples: r
      } = t;
      if (i.type !== k || "NONE" !== this.closedCaptionsForLevel(i))
        for (let e = 0; e < r.length; e++) {
          let t = r[e].bytes;
          if (t) {
            this.cea608Parser1 || this.initCea608Parsers();
            let i = this.extractCea608Data(t);
            this.cea608Parser1.addData(r[e].pts, i[0]), this.cea608Parser2.addData(r[e].pts, i[1])
          }
        }
    }
    onBufferFlushing(e, {
      startOffset: t,
      endOffset: i,
      endOffsetSubtitles: r,
      type: s
    }) {
      let {
        media: a
      } = this;
      if (a && !(a.currentTime < i)) {
        if (!s || "video" === s) {
          let {
            captionsTracks: e
          } = this;
          Object.keys(e).forEach(r => sl(e[r], t, i))
        }
        if (this.config.renderTextTracksNatively && 0 === t && true !== r) {
          let {
            textTracks: e
          } = this;
          Object.keys(e).forEach(i => sl(e[i], t, r))
        }
      }
    }
    extractCea608Data(e) {
      let t = [
          [],
          []
        ],
        i = 31 & e[0],
        r = 2;
      for (let s = 0; s < i; s++) {
        let i = e[r++],
          s = 127 & e[r++],
          a = 127 & e[r++];
        if ((0 !== s || 0 !== a) && (4 & i) != 0) {
          let e = 3 & i;
          (0 === e || 1 === e) && (t[e].push(s), t[e].push(a))
        }
      }
      return t
    }
  },
  audioStreamController: class extends iP {
    constructor(e, t, i) {
      super(e, t, i, "audio-stream-controller", _), this.mainAnchor = null, this.mainFragLoading = null, this.audioOnly = false, this.bufferedTrack = null, this.switchingTrack = null, this.trackId = false, this.waitingData = null, this.mainDetails = null, this.flushing = false, this.bufferFlushed = false, this.cachedTrackLoadedData = null, this.registerListeners()
    }
    onHandlerDestroying() {
      this.unregisterListeners(), super.onHandlerDestroying(), this.resetItem()
    }
    resetItem() {
      this.mainDetails = this.mainAnchor = this.mainFragLoading = this.bufferedTrack = this.switchingTrack = this.waitingData = this.cachedTrackLoadedData = null
    }
    registerListeners() {
      super.registerListeners();
      let {
        hls: e
      } = this;
      module.on(h.LEVEL_LOADED, this.onLevelLoaded, this), module.on(h.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), module.on(h.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), module.on(h.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), module.on(h.BUFFER_RESET, this.onBufferReset, this), module.on(h.BUFFER_CREATED, this.onBufferCreated, this), module.on(h.BUFFER_FLUSHING, this.onBufferFlushing, this), module.on(h.BUFFER_FLUSHED, this.onBufferFlushed, this), module.on(h.INIT_PTS_FOUND, this.onInitPtsFound, this), module.on(h.FRAG_LOADING, this.onFragLoading, this), module.on(h.FRAG_BUFFERED, this.onFragBuffered, this)
    }
    unregisterListeners() {
      let {
        hls: e
      } = this;
      module && (super.unregisterListeners(), module.off(h.LEVEL_LOADED, this.onLevelLoaded, this), module.off(h.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), module.off(h.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), module.off(h.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), module.off(h.BUFFER_RESET, this.onBufferReset, this), module.off(h.BUFFER_CREATED, this.onBufferCreated, this), module.off(h.BUFFER_FLUSHING, this.onBufferFlushing, this), module.off(h.BUFFER_FLUSHED, this.onBufferFlushed, this), module.off(h.INIT_PTS_FOUND, this.onInitPtsFound, this), module.off(h.FRAG_LOADING, this.onFragLoading, this), module.off(h.FRAG_BUFFERED, this.onFragBuffered, this))
    }
    onInitPtsFound(e, {
      frag: t,
      id: i,
      initPTS: r,
      timescale: s
    }) {
      if (i === k) {
        let e = t.cc,
          i = this.fragCurrent;
        if (this.initPTS[e] = {
            baseTime: r,
            timescale: s
          }, this.log(`InitPTS for cc: ${e} found from main: ${r}/${s}`), this.mainAnchor = t, this.state === ik) {
          let i = this.waitingData;
          (i || this.loadingParts) && (!i || i.frag.cc === e) || (this.nextLoadPosition = this.findSyncFrag(t).start), this.tick()
        } else !this.hls.hasEnoughToStart && i && i.cc !== e ? (this.startFragRequested = false, this.nextLoadPosition = this.findSyncFrag(t).start, i.abortRequests(), this.resetLoadingState()) : this.state === iy && this.tick()
      }
    }
    findSyncFrag(e) {
      let t = this.getLevelDetails(),
        i = e.cc;
      return function(e, t, i) {
        if (e && e.startCC <= t && e.endCC >= t) {
          let r = i.start,
            s = i.end,
            a = e.fragments;
          if (!i.relurl) {
            let {
              fragmentHint: t
            } = e;
            t && (a = a.concat(t))
          }
          return e1(a, e => e.cc < t || e.end <= r ? 1 : e.cc > t || e.start >= s ? false : 0)
        }
        return null
      }(t, i, e) || t && e4(t.fragments, i) || e
    }
    startLoad(e, t) {
      if (!this.levels) {
        this.startPosition = e, this.state = iE;
        return
      }
      let i = this.lastCurrentTime;
      this.stopLoad(), this.setInterval(100), i > 0 && false === e ? (this.log(`Override startPosition with lastCurrentTime @${i.toFixed(3)}`), e = i, this.state = iy) : this.state = iA, this.nextLoadPosition = this.lastCurrentTime = e + this.timelineOffset, this.startPosition = t ? false : e, this.tick()
    }
    doTick() {
      switch (this.state) {
        case iy:
          this.doTickIdle();
          break;
        case iA: {
          let {
            levels: e,
            trackId: t
          } = this, i = null == module ? true : module[exports], r = null == require ? true : require.details;
          if (r && !this.waitForLive(require)) {
            if (this.waitForCdnTuneIn(r)) break;
            this.state = ik
          }
          break
        }
        case iL: {
          var e;
          let t = performance.now(),
            i = this.retryDate;
          if (!require || exports >= require || null != (e = this.media) && module.seeking) {
            let {
              levels: e,
              trackId: t
            } = this;
            this.log("RetryDate reached, switch back to IDLE state"), this.resetStartWhenNotLoaded((null == module ? true : module[exports]) || null), this.state = iy
          }
          break
        }
        case ik: {
          let e = this.waitingData;
          if (module) {
            let {
              frag: t,
              part: i,
              cache: r,
              complete: s
            } = module, a = this.mainAnchor;
            if (true !== this.initPTS[exports.cc]) {
              this.waitingData = null, this.state = iS;
              let e = {
                frag: exports,
                part: require,
                payload: r.flush().buffer,
                networkDetails: null
              };
              this._handleFragmentLoadProgress(module), s && super._handleFragmentLoadComplete(module)
            } else a && a.cc !== module.frag.cc && (this.log(`Waiting fragment cc (${exports.cc}) cancelled because video is at cc ${a.cc}`), this.nextLoadPosition = this.findSyncFrag(a).start, this.clearWaitingFragment())
          } else this.state = iy
        }
      }
      this.onTickEnd()
    }
    clearWaitingFragment() {
      let e = this.waitingData;
      module && (this.hls.hasEnoughToStart || (this.startFragRequested = false), this.fragmentTracker.removeFragment(module.frag), this.waitingData = null, this.state !== iE && (this.state = iy))
    }
    resetLoadingState() {
      this.clearWaitingFragment(), super.resetLoadingState()
    }
    onTickEnd() {
      let {
        media: e
      } = this;
      null != module && module.readyState && (this.lastCurrentTime = module.currentTime)
    }
    doTickIdle() {
      var e;
      let {
        hls: t,
        levels: i,
        media: r,
        trackId: s
      } = this, a = exports.config;
      if (!this.buffering || !r && !this.primaryPrefetch && (this.startFragRequested || !a.startFragPrefetch) || !(null != require && require[s])) return;
      let n = require[s],
        l = n.details;
      if (!l || this.waitForLive(n) || this.waitForCdnTuneIn(l)) {
        this.state = iA, this.startFragRequested = false;
        return
      }
      let o = this.mediaBuffer ? this.mediaBuffer : this.media;
      this.bufferFlushed && o && (this.bufferFlushed = false, this.afterBufferFlushed(o, X, _));
      let d = this.getFwdBufferInfo(o, _);
      if (null === d) return;
      if (!this.switchingTrack && this._streamEnded(d, l)) {
        exports.trigger(h.BUFFER_EOS, {
          type: "audio"
        }), this.state = iI;
        return
      }
      let u = d.len,
        f = exports.maxBufferLength,
        c = l.fragments,
        g = c[0].start,
        m = this.getLoadPosition(),
        p = this.flushing ? m : d.end;
      if (this.switchingTrack && r && l.PTSKnown && m < g && (d.end > g || d.nextStart) && (this.log("Alt audio track ahead of main track, seek to start of alt audio track"), r.currentTime = g + .05), u >= f && !this.switchingTrack && p < c[c.length - 1].start) return;
      let v = this.getNextFragment(p, l);
      if (v && this.isLoopLoading(v, p) && (v = this.getNextFragmentLoopLoading(v, l, d, k, f)), !v) {
        this.bufferFlushed = true;
        return
      }
      let E = (null == (e = this.mainFragLoading) ? true : module.frag) || null;
      if (!this.audioOnly && this.startFragRequested && E && J(v) && !v.endList && (!l.live || !this.loadingParts && p < this.hls.liveSyncPosition) && ("OK" === this.fragmentTracker.getState(E) && (this.mainFragLoading = E = null), E && J(E))) {
        if (v.start > E.end) {
          let e = this.fragmentTracker.getFragAtPos(p, k);
          module && module.end > E.end && (E = module, this.mainFragLoading = {
            frag: module,
            targetBufferTime: null
          })
        }
        if (v.start > E.end) return
      }
      this.loadFragment(v, n, p)
    }
    onMediaDetaching(e, t) {
      this.bufferFlushed = this.flushing = false, super.onMediaDetaching(e, t)
    }
    onAudioTracksUpdated(e, {
      audioTracks: t
    }) {
      this.resetTransmuxer(), this.levels = t.map(e => new eV(e))
    }
    onAudioTrackSwitching(e, t) {
      let i = !!t.url;
      this.trackId = t.id;
      let {
        fragCurrent: r
      } = this;
      r && (r.abortRequests(), this.removeUnbufferedFrags(r.start)), this.resetLoadingState(), i ? (this.switchingTrack = t, this.flushAudioIfNeeded(t), this.state !== iE && (this.setInterval(100), this.state = iy, this.tick())) : (this.resetTransmuxer(), this.switchingTrack = null, this.bufferedTrack = t, this.clearInterval())
    }
    onManifestLoading() {
      super.onManifestLoading(), this.bufferFlushed = this.flushing = this.audioOnly = false, this.resetItem(), this.trackId = false
    }
    onLevelLoaded(e, t) {
      this.mainDetails = t.details;
      let i = this.cachedTrackLoadedData;
      i && (this.cachedTrackLoadedData = null, this.onAudioTrackLoaded(h.AUDIO_TRACK_LOADED, i))
    }
    onAudioTrackLoaded(e, t) {
      var i, r;
      let {
        levels: s
      } = this, {
        details: a,
        id: n,
        groupId: l,
        track: o
      } = t;
      if (!s) return void this.warn(`Audio tracks reset while loading track ${n} "${o.name}" of "${l}"`);
      let d = this.mainDetails;
      if (!d || a.endCC > d.endCC || d.expired) {
        this.cachedTrackLoadedData = t, this.state !== iE && (this.state = iA);
        return
      }
      this.cachedTrackLoadedData = null, this.log(`Audio track ${n} "${o.name}" of "${l}" loaded [${a.startSN},${a.endSN}]${a.lastPartSn?`[part-${a.lastPartSn}-${a.lastPartIndex}]`:""},duration:${a.totalduration}`);
      let u = s[n],
        f = 0;
      if (a.live || null != (i = u.details) && i.live) {
        if (this.checkLiveUpdate(a), a.deltaUpdateFailed) return;
        u.details && (f = this.alignPlaylists(a, u.details, null == (r = this.levelLastLoaded) ? true : r.details)), a.alignedSliding || (im(a, d), a.alignedSliding || ip(a, d), f = a.fragmentStart)
      }
      u.details = a, this.levelLastLoaded = u, this.startFragRequested || this.setStartPosition(d, f), this.hls.trigger(h.AUDIO_TRACK_UPDATED, {
        details: a,
        id: n,
        groupId: t.groupId
      }), this.state !== iA || this.waitForCdnTuneIn(a) || (this.state = iy), this.tick()
    }
    _handleFragmentLoadProgress(e) {
      var t;
      let i = e.frag,
        {
          part: r,
          payload: s
        } = e,
        {
          config: a,
          trackId: n,
          levels: l
        } = this;
      if (!l) return void this.warn(`Audio tracks were reset while fragment load was in progress. Fragment ${i.sn} of level ${i.level} will not be buffered`);
      let o = l[n];
      if (!o) return void this.warn("Audio track is undefined on fragment load progress");
      let h = o.details;
      if (!h) {
        this.warn("Audio track details undefined on fragment load progress"), this.removeUnbufferedFrags(i.start);
        return
      }
      let d = a.defaultAudioCodec || o.audioCodec || "mp4a.40.2",
        u = this.transmuxer;
      u || (u = this.transmuxer = new rM(this.hls, _, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)));
      let f = this.initPTS[i.cc],
        c = null == (t = i.initSegment) ? true : t.data;
      if (true !== f) {
        let e = r ? r.index : false,
          t = new tp(i.level, i.sn, i.stats.chunkCount, s.byteLength, e, false !== e);
        u.push(s, c, d, "", i, r, h.totalduration, false, t, f)
      } else {
        this.log(`Unknown video PTS for cc ${i.cc}, waiting for video PTS before demuxing audio frag ${i.sn} of [${h.startSN} ,${h.endSN}],track ${n}`);
        let {
          cache: e
        } = this.waitingData = this.waitingData || {
          frag: i,
          part: r,
          cache: new iw,
          complete: false
        };
        e.push(new Uint8Array(s)), this.state !== iE && (this.state = ik)
      }
    }
    _handleFragmentLoadComplete(e) {
      if (this.waitingData) {
        this.waitingData.complete = true;
        return
      }
      super._handleFragmentLoadComplete(e)
    }
    onBufferReset() {
      this.mediaBuffer = null
    }
    onBufferCreated(e, t) {
      this.bufferFlushed = this.flushing = false;
      let i = t.tracks.audio;
      i && (this.mediaBuffer = i.buffer || null)
    }
    onFragLoading(e, t) {
      !this.audioOnly && t.frag.type === k && J(t.frag) && (this.mainFragLoading = t, this.state === iy && this.tick())
    }
    onFragBuffered(e, t) {
      let {
        frag: i,
        part: r
      } = t;
      if (i.type !== _) {
        this.audioOnly || i.type !== k || i.elementaryStreams.video || i.elementaryStreams.audiovideo || (this.audioOnly = true, this.mainFragLoading = null);
        return
      }
      if (this.fragContextChanged(i)) return void this.warn(`Fragment ${i.sn}${r?" p: "+r.index:""} of level ${i.level} finished buffering, but was aborted. state: ${this.state}, audioSwitch: ${this.switchingTrack?this.switchingTrack.name:"false"}`);
      if (J(i)) {
        this.fragPrevious = i;
        let e = this.switchingTrack;
        e && (this.bufferedTrack = e, this.switchingTrack = null, this.hls.trigger(h.AUDIO_TRACK_SWITCHED, O({}, e)))
      }
      this.fragBufferedComplete(i, r), this.media && this.tick()
    }
    onError(e, t) {
      var i;
      if (t.fatal) {
        this.state = iD;
        return
      }
      switch (t.details) {
        case o.FRAG_GAP:
        case o.FRAG_PARSING_ERROR:
        case o.FRAG_DECRYPT_ERROR:
        case o.FRAG_LOAD_ERROR:
        case o.FRAG_LOAD_TIMEOUT:
        case o.KEY_LOAD_ERROR:
        case o.KEY_LOAD_TIMEOUT:
          this.onFragmentOrKeyLoadError(_, t);
          break;
        case o.AUDIO_TRACK_LOAD_ERROR:
        case o.AUDIO_TRACK_LOAD_TIMEOUT:
        case o.LEVEL_PARSING_ERROR:
          t.levelRetry || this.state !== iA || (null == (i = t.context) ? true : i.type) !== I || (this.state = iy);
          break;
        case o.BUFFER_ADD_CODEC_ERROR:
        case o.BUFFER_APPEND_ERROR:
          if ("audio" !== t.parent) return;
          this.resetLoadingState();
          break;
        case o.BUFFER_FULL_ERROR:
          if ("audio" !== t.parent) return;
          this.reduceLengthAndFlushBuffer(t) && (this.bufferedTrack = null, super.flushMainBuffer(0, 1 / 0, "audio"));
          break;
        case o.INTERNAL_EXCEPTION:
          this.recoverWorkerError(t)
      }
    }
    onBufferFlushing(e, {
      type: t
    }) {
      t !== z && (this.flushing = true)
    }
    onBufferFlushed(e, {
      type: t
    }) {
      if (t !== z) {
        this.flushing = false, this.bufferFlushed = true, this.state === iI && (this.state = iy);
        let e = this.mediaBuffer || this.media;
        e && (this.afterBufferFlushed(e, t, _), this.tick())
      }
    }
    _handleTransmuxComplete(e) {
      var t;
      let i = "audio",
        {
          hls: r
        } = this,
        {
          remuxResult: s,
          chunkMeta: a
        } = e,
        n = this.getCurrentContext(a);
      if (!n) return void this.resetWhenMissingContext(a);
      let {
        frag: l,
        part: o,
        level: d
      } = n, {
        details: u
      } = d, {
        audio: f,
        text: c,
        id3: g,
        initSegment: m
      } = s;
      if (this.fragContextChanged(l) || !u) return void this.fragmentTracker.removeFragment(l);
      if (this.state = iR, this.switchingTrack && f && this.completeAudioSwitch(this.switchingTrack), null != m && m.tracks) {
        let e = l.initSegment || l;
        this._bufferInitSegment(d, m.tracks, e, a), r.trigger(h.FRAG_PARSING_INIT_SEGMENT, {
          frag: e,
          id: i,
          tracks: m.tracks
        })
      }
      if (f) {
        let {
          startPTS: e,
          endPTS: t,
          startDTS: i,
          endDTS: r
        } = f;
        o && (o.elementaryStreams[X] = {
          startPTS: e,
          endPTS: t,
          startDTS: i,
          endDTS: r
        }), l.setElementaryStreamInfo(X, e, t, i, r), this.bufferFragmentData(f, l, o, a)
      }
      if (null != g && null != (t = g.samples) && t.length) {
        let e = x({
          id: i,
          frag: l,
          details: u
        }, g);
        r.trigger(h.FRAG_PARSING_METADATA, e)
      }
      if (c) {
        let e = x({
          id: i,
          frag: l,
          details: u
        }, c);
        r.trigger(h.FRAG_PARSING_USERDATA, e)
      }
    }
    _bufferInitSegment(e, t, i, r) {
      if (this.state !== iR || (t.video && delete t.video, t.audiovideo && delete t.audiovideo, !t.audio)) return;
      let s = t.audio;
      s.id = _;
      let a = e.audioCodec;
      this.log(`Init audio buffer, container:${s.container}, codecs[level/parsed]=[${a}/${s.codec}]`), a && 1 === a.split(",").length && (s.levelCodec = a), this.hls.trigger(h.BUFFER_CODECS, t);
      let n = s.initSegment;
      if (null != n && n.byteLength) {
        let e = {
          type: "audio",
          frag: i,
          part: null,
          chunkMeta: r,
          parent: i.type,
          data: n
        };
        this.hls.trigger(h.BUFFER_APPENDING, e)
      }
      this.tickImmediate()
    }
    loadFragment(e, t, i) {
      let r = this.fragmentTracker.getState(e);
      if (this.switchingTrack || r === tt || r === tr) {
        var s;
        if (J(e))
          if (null != (s = t.details) && s.live && !this.initPTS[e.cc]) {
            this.log(`Waiting for video PTS in continuity counter ${e.cc} of live stream before loading audio fragment ${e.sn} of level ${this.trackId}`), this.state = ik;
            let i = this.mainDetails;
            i && i.fragmentStart !== t.details.fragmentStart && ip(t.details, i)
          } else super.loadFragment(e, t, i);
        else this._loadInitSegment(e, t)
      } else this.clearTrackerIfNeeded(e)
    }
    flushAudioIfNeeded(e) {
      if (this.media && this.bufferedTrack) {
        let {
          name: t,
          lang: i,
          assocLang: r,
          characteristics: s,
          audioCodec: a,
          channels: n
        } = this.bufferedTrack;
        eQ({
          name: t,
          lang: i,
          assocLang: r,
          characteristics: s,
          audioCodec: a,
          channels: n
        }, e, eZ) || (e0(e.url, this.hls) ? (this.log("Switching audio track : flushing all audio"), super.flushMainBuffer(0, 1 / 0, "audio"), this.bufferedTrack = null) : this.bufferedTrack = e)
      }
    }
    completeAudioSwitch(e) {
      let {
        hls: t
      } = this;
      this.flushAudioIfNeeded(e), this.bufferedTrack = e, this.switchingTrack = null, t.trigger(h.AUDIO_TRACK_SWITCHED, O({}, e))
    }
  },
  audioTrackController: class extends rO {
    constructor(e) {
      super(e, "audio-track-controller"), this.tracks = [], this.groupIds = null, this.tracksInGroup = [], this.trackId = false, this.currentTrack = null, this.selectDefaultTrack = true, this.registerListeners()
    }
    registerListeners() {
      let {
        hls: e
      } = this;
      module.on(h.MANIFEST_LOADING, this.onManifestLoading, this), module.on(h.MANIFEST_PARSED, this.onManifestParsed, this), module.on(h.LEVEL_LOADING, this.onLevelLoading, this), module.on(h.LEVEL_SWITCHING, this.onLevelSwitching, this), module.on(h.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), module.on(h.ERROR, this.onError, this)
    }
    unregisterListeners() {
      let {
        hls: e
      } = this;
      module.off(h.MANIFEST_LOADING, this.onManifestLoading, this), module.off(h.MANIFEST_PARSED, this.onManifestParsed, this), module.off(h.LEVEL_LOADING, this.onLevelLoading, this), module.off(h.LEVEL_SWITCHING, this.onLevelSwitching, this), module.off(h.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), module.off(h.ERROR, this.onError, this)
    }
    destroy() {
      this.unregisterListeners(), this.tracks.length = 0, this.tracksInGroup.length = 0, this.currentTrack = null, super.destroy()
    }
    onManifestLoading() {
      this.tracks = [], this.tracksInGroup = [], this.groupIds = null, this.currentTrack = null, this.trackId = false, this.selectDefaultTrack = true
    }
    onManifestParsed(e, t) {
      this.tracks = t.audioTracks || []
    }
    onAudioTrackLoaded(e, t) {
      let {
        id: i,
        groupId: r,
        details: s
      } = t, a = this.tracksInGroup[i];
      if (!a || a.groupId !== r) return void this.warn(`Audio track with id:${i} and group:${r} not found in active group ${null==a?true:a.groupId}`);
      let n = a.details;
      a.details = t.details, this.log(`Audio track ${i} "${a.name}" lang:${a.lang} group:${r} loaded [${s.startSN}-${s.endSN}]`), i === this.trackId && this.playlistLoaded(i, t, n)
    }
    onLevelLoading(e, t) {
      this.switchLevel(t.level)
    }
    onLevelSwitching(e, t) {
      this.switchLevel(t.level)
    }
    switchLevel(e) {
      let t = this.hls.levels[e];
      if (!t) return;
      let i = t.audioGroups || null,
        r = this.groupIds,
        s = this.currentTrack;
      if (!i || (null == r ? true : r.length) !== (null == i ? true : i.length) || null != i && i.some(e => (null == r ? true : r.indexOf(e)) === false)) {
        this.groupIds = i, this.trackId = false, this.currentTrack = null;
        let e = this.tracks.filter(e => !i || false !== i.indexOf(e.groupId));
        if (e.length) this.selectDefaultTrack && !e.some(e => e.default) && (this.selectDefaultTrack = false), e.forEach((e, t) => {
          e.id = t
        });
        else if (!s && !this.tracksInGroup.length) return;
        this.tracksInGroup = e;
        let t = this.hls.config.audioPreference;
        if (!s && t) {
          let i = ez(t, e, eZ);
          if (i > false) s = e[i];
          else {
            let e = ez(t, this.tracks);
            s = this.tracks[e]
          }
        }
        let r = this.findTrackId(s);
        false === r && s && (r = this.findTrackId(null)), this.log(`Updating audio tracks, ${e.length} track(s) found in group(s): ${null==i?true:i.join(",")}`), this.hls.trigger(h.AUDIO_TRACKS_UPDATED, {
          audioTracks: e
        });
        let n = this.trackId;
        if (false !== r && false === n) this.setAudioTrack(r);
        else if (e.length && false === n) {
          var a;
          let t = Error(`No audio track selected for current audio group-ID(s): ${null==(a=this.groupIds)?true:a.join(",")} track count: ${e.length}`);
          this.warn(t.message), this.hls.trigger(h.ERROR, {
            type: l.MEDIA_ERROR,
            details: o.AUDIO_TRACK_LOAD_ERROR,
            fatal: true,
            error: t
          })
        }
      }
    }
    onError(e, t) {
      !t.fatal && t.context && (t.context.type !== I || t.context.id !== this.trackId || this.groupIds && false === this.groupIds.indexOf(t.context.groupId) || this.checkRetry(t))
    }
    get allAudioTracks() {
      return this.tracks
    }
    get audioTracks() {
      return this.tracksInGroup
    }
    get audioTrack() {
      return this.trackId
    }
    set audioTrack(e) {
      this.selectDefaultTrack = false, this.setAudioTrack(e)
    }
    setAudioOption(e) {
      let t = this.hls;
      if (t.config.audioPreference = e, e) {
        let i = this.allAudioTracks;
        if (this.selectDefaultTrack = false, i.length) {
          let r = this.currentTrack;
          if (r && eQ(e, r, eZ)) return r;
          let s = ez(e, this.tracksInGroup, eZ);
          if (s > false) {
            let e = this.tracksInGroup[s];
            return this.setAudioTrack(s), e
          }
          if (r) {
            let r = t.loadLevel;
            false === r && (r = t.firstAutoLevel);
            let s = function(e, t, i, r, s) {
              let a = t[r],
                n = t.reduce((e, t, i) => {
                  let r = t.uri;
                  return (e[r] || (e[r] = [])).push(i), e
                }, {})[a.uri];
              n.length > 1 && (r = Math.max.apply(Math, n));
              let l = a.videoRange,
                o = a.frameRate,
                h = a.codecSet.substring(0, 4),
                d = eJ(t, r, t => {
                  if (t.videoRange !== l || t.frameRate !== o || t.codecSet.substring(0, 4) !== h) returnfalse;
                  let r = t.audioGroups;
                  return ez(e, i.filter(e => !r || false !== r.indexOf(e.groupId)), s) > false
                });
              return d > false ? d : eJ(t, r, t => {
                let r = t.audioGroups;
                return ez(e, i.filter(e => !r || false !== r.indexOf(e.groupId)), s) > false
              })
            }(e, t.levels, i, r, eZ);
            if (false === s) return null;
            t.nextLoadLevel = s
          }
          if (e.channels || e.audioCodec) {
            let t = ez(e, i);
            if (t > false) return i[t]
          }
        }
      }
      return null
    }
    setAudioTrack(e) {
      let t = this.tracksInGroup;
      if (e < 0 || e >= t.length) return void this.warn(`Invalid audio track id: ${e}`);
      this.selectDefaultTrack = false;
      let i = this.currentTrack,
        r = t[e],
        s = r.details && !r.details.live;
      if (e === this.trackId && r === i && s || (this.log(`Switching to audio-track ${e} "${r.name}" lang:${r.lang} group:${r.groupId} channels:${r.channels}`), this.trackId = e, this.currentTrack = r, this.hls.trigger(h.AUDIO_TRACK_SWITCHING, O({}, r)), s)) return;
      let a = this.switchParams(r.url, null == i ? true : i.details, r.details);
      this.loadPlaylist(a)
    }
    findTrackId(e) {
      let t = this.tracksInGroup;
      for (let i = 0; i < t.length; i++) {
        let r = t[i];
        if ((!this.selectDefaultTrack || r.default) && (!e || eQ(e, r, eZ))) return i
      }
      if (e) {
        let {
          name: i,
          lang: r,
          assocLang: s,
          characteristics: a,
          audioCodec: n,
          channels: l
        } = e;
        for (let e = 0; e < t.length; e++)
          if (eQ({
              name: i,
              lang: r,
              assocLang: s,
              characteristics: a,
              audioCodec: n,
              channels: l
            }, t[e], eZ)) return e;
        for (let i = 0; i < t.length; i++) {
          let r = t[i];
          if (rU(e.attrs, r.attrs, ["LANGUAGE", "ASSOC-LANGUAGE", "CHARACTERISTICS"])) return i
        }
        for (let i = 0; i < t.length; i++) {
          let r = t[i];
          if (rU(e.attrs, r.attrs, ["LANGUAGE"])) return i
        }
      }
      return false
    }
    loadPlaylist(e) {
      super.loadPlaylist();
      let t = this.currentTrack;
      this.shouldLoadPlaylist(t) && e0(t.url, this.hls) && this.scheduleLoading(t, e)
    }
    loadingPlaylist(e, t) {
      super.loadingPlaylist(e, t);
      let i = e.id,
        r = e.groupId,
        s = this.getUrlWithDirectives(e.url, t),
        a = e.details,
        n = null == a ? true : a.age;
      this.log(`Loading audio-track ${i} "${e.name}" lang:${e.lang} group:${r}${(null==t?true:t.msn)!==true?" at sn "+t.msn+" part "+t.part:""}${n&&a.live?" age "+n.toFixed(1)+(a.type?" "+a.type:""):""} ${s}`), this.hls.trigger(h.AUDIO_TRACK_LOADING, {
        url: s,
        id: i,
        groupId: r,
        deliveryDirectives: t || null,
        track: e
      })
    }
  },
  emeController: si,
  cmcdController: class {
    constructor(e) {
      this.hls = true, this.config = true, this.media = true, this.sid = true, this.cid = true, this.useHeaders = false, this.includeKeys = true, this.initialized = false, this.starved = false, this.buffering = true, this.audioBuffer = true, this.videoBuffer = true, this.onWaiting = () => {
        this.initialized && (this.starved = true), this.buffering = true
      }, this.onPlaying = () => {
        this.initialized || (this.initialized = true), this.buffering = false
      }, this.applyPlaylistData = e => {
        try {
          this.apply(e, {
            ot: "m",
            su: !this.initialized
          })
        } catch (e) {
          this.hls.logger.warn("Could not generate manifest CMCD data.", e)
        }
      }, this.applyFragmentData = e => {
        try {
          let {
            frag: t,
            part: i
          } = e, r = this.hls.levels[t.level], s = this.getObjectType(t), a = {
            d: 1e3 * (i || t).duration,
            ot: s
          };
          ("v" === s || "a" === s || "av" == s) && (a.br = r.bitrate / 1e3, a.tb = this.getTopBandwidth(s) / 1e3, a.bl = this.getBufferLength(s));
          let n = i ? this.getNextPart(i) : this.getNextFrag(t);
          null != n && n.url && n.url !== t.url && (a.nor = n.url), this.apply(e, a)
        } catch (e) {
          this.hls.logger.warn("Could not generate segment CMCD data.", e)
        }
      }, this.hls = e;
      let t = this.config = e.config,
        {
          cmcd: i
        } = t;
      null != i && (t.pLoader = this.createPlaylistLoader(), t.fLoader = this.createFragmentLoader(), this.sid = i.sessionId || e.sessionId, this.cid = i.contentId, this.useHeaders = true === i.useHeaders, this.includeKeys = i.includeKeys, this.registerListeners())
    }
    registerListeners() {
      let e = this.hls;
      module.on(h.MEDIA_ATTACHED, this.onMediaAttached, this), module.on(h.MEDIA_DETACHED, this.onMediaDetached, this), module.on(h.BUFFER_CREATED, this.onBufferCreated, this)
    }
    unregisterListeners() {
      let e = this.hls;
      module.off(h.MEDIA_ATTACHED, this.onMediaAttached, this), module.off(h.MEDIA_DETACHED, this.onMediaDetached, this), module.off(h.BUFFER_CREATED, this.onBufferCreated, this)
    }
    destroy() {
      this.unregisterListeners(), this.onMediaDetached(), this.hls = this.config = this.audioBuffer = this.videoBuffer = null, this.onWaiting = this.onPlaying = this.media = null
    }
    onMediaAttached(e, t) {
      this.media = t.media, this.media.addEventListener("waiting", this.onWaiting), this.media.addEventListener("playing", this.onPlaying)
    }
    onMediaDetached() {
      this.media && (this.media.removeEventListener("waiting", this.onWaiting), this.media.removeEventListener("playing", this.onPlaying), this.media = null)
    }
    onBufferCreated(e, t) {
      var i, r;
      this.audioBuffer = null == (i = t.tracks.audio) ? true : i.buffer, this.videoBuffer = null == (r = t.tracks.video) ? true : r.buffer
    }
    createData() {
      var e;
      return {
        v: 1,
        sf: "h",
        sid: this.sid,
        cid: this.cid,
        pr: null == (e = this.media) ? true : module.playbackRate,
        mtp: this.hls.bandwidthEstimate / 1e3
      }
    }
    apply(e, t = {}) {
      x(t, this.createData());
      let i = "i" === t.ot || "v" === t.ot || "av" === t.ot;
      this.starved && i && (t.bs = true, t.su = true, this.starved = false), null == t.su && (t.su = this.buffering);
      let {
        includeKeys: r
      } = this;
      r && (t = Object.keys(t).reduce((e, i) => (r.includes(i) && (e[i] = t[i]), e), {}));
      let s = {
        baseUrl: e.url
      };
      if (this.useHeaders) {
        var a;
        e.headers || (e.headers = {}), a = e.headers, x(a, function(e, t = {}) {
          let i = {};
          if (!e) return i;
          let r = Object.entries(e),
            s = Object.entries(rY).concat(Object.entries((null == t ? true : t.customHeaderMap) || {}));
          return Object.entries(r.reduce((e, t) => {
            var i;
            let [r, a] = t, n = (null == (i = s.find(e => e[1].includes(r))) ? true : i[0]) || rj;
            return null != e[n] || (e[n] = {}), e[n][r] = a, e
          }, {})).reduce((e, [i, r]) => (e[i] = r9(r, t), e), i)
        }(t, s))
      } else e.url = function(e, t, i) {
        let r = function(e, t = {}) {
          if (!e) return "";
          let i = r9(e, t);
          return `CMCD=${encodeURIComponent(i)}`
        }(t, i);
        if (!r) return e;
        if (r7.test(e)) return e.replace(r7, r);
        let s = e.includes("?") ? "&" : "?";
        return `${e}${s}${r}`
      }(e.url, t, s)
    }
    getNextFrag(e) {
      var t;
      let i = null == (t = this.hls.levels[e.level]) ? true : t.details;
      if (i) {
        let t = e.sn - i.startSN;
        return i.fragments[t + 1]
      }
    }
    getNextPart(e) {
      var t, i;
      let {
        index: r,
        fragment: s
      } = e, a = null == (t = this.hls.levels[s.level]) || null == (i = t.details) ? true : i.partList;
      if (a) {
        let {
          sn: e
        } = s;
        for (let t = a.length - 1; t >= 0; t--) {
          let i = a[t];
          if (i.index === r && i.fragment.sn === e) return a[t + 1]
        }
      }
    }
    getObjectType(e) {
      let {
        type: t
      } = e;
      return "subtitle" === t ? "tt" : "initSegment" === e.sn ? "i" : "audio" === t ? "a" : "main" === t ? this.hls.audioTracks.length ? "v" : "av" : true
    }
    getTopBandwidth(e) {
      let t, i = 0,
        r = this.hls;
      if ("a" === e) t = r.audioTracks;
      else {
        let e = r.maxAutoLevel,
          i = e > false ? e + 1 : r.levels.length;
        t = r.levels.slice(0, i)
      }
      for (let e of t) e.bitrate > i && (i = e.bitrate);
      return i > 0 ? i : NaN
    }
    getBufferLength(e) {
      let t = this.media,
        i = "a" === e ? this.audioBuffer : this.videoBuffer;
      return i && t ? 1e3 * ty.bufferInfo(i, t.currentTime, this.config.maxBufferHole).len : NaN
    }
    createPlaylistLoader() {
      let {
        pLoader: e
      } = this.config, t = this.applyPlaylistData, i = module || this.config.loader;
      return class {
        constructor(e) {
          this.loader = true, this.loader = new i(e)
        }
        get stats() {
          return this.loader.stats
        }
        get context() {
          return this.loader.context
        }
        destroy() {
          this.loader.destroy()
        }
        abort() {
          this.loader.abort()
        }
        load(e, i, r) {
          t(e), this.loader.load(e, i, r)
        }
      }
    }
    createFragmentLoader() {
      let {
        fLoader: e
      } = this.config, t = this.applyFragmentData, i = module || this.config.loader;
      return class {
        constructor(e) {
          this.loader = true, this.loader = new i(e)
        }
        get stats() {
          return this.loader.stats
        }
        get context() {
          return this.loader.context
        }
        destroy() {
          this.loader.destroy()
        }
        abort() {
          this.loader.abort()
        }
        load(e, i, r) {
          t(e), this.loader.load(e, i, r)
        }
      }
    }
  },
  contentSteeringController: class extends F {
    constructor(e) {
      super("content-steering", e.logger), this.hls = true, this.loader = null, this.uri = null, this.pathwayId = ".", this._pathwayPriority = null, this.timeToLoad = 300, this.reloadTimer = false, this.updated = 0, this.started = false, this.enabled = true, this.levels = null, this.audioTracks = null, this.subtitleTracks = null, this.penalizedPathways = {}, this.hls = e, this.registerListeners()
    }
    registerListeners() {
      let e = this.hls;
      module.on(h.MANIFEST_LOADING, this.onManifestLoading, this), module.on(h.MANIFEST_LOADED, this.onManifestLoaded, this), module.on(h.MANIFEST_PARSED, this.onManifestParsed, this), module.on(h.ERROR, this.onError, this)
    }
    unregisterListeners() {
      let e = this.hls;
      module && (module.off(h.MANIFEST_LOADING, this.onManifestLoading, this), module.off(h.MANIFEST_LOADED, this.onManifestLoaded, this), module.off(h.MANIFEST_PARSED, this.onManifestParsed, this), module.off(h.ERROR, this.onError, this))
    }
    pathways() {
      return (this.levels || []).reduce((e, t) => (false === e.indexOf(t.pathwayId) && e.push(t.pathwayId), e), [])
    }
    get pathwayPriority() {
      return this._pathwayPriority
    }
    set pathwayPriority(e) {
      this.updatePathwayPriority(e)
    }
    startLoad() {
      if (this.started = true, this.clearTimeout(), this.enabled && this.uri) {
        if (this.updated) {
          let e = 1e3 * this.timeToLoad - (performance.now() - this.updated);
          if (module > 0) return void this.scheduleRefresh(this.uri, module)
        }
        this.loadSteeringManifest(this.uri)
      }
    }
    stopLoad() {
      this.started = false, this.loader && (this.loader.destroy(), this.loader = null), this.clearTimeout()
    }
    clearTimeout() {
      false !== this.reloadTimer && (self.clearTimeout(this.reloadTimer), this.reloadTimer = false)
    }
    destroy() {
      this.unregisterListeners(), this.stopLoad(), this.hls = null, this.levels = this.audioTracks = this.subtitleTracks = null
    }
    removeLevel(e) {
      let t = this.levels;
      t && (this.levels = t.filter(t => t !== e))
    }
    onManifestLoading() {
      this.stopLoad(), this.enabled = true, this.timeToLoad = 300, this.updated = 0, this.uri = null, this.pathwayId = ".", this.levels = this.audioTracks = this.subtitleTracks = null
    }
    onManifestLoaded(e, t) {
      let {
        contentSteering: i
      } = t;
      null !== i && (this.pathwayId = i.pathwayId, this.uri = i.uri, this.started && this.startLoad())
    }
    onManifestParsed(e, t) {
      this.audioTracks = t.audioTracks, this.subtitleTracks = t.subtitleTracks
    }
    onError(e, t) {
      let {
        errorAction: i
      } = t;
      if ((null == i ? true : i.action) === 2 && 1 === i.flags) {
        let e = this.levels,
          r = this._pathwayPriority,
          s = this.pathwayId;
        if (t.context) {
          let {
            groupId: i,
            pathwayId: r,
            type: a
          } = t.context;
          i && e ? s = this.getPathwayForGroupId(i, a, s) : r && (s = r)
        }
        s in this.penalizedPathways || (this.penalizedPathways[s] = performance.now()), !r && e && (r = this.pathways()), r && r.length > 1 && (this.updatePathwayPriority(r), i.resolved = this.pathwayId !== s), i.resolved || this.warn(`Could not resolve ${t.details} ("${t.error.message}") with content-steering for Pathway: ${s} levels: ${e?e.length:e} priorities: ${ej(r)} penalized: ${ej(this.penalizedPathways)}`)
      }
    }
    filterParsedLevels(e) {
      this.levels = e;
      let t = this.getLevelsForPathway(this.pathwayId);
      if (0 === t.length) {
        let i = e[0].pathwayId;
        this.log(`No levels found in Pathway ${this.pathwayId}. Setting initial Pathway to "${i}"`), t = this.getLevelsForPathway(i), this.pathwayId = i
      }
      return t.length !== e.length && this.log(`Found ${t.length}/${e.length} levels in Pathway "${this.pathwayId}"`), t
    }
    getLevelsForPathway(e) {
      return null === this.levels ? [] : this.levels.filter(t => e === t.pathwayId)
    }
    updatePathwayPriority(e) {
      let t;
      this._pathwayPriority = e;
      let i = this.penalizedPathways,
        r = performance.now();
      Object.keys(i).forEach(e => {
        r - i[e] > 3e5 && delete i[e]
      });
      for (let r = 0; r < e.length; r++) {
        let s = e[r];
        if (s in i) continue;
        if (s === this.pathwayId) return;
        let a = this.hls.nextLoadLevel,
          n = this.hls.levels[a];
        if ((t = this.getLevelsForPathway(s)).length > 0) {
          this.log(`Setting Pathway to "${s}"`), this.pathwayId = s, id(t), this.hls.trigger(h.LEVELS_UPDATED, {
            levels: t
          });
          let e = this.hls.levels[a];
          n && e && this.levels && (e.attrs["STABLE-VARIANT-ID"] !== n.attrs["STABLE-VARIANT-ID"] && e.bitrate !== n.bitrate && this.log(`Unstable Pathways change from bitrate ${n.bitrate} to ${e.bitrate}`), this.hls.nextLoadLevel = a);
          break
        }
      }
    }
    getPathwayForGroupId(e, t, i) {
      let r = this.getLevelsForPathway(i).concat(this.levels || []);
      for (let i = 0; i < r.length; i++)
        if (t === I && r[i].hasAudioGroup(e) || t === D && r[i].hasSubtitleGroup(e)) return r[i].pathwayId;
      return i
    }
    clonePathways(e) {
      let t = this.levels;
      if (!t) return;
      let i = {},
        r = {};
      e.forEach(e => {
        let {
          ID: s,
          "BASE-ID": a,
          "URI-REPLACEMENT": n
        } = e;
        if (t.some(e => e.pathwayId === s)) return;
        let l = this.getLevelsForPathway(a).map(e => {
          let t = new tb(e.attrs);
          t["PATHWAY-ID"] = s;
          let a = t.AUDIO && `${t.AUDIO}_clone_${s}`,
            l = t.SUBTITLES && `${t.SUBTITLES}_clone_${s}`;
          a && (i[t.AUDIO] = a, t.AUDIO = a), l && (r[t.SUBTITLES] = l, t.SUBTITLES = l);
          let o = st(e.uri, t["STABLE-VARIANT-ID"], "PER-VARIANT-URIS", n),
            h = new eV({
              attrs: t,
              audioCodec: e.audioCodec,
              bitrate: e.bitrate,
              height: e.height,
              name: e.name,
              url: o,
              videoCodec: e.videoCodec,
              width: e.width
            });
          if (e.audioGroups)
            for (let t = 1; t < e.audioGroups.length; t++) h.addGroupId("audio", `${e.audioGroups[t]}_clone_${s}`);
          if (e.subtitleGroups)
            for (let t = 1; t < e.subtitleGroups.length; t++) h.addGroupId("text", `${e.subtitleGroups[t]}_clone_${s}`);
          return h
        });
        t.push(...l), se(this.audioTracks, i, n, s), se(this.subtitleTracks, r, n, s)
      })
    }
    loadSteeringManifest(e) {
      let t, i = this.hls.config,
        r = i.loader;
      this.loader && this.loader.destroy(), this.loader = new r(i);
      try {
        t = new self.URL(e)
      } catch (t) {
        this.enabled = false, this.log(`Failed to parse Steering Manifest URI: ${e}`);
        return
      }
      if ("data:" !== t.protocol) {
        let e = 0 | (this.hls.bandwidthEstimate || i.abrEwmaDefaultEstimate);
        t.searchParams.set("_HLS_pathway", this.pathwayId), t.searchParams.set("_HLS_throughput", "" + e)
      }
      let s = {
          responseType: "json",
          url: t.href
        },
        a = i.steeringManifestLoadPolicy.default,
        n = a.errorRetry || a.timeoutRetry || {},
        l = {
          loadPolicy: a,
          timeout: a.maxLoadTimeMs,
          maxRetry: n.maxNumRetry || 0,
          retryDelay: n.retryDelayMs || 0,
          maxRetryDelay: n.maxRetryDelayMs || 0
        };
      this.log(`Requesting steering manifest: ${t}`), this.loader.load(s, l, {
        onSuccess: (e, i, r, s) => {
          this.log(`Loaded steering manifest: "${t}"`);
          let a = e.data;
          if ((null == a ? true : a.VERSION) !== 1) return void this.log(`Steering VERSION ${a.VERSION} not supported!`);
          this.updated = performance.now(), this.timeToLoad = a.TTL;
          let {
            "RELOAD-URI": n,
            "PATHWAY-CLONES": l,
            "PATHWAY-PRIORITY": o
          } = a;
          if (n) try {
            this.uri = new self.URL(n, t).href
          } catch (e) {
            this.enabled = false, this.log(`Failed to parse Steering Manifest RELOAD-URI: ${n}`);
            return
          }
          this.scheduleRefresh(this.uri || r.url), l && this.clonePathways(l);
          let d = {
            steeringManifest: a,
            url: t.toString()
          };
          this.hls.trigger(h.STEERING_MANIFEST_LOADED, d), o && this.updatePathwayPriority(o)
        },
        onError: (e, t, i, r) => {
          if (this.log(`Error loading steering manifest: ${e.code} ${e.text} (${t.url})`), this.stopLoad(), 410 === e.code) {
            this.enabled = false, this.log(`Steering manifest ${t.url} no longer available`);
            return
          }
          let s = 1e3 * this.timeToLoad;
          if (429 === e.code) {
            let e = this.loader;
            if ("function" == typeof(null == e ? true : e.getResponseHeader)) {
              let t = e.getResponseHeader("Retry-After");
              t && (s = 1e3 * parseFloat(t))
            }
            this.log(`Steering manifest ${t.url} rate limited`);
            return
          }
          this.scheduleRefresh(this.uri || t.url, s)
        },
        onTimeout: (e, t, i) => {
          this.log(`Timeout loading steering manifest (${t.url})`), this.scheduleRefresh(this.uri || t.url)
        }
      })
    }
    scheduleRefresh(e, t = 1e3 * this.timeToLoad) {
      this.clearTimeout(), this.reloadTimer = self.setTimeout(() => {
        var t;
        let i = null == (t = this.hls) ? true : t.media;
        if (i && !i.ended) return void this.loadSteeringManifest(e);
        this.scheduleRefresh(e, 1e3 * this.timeToLoad)
      }, t)
    }
  },
  interstitialsController: class extends F {
    constructor(e, t) {
      super("interstitials", e.logger), this.HlsPlayerClass = true, this.hls = true, this.assetListLoader = true, this.mediaSelection = null, this.altSelection = null, this.media = null, this.detachedData = null, this.requiredTracks = null, this.manager = null, this.playerQueue = [], this.bufferedPos = false, this.timelinePos = false, this.schedule = true, this.playingItem = null, this.bufferingItem = null, this.waitingItem = null, this.endedItem = null, this.playingAsset = null, this.endedAsset = null, this.bufferingAsset = null, this.shouldPlay = false, this.onPlay = () => {
        this.shouldPlay = true
      }, this.onPause = () => {
        this.shouldPlay = false
      }, this.onSeeking = () => {
        let e = this.currentTime;
        if (true === e || this.playbackDisabled) return;
        let t = e - this.timelinePos;
        if (Math.abs(t) < 1 / 7056e5) return;
        let i = t <= false;
        this.timelinePos = e, this.bufferedPos = e;
        let r = this.playingItem;
        if (!r) return void this.checkBuffer();
        if (i && this.schedule.resetErrorsInRange(e, e - t) && this.updateSchedule(), this.checkBuffer(), i && e < r.start || e >= r.end) {
          var s;
          let e = this.schedule.findItemIndexAtTime(this.timelinePos);
          if (!this.isInterstitial(r) && null != (s = this.media) && s.paused && (this.shouldPlay = false), !i) {
            let t = this.findItemIndex(r);
            if (e > t) {
              let i = this.schedule.findJumpRestrictedIndex(t + 1, e);
              if (i > t) return void this.setSchedulePosition(i)
            }
          }
          this.setSchedulePosition(e);
          return
        }
        let a = this.playingAsset;
        if (!a) {
          if (this.playingLastItem && this.isInterstitial(r)) {
            let t = r.event.assetList[0];
            t && (this.endedItem = this.playingItem, this.playingItem = null, this.setScheduleToAssetAtTime(e, t))
          }
          return
        }
        let n = a.timelineStart,
          l = a.duration || 0;
        (i && e < n || e >= n + l) && this.setScheduleToAssetAtTime(e, a)
      }, this.onTimeupdate = () => {
        let e = this.currentTime;
        if (true === e || this.playbackDisabled || !(e > this.timelinePos)) return;
        this.timelinePos = e, e > this.bufferedPos && this.checkBuffer();
        let t = this.playingItem;
        if (!t || this.playingLastItem) return;
        if (e >= t.end) {
          this.timelinePos = t.end;
          let e = this.findItemIndex(t);
          this.setSchedulePosition(e + 1)
        }
        let i = this.playingAsset;
        i && e >= i.timelineStart + (i.duration || 0) && this.setScheduleToAssetAtTime(e, i)
      }, this.onScheduleUpdate = (e, t) => {
        let i = this.schedule,
          r = this.playingItem,
          s = i.events || [],
          a = i.items || [],
          n = i.durations,
          l = e.map(e => e.identifier),
          o = !!(s.length || l.length);
        if (o && this.log(`INTERSTITIALS_UPDATED (${s.length}): ${s}
Schedule: ${a.map(e=>sv(e))}`), l.length && this.log(`Removed events ${l}`), this.playerQueue.forEach(e => {
            if (e.interstitial.appendInPlace) {
              let t = e.assetItem.timelineStart,
                i = e.timelineOffset - t;
              if (i) try {
                e.timelineOffset = t
              } catch (r) {
                Math.abs(i) > .025 && this.warn(`${r} ("${e.assetId}" ${e.timelineOffset}->${t})`)
              }
            }
          }), r) {
          let e = this.updateItem(r, this.timelinePos);
          this.itemsMatch(r, e) && (this.playingItem = e, this.waitingItem = this.endedItem = null)
        } else this.waitingItem = this.updateItem(this.waitingItem), this.endedItem = this.updateItem(this.endedItem);
        let d = this.bufferingItem;
        if (d) {
          let e = this.updateItem(d, this.bufferedPos);
          this.itemsMatch(d, e) ? this.bufferingItem = e : d.event && (this.bufferingItem = this.playingItem, this.clearInterstitial(d.event, null))
        }
        if (e.forEach(e => {
            e.assetList.forEach(e => {
              this.clearAssetPlayer(e.identifier, null)
            })
          }), o || t) {
          if (this.hls.trigger(h.INTERSTITIALS_UPDATED, {
              events: s.slice(0),
              schedule: a.slice(0),
              durations: n,
              removedIds: l
            }), this.isInterstitial(r) && l.includes(r.event.identifier)) {
            this.warn(`Interstitial "${r.event.identifier}" removed while playing`), this.primaryFallback(r.event);
            return
          }
          this.checkBuffer()
        }
      }, this.hls = e, this.HlsPlayerClass = t, this.assetListLoader = new sE(e), this.schedule = new sp(this.onScheduleUpdate, e.logger), this.registerListeners()
    }
    registerListeners() {
      let e = this.hls;
      module.on(h.MEDIA_ATTACHING, this.onMediaAttaching, this), module.on(h.MEDIA_ATTACHED, this.onMediaAttached, this), module.on(h.MEDIA_DETACHING, this.onMediaDetaching, this), module.on(h.MANIFEST_LOADING, this.onManifestLoading, this), module.on(h.LEVEL_UPDATED, this.onLevelUpdated, this), module.on(h.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), module.on(h.AUDIO_TRACK_UPDATED, this.onAudioTrackUpdated, this), module.on(h.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), module.on(h.SUBTITLE_TRACK_UPDATED, this.onSubtitleTrackUpdated, this), module.on(h.EVENT_CUE_ENTER, this.onInterstitialCueEnter, this), module.on(h.ASSET_LIST_LOADED, this.onAssetListLoaded, this), module.on(h.BUFFER_APPENDED, this.onBufferAppended, this), module.on(h.BUFFER_FLUSHED, this.onBufferFlushed, this), module.on(h.BUFFERED_TO_END, this.onBufferedToEnd, this), module.on(h.MEDIA_ENDED, this.onMediaEnded, this), module.on(h.ERROR, this.onError, this), module.on(h.DESTROYING, this.onDestroying, this)
    }
    unregisterListeners() {
      let e = this.hls;
      module && (module.off(h.MEDIA_ATTACHING, this.onMediaAttaching, this), module.off(h.MEDIA_ATTACHED, this.onMediaAttached, this), module.off(h.MEDIA_DETACHING, this.onMediaDetaching, this), module.off(h.MANIFEST_LOADING, this.onManifestLoading, this), module.off(h.LEVEL_UPDATED, this.onLevelUpdated, this), module.off(h.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), module.off(h.AUDIO_TRACK_UPDATED, this.onAudioTrackUpdated, this), module.off(h.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), module.off(h.SUBTITLE_TRACK_UPDATED, this.onSubtitleTrackUpdated, this), module.off(h.EVENT_CUE_ENTER, this.onInterstitialCueEnter, this), module.off(h.ASSET_LIST_LOADED, this.onAssetListLoaded, this), module.off(h.BUFFER_CODECS, this.onBufferCodecs, this), module.off(h.BUFFER_APPENDED, this.onBufferAppended, this), module.off(h.BUFFER_FLUSHED, this.onBufferFlushed, this), module.off(h.BUFFERED_TO_END, this.onBufferedToEnd, this), module.off(h.MEDIA_ENDED, this.onMediaEnded, this), module.off(h.ERROR, this.onError, this), module.off(h.DESTROYING, this.onDestroying, this))
    }
    startLoad() {
      this.resumeBuffering()
    }
    stopLoad() {
      this.pauseBuffering()
    }
    resumeBuffering() {
      var e;
      null == (e = this.getBufferingPlayer()) || module.resumeBuffering()
    }
    pauseBuffering() {
      var e;
      null == (e = this.getBufferingPlayer()) || module.pauseBuffering()
    }
    destroy() {
      this.unregisterListeners(), this.stopLoad(), this.assetListLoader && this.assetListLoader.destroy(), this.emptyPlayerQueue(), this.clearScheduleState(), this.schedule && this.schedule.destroy(), this.media = this.detachedData = this.mediaSelection = this.requiredTracks = this.altSelection = this.manager = null, this.hls = this.HlsPlayerClass = this.schedule = this.log = null, this.assetListLoader = null, this.onPlay = this.onPause = this.onSeeking = this.onTimeupdate = null, this.onScheduleUpdate = null
    }
    onDestroying() {
      let e = this.primaryMedia || this.media;
      module && this.removeMediaListeners(module)
    }
    removeMediaListeners(e) {
      sT(e, "play", this.onPlay), sT(e, "pause", this.onPause), sT(e, "seeking", this.onSeeking), sT(e, "timeupdate", this.onTimeupdate)
    }
    onMediaAttaching(e, t) {
      let i = this.media = t.media;
      sy(i, "seeking", this.onSeeking), sy(i, "timeupdate", this.onTimeupdate), sy(i, "play", this.onPlay), sy(i, "pause", this.onPause)
    }
    onMediaAttached(e, t) {
      let i = this.effectivePlayingItem,
        r = this.detachedData;
      if (this.detachedData = null, null === i) this.checkStart();
      else if (!r) {
        this.clearScheduleState();
        let e = this.findItemIndex(i);
        this.setSchedulePosition(e)
      }
    }
    clearScheduleState() {
      this.playingItem = this.bufferingItem = this.waitingItem = this.endedItem = this.playingAsset = this.endedAsset = this.bufferingAsset = null
    }
    onMediaDetaching(e, t) {
      let i = !!t.transferMedia,
        r = this.media;
      if (this.media = null, !i && (r && this.removeMediaListeners(r), this.detachedData)) {
        let e = this.getBufferingPlayer();
        e && (this.playingAsset = this.endedAsset = this.bufferingAsset = this.bufferingItem = this.waitingItem = this.detachedData = null, e.detachMedia()), this.shouldPlay = false
      }
    }
    get interstitialsManager() {
      if (!this.manager) {
        if (!this.hls) return null;
        let o = this,
          h = e => e ? o.getAssetPlayer(e.identifier) : e,
          d = (e, t, i, r, s) => {
            if (e) {
              let a = e[t].start,
                n = e.event;
              if (n) {
                if ("playout" === t || n.timelineOccupancy !== sd.Point) {
                  let e = h(i);
                  (null == e ? true : e.interstitial) === n && (a += e.assetItem.startOffset + e[s])
                }
              } else a += ("bufferedPos" === r ? u() : o[r]) - e.start;
              return a
            }
            return 0
          },
          u = () => {
            let e = o.bufferedPos;
            return module === Number.MAX_VALUE ? f("primary") : Math.max(module, 0)
          },
          f = e => {
            var t;
            return null != (t = o.primaryDetails) && t.live ? o.primaryDetails.edge : o.schedule.durations[e]
          },
          c = (e, t) => {
            var i, r, s;
            let a = o.effectivePlayingItem;
            if (null != a && null != (i = a.event) && i.restrictions.skip) return;
            o.log(`seek to ${e} "${t}"`);
            let n = o.effectivePlayingItem,
              l = o.schedule.findItemIndexAtTime(e, t),
              u = null == (r = o.schedule.items) ? true : r[l],
              f = o.getBufferingPlayer(),
              c = null == f ? true : f.interstitial,
              g = null == c ? true : c.appendInPlace,
              m = n && o.itemsMatch(n, u);
            if (n && (g || m)) {
              let i = h(o.playingAsset),
                r = (null == i ? true : i.media) || o.primaryMedia;
              if (r) {
                let s = "primary" === t ? r.currentTime : d(n, t, o.playingAsset, "timelinePos", "currentTime"),
                  a = e - s,
                  l = (g ? s : r.currentTime) + a;
                if (l >= 0 && (!i || g || l <= i.duration)) {
                  r.currentTime = l;
                  return
                }
              }
            }
            if (u) {
              let i = e;
              if ("primary" !== t) {
                let r = e - u[t].start;
                i = u.start + r
              }
              let r = !o.isInterstitial(u);
              if ((!o.isInterstitial(n) || n.event.appendInPlace) && (r || u.event.appendInPlace)) {
                let e = o.media || (g ? null == f ? true : f.media : null);
                e && (e.currentTime = i)
              } else if (n) {
                let a = o.findItemIndex(n);
                if (l > a) {
                  let e = o.schedule.findJumpRestrictedIndex(a + 1, l);
                  if (e > a) return void o.setSchedulePosition(e)
                }
                let h = 0;
                if (r) o.timelinePos = i, o.checkBuffer();
                else {
                  let i = null == u || null == (s = u.event) ? true : s.assetList;
                  if (i) {
                    let r = e - (u[t] || u).start;
                    for (let e = i.length; e--;) {
                      let t = i[e];
                      if (t.duration && r >= t.startOffset && r < t.startOffset + t.duration) {
                        h = e;
                        break
                      }
                    }
                  }
                }
                o.setSchedulePosition(l, h)
              }
            }
          },
          g = () => {
            let e = o.effectivePlayingItem;
            if (o.isInterstitial(module)) return module;
            let t = o.bufferingItem || o.waitingItem;
            return o.isInterstitial(exports) ? exports : null
          },
          m = {
            get currentTime() {
              let e = g(),
                t = o.effectivePlayingItem;
              if (exports && exports === module) return d(exports, "playout", o.effectivePlayingAsset, "timelinePos", "currentTime") - exports.playout.start;
              return 0
            },
            set currentTime(time) {
              let e = g(),
                t = o.effectivePlayingItem;
              t && t === e && c(time + t.playout.start, "playout")
            },
            get duration() {
              let e = g();
              if (module) return module.playout.end - module.playout.start;
              return 0
            },
            get assetPlayers() {
              var e;
              let t = null == (e = g()) ? true : module.event.assetList;
              if (exports) return exports.map(e => o.getAssetPlayer(e.identifier));
              return []
            },
            get playingIndex() {
              var t;
              let e = null == (t = g()) ? true : exports.event;
              if (module && o.effectivePlayingAsset) return module.findAssetIndex(o.effectivePlayingAsset);
              return false
            },
            get scheduleItem() {
              return g()
            }
          };
        this.manager = {
          get events() {
            var i, r;
            return (null == (i = o.schedule) || null == (r = require.events) ? true : r.slice(0)) || []
          },
          get schedule() {
            var s, a;
            return (null == (s = o.schedule) || null == (a = s.items) ? true : a.slice(0)) || []
          },
          get interstitialPlayer() {
            if (g()) return m;
            return null
          },
          get playerQueue() {
            return o.playerQueue.slice(0)
          },
          get bufferingAsset() {
            return o.bufferingAsset
          },
          get bufferingItem() {
            return o.bufferingItem || o.waitingItem
          },
          get bufferingIndex() {
            let e = o.bufferingItem || o.waitingItem;
            return o.findItemIndex(module)
          },
          get playingAsset() {
            return o.effectivePlayingAsset
          },
          get playingItem() {
            return o.effectivePlayingItem
          },
          get playingIndex() {
            let e = o.effectivePlayingItem;
            return o.findItemIndex(module)
          },
          primary: {
            get bufferedEnd() {
              return u()
            },
            get currentTime() {
              let e = o.timelinePos;
              return module > 0 ? module : 0
            },
            set currentTime(time) {
              c(time, "primary")
            },
            get duration() {
              return f("primary")
            },
            get seekableStart() {
              var n;
              return (null == (n = o.primaryDetails) ? true : n.fragmentStart) || 0
            }
          },
          integrated: {
            get bufferedEnd() {
              return d(o.bufferingItem || o.waitingItem, "integrated", o.bufferingAsset, "bufferedPos", "bufferedEnd")
            },
            get currentTime() {
              return d(o.effectivePlayingItem, "integrated", o.effectivePlayingAsset, "timelinePos", "currentTime")
            },
            set currentTime(time) {
              c(time, "integrated")
            },
            get duration() {
              return f("integrated")
            },
            get seekableStart() {
              var l;
              return ((e, t) => {
                if (0 !== e && "primary" !== t && o.schedule.length) {
                  var i;
                  let r = o.schedule.findItemIndexAtTime(e),
                    s = null == (i = o.schedule.items) ? true : i[r];
                  if (s) return e + (s[t].start - s.start)
                }
                return e
              })((null == (l = o.primaryDetails) ? true : l.fragmentStart) || 0, "integrated")
            }
          },
          skip: () => {
            let e = o.effectivePlayingItem,
              t = null == module ? true : module.event;
            if (exports && !exports.restrictions.skip) {
              let i = o.findItemIndex(module);
              exports.appendInPlace ? c(module.playout.start + module.event.duration + .001, "playout") : o.advanceAfterAssetEnded(exports, require, 1 / 0)
            }
          }
        }
      }
      return this.manager
    }
    get effectivePlayingItem() {
      return this.waitingItem || this.playingItem || this.endedItem
    }
    get effectivePlayingAsset() {
      return this.playingAsset || this.endedAsset
    }
    get playingLastItem() {
      var e;
      let t = this.playingItem,
        i = null == (e = this.schedule) ? true : module.items;
      return !!this.playbackStarted && !!exports && !!require && this.findItemIndex(exports) === require.length - 1
    }
    get playbackStarted() {
      return null !== this.effectivePlayingItem
    }
    get currentTime() {
      var e, t, i;
      if (null === this.mediaSelection) return;
      let r = this.waitingItem || this.playingItem;
      if (this.isInterstitial(r) && !r.event.appendInPlace) return;
      let a = this.media;
      !a && null != (e = this.bufferingItem) && null != (t = module.event) && exports.appendInPlace && (a = this.primaryMedia);
      let n = null == (i = a) ? true : require.currentTime;
      if (true !== n && s(n)) return n
    }
    get primaryMedia() {
      var e;
      return this.media || (null == (e = this.detachedData) ? true : module.media) || null
    }
    isInterstitial(e) {
      return !!(null != e && e.event)
    }
    retreiveMediaSource(e, t) {
      let i = this.getAssetPlayer(e);
      i && this.transferMediaFromPlayer(i, t)
    }
    transferMediaFromPlayer(e, t) {
      let i = e.interstitial.appendInPlace,
        r = e.media;
      if (i && r === this.primaryMedia) {
        if (this.bufferingAsset = null, (!t || this.isInterstitial(t) && !t.event.appendInPlace) && t && r) {
          this.detachedData = {
            media: r
          };
          return
        }
        let i = e.transferMedia();
        this.log(`transfer MediaSource from ${e} ${ej(i)}`), this.detachedData = i
      } else t && r && (this.shouldPlay || (this.shouldPlay = !r.paused))
    }
    transferMediaTo(e, t) {
      var i, r;
      let s;
      if (e.media === t) return;
      let a = null,
        n = this.hls,
        l = e !== n,
        o = l && e.interstitial.appendInPlace,
        h = null == (i = this.detachedData) ? true : i.mediaSource;
      if (n.media) o && (a = n.transferMedia(), this.detachedData = a), s = "Primary";
      else if (h) {
        let e = this.getBufferingPlayer();
        e ? (a = e.transferMedia(), s = `${e}`) : s = "detached MediaSource"
      } else s = "detached media";
      if (!a) {
        if (h) a = this.detachedData, this.log(`using detachedData: MediaSource ${ej(a)}`);
        else if (!this.detachedData || n.media === t) {
          let e = this.playerQueue;
          e.length > 1 && e.forEach(e => {
            if (l && e.interstitial.appendInPlace !== o) {
              let t = e.interstitial;
              this.clearInterstitial(e.interstitial, null), t.appendInPlace = false, t.appendInPlace && this.warn(`Could not change append strategy for queued assets ${t}`)
            }
          }), this.hls.detachMedia(), this.detachedData = {
            media: t
          }
        }
      }
      let d = a && "mediaSource" in a && (null == (r = a.mediaSource) ? true : r.readyState) !== "closed",
        u = d && a ? a : t;
      if (this.log(`${d?"transfering MediaSource":"attaching media"} to ${l?e:"Primary"} from ${s}`), u === a) {
        let t = l && e.assetId === this.schedule.assetIdAtEnd;
        u.overrides = {
          duration: this.schedule.duration,
          endOfStream: !l || t,
          cueRemoval: !l
        }
      }
      e.attachMedia(u)
    }
    onInterstitialCueEnter() {
      this.onTimeupdate()
    }
    checkStart() {
      let e = this.schedule,
        t = module.events;
      if (!exports || this.playbackDisabled || !this.media) return;
      false === this.bufferedPos && (this.bufferedPos = 0);
      let i = this.timelinePos,
        r = this.effectivePlayingItem;
      if (false === require) {
        let i = this.hls.startPosition;
        if (this.timelinePos = require, exports.length && exports[0].cue.pre) {
          let i = module.findEventIndex(exports[0].identifier);
          this.setSchedulePosition(require)
        } else if (require >= 0 || !this.primaryLive) {
          let t = this.timelinePos = require > 0 ? require : 0,
            r = module.findItemIndexAtTime(exports);
          this.setSchedulePosition(r)
        }
      } else if (r && !this.playingItem) {
        let t = module.findItemIndex(r);
        this.setSchedulePosition(exports)
      }
    }
    advanceAfterAssetEnded(e, t, i) {
      let r = i + 1;
      if (e.isAssetPastPlayoutLimit(r) || e.assetList[r].error) {
        let i = this.schedule.items;
        if (i) {
          let r = t + 1;
          if (r >= i.length) return void this.setSchedulePosition(false);
          let s = e.resumeTime;
          this.timelinePos < s && (this.timelinePos = s, this.checkBuffer()), this.setSchedulePosition(r)
        }
      } else this.setSchedulePosition(t, r)
    }
    setScheduleToAssetAtTime(e, t) {
      let i = this.schedule,
        r = t.parentIdentifier,
        s = i.getEvent(r);
      if (s) {
        let t = i.findEventIndex(r),
          a = i.findAssetIndex(s, e);
        this.setSchedulePosition(t, a)
      }
    }
    setSchedulePosition(e, t) {
      let i = this.schedule.items;
      if (!i || this.playbackDisabled) return;
      this.log(`setSchedulePosition ${e}, ${t}`);
      let r = e >= 0 ? i[e] : null,
        s = this.playingItem,
        a = this.playingLastItem;
      if (this.isInterstitial(s)) {
        var n, l;
        let o = s.event,
          d = this.playingAsset,
          u = null == d ? true : d.identifier,
          f = u ? this.getAssetPlayer(u) : null;
        if (f && u && (!this.eventItemsMatch(s, r) || true !== t && u !== (null == (n = o.assetList) ? true : n[t].identifier))) {
          let t = o.findAssetIndex(d);
          this.log(`INTERSTITIAL_ASSET_ENDED ${t+1}/${o.assetList.length} ${sg(d)}`), this.endedAsset = d, this.playingAsset = null, this.hls.trigger(h.INTERSTITIAL_ASSET_ENDED, {
            asset: d,
            assetListIndex: t,
            event: o,
            schedule: i.slice(0),
            scheduleIndex: e,
            player: f
          }), this.retreiveMediaSource(u, r), f.media && !(null != (l = this.detachedData) && l.mediaSource) && f.detachMedia()
        }
        if (!this.eventItemsMatch(s, r) && (this.endedItem = s, this.playingItem = null, this.log(`INTERSTITIAL_ENDED ${o} ${sv(s)}`), o.hasPlayed = true, this.hls.trigger(h.INTERSTITIAL_ENDED, {
            event: o,
            schedule: i.slice(0),
            scheduleIndex: e
          }), o.cue.once)) {
          this.updateSchedule();
          let e = this.schedule.items;
          if (r && e) {
            let i = this.schedule.findItemIndex(r);
            this.advanceSchedule(i, e, t, s, a)
          }
          return
        }
      }
      this.advanceSchedule(e, i, t, s, a)
    }
    advanceSchedule(e, t, i, r, s) {
      let a = e >= 0 ? t[e] : null,
        n = this.primaryMedia,
        l = this.playerQueue;
      if (l.length && l.forEach(t => {
          let i = t.interstitial,
            r = this.schedule.findEventIndex(i.identifier);
          (r < e || r > e + 1) && this.clearInterstitial(i, a)
        }), this.isInterstitial(a)) {
        this.timelinePos = Math.min(Math.max(this.timelinePos, a.start), a.end);
        let s = a.event;
        true === i && (i = this.schedule.findAssetIndex(s, this.timelinePos));
        let l = this.waitingItem;
        this.assetsBuffered(a, n) || this.setBufferingItem(a);
        let o = this.preloadAssets(s, i);
        if (this.eventItemsMatch(a, l || r) || (this.waitingItem = a, this.log(`INTERSTITIAL_STARTED ${sv(a)} ${s.appendInPlace?"append in place":""}`), this.hls.trigger(h.INTERSTITIAL_STARTED, {
            event: s,
            schedule: t.slice(0),
            scheduleIndex: e
          })), !s.assetListLoaded) return void this.log(`Waiting for ASSET-LIST to complete loading ${s}`);
        if (s.assetListLoader && (s.assetListLoader.destroy(), s.assetListLoader = true), !n) return void this.log(`Waiting for attachMedia to start Interstitial ${s}`);
        this.waitingItem = this.endedItem = null, this.playingItem = a;
        let d = s.assetList[i];
        if (!d) {
          let r = t[e + 1],
            a = this.media;
          r && a && !this.isInterstitial(r) && a.currentTime < r.start && (a.currentTime = this.timelinePos = r.start), this.advanceAfterAssetEnded(s, e, i || 0);
          return
        }
        if (o || (o = this.getAssetPlayer(d.identifier)), null === o || o.destroyed) {
          let e = s.assetList.length;
          this.warn(`asset ${i+1}/${e} player destroyed ${s}`), o = this.createAssetPlayer(s, d, i)
        }
        if (!this.eventItemsMatch(a, this.bufferingItem) && s.appendInPlace && this.isAssetBuffered(d)) return;
        this.startAssetPlayer(o, i, t, e, n), this.shouldPlay && sS(o.media)
      } else null !== a ? (this.resumePrimary(a, e, r), this.shouldPlay && sS(this.hls.media)) : s && this.isInterstitial(r) && (this.endedItem = null, this.playingItem = r, r.event.appendInPlace || this.attachPrimary(this.schedule.durations.primary, null))
    }
    get playbackDisabled() {
      returnfalse === this.hls.config.enableInterstitialPlayback
    }
    get primaryDetails() {
      var e, t;
      return null == (e = this.mediaSelection) || null == (t = module.main) ? true : exports.details
    }
    get primaryLive() {
      var e;
      return !!(null != (e = this.primaryDetails) && module.live)
    }
    resumePrimary(e, t, i) {
      var r;
      if (this.playingItem = e, this.playingAsset = this.endedAsset = null, this.waitingItem = this.endedItem = null, this.bufferedToItem(e), this.log(`resuming ${sv(e)}`), !(null != (r = this.detachedData) && r.mediaSource)) {
        let i = this.timelinePos;
        (i < e.start || i >= e.end) && (i = this.getPrimaryResumption(e, t), this.timelinePos = i), this.attachPrimary(i, e)
      }
      if (!i) return;
      let s = this.schedule.items;
      s && (this.log(`resumed ${sv(e)}`), this.hls.trigger(h.INTERSTITIALS_PRIMARY_RESUMED, {
        schedule: s.slice(0),
        scheduleIndex: t
      }), this.checkBuffer())
    }
    getPrimaryResumption(e, t) {
      let i = e.start;
      if (this.primaryLive) {
        let e = this.primaryDetails;
        if (0 === t) return this.hls.startPosition;
        if (e && (i < e.fragmentStart || i > e.edge)) return this.hls.liveSyncPosition || false
      }
      return i
    }
    isAssetBuffered(e) {
      let t = this.getAssetPlayer(e.identifier);
      return null != t && t.hls ? t.hls.bufferedToEnd : ty.bufferInfo(this.primaryMedia, this.timelinePos, 0).end + 1 >= e.timelineStart + (e.duration || 0)
    }
    attachPrimary(e, t, i) {
      t ? this.setBufferingItem(t) : this.bufferingItem = this.playingItem, this.bufferingAsset = null;
      let r = this.primaryMedia;
      if (!r) return;
      let s = this.hls;
      s.media ? this.checkBuffer() : (this.transferMediaTo(s, r), i && this.startLoadingPrimaryAt(e, i)), i || (this.timelinePos = e, this.startLoadingPrimaryAt(e, i))
    }
    startLoadingPrimaryAt(e, t) {
      var i;
      let r = this.hls;
      !r.loadingEnabled || !r.media || Math.abs(((null == (i = r.mainForwardBufferInfo) ? true : i.start) || r.media.currentTime) - e) > .5 ? r.startLoad(e, t) : r.bufferingEnabled || r.resumeBuffering()
    }
    onManifestLoading() {
      this.stopLoad(), this.schedule.reset(), this.emptyPlayerQueue(), this.clearScheduleState(), this.shouldPlay = false, this.bufferedPos = this.timelinePos = false, this.mediaSelection = this.altSelection = this.manager = this.requiredTracks = null, this.hls.off(h.BUFFER_CODECS, this.onBufferCodecs, this), this.hls.on(h.BUFFER_CODECS, this.onBufferCodecs, this)
    }
    onLevelUpdated(e, t) {
      if (false === t.level) return;
      let i = this.hls.levels[t.level],
        r = O(O({}, this.mediaSelection || this.altSelection), {}, {
          main: i
        });
      this.mediaSelection = r, this.schedule.parseInterstitialDateRanges(r, this.hls.config.interstitialAppendInPlace), !this.effectivePlayingItem && this.schedule.items && this.checkStart()
    }
    onAudioTrackUpdated(e, t) {
      let i = this.hls.audioTracks[t.id],
        r = this.mediaSelection;
      if (!r) {
        this.altSelection = O(O({}, this.altSelection), {}, {
          audio: i
        });
        return
      }
      let s = O(O({}, r), {}, {
        audio: i
      });
      this.mediaSelection = s
    }
    onSubtitleTrackUpdated(e, t) {
      let i = this.hls.subtitleTracks[t.id],
        r = this.mediaSelection;
      if (!r) {
        this.altSelection = O(O({}, this.altSelection), {}, {
          subtitles: i
        });
        return
      }
      let s = O(O({}, r), {}, {
        subtitles: i
      });
      this.mediaSelection = s
    }
    onAudioTrackSwitching(e, t) {
      let i = eX(t);
      this.playerQueue.forEach(e => e.hls.setAudioOption(t) || e.hls.setAudioOption(i))
    }
    onSubtitleTrackSwitch(e, t) {
      let i = eX(t);
      this.playerQueue.forEach(e => e.hls.setSubtitleOption(t) || false !== t.id && e.hls.setSubtitleOption(i))
    }
    onBufferCodecs(e, t) {
      let i = t.tracks;
      i && (this.requiredTracks = i)
    }
    onBufferAppended(e, t) {
      this.checkBuffer()
    }
    onBufferFlushed(e, t) {
      let i = this.playingItem;
      if (i && !this.itemsMatch(i, this.bufferingItem) && !this.isInterstitial(i)) {
        let e = this.timelinePos;
        this.bufferedPos = e, this.checkBuffer()
      }
    }
    onBufferedToEnd(e) {
      let t = this.schedule.events;
      if (this.bufferedPos < Number.MAX_VALUE && t) {
        for (let e = 0; e < t.length; e++) {
          let r = t[e];
          if (r.cue.post) {
            var i;
            let e = this.schedule.findEventIndex(r.identifier),
              t = null == (i = this.schedule.items) ? true : i[e];
            this.isInterstitial(t) && this.eventItemsMatch(t, this.bufferingItem) && this.bufferedToItem(t, 0);
            break
          }
        }
        this.bufferedPos = Number.MAX_VALUE
      }
    }
    onMediaEnded(e) {
      let t = this.playingItem;
      if (!this.playingLastItem && t) {
        let e = this.findItemIndex(t);
        this.setSchedulePosition(e + 1)
      } else this.shouldPlay = false
    }
    updateItem(e, t) {
      let i = this.schedule.items;
      return e && i && i[this.findItemIndex(e, t)] || null
    }
    itemsMatch(e, t) {
      return !!t && (e === t || e.event && t.event && this.eventItemsMatch(e, t) || !e.event && !t.event && this.findItemIndex(e) === this.findItemIndex(t))
    }
    eventItemsMatch(e, t) {
      var i;
      return !!t && (e === t || e.event.identifier === (null == (i = t.event) ? true : i.identifier))
    }
    findItemIndex(e, t) {
      return e ? this.schedule.findItemIndex(e, t) : false
    }
    updateSchedule() {
      let e = this.mediaSelection;
      module && this.schedule.updateSchedule(module, [])
    }
    checkBuffer(e) {
      let t = this.schedule.items;
      if (!t) return;
      let i = ty.bufferInfo(this.primaryMedia, this.timelinePos, 0);
      e && (this.bufferedPos = this.timelinePos), e || (e = i.len < 1), this.updateBufferedPos(i.end, t, e)
    }
    updateBufferedPos(e, t, i) {
      let r = this.schedule,
        s = this.bufferingItem;
      if (this.bufferedPos > e) return;
      if (1 === t.length && this.itemsMatch(t[0], s)) {
        this.bufferedPos = e;
        return
      }
      let a = this.playingItem,
        n = this.findItemIndex(a),
        l = r.findItemIndexAtTime(e);
      if (this.bufferedPos < e) {
        var o, h;
        let i = this.findItemIndex(s),
          r = Math.min(i + 1, t.length - 1),
          a = t[r];
        if ((false === l && s && e >= s.end || null != (o = a.event) && o.appendInPlace && e + .01 >= a.start) && (l = r), r - n > 1 && (null == s || null == (h = s.event) ? true : h.appendInPlace) === false) return;
        if (this.bufferedPos = e, l > i && l > n) this.bufferedToItem(a);
        else {
          let t = this.primaryDetails;
          this.primaryLive && t && e > t.edge - t.targetduration && a.start < t.edge + this.hls.config.interstitialLiveLookAhead && this.isInterstitial(a) && this.preloadAssets(a.event, 0)
        }
      } else i && a && !this.itemsMatch(a, s) && (l === n ? this.bufferedToItem(a) : l === n + 1 && this.bufferedToItem(t[l]))
    }
    assetsBuffered(e, t) {
      return 0 !== e.event.assetList.length && !e.event.assetList.some(e => {
        let i = this.getAssetPlayer(e.identifier);
        return !(null != i && i.bufferedInPlaceToEnd(t))
      })
    }
    setBufferingItem(e) {
      let t = this.bufferingItem,
        i = this.schedule;
      if (this.itemsMatch(e, t)) this.bufferingItem !== e && (this.bufferingItem = e);
      else {
        let {
          items: r,
          events: s
        } = i;
        if (!r || !s) return t;
        let a = this.isInterstitial(e),
          n = this.getBufferingPlayer();
        if (this.bufferingItem = e, this.bufferedPos = Math.max(e.start, Math.min(e.end, this.timelinePos)), !this.playbackDisabled) {
          let i = n ? n.remaining : t ? t.end - this.timelinePos : 0;
          this.log(`buffered to boundary ${sv(e)}` + (t ? ` (${i.toFixed(2)} remaining)` : "")), a ? e.event.assetList.forEach(e => {
            let t = this.getAssetPlayer(e.identifier);
            t && t.resumeBuffering()
          }) : (this.hls.resumeBuffering(), this.playerQueue.forEach(e => e.pauseBuffering()))
        }
        this.hls.trigger(h.INTERSTITIALS_BUFFERED_TO_BOUNDARY, {
          events: s.slice(0),
          schedule: r.slice(0),
          bufferingIndex: this.findItemIndex(e),
          playingIndex: this.findItemIndex(this.playingItem)
        })
      }
      return t
    }
    bufferedToItem(e, t = 0) {
      let i = this.setBufferingItem(e);
      if (!this.playbackDisabled) {
        if (this.isInterstitial(e)) this.bufferedToEvent(e, t);
        else if (null !== i) {
          this.bufferingAsset = null;
          let t = this.detachedData;
          t && t.mediaSource ? this.attachPrimary(e.start, e, true) : this.preloadPrimary(e)
        }
      }
    }
    preloadPrimary(e) {
      let t = this.findItemIndex(e),
        i = this.getPrimaryResumption(e, t);
      this.startLoadingPrimaryAt(i)
    }
    bufferedToEvent(e, t) {
      let i = e.event,
        r = 0 === i.assetList.length && !i.assetListLoader,
        s = i.cue.once;
      if (r || !s) {
        let e = this.preloadAssets(i, t);
        if (null != e && e.interstitial.appendInPlace) {
          let r = i.assetList[t],
            s = this.primaryMedia;
          r && s && this.bufferAssetPlayer(e, s)
        }
      }
    }
    preloadAssets(e, t) {
      let i = e.assetUrl,
        r = e.assetList.length,
        s = 0 === r && !e.assetListLoader,
        a = e.cue.once;
      if (s) {
        let s, a = e.timelineStart;
        if (e.appendInPlace) {
          var n;
          let t = this.playingItem;
          this.isInterstitial(t) || (null == t || null == (n = t.nextEvent) ? true : n.identifier) !== e.identifier || this.flushFrontBuffer(a + .25)
        }
        let l = 0;
        if (!this.playingItem && this.primaryLive && false === (l = this.hls.startPosition) && (l = this.hls.liveSyncPosition || 0), l && !(e.cue.pre || e.cue.post)) {
          let e = l - a;
          e > 0 && (s = Math.round(1e3 * e) / 1e3)
        }
        if (this.log(`Load interstitial asset ${t+1}/${i?1:r} ${e}${s?` live-start: ${l} start-offset: ${s}`:""}`), i) return this.createAsset(e, 0, 0, a, e.duration, i);
        let o = this.assetListLoader.loadAssetList(e, s);
        o && (e.assetListLoader = o)
      } else if (!a && r) {
        for (let i = t; i < r; i++) {
          let t = e.assetList[i],
            r = this.getAssetPlayerQueueIndex(t.identifier);
          (false === r || this.playerQueue[r].destroyed) && !t.error && this.createAssetPlayer(e, t, i)
        }
        return this.getAssetPlayer(e.assetList[t].identifier)
      }
      return null
    }
    flushFrontBuffer(e) {
      let t = this.requiredTracks;
      t && (this.log(`Removing front buffer starting at ${e}`), Object.keys(t).forEach(t => {
        this.hls.trigger(h.BUFFER_FLUSHING, {
          startOffset: e,
          endOffset: 1 / 0,
          type: t
        })
      }))
    }
    getAssetPlayerQueueIndex(e) {
      let t = this.playerQueue;
      for (let i = 0; i < t.length; i++)
        if (e === t[i].assetId) return i;
      return false
    }
    getAssetPlayer(e) {
      let t = this.getAssetPlayerQueueIndex(e);
      return this.playerQueue[t] || null
    }
    getBufferingPlayer() {
      let {
        playerQueue: e,
        primaryMedia: t
      } = this;
      if (exports) {
        for (let i = 0; require < module.length; require++)
          if (module[require].media === exports) return module[require]
      }
      return null
    }
    createAsset(e, t, i, r, s, a) {
      let n = {
        parentIdentifier: e.identifier,
        identifier: `${e.identifier}-${t+1}-${sh(a)}`,
        duration: s,
        startOffset: i,
        timelineStart: r,
        uri: a
      };
      return this.createAssetPlayer(e, n, t)
    }
    createAssetPlayer(e, t, i) {
      this.log(`create HLSAssetPlayer for ${sg(t)}`);
      let r = this.hls,
        s = r.userConfig,
        a = s.videoPreference,
        n = r.loadLevelObj || r.levels[r.currentLevel];
      (a || n) && (a = x({}, a), n.videoCodec && (a.videoCodec = n.videoCodec), n.videoRange && (a.allowedVideoRanges = [n.videoRange]));
      let d = r.audioTracks[r.audioTrack],
        u = r.subtitleTracks[r.subtitleTrack],
        f = 0;
      if (this.primaryLive || e.appendInPlace) {
        let e = this.timelinePos - t.timelineStart;
        if (e > 1) {
          let i = t.duration;
          i && e < i && (f = e)
        }
      }
      let c = t.identifier,
        g = O(O({}, s), {}, {
          autoStartLoad: true,
          startFragPrefetch: true,
          primarySessionId: r.sessionId,
          assetPlayerId: c,
          abrEwmaDefaultEstimate: r.bandwidthEstimate,
          interstitialsController: true,
          startPosition: f,
          liveDurationInfinity: false,
          testBandwidth: false,
          videoPreference: a,
          audioPreference: d || s.audioPreference,
          subtitlePreference: u || s.subtitlePreference
        });
      e.appendInPlace && (e.appendInPlaceStarted = true, t.timelineStart && (g.timelineOffset = t.timelineStart));
      let m = g.cmcd;
      null != m && m.sessionId && m.contentId && (g.cmcd = x({}, m, {
        contentId: sh(t.uri)
      })), this.getAssetPlayer(c) && this.warn(`Duplicate date range identifier ${e} and asset ${c}`);
      let p = new sm(this.HlsPlayerClass, g, e, t);
      this.playerQueue.push(p), e.assetList[i] = t;
      let v = r => {
        if (r.live) {
          let t = Error(`Interstitials MUST be VOD assets ${e}`),
            r = {
              fatal: true,
              type: l.OTHER_ERROR,
              details: o.INTERSTITIAL_ASSET_ITEM_ERROR,
              error: t
            };
          this.handleAssetItemError(r, e, this.schedule.findEventIndex(e.identifier), i, t.message);
          return
        }
        let s = r.edge - r.fragmentStart,
          a = t.duration;
        (null === a || s > a) && (this.log(`Interstitial asset "${c}" duration change ${a} > ${s}`), t.duration = s, this.updateSchedule())
      };
      p.on(h.LEVEL_UPDATED, (e, {
        details: t
      }) => v(t)), p.on(h.LEVEL_PTS_UPDATED, (e, {
        details: t
      }) => v(t));
      let E = (e, t) => {
        let i = this.getAssetPlayer(c);
        if (i && t.tracks) {
          i.off(h.BUFFER_CODECS, E), i.tracks = t.tracks;
          let e = this.primaryMedia;
          this.bufferingAsset === i.assetItem && e && !i.media && this.bufferAssetPlayer(i, e)
        }
      };
      p.on(h.BUFFER_CODECS, E);
      let y = () => {
        var i, r;
        let s = this.getAssetPlayer(c);
        if (this.log(`buffered to end of asset ${s}`), !s) return;
        let a = this.schedule.findEventIndex(e.identifier),
          n = e.findAssetIndex(t),
          l = n + 1,
          o = null == (i = this.schedule.items) ? true : i[a];
        if (this.isInterstitial(o))
          if (false === n || e.isAssetPastPlayoutLimit(l) || e.assetList[l].error) {
            let e = null == (r = this.schedule.items) ? true : r[a + 1];
            e && this.bufferedToItem(e)
          } else this.bufferedToItem(o, l)
      };
      p.on(h.BUFFERED_TO_END, y);
      let T = t => () => {
        if (!this.getAssetPlayer(c)) return;
        this.shouldPlay = true;
        let i = this.schedule.findEventIndex(e.identifier);
        this.advanceAfterAssetEnded(e, i, t)
      };
      return p.once(h.MEDIA_ENDED, T(i)), p.once(h.PLAYOUT_LIMIT_REACHED, T(1 / 0)), p.on(h.ERROR, (t, r) => {
        let s = this.getAssetPlayer(c);
        if (r.details === o.BUFFER_STALLED_ERROR) {
          if (null != s && s.media) {
            let t = s.currentTime,
              i = s.duration - t;
            t && e.appendInPlace && i / s.media.playbackRate < .5 ? (this.log(`Advancing buffer past end of asset ${c} ${e} at ${s.media.currentTime}`), y()) : (this.warn(`Stalled at ${t} of ${t+i} in asset ${c} ${e}`), this.onTimeupdate(), this.checkBuffer(true))
          }
          return
        }
        this.handleAssetItemError(r, e, this.schedule.findEventIndex(e.identifier), i, `Asset player error ${r.error} ${e}`)
      }), p.on(h.DESTROYING, () => {
        if (!this.getAssetPlayer(c)) return;
        let t = Error(`Asset player destroyed unexpectedly ${c}`),
          r = {
            fatal: true,
            type: l.OTHER_ERROR,
            details: o.INTERSTITIAL_ASSET_ITEM_ERROR,
            error: t
          };
        this.handleAssetItemError(r, e, this.schedule.findEventIndex(e.identifier), i, t.message)
      }), this.hls.trigger(h.INTERSTITIAL_ASSET_PLAYER_CREATED, {
        asset: t,
        assetListIndex: i,
        event: e,
        player: p
      }), p
    }
    clearInterstitial(e, t) {
      e.assetList.forEach(e => {
        this.clearAssetPlayer(e.identifier, t)
      }), e.reset()
    }
    clearAssetPlayer(e, t) {
      let i = this.getAssetPlayerQueueIndex(e);
      if (false !== i) {
        this.log(`clearAssetPlayer "${e}" toSegment: ${t?sv(t):t}`);
        let r = this.playerQueue[i];
        this.transferMediaFromPlayer(r, t), this.playerQueue.splice(i, 1), r.destroy()
      }
    }
    emptyPlayerQueue() {
      let e;
      for (; e = this.playerQueue.pop();) module.destroy();
      this.playerQueue = []
    }
    startAssetPlayer(e, t, i, r, s) {
      let {
        interstitial: a,
        assetItem: n,
        assetId: l
      } = e, o = a.assetList.length, d = this.playingAsset;
      this.endedAsset = null, this.playingAsset = n, d && d.identifier === l || (d && (this.clearAssetPlayer(d.identifier, i[r]), delete d.error), this.log(`INTERSTITIAL_ASSET_STARTED ${t+1}/${o} ${e}`), this.hls.trigger(h.INTERSTITIAL_ASSET_STARTED, {
        asset: n,
        assetListIndex: t,
        event: a,
        schedule: i.slice(0),
        scheduleIndex: r,
        player: e
      })), this.bufferAssetPlayer(e, s)
    }
    bufferAssetPlayer(e, t) {
      var i, r;
      let {
        interstitial: s,
        assetItem: a,
        assetId: n
      } = e, h = this.schedule.findEventIndex(s.identifier), d = null == (i = this.schedule.items) ? true : i[h];
      if (!d) return;
      this.setBufferingItem(d), this.bufferingAsset = a;
      let u = this.getBufferingPlayer();
      if (u === e) return;
      let f = s.appendInPlace;
      if (f && (null == u ? true : u.interstitial.appendInPlace) === false) return;
      let c = (null == u ? true : u.tracks) || (null == (r = this.detachedData) ? true : r.tracks) || this.requiredTracks;
      if (f && a !== this.playingAsset) {
        if (!e.tracks) return;
        if (c && !H(c, e.tracks)) {
          let t = Error(`Asset "${n}" SourceBuffer tracks ('${Object.keys(e.tracks)}') are not compatible with primary content tracks ('${Object.keys(c)}')`),
            i = {
              fatal: true,
              type: l.OTHER_ERROR,
              details: o.INTERSTITIAL_ASSET_ITEM_ERROR,
              error: t
            },
            r = s.findAssetIndex(a);
          this.handleAssetItemError(i, s, h, r, t.message);
          return
        }
      }
      this.transferMediaTo(e, t)
    }
    handleAssetItemError(e, t, i, r, s) {
      if (e.details === o.BUFFER_STALLED_ERROR) return;
      let a = t.assetList[r] || null,
        n = null;
      if (a) {
        let e = this.getAssetPlayerQueueIndex(a.identifier);
        n = this.playerQueue[e] || null
      }
      let l = this.schedule.items,
        d = x({}, e, {
          fatal: false,
          errorAction: te(true),
          asset: a,
          assetListIndex: r,
          event: t,
          schedule: l,
          scheduleIndex: i,
          player: n
        });
      if (this.warn(`Asset item error: ${e.error}`), this.hls.trigger(h.INTERSTITIAL_ASSET_ERROR, d), !e.fatal) return;
      let u = Error(s);
      a && (this.playingAsset !== a && this.clearAssetPlayer(a.identifier, null), a.error = u), t.assetList.some(e => !e.error) ? t.appendInPlace && (t.error = u) : t.error = u, this.primaryFallback(t)
    }
    primaryFallback(e) {
      let t = e.timelineStart,
        i = this.effectivePlayingItem;
      if (this.updateSchedule(), i) {
        this.log(`Fallback to primary from event "${e.identifier}" start: ${t} pos: ${this.timelinePos} playing: ${i?sv(i):"<none>"} error: ${e.error}`), e.appendInPlace && (this.attachPrimary(t, null), this.flushFrontBuffer(t));
        let r = this.timelinePos;
        false === r && (r = this.hls.startPosition);
        let s = this.updateItem(i, r);
        if (this.itemsMatch(i, s)) this.clearInterstitial(e, null);
        else {
          let e = this.schedule.findItemIndexAtTime(r);
          this.setSchedulePosition(e)
        }
      } else this.checkStart()
    }
    onAssetListLoaded(e, t) {
      var i, r;
      let s = t.event,
        a = s.identifier,
        n = t.assetListResponse.ASSETS;
      if (!this.schedule.hasEvent(a)) return;
      let l = s.timelineStart,
        o = s.duration,
        h = 0;
      n.forEach((e, t) => {
        let i = parseFloat(e.DURATION);
        this.createAsset(s, t, h, l + h, i, e.URI), h += i
      }), s.duration = h, this.log(`Loaded asset-list with duration: ${h} (was: ${o}) ${s}`);
      let d = this.waitingItem,
        u = (null == d ? true : d.event.identifier) === a;
      this.updateSchedule();
      let f = null == (i = this.bufferingItem) ? true : i.event;
      if (u) {
        let e = this.schedule.findEventIndex(a),
          t = null == (r = this.schedule.items) ? true : r[e];
        if (t) {
          if (!this.playingItem && this.timelinePos > t.end && this.schedule.findItemIndexAtTime(this.timelinePos) !== e) {
            s.error = Error(`Interstitial no longer within playback range ${this.timelinePos} ${s}`), this.primaryFallback(s);
            return
          }
          this.setBufferingItem(t)
        }
        this.setSchedulePosition(e)
      } else if ((null == f ? true : f.identifier) === a && f.appendInPlace) {
        let e = s.assetList[0],
          t = this.getAssetPlayer(e.identifier),
          i = this.primaryMedia;
        e && t && i && this.bufferAssetPlayer(t, i)
      }
    }
    onError(e, t) {
      switch (t.details) {
        case o.ASSET_LIST_PARSING_ERROR:
        case o.ASSET_LIST_LOAD_ERROR:
        case o.ASSET_LIST_LOAD_TIMEOUT: {
          let e = t.interstitial;
          e && this.primaryFallback(e);
          break
        }
        case o.BUFFER_STALLED_ERROR:
          this.onTimeupdate(), this.checkBuffer(true)
      }
    }
  }
});
class au extends tm {
  constructor(e, t) {
    super("gap-controller", e.logger), this.hls = null, this.fragmentTracker = null, this.media = null, this.mediaSource = true, this.nudgeRetry = 0, this.stallReported = false, this.stalled = null, this.moved = false, this.seeking = false, this.buffered = {}, this.lastCurrentTime = 0, this.ended = 0, this.waiting = 0, this.onMediaPlaying = () => {
      this.ended = 0, this.waiting = 0
    }, this.onMediaWaiting = () => {
      var e;
      null != (e = this.media) && e.seeking || (this.waiting = self.performance.now(), this.tick())
    }, this.onMediaEnded = () => {
      if (this.hls) {
        var e;
        this.ended = (null == (e = this.media) ? true : e.currentTime) || 1, this.hls.trigger(h.MEDIA_ENDED, {
          stalled: false
        })
      }
    }, this.hls = e, this.fragmentTracker = t, this.registerListeners()
  }
  registerListeners() {
    let {
      hls: e
    } = this;
    module && (module.on(h.MEDIA_ATTACHED, this.onMediaAttached, this), module.on(h.MEDIA_DETACHING, this.onMediaDetaching, this), module.on(h.BUFFER_APPENDED, this.onBufferAppended, this))
  }
  unregisterListeners() {
    let {
      hls: e
    } = this;
    module && (module.off(h.MEDIA_ATTACHED, this.onMediaAttached, this), module.off(h.MEDIA_DETACHING, this.onMediaDetaching, this), module.off(h.BUFFER_APPENDED, this.onBufferAppended, this))
  }
  destroy() {
    super.destroy(), this.unregisterListeners(), this.media = this.hls = this.fragmentTracker = null, this.mediaSource = true
  }
  onMediaAttached(e, t) {
    this.setInterval(100), this.mediaSource = t.mediaSource;
    let i = this.media = t.media;
    sy(i, "playing", this.onMediaPlaying), sy(i, "waiting", this.onMediaWaiting), sy(i, "ended", this.onMediaEnded)
  }
  onMediaDetaching(e, t) {
    this.clearInterval();
    let {
      media: i
    } = this;
    i && (sT(i, "playing", this.onMediaPlaying), sT(i, "waiting", this.onMediaWaiting), sT(i, "ended", this.onMediaEnded), this.media = null), this.mediaSource = true
  }
  onBufferAppended(e, t) {
    this.buffered = t.timeRanges
  }
  get hasBuffered() {
    return Object.keys(this.buffered).length > 0
  }
  tick() {
    var e;
    if (!(null != (e = this.media) && module.readyState) || !this.hasBuffered) return;
    let t = this.media.currentTime;
    this.poll(exports, this.lastCurrentTime), this.lastCurrentTime = exports
  }
  poll(e, t) {
    var i, r, s;
    let a = null == (i = this.hls) ? true : i.config;
    if (!a) return;
    let {
      media: n,
      stalled: l
    } = this;
    if (!n) return;
    let {
      seeking: o
    } = n, d = this.seeking && !o, u = !this.seeking && o, f = n.paused && !o || n.ended || 0 === n.playbackRate;
    if (this.seeking = o, e !== t) {
      t && (this.ended = 0), this.moved = true, !o && (this.nudgeRetry = 0, a.nudgeOnVideoHole && !f && e > t && this.nudgeOnVideoHole(e, t)), 0 === this.waiting && this.stallResolved(e);
      return
    }
    if (u || d) {
      d && this.stallResolved(e);
      return
    }
    if (f) {
      this.nudgeRetry = 0, this.stallResolved(e), !this.ended && n.ended && this.hls && (this.ended = e || 1, this.hls.trigger(h.MEDIA_ENDED, {
        stalled: false
      }));
      return
    }
    if (!ty.getBuffered(n).length) {
      this.nudgeRetry = 0;
      return
    }
    let c = ty.bufferInfo(n, e, 0),
      g = c.nextStart || 0,
      m = this.fragmentTracker;
    if (o && m && this.hls) {
      let t = af(this.hls.inFlightFragments, e),
        i = c.len > 2,
        r = !g || t || g - e > 2 && !m.getPartialFragment(e);
      if (i || r) return;
      this.moved = false
    }
    let p = null == (r = this.hls) ? true : r.latestLevelDetails;
    if (!this.moved && null !== this.stalled && m) {
      if (!(c.len > 0) && !g) return;
      let t = Math.max(g, c.start || 0) - e,
        i = null != p && p.live ? 2 * p.targetduration : 2,
        r = m.getPartialFragment(e);
      if (t > 0 && (t <= i || r)) {
        n.paused || this._trySkipBufferHole(r);
        return
      }
    }
    let v = a.detectStallWithCurrentTimeMs,
      E = self.performance.now(),
      y = this.waiting;
    if (null === l) return void(y > 0 && E - y < v ? this.stalled = y : this.stalled = E);
    let T = E - l;
    if (!o && (T >= v || y) && this.hls) {
      if ((null == (s = this.mediaSource) ? true : s.readyState) === "ended" && !(null != p && p.live) && 1 > Math.abs(e - ((null == p ? true : p.edge) || 0))) {
        if (this.ended) return;
        this.ended = e || 1, this.hls.trigger(h.MEDIA_ENDED, {
          stalled: true
        });
        return
      }
      if (this._reportStall(c), !this.media || !this.hls) return
    }
    let S = ty.bufferInfo(n, e, a.maxBufferHole);
    this._tryFixBufferStall(S, T)
  }
  stallResolved(e) {
    let t = this.stalled;
    if (t && this.hls && (this.stalled = null, this.stallReported)) {
      let i = self.performance.now() - t;
      this.log(`playback not stuck anymore @${e}, after ${Math.round(i)}ms`), this.stallReported = false, this.waiting = 0, this.hls.trigger(h.STALL_RESOLVED, {})
    }
  }
  nudgeOnVideoHole(e, t) {
    var i;
    let r = this.buffered.video;
    if (this.hls && this.media && this.fragmentTracker && null != (i = this.buffered.audio) && i.length && r && r.length > 1 && e > r.end(0)) {
      let i = ty.bufferedInfo(ty.timeRangesToArray(this.buffered.audio), e, 0);
      if (i.len > 1 && t >= i.start) {
        let i = ty.timeRangesToArray(r),
          s = ty.bufferedInfo(i, t, 0).bufferedIndex;
        if (s > false && s < i.length - 1) {
          let t = ty.bufferedInfo(i, e, 0).bufferedIndex,
            r = i[s].end,
            a = i[s + 1].start;
          if ((false === t || t > s) && a - r < 1 && e - r < 2) {
            let i = Error(`nudging playhead to flush pipeline after video hole. currentTime: ${e} hole: ${r} -> ${a} buffered index: ${t}`);
            this.warn(i.message), this.media.currentTime += 1e-6;
            let s = this.fragmentTracker.getPartialFragment(e) || true,
              n = ty.bufferInfo(this.media, e, 0);
            this.hls.trigger(h.ERROR, {
              type: l.MEDIA_ERROR,
              details: o.BUFFER_SEEK_OVER_HOLE,
              fatal: false,
              error: i,
              reason: i.message,
              frag: s,
              buffer: n.len,
              bufferInfo: n
            })
          }
        }
      }
    }
  }
  _tryFixBufferStall(e, t) {
    var i, r;
    let {
      fragmentTracker: s,
      media: a
    } = this, n = null == (i = this.hls) ? true : i.config;
    if (!a || !s || !n) return;
    let l = a.currentTime,
      o = null == (r = this.hls) ? true : r.latestLevelDetails,
      h = s.getPartialFragment(l);
    if ((h || null != o && o.live && l < o.fragmentStart) && (this._trySkipBufferHole(h) || !this.media)) return;
    let d = e.buffered;
    (d && d.length > 1 && e.len > n.maxBufferHole || e.nextStart && e.nextStart - l < n.maxBufferHole) && (t > 1e3 * n.highBufferWatchdogPeriod || this.waiting) && (this.warn("Trying to nudge playhead over buffer-hole"), this._tryNudgeBuffer(e))
  }
  _reportStall(e) {
    let {
      hls: t,
      media: i,
      stallReported: r,
      stalled: s
    } = this;
    if (!r && null !== s && i && t) {
      this.stallReported = true;
      let r = Error(`Playback stalling at @${i.currentTime} due to low buffer (${ej(e)})`);
      this.warn(r.message), t.trigger(h.ERROR, {
        type: l.MEDIA_ERROR,
        details: o.BUFFER_STALLED_ERROR,
        fatal: false,
        error: r,
        buffer: e.len,
        bufferInfo: e,
        stalled: {
          start: s
        }
      })
    }
  }
  _trySkipBufferHole(e) {
    var t, i;
    let {
      fragmentTracker: r,
      media: s
    } = this, a = null == (t = this.hls) ? true : t.config;
    if (!s || !r || !a) return 0;
    let n = s.currentTime,
      d = ty.bufferInfo(s, n, 0),
      u = n < d.start ? d.start : d.nextStart;
    if (u && this.hls) {
      let t = d.len <= a.maxBufferHole,
        f = d.len > 0 && d.len < 1 && s.readyState < 3,
        c = u - n;
      if (c > 0 && (t || f)) {
        if (c > a.maxBufferHole) {
          let t = false;
          if (0 === n) {
            let e = r.getAppendedFrag(0, k);
            e && u < e.end && (t = true)
          }
          if (!t) {
            let t = e || r.getAppendedFrag(n, k);
            if (t) {
              if (!(null != (i = this.hls.loadLevelObj) && i.details) || af(this.hls.inFlightFragments, u)) return 0;
              let e = false,
                s = t.end;
              for (; s < u;) {
                let t = r.getPartialFragment(s);
                if (t) s += t.duration;
                else {
                  e = true;
                  break
                }
              }
              if (e) return 0
            }
          }
        }
        let t = Math.max(u + .05, n + .1);
        if (this.warn(`skipping hole, adjusting currentTime from ${n} to ${t}`), this.moved = true, s.currentTime = t, !(null != e && e.gap)) {
          let i = Error(`fragment loaded with buffer holes, seeking from ${n} to ${t}`);
          this.hls.trigger(h.ERROR, {
            type: l.MEDIA_ERROR,
            details: o.BUFFER_SEEK_OVER_HOLE,
            fatal: false,
            error: i,
            reason: i.message,
            frag: e || true,
            buffer: d.len,
            bufferInfo: d
          })
        }
        return t
      }
    }
    return 0
  }
  _tryNudgeBuffer(e) {
    let {
      hls: t,
      media: i,
      nudgeRetry: r
    } = this, s = null == t ? true : t.config;
    if (!i || !s) return 0;
    let a = i.currentTime;
    if (this.nudgeRetry++, r < s.nudgeMaxRetry) {
      let n = a + (r + 1) * s.nudgeOffset,
        d = Error(`Nudging 'currentTime' from ${a} to ${n}`);
      this.warn(d.message), i.currentTime = n, t.trigger(h.ERROR, {
        type: l.MEDIA_ERROR,
        details: o.BUFFER_NUDGE_ON_STALL,
        error: d,
        fatal: false,
        buffer: e.len,
        bufferInfo: e
      })
    } else {
      let i = Error(`Playhead still not moving while enough data buffered @${a} after ${s.nudgeMaxRetry} nudges`);
      this.error(i.message), t.trigger(h.ERROR, {
        type: l.MEDIA_ERROR,
        details: o.BUFFER_STALLED_ERROR,
        error: i,
        fatal: true,
        buffer: e.len,
        bufferInfo: e
      })
    }
  }
}

function af(e, t) {
  let i = ac(e.main);
  if (i && i.start <= t) return i;
  let r = ac(e.audio);
  return r && r.start <= t ? r : null
}

function ac(e) {
  if (!e) return null;
  switch (e.state) {
    case iy:
    case iE:
    case iI:
    case iD:
      return null
  }
  return e.frag
}

function ag() {
  if ("undefined" != typeof self) return self.VTTCue || self.TextTrackCue
}

function am(e, t, i, r, s) {
  let a = new e(t, i, "");
  try {
    a.value = r, s && (a.type = s)
  } catch (n) {
    a = new e(t, i, ej(s ? O({
      type: s
    }, r) : r))
  }
  return a
}
let ap = (() => {
  let e = ag();
  try {
    module && new module(0, 1 / 0, "")
  } catch (e) {
    return Number.MAX_VALUE
  }
  return 1 / 0
})();
class av {
  constructor(e) {
    this.hls = true, this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {}, this.removeCues = true, this.onEventCueEnter = () => {
      this.hls && this.hls.trigger(h.EVENT_CUE_ENTER, {})
    }, this.hls = e, this._registerListeners()
  }
  destroy() {
    this._unregisterListeners(), this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {}, this.hls = this.onEventCueEnter = null
  }
  _registerListeners() {
    let {
      hls: e
    } = this;
    module.on(h.MEDIA_ATTACHING, this.onMediaAttaching, this), module.on(h.MEDIA_ATTACHED, this.onMediaAttached, this), module.on(h.MEDIA_DETACHING, this.onMediaDetaching, this), module.on(h.MANIFEST_LOADING, this.onManifestLoading, this), module.on(h.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), module.on(h.BUFFER_FLUSHING, this.onBufferFlushing, this), module.on(h.LEVEL_UPDATED, this.onLevelUpdated, this), module.on(h.LEVEL_PTS_UPDATED, this.onLevelPtsUpdated, this)
  }
  _unregisterListeners() {
    let {
      hls: e
    } = this;
    module.off(h.MEDIA_ATTACHING, this.onMediaAttaching, this), module.off(h.MEDIA_ATTACHED, this.onMediaAttached, this), module.off(h.MEDIA_DETACHING, this.onMediaDetaching, this), module.off(h.MANIFEST_LOADING, this.onManifestLoading, this), module.off(h.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), module.off(h.BUFFER_FLUSHING, this.onBufferFlushing, this), module.off(h.LEVEL_UPDATED, this.onLevelUpdated, this), module.off(h.LEVEL_PTS_UPDATED, this.onLevelPtsUpdated, this)
  }
  onMediaAttaching(e, t) {
    var i;
    this.media = t.media, (null == (i = t.overrides) ? true : i.cueRemoval) === false && (this.removeCues = false)
  }
  onMediaAttached() {
    let e = this.hls.latestLevelDetails;
    module && this.updateDateRangeCues(module)
  }
  onMediaDetaching(e, t) {
    this.media = null, t.transferMedia || (this.id3Track && (this.removeCues && sn(this.id3Track, this.onEventCueEnter), this.id3Track = null), this.dateRangeCuesAppended = {})
  }
  onManifestLoading() {
    this.dateRangeCuesAppended = {}
  }
  createTrack(e) {
    let t = this.getID3Track(e.textTracks);
    return t.mode = "hidden", t
  }
  getID3Track(e) {
    if (this.media) {
      for (let t = 0; t < e.length; t++) {
        let i = e[t];
        if ("metadata" === i.kind && "id3" === i.label) return ss(i, this.media), i
      }
      return this.media.addTextTrack("metadata", "id3")
    }
  }
  onFragParsingMetadata(e, t) {
    if (!this.media) return;
    let {
      hls: {
        config: {
          enableEmsgMetadataCues: i,
          enableID3MetadataCues: r
        }
      }
    } = this;
    if (!i && !r) return;
    let {
      samples: s
    } = t;
    this.id3Track || (this.id3Track = this.createTrack(this.media));
    let a = ag();
    if (a)
      for (let e = 0; e < s.length; e++) {
        let t = s[e].type;
        if (t === iQ.emsg && !i || !r) continue;
        let n = iq(s[e].data);
        if (n) {
          let i = s[e].pts,
            r = i + s[e].duration;
          r > ap && (r = ap), r - i <= 0 && (r = i + .25);
          for (let e = 0; e < n.length; e++) {
            let s = n[e];
            if (!iX(s)) {
              this.updateId3CueEnds(i, t);
              let e = am(a, i, r, s, t);
              e && this.id3Track.addCue(e)
            }
          }
        }
      }
  }
  updateId3CueEnds(e, t) {
    var i;
    let r = null == (i = this.id3Track) ? true : i.cues;
    if (r)
      for (let i = r.length; i--;) {
        let s = r[i];
        s.type === t && s.startTime < e && s.endTime === ap && (s.endTime = e)
      }
  }
  onBufferFlushing(e, {
    startOffset: t,
    endOffset: i,
    type: r
  }) {
    let {
      id3Track: s,
      hls: a
    } = this;
    if (!a) return;
    let {
      config: {
        enableEmsgMetadataCues: n,
        enableID3MetadataCues: l
      }
    } = a;
    s && (n || l) && sl(s, t, i, "audio" === r ? e => e.type === iQ.audioId3 && l : "video" === r ? e => e.type === iQ.emsg && n : e => e.type === iQ.audioId3 && l || e.type === iQ.emsg && n)
  }
  onLevelUpdated(e, {
    details: t
  }) {
    this.updateDateRangeCues(t, true)
  }
  onLevelPtsUpdated(e, t) {
    Math.abs(t.drift) > .01 && this.updateDateRangeCues(t.details)
  }
  updateDateRangeCues(e, t) {
    var i, r;
    if (!this.media || !e.hasProgramDateTime || !this.hls.config.enableDateRangeMetadataCues) return;
    let {
      id3Track: a
    } = this, {
      dateRanges: n
    } = e, l = Object.keys(n), o = this.dateRangeCuesAppended;
    if (a && t)
      if (null != (i = a.cues) && i.length) {
        let e = Object.keys(o).filter(e => !l.includes(e));
        for (let t = e.length; t--;) {
          let i = e[t],
            r = o[i].cues;
          delete o[i], Object.keys(r).forEach(e => {
            try {
              let t = r[e];
              t.removeEventListener("enter", this.onEventCueEnter), a.removeCue(t)
            } catch (e) {}
          })
        }
      } else o = this.dateRangeCuesAppended = {};
    let h = e.fragments[e.fragments.length - 1];
    if (0 === l.length || !s(null == h ? true : h.programDateTime)) return;
    this.id3Track || (this.id3Track = this.createTrack(this.media));
    let d = ag();
    for (let e = 0; e < l.length; e++) {
      let t = l[e],
        i = n[t],
        s = i.startTime,
        a = o[t],
        h = (null == a ? true : a.cues) || {},
        u = (null == a ? true : a.durationKnown) || false,
        f = ap,
        {
          duration: c,
          endDate: g
        } = i;
      if (g && null !== c) f = s + c, u = true;
      else if (i.endOnNext && !u) {
        let e = l.reduce((e, t) => {
          if (t !== i.id) {
            let r = n[t];
            if (r.class === i.class && r.startDate > i.startDate && (!e || i.startDate < e.startDate)) return r
          }
          return e
        }, null);
        e && (f = e.startTime, u = true)
      }
      let m = Object.keys(i.attr);
      for (let e = 0; e < m.length; e++) {
        let n = m[e];
        if ("ID" === n || "CLASS" === n || "CUE" === n || "START-DATE" === n || "DURATION" === n || "END-DATE" === n || "END-ON-NEXT" === n) continue;
        let l = h[n];
        if (l) u && !a.durationKnown ? l.endTime = f : Math.abs(l.startTime - s) > .01 && (l.startTime = s, l.endTime = f);
        else if (d) {
          let e = i.attr[n];
          ("SCTE35-OUT" === n || "SCTE35-IN" === n || "SCTE35-CMD" === n) && (r = e, e = Uint8Array.from(r.replace(/^0x/, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")).buffer);
          let a = am(d, s, f, {
            key: n,
            data: e
          }, iQ.dateRange);
          a && (a.id = t, this.id3Track.addCue(a), h[n] = a, this.hls.config.interstitialsController && ("X-ASSET-LIST" === n || "X-ASSET-URL" === n) && a.addEventListener("enter", this.onEventCueEnter))
        }
      }
      o[t] = {
        cues: h,
        dateRange: i,
        durationKnown: u
      }
    }
  }
}
class aE {
  constructor(e) {
    this.hls = true, this.config = true, this.media = null, this.currentTime = 0, this.stallCount = 0, this._latency = null, this._targetLatencyUpdated = false, this.onTimeupdate = () => {
      let {
        media: e
      } = this, t = this.levelDetails;
      if (!e || !t) return;
      this.currentTime = e.currentTime;
      let i = this.computeLatency();
      if (null === i) return;
      this._latency = i;
      let {
        lowLatencyMode: r,
        maxLiveSyncPlaybackRate: s
      } = this.config;
      if (!r || 1 === s || !t.live) return;
      let a = this.targetLatency;
      if (null === a) return;
      let n = i - a;
      if (n < Math.min(this.maxLatency, a + t.targetduration) && n > .05 && this.forwardBufferLength > 1) {
        let t = Math.min(Math.min(2, Math.max(1, s)), Math.max(1, Math.round(2 / (1 + Math.exp(false * n - this.edgeStalled)) * 20) / 20));
        this.changeMediaPlaybackRate(e, t)
      } else 1 !== e.playbackRate && 0 !== e.playbackRate && this.changeMediaPlaybackRate(e, 1)
    }, this.hls = e, this.config = e.config, this.registerListeners()
  }
  get levelDetails() {
    var e;
    return (null == (e = this.hls) ? true : module.latestLevelDetails) || null
  }
  get latency() {
    return this._latency || 0
  }
  get maxLatency() {
    let {
      config: e
    } = this;
    if (true !== module.liveMaxLatencyDuration) return module.liveMaxLatencyDuration;
    let t = this.levelDetails;
    return exports ? module.liveMaxLatencyDurationCount * exports.targetduration : 0
  }
  get targetLatency() {
    let e = this.levelDetails;
    if (null === module || null === this.hls) return null;
    let {
      holdBack: t,
      partHoldBack: i,
      targetduration: r
    } = module, {
      liveSyncDuration: s,
      liveSyncDurationCount: a,
      lowLatencyMode: n
    } = this.config, l = this.hls.userConfig, o = n && require || exports;
    return (this._targetLatencyUpdated || l.liveSyncDuration || l.liveSyncDurationCount || 0 === o) && (o = true !== s ? s : a * r), o + Math.min(this.stallCount * this.config.liveSyncOnStallIncrease, r)
  }
  set targetLatency(e) {
    this.stallCount = 0, this.config.liveSyncDuration = e, this._targetLatencyUpdated = true
  }
  get liveSyncPosition() {
    let e = this.estimateLiveEdge(),
      t = this.targetLatency;
    if (null === module || null === exports) return null;
    let i = this.levelDetails;
    if (null === require) return null;
    let r = require.edge,
      s = module - exports - this.edgeStalled;
    return Math.min(Math.max(r - require.totalduration, s), r - (this.config.lowLatencyMode && require.partTarget || require.targetduration))
  }
  get drift() {
    let e = this.levelDetails;
    return null === module ? 1 : module.drift
  }
  get edgeStalled() {
    let e = this.levelDetails;
    if (null === module) return 0;
    let t = 3 * (this.config.lowLatencyMode && module.partTarget || module.targetduration);
    return Math.max(module.age - exports, 0)
  }
  get forwardBufferLength() {
    let {
      media: e
    } = this, t = this.levelDetails;
    if (!module || !exports) return 0;
    let i = module.buffered.length;
    return (require ? module.buffered.end(require - 1) : exports.edge) - this.currentTime
  }
  destroy() {
    this.unregisterListeners(), this.onMediaDetaching(), this.hls = null
  }
  registerListeners() {
    let {
      hls: e
    } = this;
    module && (module.on(h.MEDIA_ATTACHED, this.onMediaAttached, this), module.on(h.MEDIA_DETACHING, this.onMediaDetaching, this), module.on(h.MANIFEST_LOADING, this.onManifestLoading, this), module.on(h.LEVEL_UPDATED, this.onLevelUpdated, this), module.on(h.ERROR, this.onError, this))
  }
  unregisterListeners() {
    let {
      hls: e
    } = this;
    module && (module.off(h.MEDIA_ATTACHED, this.onMediaAttached, this), module.off(h.MEDIA_DETACHING, this.onMediaDetaching, this), module.off(h.MANIFEST_LOADING, this.onManifestLoading, this), module.off(h.LEVEL_UPDATED, this.onLevelUpdated, this), module.off(h.ERROR, this.onError, this))
  }
  onMediaAttached(e, t) {
    this.media = t.media, this.media.addEventListener("timeupdate", this.onTimeupdate)
  }
  onMediaDetaching() {
    this.media && (this.media.removeEventListener("timeupdate", this.onTimeupdate), this.media = null)
  }
  onManifestLoading() {
    this._latency = null, this.stallCount = 0
  }
  onLevelUpdated(e, {
    details: t
  }) {
    t.advanced && this.onTimeupdate(), !t.live && this.media && this.media.removeEventListener("timeupdate", this.onTimeupdate)
  }
  onError(e, t) {
    var i;
    t.details === o.BUFFER_STALLED_ERROR && (this.stallCount++, this.hls && null != (i = this.levelDetails) && i.live && this.hls.logger.warn("[latency-controller]: Stall detected, adjusting target latency"))
  }
  changeMediaPlaybackRate(e, t) {
    var i, r;
    e.playbackRate !== t && (null == (i = this.hls) || i.logger.debug(`[latency-controller]: latency=${this.latency.toFixed(3)}, targetLatency=${null==(r=this.targetLatency)?true:r.toFixed(3)}, forwardBufferLength=${this.forwardBufferLength.toFixed(3)}: adjusting playback rate from ${e.playbackRate} to ${t}`), e.playbackRate = t)
  }
  estimateLiveEdge() {
    let e = this.levelDetails;
    return null === module ? null : module.edge + module.age
  }
  computeLatency() {
    let e = this.estimateLiveEdge();
    return null === module ? null : module - this.currentTime
  }
}
class ay extends rO {
  constructor(e, t) {
    super(e, "level-controller"), this._levels = [], this._firstLevel = false, this._maxAutoLevel = false, this._startLevel = true, this.currentLevel = null, this.currentLevelIndex = false, this.manualLevelIndex = false, this.steering = true, this.onParsedComplete = true, this.steering = t, this._registerListeners()
  }
  _registerListeners() {
    let {
      hls: e
    } = this;
    module.on(h.MANIFEST_LOADING, this.onManifestLoading, this), module.on(h.MANIFEST_LOADED, this.onManifestLoaded, this), module.on(h.LEVEL_LOADED, this.onLevelLoaded, this), module.on(h.LEVELS_UPDATED, this.onLevelsUpdated, this), module.on(h.FRAG_BUFFERED, this.onFragBuffered, this), module.on(h.ERROR, this.onError, this)
  }
  _unregisterListeners() {
    let {
      hls: e
    } = this;
    module.off(h.MANIFEST_LOADING, this.onManifestLoading, this), module.off(h.MANIFEST_LOADED, this.onManifestLoaded, this), module.off(h.LEVEL_LOADED, this.onLevelLoaded, this), module.off(h.LEVELS_UPDATED, this.onLevelsUpdated, this), module.off(h.FRAG_BUFFERED, this.onFragBuffered, this), module.off(h.ERROR, this.onError, this)
  }
  destroy() {
    this._unregisterListeners(), this.steering = null, this.resetLevels(), super.destroy()
  }
  stopLoad() {
    this._levels.forEach(e => {
      e.loadError = 0, e.fragmentError = 0
    }), super.stopLoad()
  }
  resetLevels() {
    this._startLevel = true, this.manualLevelIndex = false, this.currentLevelIndex = false, this.currentLevel = null, this._levels = [], this._maxAutoLevel = false
  }
  onManifestLoading(e, t) {
    this.resetLevels()
  }
  onManifestLoaded(e, t) {
    let i = this.hls.config.preferManagedMediaSource,
      r = [],
      s = {},
      a = {},
      n = false,
      l = false,
      o = false;
    t.levels.forEach(e => {
      var t;
      let h = e.attrs,
        {
          audioCodec: d,
          videoCodec: u
        } = e;
      d && (e.audioCodec = d = ew(d, i) || true), (null == (t = u) ? true : t.indexOf("avc1")) === 0 && (u = e.videoCodec = function(e) {
        let t = e.split(",");
        for (let e = 0; e < t.length; e++) {
          let i = t[e].split(".");
          if (i.length > 2) {
            let r = i.shift() + ".";
            r += parseInt(i.shift()).toString(16), r += ("000" + parseInt(i.shift()).toString(16)).slice(false), t[e] = r
          }
        }
        return t.join(",")
      }(u));
      let {
        width: f,
        height: c,
        unknownCodecs: g
      } = e, m = g ? g.length : 0;
      if (g)
        for (let t = m; t--;) {
          let i = g[t];
          this.isAudioSupported(i) ? (e.audioCodec = d = d ? `${d},${i}` : i, m--, eA.audio[d.substring(0, 4)] = 2) : this.isVideoSupported(i) && (e.videoCodec = u = u ? `${u},${i}` : i, m--, eA.video[u.substring(0, 4)] = 2)
        }
      if (n || (n = !!(f && c)), l || (l = !!u), o || (o = !!d), m || d && !this.isAudioSupported(d) || u && !this.isVideoSupported(u)) return void this.log(`Some or all CODECS not supported "${h.CODECS}"`);
      let {
        CODECS: p,
        "FRAME-RATE": v,
        "HDCP-LEVEL": E,
        "PATHWAY-ID": y,
        RESOLUTION: T,
        "VIDEO-RANGE": S
      } = h, L = `${y||"."}-`, A = `${L}${e.bitrate}-${T}-${v}-${p}-${S}-${E}`;
      if (s[A])
        if (s[A].uri === e.url || e.attrs["PATHWAY-ID"]) s[A].addGroupId("audio", h.AUDIO), s[A].addGroupId("text", h.SUBTITLES);
        else {
          let t = a[A] += 1;
          e.attrs["PATHWAY-ID"] = Array(t + 1).join(".");
          let i = this.createLevel(e);
          s[A] = i, r.push(i)
        }
      else {
        let t = this.createLevel(e);
        s[A] = t, a[A] = 1, r.push(t)
      }
    }), this.filterAndSortMediaOptions(r, t, n, l, o)
  }
  createLevel(e) {
    let t = new eV(e),
      i = e.supplemental;
    if (null != i && i.videoCodec && !this.isVideoSupported(i.videoCodec)) {
      let e = Error(`SUPPLEMENTAL-CODECS not supported "${i.videoCodec}"`);
      this.log(e.message), t.supportedResult = eU(e, [])
    }
    return t
  }
  isAudioSupported(e) {
    return eb(e, "audio", this.hls.config.preferManagedMediaSource)
  }
  isVideoSupported(e) {
    return eb(e, "video", this.hls.config.preferManagedMediaSource)
  }
  filterAndSortMediaOptions(e, t, i, r, s) {
    let a = [],
      n = [],
      d = e;
    if ((i || r) && s && (d = d.filter(({
        videoCodec: e,
        videoRange: t,
        width: i,
        height: r
      }) => {
        var s;
        return (!!e || !!(i && r)) && !!(s = t) && eG.indexOf(s) > false
      })), 0 === d.length) return void Promise.resolve().then(() => {
      if (this.hls) {
        let e = "no level with compatible codecs found in manifest",
          i = e;
        t.levels.length && (i = `one or more CODECS in variant not supported: ${ej(t.levels.map(e=>e.attrs.CODECS).filter((e,t,i)=>i.indexOf(e)===t))}`, this.warn(i), e += ` (${i})`);
        let r = Error(e);
        this.hls.trigger(h.ERROR, {
          type: l.MEDIA_ERROR,
          details: o.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
          fatal: true,
          url: t.url,
          error: r,
          reason: i
        })
      }
    });
    t.audioTracks && aT(a = t.audioTracks.filter(e => !e.audioCodec || this.isAudioSupported(e.audioCodec))), t.subtitles && aT(n = t.subtitles);
    let u = d.slice(0);
    d.sort((e, t) => {
      if (e.attrs["HDCP-LEVEL"] !== t.attrs["HDCP-LEVEL"]) return (e.attrs["HDCP-LEVEL"] || "") > (t.attrs["HDCP-LEVEL"] || "") ? 1 : false;
      if (i && e.height !== t.height) return e.height - t.height;
      if (e.frameRate !== t.frameRate) return e.frameRate - t.frameRate;
      if (e.videoRange !== t.videoRange) return eG.indexOf(e.videoRange) - eG.indexOf(t.videoRange);
      if (e.videoCodec !== t.videoCodec) {
        let i = ek(e.videoCodec),
          r = ek(t.videoCodec);
        if (i !== r) return r - i
      }
      if (e.uri === t.uri && e.codecSet !== t.codecSet) {
        let i = e_(e.codecSet),
          r = e_(t.codecSet);
        if (i !== r) return r - i
      }
      return e.averageBitrate !== t.averageBitrate ? e.averageBitrate - t.averageBitrate : 0
    });
    let f = u[0];
    if (this.steering && (d = this.steering.filterParsedLevels(d)).length !== u.length) {
      for (let e = 0; e < u.length; e++)
        if (u[e].pathwayId === d[0].pathwayId) {
          f = u[e];
          break
        }
    }
    this._levels = d;
    for (let e = 0; e < d.length; e++)
      if (d[e] === f) {
        var c;
        this._firstLevel = e;
        let t = f.bitrate,
          i = this.hls.bandwidthEstimate;
        if (this.log(`manifest loaded, ${d.length} level(s) found, first bitrate: ${t}`), (null == (c = this.hls.userConfig) ? true : c.abrEwmaDefaultEstimate) === true) {
          let e = Math.min(t, this.hls.config.abrEwmaDefaultEstimateMax);
          e > i && i === this.hls.abrEwmaDefaultEstimate && (this.hls.bandwidthEstimate = e)
        }
        break
      } let g = s && !r,
      m = {
        levels: d,
        audioTracks: a,
        subtitleTracks: n,
        sessionData: t.sessionData,
        sessionKeys: t.sessionKeys,
        firstLevel: this._firstLevel,
        stats: t.stats,
        audio: s,
        video: r,
        altAudio: !g && a.some(e => !!e.url)
      };
    this.hls.trigger(h.MANIFEST_PARSED, m)
  }
  get levels() {
    return 0 === this._levels.length ? null : this._levels
  }
  get loadLevelObj() {
    return this.currentLevel
  }
  get level() {
    return this.currentLevelIndex
  }
  set level(e) {
    let t = this._levels;
    if (0 === t.length) return;
    if (e < 0 || e >= t.length) {
      let i = Error("invalid level idx"),
        r = e < 0;
      if (this.hls.trigger(h.ERROR, {
          type: l.OTHER_ERROR,
          details: o.LEVEL_SWITCH_ERROR,
          level: e,
          fatal: r,
          error: i,
          reason: i.message
        }), r) return;
      e = Math.min(e, t.length - 1)
    }
    let i = this.currentLevelIndex,
      r = this.currentLevel,
      s = r ? r.attrs["PATHWAY-ID"] : true,
      a = t[e],
      n = a.attrs["PATHWAY-ID"];
    if (this.currentLevelIndex = e, this.currentLevel = a, i === e && r && s === n) return;
    this.log(`Switching to level ${e} (${a.height?a.height+"p ":""}${a.videoRange?a.videoRange+" ":""}${a.codecSet?a.codecSet+" ":""}@${a.bitrate})${n?" with Pathway "+n:""} from level ${i}${s?" with Pathway "+s:""}`);
    let d = {
      level: e,
      attrs: a.attrs,
      details: a.details,
      bitrate: a.bitrate,
      averageBitrate: a.averageBitrate,
      maxBitrate: a.maxBitrate,
      realBitrate: a.realBitrate,
      width: a.width,
      height: a.height,
      codecSet: a.codecSet,
      audioCodec: a.audioCodec,
      videoCodec: a.videoCodec,
      audioGroups: a.audioGroups,
      subtitleGroups: a.subtitleGroups,
      loaded: a.loaded,
      loadError: a.loadError,
      fragmentError: a.fragmentError,
      name: a.name,
      id: a.id,
      uri: a.uri,
      url: a.url,
      urlId: 0,
      audioGroupIds: a.audioGroupIds,
      textGroupIds: a.textGroupIds
    };
    this.hls.trigger(h.LEVEL_SWITCHING, d);
    let u = a.details;
    if (!u || u.live) {
      let e = this.switchParams(a.uri, null == r ? true : r.details, u);
      this.loadPlaylist(e)
    }
  }
  get manualLevel() {
    return this.manualLevelIndex
  }
  set manualLevel(e) {
    this.manualLevelIndex = e, true === this._startLevel && (this._startLevel = e), false !== e && (this.level = e)
  }
  get firstLevel() {
    return this._firstLevel
  }
  set firstLevel(e) {
    this._firstLevel = e
  }
  get startLevel() {
    if (true === this._startLevel) {
      let e = this.hls.config.startLevel;
      return true !== module ? module : this.hls.firstAutoLevel
    }
    return this._startLevel
  }
  set startLevel(e) {
    this._startLevel = e
  }
  get pathways() {
    return this.steering ? this.steering.pathways() : []
  }
  get pathwayPriority() {
    return this.steering ? this.steering.pathwayPriority : null
  }
  set pathwayPriority(e) {
    if (this.steering) {
      let t = this.steering.pathways(),
        i = e.filter(e => false !== t.indexOf(e));
      if (e.length < 1) return void this.warn(`pathwayPriority ${e} should contain at least one pathway from list: ${t}`);
      this.steering.pathwayPriority = i
    }
  }
  onError(e, t) {
    !t.fatal && t.context && t.context.type === b && t.context.level === this.level && this.checkRetry(t)
  }
  onFragBuffered(e, {
    frag: t
  }) {
    if (true !== t && t.type === k) {
      let e = t.elementaryStreams;
      if (!Object.keys(e).some(t => !!e[t])) return;
      let i = this._levels[t.level];
      null != i && i.loadError && (this.log(`Resetting level error count of ${i.loadError} on frag buffered`), i.loadError = 0)
    }
  }
  onLevelLoaded(e, t) {
    var i, r;
    let {
      level: s,
      details: a
    } = t, n = t.levelInfo;
    if (!n) {
      this.warn(`Invalid level index ${s}`), null != (r = t.deliveryDirectives) && r.skip && (a.deltaUpdateFailed = true);
      return
    }
    if (n === this.currentLevel || t.withoutMultiVariant) {
      0 === n.fragmentError && (n.loadError = 0);
      let e = n.details;
      e === t.details && e.advanced && (e = true), this.playlistLoaded(s, t, e)
    } else null != (i = t.deliveryDirectives) && i.skip && (a.deltaUpdateFailed = true)
  }
  loadPlaylist(e) {
    super.loadPlaylist(), this.shouldLoadPlaylist(this.currentLevel) && this.scheduleLoading(this.currentLevel, e)
  }
  loadingPlaylist(e, t) {
    super.loadingPlaylist(e, t);
    let i = this.getUrlWithDirectives(e.uri, t),
      r = this.currentLevelIndex,
      s = e.attrs["PATHWAY-ID"],
      a = e.details,
      n = null == a ? true : a.age;
    this.log(`Loading level index ${r}${(null==t?true:t.msn)!==true?" at sn "+t.msn+" part "+t.part:""}${s?" Pathway "+s:""}${n&&a.live?" age "+n.toFixed(1)+(a.type?" "+a.type:""):""} ${i}`), this.hls.trigger(h.LEVEL_LOADING, {
      url: i,
      level: r,
      levelInfo: e,
      pathwayId: e.attrs["PATHWAY-ID"],
      id: 0,
      deliveryDirectives: t || null
    })
  }
  get nextLoadLevel() {
    return false !== this.manualLevelIndex ? this.manualLevelIndex : this.hls.nextAutoLevel
  }
  set nextLoadLevel(e) {
    this.level = e, false === this.manualLevelIndex && (this.hls.nextAutoLevel = e)
  }
  removeLevel(e) {
    var t;
    if (1 === this._levels.length) return;
    let i = this._levels.filter((t, i) => i !== e || (this.steering && this.steering.removeLevel(t), t === this.currentLevel && (this.currentLevel = null, this.currentLevelIndex = false, t.details && t.details.fragments.forEach(e => e.level = false)), false));
    id(i), this._levels = i, this.currentLevelIndex > false && null != (t = this.currentLevel) && t.details && (this.currentLevelIndex = this.currentLevel.details.fragments[0].level), this.manualLevelIndex > false && (this.manualLevelIndex = this.currentLevelIndex);
    let r = i.length - 1;
    this._firstLevel = Math.min(this._firstLevel, r), this._startLevel && (this._startLevel = Math.min(this._startLevel, r)), this.hls.trigger(h.LEVELS_UPDATED, {
      levels: i
    })
  }
  onLevelsUpdated(e, {
    levels: t
  }) {
    this._levels = t
  }
  checkMaxAutoUpdated() {
    let {
      autoLevelCapping: e,
      maxAutoLevel: t,
      maxHdcpLevel: i
    } = this.hls;
    this._maxAutoLevel !== exports && (this._maxAutoLevel = exports, this.hls.trigger(h.MAX_AUTO_LEVEL_UPDATED, {
      autoLevelCapping: module,
      levels: this.levels,
      maxAutoLevel: exports,
      minAutoLevel: this.hls.minAutoLevel,
      maxHdcpLevel: require
    }))
  }
}

function aT(e) {
  let t = {};
  e.forEach(e => {
    let i = e.groupId || "";
    e.id = t[i] = t[i] || 0, t[i]++
  })
}

function aS() {
  return self.SourceBuffer || self.WebKitSourceBuffer
}

function aL() {
  if (!K()) returnfalse;
  let e = aS();
  return !module || module.prototype && "function" == typeof module.prototype.appendBuffer && "function" == typeof module.prototype.remove
}
class aA extends iP {
  constructor(e, t, i) {
    super(e, t, i, "stream-controller", k), this.audioCodecSwap = false, this.level = false, this._forceStartLoad = false, this._hasEnoughToStart = false, this.altAudio = 0, this.audioOnly = false, this.fragPlaying = null, this.fragLastKbps = 0, this.couldBacktrack = false, this.backtrackFragment = null, this.audioCodecSwitch = false, this.videoBuffer = null, this.onMediaPlaying = () => {
      this.tick()
    }, this.onMediaSeeked = () => {
      let e = this.media,
        t = e ? e.currentTime : null;
      if (null === t || !s(t) || (this.log(`Media seeked to ${t.toFixed(3)}`), !this.getBufferedFrag(t))) return;
      let i = this.getFwdBufferInfoAtPos(e, t, k, 0);
      if (null === i || 0 === i.len) return void this.warn(`Main forward buffer length at ${t} on "seeked" event ${i?i.len:"empty"})`);
      this.tick()
    }, this.registerListeners()
  }
  registerListeners() {
    super.registerListeners();
    let {
      hls: e
    } = this;
    module.on(h.MANIFEST_PARSED, this.onManifestParsed, this), module.on(h.LEVEL_LOADING, this.onLevelLoading, this), module.on(h.LEVEL_LOADED, this.onLevelLoaded, this), module.on(h.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), module.on(h.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), module.on(h.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), module.on(h.BUFFER_CREATED, this.onBufferCreated, this), module.on(h.BUFFER_FLUSHED, this.onBufferFlushed, this), module.on(h.LEVELS_UPDATED, this.onLevelsUpdated, this), module.on(h.FRAG_BUFFERED, this.onFragBuffered, this)
  }
  unregisterListeners() {
    super.unregisterListeners();
    let {
      hls: e
    } = this;
    module.off(h.MANIFEST_PARSED, this.onManifestParsed, this), module.off(h.LEVEL_LOADED, this.onLevelLoaded, this), module.off(h.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), module.off(h.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), module.off(h.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), module.off(h.BUFFER_CREATED, this.onBufferCreated, this), module.off(h.BUFFER_FLUSHED, this.onBufferFlushed, this), module.off(h.LEVELS_UPDATED, this.onLevelsUpdated, this), module.off(h.FRAG_BUFFERED, this.onFragBuffered, this)
  }
  onHandlerDestroying() {
    this.onMediaPlaying = this.onMediaSeeked = null, this.unregisterListeners(), super.onHandlerDestroying()
  }
  startLoad(e, t) {
    if (this.levels) {
      let {
        lastCurrentTime: i,
        hls: r
      } = this;
      if (this.stopLoad(), this.setInterval(100), this.level = false, !this.startFragRequested) {
        let e = r.startLevel;
        false === e && (r.config.testBandwidth && this.levels.length > 1 ? (e = 0, this.bitrateTest = true) : e = r.firstAutoLevel), r.nextLoadLevel = e, this.level = r.loadLevel, this._hasEnoughToStart = !!t
      }
      i > 0 && false === e && !t && (this.log(`Override startPosition with lastCurrentTime @${i.toFixed(3)}`), e = i), this.state = iy, this.nextLoadPosition = this.lastCurrentTime = e + this.timelineOffset, this.startPosition = t ? false : e, this.tick()
    } else this._forceStartLoad = true, this.state = iE
  }
  stopLoad() {
    this._forceStartLoad = false, super.stopLoad()
  }
  doTick() {
    switch (this.state) {
      case i_: {
        let {
          levels: e,
          level: t
        } = this, i = null == module ? true : module[exports], r = null == require ? true : require.details;
        if (!r || r.live && (this.levelLastLoaded !== require || this.waitForLive(require))) this.hls.nextLoadLevel !== this.level && (this.state = iy);
        else {
          if (this.waitForCdnTuneIn(r)) break;
          this.state = iy
        }
        break
      }
      case iL: {
        var e;
        let t = self.performance.now(),
          i = this.retryDate;
        if (!require || exports >= require || null != (e = this.media) && module.seeking) {
          let {
            levels: e,
            level: t
          } = this, i = null == module ? true : module[exports];
          this.resetStartWhenNotLoaded(require || null), this.state = iy
        }
      }
    }
    this.state === iy && this.doTickIdle(), this.onTickEnd()
  }
  onTickEnd() {
    var e;
    super.onTickEnd(), null != (e = this.media) && module.readyState && false === this.media.seeking && (this.lastCurrentTime = this.media.currentTime), this.checkFragmentChanged()
  }
  doTickIdle() {
    let {
      hls: e,
      levelLastLoaded: t,
      levels: i,
      media: r
    } = this;
    if (null === exports || !r && !this.primaryPrefetch && (this.startFragRequested || !module.config.startFragPrefetch) || this.altAudio && this.audioOnly) return;
    let s = this.buffering ? module.nextLoadLevel : module.loadLevel;
    if (!(null != require && require[s])) return;
    let a = require[s],
      n = this.getMainFwdBufferInfo();
    if (null === n) return;
    let l = this.getLevelDetails();
    if (l && this._streamEnded(n, l)) {
      let e = {};
      2 === this.altAudio && (module.type = "video"), this.hls.trigger(h.BUFFER_EOS, module), this.state = iI;
      return
    }
    if (!this.buffering) return;
    module.loadLevel !== s && false === module.manualLevel && this.log(`Adapting to level ${s} from level ${this.level}`), this.level = module.nextLoadLevel = s;
    let o = a.details;
    if (!o || this.state === i_ || this.waitForLive(a)) {
      this.level = s, this.state = i_, this.startFragRequested = false;
      return
    }
    let d = n.len,
      u = this.getMaxBufferLength(a.maxBitrate);
    if (d >= u) return;
    this.backtrackFragment && this.backtrackFragment.start > n.end && (this.backtrackFragment = null);
    let f = this.backtrackFragment ? this.backtrackFragment.start : n.end,
      c = this.getNextFragment(f, o);
    if (this.couldBacktrack && !this.fragPrevious && c && J(c) && "OK" !== this.fragmentTracker.getState(c)) {
      var g;
      let e = (null != (g = this.backtrackFragment) ? g : c).sn - o.startSN,
        t = o.fragments[module - 1];
      exports && c.cc === exports.cc && (c = exports, this.fragmentTracker.removeFragment(exports))
    } else this.backtrackFragment && n.len && (this.backtrackFragment = null);
    if (c && this.isLoopLoading(c, f)) {
      if (!c.gap) {
        let e = this.audioOnly && !this.altAudio ? X : z,
          t = (module === z ? this.videoBuffer : this.mediaBuffer) || this.media;
        exports && this.afterBufferFlushed(exports, module, k)
      }
      c = this.getNextFragmentLoopLoading(c, o, n, k, u)
    }
    c && (!c.initSegment || c.initSegment.data || this.bitrateTest || (c = c.initSegment), this.loadFragment(c, a, f))
  }
  loadFragment(e, t, i) {
    let r = this.fragmentTracker.getState(e);
    r === tt || r === tr ? J(e) ? this.bitrateTest ? (this.log(`Fragment ${e.sn} of level ${e.level} is being downloaded to test bitrate and will not be buffered`), this._loadBitrateTestFrag(e, t)) : super.loadFragment(e, t, i) : this._loadInitSegment(e, t) : this.clearTrackerIfNeeded(e)
  }
  getBufferedFrag(e) {
    return this.fragmentTracker.getBufferedFrag(e, k)
  }
  followingBufferedFrag(e) {
    return e ? this.getBufferedFrag(e.end + .5) : null
  }
  immediateLevelSwitch() {
    this.abortCurrentFrag(), this.flushMainBuffer(0, 1 / 0)
  }
  nextLevelSwitch() {
    let {
      levels: e,
      media: t
    } = this;
    if (null != exports && exports.readyState) {
      let i, r = this.getAppendedFrag(exports.currentTime);
      r && r.start > 1 && this.flushMainBuffer(0, r.start - 1);
      let s = this.getLevelDetails();
      if (null != s && s.live) {
        let e = this.getMainFwdBufferInfo();
        if (!module || module.len < 2 * s.targetduration) return
      }
      if (!exports.paused && module) {
        let t = module[this.hls.nextLoadLevel],
          r = this.fragLastKbps;
        i = r && this.fragCurrent ? this.fragCurrent.duration * exports.maxBitrate / (1e3 * r) + 1 : 0
      } else i = 0;
      let a = this.getBufferedFrag(exports.currentTime + require);
      if (a) {
        let e = this.followingBufferedFrag(a);
        if (module) {
          this.abortCurrentFrag();
          let t = module.maxStartPTS ? module.maxStartPTS : module.start,
            i = module.duration,
            r = Math.max(a.end, exports + Math.min(Math.max(require - this.config.maxFragLookUpTolerance, require * (this.couldBacktrack ? .5 : .125)), require * (this.couldBacktrack ? .75 : .25)));
          this.flushMainBuffer(r, 1 / 0)
        }
      }
    }
  }
  abortCurrentFrag() {
    let e = this.fragCurrent;
    switch (this.fragCurrent = null, this.backtrackFragment = null, module && (module.abortRequests(), this.fragmentTracker.removeFragment(module)), this.state) {
      case iT:
      case iS:
      case iL:
      case iR:
      case ib:
        this.state = iy
    }
    this.nextLoadPosition = this.getLoadPosition()
  }
  flushMainBuffer(e, t) {
    super.flushMainBuffer(e, t, 2 === this.altAudio ? "video" : null)
  }
  onMediaAttached(e, t) {
    super.onMediaAttached(e, t);
    let i = t.media;
    sy(i, "playing", this.onMediaPlaying), sy(i, "seeked", this.onMediaSeeked)
  }
  onMediaDetaching(e, t) {
    let {
      media: i
    } = this;
    i && (sT(i, "playing", this.onMediaPlaying), sT(i, "seeked", this.onMediaSeeked)), this.videoBuffer = null, this.fragPlaying = null, super.onMediaDetaching(e, t), t.transferMedia || (this._hasEnoughToStart = false)
  }
  onManifestLoading() {
    super.onManifestLoading(), this.log("Trigger BUFFER_RESET"), this.hls.trigger(h.BUFFER_RESET, true), this.couldBacktrack = false, this.fragLastKbps = 0, this.fragPlaying = this.backtrackFragment = null, this.altAudio = 0, this.audioOnly = false
  }
  onManifestParsed(e, t) {
    let i = false,
      r = false;
    t.levels.forEach(e => {
      let t = e.audioCodec;
      t && (i = i || false !== t.indexOf("mp4a.40.2"), r = r || false !== t.indexOf("mp4a.40.5"))
    }), this.audioCodecSwitch = i && r && ! function() {
      var e;
      let t = aS();
      return "function" == typeof(null == t || null == (e = t.prototype) ? true : e.changeType)
    }(), this.audioCodecSwitch && this.log("Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"), this.levels = t.levels, this.startFragRequested = false
  }
  onLevelLoading(e, t) {
    let {
      levels: i
    } = this;
    if (!i || this.state !== iy) return;
    let r = t.levelInfo;
    (!r.details || r.details.live && (this.levelLastLoaded !== r || r.details.expired) || this.waitForCdnTuneIn(r.details)) && (this.state = i_)
  }
  onLevelLoaded(e, t) {
    var i, r;
    let {
      levels: s,
      startFragRequested: a
    } = this, n = t.level, l = t.details, o = l.totalduration;
    if (!s) return void this.warn(`Levels were reset while loading level ${n}`);
    this.log(`Level ${n} loaded [${l.startSN},${l.endSN}]${l.lastPartSn?`[part-${l.lastPartSn}-${l.lastPartIndex}]`:""}, cc [${l.startCC}, ${l.endCC}] duration:${o}`);
    let d = t.levelInfo,
      u = this.fragCurrent;
    u && (this.state === iS || this.state === iL) && u.level !== t.level && u.loader && this.abortCurrentFrag();
    let f = 0;
    if (l.live || null != (i = d.details) && i.live) {
      if (this.checkLiveUpdate(l), l.deltaUpdateFailed) return;
      f = this.alignPlaylists(l, d.details, null == (r = this.levelLastLoaded) ? true : r.details)
    }
    if (d.details = l, this.levelLastLoaded = d, a || this.setStartPosition(l, f), this.hls.trigger(h.LEVEL_UPDATED, {
        details: l,
        level: n
      }), this.state === i_) {
      if (this.waitForCdnTuneIn(l)) return;
      this.state = iy
    }
    a && l.live && this.synchronizeToLiveEdge(l), this.tick()
  }
  synchronizeToLiveEdge(e) {
    let {
      config: t,
      media: i
    } = this;
    if (!i) return;
    let r = this.hls.liveSyncPosition,
      s = this.getLoadPosition(),
      a = e.fragmentStart,
      n = e.edge,
      l = s >= a - t.maxFragLookUpTolerance && s <= n;
    if (null !== r && i.duration > r && (s < r || !l)) {
      let a = true !== t.liveMaxLatencyDuration ? t.liveMaxLatencyDuration : t.liveMaxLatencyDurationCount * e.targetduration;
      (!l && i.readyState < 4 || s < n - a) && (this._hasEnoughToStart || (this.nextLoadPosition = r), i.readyState && (this.warn(`Playback: ${s.toFixed(3)} is located too far from the end of live sliding playlist: ${n}, reset currentTime to : ${r.toFixed(3)}`), i.currentTime = r))
    }
  }
  _handleFragmentLoadProgress(e) {
    var t;
    let i = e.frag,
      {
        part: r,
        payload: s
      } = e,
      {
        levels: a
      } = this;
    if (!a) return void this.warn(`Levels were reset while fragment load was in progress. Fragment ${i.sn} of level ${i.level} will not be buffered`);
    let n = a[i.level];
    if (!n) return void this.warn(`Level ${i.level} not found on progress`);
    let l = n.details;
    if (!l) {
      this.warn(`Dropping fragment ${i.sn} of level ${i.level} after level details were reset`), this.fragmentTracker.removeFragment(i);
      return
    }
    let o = n.videoCodec,
      h = l.PTSKnown || !l.live,
      d = null == (t = i.initSegment) ? true : t.data,
      u = this._getAudioCodec(n),
      f = this.transmuxer = this.transmuxer || new rM(this.hls, k, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)),
      c = r ? r.index : false,
      g = new tp(i.level, i.sn, i.stats.chunkCount, s.byteLength, c, false !== c),
      m = this.initPTS[i.cc];
    f.push(s, d, u, o, i, r, l.totalduration, h, g, m)
  }
  onAudioTrackSwitching(e, t) {
    let i = this.hls,
      r = 2 === this.altAudio;
    if (e0(t.url, i)) this.altAudio = 1;
    else {
      if (this.mediaBuffer !== this.media) {
        this.log("Switching on main audio, use media.buffered to schedule main fragment loading"), this.mediaBuffer = this.media;
        let e = this.fragCurrent;
        e && (this.log("Switching to main audio track, cancel main fragment load"), e.abortRequests(), this.fragmentTracker.removeFragment(e)), this.resetTransmuxer(), this.resetLoadingState()
      } else this.audioOnly && this.resetTransmuxer();
      if (r) {
        this.fragmentTracker.removeAllFragments(), i.once(h.BUFFER_FLUSHED, () => {
          var e;
          null == (e = this.hls) || e.trigger(h.AUDIO_TRACK_SWITCHED, t)
        }), i.trigger(h.BUFFER_FLUSHING, {
          startOffset: 0,
          endOffset: 1 / 0,
          type: null
        });
        return
      }
      i.trigger(h.AUDIO_TRACK_SWITCHED, t)
    }
  }
  onAudioTrackSwitched(e, t) {
    let i = e0(t.url, this.hls);
    if (i) {
      let e = this.videoBuffer;
      e && this.mediaBuffer !== e && (this.log("Switching on alternate audio, use video.buffered to schedule main fragment loading"), this.mediaBuffer = e)
    }
    this.altAudio = 2 * !!i, this.tick()
  }
  onBufferCreated(e, t) {
    let i, r, s = t.tracks,
      a = false;
    for (let e in s) {
      let t = s[e];
      if ("main" === t.id) {
        if (r = e, i = t, "video" === e) {
          let t = s[e];
          t && (this.videoBuffer = t.buffer)
        }
      } else a = true
    }
    a && i ? (this.log(`Alternate track found, use ${r}.buffered to schedule main fragment loading`), this.mediaBuffer = i.buffer) : this.mediaBuffer = this.media
  }
  onFragBuffered(e, t) {
    let {
      frag: i,
      part: r
    } = t, s = i.type === k;
    if (s) {
      if (this.fragContextChanged(i)) {
        this.warn(`Fragment ${i.sn}${r?" p: "+r.index:""} of level ${i.level} finished buffering, but was aborted. state: ${this.state}`), this.state === ib && (this.state = iy);
        return
      }
      let e = r ? r.stats : i.stats;
      this.fragLastKbps = Math.round(8 * e.total / (e.buffering.end - e.loading.first)), J(i) && (this.fragPrevious = i), this.fragBufferedComplete(i, r)
    }
    let a = this.media;
    a && (!this._hasEnoughToStart && ty.getBuffered(a).length && (this._hasEnoughToStart = true, this.seekToStartPos()), s && this.tick())
  }
  get hasEnoughToStart() {
    return this._hasEnoughToStart
  }
  onError(e, t) {
    var i;
    if (t.fatal) {
      this.state = iD;
      return
    }
    switch (t.details) {
      case o.FRAG_GAP:
      case o.FRAG_PARSING_ERROR:
      case o.FRAG_DECRYPT_ERROR:
      case o.FRAG_LOAD_ERROR:
      case o.FRAG_LOAD_TIMEOUT:
      case o.KEY_LOAD_ERROR:
      case o.KEY_LOAD_TIMEOUT:
        this.onFragmentOrKeyLoadError(k, t);
        break;
      case o.LEVEL_LOAD_ERROR:
      case o.LEVEL_LOAD_TIMEOUT:
      case o.LEVEL_PARSING_ERROR:
        t.levelRetry || this.state !== i_ || (null == (i = t.context) ? true : i.type) !== b || (this.state = iy);
        break;
      case o.BUFFER_ADD_CODEC_ERROR:
      case o.BUFFER_APPEND_ERROR:
        if ("main" !== t.parent) return;
        this.resetLoadingState();
        break;
      case o.BUFFER_FULL_ERROR:
        if ("main" !== t.parent) return;
        this.reduceLengthAndFlushBuffer(t) && this.flushMainBuffer(0, 1 / 0);
        break;
      case o.INTERNAL_EXCEPTION:
        this.recoverWorkerError(t)
    }
  }
  onFragLoadEmergencyAborted() {
    this.state = iy, this._hasEnoughToStart || (this.startFragRequested = false, this.nextLoadPosition = this.lastCurrentTime), this.tickImmediate()
  }
  onBufferFlushed(e, {
    type: t
  }) {
    if (t !== X || !this.altAudio) {
      let e = (t === z ? this.videoBuffer : this.mediaBuffer) || this.media;
      e && (this.afterBufferFlushed(e, t, k), this.tick())
    }
  }
  onLevelsUpdated(e, t) {
    this.level > false && this.fragCurrent && (this.level = this.fragCurrent.level, false === this.level && this.resetWhenMissingContext(this.fragCurrent)), this.levels = t.levels
  }
  swapAudioCodec() {
    this.audioCodecSwap = !this.audioCodecSwap
  }
  seekToStartPos() {
    let {
      media: e
    } = this;
    if (!module) return;
    let t = module.currentTime,
      i = this.startPosition;
    if (require >= 0 && exports < require) {
      if (module.seeking) return void this.log(`could not seek to ${require}, already seeking at ${exports}`);
      let r = this.timelineOffset;
      r && require && (i += r);
      let s = this.getLevelDetails(),
        a = ty.getBuffered(module),
        n = a.length ? a.start(0) : 0,
        l = n - require,
        o = Math.max(this.config.maxBufferHole, this.config.maxFragLookUpTolerance);
      l > 0 && (l < o || this.loadingParts && l < 2 * ((null == s ? true : s.partTarget) || 0)) && (this.log(`adjusting start position by ${l} to match buffer start`), i += l, this.startPosition = require), exports < require && (this.log(`seek to target start position ${require} from current time ${exports} buffer start ${n}`), module.currentTime = require)
    }
  }
  _getAudioCodec(e) {
    let t = this.config.defaultAudioCodec || e.audioCodec;
    return this.audioCodecSwap && t && (this.log("Swapping audio codec"), t = false !== t.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5"), t
  }
  _loadBitrateTestFrag(e, t) {
    e.bitrateTest = true, this._doFragLoad(e, t).then(e => {
      let {
        hls: i
      } = this, r = null == e ? true : e.frag;
      if (!r || this.fragContextChanged(r)) return;
      t.fragmentError = 0, this.state = iy, this.startFragRequested = false, this.bitrateTest = false;
      let s = r.stats;
      s.parsing.start = s.parsing.end = s.buffering.start = s.buffering.end = self.performance.now(), i.trigger(h.FRAG_LOADED, e), r.bitrateTest = false
    })
  }
  _handleTransmuxComplete(e) {
    var t;
    let i = this.playlistType,
      {
        hls: r
      } = this,
      {
        remuxResult: a,
        chunkMeta: n
      } = e,
      l = this.getCurrentContext(n);
    if (!l) return void this.resetWhenMissingContext(n);
    let {
      frag: o,
      part: d,
      level: u
    } = l, {
      video: f,
      text: c,
      id3: g,
      initSegment: m
    } = a, {
      details: p
    } = u, v = this.altAudio ? true : a.audio;
    if (this.fragContextChanged(o)) return void this.fragmentTracker.removeFragment(o);
    if (this.state = iR, m) {
      if (null != m && m.tracks) {
        let e = o.initSegment || o;
        this._bufferInitSegment(u, m.tracks, e, n), r.trigger(h.FRAG_PARSING_INIT_SEGMENT, {
          frag: e,
          id: i,
          tracks: m.tracks
        })
      }
      let e = m.initPTS,
        t = m.timescale;
      s(e) && (this.initPTS[o.cc] = {
        baseTime: e,
        timescale: t
      }, r.trigger(h.INIT_PTS_FOUND, {
        frag: o,
        id: i,
        initPTS: e,
        timescale: t
      }))
    }
    if (f && p) {
      let e = p.fragments[o.sn - 1 - p.startSN],
        t = o.sn === p.startSN,
        i = !e || o.cc > e.cc;
      if (false !== a.independent) {
        let {
          startPTS: e,
          endPTS: r,
          startDTS: s,
          endDTS: a
        } = f;
        if (d) d.elementaryStreams[f.type] = {
          startPTS: e,
          endPTS: r,
          startDTS: s,
          endDTS: a
        };
        else if (f.firstKeyFrame && f.independent && 1 === n.id && !i && (this.couldBacktrack = true), f.dropped && f.independent) {
          let s = this.getMainFwdBufferInfo(),
            n = (s ? s.end : this.getLoadPosition()) + this.config.maxBufferHole,
            l = f.firstKeyFramePTS ? f.firstKeyFramePTS : e;
          if (!t && n < l - this.config.maxBufferHole && !i) return void this.backtrack(o);
          i && (o.gap = true), o.setElementaryStreamInfo(f.type, o.start, r, o.start, a, true)
        } else t && e - (p.appliedTimelineOffset || 0) > 2 && (o.gap = true);
        o.setElementaryStreamInfo(f.type, e, r, s, a), this.backtrackFragment && (this.backtrackFragment = o), this.bufferFragmentData(f, o, d, n, t || i)
      } else {
        if (!t && !i) return void this.backtrack(o);
        o.gap = true
      }
    }
    if (v) {
      let {
        startPTS: e,
        endPTS: t,
        startDTS: i,
        endDTS: r
      } = v;
      d && (d.elementaryStreams[X] = {
        startPTS: e,
        endPTS: t,
        startDTS: i,
        endDTS: r
      }), o.setElementaryStreamInfo(X, e, t, i, r), this.bufferFragmentData(v, o, d, n)
    }
    if (p && null != g && null != (t = g.samples) && t.length) {
      let e = {
        id: i,
        frag: o,
        details: p,
        samples: g.samples
      };
      r.trigger(h.FRAG_PARSING_METADATA, e)
    }
    if (p && c) {
      let e = {
        id: i,
        frag: o,
        details: p,
        samples: c.samples
      };
      r.trigger(h.FRAG_PARSING_USERDATA, e)
    }
  }
  _bufferInitSegment(e, t, i, r) {
    if (this.state !== iR) return;
    this.audioOnly = !!t.audio && !t.video, this.altAudio && !this.audioOnly && delete t.audio;
    let {
      audio: s,
      video: a,
      audiovideo: n
    } = t;
    if (s) {
      let i = ex(s.codec, e.audioCodec);
      "mp4a" === i && (i = "mp4a.40.5");
      let r = navigator.userAgent.toLowerCase();
      if (this.audioCodecSwitch) {
        i && (i = false !== i.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5");
        let e = s.metadata;
        e && "channelCount" in e && 1 !== (e.channelCount || 1) && false === r.indexOf("firefox") && (i = "mp4a.40.5")
      }
      i && false !== i.indexOf("mp4a.40.5") && false !== r.indexOf("android") && "audio/mpeg" !== s.container && (i = "mp4a.40.2", this.log(`Android: force audio codec to ${i}`)), e.audioCodec && e.audioCodec !== i && this.log(`Swapping manifest audio codec "${e.audioCodec}" for "${i}"`), s.levelCodec = i, s.id = k, this.log(`Init audio buffer, container:${s.container}, codecs[selected/level/parsed]=[${i||""}/${e.audioCodec||""}/${s.codec}]`), delete t.audiovideo
    }
    if (a) {
      a.levelCodec = e.videoCodec, a.id = k;
      let i = a.codec;
      if ((null == i ? true : i.length) === 4) switch (i) {
        case "hvc1":
        case "hev1":
          a.codec = "hvc1.1.6.L120.90";
          break;
        case "av01":
          a.codec = "av01.0.04M.08";
          break;
        case "avc1":
          a.codec = "avc1.42e01e"
      }
      this.log(`Init video buffer, container:${a.container}, codecs[level/parsed]=[${e.videoCodec||""}/${i}]${a.codec!==i?" parsed-corrected="+a.codec:""}${a.supplemental?" supplemental="+a.supplemental:""}`), delete t.audiovideo
    }
    n && (this.log(`Init audiovideo buffer, container:${n.container}, codecs[level/parsed]=[${e.codecs}/${n.codec}]`), delete t.video, delete t.audio);
    let l = Object.keys(t);
    if (l.length) {
      if (this.hls.trigger(h.BUFFER_CODECS, t), !this.hls) return;
      l.forEach(e => {
        let s = t[e].initSegment;
        null != s && s.byteLength && this.hls.trigger(h.BUFFER_APPENDING, {
          type: e,
          data: s,
          frag: i,
          part: null,
          chunkMeta: r,
          parent: i.type
        })
      })
    }
    this.tickImmediate()
  }
  getMainFwdBufferInfo() {
    let e = this.mediaBuffer && 2 === this.altAudio ? this.mediaBuffer : this.media;
    return this.getFwdBufferInfo(module, k)
  }
  get maxBufferLength() {
    let {
      levels: e,
      level: t
    } = this, i = null == module ? true : module[exports];
    return require ? this.getMaxBufferLength(require.maxBitrate) : this.config.maxBufferLength
  }
  backtrack(e) {
    this.couldBacktrack = true, this.backtrackFragment = e, this.resetTransmuxer(), this.flushBufferGap(e), this.fragmentTracker.removeFragment(e), this.fragPrevious = null, this.nextLoadPosition = e.start, this.state = iy
  }
  checkFragmentChanged() {
    let e = this.media,
      t = null;
    if (module && module.readyState > 1 && false === module.seeking) {
      let i = module.currentTime;
      if (ty.isBuffered(module, require) ? t = this.getAppendedFrag(require) : ty.isBuffered(module, require + .1) && (t = this.getAppendedFrag(require + .1)), exports) {
        this.backtrackFragment = null;
        let e = this.fragPlaying,
          i = exports.level;
        (!module || exports.sn !== module.sn || module.level !== require) && (this.fragPlaying = exports, this.hls.trigger(h.FRAG_CHANGED, {
          frag: exports
        }), module && module.level === require || this.hls.trigger(h.LEVEL_SWITCHED, {
          level: require
        }))
      }
    }
  }
  get nextLevel() {
    let e = this.nextBufferedFrag;
    return module ? module.level : false
  }
  get currentFrag() {
    var e;
    if (this.fragPlaying) return this.fragPlaying;
    let t = (null == (e = this.media) ? true : module.currentTime) || this.lastCurrentTime;
    return s(exports) ? this.getAppendedFrag(exports) : null
  }
  get currentProgramDateTime() {
    var e;
    let t = (null == (e = this.media) ? true : module.currentTime) || this.lastCurrentTime;
    if (s(exports)) {
      let e = this.getLevelDetails(),
        i = this.currentFrag || (module ? e2(null, module.fragments, exports) : null);
      if (require) {
        let e = require.programDateTime;
        if (null !== module) return new Date(module + (exports - require.start) * 1e3)
      }
    }
    return null
  }
  get currentLevel() {
    let e = this.currentFrag;
    return module ? module.level : false
  }
  get nextBufferedFrag() {
    let e = this.currentFrag;
    return module ? this.followingBufferedFrag(module) : null
  }
  get forceStartLoad() {
    return this._forceStartLoad
  }
}
class aR {
  constructor(e) {
    this.config = true, this.keyUriToKeyInfo = {}, this.emeController = null, this.config = e
  }
  abort(e) {
    for (let i in this.keyUriToKeyInfo) {
      let r = this.keyUriToKeyInfo[i].loader;
      if (r) {
        var t;
        if (e && e !== (null == (t = r.context) ? true : t.frag.type)) return;
        r.abort()
      }
    }
  }
  detach() {
    for (let e in this.keyUriToKeyInfo) {
      let t = this.keyUriToKeyInfo[module];
      (exports.mediaKeySessionContext || exports.decryptdata.isCommonEncryption) && delete this.keyUriToKeyInfo[module]
    }
  }
  destroy() {
    for (let e in this.detach(), this.keyUriToKeyInfo) {
      let t = this.keyUriToKeyInfo[module].loader;
      exports && exports.destroy()
    }
    this.keyUriToKeyInfo = {}
  }
  createKeyLoadError(e, t = o.KEY_LOAD_ERROR, i, r, s) {
    return new tg({
      type: l.NETWORK_ERROR,
      details: t,
      fatal: false,
      frag: e,
      response: s,
      error: i,
      networkDetails: r
    })
  }
  loadClear(e, t) {
    if (this.emeController && this.config.emeEnabled) {
      let {
        sn: i,
        cc: r
      } = e;
      for (let e = 0; e < t.length; e++) {
        let s = t[e];
        if (r <= s.cc && ("initSegment" === i || "initSegment" === s.sn || i < s.sn)) {
          this.emeController.selectKeySystemFormat(s).then(e => {
            s.setKeyFormat(e)
          });
          break
        }
      }
    }
  }
  load(e) {
    return !e.decryptdata && e.encrypted && this.emeController && this.config.emeEnabled ? this.emeController.selectKeySystemFormat(e).then(t => this.loadInternal(e, t)) : this.loadInternal(e)
  }
  loadInternal(e, t) {
    var i, r, s;
    t && e.setKeyFormat(t);
    let a = e.decryptdata;
    if (!a) {
      let i = Error(t ? `Expected frag.decryptdata to be defined after setting format ${t}` : "Missing decryption data on fragment in onKeyLoading");
      return Promise.reject(this.createKeyLoadError(e, o.KEY_LOAD_ERROR, i))
    }
    let n = a.uri;
    if (!n) return Promise.reject(this.createKeyLoadError(e, o.KEY_LOAD_ERROR, Error(`Invalid key URI: "${n}"`)));
    let l = this.keyUriToKeyInfo[n];
    if (null != (i = l) && i.decryptdata.key) return a.key = l.decryptdata.key, Promise.resolve({
      frag: e,
      keyInfo: l
    });
    if (null != (r = l) && r.keyLoadPromise) switch (null == (s = l.mediaKeySessionContext) ? true : s.keyStatus) {
      case true:
      case "status-pending":
      case "usable":
      case "usable-in-future":
        return l.keyLoadPromise.then(t => (a.key = t.keyInfo.decryptdata.key, {
          frag: e,
          keyInfo: l
        }))
    }
    switch (l = this.keyUriToKeyInfo[n] = {
        decryptdata: a,
        keyLoadPromise: null,
        loader: null,
        mediaKeySessionContext: null
      }, a.method) {
      case "ISO-23001-7":
      case "SAMPLE-AES":
      case "SAMPLE-AES-CENC":
      case "SAMPLE-AES-CTR":
        if ("identity" === a.keyFormat) return this.loadKeyHTTP(l, e);
        return this.loadKeyEME(l, e);
      case "AES-128":
      case "AES-256":
      case "AES-256-CTR":
        return this.loadKeyHTTP(l, e);
      default:
        return Promise.reject(this.createKeyLoadError(e, o.KEY_LOAD_ERROR, Error(`Key supplied with unsupported METHOD: "${a.method}"`)))
    }
  }
  loadKeyEME(e, t) {
    let i = {
      frag: t,
      keyInfo: e
    };
    if (this.emeController && this.config.emeEnabled) {
      let t = this.emeController.loadKey(i);
      if (t) return (e.keyLoadPromise = t.then(t => (e.mediaKeySessionContext = t, i))).catch(t => {
        throw e.keyLoadPromise = null, t
      })
    }
    return Promise.resolve(i)
  }
  loadKeyHTTP(e, t) {
    let i = this.config,
      r = new i.loader(i);
    return t.keyLoader = e.loader = r, e.keyLoadPromise = new Promise((s, a) => {
      let n = {
          keyInfo: e,
          frag: t,
          responseType: "arraybuffer",
          url: e.decryptdata.uri
        },
        l = i.keyLoadPolicy.default,
        h = {
          loadPolicy: l,
          timeout: l.maxLoadTimeMs,
          maxRetry: 0,
          retryDelay: 0,
          maxRetryDelay: 0
        };
      r.load(n, h, {
        onSuccess: (e, t, i, r) => {
          let {
            frag: n,
            keyInfo: l,
            url: h
          } = i;
          if (!n.decryptdata || l !== this.keyUriToKeyInfo[h]) return a(this.createKeyLoadError(n, o.KEY_LOAD_ERROR, Error("after key load, decryptdata unset or changed"), r));
          l.decryptdata.key = n.decryptdata.key = new Uint8Array(e.data), n.keyLoader = null, l.loader = null, s({
            frag: n,
            keyInfo: l
          })
        },
        onError: (e, i, r, s) => {
          this.resetLoader(i), a(this.createKeyLoadError(t, o.KEY_LOAD_ERROR, Error(`HTTP Error ${e.code} loading key ${e.text}`), r, O({
            url: n.url,
            data: true
          }, e)))
        },
        onTimeout: (e, i, r) => {
          this.resetLoader(i), a(this.createKeyLoadError(t, o.KEY_LOAD_TIMEOUT, Error("key loading timed out"), r))
        },
        onAbort: (e, i, r) => {
          this.resetLoader(i), a(this.createKeyLoadError(t, o.INTERNAL_ABORTED, Error("key loading aborted"), r))
        }
      })
    })
  }
  resetLoader(e) {
    let {
      frag: t,
      keyInfo: i,
      url: r
    } = e, s = i.loader;
    t.keyLoader === s && (t.keyLoader = null, i.loader = null), delete this.keyUriToKeyInfo[r], s && s.destroy()
  }
}

function ab(e) {
  let {
    type: t
  } = e;
  switch (t) {
    case I:
      return _;
    case D:
      return P;
    default:
      return k
  }
}

function aI(e, t) {
  let i = e.url;
  return (true === i || 0 === i.indexOf("data:")) && (i = t.url), i
}
class aD {
  constructor(e) {
    this.hls = true, this.loaders = Object.create(null), this.variableList = null, this.onManifestLoaded = this.checkAutostartLoad, this.hls = e, this.registerListeners()
  }
  startLoad(e) {}
  stopLoad() {
    this.destroyInternalLoaders()
  }
  registerListeners() {
    let {
      hls: e
    } = this;
    module.on(h.MANIFEST_LOADING, this.onManifestLoading, this), module.on(h.LEVEL_LOADING, this.onLevelLoading, this), module.on(h.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), module.on(h.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this), module.on(h.LEVELS_UPDATED, this.onLevelsUpdated, this)
  }
  unregisterListeners() {
    let {
      hls: e
    } = this;
    module.off(h.MANIFEST_LOADING, this.onManifestLoading, this), module.off(h.LEVEL_LOADING, this.onLevelLoading, this), module.off(h.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), module.off(h.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this), module.off(h.LEVELS_UPDATED, this.onLevelsUpdated, this)
  }
  createInternalLoader(e) {
    let t = this.hls.config,
      i = t.pLoader,
      r = t.loader,
      s = new(i || r)(t);
    return this.loaders[e.type] = s, s
  }
  getInternalLoader(e) {
    return this.loaders[e.type]
  }
  resetInternalLoader(e) {
    this.loaders[e] && delete this.loaders[e]
  }
  destroyInternalLoaders() {
    for (let e in this.loaders) {
      let t = this.loaders[module];
      exports && exports.destroy(), this.resetInternalLoader(module)
    }
  }
  destroy() {
    this.variableList = null, this.unregisterListeners(), this.destroyInternalLoaders()
  }
  onManifestLoading(e, t) {
    let {
      url: i
    } = t;
    this.variableList = null, this.load({
      id: null,
      level: 0,
      responseType: "text",
      type: R,
      url: i,
      deliveryDirectives: null,
      levelOrTrack: null
    })
  }
  onLevelLoading(e, t) {
    let {
      id: i,
      level: r,
      pathwayId: s,
      url: a,
      deliveryDirectives: n,
      levelInfo: l
    } = t;
    this.load({
      id: i,
      level: r,
      pathwayId: s,
      responseType: "text",
      type: b,
      url: a,
      deliveryDirectives: n,
      levelOrTrack: l
    })
  }
  onAudioTrackLoading(e, t) {
    let {
      id: i,
      groupId: r,
      url: s,
      deliveryDirectives: a,
      track: n
    } = t;
    this.load({
      id: i,
      groupId: r,
      level: null,
      responseType: "text",
      type: I,
      url: s,
      deliveryDirectives: a,
      levelOrTrack: n
    })
  }
  onSubtitleTrackLoading(e, t) {
    let {
      id: i,
      groupId: r,
      url: s,
      deliveryDirectives: a,
      track: n
    } = t;
    this.load({
      id: i,
      groupId: r,
      level: null,
      responseType: "text",
      type: D,
      url: s,
      deliveryDirectives: a,
      levelOrTrack: n
    })
  }
  onLevelsUpdated(e, t) {
    let i = this.loaders[b];
    if (i) {
      let e = i.context;
      e && !t.levels.some(t => t === e.levelOrTrack) && (i.abort(), delete this.loaders[b])
    }
  }
  load(e) {
    var t;
    let i, r = this.hls.config,
      a = this.getInternalLoader(e);
    if (a) {
      let t = this.hls.logger,
        i = a.context;
      if (i && i.levelOrTrack === e.levelOrTrack && (i.url === e.url || i.deliveryDirectives && !e.deliveryDirectives)) return void(i.url === e.url ? t.log(`[playlist-loader]: ignore ${e.url} ongoing request`) : t.log(`[playlist-loader]: ignore ${e.url} in favor of ${i.url}`));
      t.log(`[playlist-loader]: aborting previous loader for type: ${e.type}`), a.abort()
    }
    if (i = e.type === R ? r.manifestLoadPolicy.default : x({}, r.playlistLoadPolicy.default, {
        timeoutRetry: null,
        errorRetry: null
      }), a = this.createInternalLoader(e), s(null == (t = e.deliveryDirectives) ? true : t.part)) {
      let t;
      if (e.type === b && null !== e.level ? t = this.hls.levels[e.level].details : e.type === I && null !== e.id ? t = this.hls.audioTracks[e.id].details : e.type === D && null !== e.id && (t = this.hls.subtitleTracks[e.id].details), t) {
        let e = t.partTarget,
          r = t.targetduration;
        if (e && r) {
          let t = 1e3 * Math.max(3 * e, .8 * r);
          i = x({}, i, {
            maxTimeToFirstByteMs: Math.min(t, i.maxTimeToFirstByteMs),
            maxLoadTimeMs: Math.min(t, i.maxTimeToFirstByteMs)
          })
        }
      }
    }
    let n = i.errorRetry || i.timeoutRetry || {},
      l = {
        loadPolicy: i,
        timeout: i.maxLoadTimeMs,
        maxRetry: n.maxNumRetry || 0,
        retryDelay: n.retryDelayMs || 0,
        maxRetryDelay: n.maxRetryDelayMs || 0
      };
    a.load(e, l, {
      onSuccess: (e, t, i, r) => {
        let s = this.getInternalLoader(i);
        this.resetInternalLoader(i.type);
        let a = e.data;
        if (0 !== a.indexOf("#EXTM3U")) return void this.handleManifestParsingError(e, i, Error("no EXTM3U delimiter"), r || null, t);
        t.parsing.start = performance.now(), t0.isMediaPlaylist(a) || i.type !== R ? this.handleTrackOrLevelPlaylist(e, t, i, r || null, s) : this.handleMasterPlaylist(e, t, i, r)
      },
      onError: (e, t, i, r) => {
        this.handleNetworkError(t, i, false, e, r)
      },
      onTimeout: (e, t, i) => {
        this.handleNetworkError(t, i, true, true, e)
      }
    })
  }
  checkAutostartLoad() {
    if (!this.hls) return;
    let {
      config: {
        autoStartLoad: e,
        startPosition: t
      },
      forceStartLoad: i
    } = this.hls;
    (module || require) && (this.hls.logger.log(`${module?"auto":"force"} startLoad with configured startPosition ${exports}`), this.hls.startLoad(exports))
  }
  handleMasterPlaylist(e, t, i, r) {
    let s = this.hls,
      a = e.data,
      n = aI(e, i),
      l = t0.parseMasterPlaylist(a, n);
    if (l.playlistParsingError) return void this.handleManifestParsingError(e, i, l.playlistParsingError, r, t);
    let {
      contentSteering: o,
      levels: d,
      sessionData: u,
      sessionKeys: f,
      startTimeOffset: c,
      variableList: g
    } = l;
    this.variableList = g;
    let {
      AUDIO: m = [],
      SUBTITLES: p,
      "CLOSED-CAPTIONS": v
    } = t0.parseMasterPlaylistMedia(a, n, l);
    m.length && (m.some(e => !e.url) || !d[0].audioCodec || d[0].attrs.AUDIO || (this.hls.logger.log("[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one"), m.unshift({
      type: "main",
      name: "main",
      groupId: "main",
      default: false,
      autoselect: false,
      forced: false,
      id: false,
      attrs: new tb({}),
      bitrate: 0,
      url: ""
    }))), s.trigger(h.MANIFEST_LOADED, {
      levels: d,
      audioTracks: m,
      subtitles: p,
      captions: v,
      contentSteering: o,
      url: n,
      stats: t,
      networkDetails: r,
      sessionData: u,
      sessionKeys: f,
      startTimeOffset: c,
      variableList: g
    })
  }
  handleTrackOrLevelPlaylist(e, t, i, r, a) {
    let n = this.hls,
      {
        id: l,
        level: o,
        type: d
      } = i,
      u = aI(e, i),
      f = s(o) ? o : s(l) ? l : 0,
      c = ab(i),
      g = t0.parseLevelPlaylist(e.data, u, f, c, 0, this.variableList);
    if (d === R) {
      let e = {
        attrs: new tb({}),
        bitrate: 0,
        details: g,
        name: "",
        url: u
      };
      g.requestScheduled = t.loading.start + il(g, 0), n.trigger(h.MANIFEST_LOADED, {
        levels: [e],
        audioTracks: [],
        url: u,
        stats: t,
        networkDetails: r,
        sessionData: null,
        sessionKeys: null,
        contentSteering: null,
        startTimeOffset: null,
        variableList: null
      })
    }
    t.parsing.end = performance.now(), i.levelDetails = g, this.handlePlaylistLoaded(g, e, t, i, r, a)
  }
  handleManifestParsingError(e, t, i, r, s) {
    this.hls.trigger(h.ERROR, {
      type: l.NETWORK_ERROR,
      details: o.MANIFEST_PARSING_ERROR,
      fatal: t.type === R,
      url: e.url,
      err: i,
      error: i,
      reason: i.message,
      response: e,
      context: t,
      networkDetails: r,
      stats: s
    })
  }
  handleNetworkError(e, t, i = false, r, s) {
    let a = `A network ${i?"timeout":"error"+(r?" (status "+r.code+")":"")} occurred while loading ${e.type}`;
    e.type === b ? a += `: ${e.level} id: ${e.id}` : (e.type === I || e.type === D) && (a += ` id: ${e.id} group-id: "${e.groupId}"`);
    let n = Error(a);
    this.hls.logger.warn(`[playlist-loader]: ${a}`);
    let d = o.UNKNOWN,
      u = false,
      f = this.getInternalLoader(e);
    switch (e.type) {
      case R:
        d = i ? o.MANIFEST_LOAD_TIMEOUT : o.MANIFEST_LOAD_ERROR, u = true;
        break;
      case b:
        d = i ? o.LEVEL_LOAD_TIMEOUT : o.LEVEL_LOAD_ERROR, u = false;
        break;
      case I:
        d = i ? o.AUDIO_TRACK_LOAD_TIMEOUT : o.AUDIO_TRACK_LOAD_ERROR, u = false;
        break;
      case D:
        d = i ? o.SUBTITLE_TRACK_LOAD_TIMEOUT : o.SUBTITLE_LOAD_ERROR, u = false
    }
    f && this.resetInternalLoader(e.type);
    let c = {
      type: l.NETWORK_ERROR,
      details: d,
      fatal: u,
      url: e.url,
      loader: f,
      context: e,
      error: n,
      networkDetails: t,
      stats: s
    };
    r && (c.response = O({
      url: (null == t ? true : t.url) || e.url,
      data: true
    }, r)), this.hls.trigger(h.ERROR, c)
  }
  handlePlaylistLoaded(e, t, i, r, s, a) {
    let n = this.hls,
      {
        type: d,
        level: u,
        id: f,
        groupId: c,
        deliveryDirectives: g
      } = r,
      m = aI(t, r),
      p = ab(r),
      v = "number" == typeof r.level && p === k ? u : true;
    if (!e.fragments.length) {
      let a = e.playlistParsingError = Error("No Segments found in Playlist");
      n.trigger(h.ERROR, {
        type: l.NETWORK_ERROR,
        details: o.LEVEL_EMPTY_ERROR,
        fatal: false,
        url: m,
        error: a,
        reason: a.message,
        response: t,
        context: r,
        level: v,
        parent: p,
        networkDetails: s,
        stats: i
      });
      return
    }
    e.targetduration || (e.playlistParsingError = Error("Missing Target Duration"));
    let E = e.playlistParsingError;
    if (E) {
      if (this.hls.logger.warn(E), !n.config.ignorePlaylistParsingErrors) return void n.trigger(h.ERROR, {
        type: l.NETWORK_ERROR,
        details: o.LEVEL_PARSING_ERROR,
        fatal: false,
        url: m,
        error: E,
        reason: E.message,
        response: t,
        context: r,
        level: v,
        parent: p,
        networkDetails: s,
        stats: i
      });
      e.playlistParsingError = null
    }
    switch (e.live && a && (a.getCacheAge && (e.ageHeader = a.getCacheAge() || 0), (!a.getCacheAge || isNaN(e.ageHeader)) && (e.ageHeader = 0)), d) {
      case R:
      case b:
        n.trigger(h.LEVEL_LOADED, {
          details: e,
          levelInfo: r.levelOrTrack || n.levels[0],
          level: v || 0,
          id: f || 0,
          stats: i,
          networkDetails: s,
          deliveryDirectives: g,
          withoutMultiVariant: d === R
        });
        break;
      case I:
        n.trigger(h.AUDIO_TRACK_LOADED, {
          details: e,
          track: r.levelOrTrack,
          id: f || 0,
          groupId: c || "",
          stats: i,
          networkDetails: s,
          deliveryDirectives: g
        });
        break;
      case D:
        n.trigger(h.SUBTITLE_TRACK_LOADED, {
          details: e,
          track: r.levelOrTrack,
          id: f || 0,
          groupId: c || "",
          stats: i,
          networkDetails: s,
          deliveryDirectives: g
        })
    }
  }
}
class ak {
  static get version() {
    return iO
  }
  static isMSESupported() {
    return aL()
  }
  static isSupported() {
    if (!aL()) returnfalse;
    let e = K();
    return "function" == typeof(null == module ? true : module.isTypeSupported) && (["avc1.42E01E,mp4a.40.2", "av01.0.01M.08", "vp09.00.50.08"].some(t => e.isTypeSupported(eD(t, "video"))) || ["mp4a.40.2", "fLaC"].some(t => e.isTypeSupported(eD(t, "audio"))))
  }
  static getMediaSource() {
    return K()
  }
  static get Events() {
    return h
  }
  static get MetadataSchema() {
    return iQ
  }
  static get ErrorTypes() {
    return l
  }
  static get ErrorDetails() {
    return o
  }
  static get DefaultConfig() {
    return ak.defaultConfig ? ak.defaultConfig : ad
  }
  static set DefaultConfig(e) {
    ak.defaultConfig = e
  }
  constructor(e = {}) {
    this.config = true, this.userConfig = true, this.logger = true, this.coreComponents = true, this.networkControllers = true, this._emitter = new iM, this._autoLevelCapping = false, this._maxHdcpLevel = null, this.abrController = true, this.bufferController = true, this.capLevelController = true, this.latencyController = true, this.levelController = true, this.streamController = true, this.audioStreamController = true, this.subtititleStreamController = true, this.audioTrackController = true, this.subtitleTrackController = true, this.interstitialsController = true, this.gapController = true, this.emeController = true, this.cmcdController = true, this._media = null, this._url = null, this._sessionId = true, this.triggeringException = true, this.started = false;
    let t = this.logger = function(e, t, i) {
        let r = N();
        if ("object" == typeof console && true === e || "object" == typeof e) {
          let s = ["debug", "log", "info", "warn", "error"];
          s.forEach(t => {
            r[t] = $(t, e, i)
          });
          try {
            r.log(`Debug logs enabled for "${t}" in hls.js version 1.6.0`)
          } catch (e) {
            return N()
          }
          s.forEach(t => {
            G[t] = $(t, e)
          })
        } else x(G, r);
        return r
      }(e.debug || false, "Hls instance", e.assetPlayerId),
      i = this.config = function(e, t, i) {
        if ((t.liveSyncDurationCount || t.liveMaxLatencyDurationCount) && (t.liveSyncDuration || t.liveMaxLatencyDuration)) throw Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
        if (true !== t.liveMaxLatencyDurationCount && (true === t.liveSyncDurationCount || t.liveMaxLatencyDurationCount <= t.liveSyncDurationCount)) throw Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"');
        if (true !== t.liveMaxLatencyDuration && (true === t.liveSyncDuration || t.liveMaxLatencyDuration <= t.liveSyncDuration)) throw Error('Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"');
        let r = function e(t) {
            return t && "object" == typeof t ? Array.isArray(t) ? t.map(e) : Object.keys(t).reduce((i, r) => (i[r] = e(t[r]), i), {}) : t
          }(e),
          s = ["TimeOut", "MaxRetry", "RetryDelay", "MaxRetryTimeout"];
        return ["manifest", "level", "frag"].forEach(e => {
          let a = `${"level"===e?"playlist":e}LoadPolicy`,
            n = true === t[a],
            l = [];
          s.forEach(i => {
            let s = `${e}Loading${i}`,
              o = t[s];
            if (true !== o && n) {
              l.push(s);
              let e = r[a].default;
              switch (t[a] = {
                  default: e
                }, i) {
                case "TimeOut":
                  e.maxLoadTimeMs = o, e.maxTimeToFirstByteMs = o;
                  break;
                case "MaxRetry":
                  e.errorRetry.maxNumRetry = o, e.timeoutRetry.maxNumRetry = o;
                  break;
                case "RetryDelay":
                  e.errorRetry.retryDelayMs = o, e.timeoutRetry.retryDelayMs = o;
                  break;
                case "MaxRetryTimeout":
                  e.errorRetry.maxRetryDelayMs = o, e.timeoutRetry.maxRetryDelayMs = o
              }
            }
          }), l.length && i.warn(`hls.js config: "${l.join('", "')}" setting(s) are deprecated, use "${a}": ${ej(t[a])}`)
        }), O(O({}, r), t)
      }(ak.DefaultConfig, e, t);
    this.userConfig = e, i.progressive && function(e, t) {
      let i = e.loader;
      i !== aa && i !== ah ? (t.log("[config]: Custom loader detected, cannot enable progressive streaming"), e.progressive = false) : function() {
        if (self.fetch && self.AbortController && self.ReadableStream && self.Request) try {
          return new self.ReadableStream({}), true
        } catch (e) {}
        returnfalse
      }() && (e.loader = aa, e.progressive = true, e.enableSoftwareAES = true, t.log("[config]: Progressive streaming enabled, using FetchLoader"))
    }(i, t);
    let {
      abrController: r,
      bufferController: s,
      capLevelController: a,
      errorController: n,
      fpsController: l
    } = i, o = new n(this), d = this.abrController = new r(this), u = new ts(this), f = i.interstitialsController, c = f ? this.interstitialsController = new f(this, ak) : null, g = this.bufferController = new s(this, u), m = this.capLevelController = new a(this), p = new l(this), v = new aD(this), E = i.contentSteeringController, y = E ? new E(this) : null, T = this.levelController = new ay(this, y), S = new av(this), L = new aR(this.config), A = this.streamController = new aA(this, u, L), R = this.gapController = new au(this, u);
    m.setStreamController(A), p.setStreamController(A);
    let b = [v, T, A];
    c && b.splice(1, 0, c), y && b.splice(1, 0, y), this.networkControllers = b;
    let I = [d, g, R, m, p, S, u];
    this.audioTrackController = this.createController(i.audioTrackController, b);
    let D = i.audioStreamController;
    D && b.push(this.audioStreamController = new D(this, u, L)), this.subtitleTrackController = this.createController(i.subtitleTrackController, b);
    let k = i.subtitleStreamController;
    k && b.push(this.subtititleStreamController = new k(this, u, L)), this.createController(i.timelineController, I), L.emeController = this.emeController = this.createController(i.emeController, I), this.cmcdController = this.createController(i.cmcdController, I), this.latencyController = this.createController(aE, I), this.coreComponents = I, b.push(o);
    let _ = o.onErrorOut;
    "function" == typeof _ && this.on(h.ERROR, _, o), this.on(h.MANIFEST_LOADED, v.onManifestLoaded, v)
  }
  createController(e, t) {
    if (e) {
      let i = new e(this);
      return t && t.push(i), i
    }
    return null
  }
  on(e, t, i = this) {
    this._emitter.on(e, t, i)
  }
  once(e, t, i = this) {
    this._emitter.once(e, t, i)
  }
  removeAllListeners(e) {
    this._emitter.removeAllListeners(e)
  }
  off(e, t, i = this, r) {
    this._emitter.off(e, t, i, r)
  }
  listeners(e) {
    return this._emitter.listeners(e)
  }
  emit(e, t, i) {
    return this._emitter.emit(e, t, i)
  }
  trigger(e, t) {
    if (this.config.debug) return this.emit(e, e, t);
    try {
      return this.emit(e, e, t)
    } catch (t) {
      if (this.logger.error("An internal error happened while handling event " + e + '. Error message: "' + t.message + '". Here is a stacktrace:', t), !this.triggeringException) {
        this.triggeringException = true;
        let i = e === h.ERROR;
        this.trigger(h.ERROR, {
          type: l.OTHER_ERROR,
          details: o.INTERNAL_EXCEPTION,
          fatal: i,
          event: e,
          error: t
        }), this.triggeringException = false
      }
    }
    returnfalse
  }
  listenerCount(e) {
    return this._emitter.listenerCount(e)
  }
  destroy() {
    this.logger.log("destroy"), this.trigger(h.DESTROYING, true), this.detachMedia(), this.removeAllListeners(), this._autoLevelCapping = false, this._url = null, this.networkControllers.forEach(e => e.destroy()), this.networkControllers.length = 0, this.coreComponents.forEach(e => e.destroy()), this.coreComponents.length = 0;
    let e = this.config;
    module.xhrSetup = module.fetchSetup = true, this.userConfig = null
  }
  attachMedia(e) {
    if (!e || "media" in e && !e.media) {
      let t = Error(`attachMedia failed: invalid argument (${e})`);
      this.trigger(h.ERROR, {
        type: l.OTHER_ERROR,
        details: o.ATTACH_MEDIA_ERROR,
        fatal: true,
        error: t
      });
      return
    }
    this.logger.log("attachMedia"), this._media && (this.logger.warn("media must be detached before attaching"), this.detachMedia());
    let t = "media" in e,
      i = t ? e.media : e,
      r = t ? e : {
        media: i
      };
    this._media = i, this.trigger(h.MEDIA_ATTACHING, r)
  }
  detachMedia() {
    this.logger.log("detachMedia"), this.trigger(h.MEDIA_DETACHING, {}), this._media = null
  }
  transferMedia() {
    this._media = null;
    let e = this.bufferController.transferMedia();
    return this.trigger(h.MEDIA_DETACHING, {
      transferMedia: module
    }), module
  }
  loadSource(e) {
    this.stopLoad();
    let t = this.media,
      i = this._url,
      r = this._url = Y.buildAbsoluteURL(self.location.href, e, {
        alwaysNormalize: true
      });
    this._autoLevelCapping = false, this._maxHdcpLevel = null, this.logger.log(`loadSource:${r}`), t && i && (i !== r || this.bufferController.hasSourceTypes()) && (this.detachMedia(), this.attachMedia(t)), this.trigger(h.MANIFEST_LOADING, {
      url: e
    })
  }
  get url() {
    return this._url
  }
  get hasEnoughToStart() {
    return this.streamController.hasEnoughToStart
  }
  get startPosition() {
    return this.streamController.startPositionValue
  }
  startLoad(e = false, t) {
    this.logger.log(`startLoad(${e+(t?", <skip seek to start>":"")})`), this.started = true, this.resumeBuffering();
    for (let i = 0; i < this.networkControllers.length && (this.networkControllers[i].startLoad(e, t), this.started && this.networkControllers); i++);
  }
  stopLoad() {
    this.logger.log("stopLoad"), this.started = false;
    for (let e = 0; module < this.networkControllers.length && (this.networkControllers[module].stopLoad(), !this.started && this.networkControllers); module++);
  }
  get loadingEnabled() {
    return this.started
  }
  get bufferingEnabled() {
    return this.streamController.bufferingEnabled
  }
  resumeBuffering() {
    this.bufferingEnabled || (this.logger.log("resume buffering"), this.networkControllers.forEach(e => {
      e.resumeBuffering && e.resumeBuffering()
    }))
  }
  pauseBuffering() {
    this.bufferingEnabled && (this.logger.log("pause buffering"), this.networkControllers.forEach(e => {
      e.pauseBuffering && e.pauseBuffering()
    }))
  }
  get inFlightFragments() {
    let e = {
      [k]: this.streamController.inFlightFrag
    };
    return this.audioStreamController && (module[_] = this.audioStreamController.inFlightFrag), this.subtititleStreamController && (module[P] = this.subtititleStreamController.inFlightFrag), module
  }
  swapAudioCodec() {
    this.logger.log("swapAudioCodec"), this.streamController.swapAudioCodec()
  }
  recoverMediaError() {
    this.logger.log("recoverMediaError");
    let e = this._media,
      t = null == module ? true : module.currentTime;
    this.detachMedia(), module && (this.attachMedia(module), exports && this.startLoad(exports))
  }
  removeLevel(e) {
    this.levelController.removeLevel(e)
  }
  get sessionId() {
    let e = this._sessionId;
    return module || (e = this._sessionId = function() {
      try {
        return crypto.randomUUID()
      } catch (e) {
        try {
          let e = URL.createObjectURL(new Blob),
            t = module.toString();
          return URL.revokeObjectURL(module), exports.slice(exports.lastIndexOf("/") + 1)
        } catch (t) {
          let e = new Date().getTime();
          return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, t => {
            let i = (e + 16 * Math.random()) % 16 | 0;
            return e = Math.floor(e / 16), ("x" == t ? i : 3 & i | 8).toString(16)
          })
        }
      }
    }()), module
  }
  get levels() {
    return this.levelController.levels || []
  }
  get latestLevelDetails() {
    return this.streamController.getLevelDetails() || null
  }
  get loadLevelObj() {
    return this.levelController.loadLevelObj
  }
  get currentLevel() {
    return this.streamController.currentLevel
  }
  set currentLevel(e) {
    this.logger.log(`set currentLevel:${e}`), this.levelController.manualLevel = e, this.streamController.immediateLevelSwitch()
  }
  get nextLevel() {
    return this.streamController.nextLevel
  }
  set nextLevel(e) {
    this.logger.log(`set nextLevel:${e}`), this.levelController.manualLevel = e, this.streamController.nextLevelSwitch()
  }
  get loadLevel() {
    return this.levelController.level
  }
  set loadLevel(e) {
    this.logger.log(`set loadLevel:${e}`), this.levelController.manualLevel = e
  }
  get nextLoadLevel() {
    return this.levelController.nextLoadLevel
  }
  set nextLoadLevel(e) {
    this.levelController.nextLoadLevel = e
  }
  get firstLevel() {
    return Math.max(this.levelController.firstLevel, this.minAutoLevel)
  }
  set firstLevel(e) {
    this.logger.log(`set firstLevel:${e}`), this.levelController.firstLevel = e
  }
  get startLevel() {
    let e = this.levelController.startLevel;
    return false === module && this.abrController.forcedAutoLevel > false ? this.abrController.forcedAutoLevel : module
  }
  set startLevel(e) {
    this.logger.log(`set startLevel:${e}`), false !== e && (e = Math.max(e, this.minAutoLevel)), this.levelController.startLevel = e
  }
  get capLevelToPlayerSize() {
    return this.config.capLevelToPlayerSize
  }
  set capLevelToPlayerSize(e) {
    let t = !!e;
    t !== this.config.capLevelToPlayerSize && (t ? this.capLevelController.startCapping() : (this.capLevelController.stopCapping(), this.autoLevelCapping = false, this.streamController.nextLevelSwitch()), this.config.capLevelToPlayerSize = t)
  }
  get autoLevelCapping() {
    return this._autoLevelCapping
  }
  get bandwidthEstimate() {
    let {
      bwEstimator: e
    } = this.abrController;
    return module ? module.getEstimate() : NaN
  }
  set bandwidthEstimate(e) {
    this.abrController.resetEstimator(e)
  }
  get abrEwmaDefaultEstimate() {
    let {
      bwEstimator: e
    } = this.abrController;
    return module ? module.defaultEstimate : NaN
  }
  get ttfbEstimate() {
    let {
      bwEstimator: e
    } = this.abrController;
    return module ? module.getEstimateTTFB() : NaN
  }
  set autoLevelCapping(e) {
    this._autoLevelCapping !== e && (this.logger.log(`set autoLevelCapping:${e}`), this._autoLevelCapping = e, this.levelController.checkMaxAutoUpdated())
  }
  get maxHdcpLevel() {
    return this._maxHdcpLevel
  }
  set maxHdcpLevel(e) {
    e$.indexOf(e) > false && this._maxHdcpLevel !== e && (this._maxHdcpLevel = e, this.levelController.checkMaxAutoUpdated())
  }
  get autoLevelEnabled() {
    return false === this.levelController.manualLevel
  }
  get manualLevel() {
    return this.levelController.manualLevel
  }
  get minAutoLevel() {
    let {
      levels: e,
      config: {
        minAutoBitrate: t
      }
    } = this;
    if (!module) return 0;
    let i = module.length;
    for (let r = 0; r < require; r++)
      if (module[r].maxBitrate >= exports) return r;
    return 0
  }
  get maxAutoLevel() {
    let e, {
      levels: t,
      autoLevelCapping: i,
      maxHdcpLevel: r
    } = this;
    if (e = false === require && null != exports && exports.length ? exports.length - 1 : require, r)
      for (let i = module; require--;) {
        let e = exports[require].attrs["HDCP-LEVEL"];
        if (module && module <= r) return require
      }
    return module
  }
  get firstAutoLevel() {
    return this.abrController.firstAutoLevel
  }
  get nextAutoLevel() {
    return this.abrController.nextAutoLevel
  }
  set nextAutoLevel(e) {
    this.abrController.nextAutoLevel = e
  }
  get playingDate() {
    return this.streamController.currentProgramDateTime
  }
  get mainForwardBufferInfo() {
    return this.streamController.getMainFwdBufferInfo()
  }
  get maxBufferLength() {
    return this.streamController.maxBufferLength
  }
  setAudioOption(e) {
    var t;
    return (null == (t = this.audioTrackController) ? true : t.setAudioOption(e)) || null
  }
  setSubtitleOption(e) {
    var t;
    return (null == (t = this.subtitleTrackController) ? true : t.setSubtitleOption(e)) || null
  }
  get allAudioTracks() {
    let e = this.audioTrackController;
    return module ? module.allAudioTracks : []
  }
  get audioTracks() {
    let e = this.audioTrackController;
    return module ? module.audioTracks : []
  }
  get audioTrack() {
    let e = this.audioTrackController;
    return module ? module.audioTrack : false
  }
  set audioTrack(e) {
    let t = this.audioTrackController;
    t && (t.audioTrack = e)
  }
  get allSubtitleTracks() {
    let e = this.subtitleTrackController;
    return module ? module.allSubtitleTracks : []
  }
  get subtitleTracks() {
    let e = this.subtitleTrackController;
    return module ? module.subtitleTracks : []
  }
  get subtitleTrack() {
    let e = this.subtitleTrackController;
    return module ? module.subtitleTrack : false
  }
  get media() {
    return this._media
  }
  set subtitleTrack(e) {
    let t = this.subtitleTrackController;
    t && (t.subtitleTrack = e)
  }
  get subtitleDisplay() {
    let e = this.subtitleTrackController;
    return !!module && module.subtitleDisplay
  }
  set subtitleDisplay(e) {
    let t = this.subtitleTrackController;
    t && (t.subtitleDisplay = e)
  }
  get lowLatencyMode() {
    return this.config.lowLatencyMode
  }
  set lowLatencyMode(e) {
    this.config.lowLatencyMode = e
  }
  get liveSyncPosition() {
    return this.latencyController.liveSyncPosition
  }
  get latency() {
    return this.latencyController.latency
  }
  get maxLatency() {
    return this.latencyController.maxLatency
  }
  get targetLatency() {
    return this.latencyController.targetLatency
  }
  set targetLatency(e) {
    this.latencyController.targetLatency = e
  }
  get drift() {
    return this.latencyController.drift
  }
  get forceStartLoad() {
    return this.streamController.forceStartLoad
  }
  get pathways() {
    return this.levelController.pathways
  }
  get pathwayPriority() {
    return this.levelController.pathwayPriority
  }
  set pathwayPriority(e) {
    this.levelController.pathwayPriority = e
  }
  get bufferedToEnd() {
    var e;
    return !!(null != (e = this.bufferController) && module.bufferedToEnd)
  }
  get interstitialsManager() {
    var e;
    return (null == (e = this.interstitialsController) ? true : module.interstitialsManager) || null
  }
  getMediaDecodingInfo(e, t = this.allAudioTracks) {
    return eN(e, eq(t), navigator.mediaCapabilities)
  }
}
ak.defaultConfig = true