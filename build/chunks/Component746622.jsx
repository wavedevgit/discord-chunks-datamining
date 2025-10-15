/** Chunk was on 2262 **/
/** chunk id: 746622, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  H4: () => u,
  e$: () => c,
  zg: () => d
});
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js"),
  Chunk598117 = require("./598117.js"),
  Chunk981631 = require("./981631.js"),
  Chunk185923 = require("./185923.js"),
  Chunk388032 = require("./388032.jsx");
let u = e => {
    let {
      error: t,
      variant: n,
      color: l
    } = e;
    return (0, r.jsx)(i.Text, {
      variant: n,
      color: l,
      children: c(t)
    })
  },
  c = e => {
    switch (e) {
      case a.evJ.TOO_MANY_EMOJI:
      case a.evJ.TOO_MANY_ANIMATED_EMOJI:
        return o.intl.string(o.t.FtKH49);
      case l.ze.TOO_BIG:
      case a.evJ.INVALID_FILE_ASSET_SIZE:
      case a.evJ.INVALID_FORM_BODY:
        return o.intl.formatToPlainString(o.t.kIO9jy, {
          maxSize: s.xG
        });
      case a.evJ.INVALID_FILE_ASSET_SIZE_RESIZE_GIF:
        return o.intl.string(o.t.sp16MU);
      case l.ze.MISSING_IMAGE_DATA:
        return o.intl.string(o.t["41/Kbh"]);
      case l.ze.MISSING_GUILD:
        return o.intl.string(o.t["8RCtpD"]);
      case l.ze.GIF_CROPPING:
        return o.intl.string(o.t.X6rtiO);
      case l.ze.IMAGE_LOAD:
        return o.intl.format(o.t.xZLPcF, {});
      case l.ze.NO_PERMISSIONS:
        return o.intl.string(o.t.QY7ZFZ);
      case 429:
        return o.intl.string(o.t["4rjikl"]);
      case l.ze.UNKNOWN:
      default:
        return o.intl.string(o.t.iufib1)
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
    return l.ze.UNKNOWN
  }