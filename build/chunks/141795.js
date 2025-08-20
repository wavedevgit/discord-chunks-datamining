/** Chunk was on web.js **/
/** chunk id: 141795, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  mw: () => M,
  nH: () => U
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

function w(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : P(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let D = new Chunk710845.Z("CloudUpload.tsx"),
  x = require("./224497.js").Z;
class L extends Error {
  static getErrorKind(e, t) {
    var n;
    let r = null != (n = null == t ? true : t.status) ? n : 0,
      i = r >= 500 && r < 600,
      a = e.message.toLowerCase().includes("network") || e.message.toLowerCase().includes("terminated") || e.message.toLowerCase().includes("offline") || e.message.toLowerCase().includes("changed");
    return i ? "server_error" : a ? "network_error" : "unknown"
  }
  static rejectionHandler(e) {
    return t => {
      if (t instanceof o.Pd) throw new L(e, {
        response: t
      });
      if (t instanceof Error) throw new L(e, {
        cause: t
      });
      throw new L(e, {
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
    } = t, o = L.getErrorKind(null != i ? i : Error("".concat(null != (n = null == a ? true : a.text) ? n : "Unknown error")), a), s = "server_error" === o ? "".concat(e, ":").concat(o, ":status_").concat(null != (r = null == a ? true : a.status) ? r : 0) : "".concat(e, ":").concat(o);
    super(s, {
      cause: i
    }), N(this, "kind", true), N(this, "phase", true), N(this, "messageShort", true), this.name = "ResumableUploadError", this.phase = e, this.kind = o, this.messageShort = s
  }
}
let j = "Content-MD5";
var M = function(e) {
  return e.NOT_STARTED = "NOT_STARTED", e.STARTED = "STARTED", e.UPLOADING = "UPLOADING", e.ERROR = "ERROR", e.COMPLETED = "COMPLETED", e.CANCELED = "CANCELED", e
}({});
class k {
  constructor() {
    N(this, "numUploadAttempts", true), N(this, "timing", {}), N(this, "compressAndExtractDisabled", true), N(this, "fileAlreadyPrepped", true), N(this, "imageCompressionQuality", true), N(this, "videoCompressionQuality", true), N(this, "convertedMimeType", true), N(this, "sourceMediaWidth", true), N(this, "sourceMediaHeight", true), N(this, "sourceMediaFormat", true), N(this, "sourceVideoBitrate", true), N(this, "sourceVideoFramerate", true), N(this, "videoDurationMs", true), N(this, "sourceVideoProfile", true), N(this, "sourceVideoLevel", true), N(this, "targetVideoWidth", true), N(this, "targetVideoHeight", true), N(this, "targetVideoBitrate", true), N(this, "targetVideoCodec", true), N(this, "targetVideoFramerate", true), N(this, "targetVideoIsHdr", true), N(this, "hevcIsSupported", true), N(this, "progressUpdateGranularity", true), N(this, "validUploadHash", true), N(this, "psnr", true), N(this, "ssim", true), N(this, "origin", true), N(this, "psnrMeasurementLatencyMs", true), N(this, "ssimMeasurementLatencyMs", true), N(this, "uploadResumptionCount", 0), N(this, "uploadResumptionPosition", 0), N(this, "uploadResumptionReason", true), N(this, "conversionFailureReason", true)
  }
}
class U extends Chunk476326.ZP {
  static fromJson(e) {
    let {
      item: t,
      channelId: n,
      showLargeMessageDialog: r,
      reactNativeFileIndex: i
    } = e, a = new U(t, n, r, i);
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
    D.log("Uploading ".concat(this.id)), this.item.platform === Chunk476326.ow.REACT_NATIVE ? t = null != (e = {
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
    true !== this.contentHash && (Chunk261470[j] = this.contentHash);
    let s = R({
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
        deadline: 30 * b.Z.Millis.SECOND
      },
      signal: this._abortController.signal
    };
    return await this._uploadHttpClient.doUpload(t).then(e => 200 === e.status || 201 === e.status ? this.currentSize : L.rejectionHandler("status_check")(e)).catch(e => {
      if (e instanceof o.Pd && 308 === e.status) {
        var t;
        let n = this.parseRangeHeader(null != (t = e.headers.range) ? t : "");
        return null != n ? n[1] + 1 : 0
      }
      return L.rejectionHandler("status_check")(e)
    })
  }
  async startOrResumeUpload(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 0;
    if (D.log("Attempting to upload attachment with resumeFrom: ".concat(t, " and attempts: ").concat(this.uploadAttempts)), t > 0) {
      var n;
      this.uploadAnalytics.uploadResumptionCount++, e.headers = w(R({}, null != (n = e.headers) ? n : {}), {
        "Content-Range": "bytes ".concat(t, "-").concat(this.currentSize - 1, "/").concat(this.currentSize)
      })
    }
    e.onRequestProgress = i().throttle(this.createResumeAwareProgressFn(t), 50);
    let r = await this._uploadHttpClient.doUpload(e, {
      fileByteRange: {
        start: t
      }
    }).catch(L.rejectionHandler("upload"));
    if (200 !== r.status && 201 !== r.status) throw new L("upload", {
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
        if (e instanceof L && e.canRetry()) {
          D.warn("Error uploading ".concat(this.id, ": ").concat(e.message, ", attempting resumption")), this.uploadAnalytics.uploadResumptionReason = e.messageShort, await y.Z.awaitOnline();
          let t = a.fail();
          D.log("Waiting ".concat(t, "ms before attachment upload attempt ").concat(this.uploadAttempts + 1)), await new Promise(e => setTimeout(e, t))
        } else throw D.warn("Unrecoverable error uploading ".concat(this.id, ": ").concat(e.message)), e
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
    var e, t, n, r;
    if ("COMPLETED" === this.status) return;
    if (this.setStatus("STARTED"), this.startTime = performance.now(), this.trackUploadStart(), "CANCELED" === this.status) return void this.handleComplete(this.id);
    this.item.platform === Chunk476326.ow.WEB && await this.maybeConvertToWebP();
    let i = await x.getUploadPayload(this),
      a = (0, Chunk983544.F)(this.item.target),
      s = (0, Chunk171638.G)({
        location: "CloudUpload.upload"
      });
    if (null == i.filename || "" === i.filename) {
      D.error("File does not have a filename.", JSON.stringify(i)), this.handleError(Chunk981631.evJ.INVALID_FILE_ASSET);
      return
    }
    if (Chunk710845.useDetectedFileSize && 0 === this.currentSize && null != this.item.file) try {
      let e = await (0, Chunk630755.M)(this.item.file);
      module > 0 && (this.currentSize = module)
    } catch (e) {
      D.warn("Failed to detect file size, proceeding with original", {
        filename: i.filename,
        error: module instanceof Error ? module.message : String(module)
      })
    }
    if (0 === this.currentSize) return void this.handleError(Chunk981631.evJ.INVALID_FILE_ASSET);
    if ((null != (e = this.currentSize) ? module : 0) > Chunk261470.getMaxFileSize(this.channelId)) return void this.handleError(Chunk981631.evJ.ENTITY_TOO_LARGE);
    if (Chunk432877.ZP.get("upload_fail_50") && .5 > Math.random()) return void setTimeout(() => {
      this.handleError(500)
    }, 1e3);
    let c = Chunk719755.Z.getCurrentConfig({
        location: "CloudUpload"
      }, {
        autoTrackExposure: true
      }),
      _ = null;
    Chunk893601.enabled;
    try {
      D.log("Requesting upload url for ".concat(this.id));
      let e = await this.trackTime("getUploadUrlTimeMs", async () => await Chunk544891.tn.post(w(R({
        url: Chunk261470.getCreateAttachmentURL(this.channelId),
        body: {
          files: [i]
        }
      }, this.createAttachmentUrlRetryOpts()), {
        rejectWithError: false
      })));
      this.setResponseUrl(module.body.attachments[0].upload_url), this.setUploadedFilename(module.body.attachments[0].upload_filename)
    } catch (r) {
      let e = null != (n = null == Chunk392711 || null == (t = Chunk392711.body) ? true : exports.code) ? require : Chunk392711.status;
      module !== Chunk981631.evJ.ENTITY_TOO_LARGE && (D.error("Requesting upload url failed with code ".concat(null != module ? module : JSON.stringify(Chunk392711.body), " for ").concat(this.id)), Chunk960048.Z.captureException(Chunk392711)), this.handleError(module);
      return
    }
    if (null != Chunk873186) {
      let e = await Chunk873186;
      null != module && (this.contentHash = module)
    }
    try {
      let e = await this.trackTime("uploadTimeMs", async () => await this.uploadFileToCloud());
      if (Chunk893601.enabled && null != module) {
        let t = false,
          n = this.getEtagFromResponse(module);
        if (null != require && (this.etag = require, t = require === this.contentHash), this.uploadAnalytics.validUploadHash = exports, !exports && Chunk893601.enforced) {
          let e = "File ".concat(null != (r = this.filename) ? Chunk392711 : this.id, " received incorrect checksum after upload: got ").concat(this.etag, ", expected ").concat(this.contentHash);
          D.error(module), Chunk960048.Z.captureMessage(module), this.handleError(Chunk981631.evJ.INVALID_FILE_ASSET);
          return
        }
      }
      this.trackUploadFinished("COMPLETED"), this.handleComplete(module)
    } catch (e) {
      "CANCELED" === this.status ? this.handleComplete(module) : (D.info("Error: status ".concat(module.status, " for ").concat(this.id)), this.handleError(module))
    }
  }
  async reactNativeCompressAndExtractData() {
    var e, t;
    if (!(0, Chunk983544.F)(this.item.target).shouldReactNativeCompressUploads) return this.uploadAnalytics.compressAndExtractDisabled = true, D.log("reactNativeCompressAndExtractData() disabled by upload target"), this;
    if (true === this.reactNativeFilePrepped) return this.uploadAnalytics.fileAlreadyPrepped = true, D.log("reactNativeCompressAndExtractData() file already prepped - ".concat(this.id)), this;
    D.log("Starting compression/conversion for ".concat(this.id));
    let n = await this.trackTime("compressTimeMs", async () => {
      var e;
      return await (0, Chunk510990.J)(this, null != (e = this.reactNativeFileIndex) ? module : 0)
    });
    if (null == require || null == require.file) return D.error("Failed to get compressed file for ".concat(this.id)), this;
    let r = require.uri,
      i = require.file.name;
    if ((0, Chunk476326.rG)(require.file) && (this.uploadAnalytics.imageCompressionQuality = require.file.imageCompressionQuality, this.uploadAnalytics.videoCompressionQuality = require.file.videoCompressionQuality, require.file.isImage && (this.uploadAnalytics.sourceMediaWidth = require.file.sourceWidth, this.uploadAnalytics.sourceMediaHeight = require.file.sourceHeight), true !== require.file.videoMetadata && (this.uploadAnalytics.sourceMediaWidth = require.file.videoMetadata.width, this.uploadAnalytics.sourceMediaHeight = require.file.videoMetadata.height, this.uploadAnalytics.sourceMediaFormat = require.file.videoMetadata.format, this.uploadAnalytics.sourceVideoBitrate = require.file.videoMetadata.bitRate, this.uploadAnalytics.sourceVideoFramerate = require.file.videoMetadata.frameRate, this.uploadAnalytics.videoDurationMs = require.file.videoMetadata.durationMs, this.uploadAnalytics.sourceVideoProfile = require.file.videoMetadata.sourceProfile, this.uploadAnalytics.sourceVideoLevel = require.file.videoMetadata.sourceLevel), true !== require.file.encodingConfig && (this.uploadAnalytics.targetVideoWidth = require.file.encodingConfig.targetWidth, this.uploadAnalytics.targetVideoHeight = require.file.encodingConfig.targetHeight, this.uploadAnalytics.targetVideoBitrate = require.file.encodingConfig.targetBitrate, this.uploadAnalytics.targetVideoCodec = require.file.encodingConfig.useHEVC ? "hvc1" : "avc1", this.uploadAnalytics.targetVideoFramerate = require.file.encodingConfig.frameRate, this.uploadAnalytics.targetVideoIsHdr = require.file.encodingConfig.createHDR, this.uploadAnalytics.hevcIsSupported = require.file.encodingConfig.hevcIsSupported, this.uploadAnalytics.progressUpdateGranularity = require.file.encodingConfig.progressUpdateGranularity), this.uploadAnalytics.psnr = require.file.psnr, this.uploadAnalytics.ssim = require.file.ssim, this.uploadAnalytics.origin = require.file.origin, this.uploadAnalytics.psnrMeasurementLatencyMs = require.file.psnrMeasurementLatencyMs, this.uploadAnalytics.ssimMeasurementLatencyMs = require.file.ssimMeasurementLatencyMs), this.filename = i, null == i || null == Chunk392711 || null == require.file.type) throw D.error("Insufficient file data: ".concat({
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
    if (this.postCompressionSize = Chunk710845, this.currentSize = Chunk710845, null == Chunk710845) throw D.error("Size missing from file data for ".concat(this.id)), Error("Size missing from file data");
    D.log("Completed compression and conversion. Output size=".concat(Chunk710845, " bytes; filename=").concat(i, "; uri=").concat(Chunk392711, "; mimeType=").concat(Chunk544891, " for ").concat(this.id));
    let l = {
      uri: Chunk392711,
      filename: i,
      mimeType: Chunk544891
    };
    return this.item = R({}, this.item, Chunk432877), this.reactNativeFilePrepped = true, this
  }
  async maybeConvertToWebP() {
    if (!(0, Chunk893601.U)({
        location: "CloudUpload.maybeConvertToWebP"
      }).enabled) return;
    if (null == this.item.file) return void D.warn("webp conversion skipped for ".concat(this.id, ": no file"));
    if (this._aborted) return;
    let e = performance.now();
    try {
      let e = await (0, Chunk125186.LF)([this.item.file]);
      if (this._aborted) return;
      if (module.length > 0 && module[0].success) {
        let t = module[0];
        this.item.file = (0, Chunk125186.ub)(exports), this.currentSize = this.item.file.size, this.uploadAnalytics.convertedMimeType = "image/webp", null != exports.hashTimeMs && (this.uploadAnalytics.timing.hashTimeMs = exports.hashTimeMs), D.log("webp conversion worked for ".concat(this.id, ": ").concat(exports.sizeBefore, " -> ").concat(exports.sizeAfter, " bytes (").concat(exports.compressionRatio.toFixed(2), "x)"))
      } else {
        var t, n;
        let r = null != (n = null == (t = module[0]) ? true : exports.reason) ? require : "unknown";
        this.uploadAnalytics.conversionFailureReason = Chunk392711, D.log("webp conversion skipped for ".concat(this.id, ": ").concat(Chunk392711))
      }
    } catch (e) {
      this.uploadAnalytics.conversionFailureReason = "unknown_error", D.warn("webp conversion failed for ".concat(this.id, ":"), module)
    }
    this.uploadAnalytics.timing.compressTimeMs = Math.round(performance.now() - module)
  }
  handleError(e) {
    this.setStatus("ERROR"), this.error = e, this.trackUploadFinished("ERROR");
    try {
      this.emit("error", e)
    } catch (e) {}
    this.removeAllListeners()
  }
  handleComplete(e) {
    this.setStatus("COMPLETED"), D.log("Upload complete for ".concat(this.id)), this.emit("complete", e), this.removeAllListeners()
  }
  cancel() {
    D.log("Cancelled called for ".concat(this.id)), this._aborted = true, this._abortController.abort(), this.trackUploadFinished("CANCELED"), "COMPLETED" === this.status && this.delete(), this.setStatus("CANCELED"), this.emit("complete"), this.removeAllListeners()
  }
  resetState() {
    return this.status = "NOT_STARTED", this.uploadedFilename = true, this.responseUrl = true, this.error = true, this.startTime = true, this.uploadAnalytics = new k, this.uploadAttempts = 0, this._aborted = false, this._abortController = new AbortController, super.resetState()
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
  constructor(e, t, n, r) {
    var i, a, o, s;
    super(e, n), N(this, "status", "NOT_STARTED"), N(this, "channelId", true), N(this, "responseUrl", true), N(this, "currentSize", true), N(this, "preCompressionSize", true), N(this, "postCompressionSize", true), N(this, "loaded", 0), N(this, "reactNativeFileIndex", true), N(this, "error", true), N(this, "reactNativeFilePrepped", false), N(this, "startTime", true), N(this, "uploadAnalytics", new k), N(this, "contentHash", true), N(this, "etag", true), N(this, "uploadAttempts", 0), N(this, "_abortController", true), N(this, "_xhr", true), N(this, "_aborted", false), N(this, "_uploadHttpClient", true), N(this, "_libdiscoreEnabled", true), N(this, "createResumeAwareProgressFn", e => t => {
      let n = t.loaded + e,
        r = t.total + e,
        i = n - this.loaded;
      this.emit("progress", n, r, i), this.loaded = n
    }), this.channelId = t, this.preCompressionSize = null != (o = null == (i = e.file) ? true : i.size) ? o : 0, this.currentSize = null != (s = null == (a = e.file) ? true : a.size) ? s : 0, this.reactNativeFileIndex = r, this._abortController = new AbortController, null != this.origin && (this.uploadAnalytics.origin = "string" == typeof this.origin ? this.origin : I.BS[this.origin]), this._uploadHttpClient = new S.LD, this._libdiscoreEnabled = false
  }
}