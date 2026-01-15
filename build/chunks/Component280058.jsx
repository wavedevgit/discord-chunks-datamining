/** Chunk was on web.js **/
/** chunk id: 280058, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  t: () => h
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

function h() {
  var e;
  let t = null != (e = (0, f.M)()) ? e : true,
    n = (0, d.q1)(),
    h = s.IU.useControlledSetting(t);

  function m(e) {
    if (!e && (0, o.S)()) return void i.Z.showAgeVerificationGetStartedModal({
      entryPoint: a.cU.MESSAGE_REQUESTS_SETTINGS
    });
    s.IU.updateControlledSetting(t, !e)
  }
  return (0, r.jsx)(l.U, {
    children: (0, r.jsx)(c.ZP, {
      title: _.intl.string(_.t["3o2ojh"]),
      value: !n && !h,
      onChange: e => m(e),
      disabled: n,
      note: _.intl.format(_.t.IoztJ0, {
        helpdeskArticle: u.Z.getArticleURL(p.BhN.MESSAGE_REQUESTS)
      })
    })
  })
}