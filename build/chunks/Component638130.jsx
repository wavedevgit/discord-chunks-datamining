/** Chunk was on web.js **/
/** chunk id: 638130, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk444802 = require("./444802.js"),
  Chunk975571 = require("./975571.js"),
  Chunk524738 = require("./524738.jsx"),
  Chunk421248 = require("./421248.jsx"),
  Chunk42765 = require("./42765.jsx"),
  Chunk871930 = require("./871930.jsx"),
  Chunk355097 = require("./355097.js"),
  Chunk531525 = require("./531525.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk456144 = require("./456144.js");

function h() {
  let e = (0, i.WX)(),
    t = [{
      title: p.intl.string(p.t.GYpoAq),
      component: o.Z,
      orientation: "vertical",
      setting: d.H.SEXUALLY_EXPLICIT_MEDIA_REDACTION
    }, {
      title: p.intl.string(p.t["16/3Bi"]),
      component: l.q,
      orientation: "vertical",
      setting: d.H.GORE_MEDIA_REDACTION
    }];
  return (0, r.jsxs)(c.h, {
    setting: d.H.SENSITIVE_CONTENT_FILTERS,
    scrollPosition: u.d1.EXPLICIT_MEDIA_REDACTION_V2,
    children: [(0, r.jsx)(c._, {
      header: p.intl.string(p.t["Hj/But"]),
      description: p.intl.format(p.t.dliU4j, {
        learnMoreLink: a.A.getArticleURL(e)
      })
    }), (0, r.jsx)(s.A, {
      parentSetting: d.H.CONTENT_SOCIAL,
      settingsSection: f.nc_.CONTENT_AND_SOCIAL,
      tabs: t,
      orientation: "vertical",
      tabsClassName: _.v
    })]
  })
}