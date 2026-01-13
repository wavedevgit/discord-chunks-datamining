/** Chunk was on 77069 **/
/** chunk id: 623585, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  I: () => E
});
var Chunk880257 = require("./880257.js"),
  Chunk667172 = require("./667172.js"),
  Chunk237292 = require("./237292.js"),
  Chunk604849 = require("./604849.js"),
  Chunk278828 = require("./278828.js"),
  Chunk509613 = require("./509613.js"),
  Chunk63063 = require("./63063.js"),
  Chunk313789 = require("./313789.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let E = (0, Chunk509613.qs)(Chunk313789.n.CONTENT_AND_SOCIAL_DM_SAFETY_ALERTS_SETTING, {
  useTitle: () => c.intl.string(c.t.qFsx5q),
  useSubtitle: () => c.intl.format(c.t.lunaRv, {
    learnMoreLink: o.Z.getArticleURL(S.BhN.SAFETY_ALERTS)
  }),
  useValue: Chunk604849.c,
  setValue: Chunk278828.Q,
  usePredicate: function() {
    var t;
    let e = (0, s.y0)({
        location: "DMSafetyAlertsSetting"
      }),
      n = (0, l.v4)({
        location: "DMSafetyAlertsSetting"
      }),
      u = null == (t = (0, i.Z)()) || t;
    return e && !u && !n
  }
})