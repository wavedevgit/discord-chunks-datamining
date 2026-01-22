/** Chunk was on 76443 **/
/** chunk id: 516628, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E2: () => d,
  Fx: () => o,
  u1: () => c
});
var Chunk627968 = require("./627968.js"),
  Chunk397927 = require("./397927.js"),
  Chunk80569 = require("./80569.js"),
  Chunk652215 = require("./652215.js"),
  Chunk307731 = require("./307731.js"),
  Chunk985018 = require("./985018.jsx");
let o = e => {
    let {
      error: t,
      variant: n,
      color: i
    } = e;
    return (0, l.jsx)(r.Text, {
      variant: n,
      color: i,
      children: c(t)
    })
  },
  c = e => {
    switch (e) {
      case a.t02.TOO_MANY_EMOJI:
      case a.t02.TOO_MANY_ANIMATED_EMOJI:
        return u.intl.string(u.t.FtKH49);
      case i.j.TOO_BIG:
      case a.t02.INVALID_FILE_ASSET_SIZE:
      case a.t02.INVALID_FORM_BODY:
        return u.intl.formatToPlainString(u.t.kIO9jy, {
          maxSize: s.i9
        });
      case a.t02.INVALID_FILE_ASSET_SIZE_RESIZE_GIF:
        return u.intl.string(u.t.sp16MU);
      case i.j.MISSING_IMAGE_DATA:
        return u.intl.string(u.t["41/Kbh"]);
      case i.j.MISSING_GUILD:
        return u.intl.string(u.t["8RCtpD"]);
      case i.j.ANIMATED_CROPPING:
        return u.intl.string(u.t.yoVkHN);
      case i.j.IMAGE_LOAD:
        return u.intl.format(u.t.xZLPcF, {});
      case i.j.NO_PERMISSIONS:
        return u.intl.string(u.t.QY7ZFZ);
      case 429:
        return u.intl.string(u.t["4rjikl"]);
      case i.j.UNKNOWN:
      default:
        return u.intl.string(u.t.iufib1)
    }
  },
  d = e => {
    var t;
    if ((null == e || null == (t = e.body) ? true : t.code) != null) {
      let t = Number(e.body.code);
      if (!Number.isNaN(t)) return t
    }
    if (null == e ? true : e.text) try {
      let t = JSON.parse(e.text);
      if ((null == t ? true : t.code) != null) {
        let e = Number(t.code);
        if (!Number.isNaN(e)) return e
      }
    } catch (e) {}
    return i.j.UNKNOWN
  }