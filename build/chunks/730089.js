/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  G: () => p
}), n(301563);
var r = n(36793),
  i = n(668781),
  s = n(80932),
  a = n(426642),
  l = n(626135),
  o = n(176354),
  A = n(956664),
  c = n(185923),
  d = n(981631),
  u = n(388032),
  g = n(413135).Buffer;
let f = (e, t, n, r) => (l.default.track(d.rMx.EMOJI_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
    guild_id: n,
    file_size: t,
    upload_id: r
  }), a.d.TOO_BIG),
  m = (e, t, n) => {
    l.default.track(d.rMx.EMOJI_FILE_RESIZED, {
      is_animated: !1,
      file_type: e.type.split("/").pop(),
      original_file_size_bytes: e.size,
      resized_file_size_bytes: (0, A.QB)(t),
      resized_file_too_big: n
    })
  },
  p = async e => {
    let {
      data: t,
      file: n,
      guildId: A,
      uploadId: p,
      roles: h,
      image: C,
      hideErrorModal: b
    } = e, v = o.ZP.sanitizeEmojiName(n.name.split(".")[0]);
    if (o.ZP.isFileTooBig(n)) {
      if ("image/gif" === n.type) return f(n.name, n.size, A, p);
      if (null != C) {
        let e;
        t = (0, r.Ae)(C, 128, 128);
        try {
          e = o.ZP.isDataTooBig(t)
        } catch (e) {
          return f(n.name, n.size, A, p)
        }
        if (m(n, t, e), e) return f(n.name, n.size, A, p)
      }
    }
    try {
      await (0, s.rS)({
        guildId: A,
        image: t,
        name: v,
        roles: h
      }), l.default.track(d.rMx.EMOJI_UPLOAD_COMPLETED, {
        guild_id: A,
        upload_id: p
      })
    } catch (o) {
      let e, n;
      let {
        body: r,
        status: s
      } = o;
      return null != r && (r.code === d.evJ.TOO_MANY_EMOJI ? (e = u.NW.string(u.t["jP/Rqq"]), n = a.d.TOO_MANY_EMOJI) : r.code === d.evJ.TOO_MANY_ANIMATED_EMOJI ? (e = u.NW.string(u.t["6v5dPz"]), n = a.d.TOO_MANY_ANIMATED_EMOJI) : null != r.image || r.code === d.evJ.INVALID_FILE_ASSET_SIZE ? (l.default.track(d.rMx.EMOJI_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
        guild_id: A,
        file_size: g.byteLength(t),
        upload_id: p
      }), e = u.NW.formatToPlainString(u.t.kIO9j4, {
        maxSize: c.xG
      }), n = a.d.TOO_BIG) : (null != r.image || r.code === d.evJ.INVALID_FILE_ASSET_SIZE_RESIZE_GIF) && (n = a.d.RESIZE_GIF)), 429 === s && (e = u.NW.string(u.t["Whhv4+"]), n = a.d.RATE_LIMIT), null == e || b || i.Z.show({
        title: u.NW.string(u.t.iufib2),
        body: e
      }), n
    }
  }