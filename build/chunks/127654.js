/** Chunk was on web.js **/
/** chunk id: 127654, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G: () => C,
  d5: () => R
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

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function A(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      S(e, t, n[t])
    })
  }
  return e
}

function C(e, t, n) {
  let r = m.default.getCurrentUser(),
    i = e.guild_id,
    a = E.dg(i),
    o = Array.from(t).map(e => e.size),
    l = Array.from(t).map(e => null != e.type ? e.type : "unknown"),
    c = o.reduce((e, t) => e + t, 0),
    u = o.length > 0 ? Math.max(...o) : 0,
    f = o.length;
  if (u > a) {
    let t = null == n ? true : n.reduce((e, t) => e + t, 0);
    (0, d.yw)(O.rMx.FILE_SIZE_LIMIT_EXCEEDED, {
      channel_id: e.id,
      guild_id: i,
      user_individual_file_size_limit: a,
      pre_compression_file_sizes: o,
      pre_compression_aggregate_file_size: c,
      num_attachments: f,
      error_type: v.xi.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
      attachment_mimetypes: l,
      post_compression_file_sizes: n,
      post_compression_aggregate_file_size: t
    }), (0, s.openUploadError)({
      title: T.intl.string(T.t["/tGlcn"]),
      help: (0, y.BK)(r, i),
      showPremiumUpsell: !(0, b.M5)(r, I.p9.TIER_2),
      fileSize: u
    });
    return
  }(0, s.openUploadError)({
    title: T.intl.string(T.t["/tGlcn"]),
    help: T.intl.formatToPlainString(T.t.tUOJdH, {
      maxSize: E.Ng(E.OC())
    })
  })
}
async function N(e, t, n) {
  let {
    currentGuildId: i
  } = n, a = (0, _.U)({
    location: "UploadPrompt.maybeCompressOversizedFiles"
  }), o = e => ({
    file: e,
    compressionMetadata: {
      originalContentType: e.type,
      compressTimeMs: 0,
      preCompressionSize: e.size,
      earlyClipboardCompressionAttempted: false
    }
  });
  if ("clipboard" !== t || !a.compressOversizedClipboard || !(0, y.Bf)(e, i)) return e.map(o);
  let s = .5,
    l = E.dg(i),
    c = e => e.size > l,
    d = e => e.size * s,
    f = e => d(e) <= l;
  return e.some(e => c(e) && !f(e)) || 0 === e.filter(e => c(e) && f(e)).length ? e.map(o) : ((0, r.showToast)((0, r.createToast)(T.intl.string(T.t.jfKTen), r.ToastType.MESSAGE)), await Promise.all(e.map(async e => {
    let t = await (0, u.lG)(e);
    return {
      file: t.success ? (0, u.ub)(t) : e,
      compressionMetadata: {
        originalContentType: e.type,
        compressTimeMs: t.compressTimeMs,
        preCompressionSize: e.size,
        earlyClipboardCompressionAttempted: true,
        convertedMimeType: t.success ? "image/webp" : true,
        conversionFailureReason: t.success ? true : t.reason,
        hashTimeMs: t.hashTimeMs
      }
    }
  })))
}
async function R(e, t, n) {
  let {
    filesMetadata: r,
    requireConfirm: u = true,
    showLargeMessageDialog: d = false,
    isThumbnail: _ = false,
    origin: m
  } = arguments.length > 3 && true !== arguments[3] ? arguments[3] : {};
  if (e.length < 1) return;
  if (null != r && r.length !== e.length) throw Error("Unexpected mismatch between files and file metadata");
  let E = t.getGuildId(),
    b = Array.from(e),
    I = await N(b, m, {
      channel: t,
      currentGuildId: E
    }),
    S = I.map(e => e.file),
    R = I.map(e => e.compressionMetadata);
  if ((0, y.Bf)(S, E)) return void C(t, b, S.map(e => e.size));
  if (h.Z.getUploadCount(t.id, n) + S.length > O.dN1) {
    (0, s.openUploadError)({
      title: T.intl.string(T.t.wOr6hI),
      help: T.intl.formatToPlainString(T.t["qqyp/f"], {
        limit: O.dN1
      })
    }), g.default.track(O.rMx.UPLOAD_FILE_LIMIT_ERROR, {
      existing_count: h.Z.getUploadCount(t.id, n),
      new_count: S.length
    });
    return
  }
  if (t.type !== O.d4z.GUILD_VOICE && t.type !== O.d4z.GUILD_STAGE_VOICE || f.Z.getChatOpen(t.id) || i.Z.updateChatOpen(t.id, true), u) {
    let e = S.map((e, t) => {
      let n = R[t];
      return A({
        file: e,
        platform: c.ow.WEB,
        isThumbnail: _,
        origin: m,
        compressionMetadata: n
      }, null == r ? true : r[t])
    });
    o.Z.addFiles({
      files: e,
      channelId: t.id,
      showLargeMessageDialog: d,
      draftType: n
    })
  } else {
    let e = S.map((e, n) => {
      let i = null != r ? r[n] : {},
        a = R[n];
      return new l.nH(A({
        file: e,
        platform: c.ow.WEB,
        isThumbnail: _,
        origin: m,
        compressionMetadata: a
      }, i), t.id)
    });
    a.Z.sendMessage(t.id, {
      content: "",
      tts: false,
      invalidEmojis: [],
      validNonShortcutEmojis: []
    }, true, {
      eagerDispatch: false,
      attachmentsToUpload: e,
      location: v.dy.INSTANT_UPLOAD,
      onAttachmentUploadError: (e, n, r) => {
        (0, p.A)({
          file: e,
          guildId: t.getGuildId(),
          analyticsLocations: [],
          code: n,
          reason: r
        })
      }
    })
  }
}