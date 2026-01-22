/** Chunk was on web.js **/
/** chunk id: 901794, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk444802 = require("./444802.js"),
  Chunk524738 = require("./524738.jsx"),
  Chunk871930 = require("./871930.jsx"),
  Chunk975571 = require("./975571.js"),
  Chunk688912 = require("./688912.jsx"),
  Chunk443357 = require("./443357.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk993128 = require("./993128.js");

function f() {
  let e = (0, i.WX)(),
    t = [{
      setting: "SEXUALLY_EXPLICIT_MEDIA_REDACTION",
      title: u.intl.string(u.t.GYpoAq),
      component: () => (0, r.jsx)(l.Z, {}),
      orientation: "vertical"
    }, {
      setting: "GORE_MEDIA_REDACTION",
      title: u.intl.string(u.t["16/3Bi"]),
      component: () => (0, r.jsx)(c.q, {}),
      orientation: "vertical"
    }];
  return (0, r.jsxs)(s.h, {
    children: [(0, r.jsx)(s._, {
      header: u.intl.string(u.t["Hj/But"]),
      description: u.intl.format(u.t["H/Icz+"], {
        learnMoreLink: o.A.getArticleURL(e)
      })
    }), (0, r.jsx)(a._, {
      tabs: t,
      orientation: "vertical",
      tabsClassName: d.v
    })]
  })
}