/** Chunk was on web.js **/
/** chunk id: 463181, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk722687 = require("./722687.js"),
  Chunk838436 = require("./838436.jsx"),
  Chunk51331 = require("./51331.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk652262 = require("./652262.js"),
  Chunk981631 = require("./981631.js"),
  Chunk345909 = require("./345909.js"),
  Chunk388032 = require("./388032.jsx");

function f() {
  let e = (0, Chunk652262.F)(),
    t = Chunk722687.J7.useControlledSetting(null == module ? true : module.id),
    n = Chunk722687.O8.useControlledSetting(null == module ? true : module.id);
  return (0, Chunk951288.jsx)(Chunk838436.U, {
    children: (0, Chunk951288.jsx)(Chunk51331.Z, {
      title: Chunk388032.intl.string(Chunk388032.t.CyLYKS),
      note: Chunk388032.intl.format(Chunk345909.default["6mK5Pz"], {
        helpdeskArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.QUESTS_PRIVACY_CONTROLS)
      }),
      value: !exports,
      onChange: t => i.J7.updateControlledSetting(null == e ? true : e.id, !t),
      disabled: require
    })
  })
}