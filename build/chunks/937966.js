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
  useTitle: () => A.intl.string(A.t.MNKzyg),
  useSubtitle: () => A.intl.format(A.t["eQL/Mr"], {
    helpdeskArticle: a.A.getArticleURL(d.MVz.DATA_USED_FOR_RECOMMENDED)
  }),
  useValue: function() {
    return (0, n.bG)([u.A], () => u.A.hasConsented(d.YAq.PERSONALIZATION))
  },
  setValue: function(t) {
    t ? (0, l.U)([d.YAq.PERSONALIZATION], []).catch(T.i) : (0, T.O)({
      header: A.intl.string(A.t["9SNpzv"]),
      confirmText: A.intl.string(A.t["9g5UGw"]),
      cancelText: A.intl.string(A.t["+ZLPw9"]),
      onConfirm: () => {
        (0, l.U)([], [d.YAq.PERSONALIZATION]).catch(T.i)
      },
      body: A.intl.string(A.t.gJvDDh)
    })
  },
  useDisabled: Chunk171316.uM
})