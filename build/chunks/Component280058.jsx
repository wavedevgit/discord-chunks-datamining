/** Chunk was on web.js **/
/** chunk id: 280058, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  t: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk168107 = require("./168107.jsx"),
  Chunk480916 = require("./480916.js"),
  Chunk750832 = require("./750832.js"),
  Chunk722687 = require("./722687.js"),
  Chunk838436 = require("./838436.jsx"),
  Chunk51331 = require("./51331.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk915009 = require("./915009.js"),
  Chunk652262 = require("./652262.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function m() {
  var e;
  let t = null != (e = (0, Chunk652262.M)()) ? module : true,
    n = (0, Chunk915009.q1)(),
    m = Chunk722687.IU.useControlledSetting(exports);

  function h(e) {
    if (!e && (0, o.S)()) return void i.Z.showAgeVerificationGetStartedModal({
      entryPoint: a.cU.MESSAGE_REQUESTS_SETTINGS
    });
    s.IU.updateControlledSetting(t, !e)
  }
  return (0, Chunk54381.jsx)(Chunk838436.U, {
    children: (0, Chunk54381.jsx)(Chunk51331.ZP, {
      title: Chunk388032.intl.string(Chunk388032.t["3o2ojh"]),
      value: !require && !m,
      onChange: e => h(e),
      disabled: require,
      note: Chunk388032.intl.format(Chunk388032.t.IoztJ0, {
        helpdeskArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.MESSAGE_REQUESTS)
      })
    })
  })
}