/** Chunk was on web.js **/
/** chunk id: 127654, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G: () => T,
  d: () => S
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

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
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

function T(e, t) {
  let n = _.default.getCurrentUser(),
    r = e.getGuildId(),
    i = h.dg(r),
    o = [],
    s = 0,
    l = 0,
    u = 0,
    d = [];
  for (let e of t) u += 1, s += e.size, o.push(e.size), e.size > l && (l = e.size), null != e.type ? d.push(e.type) : d.push("unknown");
  if (l > i) {
    (0, c.yw)(E.rMx.FILE_SIZE_LIMIT_EXCEEDED, {
      channel_id: e.id,
      guild_id: r,
      user_individual_file_size_limit: i,
      pre_compression_file_sizes: o,
      pre_compression_aggregate_file_size: s,
      num_attachments: u,
      error_type: b.xi.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
      attachment_mimetypes: d
    }), (0, a.openUploadError)({
      title: O.intl.string(O.t["/tGlcn"]),
      help: (0, g.BK)(n, r),
      showPremiumUpsell: !(0, m.M5)(n, y.p9.TIER_2),
      fileSize: l
    });
    return
  }(0, a.openUploadError)({
    title: O.intl.string(O.t["/tGlcn"]),
    help: O.intl.formatToPlainString(O.t.tUOJdH, {
      maxSize: h.Ng(h.OC())
    })
  })
}

function S(e, t, n) {
  let {
    filesMetadata: c,
    requireConfirm: _ = true,
    showLargeMessageDialog: h = false,
    isThumbnail: m = false,
    origin: y
  } = arguments.length > 3 && true !== arguments[3] ? arguments[3] : {};
  if (e.length < 1) return;
  if (null != c && c.length !== e.length) throw Error("Unexpected mismatch between files and file metadata");
  let v = t.getGuildId();
  if ((0, g.Bf)(e, v)) return void T(t, e);
  if (f.Z.getUploadCount(t.id, n) + e.length > E.dN1) {
    (0, a.openUploadError)({
      title: O.intl.string(O.t.wOr6hI),
      help: O.intl.formatToPlainString(O.t["qqyp/f"], {
        limit: E.dN1
      })
    }), p.default.track(E.rMx.UPLOAD_FILE_LIMIT_ERROR, {
      existing_count: f.Z.getUploadCount(t.id, n),
      new_count: e.length
    });
    return
  }
  if (t.type !== E.d4z.GUILD_VOICE && t.type !== E.d4z.GUILD_STAGE_VOICE || u.Z.getChatOpen(t.id) || r.Z.updateChatOpen(t.id, true), _) {
    let r = Array.from(e).map((e, t) => I({
      file: e,
      platform: l.ow.WEB,
      isThumbnail: m,
      origin: y
    }, null == c ? true : c[t]));
    o.Z.addFiles({
      files: r,
      channelId: t.id,
      showLargeMessageDialog: h,
      draftType: n
    })
  } else {
    let n = Array.from(e).map((e, n) => {
      let r = null != c ? c[n] : {};
      return new s.nH(I({
        file: e,
        platform: l.ow.WEB,
        isThumbnail: m,
        origin: y
      }, r), t.id)
    });
    i.Z.sendMessage(t.id, {
      content: "",
      tts: false,
      invalidEmojis: [],
      validNonShortcutEmojis: []
    }, true, {
      eagerDispatch: false,
      attachmentsToUpload: n,
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