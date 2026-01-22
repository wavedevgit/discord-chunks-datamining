/** Chunk was on web.js **/
/** chunk id: 445343, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
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

function f() {
  var e;
  let t = null != (e = (0, l.k)()) ? e : true,
    n = i.yH.useControlledSetting(t),
    f = i.kf.useControlledSetting(t);
  return null == t ? null : (0, r.jsx)(a.h, {
    children: (0, r.jsx)(s.Ay, {
      title: d.intl.string(d.t.CyLYKZ),
      note: d.intl.format(u.default["6mK5Pz"], {
        helpdeskArticle: o.A.getArticleURL(c.MVz.QUESTS_PRIVACY_CONTROLS)
      }),
      value: !n,
      onChange: e => i.yH.updateControlledSetting(t, !e),
      disabled: f
    })
  })
}