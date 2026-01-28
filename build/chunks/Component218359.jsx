/** Chunk was on 5606 **/
/** chunk id: 218359, original params: e,t,n (module,exports,require) **/
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
  } = (0, a.lH)(o.YAq.PERSONALIZATION);
  return (0, r.jsx)(i.h, {
    children: (0, r.jsx)(l.Ay, {
      title: d.intl.string(c.default.XMPqUx),
      note: d.intl.format(c.default.Imp6Ns, {
        helpdeskArticle: s.A.getArticleURL(o.MVz.DATA_USED_FOR_RECOMMENDED)
      }),
      value: e,
      onChange: t
    })
  })
}