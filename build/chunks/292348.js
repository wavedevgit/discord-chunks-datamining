/** Chunk was on web.js **/
/** chunk id: 292348, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  OW: () => c,
  dm: () => u,
  eM: () => s,
  ly: () => d
}), require("./228524.js"), require("./65821.js"), require("./747238.js");
var Chunk565150 = require("./565150.js"),
  Chunk762555 = require("./762555.js"),
  Chunk381941 = require("./381941.js");
let o = [{
    reName: /\.jpe?g$/i,
    name: e => "image".concat(e, ".jpg"),
    type: "image/jpeg"
  }, {
    reName: /\.jfif$/i,
    name: e => "image".concat(e, ".jpg"),
    type: "image/jpeg"
  }, {
    reName: /\.png$/i,
    name: e => "image".concat(e, ".png"),
    type: "image/png"
  }, {
    reName: /\.gif$/i,
    name: e => "image".concat(e, ".gif"),
    type: "image/gif"
  }, {
    reName: /\.webp$/i,
    name: e => "image".concat(e, ".webp"),
    type: "image/webp"
  }, {
    reName: /\.avif$/i,
    name: e => "image".concat(e, ".avif"),
    type: "image/avif"
  }, {
    reName: /\.heic$/i,
    name: e => "image".concat(e, ".heic"),
    type: "image/heic"
  }, {
    reName: /\.heif$/i,
    name: e => "image".concat(e, ".heif"),
    type: "image/heif"
  }, {
    reName: /\.dng$/i,
    name: e => "image".concat(e, ".dng"),
    type: "image/x-adobe-dng"
  }, {
    reName: /\.mov$/i,
    name: e => "video".concat(e, ".mov"),
    type: "video/quicktime"
  }, {
    reName: /\.qt$/i,
    name: e => "video".concat(e, ".qt"),
    type: "video/quicktime"
  }, {
    reName: /\.avi$/i,
    name: e => "video".concat(e, ".avi"),
    type: "video/x-msvideo"
  }, {
    reName: /\.mp4$/i,
    name: e => "video".concat(e, ".mp4"),
    type: "video/mp4"
  }, {
    reName: /\.webm$/i,
    name: e => "video".concat(e, ".webm"),
    type: "image/webm"
  }],
  s = 524288e3;

function l(e) {
  let {
    spoiler: t
  } = e;
  return t ? a._W : ""
}

function c(e) {
  var t;
  let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null,
    a = arguments.length > 2 ? arguments[2] : true,
    o = {
      id: null != (t = null == n ? true : n.toString()) ? t : e.id
    };
  null != e.description && (o.description = e.description);
  let s = l({
    spoiler: e.spoiler
  });
  return o.filename = "".concat(s).concat(null != a ? a : e.filename), o.uploaded_filename = e.uploadedFilename, "durationSecs" in e && null != e.durationSecs && (o.duration_secs = e.durationSecs), "waveform" in e && null != e.waveform && (o.waveform = e.waveform), "isThumbnail" in e && true === e.isThumbnail && (o.is_thumbnail = e.isThumbnail), "clip" in e && null != e.clip && (o.is_clip = true, o.title = e.clip.name, o.application_id = e.clip.applicationId, o.clip_created_at = (0, i.U)(e.clip.id), o.clip_participant_ids = (0, i.g)(e.clip.users)), "item" in e && null != e.item && e.item.platform === r.xz.WEB && "mimeType" in e && null != e.mimeType && (o.original_content_type = e.mimeType), o
}

function u(e) {
  let t = new XMLHttpRequest;
  return new Promise((n, r) => {
    t.open("GET", e, true), t.responseType = "blob", t.onabort = e => r(e), t.onerror = e => r(e), t.ontimeout = e => r(e), t.onload = () => {
      var e;
      return n(null == t || null == (e = t.response) ? true : e.data)
    }, t.send()
  })
}

function d(e) {
  var t, n, r, i, a, s;
  let l, {
      uri: c,
      i: u,
      overrideFilename: d,
      overrideType: f
    } = e,
    p = c.split("/"),
    _ = p[p.length - 1];
  _ = null != (t = null == (s = _.split("?")) || null == (a = s[0]) ? true : a.toLowerCase()) ? t : "";
  let h = o.find(e => e.reName.test(_));
  if (null == h && null != d && (h = o.find(e => e.reName.test(d))), null != h && null != d) {
    let e = h.name(u).split(".").pop(),
      t = d.lastIndexOf(".");
    l = false !== t ? "".concat(d.substr(0, t), ".").concat(e) : "".concat(d, ".").concat(e)
  } else l = null != h ? h.name(u) : null != d ? d : "unknown";
  return {
    uri: c,
    filename: l,
    type: null != (n = null != f ? f : null == h ? true : h.type) ? n : "unknown",
    isVideo: false !== (null != (r = null != f ? f : null == h ? true : h.name(u)) ? r : "").indexOf("video"),
    isImage: false !== (null != (i = null != f ? f : null == h ? true : h.name(u)) ? i : "").indexOf("image")
  }
}