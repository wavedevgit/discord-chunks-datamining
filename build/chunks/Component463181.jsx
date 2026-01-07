/** Chunk was on web.js **/
/** chunk id: 463181, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk722687 = require("./722687.js"),
  Chunk838436 = require("./838436.jsx"),
  Chunk51331 = require("./51331.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk652262 = require("./652262.js"),
  Chunk981631 = require("./981631.js"),
  Chunk517319 = require("./517319.js"),
  Chunk388032 = require("./388032.jsx");

function f() {
  var e;
  let t = null != (e = (0, l.M)()) ? e : true,
    n = i.J7.useControlledSetting(t),
    f = i.O8.useControlledSetting(t);
  return null == t ? null : (0, r.jsx)(a.U, {
    children: (0, r.jsx)(o.ZP, {
      title: d.intl.string(d.t.CyLYKZ),
      note: d.intl.format(u.default["6mK5Pz"], {
        helpdeskArticle: s.Z.getArticleURL(c.BhN.QUESTS_PRIVACY_CONTROLS)
      }),
      value: !n,
      onChange: e => i.J7.updateControlledSetting(t, !e),
      disabled: f
    })
  })
}