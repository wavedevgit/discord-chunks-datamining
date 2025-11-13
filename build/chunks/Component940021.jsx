/** Chunk was on web.js **/
/** chunk id: 940021, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk915009 = require("./915009.js"),
  Chunk63063 = require("./63063.js"),
  Chunk695346 = require("./695346.js"),
  Chunk695463 = require("./695463.js"),
  Chunk838436 = require("./838436.jsx"),
  Chunk51331 = require("./51331.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk597754 = require("./597754.js");

function p() {
  let e = Chunk695346.bh.useSetting(),
    t = (0, Chunk695463.W)("DataUsageQuestsSetting"),
    n = (0, Chunk915009.LN)(),
    p = exports ? Chunk388032.t.sJYh5t : Chunk388032.t.VkS7Yd,
    h = exports ? Chunk388032.t.cf9mvV : Chunk388032.t["7Q2yX9"];
  return (0, Chunk951288.jsx)(Chunk838436.U, {
    setting: Chunk726985.s6.PRIVACY_DATA_QUESTS_V2,
    children: (0, Chunk951288.jsx)(Chunk51331.ZP, {
      title: Chunk388032.intl.string(p),
      note: Chunk388032.intl.format(h, {
        helpdeskArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.QUESTS_PRIVACY_CONTROLS)
      }),
      value: !module,
      onChange: e => o.bh.updateSetting(!e),
      disabled: require,
      tooltipText: require ? Chunk388032.intl.string(Chunk597754.default["6Af/cw"]) : true
    })
  })
}