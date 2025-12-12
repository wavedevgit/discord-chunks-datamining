/** Chunk was on 43790 **/
/** chunk id: 495784, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk913527 = require("./913527.js"),
  d = require.n(Chunk913527),
  Chunk704215 = require("./704215.js"),
  Chunk951716 = require("./951716.js"),
  Chunk266454 = require("./266454.js"),
  Chunk605236 = require("./605236.js"),
  Chunk972830 = require("./972830.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk374023 = require("./374023.js"),
  Chunk709054 = require("./709054.js"),
  Chunk645792 = require("./645792.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js");
let h = {
  init(e) {
    let {
      hasModalOpen: t,
      openModal: a
    } = e;
    f.s.isDisallowPopupsSet() || (0, r.h)(() => {
      if ((0, i.Z)()) return;
      let e = u.default.getCurrentUser(),
        n = null != e && 7 > d()().diff(d()(_.default.extractTimestamp(e.id)), "days"),
        r = null != s.Z.getGuildsArray().find(e => e.features.has(p.GuildFeatures.HUB)),
        f = !(0, c.zu)(o.z.HUB_BACK_TO_SCHOOL_UPSELL);
      !(n || t() || r || !f) && (0, b.b)() && (b.Z.trackExposure({
        location: "8b792a_1"
      }), a(), (0, l.kk)(o.z.HUB_BACK_TO_SCHOOL_UPSELL))
    })
  },
  hideHubUpsell() {
    (0, Chunk266454.Q3)(Chunk704215.z.HUB_BACK_TO_SCHOOL_UPSELL, {
      dismissAction: Chunk921944.L.AUTO
    })
  }
}