/** Chunk was on web.js **/
/** chunk id: 265390, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk63063 = require("./63063.js"),
  Chunk695346 = require("./695346.js"),
  Chunk838436 = require("./838436.jsx"),
  Chunk51331 = require("./51331.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function d() {
  let e = Chunk695346.JT.useSetting(),
    t = Chunk695346.bh.useSetting();
  return (0, Chunk951288.jsx)(Chunk838436.U, {
    setting: Chunk726985.s6.PRIVACY_DATA_QUESTS_3P,
    children: (0, Chunk951288.jsx)(Chunk51331.Z, {
      title: Chunk388032.intl.string(Chunk388032.t.CyLYKS),
      note: Chunk388032.intl.format(Chunk388032.t["2QFDU1"], {
        helpdeskArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.QUESTS_PRIVACY_CONTROLS)
      }),
      value: !module,
      onChange: e => a.JT.updateSetting(!e),
      disabled: exports
    })
  })
}