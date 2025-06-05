/** Chunk was on 89129 **/
n.d(t, {
  G: () => w,
  d: () => B
}), n(539854), n(388685), n(415506);
var i = n(475179),
  o = n(904245),
  l = n(166459),
  r = n(531643),
  a = n(141795),
  d = n(476326),
  c = n(367907),
  _ = n(358221),
  p = n(58873),
  u = n(117530),
  s = n(594174),
  f = n(626135),
  g = n(403182),
  m = n(74538),
  h = n(979956),
  I = n(981631),
  b = n(959517),
  T = n(474936),
  E = n(388032);

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = i
    })
  }
  return e
}

function w(e, t) {
  let n = s.default.getCurrentUser(),
    i = e.getGuildId(),
    o = g.dg(i),
    l = [],
    a = 0,
    d = 0,
    _ = 0,
    p = [];
  for (let e of t) _ += 1, a += e.size, l.push(e.size), e.size > d && (d = e.size), null != e.type ? p.push(e.type) : p.push("unknown");
  if (d > o) {
    (0, c.yw)(I.rMx.FILE_SIZE_LIMIT_EXCEEDED, {
      channel_id: e.id,
      guild_id: i,
      user_individual_file_size_limit: o,
      pre_compression_file_sizes: l,
      pre_compression_aggregate_file_size: a,
      num_attachments: _,
      error_type: b.xi.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
      attachment_mimetypes: p
    }), (0, r.openUploadError)({
      title: E.intl.string(E.t["/tGlcn"]),
      help: (0, h.BK)(n, i),
      showPremiumUpsell: !(0, m.M5)(n, T.p9.TIER_2),
      fileSize: d
    });
    return
  }(0, r.openUploadError)({
    title: E.intl.string(E.t["/tGlcn"]),
    help: E.intl.formatToPlainString(E.t.tUOJdH, {
      maxSize: g.Ng(g.OC())
    })
  })
}

function B(e, t, n) {
  let {
    filesMetadata: c,
    requireConfirm: s = !0,
    showLargeMessageDialog: g = !1,
    isThumbnail: m = !1
  } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
  if (e.length < 1) return;
  if (null != c && c.length !== e.length) throw Error("Unexpected mismatch between files and file metadata");
  let b = t.getGuildId();
  if ((0, h.Bf)(e, b)) return void w(t, e);
  if (u.Z.getUploadCount(t.id, n) + e.length > I.dN1) {
    (0, r.openUploadError)({
      title: E.intl.string(E.t.wOr6hI),
      help: E.intl.formatToPlainString(E.t["qqyp/f"], {
        limit: I.dN1
      })
    }), f.default.track(I.rMx.UPLOAD_FILE_LIMIT_ERROR, {
      existing_count: u.Z.getUploadCount(t.id, n),
      new_count: e.length
    });
    return
  }
  if (t.type !== I.d4z.GUILD_VOICE && t.type !== I.d4z.GUILD_STAGE_VOICE || _.Z.getChatOpen(t.id) || i.Z.updateChatOpen(t.id, !0), s) {
    let i = Array.from(e).map((e, t) => y({
      file: e,
      platform: d.ow.WEB,
      isThumbnail: m
    }, null == c ? void 0 : c[t]));
    l.Z.addFiles({
      files: i,
      channelId: t.id,
      showLargeMessageDialog: g,
      draftType: n
    })
  } else {
    let n = Array.from(e).map((e, n) => {
      let i = null != c ? c[n] : {};
      return new a.n(y({
        file: e,
        platform: d.ow.WEB,
        isThumbnail: m
      }, i), t.id)
    });
    o.Z.sendMessage(t.id, {
      content: "",
      tts: !1,
      invalidEmojis: [],
      validNonShortcutEmojis: []
    }, void 0, {
      eagerDispatch: !1,
      attachmentsToUpload: n,
      onAttachmentUploadError: (e, n, i) => {
        (0, p.A)({
          file: e,
          guildId: t.getGuildId(),
          analyticsLocations: [],
          code: n,
          reason: i
        })
      }
    })
  }
}