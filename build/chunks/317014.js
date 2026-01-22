/** Chunk was on 28979 **/
/** chunk id: 317014, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  t: () => E
});
var Chunk945276 = require("./945276.js"),
  Chunk639555 = require("./639555.js"),
  Chunk617641 = require("./617641.js"),
  Chunk546140 = require("./546140.js"),
  Chunk776038 = require("./776038.js"),
  Chunk419954 = require("./419954.js"),
  Chunk975571 = require("./975571.js"),
  Chunk780964 = require("./780964.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let E = (0, Chunk419954.zD)(Chunk780964.X.CONTENT_AND_SOCIAL_DM_SAFETY_ALERTS_SETTING, {
  useTitle: () => S.intl.string(S.t.qFsx5q),
  useSubtitle: () => S.intl.format(S.t.lunaRv, {
    learnMoreLink: o.A.getArticleURL(A.MVz.SAFETY_ALERTS)
  }),
  useValue: Chunk546140.L,
  setValue: Chunk776038.a,
  usePredicate: function() {
    var t;
    let e = (0, s.Lc)({
        location: "DMSafetyAlertsSetting"
      }),
      i = (0, l.Rv)({
        location: "DMSafetyAlertsSetting"
      }),
      r = null == (t = (0, n.A)()) || t;
    return e && !r && !i
  }
})