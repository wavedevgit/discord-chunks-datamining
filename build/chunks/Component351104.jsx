/** Chunk was on web.js **/
/** chunk id: 351104, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk935649 = require("./935649.jsx"),
  Chunk847599 = require("./847599.js"),
  Chunk152076 = require("./152076.js"),
  Chunk93857 = require("./93857.js"),
  Chunk871930 = require("./871930.jsx"),
  Chunk578746 = require("./578746.jsx"),
  Chunk975571 = require("./975571.js"),
  Chunk171316 = require("./171316.js"),
  Chunk500470 = require("./500470.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function h() {
  var e;
  let t = null != (e = (0, f.k)()) ? e : true,
    n = (0, d.KK)(),
    h = o.ES.useControlledSetting(t);

  function m(e) {
    !e && (0, s.w)() ? i.A.showAgeVerificationGetStartedModal({
      entryPoint: a.q1.MESSAGE_REQUESTS_SETTINGS
    }) : o.ES.updateControlledSetting(t, !e)
  }
  return (0, r.jsx)(l.h, {
    children: (0, r.jsx)(c.Ay, {
      title: _.intl.string(_.t["3o2ojh"]),
      value: !n && !h,
      onChange: e => m(e),
      disabled: n,
      note: _.intl.format(_.t.IoztJ0, {
        helpdeskArticle: u.A.getArticleURL(p.MVz.MESSAGE_REQUESTS)
      })
    })
  })
}