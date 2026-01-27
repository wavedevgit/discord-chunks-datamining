/** Chunk was on 60667 **/
/** chunk id: 696616, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk93857 = require("./93857.js"),
  Chunk871930 = require("./871930.jsx"),
  Chunk578746 = require("./578746.jsx"),
  Chunk975571 = require("./975571.js"),
  Chunk500470 = require("./500470.js"),
  Chunk652215 = require("./652215.js"),
  Chunk842130 = require("./842130.js"),
  Chunk985018 = require("./985018.jsx");

function _() {
  var e;
  let t = null != (e = (0, o.k)()) ? e : true,
    n = i.kf.useControlledSetting(t);
  return (0, r.jsx)(l.h, {
    children: (0, r.jsx)(s.Ay, {
      title: u.intl.string(d.default.ZhaNu8),
      note: u.intl.format(d.default.cnCK6b, {
        helpdeskArticle: a.A.getArticleURL(c.MVz.QUESTS_PRIVACY_CONTROLS)
      }),
      value: !n,
      onChange: e => i.kf.updateControlledSetting(t, !e)
    })
  })
}