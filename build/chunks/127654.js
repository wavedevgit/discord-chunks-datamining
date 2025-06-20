/** Chunk was on 94495 **/
n.d(t, {
  G: () => x,
  d: () => j
}), n(539854), n(388685), n(415506);
var a = n(475179),
  i = n(904245),
  o = n(166459),
  r = n(531643),
  c = n(141795),
  l = n(476326),
  s = n(367907),
  d = n(358221),
  u = n(58873),
  m = n(117530),
  p = n(594174),
  f = n(626135),
  _ = n(403182),
  g = n(74538),
  b = n(979956),
  h = n(981631),
  y = n(959517),
  T = n(474936),
  C = n(388032);

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      a = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), a.forEach(function(t) {
      var a;
      a = n[t], t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = a
    })
  }
  return e
}

function x(e, t) {
  let n = p.default.getCurrentUser(),
    a = e.getGuildId(),
    i = _.dg(a),
    o = [],
    c = 0,
    l = 0,
    d = 0,
    u = [];
  for (let e of t) d += 1, c += e.size, o.push(e.size), e.size > l && (l = e.size), null != e.type ? u.push(e.type) : u.push("unknown");
  if (l > i) {
    (0, s.yw)(h.rMx.FILE_SIZE_LIMIT_EXCEEDED, {
      channel_id: e.id,
      guild_id: a,
      user_individual_file_size_limit: i,
      pre_compression_file_sizes: o,
      pre_compression_aggregate_file_size: c,
      num_attachments: d,
      error_type: y.xi.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
      attachment_mimetypes: u
    }), (0, r.openUploadError)({
      title: C.intl.string(C.t["/tGlcn"]),
      help: (0, b.BK)(n, a),
      showPremiumUpsell: !(0, g.M5)(n, T.p9.TIER_2),
      fileSize: l
    });
    return
  }(0, r.openUploadError)({
    title: C.intl.string(C.t["/tGlcn"]),
    help: C.intl.formatToPlainString(C.t.tUOJdH, {
      maxSize: _.Ng(_.OC())
    })
  })
}

function j(e, t, n) {
  let {
    filesMetadata: s,
    requireConfirm: p = !0,
    showLargeMessageDialog: _ = !1,
    isThumbnail: g = !1
  } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
  if (e.length < 1) return;
  if (null != s && s.length !== e.length) throw Error("Unexpected mismatch between files and file metadata");
  let y = t.getGuildId();
  if ((0, b.Bf)(e, y)) return void x(t, e);
  if (m.Z.getUploadCount(t.id, n) + e.length > h.dN1) {
    (0, r.openUploadError)({
      title: C.intl.string(C.t.wOr6hI),
      help: C.intl.formatToPlainString(C.t["qqyp/f"], {
        limit: h.dN1
      })
    }), f.default.track(h.rMx.UPLOAD_FILE_LIMIT_ERROR, {
      existing_count: m.Z.getUploadCount(t.id, n),
      new_count: e.length
    });
    return
  }
  if (t.type !== h.d4z.GUILD_VOICE && t.type !== h.d4z.GUILD_STAGE_VOICE || d.Z.getChatOpen(t.id) || a.Z.updateChatOpen(t.id, !0), p) {
    let a = Array.from(e).map((e, t) => O({
      file: e,
      platform: l.ow.WEB,
      isThumbnail: g
    }, null == s ? void 0 : s[t]));
    o.Z.addFiles({
      files: a,
      channelId: t.id,
      showLargeMessageDialog: _,
      draftType: n
    })
  } else {
    let n = Array.from(e).map((e, n) => {
      let a = null != s ? s[n] : {};
      return new c.n(O({
        file: e,
        platform: l.ow.WEB,
        isThumbnail: g
      }, a), t.id)
    });
    i.Z.sendMessage(t.id, {
      content: "",
      tts: !1,
      invalidEmojis: [],
      validNonShortcutEmojis: []
    }, void 0, {
      eagerDispatch: !1,
      attachmentsToUpload: n,
      onAttachmentUploadError: (e, n, a) => {
        (0, u.A)({
          file: e,
          guildId: t.getGuildId(),
          analyticsLocations: [],
          code: n,
          reason: a
        })
      }
    })
  }
}