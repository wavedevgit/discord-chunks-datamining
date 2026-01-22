/** Chunk was on web.js **/
/** chunk id: 309272, original params: e,t,n (module,exports,re quire) **/
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
  let e = o.H1.useSetting(),
    t = (0, a.uM)(),
    n = f.t.sJYh5t,
    _ = f.t.cf9mvV,
    h = (0, i.g)();
  return (0, r.jsx)(l.h, {
    setting: u.H.PRIVACY_DATA_QUESTS_V2,
    children: (0, r.jsx)(c.Ay, {
      title: f.intl.string(n),
      note: f.intl.format(_, {
        helpdeskArticle: s.A.getArticleURL(d.MVz.QUESTS_PRIVACY_CONTROLS)
      }),
      value: !e,
      onChange: e => o.H1.updateSetting(!e),
      disabled: h || t,
      tooltipText: t ? f.intl.string(p.default["6Af/cw"]) : true
    })
  })
}