/** Chunk was on web.js **/
/** chunk id: 28676, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk838436 = require("./838436.jsx"),
  Chunk51331 = require("./51331.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk915009 = require("./915009.js"),
  Chunk981631 = require("./981631.js"),
  Chunk382402 = require("./382402.js"),
  Chunk388032 = require("./388032.jsx");

function d() {
  let {
    hasConsented: e,
    updateConsent: t
  } = (0, Chunk915009.aR)(Chunk981631.pjP.PERSONALIZATION);
  return (0, Chunk951288.jsx)(Chunk838436.U, {
    children: (0, Chunk951288.jsx)(Chunk51331.ZP, {
      title: Chunk388032.intl.string(Chunk382402.default.XMPqUx),
      note: Chunk388032.intl.format(Chunk382402.default.Imp6Ns, {
        helpdeskArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.DATA_USED_FOR_RECOMMENDED)
      }),
      value: module,
      onChange: exports
    })
  })
}