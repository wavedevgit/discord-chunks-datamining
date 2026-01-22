/** Chunk was on 21738 **/
/** chunk id: 968930, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
});
var Chunk73153 = require("./73153.js"),
  Chunk631670 = require("./631670.js"),
  Chunk272355 = require("./272355.js"),
  Chunk159001 = require("./159001.js"),
  Chunk688796 = require("./688796.jsx"),
  Chunk101058 = require("./101058.js"),
  Chunk207803 = require("./207803.js"),
  Chunk287809 = require("./287809.js"),
  Chunk927578 = require("./927578.js"),
  Chunk339984 = require("./339984.js");
class f extends Chunk272355.A {
  _initialize() {
    r.h.subscribe("PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL", this.maybeOpenProfilePreviewModal)
  }
  _terminate() {
    r.h.unsubscribe("PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL", this.maybeOpenProfilePreviewModal)
  }
  maybeOpenProfilePreviewModal(e) {
    return e.uploadType === p.HL.AVATAR ? (e => {
      let {
        image: t,
        file: n,
        guildId: r,
        analyticsSource: l,
        isTryItOut: f
      } = e;
      if (f) return void(0, c.e$)(t);
      let h = u.default.getCurrentUser(),
        A = null != r ? a.zq : i.zq,
        g = d.Ay.canUseAnimatedAvatar(h);
      if (g || "image/gif" !== n.type) return void A(t);
      if (null == h) return;
      let m = (0, o.V7)({
        userId: h.id,
        image: t
      });
      if (!g) return void(0, s.G)({
        uploadType: p.HL.AVATAR,
        imageSrc: m,
        analyticsSource: l
      })
    })(e) : e.uploadType === p.HL.BANNER ? (e => {
      let {
        image: t,
        guildId: n,
        analyticsSource: r,
        isTryItOut: i
      } = e, l = t.imageUri;
      if (i) return void(0, c.xe)(l);
      let o = u.default.getCurrentUser(),
        f = null != n ? a.Iz : c.Iz,
        h = d.Ay.canUsePremiumProfileCustomization(o);
      d.Ay.canUsePremiumProfileCustomization(o) ? f(l) : null == o || h || (0, s.G)({
        uploadType: p.HL.BANNER,
        imageSrc: l,
        analyticsSource: r
      })
    })(e) : true
  }
}
let h = new f