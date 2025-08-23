/** Chunk was on 46653 **/
/** chunk id: 127654, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  G: () => Z,
  d5: () => C
}), require("./388685.js"), require("./415506.js");
var Chunk481060 = require("./481060.js"),
  Chunk475179 = require("./475179.js"),
  Chunk904245 = require("./904245.js"),
  Chunk166459 = require("./166459.js"),
  Chunk531643 = require("./531643.jsx"),
  Chunk141795 = require("./141795.js"),
  Chunk476326 = require("./476326.js"),
  Chunk125186 = require("./125186.js"),
  Chunk367907 = require("./367907.js"),
  Chunk358221 = require("./358221.js"),
  Chunk893601 = require("./893601.js"),
  Chunk58873 = require("./58873.js"),
  Chunk117530 = require("./117530.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk403182 = require("./403182.js"),
  Chunk74538 = require("./74538.js"),
  Chunk979956 = require("./979956.js"),
  Chunk981631 = require("./981631.js"),
  Chunk959517 = require("./959517.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx");

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(i);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
      return Object.getOwnPropertyDescriptor(i, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = i[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function Z(e, t, i) {
  let n = f.default.getCurrentUser(),
    r = e.getGuildId(),
    s = O.dg(r),
    o = Array.from(t).map(e => e.size),
    a = Array.from(t).map(e => null != e.type ? e.type : "unknown"),
    d = o.reduce((e, t) => e + t, 0),
    c = o.length > 0 ? Math.max(...o) : 0,
    h = o.length;
  if (c > s) {
    let t = null == i ? true : i.reduce((e, t) => e + t, 0);
    (0, u.yw)(S.rMx.FILE_SIZE_LIMIT_EXCEEDED, {
      channel_id: e.id,
      guild_id: r,
      user_individual_file_size_limit: s,
      pre_compression_file_sizes: o,
      pre_compression_aggregate_file_size: d,
      num_attachments: h,
      error_type: E.xi.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
      attachment_mimetypes: a,
      post_compression_file_sizes: i,
      post_compression_aggregate_file_size: t
    }), (0, l.openUploadError)({
      title: w.intl.string(w.t["/tGlcn"]),
      help: (0, y.BK)(n, r),
      showPremiumUpsell: !(0, b.M5)(n, T.p9.TIER_2),
      fileSize: c
    });
    return
  }(0, l.openUploadError)({
    title: w.intl.string(w.t["/tGlcn"]),
    help: w.intl.formatToPlainString(w.t.tUOJdH, {
      maxSize: O.Ng(O.OC())
    })
  })
}
async function P(e, t, i) {
  let {
    currentGuildId: r
  } = i, s = (0, p.U)({
    location: "UploadPrompt.maybeCompressOversizedFiles"
  }), o = e => ({
    file: e,
    compressionMetadata: {
      originalContentType: e.type,
      compressTimeMs: 0,
      preCompressionSize: e.size
    }
  });
  if ("clipboard" !== t || !s.compressOversizedClipboard || !(0, y.Bf)(e, r)) return e.map(o);
  let l = O.dg(r),
    a = e => .5 * e.size <= l;
  return e.some(e => e.size > l && !a(e)) || 0 === e.filter(e => e.size > l && a(e)).length ? e.map(o) : ((0, n.showToast)((0, n.createToast)(w.intl.string(w.t.jfKTen), n.ToastType.MESSAGE)), await Promise.all(e.map(async e => {
    let t = await (0, c.lG)(e);
    return {
      file: t.success ? (0, c.ub)(t) : e,
      compressionMetadata: {
        originalContentType: e.type,
        compressTimeMs: t.compressTimeMs,
        preCompressionSize: e.size,
        convertedMimeType: t.success ? "image/webp" : true,
        conversionFailureReason: t.success ? true : t.reason,
        hashTimeMs: t.hashTimeMs
      }
    }
  })))
}
async function C(e, t, i) {
  let {
    filesMetadata: n,
    requireConfirm: c = true,
    showLargeMessageDialog: u = false,
    isThumbnail: p = false,
    origin: f
  } = arguments.length > 3 && true !== arguments[3] ? arguments[3] : {};
  if (e.length < 1) return;
  if (null != n && n.length !== e.length) throw Error("Unexpected mismatch between files and file metadata");
  let O = t.getGuildId(),
    b = Array.from(e),
    T = await P(b, f, {
      channel: t,
      currentGuildId: O
    }),
    C = T.map(e => e.file),
    j = T.map(e => e.compressionMetadata);
  if ((0, y.Bf)(C, O)) return void Z(t, b, C.map(e => e.size));
  if (m.Z.getUploadCount(t.id, i) + C.length > S.dN1) {
    (0, l.openUploadError)({
      title: w.intl.string(w.t.wOr6hI),
      help: w.intl.formatToPlainString(w.t["qqyp/f"], {
        limit: S.dN1
      })
    }), v.default.track(S.rMx.UPLOAD_FILE_LIMIT_ERROR, {
      existing_count: m.Z.getUploadCount(t.id, i),
      new_count: C.length
    });
    return
  }
  if (t.type !== S.d4z.GUILD_VOICE && t.type !== S.d4z.GUILD_STAGE_VOICE || h.Z.getChatOpen(t.id) || r.Z.updateChatOpen(t.id, true), c) {
    let e = C.map((e, t) => {
      let i = j[t];
      return I({
        file: e,
        platform: d.ow.WEB,
        isThumbnail: p,
        origin: f,
        compressionMetadata: i
      }, null == n ? true : n[t])
    });
    o.Z.addFiles({
      files: e,
      channelId: t.id,
      showLargeMessageDialog: u,
      draftType: i
    })
  } else {
    let e = C.map((e, i) => {
      let r = null != n ? n[i] : {},
        s = j[i];
      return new a.nH(I({
        file: e,
        platform: d.ow.WEB,
        isThumbnail: p,
        origin: f,
        compressionMetadata: s
      }, r), t.id)
    });
    s.Z.sendMessage(t.id, {
      content: "",
      tts: false,
      invalidEmojis: [],
      validNonShortcutEmojis: []
    }, true, {
      eagerDispatch: false,
      attachmentsToUpload: e,
      location: E.dy.INSTANT_UPLOAD,
      onAttachmentUploadError: (e, i, n) => {
        (0, g.A)({
          file: e,
          guildId: t.getGuildId(),
          analyticsLocations: [],
          code: i,
          reason: n
        })
      }
    })
  }
}