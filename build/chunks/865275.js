/** Chunk was on web.js **/
/** chunk id: 865275, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./388685.js"), require("./415506.js"), require("./49124.js");
var Chunk836560 = require("./836560.js"),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk710845 = require("./710845.js"),
  Chunk510990 = require("./510990.js"),
  Chunk141795 = require("./141795.js"),
  Chunk983544 = require("./983544.js"),
  Chunk596956 = require("./596956.js"),
  Chunk981631 = require("./981631.js"),
  Chunk959517 = require("./959517.js"),
  Chunk388032 = require("./388032.jsx");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function m(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let E = new Chunk710845.Z("UploaderBase.tsx");
class b extends Chunk836560.EventEmitter {
  _fileSize() {
    return this.files.reduce((e, t) => {
      var n;
      return e + (null != (n = t.currentSize) ? n : 0)
    }, 0)
  }
  async compressAndCheckFileSize() {
    var e, t;
    let n = (0, Chunk983544.F)(null == (t = this.files[0]) || null == (e = exports.item) ? true : module.target);
    return this.files.length > require.getMaxAttachmentsCount() ? (E.log("Too many attachments for ".concat(this.id)), this._handleError({
      code: Chunk981631.evJ.TOO_MANY_ATTACHMENTS
    }), false) : !(this._fileSize() > require.getMaxTotalAttachmentSize()) || (this._handleError({
      code: Chunk981631.evJ.ENTITY_TOO_LARGE,
      reason: {
        type: Chunk959517.xi.POSTCOMPRESSION_SUM_TOO_LARGE
      }
    }), false)
  }
  setUploadingTextForUI() {
    let e = 1 === this.files.length && null != this.files[0].filename ? this.files[0].filename : Chunk388032.intl.formatToPlainString(Chunk388032.t.D0noUl, {
        count: this.files.length
      }),
      t = this.files.some(e => e.isImage),
      n = this.files.some(e => e.isVideo),
      r = this._fileSize();
    E.log("setUploadingTextForUI - total content: ".concat(Chunk836560, " bytes and ").concat(this.files.length, " attachments for ").concat(this.id)), this._file = g(h({}, this._file), {
      totalPostCompressionSize: Chunk836560,
      currentSize: Chunk836560,
      name: module,
      hasVideo: require,
      hasImage: exports,
      attachmentsCount: this.files.length,
      items: this.files
    })
  }
  _recomputeProgress() {
    let {
      loaded: e,
      total: t
    } = this._recomputeProgressTotal(), n = this._recomputeProgressByFile();
    this._handleProgress(module, exports, require)
  }
  _recomputeProgressTotal() {
    let e = this._fileSize();
    return {
      loaded: this.files.reduce((e, t) => {
        var n;
        return e + (null != (n = t.loaded) ? n : 0)
      }, 0),
      total: module
    }
  }
  _recomputeProgressByFile() {
    let e = {};
    return this.files.forEach(t => {
      e[t.id] = (0, u.SB)(t.loaded, t.currentSize)
    }), module
  }
  _addAttachmentsToPayload(e, t, n) {
    let r = h({}, e),
      i = [...o().get(r, t, []), ...n];
    return o().set(r, t, i)
  }
  clearProcessingMessageInterval() {
    null != this.processingMessageChangeInterval && (clearInterval(this.processingMessageChangeInterval), this.processingMessageChangeInterval = true)
  }
  cancel() {
    var e, t;
    E.log("cancel() for ".concat(this.id)), this._aborted || (this._aborted = true, null == (e = (t = this)._cancel) || module.call(exports), this.files.forEach(e => e.cancel()), this._handleComplete())
  }
  async cancelItem(e) {
    E.log("Cancel called for ".concat(this.id, " for item ").concat(e));
    let t = this.files.find(t => t.id === e);
    if (null == t || t.status === l.mw.CANCELED) return;
    let n = this.files.indexOf(t);
    this.files = [...this.files.slice(0, n), ...this.files.slice(n + 1)], this._file = g(h({}, this._file), {
      items: this.files
    }), await (0, s.V)(t), t.cancel(), this.emit("cancel-upload-item", this._file), 0 === this.files.length && this.cancel()
  }
  upload(e, t) {
    if (null != this._cancel) throw Error("Uploader.upload(...): An upload is already in progress.");
    this._lastUpdate = Date.now(), this._loaded = 0, this._file = {
      id: this.id,
      name: e,
      currentSize: 0,
      totalPreCompressionSize: 0,
      compressionProgress: 0,
      progress: 0,
      rate: 0,
      hasImage: false,
      hasVideo: false,
      attachmentsCount: 0,
      items: t
    }
  }
  constructor() {
    super(), p(this, "id", true), p(this, "_file", true), p(this, "_aborted", false), p(this, "_errored", false), p(this, "processingMessageChangeInterval", true), p(this, "files", []), p(this, "_lastUpdate", 0), p(this, "_loaded", 0), p(this, "alreadyStarted", false), p(this, "_cancel", true), p(this, "_handleStart", e => {
      this._cancel = e, this.alreadyStarted || this.emit("start", this._file), this.alreadyStarted = true
    }), p(this, "_handleProgress", (e, t, n) => {
      let r = Date.now(),
        i = (0, u.SB)(e, t),
        o = Math.floor((e - this._loaded) / ((r - this._lastUpdate) / 1e3));
      if (null != n) {
        var a;
        null == (a = this._file.items) || a.forEach(e => {
          e.item.progress = n[e.id]
        })
      }
      this._lastUpdate = r, this._loaded = e, this._file = g(h({}, this._file), {
        currentSize: t,
        progress: i,
        rate: o
      }), this.emit("progress", this._file)
    }), p(this, "_handleException", e => {
      this._handleError({
        reason: {
          type: f.xi.ERROR_SOURCE_UNKNOWN,
          msg: e.toString()
        }
      })
    }), p(this, "_handleAborted", () => {
      this.clearProcessingMessageInterval()
    }), p(this, "_handleError", e => {
      let {
        code: t,
        reason: n,
        body: r
      } = e;
      this.clearProcessingMessageInterval(), this._aborted || (this._errored = true, E.log("_handleError: ".concat(t, " (").concat(JSON.stringify(n), ") for ").concat(this.id)), this.emit("error", this._file, t, r, n), this.removeAllListeners())
    }), p(this, "_handleComplete", e => {
      this.clearProcessingMessageInterval(), E.log("_handleComplete for ".concat(this.id)), this.emit("complete", this._file, e), this.removeAllListeners()
    }), this.id = o().uniqueId("Uploader"), this._file = {
      id: this.id,
      name: "",
      currentSize: 0,
      totalPreCompressionSize: 0,
      compressionProgress: 0,
      progress: 0,
      rate: 0,
      hasImage: false,
      hasVideo: false,
      attachmentsCount: 0,
      items: true
    }
  }
}