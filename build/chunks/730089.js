/** Chunk was on 9536 **/
/** chunk id: 730089, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  G: () => b
}), require("./35282.js");
var Chunk36793 = require("./36793.js"),
  Chunk481060 = require("./481060.js"),
  Chunk668781 = require("./668781.js"),
  Chunk80932 = require("./80932.js"),
  Chunk426642 = require("./426642.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk176354 = require("./176354.js"),
  Chunk956664 = require("./956664.js"),
  Chunk185923 = require("./185923.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  f = require("./413135.js").Buffer;
let p = (e, t, n, r) => (o.default.track(g.rMx.EMOJI_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
    guild_id: n,
    file_size: t,
    upload_id: r
  }), s.d.TOO_BIG),
  b = async e => {
    let {
      data: t,
      file: n,
      guildId: b,
      uploadId: h,
      roles: x,
      image: j,
      hideErrorModal: v,
      analyticsLocation: O
    } = e, C = c.ZP.sanitizeEmojiName(n.name.split(".")[0]);
    if (c.ZP.isFileTooBig(n)) {
      if ("image/gif" === n.type || "image/webp" === n.type || "image/avif" === n.type) return p(n.name, n.size, b, h);
      else if (null != j) {
        var y, N;
        let e;
        t = (0, r.Ae)(j, 128, 128);
        try {
          e = c.ZP.isDataTooBig(t)
        } catch (e) {
          return p(n.name, n.size, b, h)
        }
        if (y = t, N = e, o.default.track(g.rMx.EMOJI_FILE_RESIZED, {
            is_animated: false,
            file_type: n.type.split("/").pop(),
            original_file_size_bytes: n.size,
            resized_file_size_bytes: (0, d.QB)(y),
            resized_file_too_big: N
          }), e) return p(n.name, n.size, b, h)
      }
    }
    try {
      let e = await (0, a.rS)({
        guildId: b,
        image: t,
        name: C,
        roles: x,
        analyticsLocation: O
      });
      return o.default.track(g.rMx.EMOJI_UPLOAD_COMPLETED, {
        guild_id: b,
        upload_id: h
      }), (0, i.showToast)((0, i.createToast)(m.intl.string(m.t["r0w9m/"]), i.ToastType.SUCCESS)), e
    } catch (a) {
      let e, n, {
        body: r,
        status: i
      } = a;
      return null != r && (r.code === g.evJ.TOO_MANY_EMOJI ? (e = m.intl.string(m.t["jP/Rqm"]), n = s.d.TOO_MANY_EMOJI) : r.code === g.evJ.TOO_MANY_ANIMATED_EMOJI ? (e = m.intl.string(m.t["6v5dP/"]), n = s.d.TOO_MANY_ANIMATED_EMOJI) : null != r.image || r.code === g.evJ.INVALID_FILE_ASSET_SIZE ? (o.default.track(g.rMx.EMOJI_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
        guild_id: b,
        file_size: f.byteLength(t),
        upload_id: h
      }), e = m.intl.formatToPlainString(m.t.kIO9jy, {
        maxSize: u.xG
      }), n = s.d.TOO_BIG) : (null != r.image || r.code === g.evJ.INVALID_FILE_ASSET_SIZE_RESIZE_GIF) && (n = s.d.RESIZE_GIF)), 429 === i && (e = m.intl.string(m.t.Whhv4w), n = s.d.RATE_LIMIT), null == e || v || l.Z.show({
        title: m.intl.string(m.t.iufib1),
        body: e
      }), n
    }
  }