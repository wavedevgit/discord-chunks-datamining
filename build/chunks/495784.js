/** Chunk was on 95468 **/
/** chunk id: 495784, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
});
var Chunk913527 = require("./913527.js"),
  l = require.n(Chunk913527),
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
let v = {
  init(e) {
    let {
      hasModalOpen: t,
      openModal: n
    } = e;
    m.s.isDisallowPopupsSet() || (0, c.h)(() => {
      if ((0, a.Z)()) return;
      let e = u.default.getCurrentUser(),
        r = null != e && 7 > l()().diff(l()(f.default.extractTimestamp(e.id)), "days"),
        c = null != d.Z.getGuildsArray().find(e => e.features.has(h.oNc.HUB)),
        m = !(0, s.zu)(i.z.HUB_BACK_TO_SCHOOL_UPSELL);
      !(r || t() || c || !m) && (0, p.b)() && (p.Z.trackExposure({
        location: "8b792a_1"
      }), n(), (0, o.kk)(i.z.HUB_BACK_TO_SCHOOL_UPSELL))
    })
  },
  hideHubUpsell() {
    (0, Chunk266454.Q3)(Chunk704215.z.HUB_BACK_TO_SCHOOL_UPSELL, {
      dismissAction: Chunk921944.L.AUTO
    })
  }
}