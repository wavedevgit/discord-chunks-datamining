/** Chunk was on 7384 **/
/** chunk id: 211466, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  n: () => g
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk925513 = require("./925513.js"),
  Chunk63063 = require("./63063.js"),
  Chunk526156 = require("./526156.jsx"),
  Chunk821035 = require("./821035.jsx"),
  Chunk768604 = require("./768604.jsx"),
  Chunk838436 = require("./838436.jsx"),
  Chunk526761 = require("./526761.js"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function g() {
  let e = (0, Chunk925513.v6)(),
    t = [{
      title: Chunk388032.intl.string(Chunk388032.t.GYpoAg),
      component: () => (0, Chunk255367.jsx)(Chunk821035.P, {
        isNested: true
      }),
      orientation: "vertical",
      setting: Chunk726985.s6.SEXUALLY_EXPLICIT_MEDIA_REDACTION
    }, {
      title: Chunk388032.intl.string(Chunk388032.t["16/3Bg"]),
      component: Chunk768604.I,
      orientation: "vertical",
      setting: Chunk726985.s6.GORE_MEDIA_REDACTION
    }];
  return (0, Chunk255367.jsxs)(Chunk838436.U, {
    setting: Chunk726985.s6.SENSITIVE_CONTENT_FILTERS,
    scrollPosition: Chunk526761.FY.EXPLICIT_MEDIA_REDACTION_V2,
    children: [(0, Chunk255367.jsx)(Chunk838436.H, {
      header: Chunk388032.intl.string(Chunk388032.t["Hj/Bur"]),
      description: Chunk388032.intl.format(Chunk388032.t.dliU4u, {
        learnMoreLink: Chunk63063.Z.getArticleURL(module)
      })
    }), (0, Chunk255367.jsx)(Chunk526156.Z, {
      parentSetting: Chunk726985.s6.CONTENT_SOCIAL,
      settingsSection: Chunk981631.oAB.CONTENT_AND_SOCIAL,
      tabs: exports,
      orientation: "vertical"
    })]
  })
}