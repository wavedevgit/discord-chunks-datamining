/** Chunk was on web.js **/
/** chunk id: 218359, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk871930 = require("./871930.jsx"),
  Chunk578746 = require("./578746.jsx"),
  Chunk975571 = require("./975571.js"),
  Chunk171316 = require("./171316.js"),
  Chunk652215 = require("./652215.js"),
  Chunk842130 = require("./842130.js"),
  Chunk985018 = require("./985018.jsx");

function d() {
  let {
    hasConsented: e,
    updateConsent: t
  } = (0, o.lH)(l.YAq.PERSONALIZATION);
  return (0, r.jsx)(i.h, {
    children: (0, r.jsx)(a.Ay, {
      title: u.intl.string(c.default.XMPqUx),
      note: u.intl.format(c.default.Imp6Ns, {
        helpdeskArticle: s.A.getArticleURL(l.MVz.DATA_USED_FOR_RECOMMENDED)
      }),
      value: e,
      onChange: t
    })
  })
}