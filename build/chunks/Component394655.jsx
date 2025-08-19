/** Chunk was on 66181 **/
/** chunk id: 394655, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js"),
  Chunk905405 = require("./905405.js"),
  Chunk63063 = require("./63063.js"),
  Chunk695346 = require("./695346.js"),
  Chunk838436 = require("./838436.jsx"),
  Chunk51331 = require("./51331.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function m() {
  let e = (0, Chunk905405.p)();
  return (0, Chunk951288.jsx)(Chunk838436.U, {
    setting: Chunk726985.s6.PRIVACY_KEYWORD_FILTER_V2,
    children: (0, Chunk951288.jsx)(Chunk51331.Z, {
      value: module,
      onChange: e => a.gw.updateSetting({
        profanity: e,
        slurs: e,
        sexualContent: e
      }),
      title: Chunk388032.intl.string(Chunk388032.t.CB5reH),
      note: Chunk388032.intl.format(Chunk388032.t.kAyJIS, {
        learnMoreLink: Chunk63063.Z.getArticleURL(Chunk981631.BhN.KEYWORD_FILTERS)
      })
    })
  })
}