/** Chunk was on 1272 **/
/** chunk id: 489977, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk570140 = require("./570140.js"),
  Chunk809206 = require("./809206.js"),
  Chunk317770 = require("./317770.js"),
  Chunk18438 = require("./18438.js"),
  Chunk378879 = require("./378879.jsx"),
  Chunk643879 = require("./643879.js"),
  Chunk350327 = require("./350327.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk486324 = require("./486324.js");
let h = e => {
    let {
      image: t,
      file: n,
      guildId: r,
      analyticsSource: l,
      isTryItOutFlow: h
    } = e;
    if (h) return void(0, c.c_)(t);
    let f = u.default.getCurrentUser(),
      g = null != r ? a.I5 : i.I5,
      m = d.ZP.canUseAnimatedAvatar(f);
    if (m || "image/gif" !== n.type) return void g(t);
    if (null == f) return;
    let b = (0, s.SD)({
      userId: f.id,
      image: t
    });
    if (!m) return void(0, o.s)({
      uploadType: p.pC.AVATAR,
      imageSrc: b,
      analyticsSource: l
    })
  },
  f = e => {
    let {
      image: t,
      guildId: n,
      analyticsSource: r,
      isTryItOutFlow: i
    } = e, l = t.imageUri;
    if (i) return void(0, c.f4)(l);
    let s = u.default.getCurrentUser(),
      h = null != n ? a.g_ : c.g_,
      f = d.ZP.canUsePremiumProfileCustomization(s);
    return d.ZP.canUsePremiumProfileCustomization(s) ? void h(l) : null == s || f ? true : void(0, o.s)({
      uploadType: p.pC.BANNER,
      imageSrc: l,
      analyticsSource: r
    })
  };
class g extends Chunk317770.Z {
  _initialize() {
    Chunk570140.Z.subscribe("PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL", this.maybeOpenProfilePreviewModal)
  }
  _terminate() {
    Chunk570140.Z.unsubscribe("PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL", this.maybeOpenProfilePreviewModal)
  }
  maybeOpenProfilePreviewModal(e) {
    return e.uploadType === p.pC.AVATAR ? h(e) : e.uploadType === p.pC.BANNER ? f(e) : true
  }
}
let m = new g