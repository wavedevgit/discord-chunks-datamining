/** Chunk was on web.js **/
/** chunk id: 940021, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk568170 = require("./568170.js"),
  Chunk915009 = require("./915009.js"),
  Chunk63063 = require("./63063.js"),
  Chunk695346 = require("./695346.js"),
  Chunk838436 = require("./838436.jsx"),
  Chunk51331 = require("./51331.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk517319 = require("./517319.js");

function _() {
  let e = s.bh.useSetting(),
    t = (0, a.LN)(),
    n = f.t.sJYh5t,
    _ = f.t.cf9mvV,
    m = (0, i.P)();
  return (0, r.jsx)(l.U, {
    setting: u.s6.PRIVACY_DATA_QUESTS_V2,
    children: (0, r.jsx)(c.ZP, {
      title: f.intl.string(n),
      note: f.intl.format(_, {
        helpdeskArticle: o.Z.getArticleURL(d.BhN.QUESTS_PRIVACY_CONTROLS)
      }),
      value: !e,
      onChange: e => s.bh.updateSetting(!e),
      disabled: m || t,
      tooltipText: t ? f.intl.string(p.default["6Af/cw"]) : true
    })
  })
}