/** Chunk was on 9885 **/
/** chunk id: 448018, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  v: () => p
});
var Chunk497505 = require("./497505.js"),
  Chunk988303 = require("./988303.js"),
  Chunk941348 = require("./941348.jsx"),
  Chunk658590 = require("./658590.js"),
  Chunk647365 = require("./647365.jsx"),
  Chunk743294 = require("./743294.js");
let c = {
    component: Chunk647365.Z,
    getCollapsedHeight: () => 40,
    getPreEnrollmentExpandedHeight: () => 240,
    getPostEnrollmentBackgroundImage: e => "linear-gradient(90deg, ".concat(e.config.colors.primary, ", ").concat(e.config.colors.secondary, ")"),
    getPreEnrollmentBackgroundColor: e => true,
    canCollapseOnBlur: e => {
      var t;
      return (null == (t = e.userStatus) ? true : t.completedAt) == null
    },
    shouldExpandOnQuestComplete: e => true,
    getVerticalPadding: () => 8
  },
  u = Chunk743294.Li,
  d = {
    component: Chunk941348.Z,
    getCollapsedHeight: e => {
      var t;
      return (null == (t = e.userStatus) ? true : t.enrolledAt) != null ? 66 : 40
    },
    getPreEnrollmentExpandedHeight: () => 270,
    getPostEnrollmentBackgroundImage: () => "linear-gradient(90deg, ".concat(Chunk743294.aY, ", ").concat(Chunk743294.v6, ")"),
    getPreEnrollmentBackgroundColor: e => "var(--home-background)",
    canCollapseOnBlur: e => true,
    shouldExpandOnQuestComplete: e => false,
    getVerticalPadding: () => u
  },
  p = (e, t, n) => {
    var o;
    let i = (null == (o = e.userStatus) ? true : o.enrolledAt) != null,
      l = !i && t === s.P.V2 || i && n === s.P.V2 || (0, a.a)(e),
      u = l ? d : c;
    return {
      component: u.component,
      collapsedHeight: u.getCollapsedHeight(e),
      preEnrollmentExpandedHeight: u.getPreEnrollmentExpandedHeight(e),
      postEnrollmentBackgroundImage: u.getPostEnrollmentBackgroundImage(e),
      preEnrollmentBackgroundColor: u.getPreEnrollmentBackgroundColor(e),
      canCollapseOnBlur: u.canCollapseOnBlur(e),
      shouldExpandOnQuestComplete: u.shouldExpandOnQuestComplete(e),
      paddingVertical: u.getVerticalPadding(),
      trackingCtx: {
        content: l ? r.jn.QUEST_BAR_V2 : r.jn.QUEST_BAR
      }
    }
  }