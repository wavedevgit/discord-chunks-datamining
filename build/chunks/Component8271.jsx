/** Chunk was on web.js **/
/** chunk id: 8271, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk632553 = require("./632553.js"),
  Chunk171316 = require("./171316.js"),
  Chunk975571 = require("./975571.js"),
  Chunk253932 = require("./253932.js"),
  Chunk871930 = require("./871930.jsx"),
  Chunk578746 = require("./578746.jsx"),
  Chunk531525 = require("./531525.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk842130 = require("./842130.js");

function _() {
  let e = o.vf.useSetting(),
    t = o.H1.useSetting(),
    n = (0, a.uM)(),
    _ = (0, i.g)();
  return (0, r.jsx)(l.h, {
    setting: u.H.PRIVACY_DATA_QUESTS_3P,
    children: (0, r.jsx)(c.Ay, {
      title: f.intl.string(f.t.CyLYKZ),
      note: f.intl.format(f.t["2QFDU/"], {
        helpdeskArticle: s.A.getArticleURL(d.MVz.QUESTS_PRIVACY_CONTROLS)
      }),
      value: !e,
      onChange: e => o.vf.updateSetting(!e),
      disabled: _ || t || n,
      tooltipText: n ? f.intl.string(p.default["6Af/cw"]) : true
    })
  })
}