/** Chunk was on web.js **/
/** chunk id: 448018, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  v: () => g
});
var Chunk497505 = require("./497505.js"),
  Chunk988303 = require("./988303.js"),
  Chunk941348 = require("./941348.jsx"),
  Chunk658590 = require("./658590.js"),
  Chunk647365 = require("./647365.jsx"),
  Chunk743294 = require("./743294.js");
let c = 40,
  u = 240,
  d = 8,
  f = {
    component: Chunk647365.Z,
    getCollapsedHeight: () => c,
    getPreEnrollmentExpandedHeight: () => u,
    getPostEnrollmentBackgroundImage: e => "linear-gradient(90deg, ".concat(e.config.colors.primary, ", ").concat(e.config.colors.secondary, ")"),
    getPreEnrollmentBackgroundColor: e => true,
    canCollapseOnBlur: e => {
      var t;
      return (null == (t = e.userStatus) ? true : t.completedAt) == null
    },
    shouldExpandOnQuestComplete: e => true,
    getVerticalPadding: () => d
  },
  _ = 66,
  p = 270,
  h = Chunk743294.Li,
  m = {
    component: Chunk941348.Z,
    getCollapsedHeight: e => {
      var t;
      return (null == (t = e.userStatus) ? true : t.enrolledAt) != null ? _ : c
    },
    getPreEnrollmentExpandedHeight: () => p,
    getPostEnrollmentBackgroundImage: () => "linear-gradient(90deg, ".concat(Chunk743294.aY, ", ").concat(Chunk743294.v6, ")"),
    getPreEnrollmentBackgroundColor: e => "var(--home-background)",
    canCollapseOnBlur: e => true,
    shouldExpandOnQuestComplete: e => false,
    getVerticalPadding: () => h
  },
  g = (e, t, n) => {
    var a;
    let s = (null == (a = e.userStatus) ? true : a.enrolledAt) != null,
      l = !s && t === i.P.V2 || s && n === i.P.V2 || (0, o.a)(e),
      c = l ? m : f;
    return {
      component: c.component,
      collapsedHeight: c.getCollapsedHeight(e),
      preEnrollmentExpandedHeight: c.getPreEnrollmentExpandedHeight(e),
      postEnrollmentBackgroundImage: c.getPostEnrollmentBackgroundImage(e),
      preEnrollmentBackgroundColor: c.getPreEnrollmentBackgroundColor(e),
      canCollapseOnBlur: c.canCollapseOnBlur(e),
      shouldExpandOnQuestComplete: c.shouldExpandOnQuestComplete(e),
      paddingVertical: c.getVerticalPadding(),
      trackingCtx: {
        content: l ? r.jn.QUEST_BAR_V2 : r.jn.QUEST_BAR
      }
    }
  }