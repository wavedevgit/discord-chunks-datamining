/** Chunk was on 47841 **/
/** chunk id: 810877, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  W: () => b
}), require("./747238.js");
var Chunk830917 = require("./830917.js"),
  Chunk397927 = require("./397927.js"),
  Chunk157559 = require("./157559.js"),
  Chunk554375 = require("./554375.js"),
  Chunk563863 = require("./563863.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk690521 = require("./690521.js"),
  Chunk515718 = require("./515718.js"),
  Chunk307731 = require("./307731.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  p = require("./264572.js").Buffer;
let f = (e, t, n, r) => (o.default.track(g.HAw.EMOJI_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
    guild_id: n,
    file_size: t,
    upload_id: r
  }), a.o.TOO_BIG),
  b = async e => {
    let {
      data: t,
      file: n,
      guildId: b,
      uploadId: h,
      roles: x,
      image: j,
      hideErrorModal: _,
      analyticsLocation: O
    } = e, v = c.Ay.sanitizeEmojiName(n.name.split(".")[0]);
    if (c.Ay.isFileTooBig(n)) {
      if ("image/gif" === n.type || "image/webp" === n.type || "image/avif" === n.type) return f(n.name, n.size, b, h);
      else if (null != j) {
        var y, A;
        let e;
        t = (0, r.h_)(j, 128, 128);
        try {
          e = c.Ay.isDataTooBig(t)
        } catch (e) {
          return f(n.name, n.size, b, h)
        }
        if (y = t, A = e, o.default.track(g.HAw.EMOJI_FILE_RESIZED, {
            is_animated: false,
            file_type: n.type.split("/").pop(),
            original_file_size_bytes: n.size,
            resized_file_size_bytes: (0, d.EW)(y),
            resized_file_too_big: A
          }), e) return f(n.name, n.size, b, h)
      }
    }
    try {
      let e = await (0, s.Gf)({
        guildId: b,
        image: t,
        name: v,
        roles: x,
        analyticsLocation: O
      });
      return o.default.track(g.HAw.EMOJI_UPLOAD_COMPLETED, {
        guild_id: b,
        upload_id: h
      }), (0, i.showToast)((0, i.createToast)(m.intl.string(m.t["r0w9m/"]), i.ToastType.SUCCESS)), e
    } catch (s) {
      let e, n, {
        body: r,
        status: i
      } = s;
      return null != r && (r.code === g.t02.TOO_MANY_EMOJI ? (e = m.intl.string(m.t["jP/Rqm"]), n = a.o.TOO_MANY_EMOJI) : r.code === g.t02.TOO_MANY_ANIMATED_EMOJI ? (e = m.intl.string(m.t["6v5dP/"]), n = a.o.TOO_MANY_ANIMATED_EMOJI) : null != r.image || r.code === g.t02.INVALID_FILE_ASSET_SIZE ? (o.default.track(g.HAw.EMOJI_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
        guild_id: b,
        file_size: p.byteLength(t),
        upload_id: h
      }), e = m.intl.formatToPlainString(m.t.kIO9jy, {
        maxSize: u.i9
      }), n = a.o.TOO_BIG) : (null != r.image || r.code === g.t02.INVALID_FILE_ASSET_SIZE_RESIZE_GIF) && (n = a.o.RESIZE_GIF)), 429 === i && (e = m.intl.string(m.t.Whhv4w), n = a.o.RATE_LIMIT), null == e || _ || l.A.show({
        title: m.intl.string(m.t.iufib1),
        body: e
      }), n
    }
  }