/** Chunk was on web.js **/
/** chunk id: 743445, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  bK: () => k,
  jP: () => j
}), require("./65821.js"), require("./896048.js"), require("./747238.js"), require("./812715.js"), require("./457529.js");
var Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk158390 = require("./158390.js"),
  Chunk562465 = require("./562465.js"),
  Chunk626584 = require("./626584.js"),
  Chunk865116 = require("./865116.js"),
  Chunk795129 = require("./795129.js"),
  Chunk547927 = require("./547927.js"),
  Chunk661011 = require("./661011.js"),
  Chunk87481 = require("./87481.js"),
  Chunk445215 = require("./445215.js"),
  Chunk964404 = require("./964404.js"),
  Chunk544180 = require("./544180.js"),
  Chunk954571 = require("./954571.js"),
  Chunk509929 = require("./509929.js"),
  Chunk927813 = require("./927813.js"),
  Chunk209489 = require("./209489.js"),
  Chunk728458 = require("./728458.js"),
  Chunk292348 = require("./292348.js"),
  Chunk565150 = require("./565150.js"),
  Chunk900482 = require("./900482.js"),
  Chunk972711 = require("./972711.js"),
  Chunk554707 = require("./554707.js"),
  Chunk652215 = require("./652215.js");

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

function P(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : w(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let D = new Chunk626584.A("CloudUpload.tsx");
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
      if (t instanceof o.oh) throw new x(e, {
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
    const {
      cause: i,
      response: a
    } = t, s = x.getErrorKind(null != i ? i : Error("".concat(null != (n = null == a ? true : a.text) ? n : "Unknown error")), a), o = "server_error" === s ? "".concat(e, ":").concat(s, ":status_").concat(null != (r = null == a ? true : a.status) ? r : 0) : "".concat(e, ":").concat(s);
    super(o, {
      cause: i
    }), N(this, "kind", true), N(this, "phase", true), N(this, "messageShort", true), this.name = "ResumableUploadError", this.phase = e, this.kind = s, this.messageShort = o
  }
}
let L = "Content-MD5";
var j = function(e) {
  return e.NOT_STARTED = "NOT_STARTED", e.STARTED = "STARTED", e.UPLOADING = "UPLOADING", e.ERROR = "ERROR", e.COMPLETED = "COMPLETED", e.CANCELED = "CANCELED", e.REMOVED_FROM_MSG_DRAFT = "REMOVED_FROM_MSG_DRAFT", e
}({});
class M {
  constructor() {
    N(this, "numUploadAttempts", true), N(this, "timing", {}), N(this, "compressAndExtractDisabled", true), N(this, "fileAlreadyPrepped", true), N(this, "imageCompressionQuality", true), N(this, "videoCompressionQuality", true), N(this, "imageEncoderType", true), N(this, "convertedMimeType", true), N(this, "sourceMediaWidth", true), N(this, "sourceMediaHeight", true), N(this, "sourceMediaFormat", true), N(this, "sourceVideoBitrate", true), N(this, "sourceVideoFramerate", true), N(this, "videoDurationMs", true), N(this, "sourceVideoProfile", true), N(this, "sourceVideoLevel", true), N(this, "targetVideoWidth", true), N(this, "targetVideoHeight", true), N(this, "targetVideoBitrate", true), N(this, "targetVideoCodec", true), N(this, "targetVideoFramerate", true), N(this, "targetVideoIsHdr", true), N(this, "hevcIsSupported", true), N(this, "progressUpdateGranularity", true), N(this, "validUploadHash", true), N(this, "psnr", true), N(this, "ssim", true), N(this, "origin", true), N(this, "psnrMeasurementLatencyMs", true), N(this, "ssimMeasurementLatencyMs", true), N(this, "uploadResumptionCount", 0), N(this, "uploadResumptionPosition", 0), N(this, "uploadResumptionReason", true), N(this, "conversionFailureReason", true)
  }
}
r = require("./122924.js").A;
class k extends Chunk565150.Ay {
  static fromJson(e) {
    let {
      item: t,
      channelId: n,
      reactNativeFileIndex: r
    } = e, i = new k(t, n, r);
    return Object.entries(e).forEach(e => {
      let [t, n] = e;
      t.startsWith("_") || (i[t] = n)
    }), "COMPLETED" !== i.status && (i.status = "NOT_STARTED"), i
  }
  parseRangeHeader(e) {
    let t = e.match(/^bytes=(\d+)-(\d+)(?:\/\d+)?$/);
    return null == t ? null : [parseInt(t[1], 10), parseInt(t[2], 10)]
  }
  retryOpts() {
    return this.item.platform === A.xz.REACT_NATIVE ? {
      timeout: +y.A.Millis.HOUR,
      backoff: new s.A(.5 * y.A.Millis.SECOND, 30 * y.A.Millis.MINUTE),
      retries: 12
    } : {
      timeout: +y.A.Millis.HOUR,
      retries: 12,
      backoff: new s.A
    }
  }
  createAttachmentUrlRetryOpts() {
    return this.item.platform === A.xz.REACT_NATIVE ? {
      timeout: {
        response: 30 * y.A.Millis.SECOND,
        deadline: 30 * y.A.Millis.MINUTE
      },
      backoff: new s.A(.5 * y.A.Millis.SECOND, 60 * y.A.Millis.SECOND),
      retries: 8
    } : this.retryOpts()
  }
  supportsResume() {
    return (this._libdiscoreEnabled || this.item.platform !== A.xz.REACT_NATIVE) && this._resumptionEnabled
  }
  async uploadFileToCloud() {
    let e, t;
    if (null == this.responseUrl) throw Error("_uploadFileToCloud - responseUrl is not set");
    D.log("Uploading ".concat(this.id), this.item.platform === A.xz.REACT_NATIVE ? "filename=".concat(this.item.filename, ", uri=").concat(this.item.uri) : "filename=".concat(this.item.file.name)), this.item.platform === A.xz.REACT_NATIVE ? t = null != (e = {
      type: this.item.mimeType,
      uri: this.item.uri,
      name: this.item.filename
    }).type && "application/json" !== e.type ? e.type : "application/octet-stream" : (e = this.item.file, t = "application/octet-stream");
    let n = (0, _.Q)({
      location: "CloudUpload"
    });
    if (n.enableNewRetry) return (0, S.gd)(this.item) && (this._uploadHttpClient = new S.gp, this._libdiscoreEnabled = true, D.log("Using libdiscore client for file upload")), this._resumptionEnabled = n.enableResumption, await this.uploadFileWithResumption(this.responseUrl, e, t);
    let r = {
      "Content-Type": t
    };
    true !== this.contentHash && (r[L] = this.contentHash);
    let i = R({
      url: this.responseUrl,
      body: e,
      headers: r,
      signal: this._abortController.signal,
      onRequestProgress: a().throttle(this.createResumeAwareProgressFn(0), 50),
      rejectWithError: false
    }, this.retryOpts());
    return o.Bo.put(i)
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
        deadline: 30 * y.A.Millis.SECOND
      },
      signal: this._abortController.signal
    };
    return await this._uploadHttpClient.doUpload(t).then(e => 200 === e.status || 201 === e.status ? this.currentSize : x.rejectionHandler("status_check")(e)).catch(e => {
      if (e instanceof o.oh && 308 === e.status) {
        var t;
        let n = this.parseRangeHeader(null != (t = e.headers.range) ? t : "");
        return null != n ? n[1] + 1 : 0
      }
      return x.rejectionHandler("status_check")(e)
    })
  }
  async startOrResumeUpload(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 0;
    if (D.log("Attempting to upload attachment with resumeFrom: ".concat(t, " and attempts: ").concat(this.uploadAttempts)), t > 0) {
      var n;
      this.uploadAnalytics.uploadResumptionCount++, e.headers = P(R({}, null != (n = e.headers) ? n : {}), {
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
      retries: s
    } = this.retryOpts(), o = {
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
    for (; this.uploadAttempts <= s && !this._aborted;) {
      this.uploadAttempts++, this.uploadAnalytics.numUploadAttempts = this.uploadAttempts;
      try {
        if (this.uploadAttempts > 1) {
          let t = await this.trackTime("resumptionCheckTimeMs", async () => await this.getResumePosition(e));
          this.uploadAnalytics.uploadResumptionPosition = t, l = this.supportsResume() ? t : 0, this.loaded = l
        }
        return await this.startOrResumeUpload(o, l)
      } catch (e) {
        if (e instanceof x && e.canRetry()) {
          D.warn("Error uploading ".concat(this.id, ": ").concat(e.message, ", attempting resumption")), this.uploadAnalytics.uploadResumptionReason = e.messageShort, await b.A.awaitOnline();
          let t = i.fail();
          D.log("Waiting ".concat(t, "ms before attachment upload attempt ").concat(this.uploadAttempts + 1)), await new Promise(e => setTimeout(e, t))
        } else throw D.warn("Unrecoverable error uploading ".concat(this.id, ": ").concat(e.message)), e
      }
    }
    throw Error("Upload failed after ".concat(this.uploadAttempts, " attempts"))
  }
  async getSize() {
    var e;
    return null != (e = this.currentSize) ? e : 0
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
    if (this.allowOptimization && this.item.platform === A.xz.WEB) {
      let e = await k.tryConvertToWebP(this.item.file, () => this._aborted, this.id);
      null != e && (null != e.convertedFile && (this.item.file = e.convertedFile, this.currentSize = e.convertedFile.size), null != e.convertedMimeType && (this.uploadAnalytics.convertedMimeType = e.convertedMimeType), null != e.hashTimeMs && (this.uploadAnalytics.timing.hashTimeMs = e.hashTimeMs), null != e.conversionFailureReason && (this.uploadAnalytics.conversionFailureReason = e.conversionFailureReason), this.uploadAnalytics.timing.compressTimeMs = e.compressTimeMs)
    }
    let a = await r.getUploadPayload(this),
      s = (0, I.B)(this.item.target),
      l = (0, d.N)({
        location: "CloudUpload.upload"
      });
    if (null == a.filename || "" === a.filename) {
      D.error("File does not have a filename.", JSON.stringify(a)), this.handleError(C.t02.INVALID_FILE_ASSET);
      return
    }
    if (l.useDetectedFileSize && 0 === this.currentSize && null != this.item.file) try {
      let e = await (0, u._)(this.item.file);
      e > 0 && (this.currentSize = e)
    } catch (e) {
      D.warn("Failed to detect file size, proceeding with original", {
        filename: a.filename,
        error: e instanceof Error ? e.message : String(e)
      })
    }
    if (0 === this.currentSize) return void this.handleError(C.t02.ENTITY_EMPTY);
    if ((null != (e = this.currentSize) ? e : 0) > s.getMaxFileSize(this.channelId)) return void this.handleError(C.t02.ENTITY_TOO_LARGE);
    if (c.Ay.get("upload_fail_50") && .5 > Math.random()) return void setTimeout(() => {
      this.handleError(500)
    }, 1e3);
    let f = p.A.getCurrentConfig({
        location: "CloudUpload"
      }, {
        autoTrackExposure: true
      }),
      _ = null;
    f.enabled;
    try {
      D.log("Requesting upload url for ".concat(this.id));
      let e = await this.trackTime("getUploadUrlTimeMs", async () => {
        let e = s.getCreateAttachmentURL(this.channelId);
        return await o.Bo.post(P(R({
          url: e,
          body: {
            files: [a]
          }
        }, this.createAttachmentUrlRetryOpts()), {
          rejectWithError: false
        }))
      });
      this.setResponseUrl(e.body.attachments[0].upload_url), this.setUploadedFilename(e.body.attachments[0].upload_filename)
    } catch (r) {
      let e = null != (t = null == r || null == (n = r.body) ? true : n.code) ? t : r.status;
      e !== C.t02.ENTITY_TOO_LARGE && (D.error("Requesting upload url failed with code ".concat(null != e ? e : JSON.stringify(r.body), " for ").concat(this.id)), O.A.captureException(r)), this.handleError(e);
      return
    }
    if (null != _) {
      let e = await _;
      null != e && (this.contentHash = e)
    }
    try {
      let e = await this.trackTime("uploadTimeMs", async () => await this.uploadFileToCloud());
      if (f.enabled && null != e) {
        let t = false,
          n = this.getEtagFromResponse(e);
        if (null != n && (this.etag = n, t = n === this.contentHash), this.uploadAnalytics.validUploadHash = t, !t && f.enforced) {
          let e = "File ".concat(null != (i = this.filename) ? i : this.id, " received incorrect checksum after upload: got ").concat(this.etag, ", expected ").concat(this.contentHash);
          D.error(e), O.A.captureMessage(e), this.handleError(C.t02.INVALID_FILE_ASSET);
          return
        }
      }
      this.trackUploadFinished("COMPLETED"), this.handleComplete(e)
    } catch (e) {
      this.isCancelled() ? this.handleComplete(e) : (D.info("Error: status ".concat(e.status, " for ").concat(this.id)), this.handleError(e))
    }
  }
  async reactNativeCompressAndExtractData() {
    var e, t;
    if (!(0, I.B)(this.item.target).shouldReactNativeCompressUploads) return this.uploadAnalytics.compressAndExtractDisabled = true, D.log("reactNativeCompressAndExtractData() disabled by upload target"), this;
    if (true === this.reactNativeFilePrepped) return this.uploadAnalytics.fileAlreadyPrepped = true, D.log("reactNativeCompressAndExtractData() file already prepped - ".concat(this.id)), this;
    D.log("Starting compression/conversion for ".concat(this.id));
    let n = await this.trackTime("compressTimeMs", async () => {
      var e;
      return await (0, E.Si)(this, null != (e = this.reactNativeFileIndex) ? e : 0)
    });
    if (null == n || null == n.file) return D.error("Failed to get compressed file for ".concat(this.id)), this;
    let r = n.uri,
      i = n.file.name;
    if ((0, A.Sm)(n.file) && (this.uploadAnalytics.imageCompressionQuality = n.file.imageCompressionQuality, this.uploadAnalytics.videoCompressionQuality = n.file.videoCompressionQuality, this.uploadAnalytics.imageEncoderType = n.file.imageEncoderType, n.file.isImage && (this.uploadAnalytics.sourceMediaWidth = n.file.sourceWidth, this.uploadAnalytics.sourceMediaHeight = n.file.sourceHeight), true !== n.file.videoMetadata && (this.uploadAnalytics.sourceMediaWidth = n.file.videoMetadata.width, this.uploadAnalytics.sourceMediaHeight = n.file.videoMetadata.height, this.uploadAnalytics.sourceMediaFormat = n.file.videoMetadata.format, this.uploadAnalytics.sourceVideoBitrate = n.file.videoMetadata.bitRate, this.uploadAnalytics.sourceVideoFramerate = n.file.videoMetadata.frameRate, this.uploadAnalytics.videoDurationMs = n.file.videoMetadata.durationMs, this.uploadAnalytics.sourceVideoProfile = n.file.videoMetadata.sourceProfile, this.uploadAnalytics.sourceVideoLevel = n.file.videoMetadata.sourceLevel), true !== n.file.encodingConfig && (this.uploadAnalytics.targetVideoWidth = n.file.encodingConfig.targetWidth, this.uploadAnalytics.targetVideoHeight = n.file.encodingConfig.targetHeight, this.uploadAnalytics.targetVideoBitrate = n.file.encodingConfig.targetBitrate, this.uploadAnalytics.targetVideoCodec = n.file.encodingConfig.useHEVC ? "hvc1" : "avc1", this.uploadAnalytics.targetVideoFramerate = n.file.encodingConfig.frameRate, this.uploadAnalytics.targetVideoIsHdr = n.file.encodingConfig.createHDR, this.uploadAnalytics.hevcIsSupported = n.file.encodingConfig.hevcIsSupported, this.uploadAnalytics.progressUpdateGranularity = n.file.encodingConfig.progressUpdateGranularity), this.uploadAnalytics.psnr = n.file.psnr, this.uploadAnalytics.ssim = n.file.ssim, this.uploadAnalytics.origin = n.file.origin, this.uploadAnalytics.psnrMeasurementLatencyMs = n.file.psnrMeasurementLatencyMs, this.uploadAnalytics.ssimMeasurementLatencyMs = n.file.ssimMeasurementLatencyMs), this.filename = i, null == i || null == r || null == n.file.type) throw D.error("Insufficient file data: ".concat({
      filename: i,
      uri: r,
      type: n.file.type
    }, " for ").concat(this.id)), Error("Insufficient file data: ".concat({
      filename: i,
      uri: r,
      type: n.file.type
    }));
    let a = null == (t = i.split(".").pop()) ? true : t.toLowerCase(),
      s = "jpg" === a || "jpeg" === a ? "image/jpeg" : n.file.type;
    this.uploadAnalytics.convertedMimeType = s;
    let o = null != (e = n.fileSize) ? e : (await (0, v.dm)(r)).size;
    if (this.postCompressionSize = o, this.currentSize = o, null == o) throw D.error("Size missing from file data for ".concat(this.id)), Error("Size missing from file data");
    D.log("Completed compression and conversion. Output size=".concat(o, " bytes; filename=").concat(i, "; uri=").concat(r, "; originalMimeType=").concat(this.mimeType, "; mimeType=").concat(s, " for ").concat(this.id));
    let l = {
      uri: r,
      filename: i,
      mimeType: s
    };
    return this.item = R({}, this.item, l), this.reactNativeFilePrepped = true, this
  }
  static async tryConvertToWebP(e, t, n) {
    var r, i, a;
    let s, o = (0, f.i)({
      location: "CloudUpload.maybeConvertToWebP"
    });
    if (!o.enabled) return D.warn("webp conversion skipped for ".concat(n, ": not enabled")), null;
    if (null == e) return D.warn("webp conversion skipped for ".concat(n, ": no file")), null;
    if (null != o.maxFileSizeBytes && e.size > o.maxFileSizeBytes) return D.warn("webp conversion skipped for ".concat(n, ": too big")), null;
    if (t()) return null;
    let l = performance.now(),
      c = {
        compressTimeMs: 0
      };
    try {
      if (s = await (0, T.L5)(e), t()) return null;
      if (s.success && null != s.convertedBlob) D.log("webp conversion worked for ".concat(n, ": ").concat(s.sizeBefore, " -> ").concat(s.sizeAfter, " bytes (").concat(s.compressionRatio.toFixed(2), "x)")), c.convertedFile = new File([s.convertedBlob], e.name, {
        type: "image/webp",
        lastModified: e.lastModified
      }), c.convertedMimeType = "image/webp", c.hashTimeMs = null != (i = s.hashTimeMs) ? i : true;
      else {
        let e = null != (a = s.reason) ? a : T.z9.UNKNOWN_ERROR;
        D.log("webp conversion skipped for ".concat(n, ": ").concat(e)), c.conversionFailureReason = e
      }
    } catch (e) {
      D.warn("webp conversion failed for ".concat(n, ":"), e), c.conversionFailureReason = T.z9.UNKNOWN_ERROR
    }
    let u = Math.round(performance.now() - l);
    return c.compressTimeMs = null != (r = null == s ? true : s.compressTimeMs) ? r : u, c
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
  _cancel(e, t) {
    D.log(t), this._aborted = true, this._abortController.abort(), this.trackUploadFinished(e), "COMPLETED" === this.status && this.delete(), this.setStatus(e), this.emit("complete"), this.removeAllListeners()
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
    let e = (0, I.B)(this.item.target).getDeleteUploadURL(this.uploadedFilename);
    try {
      await o.Bo.del(e)
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
    g.default.track(C.HAw.ATTACHMENT_UPLOAD_STARTED, {
      file_size: this.currentSize,
      mime_type: null != (e = this.mimeType) ? e : "unknown",
      video_upload_quality: h.Ay.videoUploadQuality,
      data_saving_mode: h.Ay.dataSavingMode,
      low_quality_image_mode: h.Ay.dataSavingMode,
      channel_id: this.channelId,
      connection_type: m.A.getType(),
      effective_connection_speed: m.A.getEffectiveConnectionSpeed(),
      service_provider: m.A.getServiceProvider()
    })
  }
  trackUploadFinished(e) {
    var t, n, r, i, a, s;
    let o = null != this.startTime ? performance.now() - this.startTime : false;
    g.default.track(C.HAw.ATTACHMENT_UPLOAD_FINISHED, {
      duration_ms: o,
      file_size: this.currentSize,
      pre_compression_file_size: this.preCompressionSize,
      final_state: e,
      mime_type: null != (t = this.mimeType) ? t : "unknown",
      num_upload_attempts: null != (n = this.uploadAnalytics.numUploadAttempts) ? n : 1,
      error_code: this.error,
      video_upload_quality: h.Ay.videoUploadQuality,
      data_saving_mode: h.Ay.dataSavingMode,
      low_quality_image_mode: h.Ay.dataSavingMode,
      compress_time_ms: this.uploadAnalytics.timing.compressTimeMs,
      get_upload_url_time_ms: this.uploadAnalytics.timing.getUploadUrlTimeMs,
      upload_time_ms: this.uploadAnalytics.timing.uploadTimeMs,
      converted_mime_type: null != (r = this.uploadAnalytics.convertedMimeType) ? r : "unknown",
      image_compression_quality: null != (i = this.uploadAnalytics.imageCompressionQuality) ? i : 0,
      video_compression_quality: null != (a = this.uploadAnalytics.videoCompressionQuality) ? a : "unknown",
      image_encoder_type: null != (s = this.uploadAnalytics.imageEncoderType) ? s : "unknown",
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
      connection_type: m.A.getType(),
      effective_connection_speed: m.A.getEffectiveConnectionSpeed(),
      service_provider: m.A.getServiceProvider()
    })
  }
  constructor(e, t, n, r) {
    var i, a, s, o;
    super(e), N(this, "status", "NOT_STARTED"), N(this, "channelId", true), N(this, "responseUrl", true), N(this, "currentSize", true), N(this, "preCompressionSize", true), N(this, "postCompressionSize", true), N(this, "loaded", 0), N(this, "reactNativeFileIndex", true), N(this, "error", true), N(this, "reactNativeFilePrepped", false), N(this, "allowOptimization", true), N(this, "startTime", true), N(this, "uploadAnalytics", new M), N(this, "contentHash", true), N(this, "etag", true), N(this, "uploadAttempts", 0), N(this, "_abortController", true), N(this, "_xhr", true), N(this, "_aborted", false), N(this, "_uploadHttpClient", true), N(this, "_libdiscoreEnabled", true), N(this, "_resumptionEnabled", true), N(this, "createResumeAwareProgressFn", e => t => {
      let n = t.loaded + e,
        r = t.total + e,
        i = n - this.loaded;
      this.emit("progress", n, r, i), this.loaded = n
    }), this.channelId = t, this.preCompressionSize = null != (i = null == (s = e.file) ? true : s.size) ? i : 0, this.currentSize = null != (a = null == (o = e.file) ? true : o.size) ? a : 0, this.reactNativeFileIndex = n, null != r && (this.allowOptimization = r), e.platform === A.xz.WEB && null != e.compressionMetadata && (this.mimeType = e.compressionMetadata.originalContentType), this._abortController = new AbortController, null != this.origin && (this.uploadAnalytics.origin = "string" == typeof this.origin ? this.origin : A.Cj[this.origin]), this._uploadHttpClient = new S.nd, this._libdiscoreEnabled = false, this._resumptionEnabled = false
  }
}