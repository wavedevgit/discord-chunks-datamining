/** Chunk was on web.js **/
/** chunk id: 28676, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk838436 = require("./838436.jsx"),
  Chunk51331 = require("./51331.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk915009 = require("./915009.js"),
  Chunk981631 = require("./981631.js"),
  Chunk517319 = require("./517319.js"),
  Chunk388032 = require("./388032.jsx");

function d() {
  let {
    hasConsented: e,
    updateConsent: t
  } = (0, s.aR)(l.pjP.PERSONALIZATION);
  return (0, r.jsx)(i.U, {
    children: (0, r.jsx)(a.ZP, {
      title: u.intl.string(c.default.XMPqUx),
      note: u.intl.format(c.default.Imp6Ns, {
        helpdeskArticle: o.Z.getArticleURL(l.BhN.DATA_USED_FOR_RECOMMENDED)
      }),
      value: e,
      onChange: t
    })
  })
}