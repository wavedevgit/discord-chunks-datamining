/** Chunk was on 1272 **/
/** chunk id: 489977, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
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
class f extends Chunk317770.Z {
  _initialize() {
    r.Z.subscribe("PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL", this.maybeOpenProfilePreviewModal)
  }
  _terminate() {
    r.Z.unsubscribe("PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL", this.maybeOpenProfilePreviewModal)
  }
  maybeOpenProfilePreviewModal(e) {
    return e.uploadType === p.pC.AVATAR ? (e => {
      let {
        image: t,
        file: n,
        guildId: r,
        analyticsSource: l,
        isTryItOut: f
      } = e;
      if (f) return void(0, c.c_)(t);
      let g = u.default.getCurrentUser(),
        h = null != r ? a.I5 : i.I5,
        m = d.ZP.canUseAnimatedAvatar(g);
      if (m || "image/gif" !== n.type) return void h(t);
      if (null == g) return;
      let b = (0, s.SD)({
        userId: g.id,
        image: t
      });
      if (!m) return void(0, o.s)({
        uploadType: p.pC.AVATAR,
        imageSrc: b,
        analyticsSource: l
      })
    })(e) : e.uploadType === p.pC.BANNER ? (e => {
      let {
        image: t,
        guildId: n,
        analyticsSource: r,
        isTryItOut: i
      } = e, l = t.imageUri;
      if (i) return void(0, c.f4)(l);
      let s = u.default.getCurrentUser(),
        f = null != n ? a.g_ : c.g_,
        g = d.ZP.canUsePremiumProfileCustomization(s);
      return d.ZP.canUsePremiumProfileCustomization(s) ? void f(l) : null == s || g ? true : void(0, o.s)({
        uploadType: p.pC.BANNER,
        imageSrc: l,
        analyticsSource: r
      })
    })(e) : true
  }
}
let g = new f