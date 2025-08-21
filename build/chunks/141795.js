/** Chunk was on web.js **/
/** chunk id: 141795, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  mw: () => k,
  nH: () => G
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
  Chunk873186 = require("./873186.js"),
  Chunk481981 = require("./481981.js"),
  Chunk740492 = require("./740492.js"),
  Chunk866960 = require("./866960.js"),
  Chunk594174 = require("./594174.js"),
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

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function P(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      R(e, t, n[t])
    })
  }
  return e
}

function w(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : w(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let x = new Chunk710845.Z("CloudUpload.tsx"),
  L = require("./224497.js").Z;
class j extends Error {
  static getErrorKind(e, t) {
    var n;
    let r = null != (n = null == t ? true : t.status) ? n : 0,
      i = r >= 500 && r < 600,
      a = e.message.toLowerCase().includes("network") || e.message.toLowerCase().includes("terminated") || e.message.toLowerCase().includes("offline") || e.message.toLowerCase().includes("changed");
    return i ? "server_error" : a ? "network_error" : "unknown"
  }
  static rejectionHandler(e) {
    return t => {
      if (t instanceof o.Pd) throw new j(e, {
        response: t
      });
      if (t instanceof Error) throw new j(e, {
        cause: t
      });
      throw new j(e, {
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
    } = t, o = j.getErrorKind(null != i ? i : Error("".concat(null != (n = null == a ? true : a.text) ? n : "Unknown error")), a), s = "server_error" === o ? "".concat(e, ":").concat(o, ":status_").concat(null != (r = null == a ? true : a.status) ? r : 0) : "".concat(e, ":").concat(o);
    super(s, {
      cause: i
    }), R(this, "kind", true), R(this, "phase", true), R(this, "messageShort", true), this.name = "ResumableUploadError", this.phase = e, this.kind = o, this.messageShort = s
  }
}
let M = "Content-MD5";
var k = function(e) {
  return e.NOT_STARTED = "NOT_STARTED", e.STARTED = "STARTED", e.UPLOADING = "UPLOADING", e.ERROR = "ERROR", e.COMPLETED = "COMPLETED", e.CANCELED = "CANCELED", e
}({});
class U {
  constructor() {
    R(this, "numUploadAttempts", true), R(this, "timing", {}), R(this, "compressAndExtractDisabled", true), R(this, "fileAlreadyPrepped", true), R(this, "imageCompressionQuality", true), R(this, "videoCompressionQuality", true), R(this, "convertedMimeType", true), R(this, "sourceMediaWidth", true), R(this, "sourceMediaHeight", true), R(this, "sourceMediaFormat", true), R(this, "sourceVideoBitrate", true), R(this, "sourceVideoFramerate", true), R(this, "videoDurationMs", true), R(this, "sourceVideoProfile", true), R(this, "sourceVideoLevel", true), R(this, "targetVideoWidth", true), R(this, "targetVideoHeight", true), R(this, "targetVideoBitrate", true), R(this, "targetVideoCodec", true), R(this, "targetVideoFramerate", true), R(this, "targetVideoIsHdr", true), R(this, "hevcIsSupported", true), R(this, "progressUpdateGranularity", true), R(this, "validUploadHash", true), R(this, "psnr", true), R(this, "ssim", true), R(this, "origin", true), R(this, "psnrMeasurementLatencyMs", true), R(this, "ssimMeasurementLatencyMs", true), R(this, "uploadResumptionCount", 0), R(this, "uploadResumptionPosition", 0), R(this, "uploadResumptionReason", true), R(this, "conversionFailureReason", true)
  }
}
class G extends Chunk476326.ZP {
  static fromJson(e) {
    let {
      item: t,
      channelId: n,
      showLargeMessageDialog: r,
      reactNativeFileIndex: i
    } = e, a = new G(t, n, r, i);
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
    return this._libdiscoreEnabled || this.item.platform !== Chunk476326.ow.REACT_NATIVE
  }
  async uploadFileToCloud() {
    let e, t;
    if (null == this.responseUrl) throw Error("_uploadFileToCloud - responseUrl is not set");
    x.log("Uploading ".concat(this.id)), this.item.platform === Chunk476326.ow.REACT_NATIVE ? t = null != (e = {
      type: this.item.mimeType,
      uri: this.item.uri,
      name: this.item.filename
    }).type && "application/json" !== module.type ? module.type : "application/octet-stream" : (e = this.item.file, t = "application/octet-stream");
    let n = (0, Chunk873186.G)({
        location: "CloudUpload"
      }).enableResumableUploads,
      r = (0, Chunk481981.m)({
        location: "CloudUpload"
      }).enableResumableUploads;
    if (Chunk392711 && (0, Chunk596956.Z_)(this.item) && (this._uploadHttpClient = new Chunk596956.Qn, this._libdiscoreEnabled = true), require || Chunk392711) return await this.uploadFileWithResumption(this.responseUrl, module, exports);
    let a = {
      "Content-Type": exports
    };
    true !== this.contentHash && (Chunk261470[M] = this.contentHash);
    let s = P({
      url: this.responseUrl,
      body: module,
      headers: Chunk261470,
      signal: this._abortController.signal,
      onRequestProgress: i().throttle(this.createResumeAwareProgressFn(0), 50),
      rejectWithError: false
    }, this.retryOpts());
    return Chunk544891.tn.put(Chunk710845)
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
        deadline: 30 * y.Z.Millis.SECOND
      },
      signal: this._abortController.signal
    };
    return await this._uploadHttpClient.doUpload(t).then(e => 200 === e.status || 201 === e.status ? this.currentSize : j.rejectionHandler("status_check")(e)).catch(e => {
      if (e instanceof o.Pd && 308 === e.status) {
        var t;
        let n = this.parseRangeHeader(null != (t = e.headers.range) ? t : "");
        return null != n ? n[1] + 1 : 0
      }
      return j.rejectionHandler("status_check")(e)
    })
  }
  async startOrResumeUpload(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 0;
    if (x.log("Attempting to upload attachment with resumeFrom: ".concat(t, " and attempts: ").concat(this.uploadAttempts)), t > 0) {
      var n;
      this.uploadAnalytics.uploadResumptionCount++, e.headers = D(P({}, null != (n = e.headers) ? n : {}), {
        "Content-Range": "bytes ".concat(t, "-").concat(this.currentSize - 1, "/").concat(this.currentSize)
      })
    }
    e.onRequestProgress = i().throttle(this.createResumeAwareProgressFn(t), 50);
    let r = await this._uploadHttpClient.doUpload(e, {
      fileByteRange: {
        start: t
      }
    }).catch(j.rejectionHandler("upload"));
    if (200 !== r.status && 201 !== r.status) throw new j("upload", {
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
        if (e instanceof j && e.canRetry()) {
          x.warn("Error uploading ".concat(this.id, ": ").concat(e.message, ", attempting resumption")), this.uploadAnalytics.uploadResumptionReason = e.messageShort, await O.Z.awaitOnline();
          let t = a.fail();
          x.log("Waiting ".concat(t, "ms before attachment upload attempt ").concat(this.uploadAttempts + 1)), await new Promise(e => setTimeout(e, t))
        } else throw x.warn("Unrecoverable error uploading ".concat(this.id, ": ").concat(e.message)), e
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
    if (this.setStatus("STARTED"), this.startTime = performance.now(), this.trackUploadStart(), "CANCELED" === this.status) return void this.handleComplete(this.id);
    this.item.platform === Chunk476326.ow.WEB && (null == (e = this.item.compressionMetadata) ? true : module.convertedMimeType) !== "image/webp" && await this.maybeConvertToWebP();
    let a = await L.getUploadPayload(this),
      s = (0, Chunk983544.F)(this.item.target),
      c = (0, Chunk171638.G)({
        location: "CloudUpload.upload"
      });
    if (null == Chunk261470.filename || "" === Chunk261470.filename) {
      x.error("File does not have a filename.", JSON.stringify(Chunk261470)), this.handleError(Chunk981631.evJ.INVALID_FILE_ASSET);
      return
    }
    if (Chunk893601.useDetectedFileSize && 0 === this.currentSize && null != this.item.file) try {
      let e = await (0, Chunk630755.M)(this.item.file);
      module > 0 && (this.currentSize = module)
    } catch (e) {
      x.warn("Failed to detect file size, proceeding with original", {
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
    Chunk873186.enabled;
    try {
      x.log("Requesting upload url for ".concat(this.id));
      let e = await this.trackTime("getUploadUrlTimeMs", async () => await Chunk544891.tn.post(D(P({
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
      module !== Chunk981631.evJ.ENTITY_TOO_LARGE && (x.error("Requesting upload url failed with code ".concat(null != module ? module : JSON.stringify(exports.body), " for ").concat(this.id)), Chunk960048.Z.captureException(exports)), this.handleError(module);
      return
    }
    if (null != Chunk481981) {
      let e = await Chunk481981;
      null != module && (this.contentHash = module)
    }
    try {
      let e = await this.trackTime("uploadTimeMs", async () => await this.uploadFileToCloud());
      if (Chunk873186.enabled && null != module) {
        let t = false,
          n = this.getEtagFromResponse(module);
        if (null != require && (this.etag = require, t = require === this.contentHash), this.uploadAnalytics.validUploadHash = exports, !exports && Chunk873186.enforced) {
          let e = "File ".concat(null != (i = this.filename) ? i : this.id, " received incorrect checksum after upload: got ").concat(this.etag, ", expected ").concat(this.contentHash);
          x.error(module), Chunk960048.Z.captureMessage(module), this.handleError(Chunk981631.evJ.INVALID_FILE_ASSET);
          return
        }
      }
      this.trackUploadFinished("COMPLETED"), this.handleComplete(module)
    } catch (e) {
      "CANCELED" === this.status ? this.handleComplete(module) : (x.info("Error: status ".concat(module.status, " for ").concat(this.id)), this.handleError(module))
    }
  }
  async reactNativeCompressAndExtractData() {
    var e, t;
    if (!(0, Chunk983544.F)(this.item.target).shouldReactNativeCompressUploads) return this.uploadAnalytics.compressAndExtractDisabled = true, x.log("reactNativeCompressAndExtractData() disabled by upload target"), this;
    if (true === this.reactNativeFilePrepped) return this.uploadAnalytics.fileAlreadyPrepped = true, x.log("reactNativeCompressAndExtractData() file already prepped - ".concat(this.id)), this;
    x.log("Starting compression/conversion for ".concat(this.id));
    let n = await this.trackTime("compressTimeMs", async () => {
      var e;
      return await (0, Chunk510990.J)(this, null != (e = this.reactNativeFileIndex) ? module : 0)
    });
    if (null == require || null == require.file) return x.error("Failed to get compressed file for ".concat(this.id)), this;
    let r = require.uri,
      i = require.file.name;
    if ((0, Chunk476326.rG)(require.file) && (this.uploadAnalytics.imageCompressionQuality = require.file.imageCompressionQuality, this.uploadAnalytics.videoCompressionQuality = require.file.videoCompressionQuality, require.file.isImage && (this.uploadAnalytics.sourceMediaWidth = require.file.sourceWidth, this.uploadAnalytics.sourceMediaHeight = require.file.sourceHeight), true !== require.file.videoMetadata && (this.uploadAnalytics.sourceMediaWidth = require.file.videoMetadata.width, this.uploadAnalytics.sourceMediaHeight = require.file.videoMetadata.height, this.uploadAnalytics.sourceMediaFormat = require.file.videoMetadata.format, this.uploadAnalytics.sourceVideoBitrate = require.file.videoMetadata.bitRate, this.uploadAnalytics.sourceVideoFramerate = require.file.videoMetadata.frameRate, this.uploadAnalytics.videoDurationMs = require.file.videoMetadata.durationMs, this.uploadAnalytics.sourceVideoProfile = require.file.videoMetadata.sourceProfile, this.uploadAnalytics.sourceVideoLevel = require.file.videoMetadata.sourceLevel), true !== require.file.encodingConfig && (this.uploadAnalytics.targetVideoWidth = require.file.encodingConfig.targetWidth, this.uploadAnalytics.targetVideoHeight = require.file.encodingConfig.targetHeight, this.uploadAnalytics.targetVideoBitrate = require.file.encodingConfig.targetBitrate, this.uploadAnalytics.targetVideoCodec = require.file.encodingConfig.useHEVC ? "hvc1" : "avc1", this.uploadAnalytics.targetVideoFramerate = require.file.encodingConfig.frameRate, this.uploadAnalytics.targetVideoIsHdr = require.file.encodingConfig.createHDR, this.uploadAnalytics.hevcIsSupported = require.file.encodingConfig.hevcIsSupported, this.uploadAnalytics.progressUpdateGranularity = require.file.encodingConfig.progressUpdateGranularity), this.uploadAnalytics.psnr = require.file.psnr, this.uploadAnalytics.ssim = require.file.ssim, this.uploadAnalytics.origin = require.file.origin, this.uploadAnalytics.psnrMeasurementLatencyMs = require.file.psnrMeasurementLatencyMs, this.uploadAnalytics.ssimMeasurementLatencyMs = require.file.ssimMeasurementLatencyMs), this.filename = i, null == i || null == Chunk392711 || null == require.file.type) throw x.error("Insufficient file data: ".concat({
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
    if (this.postCompressionSize = Chunk710845, this.currentSize = Chunk710845, null == Chunk710845) throw x.error("Size missing from file data for ".concat(this.id)), Error("Size missing from file data");
    x.log("Completed compression and conversion. Output size=".concat(Chunk710845, " bytes; filename=").concat(i, "; uri=").concat(Chunk392711, "; mimeType=").concat(Chunk544891, " for ").concat(this.id));
    let l = {
      uri: Chunk392711,
      filename: i,
      mimeType: Chunk544891
    };
    return this.item = P({}, this.item, Chunk432877), this.reactNativeFilePrepped = true, this
  }
  async maybeConvertToWebP() {
    var e, t, n;
    let r;
    if (!(0, Chunk893601.U)({
        location: "CloudUpload.maybeConvertToWebP"
      }).enabled) return;
    if (null == this.item.file) return void x.warn("webp conversion skipped for ".concat(this.id, ": no file"));
    if (this._aborted) return;
    let i = performance.now();
    try {
      if (r = await (0, Chunk125186.lG)(this.item.file), this._aborted) return;
      if (Chunk392711.success) this.item.file = (0, Chunk125186.ub)(Chunk392711), this.currentSize = this.item.file.size, this.uploadAnalytics.convertedMimeType = "image/webp", null != Chunk392711.hashTimeMs && (this.uploadAnalytics.timing.hashTimeMs = Chunk392711.hashTimeMs), x.log("webp conversion worked for ".concat(this.id, ": ").concat(Chunk392711.sizeBefore, " -> ").concat(Chunk392711.sizeAfter, " bytes (").concat(Chunk392711.compressionRatio.toFixed(2), "x)"));
      else {
        let n = null != (e = Chunk392711.reason) ? module : "unknown";
        if (this.uploadAnalytics.conversionFailureReason = require, x.log("webp conversion skipped for ".concat(this.id, ": ").concat(require)), require === Chunk125186.S8.INSUFFICIENT_SAVINGS || require === Chunk125186.S8.PIXEL_HASH_MISMATCH) {
          let e = {
            channelId: this.channelId,
            userId: null == (t = Chunk594174.default.getCurrentUser()) ? true : exports.id,
            originalSize: this.item.file.size,
            fileName: this.filename,
            origin: this.uploadAnalytics.origin
          };
          Chunk960048.Z.captureMessage("webp compression failure: " + require, {
            tags: {
              conversion_failure: require,
              feature: "webp_compression"
            },
            extra: module
          })
        }
      }
    } catch (e) {
      this.uploadAnalytics.conversionFailureReason = "unknown_error", x.warn("webp conversion failed for ".concat(this.id, ":"), module)
    }
    this.uploadAnalytics.timing.compressTimeMs = null != (n = null == Chunk392711 ? true : Chunk392711.compressTimeMs) ? require : Math.round(performance.now() - i)
  }
  handleError(e) {
    this.setStatus("ERROR"), this.error = e, this.trackUploadFinished("ERROR");
    try {
      this.emit("error", e)
    } catch (e) {}
    this.removeAllListeners()
  }
  handleComplete(e) {
    this.setStatus("COMPLETED"), x.log("Upload complete for ".concat(this.id)), this.emit("complete", e), this.removeAllListeners()
  }
  cancel() {
    x.log("Cancelled called for ".concat(this.id)), this._aborted = true, this._abortController.abort(), this.trackUploadFinished("CANCELED"), "COMPLETED" === this.status && this.delete(), this.setStatus("CANCELED"), this.emit("complete"), this.removeAllListeners()
  }
  resetState() {
    return this.status = "NOT_STARTED", this.uploadedFilename = true, this.responseUrl = true, this.error = true, this.startTime = true, this.uploadAnalytics = new U, this.uploadAttempts = 0, this._aborted = false, this._abortController = new AbortController, super.resetState()
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
    E.default.track(N.rMx.ATTACHMENT_UPLOAD_FINISHED, {
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
  constructor(e, t, n, r) {
    var i, a, o, s;
    super(e, n), R(this, "status", "NOT_STARTED"), R(this, "channelId", true), R(this, "responseUrl", true), R(this, "currentSize", true), R(this, "preCompressionSize", true), R(this, "postCompressionSize", true), R(this, "loaded", 0), R(this, "reactNativeFileIndex", true), R(this, "error", true), R(this, "reactNativeFilePrepped", false), R(this, "startTime", true), R(this, "uploadAnalytics", new U), R(this, "contentHash", true), R(this, "etag", true), R(this, "uploadAttempts", 0), R(this, "_abortController", true), R(this, "_xhr", true), R(this, "_aborted", false), R(this, "_uploadHttpClient", true), R(this, "_libdiscoreEnabled", true), R(this, "createResumeAwareProgressFn", e => t => {
      let n = t.loaded + e,
        r = t.total + e,
        i = n - this.loaded;
      this.emit("progress", n, r, i), this.loaded = n
    }), this.channelId = t, this.preCompressionSize = null != (o = null == (i = e.file) ? true : i.size) ? o : 0, this.currentSize = null != (s = null == (a = e.file) ? true : a.size) ? s : 0, this.reactNativeFileIndex = r, this._abortController = new AbortController, null != this.origin && (this.uploadAnalytics.origin = "string" == typeof this.origin ? this.origin : T.BS[this.origin]), e.platform === T.ow.WEB && null != e.compressionMetadata && (this.preCompressionSize = e.compressionMetadata.preCompressionSize, this.uploadAnalytics.timing.compressTimeMs = e.compressionMetadata.compressTimeMs, this.uploadAnalytics.convertedMimeType = e.compressionMetadata.convertedMimeType, this.uploadAnalytics.conversionFailureReason = e.compressionMetadata.conversionFailureReason, this.uploadAnalytics.timing.hashTimeMs = e.compressionMetadata.hashTimeMs, this.mimeType = e.compressionMetadata.originalContentType), this._uploadHttpClient = new A.LD, this._libdiscoreEnabled = false
  }
}