/** Chunk was on 47841 **/
/** chunk id: 810877, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  W: () => p
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
  b = require("./264572.js").Buffer;
let m = (e, t, n, r) => (c.default.track(f.HAw.EMOJI_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
    guild_id: n,
    file_size: t,
    upload_id: r
  }), a.o.TOO_BIG),
  p = async e => {
    let {
      data: t,
      file: n,
      guildId: p,
      uploadId: x,
      roles: h,
      image: j,
      hideErrorModal: O,
      analyticsLocation: y
    } = e, v = o.Ay.sanitizeEmojiName(n.name.split(".")[0]);
    if (o.Ay.isFileTooBig(n)) {
      if ("image/gif" === n.type || "image/webp" === n.type || "image/avif" === n.type) return m(n.name, n.size, p, x);
      else if (null != j) {
        var A, E;
        let e;
        t = (0, r.h_)(j, 128, 128);
        try {
          e = o.Ay.isDataTooBig(t)
        } catch (e) {
          return m(n.name, n.size, p, x)
        }
        if (A = t, E = e, c.default.track(f.HAw.EMOJI_FILE_RESIZED, {
            is_animated: false,
            file_type: n.type.split("/").pop(),
            original_file_size_bytes: n.size,
            resized_file_size_bytes: (0, d.EW)(A),
            resized_file_too_big: E
          }), e) return m(n.name, n.size, p, x)
      }
    }
    try {
      let e = await (0, s.Gf)({
        guildId: p,
        image: t,
        name: v,
        roles: h,
        analyticsLocation: y
      });
      return c.default.track(f.HAw.EMOJI_UPLOAD_COMPLETED, {
        guild_id: p,
        upload_id: x
      }), (0, i.showToast)((0, i.createToast)(g.intl.string(g.t["r0w9m/"]), i.ToastType.SUCCESS)), e
    } catch (s) {
      let e, n, {
        body: r,
        status: i
      } = s;
      return null != r && (r.code === f.t02.TOO_MANY_EMOJI ? (e = g.intl.string(g.t["jP/Rqm"]), n = a.o.TOO_MANY_EMOJI) : r.code === f.t02.TOO_MANY_ANIMATED_EMOJI ? (e = g.intl.string(g.t["6v5dP/"]), n = a.o.TOO_MANY_ANIMATED_EMOJI) : null != r.image || r.code === f.t02.INVALID_FILE_ASSET_SIZE ? (c.default.track(f.HAw.EMOJI_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
        guild_id: p,
        file_size: b.byteLength(t),
        upload_id: x
      }), e = g.intl.formatToPlainString(g.t.kIO9jy, {
        maxSize: u.i9
      }), n = a.o.TOO_BIG) : (null != r.image || r.code === f.t02.INVALID_FILE_ASSET_SIZE_RESIZE_GIF) && (n = a.o.RESIZE_GIF)), 429 === i && (e = g.intl.string(g.t.Whhv4w), n = a.o.RATE_LIMIT), null == e || O || l.A.show({
        title: g.intl.string(g.t.iufib1),
        body: e
      }), n
    }
  }