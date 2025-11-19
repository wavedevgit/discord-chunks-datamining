/** Chunk was on web.js **/
/** chunk id: 265390, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk915009 = require("./915009.js"),
  Chunk63063 = require("./63063.js"),
  Chunk695346 = require("./695346.js"),
  Chunk838436 = require("./838436.jsx"),
  Chunk51331 = require("./51331.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk597754 = require("./597754.js");

function _() {
  let e = Chunk695346.JT.useSetting(),
    t = Chunk695346.bh.useSetting(),
    n = (0, Chunk915009.LN)();
  return (0, Chunk54381.jsx)(Chunk838436.U, {
    setting: Chunk726985.s6.PRIVACY_DATA_QUESTS_3P,
    children: (0, Chunk54381.jsx)(Chunk51331.ZP, {
      title: Chunk388032.intl.string(Chunk388032.t.CyLYKZ),
      note: Chunk388032.intl.format(Chunk388032.t["2QFDU/"], {
        helpdeskArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.QUESTS_PRIVACY_CONTROLS)
      }),
      value: !module,
      onChange: e => o.JT.updateSetting(!e),
      disabled: exports || require,
      tooltipText: require ? Chunk388032.intl.string(Chunk597754.default["6Af/cw"]) : true
    })
  })
}