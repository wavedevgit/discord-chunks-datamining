/** Chunk was on web.js **/
/** chunk id: 518960, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => I,
  V: () => S
}), require("./896048.js"), require("./65821.js");
var Chunk367513 = require("./367513.js"),
  Chunk843472 = require("./843472.js"),
  Chunk608299 = require("./608299.js"),
  Chunk23658 = require("./23658.jsx"),
  Chunk743445 = require("./743445.js"),
  Chunk565150 = require("./565150.js"),
  Chunk58149 = require("./58149.js"),
  Chunk313961 = require("./313961.js"),
  Chunk301169 = require("./301169.js"),
  Chunk522602 = require("./522602.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk453771 = require("./453771.js"),
  Chunk927578 = require("./927578.js"),
  Chunk382287 = require("./382287.js"),
  Chunk652215 = require("./652215.js"),
  Chunk381941 = require("./381941.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx");

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      A(e, t, n[t])
    })
  }
  return e
}

function S(e, t, n) {
  let r = p.default.getCurrentUser(),
    i = e.guild_id,
    a = h.o2(i),
    o = Array.from(t).map(e => e.size),
    l = Array.from(t).map(e => null != e.type ? e.type : "unknown"),
    u = o.reduce((e, t) => e + t, 0),
    d = o.length > 0 ? Math.max(...o) : 0,
    f = o.length;
  if (d > a) {
    let t = null == n ? true : n.reduce((e, t) => e + t, 0);
    (0, c.zV)(E.HAw.FILE_SIZE_LIMIT_EXCEEDED, {
      channel_id: e.id,
      guild_id: i,
      user_individual_file_size_limit: a,
      pre_compression_file_sizes: o,
      pre_compression_aggregate_file_size: u,
      num_attachments: f,
      error_type: b.ty.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
      attachment_mimetypes: l,
      post_compression_file_sizes: n,
      post_compression_aggregate_file_size: t
    }), (0, s.openUploadError)({
      title: O.intl.string(O.t["/tGlcj"]),
      help: (0, g.WQ)(r, i),
      showPremiumUpsell: !(0, m.YE)(r, y.PremiumTypes.TIER_2),
      fileSize: d
    });
    return
  }(0, s.openUploadError)({
    title: O.intl.string(O.t["/tGlcj"]),
    help: O.intl.formatToPlainString(O.t.tUOJdH, {
      maxSize: h.Hb(h.bB())
    })
  })
}
async function I(e, t, n) {
  let {
    filesMetadata: c,
    requireConfirm: p = true,
    isThumbnail: h = false,
    origin: m
  } = arguments.length > 3 && true !== arguments[3] ? arguments[3] : {};
  if (e.length < 1) return;
  if (null != c && c.length !== e.length) throw Error("Unexpected mismatch between files and file metadata");
  let y = t.getGuildId(),
    A = Array.from(e),
    I = A.map(e => ({
      originalContentType: e.type,
      preCompressionSize: e.size
    }));
  if (await Promise.resolve(), (0, g.fJ)(A, y)) return void S(t, A);
  if (f.A.getUploadCount(t.id, n) + A.length > E.XgB) {
    (0, s.openUploadError)({
      title: O.intl.string(O.t.wOr6hB),
      help: O.intl.formatToPlainString(O.t["qqyp/e"], {
        limit: E.XgB
      })
    }), _.default.track(E.HAw.UPLOAD_FILE_LIMIT_ERROR, {
      existing_count: f.A.getUploadCount(t.id, n),
      new_count: A.length
    });
    return
  }
  if (t.type !== E.rbe.GUILD_VOICE && t.type !== E.rbe.GUILD_STAGE_VOICE || u.A.getChatOpen(t.id) || r.A.updateChatOpen(t.id, true), p) {
    let e = A.map((e, t) => v({
      file: e,
      platform: l.xz.WEB,
      isThumbnail: h,
      origin: m,
      compressionMetadata: I[t]
    }, null == c ? true : c[t]));
    a.A.addFiles({
      files: e,
      channelId: t.id,
      draftType: n
    })
  } else {
    let e = A.map((e, n) => {
      let r = null != c ? c[n] : {};
      return new o.bK(v({
        file: e,
        platform: l.xz.WEB,
        isThumbnail: h,
        origin: m,
        compressionMetadata: I[n]
      }, r), t.id)
    });
    i.A.sendMessage(t.id, {
      content: "",
      tts: false,
      invalidEmojis: [],
      validNonShortcutEmojis: []
    }, true, {
      eagerDispatch: false,
      attachmentsToUpload: e,
      location: b.Hx.INSTANT_UPLOAD,
      onAttachmentUploadError: (e, n, r) => {
        (0, d.k)({
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