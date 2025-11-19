/** Chunk was on 43491 **/
/** chunk id: 746622, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  H4: () => u,
  e$: () => c,
  zg: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk481060 = require("./481060.js"),
  Chunk598117 = require("./598117.js"),
  Chunk981631 = require("./981631.js"),
  Chunk185923 = require("./185923.js"),
  Chunk388032 = require("./388032.jsx");
let u = e => {
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
      case a.evJ.TOO_MANY_EMOJI:
      case a.evJ.TOO_MANY_ANIMATED_EMOJI:
        return s.intl.string(s.t.FtKH49);
      case i.ze.TOO_BIG:
      case a.evJ.INVALID_FILE_ASSET_SIZE:
      case a.evJ.INVALID_FORM_BODY:
        return s.intl.formatToPlainString(s.t.kIO9jy, {
          maxSize: o.xG
        });
      case a.evJ.INVALID_FILE_ASSET_SIZE_RESIZE_GIF:
        return s.intl.string(s.t.sp16MU);
      case i.ze.MISSING_IMAGE_DATA:
        return s.intl.string(s.t["41/Kbh"]);
      case i.ze.MISSING_GUILD:
        return s.intl.string(s.t["8RCtpD"]);
      case i.ze.GIF_CROPPING:
        return s.intl.string(s.t.X6rtiO);
      case i.ze.IMAGE_LOAD:
        return s.intl.format(s.t.xZLPcF, {});
      case i.ze.NO_PERMISSIONS:
        return s.intl.string(s.t.QY7ZFZ);
      case 429:
        return s.intl.string(s.t["4rjikl"]);
      case i.ze.UNKNOWN:
      default:
        return s.intl.string(s.t.iufib1)
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
    return i.ze.UNKNOWN
  }