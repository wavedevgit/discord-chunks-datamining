/** Chunk was on web.js **/
/** chunk id: 265390, original params: e,t,n (module,exports,re quire) **/
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
  let e = s.JT.useSetting(),
    t = s.bh.useSetting(),
    n = (0, a.LN)(),
    _ = (0, i.P)();
  return (0, r.jsx)(l.U, {
    setting: u.s6.PRIVACY_DATA_QUESTS_3P,
    children: (0, r.jsx)(c.ZP, {
      title: f.intl.string(f.t.CyLYKZ),
      note: f.intl.format(f.t["2QFDU/"], {
        helpdeskArticle: o.Z.getArticleURL(d.BhN.QUESTS_PRIVACY_CONTROLS)
      }),
      value: !e,
      onChange: e => s.JT.updateSetting(!e),
      disabled: _ || t || n,
      tooltipText: n ? f.intl.string(p.default["6Af/cw"]) : true
    })
  })
}