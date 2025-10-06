/** Chunk was on web.js **/
/** chunk id: 280058, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  t: () => f
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk722687 = require("./722687.js"),
  Chunk838436 = require("./838436.jsx"),
  Chunk51331 = require("./51331.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk915009 = require("./915009.js"),
  Chunk652262 = require("./652262.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function f() {
  var e;
  let t = null != (e = (0, Chunk652262.M)()) ? module : true,
    n = (0, Chunk915009.q1)(),
    f = Chunk722687.IU.useControlledSetting(exports);

  function _(e) {
    i.IU.updateControlledSetting(t, !e)
  }
  return (0, Chunk951288.jsx)(Chunk838436.U, {
    children: (0, Chunk951288.jsx)(Chunk51331.Z, {
      title: Chunk388032.intl.string(Chunk388032.t["3o2ojo"]),
      value: !require && !f,
      onChange: e => _(e),
      disabled: require,
      note: Chunk388032.intl.format(Chunk388032.t.IoztJy, {
        helpdeskArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.MESSAGE_REQUESTS)
      })
    })
  })
}