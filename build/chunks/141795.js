/** Chunk was on web.js **/
/** chunk id: 141795, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  mw: () => j,
  nH: () => k
}), require("./415506.js"), require("./388685.js"), require("./35282.js"), require("./704826.js"), require("./49124.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk261470 = require("./261470.js"),
  Chunk544891 = require("./544891.js"),
  Chunk710845 = require("./710845.js"),
  Chunk432877 = require("./432877.js"),
  Chunk893601 = require("./893601.js"),
  Chunk630755 = require("./630755.js"),
  Chunk171638 = require("./171638.js"),
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

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      C(e, t, n[t])
    })
  }
  return e
}

function R(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function P(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : R(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let w = new Chunk710845.Z("CloudUpload.tsx"),
  D = require("./224497.js").Z;
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
      if (t instanceof o.Pd) throw new x(e, {
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
    }), C(this, "kind", true), C(this, "phase", true), C(this, "messageShort", true), this.name = "ResumableUploadError", this.phase = e, this.kind = o, this.messageShort = s
  }
}
let L = "Content-MD5";
var j = function(e) {
  return e.NOT_STARTED = "NOT_STARTED", e.STARTED = "STARTED", e.UPLOADING = "UPLOADING", e.ERROR = "ERROR", e.COMPLETED = "COMPLETED", e.CANCELED = "CANCELED", e.REMOVED_FROM_MSG_DRAFT = "REMOVED_FROM_MSG_DRAFT", e
}({});
class M {
  constructor() {
    C(this, "numUploadAttempts", true), C(this, "timing", {}), C(this, "compressAndExtractDisabled", true), C(this, "fileAlreadyPrepped", true), C(this, "imageCompressionQuality", true), C(this, "videoCompressionQuality", true), C(this, "convertedMimeType", true), C(this, "sourceMediaWidth", true), C(this, "sourceMediaHeight", true), C(this, "sourceMediaFormat", true), C(this, "sourceVideoBitrate", true), C(this, "sourceVideoFramerate", true), C(this, "videoDurationMs", true), C(this, "sourceVideoProfile", true), C(this, "sourceVideoLevel", true), C(this, "targetVideoWidth", true), C(this, "targetVideoHeight", true), C(this, "targetVideoBitrate", true), C(this, "targetVideoCodec", true), C(this, "targetVideoFramerate", true), C(this, "targetVideoIsHdr", true), C(this, "hevcIsSupported", true), C(this, "progressUpdateGranularity", true), C(this, "validUploadHash", true), C(this, "psnr", true), C(this, "ssim", true), C(this, "origin", true), C(this, "psnrMeasurementLatencyMs", true), C(this, "ssimMeasurementLatencyMs", true), C(this, "uploadResumptionCount", 0), C(this, "uploadResumptionPosition", 0), C(this, "uploadResumptionReason", true), C(this, "conversionFailureReason", true)
  }
}
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
    w.log("Uploading ".concat(this.id)), this.item.platform === Chunk476326.ow.REACT_NATIVE ? t = null != (e = {
      type: this.item.mimeType,
      uri: this.item.uri,
      name: this.item.filename
    }).type && "application/json" !== module.type ? module.type : "application/octet-stream" : (e = this.item.file, t = "application/octet-stream");
    let n = (0, Chunk481981.m)({
      location: "CloudUpload"
    });
    if (require.enableNewRetry) return (0, Chunk596956.Z_)(this.item) && (this._uploadHttpClient = new Chunk596956.Qn, this._libdiscoreEnabled = true), this._resumptionEnabled = require.enableResumption, await this.uploadFileWithResumption(this.responseUrl, module, exports);
    let r = {
      "Content-Type": exports
    };
    true !== this.contentHash && (Chunk392711[L] = this.contentHash);
    let a = N({
      url: this.responseUrl,
      body: module,
      headers: Chunk392711,
      signal: this._abortController.signal,
      onRequestProgress: i().throttle(this.createResumeAwareProgressFn(0), 50),
      rejectWithError: false
    }, this.retryOpts());
    return Chunk544891.tn.put(Chunk261470)
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
        deadline: 30 * E.Z.Millis.SECOND
      },
      signal: this._abortController.signal
    };
    return await this._uploadHttpClient.doUpload(t).then(e => 200 === e.status || 201 === e.status ? this.currentSize : x.rejectionHandler("status_check")(e)).catch(e => {
      if (e instanceof o.Pd && 308 === e.status) {
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
      this.uploadAnalytics.uploadResumptionCount++, e.headers = P(N({}, null != (n = e.headers) ? n : {}), {
        "Content-Range": "bytes ".concat(t, "-").concat(this.currentSize - 1, "/").concat(this.currentSize)
      })
    }
    e.onRequestProgress = i().throttle(this.createResumeAwareProgressFn(t), 50);
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
      backoff: a,
      retries: o
    } = this.retryOpts(), s = {
      url: e,
      body: t,
      headers: {
        "Content-Type": n
      },
      signal: this._abortController.signal,
      onRequestProgress: i().throttle(this.createResumeAwareProgressFn(0), 50),
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
          w.warn("Error uploading ".concat(this.id, ": ").concat(e.message, ", attempting resumption")), this.uploadAnalytics.uploadResumptionReason = e.messageShort, await b.Z.awaitOnline();
          let t = a.fail();
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
    var e, t, n, r, i;
    if ("COMPLETED" === this.status) return;
    if (this.setStatus("STARTED"), this.startTime = performance.now(), this.trackUploadStart(), this.isCancelled()) return void this.handleComplete(this.id);
    this.item.platform !== Chunk476326.ow.WEB || (null == (e = this.item.compressionMetadata) ? true : module.earlyClipboardCompressionAttempted) || await this.maybeConvertToWebP();
    let a = await D.getUploadPayload(this),
      s = (0, Chunk983544.F)(this.item.target),
      c = (0, Chunk171638.G)({
        location: "CloudUpload.upload"
      });
    if (null == Chunk261470.filename || "" === Chunk261470.filename) {
      w.error("File does not have a filename.", JSON.stringify(Chunk261470)), this.handleError(Chunk981631.evJ.INVALID_FILE_ASSET);
      return
    }
    if (Chunk893601.useDetectedFileSize && 0 === this.currentSize && null != this.item.file) try {
      let e = await (0, Chunk630755.M)(this.item.file);
      module > 0 && (this.currentSize = module)
    } catch (e) {
      w.warn("Failed to detect file size, proceeding with original", {
        filename: Chunk261470.filename,
        error: module instanceof Error ? module.message : String(module)
      })
    }
    if (0 === this.currentSize) return void this.handleError(Chunk981631.evJ.INVALID_FILE_ASSET);
    if ((null != (t = this.currentSize) ? exports : 0) > Chunk710845.getMaxFileSize(this.channelId)) return void this.handleError(Chunk981631.evJ.ENTITY_TOO_LARGE);
    if (Chunk432877.ZP.get("upload_fail_50") && .5 > Math.random()) return void setTimeout(() => {
      this.handleError(500)
    }, 1e3);
    let _ = Chunk719755.Z.getCurrentConfig({
        location: "CloudUpload"
      }, {
        autoTrackExposure: true
      }),
      p = null;
    Chunk481981.enabled;
    try {
      w.log("Requesting upload url for ".concat(this.id));
      let e = await this.trackTime("getUploadUrlTimeMs", async () => await Chunk544891.tn.post(P(N({
        url: Chunk710845.getCreateAttachmentURL(this.channelId),
        body: {
          files: [Chunk261470]
        }
      }, this.createAttachmentUrlRetryOpts()), {
        rejectWithError: false
      })));
      this.setResponseUrl(module.body.attachments[0].upload_url), this.setUploadedFilename(module.body.attachments[0].upload_filename)
    } catch (t) {
      let e = null != (r = null == exports || null == (n = exports.body) ? true : require.code) ? Chunk392711 : exports.status;
      module !== Chunk981631.evJ.ENTITY_TOO_LARGE && (w.error("Requesting upload url failed with code ".concat(null != module ? module : JSON.stringify(exports.body), " for ").concat(this.id)), Chunk960048.Z.captureException(exports)), this.handleError(module);
      return
    }
    if (null != Chunk740492) {
      let e = await Chunk740492;
      null != module && (this.contentHash = module)
    }
    try {
      let e = await this.trackTime("uploadTimeMs", async () => await this.uploadFileToCloud());
      if (Chunk481981.enabled && null != module) {
        let t = false,
          n = this.getEtagFromResponse(module);
        if (null != require && (this.etag = require, t = require === this.contentHash), this.uploadAnalytics.validUploadHash = exports, !exports && Chunk481981.enforced) {
          let e = "File ".concat(null != (i = this.filename) ? i : this.id, " received incorrect checksum after upload: got ").concat(this.etag, ", expected ").concat(this.contentHash);
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
      return await (0, Chunk510990.J)(this, null != (e = this.reactNativeFileIndex) ? module : 0)
    });
    if (null == require || null == require.file) return w.error("Failed to get compressed file for ".concat(this.id)), this;
    let r = require.uri,
      i = require.file.name;
    if ((0, Chunk476326.rG)(require.file) && (this.uploadAnalytics.imageCompressionQuality = require.file.imageCompressionQuality, this.uploadAnalytics.videoCompressionQuality = require.file.videoCompressionQuality, require.file.isImage && (this.uploadAnalytics.sourceMediaWidth = require.file.sourceWidth, this.uploadAnalytics.sourceMediaHeight = require.file.sourceHeight), true !== require.file.videoMetadata && (this.uploadAnalytics.sourceMediaWidth = require.file.videoMetadata.width, this.uploadAnalytics.sourceMediaHeight = require.file.videoMetadata.height, this.uploadAnalytics.sourceMediaFormat = require.file.videoMetadata.format, this.uploadAnalytics.sourceVideoBitrate = require.file.videoMetadata.bitRate, this.uploadAnalytics.sourceVideoFramerate = require.file.videoMetadata.frameRate, this.uploadAnalytics.videoDurationMs = require.file.videoMetadata.durationMs, this.uploadAnalytics.sourceVideoProfile = require.file.videoMetadata.sourceProfile, this.uploadAnalytics.sourceVideoLevel = require.file.videoMetadata.sourceLevel), true !== require.file.encodingConfig && (this.uploadAnalytics.targetVideoWidth = require.file.encodingConfig.targetWidth, this.uploadAnalytics.targetVideoHeight = require.file.encodingConfig.targetHeight, this.uploadAnalytics.targetVideoBitrate = require.file.encodingConfig.targetBitrate, this.uploadAnalytics.targetVideoCodec = require.file.encodingConfig.useHEVC ? "hvc1" : "avc1", this.uploadAnalytics.targetVideoFramerate = require.file.encodingConfig.frameRate, this.uploadAnalytics.targetVideoIsHdr = require.file.encodingConfig.createHDR, this.uploadAnalytics.hevcIsSupported = require.file.encodingConfig.hevcIsSupported, this.uploadAnalytics.progressUpdateGranularity = require.file.encodingConfig.progressUpdateGranularity), this.uploadAnalytics.psnr = require.file.psnr, this.uploadAnalytics.ssim = require.file.ssim, this.uploadAnalytics.origin = require.file.origin, this.uploadAnalytics.psnrMeasurementLatencyMs = require.file.psnrMeasurementLatencyMs, this.uploadAnalytics.ssimMeasurementLatencyMs = require.file.ssimMeasurementLatencyMs), this.filename = i, null == i || null == Chunk392711 || null == require.file.type) throw w.error("Insufficient file data: ".concat({
      filename: i,
      uri: Chunk392711,
      type: require.file.type
    }, " for ").concat(this.id)), Error("Insufficient file data: ".concat({
      filename: i,
      uri: Chunk392711,
      type: require.file.type
    }));
    let a = null == (e = i.split(".").pop()) ? true : module.toLowerCase(),
      o = "jpg" === Chunk261470 || "jpeg" === Chunk261470 ? "image/jpeg" : require.file.type;
    this.uploadAnalytics.convertedMimeType = Chunk544891;
    let s = null != (t = require.fileSize) ? exports : (await (0, Chunk861990.Lc)(Chunk392711)).size;
    if (this.postCompressionSize = Chunk710845, this.currentSize = Chunk710845, null == Chunk710845) throw w.error("Size missing from file data for ".concat(this.id)), Error("Size missing from file data");
    w.log("Completed compression and conversion. Output size=".concat(Chunk710845, " bytes; filename=").concat(i, "; uri=").concat(Chunk392711, "; mimeType=").concat(Chunk544891, " for ").concat(this.id));
    let l = {
      uri: Chunk392711,
      filename: i,
      mimeType: Chunk544891
    };
    return this.item = N({}, this.item, Chunk432877), this.reactNativeFilePrepped = true, this
  }
  async maybeConvertToWebP() {
    var e, t;
    let n;
    if (!(0, Chunk893601.U)({
        location: "CloudUpload.maybeConvertToWebP"
      }).enabled) return;
    if (null == this.item.file) return void w.warn("webp conversion skipped for ".concat(this.id, ": no file"));
    if (this._aborted) return;
    let r = performance.now();
    try {
      if (n = await (0, Chunk125186.lG)(this.item.file), this._aborted) return;
      if (require.success) this.item.file = (0, Chunk125186.ub)(require), this.currentSize = this.item.file.size, this.uploadAnalytics.convertedMimeType = "image/webp", null != require.hashTimeMs && (this.uploadAnalytics.timing.hashTimeMs = require.hashTimeMs), w.log("webp conversion worked for ".concat(this.id, ": ").concat(require.sizeBefore, " -> ").concat(require.sizeAfter, " bytes (").concat(require.compressionRatio.toFixed(2), "x)"));
      else {
        let t = null != (e = require.reason) ? module : "unknown";
        this.uploadAnalytics.conversionFailureReason = exports, w.log("webp conversion skipped for ".concat(this.id, ": ").concat(exports))
      }
    } catch (e) {
      this.uploadAnalytics.conversionFailureReason = "unknown_error", w.warn("webp conversion failed for ".concat(this.id, ":"), module)
    }
    this.uploadAnalytics.timing.compressTimeMs = null != (t = null == require ? true : require.compressTimeMs) ? exports : Math.round(performance.now() - Chunk392711)
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
    return this.status = "NOT_STARTED", this.uploadedFilename = true, this.responseUrl = true, this.error = true, this.startTime = true, this.uploadAnalytics = new M, this.uploadAttempts = 0, this._aborted = false, this._abortController = new AbortController, super.resetState()
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
    var t, n, r, i, a, o, s;
    let l = null != this.startTime ? performance.now() - this.startTime : false,
      c = this.item.platform === v.ow.WEB && null != (n = null == (t = this.item.compressionMetadata) ? true : t.compressTimeMs) ? n : 0,
      u = l >= 0 ? l + c : false;
    m.default.track(A.rMx.ATTACHMENT_UPLOAD_FINISHED, {
      duration_ms: u,
      file_size: this.currentSize,
      pre_compression_file_size: this.preCompressionSize,
      final_state: e,
      mime_type: null != (r = this.mimeType) ? r : "unknown",
      num_upload_attempts: null != (i = this.uploadAnalytics.numUploadAttempts) ? i : 1,
      error_code: this.error,
      video_upload_quality: p.ZP.videoUploadQuality,
      data_saving_mode: p.ZP.dataSavingMode,
      low_quality_image_mode: p.ZP.dataSavingMode,
      compress_time_ms: this.uploadAnalytics.timing.compressTimeMs,
      get_upload_url_time_ms: this.uploadAnalytics.timing.getUploadUrlTimeMs,
      upload_time_ms: this.uploadAnalytics.timing.uploadTimeMs,
      converted_mime_type: null != (a = this.uploadAnalytics.convertedMimeType) ? a : "unknown",
      image_compression_quality: null != (o = this.uploadAnalytics.imageCompressionQuality) ? o : 0,
      video_compression_quality: null != (s = this.uploadAnalytics.videoCompressionQuality) ? s : "unknown",
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
      connection_type: h.Z.getType(),
      effective_connection_speed: h.Z.getEffectiveConnectionSpeed(),
      service_provider: h.Z.getServiceProvider()
    })
  }
  constructor(e, t, n, r) {
    var i, a, o, s;
    super(e, n), C(this, "status", "NOT_STARTED"), C(this, "channelId", true), C(this, "responseUrl", true), C(this, "currentSize", true), C(this, "preCompressionSize", true), C(this, "postCompressionSize", true), C(this, "loaded", 0), C(this, "reactNativeFileIndex", true), C(this, "error", true), C(this, "reactNativeFilePrepped", false), C(this, "startTime", true), C(this, "uploadAnalytics", new M), C(this, "contentHash", true), C(this, "etag", true), C(this, "uploadAttempts", 0), C(this, "_abortController", true), C(this, "_xhr", true), C(this, "_aborted", false), C(this, "_uploadHttpClient", true), C(this, "_libdiscoreEnabled", true), C(this, "_resumptionEnabled", true), C(this, "createResumeAwareProgressFn", e => t => {
      let n = t.loaded + e,
        r = t.total + e,
        i = n - this.loaded;
      this.emit("progress", n, r, i), this.loaded = n
    }), this.channelId = t, this.preCompressionSize = null != (o = null == (i = e.file) ? true : i.size) ? o : 0, this.currentSize = null != (s = null == (a = e.file) ? true : a.size) ? s : 0, this.reactNativeFileIndex = r, this._abortController = new AbortController, null != this.origin && (this.uploadAnalytics.origin = "string" == typeof this.origin ? this.origin : v.BS[this.origin]), e.platform === v.ow.WEB && null != e.compressionMetadata && (this.preCompressionSize = e.compressionMetadata.preCompressionSize, this.uploadAnalytics.timing.compressTimeMs = e.compressionMetadata.compressTimeMs, this.uploadAnalytics.convertedMimeType = e.compressionMetadata.convertedMimeType, this.uploadAnalytics.conversionFailureReason = e.compressionMetadata.conversionFailureReason, this.uploadAnalytics.timing.hashTimeMs = e.compressionMetadata.hashTimeMs, this.mimeType = e.compressionMetadata.originalContentType), this._uploadHttpClient = new T.LD, this._libdiscoreEnabled = false, this._resumptionEnabled = false
  }
}