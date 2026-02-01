/** Chunk was on 30485 **/
/** chunk id: 169930, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  _: () => A
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
let A = (0, Chunk419954.sN)(Chunk780964.X.SOUNDBOARD_VOLUME_SETTING, {
  useTitle: () => T.intl.string(T.t.kbFsAD),
  useSubtitle: () => T.intl.format(T.t.BPbGq7, {
    helpCenterArticle: u.A.getArticleURL(d.MVz.SOUNDBOARD)
  }),
  setValue: function(t) {
    let e = [n.A.USER_SETTINGS_VOICE_AND_VIDEO],
      i = (0, a.w)(t);
    (0, s.iy)(i, e)
  },
  minValue: 0,
  maxValue: 100,
  getInitialValue: function() {
    let t = (0, r.wH)();
    return (0, a.M)(t)
  },
  onValueRender: function(t) {
    return "".concat(t.toFixed(0), "%")
  }
})