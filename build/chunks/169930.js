/** Chunk was on 4670 **/
/** chunk id: 169930, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  _: () => c
});
var Chunk793574 = require("./793574.js"),
  Chunk419954 = require("./419954.js"),
  Chunk796774 = require("./796774.js"),
  Chunk536432 = require("./536432.js"),
  Chunk975571 = require("./975571.js"),
  Chunk824744 = require("./824744.js"),
  Chunk780964 = require("./780964.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let c = (0, Chunk419954.sN)(Chunk780964.X.SOUNDBOARD_VOLUME_SETTING, {
  useTitle: () => T.intl.string(T.t.kbFsAD),
  useSubtitle: () => T.intl.format(T.t.BPbGq7, {
    helpCenterArticle: a.A.getArticleURL(d.MVz.SOUNDBOARD)
  }),
  setValue: function(e) {
    let t = [n.A.USER_SETTINGS_VOICE_AND_VIDEO],
      i = (0, u.w)(e);
    (0, s.iy)(i, t)
  },
  minValue: 0,
  maxValue: 100,
  getInitialValue: function() {
    let e = (0, r.wH)();
    return (0, u.M)(e)
  },
  onValueRender: function(e) {
    return "".concat(e.toFixed(0), "%")
  }
})