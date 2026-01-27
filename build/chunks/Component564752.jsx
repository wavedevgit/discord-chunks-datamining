/** Chunk was on 60667 **/
/** chunk id: 564752, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk871930 = require("./871930.jsx"),
  Chunk578746 = require("./578746.jsx"),
  Chunk975571 = require("./975571.js"),
  Chunk171316 = require("./171316.js"),
  Chunk652215 = require("./652215.js"),
  Chunk842130 = require("./842130.js"),
  Chunk985018 = require("./985018.jsx");

function u() {
  let {
    hasConsented: e,
    updateConsent: t
  } = (0, a.lH)(o.YAq.USAGE_STATISTICS);
  return (0, r.jsx)(i.h, {
    children: (0, r.jsx)(l.Ay, {
      title: d.intl.string(c.default.HjstRR),
      note: d.intl.format(c.default.Z5yJZy, {
        helpdeskArticle: s.A.getArticleURL(o.MVz.DATA_PRIVACY_CONTROLS)
      }),
      value: e,
      onChange: t
    })
  })
}