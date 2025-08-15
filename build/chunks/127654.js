/** Chunk was on 46653 **/
/** chunk id: 127654, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  G: () => I,
  d: () => Z
}), require("./539854.js"), require("./388685.js"), require("./415506.js");
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

function E(t) {
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

function I(t, e) {
  let i = p.default.getCurrentUser(),
    n = t.getGuildId(),
    r = f.dg(n),
    s = [],
    l = 0,
    a = 0,
    u = 0,
    c = [];
  for (let t of e) u += 1, l += t.size, s.push(t.size), t.size > a && (a = t.size), null != t.type ? c.push(t.type) : c.push("unknown");
  if (a > r) {
    (0, d.yw)(O.rMx.FILE_SIZE_LIMIT_EXCEEDED, {
      channel_id: t.id,
      guild_id: n,
      user_individual_file_size_limit: r,
      pre_compression_file_sizes: s,
      pre_compression_aggregate_file_size: l,
      num_attachments: u,
      error_type: b.xi.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
      attachment_mimetypes: c
    }), (0, o.openUploadError)({
      title: y.intl.string(y.t["/tGlcn"]),
      help: (0, v.BK)(i, n),
      showPremiumUpsell: !(0, m.M5)(i, S.p9.TIER_2),
      fileSize: a
    });
    return
  }(0, o.openUploadError)({
    title: y.intl.string(y.t["/tGlcn"]),
    help: y.intl.formatToPlainString(y.t.tUOJdH, {
      maxSize: f.Ng(f.OC())
    })
  })
}

function Z(t, e, i) {
  let {
    filesMetadata: d,
    requireConfirm: p = true,
    showLargeMessageDialog: f = false,
    isThumbnail: m = false,
    origin: S
  } = arguments.length > 3 && true !== arguments[3] ? arguments[3] : {};
  if (t.length < 1) return;
  if (null != d && d.length !== t.length) throw Error("Unexpected mismatch between files and file metadata");
  let Z = e.getGuildId();
  if ((0, v.Bf)(t, Z)) return void I(e, t);
  if (h.Z.getUploadCount(e.id, i) + t.length > O.dN1) {
    (0, o.openUploadError)({
      title: y.intl.string(y.t.wOr6hI),
      help: y.intl.formatToPlainString(y.t["qqyp/f"], {
        limit: O.dN1
      })
    }), g.default.track(O.rMx.UPLOAD_FILE_LIMIT_ERROR, {
      existing_count: h.Z.getUploadCount(e.id, i),
      new_count: t.length
    });
    return
  }
  if (e.type !== O.d4z.GUILD_VOICE && e.type !== O.d4z.GUILD_STAGE_VOICE || u.Z.getChatOpen(e.id) || n.Z.updateChatOpen(e.id, true), p) {
    let n = Array.from(t).map((t, e) => E({
      file: t,
      platform: a.ow.WEB,
      isThumbnail: m,
      origin: S,
      originalContentType: t.type
    }, null == d ? true : d[e]));
    s.Z.addFiles({
      files: n,
      channelId: e.id,
      showLargeMessageDialog: f,
      draftType: i
    })
  } else {
    let i = Array.from(t).map((t, i) => {
      let n = null != d ? d[i] : {};
      return new l.nH(E({
        file: t,
        platform: a.ow.WEB,
        isThumbnail: m,
        origin: S,
        originalContentType: t.type
      }, n), e.id)
    });
    r.Z.sendMessage(e.id, {
      content: "",
      tts: false,
      invalidEmojis: [],
      validNonShortcutEmojis: []
    }, true, {
      eagerDispatch: false,
      attachmentsToUpload: i,
      location: b.dy.INSTANT_UPLOAD,
      onAttachmentUploadError: (t, i, n) => {
        (0, c.A)({
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