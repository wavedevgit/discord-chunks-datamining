/** Chunk was on web.js **/
/** chunk id: 211466, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  n: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk925513 = require("./925513.js"),
  Chunk63063 = require("./63063.js"),
  Chunk526156 = require("./526156.jsx"),
  Chunk821035 = require("./821035.jsx"),
  Chunk768604 = require("./768604.jsx"),
  Chunk838436 = require("./838436.jsx"),
  Chunk526761 = require("./526761.js"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk693976 = require("./693976.js");

function m() {
  let e = (0, i.v6)(),
    t = [{
      title: p.intl.string(p.t.GYpoAq),
      component: () => (0, r.jsx)(s.P, {}),
      orientation: "vertical",
      setting: d.s6.SEXUALLY_EXPLICIT_MEDIA_REDACTION
    }, {
      title: p.intl.string(p.t["16/3Bi"]),
      component: () => (0, r.jsx)(l.I, {}),
      orientation: "vertical",
      setting: d.s6.GORE_MEDIA_REDACTION
    }];
  return (0, r.jsxs)(c.U, {
    setting: d.s6.SENSITIVE_CONTENT_FILTERS,
    scrollPosition: u.FY.EXPLICIT_MEDIA_REDACTION_V2,
    children: [(0, r.jsx)(c.H, {
      header: p.intl.string(p.t["Hj/But"]),
      description: p.intl.format(p.t.dliU4j, {
        learnMoreLink: a.Z.getArticleURL(e)
      })
    }), (0, r.jsx)(o.Z, {
      parentSetting: d.s6.CONTENT_SOCIAL,
      settingsSection: f.oAB.CONTENT_AND_SOCIAL,
      tabs: t,
      orientation: "vertical",
      tabsClassName: _.tabs
    })]
  })
}