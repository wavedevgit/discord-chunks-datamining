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
  Chunk597754 = require("./597754.js"),
  Chunk388032 = require("./388032.jsx");

function f() {
  var e;
  let t = null != (e = (0, Chunk652262.M)()) ? module : true,
    n = Chunk722687.J7.useControlledSetting(exports),
    f = Chunk722687.O8.useControlledSetting(exports);
  return null == exports ? null : (0, Chunk54381.jsx)(Chunk838436.U, {
    children: (0, Chunk54381.jsx)(Chunk51331.ZP, {
      title: Chunk388032.intl.string(Chunk388032.t.CyLYKZ),
      note: Chunk388032.intl.format(Chunk597754.default["6mK5Pz"], {
        helpdeskArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.QUESTS_PRIVACY_CONTROLS)
      }),
      value: !require,
      onChange: e => i.J7.updateControlledSetting(t, !e),
      disabled: f
    })
  })
}