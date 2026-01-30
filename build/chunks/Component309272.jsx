/** Chunk was on 78376 **/
/** chunk id: 309272, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
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

function m() {
  let e = a.H1.useSetting(),
    t = (0, l.uM)(),
    n = _.t.sJYh5t,
    m = _.t.cf9mvV,
    g = (0, i.g)();
  return (0, r.jsx)(o.h, {
    setting: d.H.PRIVACY_DATA_QUESTS_V2,
    children: (0, r.jsx)(c.Ay, {
      title: _.intl.string(n),
      note: _.intl.format(m, {
        helpdeskArticle: s.A.getArticleURL(u.MVz.QUESTS_PRIVACY_CONTROLS)
      }),
      value: !e,
      onChange: e => a.H1.updateSetting(!e),
      disabled: g || t,
      tooltipText: t ? _.intl.string(p.default["6Af/cw"]) : true
    })
  })
}