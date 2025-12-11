/** Chunk was on web.js **/
/** chunk id: 940021, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
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
  Chunk435757 = require("./435757.js");

function p() {
  let e = Chunk695346.bh.useSetting(),
    t = (0, Chunk915009.LN)(),
    n = Chunk388032.t.sJYh5t,
    p = Chunk388032.t.cf9mvV;
  return (0, Chunk54381.jsx)(Chunk838436.U, {
    setting: Chunk726985.s6.PRIVACY_DATA_QUESTS_V2,
    children: (0, Chunk54381.jsx)(Chunk51331.ZP, {
      title: Chunk388032.intl.string(require),
      note: Chunk388032.intl.format(p, {
        helpdeskArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.QUESTS_PRIVACY_CONTROLS)
      }),
      value: !module,
      onChange: e => o.bh.updateSetting(!e),
      disabled: exports,
      tooltipText: exports ? Chunk388032.intl.string(Chunk435757.default["6Af/cw"]) : true
    })
  })
}