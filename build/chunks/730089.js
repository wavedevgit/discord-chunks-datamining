/** Chunk was on 70830 **/
/** chunk id: 730089, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G: () => f
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
  p = require("./413135.js").Buffer;
let h = (e, t, n, r) => (o.default.track(m.rMx.EMOJI_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
    guild_id: n,
    file_size: t,
    upload_id: r
  }), s.d.TOO_BIG),
  f = async e => {
    let {
      data: t,
      file: n,
      guildId: f,
      uploadId: b,
      roles: x,
      image: j,
      hideErrorModal: v,
      analyticsLocation: _
    } = e, O = c.ZP.sanitizeEmojiName(n.name.split(".")[0]);
    if (c.ZP.isFileTooBig(n)) {
      if ("image/gif" === n.type || "image/webp" === n.type || "image/avif" === n.type) return h(n.name, n.size, f, b);
      else if (null != j) {
        var y, C;
        let e;
        t = (0, r.Ae)(j, 128, 128);
        try {
          e = c.ZP.isDataTooBig(t)
        } catch (e) {
          return h(n.name, n.size, f, b)
        }
        if (y = t, C = e, o.default.track(m.rMx.EMOJI_FILE_RESIZED, {
            is_animated: false,
            file_type: n.type.split("/").pop(),
            original_file_size_bytes: n.size,
            resized_file_size_bytes: (0, d.QB)(y),
            resized_file_too_big: C
          }), e) return h(n.name, n.size, f, b)
      }
    }
    try {
      let e = await (0, a.rS)({
        guildId: f,
        image: t,
        name: O,
        roles: x,
        analyticsLocation: _
      });
      return o.default.track(m.rMx.EMOJI_UPLOAD_COMPLETED, {
        guild_id: f,
        upload_id: b
      }), (0, i.showToast)((0, i.createToast)(g.intl.string(g.t.r0w9m5), i.ToastType.SUCCESS)), e
    } catch (a) {
      let e, n, {
        body: r,
        status: i
      } = a;
      return null != r && (r.code === m.evJ.TOO_MANY_EMOJI ? (e = g.intl.string(g.t["jP/Rqq"]), n = s.d.TOO_MANY_EMOJI) : r.code === m.evJ.TOO_MANY_ANIMATED_EMOJI ? (e = g.intl.string(g.t["6v5dPz"]), n = s.d.TOO_MANY_ANIMATED_EMOJI) : null != r.image || r.code === m.evJ.INVALID_FILE_ASSET_SIZE ? (o.default.track(m.rMx.EMOJI_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
        guild_id: f,
        file_size: p.byteLength(t),
        upload_id: b
      }), e = g.intl.formatToPlainString(g.t.kIO9j4, {
        maxSize: u.xG
      }), n = s.d.TOO_BIG) : (null != r.image || r.code === m.evJ.INVALID_FILE_ASSET_SIZE_RESIZE_GIF) && (n = s.d.RESIZE_GIF)), 429 === i && (e = g.intl.string(g.t["Whhv4+"]), n = s.d.RATE_LIMIT), null == e || v || l.Z.show({
        title: g.intl.string(g.t.iufib2),
        body: e
      }), n
    }
  }