/** Chunk was on web.js **/
"use strict";
n.d(t, {
  m: () => N,
  n: () => C
}), n(47120), n(411104), n(301563), n(26686);
var r = n(392711),
  i = n.n(r),
  o = n(261470),
  a = n(544891),
  s = n(710845),
  l = n(432877),
  c = n(549464),
  u = n(740492),
  d = n(866960),
  f = n(626135),
  _ = n(510990),
  p = n(70956),
  h = n(960048),
  g = n(861990),
  m = n(476326),
  E = n(983544),
  v = n(981631);

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function S(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let I = new s.Z("CloudUpload.tsx"),
  T = n(224497).Z;
var N = function(e) {
  return e.NOT_STARTED = "NOT_STARTED", e.STARTED = "STARTED", e.UPLOADING = "UPLOADING", e.ERROR = "ERROR", e.COMPLETED = "COMPLETED", e.CANCELED = "CANCELED", e
}({});
class A {
  constructor() {
    b(this, "numChunks", void 0), b(this, "totalRequestCount", void 0), b(this, "timing", {}), b(this, "compressAndExtractDisabled", void 0), b(this, "fileAlreadyPrepped", void 0), b(this, "imageCompressionQuality", void 0), b(this, "videoCompressionQuality", void 0), b(this, "convertedMimeType", void 0), b(this, "sourceMediaWidth", void 0), b(this, "sourceMediaHeight", void 0), b(this, "sourceMediaFormat", void 0), b(this, "sourceVideoBitrate", void 0), b(this, "sourceVideoFramerate", void 0), b(this, "videoDurationMs", void 0), b(this, "sourceVideoProfile", void 0), b(this, "sourceVideoLevel", void 0), b(this, "targetVideoWidth", void 0), b(this, "targetVideoHeight", void 0), b(this, "targetVideoBitrate", void 0), b(this, "targetVideoCodec", void 0), b(this, "targetVideoFramerate", void 0), b(this, "targetVideoIsHdr", void 0), b(this, "hevcIsSupported", void 0), b(this, "progressUpdateGranularity", void 0)
  }
}
class C extends m.ZP {
  static fromJson(e) {
    let {
      item: t,
      channelId: n,
      showLargeMessageDialog: r,
      reactNativeFileIndex: i
    } = e, o = new C(t, n, r, i);
    return "COMPLETED" !== o.status && (o.status = "NOT_STARTED"), Object.entries(e).forEach(e => {
      let [t, n] = e;
      !t.startsWith("_") && (o[t] = n)
    }), o
  }
  retryOpts() {
    return this.item.platform === m.ow.REACT_NATIVE ? {
      timeout: +p.Z.Millis.HOUR,
      backoff: new o.Z(.5 * p.Z.Millis.SECOND, 30 * p.Z.Millis.MINUTE),
      retries: 12
    } : {
      timeout: +p.Z.Millis.HOUR,
      retries: 12,
      backoff: new o.Z
    }
  }
  createAttachmentUrlRetryOpts() {
    return this.item.platform === m.ow.REACT_NATIVE ? {
      timeout: {
        response: 30 * p.Z.Millis.SECOND,
        deadline: 30 * p.Z.Millis.MINUTE
      },
      backoff: new o.Z(.5 * p.Z.Millis.SECOND, 60 * p.Z.Millis.SECOND),
      retries: 8
    } : this.retryOpts()
  }
  async uploadFileToCloudAsChunks(e) {
    if (null == this.responseUrl || "" === this.responseUrl) throw Error("_uploadFileToCloudAsChunks - responseUrl is not set");
    let {
      contentType: t,
      fileSize: n,
      bufferedFileData: r
    } = await this.prepareChunkUploadItem(), i = Math.ceil(n / e);
    this.uploadAnalytics.numChunks = i, this.uploadAnalytics.totalRequestCount = 0;
    for (let o = 0; o < i; o++) {
      I.info("Uploading chunk ".concat(o + 1, " of ").concat(i, " for file id ").concat(this.id));
      let a = o * e,
        s = Math.min(a + e, n),
        l = await this.getChunk(a, s, r);
      try {
        await this.uploadChunk({
          chunk: l,
          start: a,
          end: s,
          totalSize: n,
          sessionUrl: this.responseUrl,
          contentType: t
        })
      } catch (e) {
        throw I.error("Error uploading chunk ".concat(o + 1, " for file id ").concat(this.id, ": ").concat(e)), e
      }
    }
    I.log("Upload complete for file id ".concat(this.id))
  }
  async prepareChunkUploadItem() {
    let e, t, n;
    if (this.item.platform === m.ow.REACT_NATIVE) {
      let r = this.item;
      if (e = null != r.mimeType && "" !== r.mimeType ? r.mimeType : "application/octet-stream", null == r.size || 0 === r.size || isNaN(r.size)) try {
        t = await (0, g.Fm)(r.uri)
      } catch (e) {
        I.warn("Failed to peek content length for file id ".concat(this.id, ", reading whole file instead: ").concat(e)), t = (n = await (0, g.Lc)(r.uri)).size
      } else t = r.size
    } else e = "application/octet-stream", t = this.item.file.size;
    return {
      contentType: e,
      fileSize: t,
      bufferedFileData: n
    }
  }
  async getChunk(e, t, n) {
    return this.item.platform !== m.ow.REACT_NATIVE ? this.item.file.slice(e, t) : null != n ? n.slice(e, t) : await (0, g.U4)(this.item.uri, e, t)
  }
  async uploadChunk(e) {
    let t = {
        "Content-Type": e.contentType,
        "Content-Range": "bytes ".concat(e.start, "-").concat(e.end - 1, "/").concat(e.totalSize)
      },
      n = 3;
    for (let o = 1; o <= n; o++) {
      var r;
      this.uploadAnalytics.totalRequestCount = (null !== (r = this.uploadAnalytics.totalRequestCount) && void 0 !== r ? r : 0) + 1, I.log("Attempt ".concat(o, " for file id ").concat(this.id, " : Uploading chunk ").concat(e.start, "-").concat(e.end - 1, " of ").concat(e.totalSize, " bytes"));
      let n = i().throttle(t => {
        let n = e.start + t.loaded;
        this.emit("progress", n, e.totalSize, n - this.loaded), this.loaded = n
      }, 50);
      try {
        if ((await a.tn.put(S(y({
            url: e.sessionUrl,
            body: e.chunk,
            headers: t,
            signal: this._abortController.signal,
            onRequestProgress: n
          }, this.retryOpts()), {
            rejectWithError: !1
          }))).ok) return
      } catch (t) {
        if (!this.RESUME_INCOMPLETE_CODES.includes(t.status)) throw t;
        if (this.isUnsuccessfulChunkUpload(t, e.end - 1)) {
          I.error("Incomplete chunk upload for file id ".concat(this.id, ": ").concat(t.status));
          continue
        }
        return
      }
    }
    throw Error("Failed to upload chunk")
  }
  isUnsuccessfulChunkUpload(e, t) {
    if (null == e.headers.range || "" === e.headers.range) return !0;
    let n = e.headers.range.match(/bytes=(\d+)-(\d+)/);
    return null !== n && parseInt(n[2], 10) !== t
  }
  uploadFileToCloud() {
    let e, t;
    if (null == this.responseUrl) throw Error("_uploadFileToCloud - responseUrl is not set");
    I.log("Uploading ".concat(this.id)), this.item.platform === m.ow.REACT_NATIVE ? t = null != (e = {
      type: this.item.mimeType,
      uri: this.item.uri,
      name: this.item.filename
    }).type && "application/json" !== e.type ? e.type : "application/octet-stream" : (e = this.item.file, t = "application/octet-stream");
    let n = i().throttle(e => {
        this.emit("progress", e.loaded, e.total, e.loaded - this.loaded), this.loaded = e.loaded
      }, 50),
      r = {
        "Content-Type": t
      };
    return a.tn.put(S(y({
      url: this.responseUrl,
      body: e,
      headers: r,
      signal: this._abortController.signal,
      onRequestProgress: n
    }, this.retryOpts()), {
      rejectWithError: !1
    }))
  }
  async getSize() {
    var e;
    return null !== (e = this.currentSize) && void 0 !== e ? e : 0
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
    var e, t, n;
    if ("COMPLETED" === this.status) return;
    if (this.setStatus("STARTED"), this.startTime = performance.now(), this.trackUploadStart(), "CANCELED" === this.status) {
      this.handleComplete(this.id);
      return
    }
    let r = await T.getUploadPayload(this),
      i = (0, E.F)(this.item.target);
    if (null == r.filename || "" === r.filename || 0 === this.currentSize) {
      I.error("File does not have a filename or size is 0.", JSON.stringify(r)), this.handleError(v.evJ.INVALID_FILE_ASSET);
      return
    }
    if ((null !== (e = this.currentSize) && void 0 !== e ? e : 0) > i.getMaxFileSize(this.channelId)) {
      this.handleError(v.evJ.ENTITY_TOO_LARGE);
      return
    }
    if (l.ZP.get("upload_fail_50") && .5 > Math.random()) {
      setTimeout(() => {
        this.handleError(500)
      }, 1e3);
      return
    }
    try {
      I.log("Requesting upload url for ".concat(this.id));
      let e = await this.trackTime("getUploadUrlTimeMs", async () => await a.tn.post(S(y({
        url: i.getCreateAttachmentURL(this.channelId),
        body: {
          files: [r]
        }
      }, this.createAttachmentUrlRetryOpts()), {
        rejectWithError: !1
      })));
      this.setResponseUrl(e.body.attachments[0].upload_url), this.setUploadedFilename(e.body.attachments[0].upload_filename)
    } catch (r) {
      let e = null !== (n = null == r ? void 0 : null === (t = r.body) || void 0 === t ? void 0 : t.code) && void 0 !== n ? n : r.status;
      e !== v.evJ.ENTITY_TOO_LARGE && (I.error("Requesting upload url failed with code ".concat(null != e ? e : JSON.stringify(r.body), " for ").concat(this.id)), h.Z.captureException(r)), this.handleError(e);
      return
    }
    try {
      let e;
      let t = c.Z.getCurrentConfig({
        location: "CloudUpload"
      }, {
        autoTrackExposure: !0
      });
      e = t.enabled && t.chunkSize > 0 ? await this.trackTime("uploadTimeMs", async () => await this.uploadFileToCloudAsChunks(t.chunkSize)) : await this.trackTime("uploadTimeMs", async () => await this.uploadFileToCloud()), this.trackUploadFinished("COMPLETED"), this.handleComplete(e)
    } catch (e) {
      "CANCELED" === this.status ? this.handleComplete(e) : (I.info("Error: status ".concat(e.status, " for ").concat(this.id)), this.handleError(e))
    }
  }
  async reactNativeCompressAndExtractData() {
    var e;
    if (!(0, E.F)(this.item.target).shouldReactNativeCompressUploads) return this.uploadAnalytics.compressAndExtractDisabled = !0, I.log("reactNativeCompressAndExtractData() disabled by upload target"), this;
    if (!0 === this.reactNativeFilePrepped) return this.uploadAnalytics.fileAlreadyPrepped = !0, I.log("reactNativeCompressAndExtractData() file already prepped - ".concat(this.id)), this;
    I.log("Starting compression/conversion for ".concat(this.id));
    let t = await this.trackTime("compressTimeMs", async () => {
      var e;
      return await (0, _.J)(this, null !== (e = this.reactNativeFileIndex) && void 0 !== e ? e : 0)
    });
    if (null == t || null == t.file) return I.error("Failed to get compressed file for ".concat(this.id)), this;
    let n = t.uri,
      r = t.file.name,
      i = t.file.type;
    if ((0, m.rG)(t.file) && (this.uploadAnalytics.imageCompressionQuality = t.file.imageCompressionQuality, this.uploadAnalytics.videoCompressionQuality = t.file.videoCompressionQuality, this.uploadAnalytics.convertedMimeType = t.file.type, void 0 !== t.file.videoMetadata && (this.uploadAnalytics.sourceMediaWidth = t.file.videoMetadata.width, this.uploadAnalytics.sourceMediaHeight = t.file.videoMetadata.height, this.uploadAnalytics.sourceMediaFormat = t.file.videoMetadata.format, this.uploadAnalytics.sourceVideoBitrate = t.file.videoMetadata.bitRate, this.uploadAnalytics.sourceVideoFramerate = t.file.videoMetadata.frameRate, this.uploadAnalytics.videoDurationMs = t.file.videoMetadata.durationMs, this.uploadAnalytics.sourceVideoProfile = t.file.videoMetadata.sourceProfile, this.uploadAnalytics.sourceVideoLevel = t.file.videoMetadata.sourceLevel), void 0 !== t.file.encodingConfig && (this.uploadAnalytics.targetVideoWidth = t.file.encodingConfig.targetWidth, this.uploadAnalytics.targetVideoHeight = t.file.encodingConfig.targetHeight, this.uploadAnalytics.targetVideoBitrate = t.file.encodingConfig.targetBitrate, this.uploadAnalytics.targetVideoCodec = t.file.encodingConfig.useHEVC ? "hvc1" : "avc1", this.uploadAnalytics.targetVideoFramerate = t.file.encodingConfig.frameRate, this.uploadAnalytics.targetVideoIsHdr = t.file.encodingConfig.createHDR, this.uploadAnalytics.hevcIsSupported = t.file.encodingConfig.hevcIsSupported, this.uploadAnalytics.progressUpdateGranularity = t.file.encodingConfig.progressUpdateGranularity)), this.filename = r, null == r || null == n || null == i) throw I.error("Insufficient file data: ".concat({
      filename: r,
      uri: n,
      mimeType: i
    }, " for ").concat(this.id)), Error("Insufficient file data: ".concat({
      filename: r,
      uri: n,
      mimeType: i
    }));
    let o = null !== (e = t.fileSize) && void 0 !== e ? e : (await (0, g.Lc)(n)).size;
    if (this.postCompressionSize = o, this.currentSize = o, null == o) throw I.error("Size missing from file data for ".concat(this.id)), Error("Size missing from file data");
    I.log("Completed compression and conversion. Output size=".concat(o, " bytes; filename=").concat(r, " for ").concat(this.id));
    let a = {
      uri: n,
      filename: r,
      mimeType: i
    };
    return this.item = y({}, this.item, a), this.reactNativeFilePrepped = !0, this
  }
  handleError(e) {
    this.setStatus("ERROR"), this.error = e, this.trackUploadFinished("ERROR");
    try {
      this.emit("error", e)
    } catch (e) {}
    this.removeAllListeners()
  }
  handleComplete(e) {
    this.setStatus("COMPLETED"), I.log("Upload complete for ".concat(this.id)), this.emit("complete", e), this.removeAllListeners()
  }
  cancel() {
    I.log("Cancelled called for ".concat(this.id)), this._abortController.abort(), this.trackUploadFinished("CANCELED"), "COMPLETED" === this.status && this.delete(), this.setStatus("CANCELED"), this.emit("complete"), this.removeAllListeners()
  }
  resetState() {
    return this.status = "NOT_STARTED", this.uploadedFilename = void 0, this.responseUrl = void 0, this.error = void 0, this.startTime = void 0, this.uploadAnalytics = new A, this._abortController = new AbortController, super.resetState()
  }
  async delete() {
    if (null == this.uploadedFilename) return;
    let e = (0, E.F)(this.item.target).getDeleteUploadURL(this.uploadedFilename);
    try {
      await a.tn.del(e)
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
    f.default.track(v.rMx.ATTACHMENT_UPLOAD_STARTED, {
      file_size: this.currentSize,
      mime_type: null !== (e = this.mimeType) && void 0 !== e ? e : "unknown",
      video_upload_quality: u.ZP.videoUploadQuality,
      data_saving_mode: u.ZP.dataSavingMode,
      low_quality_image_mode: u.ZP.dataSavingMode,
      channel_id: this.channelId,
      connection_type: d.Z.getType(),
      effective_connection_speed: d.Z.getEffectiveConnectionSpeed(),
      service_provider: d.Z.getServiceProvider()
    })
  }
  trackUploadFinished(e) {
    var t, n, r, i, o;
    let a = null != this.startTime ? performance.now() - this.startTime : -1;
    f.default.track(v.rMx.ATTACHMENT_UPLOAD_FINISHED, {
      duration_ms: a,
      file_size: this.currentSize,
      pre_compression_file_size: this.preCompressionSize,
      final_state: e,
      mime_type: null !== (t = this.mimeType) && void 0 !== t ? t : "unknown",
      num_chunks: this.uploadAnalytics.numChunks,
      num_upload_attempts: null !== (n = this.uploadAnalytics.totalRequestCount) && void 0 !== n ? n : 1,
      error_code: this.error,
      video_upload_quality: u.ZP.videoUploadQuality,
      data_saving_mode: u.ZP.dataSavingMode,
      low_quality_image_mode: u.ZP.dataSavingMode,
      compress_time_ms: this.uploadAnalytics.timing.compressTimeMs,
      get_upload_url_time_ms: this.uploadAnalytics.timing.getUploadUrlTimeMs,
      upload_time_ms: this.uploadAnalytics.timing.uploadTimeMs,
      converted_mime_type: null !== (r = this.uploadAnalytics.convertedMimeType) && void 0 !== r ? r : "unknown",
      image_compression_quality: null !== (i = this.uploadAnalytics.imageCompressionQuality) && void 0 !== i ? i : 0,
      video_compression_quality: null !== (o = this.uploadAnalytics.videoCompressionQuality) && void 0 !== o ? o : "unknown",
      was_converted: this.mimeType !== this.uploadAnalytics.convertedMimeType,
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
      connection_type: d.Z.getType(),
      effective_connection_speed: d.Z.getEffectiveConnectionSpeed(),
      service_provider: d.Z.getServiceProvider()
    })
  }
  constructor(e, t, n, r) {
    var i, o, a, s;
    super(e, n), b(this, "RESUME_INCOMPLETE_CODES", [308]), b(this, "status", "NOT_STARTED"), b(this, "channelId", void 0), b(this, "responseUrl", void 0), b(this, "currentSize", void 0), b(this, "preCompressionSize", void 0), b(this, "postCompressionSize", void 0), b(this, "loaded", 0), b(this, "reactNativeFileIndex", void 0), b(this, "error", void 0), b(this, "reactNativeFilePrepped", !1), b(this, "startTime", void 0), b(this, "uploadAnalytics", new A), b(this, "_abortController", void 0), b(this, "_xhr", void 0), b(this, "_aborted", !1), this.channelId = t, this.preCompressionSize = null !== (a = null === (i = e.file) || void 0 === i ? void 0 : i.size) && void 0 !== a ? a : 0, this.currentSize = null !== (s = null === (o = e.file) || void 0 === o ? void 0 : o.size) && void 0 !== s ? s : 0, this.reactNativeFileIndex = r, this._abortController = new AbortController
  }
}