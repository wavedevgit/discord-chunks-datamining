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
  Chunk517319 = require("./517319.js");

function p() {
  let e = o.bh.useSetting(),
    t = (0, i.LN)(),
    n = d.t.sJYh5t,
    p = d.t.cf9mvV;
  return (0, r.jsx)(s.U, {
    setting: c.s6.PRIVACY_DATA_QUESTS_V2,
    children: (0, r.jsx)(l.ZP, {
      title: d.intl.string(n),
      note: d.intl.format(p, {
        helpdeskArticle: a.Z.getArticleURL(u.BhN.QUESTS_PRIVACY_CONTROLS)
      }),
      value: !e,
      onChange: e => o.bh.updateSetting(!e),
      disabled: t,
      tooltipText: t ? d.intl.string(f.default["6Af/cw"]) : true
    })
  })
}