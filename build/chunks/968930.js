/** Chunk was on 21738 **/
/** chunk id: 968930, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
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
class h extends Chunk272355.A {
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
        isTryItOut: h
      } = e;
      if (h) return void(0, c.e$)(t);
      let g = u.default.getCurrentUser(),
        m = null != r ? a.zq : i.zq,
        f = d.Ay.canUseAnimatedAvatar(g);
      if (f || "image/gif" !== n.type) return void m(t);
      if (null == g) return;
      let A = (0, o.V7)({
        userId: g.id,
        image: t
      });
      if (!f) return void(0, s.G)({
        uploadType: p.HL.AVATAR,
        imageSrc: A,
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
        h = null != n ? a.Iz : c.Iz,
        g = d.Ay.canUsePremiumProfileCustomization(o);
      d.Ay.canUsePremiumProfileCustomization(o) ? h(l) : null == o || g || (0, s.G)({
        uploadType: p.HL.BANNER,
        imageSrc: l,
        analyticsSource: r
      })
    })(e) : true
  }
}
let g = new h