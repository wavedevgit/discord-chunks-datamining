/** Chunk was on 78846 **/
n.d(t, {
  G: () => v,
  d: () => x
}), n(653041), n(47120), n(411104);
var a = n(475179),
  i = n(166459),
  r = n(966390),
  o = n(531643),
  l = n(476326),
  s = n(367907),
  c = n(358221),
  d = n(117530),
  u = n(594174),
  m = n(626135),
  p = n(403182),
  g = n(74538),
  h = n(979956),
  f = n(981631),
  _ = n(959517),
  b = n(474936),
  y = n(388032);

function v(e, t) {
  let n = u.default.getCurrentUser(),
    a = e.getGuildId(),
    i = p.dg(a),
    r = [],
    l = 0,
    c = 0,
    d = 0,
    m = [];
  for (let e of t) d += 1, l += e.size, r.push(e.size), e.size > c && (c = e.size), null != e.type ? m.push(e.type) : m.push("unknown");
  if (c > i) {
    (0, s.yw)(f.rMx.FILE_SIZE_LIMIT_EXCEEDED, {
      channel_id: e.id,
      guild_id: a,
      user_individual_file_size_limit: i,
      pre_compression_file_sizes: r,
      pre_compression_aggregate_file_size: l,
      num_attachments: d,
      error_type: _.xi.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
      attachment_mimetypes: m
    }), (0, o.openUploadError)({
      title: y.NW.string(y.t["/tGlcn"]),
      help: (0, h.BK)(n, a),
      showPremiumUpsell: !(0, g.M5)(n, b.p9.TIER_2),
      fileSize: c
    });
    return
  }(0, o.openUploadError)({
    title: y.NW.string(y.t["/tGlcn"]),
    help: y.NW.formatToPlainString(y.t.tUOJdH, {
      maxSize: p.Ng(p.OC())
    })
  })
}

function x(e, t, n) {
  let {
    filesMetadata: s,
    requireConfirm: u = !0,
    showLargeMessageDialog: p = !1,
    isThumbnail: g = !1
  } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
  if (e.length < 1) return;
  if (null != s && s.length !== e.length) throw Error("Unexpected mismatch between files and file metadata");
  let _ = t.getGuildId();
  if ((0, h.Bf)(e, _)) {
    v(t, e);
    return
  }
  if (d.Z.getUploadCount(t.id, n) + e.length > f.dN1) {
    (0, o.openUploadError)({
      title: y.NW.string(y.t.wOr6hI),
      help: y.NW.formatToPlainString(y.t["qqyp/f"], {
        limit: f.dN1
      })
    }), m.default.track(f.rMx.UPLOAD_FILE_LIMIT_ERROR, {
      existing_count: d.Z.getUploadCount(t.id, n),
      new_count: e.length
    });
    return
  }
  if (t.type !== f.d4z.GUILD_VOICE && t.type !== f.d4z.GUILD_STAGE_VOICE || c.Z.getChatOpen(t.id) || a.Z.updateChatOpen(t.id, !0), u) {
    let a = Array.from(e).map((e, t) => (function(e) {
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
    })({
      file: e,
      platform: l.ow.WEB,
      isThumbnail: g
    }, null == s ? void 0 : s[t]));
    i.Z.addFiles({
      files: a,
      channelId: t.id,
      showLargeMessageDialog: p,
      draftType: n
    })
  } else r.Z.instantBatchUpload({
    channelId: t.id,
    files: e,
    draftType: n,
    isThumbnail: g,
    filesMetadata: s
  })
}