/** Chunk was on 46653 **/
/** chunk id: 127654, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  G: () => Z,
  d5: () => C
}), require("./539854.js"), require("./388685.js"), require("./415506.js");
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

function I(t) {
  for (var e = 1; e < arguments.length; e++) {
    var i = null != arguments[e] ? arguments[e] : {},
      n = Object.keys(i);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(t) {
      return Object.getOwnPropertyDescriptor(i, t).enumerable
    }))), n.forEach(function(e) {
      var n;
      n = i[e], e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : t[e] = n
    })
  }
  return t
}

function Z(t, e) {
  let i = f.default.getCurrentUser(),
    n = t.getGuildId(),
    r = O.dg(n),
    s = [],
    o = 0,
    a = 0,
    d = 0,
    c = [];
  for (let t of e) d += 1, o += t.size, s.push(t.size), t.size > a && (a = t.size), null != t.type ? c.push(t.type) : c.push("unknown");
  if (a > r) {
    (0, u.yw)(S.rMx.FILE_SIZE_LIMIT_EXCEEDED, {
      channel_id: t.id,
      guild_id: n,
      user_individual_file_size_limit: r,
      pre_compression_file_sizes: s,
      pre_compression_aggregate_file_size: o,
      num_attachments: d,
      error_type: E.xi.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
      attachment_mimetypes: c
    }), (0, l.openUploadError)({
      title: w.intl.string(w.t["/tGlcn"]),
      help: (0, y.BK)(i, n),
      showPremiumUpsell: !(0, b.M5)(i, T.p9.TIER_2),
      fileSize: a
    });
    return
  }(0, l.openUploadError)({
    title: w.intl.string(w.t["/tGlcn"]),
    help: w.intl.formatToPlainString(w.t.tUOJdH, {
      maxSize: O.Ng(O.OC())
    })
  })
}
async function P(t, e, i) {
  let {
    currentGuildId: r
  } = i, s = (0, p.U)({
    location: "UploadPrompt.maybeCompressOversizedFiles"
  }), o = t => ({
    file: t,
    compressionMetadata: {
      originalContentType: t.type,
      compressTimeMs: 0,
      preCompressionSize: t.size
    }
  });
  if ("clipboard" !== e || !s.compressOversizedClipboard || !(0, y.Bf)(t, r)) return t.map(o);
  let l = O.dg(r),
    a = t => .5 * t.size <= l;
  return t.some(t => t.size > l && !a(t)) || 0 === t.filter(t => t.size > l && a(t)).length ? t.map(o) : ((0, n.showToast)((0, n.createToast)(w.intl.string(w.t.jfKTen), n.ToastType.MESSAGE)), await Promise.all(t.map(async t => {
    let e = await (0, c.lG)(t);
    return {
      file: e.success ? (0, c.ub)(e) : t,
      compressionMetadata: {
        originalContentType: t.type,
        compressTimeMs: e.compressTimeMs,
        preCompressionSize: t.size,
        convertedMimeType: e.success ? "image/webp" : true,
        conversionFailureReason: e.success ? true : e.reason,
        hashTimeMs: e.hashTimeMs
      }
    }
  })))
}
async function C(t, e, i) {
  let {
    filesMetadata: n,
    requireConfirm: c = true,
    showLargeMessageDialog: u = false,
    isThumbnail: p = false,
    origin: f
  } = arguments.length > 3 && true !== arguments[3] ? arguments[3] : {};
  if (t.length < 1) return;
  if (null != n && n.length !== t.length) throw Error("Unexpected mismatch between files and file metadata");
  let O = e.getGuildId(),
    b = await P(Array.from(t), f, {
      channel: e,
      currentGuildId: O
    }),
    T = b.map(t => t.file),
    C = b.map(t => t.compressionMetadata);
  if ((0, y.Bf)(T, O)) return void Z(e, Array.from(t));
  if (m.Z.getUploadCount(e.id, i) + T.length > S.dN1) {
    (0, l.openUploadError)({
      title: w.intl.string(w.t.wOr6hI),
      help: w.intl.formatToPlainString(w.t["qqyp/f"], {
        limit: S.dN1
      })
    }), v.default.track(S.rMx.UPLOAD_FILE_LIMIT_ERROR, {
      existing_count: m.Z.getUploadCount(e.id, i),
      new_count: T.length
    });
    return
  }
  if (e.type !== S.d4z.GUILD_VOICE && e.type !== S.d4z.GUILD_STAGE_VOICE || h.Z.getChatOpen(e.id) || r.Z.updateChatOpen(e.id, true), c) {
    let t = T.map((t, e) => {
      let i = C[e];
      return I({
        file: t,
        platform: d.ow.WEB,
        isThumbnail: p,
        origin: f,
        compressionMetadata: i
      }, null == n ? true : n[e])
    });
    o.Z.addFiles({
      files: t,
      channelId: e.id,
      showLargeMessageDialog: u,
      draftType: i
    })
  } else {
    let t = T.map((t, i) => {
      let r = null != n ? n[i] : {},
        s = C[i];
      return new a.nH(I({
        file: t,
        platform: d.ow.WEB,
        isThumbnail: p,
        origin: f,
        compressionMetadata: s
      }, r), e.id)
    });
    s.Z.sendMessage(e.id, {
      content: "",
      tts: false,
      invalidEmojis: [],
      validNonShortcutEmojis: []
    }, true, {
      eagerDispatch: false,
      attachmentsToUpload: t,
      location: E.dy.INSTANT_UPLOAD,
      onAttachmentUploadError: (t, i, n) => {
        (0, g.A)({
          file: t,
          guildId: e.getGuildId(),
          analyticsLocations: [],
          code: i,
          reason: n
        })
      }
    })
  }
}