/** Chunk was on web.js **/
/** chunk id: 931182, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  n: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk925513 = require("./925513.js"),
  Chunk526156 = require("./526156.jsx"),
  Chunk838436 = require("./838436.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk291511 = require("./291511.jsx"),
  Chunk295822 = require("./295822.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk679560 = require("./679560.js");

function f() {
  let e = (0, i.v6)(),
    t = [{
      setting: "SEXUALLY_EXPLICIT_MEDIA_REDACTION",
      title: u.intl.string(u.t.GYpoAq),
      component: () => (0, r.jsx)(l.P, {}),
      orientation: "vertical"
    }, {
      setting: "GORE_MEDIA_REDACTION",
      title: u.intl.string(u.t["16/3Bi"]),
      component: () => (0, r.jsx)(c.I, {}),
      orientation: "vertical"
    }];
  return (0, r.jsxs)(o.U, {
    children: [(0, r.jsx)(o.H, {
      header: u.intl.string(u.t["Hj/But"]),
      description: u.intl.format(u.t["H/Icz+"], {
        learnMoreLink: s.Z.getArticleURL(e)
      })
    }), (0, r.jsx)(a.z, {
      tabs: t,
      orientation: "vertical",
      tabsClassName: d.tabs
    })]
  })
}