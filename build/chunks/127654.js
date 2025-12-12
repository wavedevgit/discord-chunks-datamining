/** Chunk was on web.js **/
/** chunk id: 127654, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G: () => I,
  d: () => T
}), require("./388685.js"), require("./415506.js");
var Chunk475179 = require("./475179.js"),
  Chunk904245 = require("./904245.js"),
  Chunk166459 = require("./166459.js"),
  Chunk531643 = require("./531643.jsx"),
  Chunk141795 = require("./141795.js"),
  Chunk476326 = require("./476326.js"),
  Chunk367907 = require("./367907.js"),
  Chunk358221 = require("./358221.js"),
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

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}

function I(e, t, n) {
  let r = p.default.getCurrentUser(),
    i = e.guild_id,
    a = m.dg(i),
    s = Array.from(t).map(e => e.size),
    l = Array.from(t).map(e => null != e.type ? e.type : "unknown"),
    u = s.reduce((e, t) => e + t, 0),
    d = s.length > 0 ? Math.max(...s) : 0,
    f = s.length;
  if (d > a) {
    let t = null == n ? true : n.reduce((e, t) => e + t, 0);
    (0, c.yw)(E.rMx.FILE_SIZE_LIMIT_EXCEEDED, {
      channel_id: e.id,
      guild_id: i,
      user_individual_file_size_limit: a,
      pre_compression_file_sizes: s,
      pre_compression_aggregate_file_size: u,
      num_attachments: f,
      error_type: b.xi.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
      attachment_mimetypes: l,
      post_compression_file_sizes: n,
      post_compression_aggregate_file_size: t
    }), (0, o.openUploadError)({
      title: O.intl.string(O.t["/tGlcj"]),
      help: (0, g.BK)(r, i),
      showPremiumUpsell: !(0, h.M5)(r, y.PremiumTypes.TIER_2),
      fileSize: d
    });
    return
  }(0, o.openUploadError)({
    title: O.intl.string(O.t["/tGlcj"]),
    help: O.intl.formatToPlainString(O.t.tUOJdH, {
      maxSize: m.Ng(m.OC())
    })
  })
}
async function T(e, t, n) {
  let {
    filesMetadata: c,
    requireConfirm: p = true,
    showLargeMessageDialog: m = false,
    isThumbnail: h = false,
    origin: y
  } = arguments.length > 3 && true !== arguments[3] ? arguments[3] : {};
  if (e.length < 1) return;
  if (null != c && c.length !== e.length) throw Error("Unexpected mismatch between files and file metadata");
  let v = t.getGuildId(),
    T = Array.from(e),
    C = T.map(e => ({
      originalContentType: e.type,
      preCompressionSize: e.size
    }));
  if (await Promise.resolve(), (0, g.Bf)(T, v)) return void I(t, T);
  if (f.Z.getUploadCount(t.id, n) + T.length > E.dN1) {
    (0, o.openUploadError)({
      title: O.intl.string(O.t.wOr6hB),
      help: O.intl.formatToPlainString(O.t["qqyp/e"], {
        limit: E.dN1
      })
    }), _.default.track(E.rMx.UPLOAD_FILE_LIMIT_ERROR, {
      existing_count: f.Z.getUploadCount(t.id, n),
      new_count: T.length
    });
    return
  }
  if (t.type !== E.d4z.GUILD_VOICE && t.type !== E.d4z.GUILD_STAGE_VOICE || u.Z.getChatOpen(t.id) || r.Z.updateChatOpen(t.id, true), p) {
    let e = T.map((e, t) => S({
      file: e,
      platform: l.ow.WEB,
      isThumbnail: h,
      origin: y,
      compressionMetadata: C[t]
    }, null == c ? true : c[t]));
    a.Z.addFiles({
      files: e,
      channelId: t.id,
      showLargeMessageDialog: m,
      draftType: n
    })
  } else {
    let e = T.map((e, n) => {
      let r = null != c ? c[n] : {};
      return new s.nH(S({
        file: e,
        platform: l.ow.WEB,
        isThumbnail: h,
        origin: y,
        compressionMetadata: C[n]
      }, r), t.id)
    });
    i.Z.sendMessage(t.id, {
      content: "",
      tts: false,
      invalidEmojis: [],
      validNonShortcutEmojis: []
    }, true, {
      eagerDispatch: false,
      attachmentsToUpload: e,
      location: b.dy.INSTANT_UPLOAD,
      onAttachmentUploadError: (e, n, r) => {
        (0, d.A)({
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