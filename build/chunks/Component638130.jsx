/** Chunk was on 9207 **/
/** chunk id: 638130, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  f: () => g
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

function g() {
  let e = (0, i.WX)(),
    t = [{
      title: p.intl.string(p.t.GYpoAq),
      component: a.Z,
      orientation: "vertical",
      setting: u.H.SEXUALLY_EXPLICIT_MEDIA_REDACTION
    }, {
      title: p.intl.string(p.t["16/3Bi"]),
      component: o.q,
      orientation: "vertical",
      setting: u.H.GORE_MEDIA_REDACTION
    }];
  return (0, r.jsxs)(c.h, {
    setting: u.H.SENSITIVE_CONTENT_FILTERS,
    scrollPosition: d.d1.EXPLICIT_MEDIA_REDACTION_V2,
    children: [(0, r.jsx)(c._, {
      header: p.intl.string(p.t["Hj/But"]),
      description: p.intl.format(p.t.dliU4j, {
        learnMoreLink: l.A.getArticleURL(e)
      })
    }), (0, r.jsx)(s.A, {
      parentSetting: u.H.CONTENT_SOCIAL,
      settingsSection: _.nc_.CONTENT_AND_SOCIAL,
      tabs: t,
      orientation: "vertical",
      tabsClassName: m.v
    })]
  })
}