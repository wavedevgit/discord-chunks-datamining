/** Chunk was on 34132 **/
n.d(t, {
  G: () => y,
  d: () => w
}), n(539854), n(388685), n(415506);
var i = n(475179),
  o = n(166459),
  l = n(966390),
  r = n(531643),
  a = n(141795),
  c = n(476326),
  d = n(367907),
  _ = n(358221),
  p = n(117530),
  u = n(594174),
  s = n(626135),
  f = n(403182),
  g = n(74538),
  m = n(979956),
  h = n(981631),
  I = n(959517),
  b = n(474936),
  T = n(388032);

function E(e) {
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

function y(e, t) {
  let n = u.default.getCurrentUser(),
    i = e.getGuildId(),
    o = f.dg(i),
    l = [],
    a = 0,
    c = 0,
    _ = 0,
    p = [];
  for (let e of t) _ += 1, a += e.size, l.push(e.size), e.size > c && (c = e.size), null != e.type ? p.push(e.type) : p.push("unknown");
  if (c > o) {
    (0, d.yw)(h.rMx.FILE_SIZE_LIMIT_EXCEEDED, {
      channel_id: e.id,
      guild_id: i,
      user_individual_file_size_limit: o,
      pre_compression_file_sizes: l,
      pre_compression_aggregate_file_size: a,
      num_attachments: _,
      error_type: I.xi.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
      attachment_mimetypes: p
    }), (0, r.openUploadError)({
      title: T.intl.string(T.t["/tGlcn"]),
      help: (0, m.BK)(n, i),
      showPremiumUpsell: !(0, g.M5)(n, b.p9.TIER_2),
      fileSize: c
    });
    return
  }(0, r.openUploadError)({
    title: T.intl.string(T.t["/tGlcn"]),
    help: T.intl.formatToPlainString(T.t.tUOJdH, {
      maxSize: f.Ng(f.OC())
    })
  })
}

function w(e, t, n) {
  let {
    filesMetadata: d,
    requireConfirm: u = !0,
    showLargeMessageDialog: f = !1,
    isThumbnail: g = !1
  } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
  if (e.length < 1) return;
  if (null != d && d.length !== e.length) throw Error("Unexpected mismatch between files and file metadata");
  let I = t.getGuildId();
  if ((0, m.Bf)(e, I)) return void y(t, e);
  if (p.Z.getUploadCount(t.id, n) + e.length > h.dN1) {
    (0, r.openUploadError)({
      title: T.intl.string(T.t.wOr6hI),
      help: T.intl.formatToPlainString(T.t["qqyp/f"], {
        limit: h.dN1
      })
    }), s.default.track(h.rMx.UPLOAD_FILE_LIMIT_ERROR, {
      existing_count: p.Z.getUploadCount(t.id, n),
      new_count: e.length
    });
    return
  }
  if (t.type !== h.d4z.GUILD_VOICE && t.type !== h.d4z.GUILD_STAGE_VOICE || _.Z.getChatOpen(t.id) || i.Z.updateChatOpen(t.id, !0), u) {
    let i = Array.from(e).map((e, t) => E({
      file: e,
      platform: c.ow.WEB,
      isThumbnail: g
    }, null == d ? void 0 : d[t]));
    o.Z.addFiles({
      files: i,
      channelId: t.id,
      showLargeMessageDialog: f,
      draftType: n
    })
  } else {
    let i = Array.from(e).map((e, n) => {
      let i = null != d ? d[n] : {};
      return new a.n(E({
        file: e,
        platform: c.ow.WEB,
        isThumbnail: g
      }, i), t.id)
    });
    l.Z.uploadFiles({
      channelId: t.id,
      uploads: i,
      draftType: n
    })
  }
}