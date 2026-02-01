/** Chunk was on 21738 **/
/** chunk id: 509099, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
});
var Chunk989349 = require("./989349.js"),
  i = require.n(Chunk989349),
  Chunk554146 = require("./554146.js"),
  Chunk45143 = require("./45143.js"),
  Chunk826673 = require("./826673.js"),
  Chunk367727 = require("./367727.js"),
  Chunk507263 = require("./507263.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk536194 = require("./536194.js"),
  Chunk661191 = require("./661191.js"),
  Chunk664531 = require("./664531.js"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js");
let A = {
  init(e) {
    let {
      hasModalOpen: t,
      openModal: n
    } = e;
    p.P.isDisallowPopupsSet() || (0, c.B)(() => {
      if ((0, a.A)()) return;
      let e = d.default.getCurrentUser(),
        r = null != e && 7 > i()().diff(i()(h.default.extractTimestamp(e.id)), "days"),
        c = null != u.A.getGuildsArray().find(e => e.features.has(m.GuildFeatures.HUB)),
        p = !(0, s.k8)(l.M.HUB_BACK_TO_SCHOOL_UPSELL);
      !(r || t() || c || !p) && (0, g.a)() && (g.A.trackExposure({
        location: "8b792a_1"
      }), n(), (0, o.Vh)(l.M.HUB_BACK_TO_SCHOOL_UPSELL))
    })
  },
  hideHubUpsell() {
    (0, s.Dr)(l.M.HUB_BACK_TO_SCHOOL_UPSELL, {
      dismissAction: f.i.AUTO
    })
  }
}