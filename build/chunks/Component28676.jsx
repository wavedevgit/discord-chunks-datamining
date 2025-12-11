/** Chunk was on web.js **/
/** chunk id: 28676, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk838436 = require("./838436.jsx"),
  Chunk51331 = require("./51331.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk915009 = require("./915009.js"),
  Chunk981631 = require("./981631.js"),
  Chunk372807 = require("./372807.js"),
  Chunk388032 = require("./388032.jsx");

function d() {
  let {
    hasConsented: e,
    updateConsent: t
  } = (0, Chunk915009.aR)(Chunk981631.pjP.PERSONALIZATION);
  return (0, Chunk54381.jsx)(Chunk838436.U, {
    children: (0, Chunk54381.jsx)(Chunk51331.ZP, {
      title: Chunk388032.intl.string(Chunk372807.default.XMPqUx),
      note: Chunk388032.intl.format(Chunk372807.default.Imp6Ns, {
        helpdeskArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.DATA_USED_FOR_RECOMMENDED)
      }),
      value: module,
      onChange: exports
    })
  })
}