/** Chunk was on 28979 **/
/** chunk id: 937966, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  _: () => S
});
var Chunk311907 = require("./311907.js"),
  Chunk290595 = require("./290595.js"),
  Chunk171316 = require("./171316.js"),
  Chunk419954 = require("./419954.js"),
  Chunk153488 = require("./153488.js"),
  Chunk975571 = require("./975571.js"),
  Chunk780964 = require("./780964.js"),
  Chunk997913 = require("./997913.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let S = (0, Chunk419954.zD)(Chunk780964.X.DATA_USAGE_PERSONALIZATION_SETTING, {
  useTitle: () => d.intl.string(d.t.MNKzyg),
  useSubtitle: () => d.intl.format(d.t["eQL/Mr"], {
    helpdeskArticle: a.A.getArticleURL(A.MVz.DATA_USED_FOR_RECOMMENDED)
  }),
  useValue: function() {
    return (0, n.bG)([u.A], () => u.A.hasConsented(A.YAq.PERSONALIZATION))
  },
  setValue: function(t) {
    t ? (0, l.U)([A.YAq.PERSONALIZATION], []).catch(T.i) : (0, T.O)({
      header: d.intl.string(d.t["9SNpzv"]),
      confirmText: d.intl.string(d.t["9g5UGw"]),
      cancelText: d.intl.string(d.t["+ZLPw9"]),
      onConfirm: () => {
        (0, l.U)([], [A.YAq.PERSONALIZATION]).catch(T.i)
      },
      body: d.intl.string(d.t.gJvDDh)
    })
  },
  useDisabled: Chunk171316.uM
})