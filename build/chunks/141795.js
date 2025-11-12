/** Chunk was on web.js **/
/** chunk id: 141795, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  mw: () => M,
  nH: () => k
}), require("./415506.js"), require("./388685.js"), require("./35282.js"), require("./704826.js"), require("./49124.js");
var Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk261470 = require("./261470.js"),
  Chunk544891 = require("./544891.js"),
  Chunk710845 = require("./710845.js"),
  Chunk432877 = require("./432877.js"),
  Chunk630755 = require("./630755.js"),
  Chunk171638 = require("./171638.js"),
  Chunk928405 = require("./928405.js"),
  Chunk719755 = require("./719755.js"),
  Chunk481981 = require("./481981.js"),
  Chunk740492 = require("./740492.js"),
  Chunk866960 = require("./866960.js"),
  Chunk626135 = require("./626135.js"),
  Chunk510990 = require("./510990.js"),
  Chunk70956 = require("./70956.js"),
  Chunk931619 = require("./931619.js"),
  Chunk960048 = require("./960048.js"),
  Chunk861990 = require("./861990.js"),
  Chunk476326 = require("./476326.js"),
  Chunk983544 = require("./983544.js"),
  Chunk596956 = require("./596956.js"),
  Chunk125186 = require("./125186.js"),
  Chunk981631 = require("./981631.js");

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function R(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      N(e, t, n[t])
    })
  }
  return e
}

function P(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function D(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : P(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let w = new Chunk710845.Z("CloudUpload.tsx");
class x extends Error {
  static getErrorKind(e, t) {
    var n;
    let r = null != (n = null == t ? true : t.status) ? n : 0,
      i = r >= 500 && r < 600,
      a = e.message.toLowerCase().includes("network") || e.message.toLowerCase().includes("terminated") || e.message.toLowerCase().includes("offline") || e.message.toLowerCase().includes("changed");
    return i ? "server_error" : a ? "network_error" : "unknown"
  }
  static rejectionHandler(e) {
    return t => {
      if (t instanceof s.Pd) throw new x(e, {
        response: t
      });
      if (t instanceof Error) throw new x(e, {
        cause: t
      });
      throw new x(e, {
        cause: Error(String(t))
      })
    }
  }
  canRetry() {
    return "server_error" === this.kind || "network_error" === this.kind
  }
  constructor(e, t = {}) {
    var n, r;
    let {
      cause: i,
      response: a
    } = t, o = x.getErrorKind(null != i ? i : Error("".concat(null != (n = null == a ? true : a.text) ? n : "Unknown error")), a), s = "server_error" === o ? "".concat(e, ":").concat(o, ":status_").concat(null != (r = null == a ? true : a.status) ? r : 0) : "".concat(e, ":").concat(o);
    super(s, {
      cause: i
    }), N(this, "kind", true), N(this, "phase", true), N(this, "messageShort", true), this.name = "ResumableUploadError", this.phase = e, this.kind = o, this.messageShort = s
  }
}
let L = "Content-MD5";
var M = function(e) {
  return e.NOT_STARTED = "NOT_STARTED", e.STARTED = "STARTED", e.UPLOADING = "UPLOADING", e.ERROR = "ERROR", e.COMPLETED = "COMPLETED", e.CANCELED = "CANCELED", e.REMOVED_FROM_MSG_DRAFT = "REMOVED_FROM_MSG_DRAFT", e
}({});
class j {
  constructor() {
    N(this, "numUploadAttempts", true), N(this, "timing", {}), N(this, "compressAndExtractDisabled", true), N(this, "fileAlreadyPrepped", true), N(this, "imageCompressionQuality", true), N(this, "videoCompressionQuality", true), N(this, "convertedMimeType", true), N(this, "sourceMediaWidth", true), N(this, "sourceMediaHeight", true), N(this, "sourceMediaFormat", true), N(this, "sourceVideoBitrate", true), N(this, "sourceVideoFramerate", true), N(this, "videoDurationMs", true), N(this, "sourceVideoProfile", true), N(this, "sourceVideoLevel", true), N(this, "targetVideoWidth", true), N(this, "targetVideoHeight", true), N(this, "targetVideoBitrate", true), N(this, "targetVideoCodec", true), N(this, "targetVideoFramerate", true), N(this, "targetVideoIsHdr", true), N(this, "hevcIsSupported", true), N(this, "progressUpdateGranularity", true), N(this, "validUploadHash", true), N(this, "psnr", true), N(this, "ssim", true), N(this, "origin", true), N(this, "psnrMeasurementLatencyMs", true), N(this, "ssimMeasurementLatencyMs", true), N(this, "uploadResumptionCount", 0), N(this, "uploadResumptionPosition", 0), N(this, "uploadResumptionReason", true), N(this, "conversionFailureReason", true)
  }
}
r = require("./224497.js").Z;
class k extends Chunk476326.ZP {
  static fromJson(e) {
    let {
      item: t,
      channelId: n,
      showLargeMessageDialog: r,
      reactNativeFileIndex: i
    } = e, a = new k(t, n, r, i);
    return Object.entries(e).forEach(e => {
      let [t, n] = e;
      t.startsWith("_") || (a[t] = n)
    }), "COMPLETED" !== a.status && (a.status = "NOT_STARTED"), a
  }
  parseRangeHeader(e) {
    let t = e.match(/^bytes=(\d+)-(\d+)(?:\/\d+)?$/);
    return null == t ? null : [parseInt(t[1], 10), parseInt(t[2], 10)]
  }
  retryOpts() {
    return this.item.platform === Chunk476326.ow.REACT_NATIVE ? {
      timeout: +Chunk70956.Z.Millis.HOUR,
      backoff: new Chunk261470.Z(.5 * Chunk70956.Z.Millis.SECOND, 30 * Chunk70956.Z.Millis.MINUTE),
      retries: 12
    } : {
      timeout: +Chunk70956.Z.Millis.HOUR,
      retries: 12,
      backoff: new Chunk261470.Z
    }
  }
  createAttachmentUrlRetryOpts() {
    return this.item.platform === Chunk476326.ow.REACT_NATIVE ? {
      timeout: {
        response: 30 * Chunk70956.Z.Millis.SECOND,
        deadline: 30 * Chunk70956.Z.Millis.MINUTE
      },
      backoff: new Chunk261470.Z(.5 * Chunk70956.Z.Millis.SECOND, 60 * Chunk70956.Z.Millis.SECOND),
      retries: 8
    } : this.retryOpts()
  }
  supportsResume() {
    return (this._libdiscoreEnabled || this.item.platform !== Chunk476326.ow.REACT_NATIVE) && this._resumptionEnabled
  }
  async uploadFileToCloud() {
    let e, t;
    if (null == this.responseUrl) throw Error("_uploadFileToCloud - responseUrl is not set");
    w.log("Uploading ".concat(this.id), this.item.platform === Chunk476326.ow.REACT_NATIVE ? "filename=".concat(this.item.filename, ", uri=").concat(this.item.uri) : "filename=".concat(this.item.file.name)), this.item.platform === Chunk476326.ow.REACT_NATIVE ? t = null != (e = {
      type: this.item.mimeType,
      uri: this.item.uri,
      name: this.item.filename
    }).type && "application/json" !== module.type ? module.type : "application/octet-stream" : (e = this.item.file, t = "application/octet-stream");
    let n = (0, Chunk481981.m)({
      location: "CloudUpload"
    });
    if (require.enableNewRetry) return (0, Chunk596956.Z_)(this.item) && (this._uploadHttpClient = new Chunk596956.Qn, this._libdiscoreEnabled = true, w.log("Using libdiscore client for file upload")), this._resumptionEnabled = require.enableResumption, await this.uploadFileWithResumption(this.responseUrl, module, exports);
    let r = {
      "Content-Type": exports
    };
    true !== this.contentHash && (r[L] = this.contentHash);
    let i = R({
      url: this.responseUrl,
      body: module,
      headers: r,
      signal: this._abortController.signal,
      onRequestProgress: a().throttle(this.createResumeAwareProgressFn(0), 50),
      rejectWithError: false
    }, this.retryOpts());
    return Chunk544891.tn.put(Chunk392711)
  }
  async getResumePosition(e) {
    let t = {
      url: e,
      headers: {
        "Content-Range": "bytes */*"
      },
      rejectWithError: true,
      retries: 0,
      timeout: {
        deadline: 30 * b.Z.Millis.SECOND
      },
      signal: this._abortController.signal
    };
    return await this._uploadHttpClient.doUpload(t).then(e => 200 === e.status || 201 === e.status ? this.currentSize : x.rejectionHandler("status_check")(e)).catch(e => {
      if (e instanceof s.Pd && 308 === e.status) {
        var t;
        let n = this.parseRangeHeader(null != (t = e.headers.range) ? t : "");
        return null != n ? n[1] + 1 : 0
      }
      return x.rejectionHandler("status_check")(e)
    })
  }
  async startOrResumeUpload(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 0;
    if (w.log("Attempting to upload attachment with resumeFrom: ".concat(t, " and attempts: ").concat(this.uploadAttempts)), t > 0) {
      var n;
      this.uploadAnalytics.uploadResumptionCount++, e.headers = D(R({}, null != (n = e.headers) ? n : {}), {
        "Content-Range": "bytes ".concat(t, "-").concat(this.currentSize - 1, "/").concat(this.currentSize)
      })
    }
    e.onRequestProgress = a().throttle(this.createResumeAwareProgressFn(t), 50);
    let r = await this._uploadHttpClient.doUpload(e, {
      fileByteRange: {
        start: t
      }
    }).catch(x.rejectionHandler("upload"));
    if (200 !== r.status && 201 !== r.status) throw new x("upload", {
      response: r
    });
    return r
  }
  async uploadFileWithResumption(e, t, n) {
    let {
      timeout: r,
      backoff: i,
      retries: o
    } = this.retryOpts(), s = {
      url: e,
      body: t,
      headers: {
        "Content-Type": n
      },
      signal: this._abortController.signal,
      onRequestProgress: a().throttle(this.createResumeAwareProgressFn(0), 50),
      retries: 0,
      rejectWithError: true,
      timeout: r
    }, l = 0;
    for (; this.uploadAttempts <= o && !this._aborted;) {
      this.uploadAttempts++, this.uploadAnalytics.numUploadAttempts = this.uploadAttempts;
      try {
        if (this.uploadAttempts > 1) {
          let t = await this.trackTime("resumptionCheckTimeMs", async () => await this.getResumePosition(e));
          this.uploadAnalytics.uploadResumptionPosition = t, l = this.supportsResume() ? t : 0, this.loaded = l
        }
        return await this.startOrResumeUpload(s, l)
      } catch (e) {
        if (e instanceof x && e.canRetry()) {
          w.warn("Error uploading ".concat(this.id, ": ").concat(e.message, ", attempting resumption")), this.uploadAnalytics.uploadResumptionReason = e.messageShort, await y.Z.awaitOnline();
          let t = i.fail();
          w.log("Waiting ".concat(t, "ms before attachment upload attempt ").concat(this.uploadAttempts + 1)), await new Promise(e => setTimeout(e, t))
        } else throw w.warn("Unrecoverable error uploading ".concat(this.id, ": ").concat(e.message)), e
      }
    }
    throw Error("Upload failed after ".concat(this.uploadAttempts, " attempts"))
  }
  async getSize() {
    var e;
    return null != (e = this.currentSize) ? module : 0
  }
  async getHash() {
    return arguments.length > 0 && true !== arguments[0] && arguments[0], ""
  }
  getEtagFromResponse(e) {
    var t;
    let n = null != (t = e.headers.etag) ? t : null;
    return null != n ? n.replace(/"/g, "") : null
  }
  async trackTime(e, t) {
    let n = performance.now();
    try {
      return await t()
    } finally {
      this.uploadAnalytics.timing[e] = performance.now() - n
    }
  }
  async upload() {
    var e, t, n, i;
    if ("COMPLETED" === this.status) return;
    if (this.setStatus("STARTED"), this.startTime = performance.now(), this.trackUploadStart(), this.isCancelled()) return void this.handleComplete(this.id);
    if (this.allowOptimization && this.item.platform === Chunk476326.ow.WEB) {
      let e = await k.tryConvertToWebP(this.item.file, () => this._aborted, this.id);
      null != module && (null != module.convertedFile && (this.item.file = module.convertedFile, this.currentSize = module.convertedFile.size), null != module.convertedMimeType && (this.uploadAnalytics.convertedMimeType = module.convertedMimeType), null != module.hashTimeMs && (this.uploadAnalytics.timing.hashTimeMs = module.hashTimeMs), null != module.conversionFailureReason && (this.uploadAnalytics.conversionFailureReason = module.conversionFailureReason), this.uploadAnalytics.timing.compressTimeMs = module.compressTimeMs)
    }
    let a = await r.getUploadPayload(this),
      o = (0, Chunk983544.F)(this.item.target),
      l = (0, Chunk171638.G)({
        location: "CloudUpload.upload"
      });
    if (null == a.filename || "" === a.filename) {
      w.error("File does not have a filename.", JSON.stringify(a)), this.handleError(Chunk981631.evJ.INVALID_FILE_ASSET);
      return
    }
    if (Chunk710845.useDetectedFileSize && 0 === this.currentSize && null != this.item.file) try {
      let e = await (0, Chunk630755.M)(this.item.file);
      module > 0 && (this.currentSize = module)
    } catch (e) {
      w.warn("Failed to detect file size, proceeding with original", {
        filename: a.filename,
        error: module instanceof Error ? module.message : String(module)
      })
    }
    if (0 === this.currentSize) return void this.handleError(Chunk981631.evJ.INVALID_FILE_ASSET);
    if ((null != (e = this.currentSize) ? module : 0) > Chunk261470.getMaxFileSize(this.channelId)) return void this.handleError(Chunk981631.evJ.ENTITY_TOO_LARGE);
    if (Chunk432877.ZP.get("upload_fail_50") && .5 > Math.random()) return void setTimeout(() => {
      this.handleError(500)
    }, 1e3);
    let f = Chunk719755.Z.getCurrentConfig({
        location: "CloudUpload"
      }, {
        autoTrackExposure: true
      }),
      p = null;
    Chunk928405.enabled;
    try {
      w.log("Requesting upload url for ".concat(this.id));
      let e = await this.trackTime("getUploadUrlTimeMs", async () => {
        let e = Chunk261470.getCreateAttachmentURL(this.channelId);
        return await Chunk544891.tn.post(D(R({
          url: module,
          body: {
            files: [a]
          }
        }, this.createAttachmentUrlRetryOpts()), {
          rejectWithError: false
        }))
      });
      this.setResponseUrl(module.body.attachments[0].upload_url), this.setUploadedFilename(module.body.attachments[0].upload_filename)
    } catch (r) {
      let e = null != (n = null == r || null == (t = r.body) ? true : exports.code) ? require : r.status;
      module !== Chunk981631.evJ.ENTITY_TOO_LARGE && (w.error("Requesting upload url failed with code ".concat(null != module ? module : JSON.stringify(r.body), " for ").concat(this.id)), Chunk960048.Z.captureException(r)), this.handleError(module);
      return
    }
    if (null != Chunk481981) {
      let e = await Chunk481981;
      null != module && (this.contentHash = module)
    }
    try {
      let e = await this.trackTime("uploadTimeMs", async () => await this.uploadFileToCloud());
      if (Chunk928405.enabled && null != module) {
        let t = false,
          n = this.getEtagFromResponse(module);
        if (null != require && (this.etag = require, t = require === this.contentHash), this.uploadAnalytics.validUploadHash = exports, !exports && Chunk928405.enforced) {
          let e = "File ".concat(null != (i = this.filename) ? Chunk392711 : this.id, " received incorrect checksum after upload: got ").concat(this.etag, ", expected ").concat(this.contentHash);
          w.error(module), Chunk960048.Z.captureMessage(module), this.handleError(Chunk981631.evJ.INVALID_FILE_ASSET);
          return
        }
      }
      this.trackUploadFinished("COMPLETED"), this.handleComplete(module)
    } catch (e) {
      this.isCancelled() ? this.handleComplete(module) : (w.info("Error: status ".concat(module.status, " for ").concat(this.id)), this.handleError(module))
    }
  }
  async reactNativeCompressAndExtractData() {
    var e, t;
    if (!(0, Chunk983544.F)(this.item.target).shouldReactNativeCompressUploads) return this.uploadAnalytics.compressAndExtractDisabled = true, w.log("reactNativeCompressAndExtractData() disabled by upload target"), this;
    if (true === this.reactNativeFilePrepped) return this.uploadAnalytics.fileAlreadyPrepped = true, w.log("reactNativeCompressAndExtractData() file already prepped - ".concat(this.id)), this;
    w.log("Starting compression/conversion for ".concat(this.id));
    let n = await this.trackTime("compressTimeMs", async () => {
      var e;
      return await (0, Chunk510990.Jf)(this, null != (e = this.reactNativeFileIndex) ? module : 0)
    });
    if (null == require || null == require.file) return w.error("Failed to get compressed file for ".concat(this.id)), this;
    let r = require.uri,
      i = require.file.name;
    if ((0, Chunk476326.rG)(require.file) && (this.uploadAnalytics.imageCompressionQuality = require.file.imageCompressionQuality, this.uploadAnalytics.videoCompressionQuality = require.file.videoCompressionQuality, require.file.isImage && (this.uploadAnalytics.sourceMediaWidth = require.file.sourceWidth, this.uploadAnalytics.sourceMediaHeight = require.file.sourceHeight), true !== require.file.videoMetadata && (this.uploadAnalytics.sourceMediaWidth = require.file.videoMetadata.width, this.uploadAnalytics.sourceMediaHeight = require.file.videoMetadata.height, this.uploadAnalytics.sourceMediaFormat = require.file.videoMetadata.format, this.uploadAnalytics.sourceVideoBitrate = require.file.videoMetadata.bitRate, this.uploadAnalytics.sourceVideoFramerate = require.file.videoMetadata.frameRate, this.uploadAnalytics.videoDurationMs = require.file.videoMetadata.durationMs, this.uploadAnalytics.sourceVideoProfile = require.file.videoMetadata.sourceProfile, this.uploadAnalytics.sourceVideoLevel = require.file.videoMetadata.sourceLevel), true !== require.file.encodingConfig && (this.uploadAnalytics.targetVideoWidth = require.file.encodingConfig.targetWidth, this.uploadAnalytics.targetVideoHeight = require.file.encodingConfig.targetHeight, this.uploadAnalytics.targetVideoBitrate = require.file.encodingConfig.targetBitrate, this.uploadAnalytics.targetVideoCodec = require.file.encodingConfig.useHEVC ? "hvc1" : "avc1", this.uploadAnalytics.targetVideoFramerate = require.file.encodingConfig.frameRate, this.uploadAnalytics.targetVideoIsHdr = require.file.encodingConfig.createHDR, this.uploadAnalytics.hevcIsSupported = require.file.encodingConfig.hevcIsSupported, this.uploadAnalytics.progressUpdateGranularity = require.file.encodingConfig.progressUpdateGranularity), this.uploadAnalytics.psnr = require.file.psnr, this.uploadAnalytics.ssim = require.file.ssim, this.uploadAnalytics.origin = require.file.origin, this.uploadAnalytics.psnrMeasurementLatencyMs = require.file.psnrMeasurementLatencyMs, this.uploadAnalytics.ssimMeasurementLatencyMs = require.file.ssimMeasurementLatencyMs), this.filename = Chunk392711, null == Chunk392711 || null == r || null == require.file.type) throw w.error("Insufficient file data: ".concat({
      filename: Chunk392711,
      uri: r,
      type: require.file.type
    }, " for ").concat(this.id)), Error("Insufficient file data: ".concat({
      filename: Chunk392711,
      uri: r,
      type: require.file.type
    }));
    let a = null == (e = Chunk392711.split(".").pop()) ? true : module.toLowerCase(),
      o = "jpg" === a || "jpeg" === a ? "image/jpeg" : require.file.type;
    this.uploadAnalytics.convertedMimeType = Chunk261470;
    let s = null != (t = require.fileSize) ? exports : (await (0, Chunk861990.Lc)(r)).size;
    if (this.postCompressionSize = Chunk544891, this.currentSize = Chunk544891, null == Chunk544891) throw w.error("Size missing from file data for ".concat(this.id)), Error("Size missing from file data");
    w.log("Completed compression and conversion. Output size=".concat(Chunk544891, " bytes; filename=").concat(Chunk392711, "; uri=").concat(r, "; originalMimeType=").concat(this.mimeType, "; mimeType=").concat(Chunk261470, " for ").concat(this.id));
    let l = {
      uri: r,
      filename: Chunk392711,
      mimeType: Chunk261470
    };
    return this.item = R({}, this.item, Chunk710845), this.reactNativeFilePrepped = true, this
  }
  static async tryConvertToWebP(e, t, n) {
    var r, i, a;
    let o, s = (0, f.n)({
      location: "CloudUpload.maybeConvertToWebP"
    });
    if (!s.enabled) return w.warn("webp conversion skipped for ".concat(n, ": not enabled")), null;
    if (null == e) return w.warn("webp conversion skipped for ".concat(n, ": no file")), null;
    if (null != s.maxFileSizeBytes && e.size > s.maxFileSizeBytes) return w.warn("webp conversion skipped for ".concat(n, ": too big")), null;
    if (t()) return null;
    let l = performance.now(),
      c = {
        compressTimeMs: 0
      };
    try {
      if (o = await (0, A.t3)(e), t()) return null;
      if (o.success && null != o.convertedBlob) w.log("webp conversion worked for ".concat(n, ": ").concat(o.sizeBefore, " -> ").concat(o.sizeAfter, " bytes (").concat(o.compressionRatio.toFixed(2), "x)")), c.convertedFile = new File([o.convertedBlob], e.name, {
        type: "image/webp",
        lastModified: e.lastModified
      }), c.convertedMimeType = "image/webp", c.hashTimeMs = null != (r = o.hashTimeMs) ? r : true;
      else {
        let e = null != (i = o.reason) ? i : A.S8.UNKNOWN_ERROR;
        w.log("webp conversion skipped for ".concat(n, ": ").concat(e)), c.conversionFailureReason = e
      }
    } catch (e) {
      w.warn("webp conversion failed for ".concat(n, ":"), e), c.conversionFailureReason = A.S8.UNKNOWN_ERROR
    }
    let u = Math.round(performance.now() - l);
    return c.compressTimeMs = null != (a = null == o ? true : o.compressTimeMs) ? a : u, c
  }
  handleError(e) {
    this.setStatus("ERROR"), this.error = e, this.trackUploadFinished("ERROR");
    try {
      this.emit("error", e)
    } catch (e) {}
    this.removeAllListeners()
  }
  handleComplete(e) {
    this.setStatus("COMPLETED"), w.log("Upload complete for ".concat(this.id)), this.emit("complete", e), this.removeAllListeners()
  }
  _cancel(e, t) {
    w.log(t), this._aborted = true, this._abortController.abort(), this.trackUploadFinished(e), "COMPLETED" === this.status && this.delete(), this.setStatus(e), this.emit("complete"), this.removeAllListeners()
  }
  cancel() {
    this._cancel("CANCELED", "Cancelled called for ".concat(this.id))
  }
  removeFromMsgDraft() {
    this._cancel("REMOVED_FROM_MSG_DRAFT", "Removed from draft for ".concat(this.id))
  }
  isCancelled() {
    return "CANCELED" === this.status || "REMOVED_FROM_MSG_DRAFT" === this.status
  }
  resetState() {
    return this.status = "NOT_STARTED", this.uploadedFilename = true, this.responseUrl = true, this.error = true, this.startTime = true, this.uploadAnalytics = new j, this.uploadAttempts = 0, this._aborted = false, this._abortController = new AbortController, super.resetState()
  }
  async delete() {
    if (null == this.uploadedFilename) return;
    let e = (0, Chunk983544.F)(this.item.target).getDeleteUploadURL(this.uploadedFilename);
    try {
      await Chunk544891.tn.del(module)
    } catch (e) {}
  }
  setResponseUrl(e) {
    this.responseUrl = e
  }
  setStatus(e) {
    this.status = e
  }
  setFilename(e) {
    this.filename = e
  }
  setUploadedFilename(e) {
    this.uploadedFilename = e
  }
  trackUploadStart() {
    var e;
    Chunk626135.default.track(Chunk981631.rMx.ATTACHMENT_UPLOAD_STARTED, {
      file_size: this.currentSize,
      mime_type: null != (e = this.mimeType) ? module : "unknown",
      video_upload_quality: Chunk740492.ZP.videoUploadQuality,
      data_saving_mode: Chunk740492.ZP.dataSavingMode,
      low_quality_image_mode: Chunk740492.ZP.dataSavingMode,
      channel_id: this.channelId,
      connection_type: Chunk866960.Z.getType(),
      effective_connection_speed: Chunk866960.Z.getEffectiveConnectionSpeed(),
      service_provider: Chunk866960.Z.getServiceProvider()
    })
  }
  trackUploadFinished(e) {
    var t, n, r, i, a;
    let o = null != this.startTime ? performance.now() - this.startTime : false;
    g.default.track(C.rMx.ATTACHMENT_UPLOAD_FINISHED, {
      duration_ms: o,
      file_size: this.currentSize,
      pre_compression_file_size: this.preCompressionSize,
      final_state: e,
      mime_type: null != (t = this.mimeType) ? t : "unknown",
      num_upload_attempts: null != (n = this.uploadAnalytics.numUploadAttempts) ? n : 1,
      error_code: this.error,
      video_upload_quality: h.ZP.videoUploadQuality,
      data_saving_mode: h.ZP.dataSavingMode,
      low_quality_image_mode: h.ZP.dataSavingMode,
      compress_time_ms: this.uploadAnalytics.timing.compressTimeMs,
      get_upload_url_time_ms: this.uploadAnalytics.timing.getUploadUrlTimeMs,
      upload_time_ms: this.uploadAnalytics.timing.uploadTimeMs,
      converted_mime_type: null != (r = this.uploadAnalytics.convertedMimeType) ? r : "unknown",
      image_compression_quality: null != (i = this.uploadAnalytics.imageCompressionQuality) ? i : 0,
      video_compression_quality: null != (a = this.uploadAnalytics.videoCompressionQuality) ? a : "unknown",
      was_converted: null != this.uploadAnalytics.convertedMimeType && this.mimeType !== this.uploadAnalytics.convertedMimeType,
      was_compressed: this.currentSize < this.preCompressionSize,
      source_media_width: this.uploadAnalytics.sourceMediaWidth,
      source_media_height: this.uploadAnalytics.sourceMediaHeight,
      source_media_format: this.uploadAnalytics.sourceMediaFormat,
      source_video_bitrate: this.uploadAnalytics.sourceVideoBitrate,
      video_duration_ms: this.uploadAnalytics.videoDurationMs,
      source_video_profile_name: this.uploadAnalytics.sourceVideoProfile,
      source_video_profile_level: this.uploadAnalytics.sourceVideoLevel,
      target_video_width: this.uploadAnalytics.targetVideoWidth,
      target_video_height: this.uploadAnalytics.targetVideoHeight,
      target_video_bitrate: this.uploadAnalytics.targetVideoBitrate,
      target_video_codec: this.uploadAnalytics.targetVideoCodec,
      target_video_framerate: this.uploadAnalytics.targetVideoFramerate,
      target_video_is_hdr: this.uploadAnalytics.targetVideoIsHdr,
      hevc_is_supported: this.uploadAnalytics.hevcIsSupported,
      progress_update_granularity: this.uploadAnalytics.progressUpdateGranularity,
      source_video_framerate: this.uploadAnalytics.sourceVideoFramerate,
      channel_id: this.channelId,
      hash_time_ms: this.uploadAnalytics.timing.hashTimeMs,
      valid_upload_hash: this.uploadAnalytics.validUploadHash,
      psnr: this.uploadAnalytics.psnr,
      ssim: this.uploadAnalytics.ssim,
      origin: this.uploadAnalytics.origin,
      psnr_measurement_latency_ms: this.uploadAnalytics.psnrMeasurementLatencyMs,
      ssim_measurement_latency_ms: this.uploadAnalytics.ssimMeasurementLatencyMs,
      upload_resumption_count: this.uploadAnalytics.uploadResumptionCount,
      upload_resumption_reason: this.uploadAnalytics.uploadResumptionReason,
      upload_resumption_position: this.uploadAnalytics.uploadResumptionPosition,
      upload_resumption_check_time_ms: this.uploadAnalytics.timing.resumptionCheckTimeMs,
      conversion_failure_reason: this.uploadAnalytics.conversionFailureReason,
      upload_http_client: this._libdiscoreEnabled ? "libdiscore" : "httputils",
      connection_type: m.Z.getType(),
      effective_connection_speed: m.Z.getEffectiveConnectionSpeed(),
      service_provider: m.Z.getServiceProvider()
    })
  }
  constructor(e, t, n, r, i) {
    var a, o, s, l;
    super(e, n), N(this, "status", "NOT_STARTED"), N(this, "channelId", true), N(this, "responseUrl", true), N(this, "currentSize", true), N(this, "preCompressionSize", true), N(this, "postCompressionSize", true), N(this, "loaded", 0), N(this, "reactNativeFileIndex", true), N(this, "error", true), N(this, "reactNativeFilePrepped", false), N(this, "allowOptimization", true), N(this, "startTime", true), N(this, "uploadAnalytics", new j), N(this, "contentHash", true), N(this, "etag", true), N(this, "uploadAttempts", 0), N(this, "_abortController", true), N(this, "_xhr", true), N(this, "_aborted", false), N(this, "_uploadHttpClient", true), N(this, "_libdiscoreEnabled", true), N(this, "_resumptionEnabled", true), N(this, "createResumeAwareProgressFn", e => t => {
      let n = t.loaded + e,
        r = t.total + e,
        i = n - this.loaded;
      this.emit("progress", n, r, i), this.loaded = n
    }), this.channelId = t, this.preCompressionSize = null != (s = null == (a = e.file) ? true : a.size) ? s : 0, this.currentSize = null != (l = null == (o = e.file) ? true : o.size) ? l : 0, this.reactNativeFileIndex = r, null != i && (this.allowOptimization = i), e.platform === I.ow.WEB && null != e.compressionMetadata && (this.mimeType = e.compressionMetadata.originalContentType), this._abortController = new AbortController, null != this.origin && (this.uploadAnalytics.origin = "string" == typeof this.origin ? this.origin : I.BS[this.origin]), this._uploadHttpClient = new S.LD, this._libdiscoreEnabled = false, this._resumptionEnabled = false
  }
}