/** Chunk was on 89129 **/
n.d(t, {
  G: () => h,
  d: () => I
}), n(539854), n(388685), n(415506);
var i = n(475179),
  l = n(166459),
  r = n(966390),
  o = n(531643),
  c = n(141795),
  a = n(476326),
  d = n(367907),
  u = n(358221),
  s = n(117530),
  p = n(594174),
  _ = n(626135),
  f = n(403182),
  g = n(74538),
  m = n(979956),
  O = n(981631),
  b = n(959517),
  E = n(474936),
  y = n(388032);

function P(e) {
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

function h(e, t) {
  let n = p.default.getCurrentUser(),
    i = e.getGuildId(),
    l = f.dg(i),
    r = [],
    c = 0,
    a = 0,
    u = 0,
    s = [];
  for (let e of t) u += 1, c += e.size, r.push(e.size), e.size > a && (a = e.size), null != e.type ? s.push(e.type) : s.push("unknown");
  if (a > l) {
    (0, d.yw)(O.rMx.FILE_SIZE_LIMIT_EXCEEDED, {
      channel_id: e.id,
      guild_id: i,
      user_individual_file_size_limit: l,
      pre_compression_file_sizes: r,
      pre_compression_aggregate_file_size: c,
      num_attachments: u,
      error_type: b.xi.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
      attachment_mimetypes: s
    }), (0, o.openUploadError)({
      title: y.intl.string(y.t["/tGlcn"]),
      help: (0, m.BK)(n, i),
      showPremiumUpsell: !(0, g.M5)(n, E.p9.TIER_2),
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

function I(e, t, n) {
  let {
    filesMetadata: d,
    requireConfirm: p = !0,
    showLargeMessageDialog: f = !1,
    isThumbnail: g = !1
  } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
  if (e.length < 1) return;
  if (null != d && d.length !== e.length) throw Error("Unexpected mismatch between files and file metadata");
  let b = t.getGuildId();
  if ((0, m.Bf)(e, b)) return void h(t, e);
  if (s.Z.getUploadCount(t.id, n) + e.length > O.dN1) {
    (0, o.openUploadError)({
      title: y.intl.string(y.t.wOr6hI),
      help: y.intl.formatToPlainString(y.t["qqyp/f"], {
        limit: O.dN1
      })
    }), _.default.track(O.rMx.UPLOAD_FILE_LIMIT_ERROR, {
      existing_count: s.Z.getUploadCount(t.id, n),
      new_count: e.length
    });
    return
  }
  if (t.type !== O.d4z.GUILD_VOICE && t.type !== O.d4z.GUILD_STAGE_VOICE || u.Z.getChatOpen(t.id) || i.Z.updateChatOpen(t.id, !0), p) {
    let i = Array.from(e).map((e, t) => P({
      file: e,
      platform: a.ow.WEB,
      isThumbnail: g
    }, null == d ? void 0 : d[t]));
    l.Z.addFiles({
      files: i,
      channelId: t.id,
      showLargeMessageDialog: f,
      draftType: n
    })
  } else {
    let i = Array.from(e).map((e, n) => {
      let i = null != d ? d[n] : {};
      return new c.n(P({
        file: e,
        platform: a.ow.WEB,
        isThumbnail: g
      }, i), t.id)
    });
    r.Z.uploadFiles({
      channelId: t.id,
      uploads: i,
      draftType: n
    })
  }
}