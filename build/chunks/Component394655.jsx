/** Chunk was on web.js **/
/** chunk id: 394655, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk905405 = require("./905405.js"),
  Chunk63063 = require("./63063.js"),
  Chunk695346 = require("./695346.js"),
  Chunk838436 = require("./838436.jsx"),
  Chunk51331 = require("./51331.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function f() {
  let e = (0, Chunk905405.p)();
  return (0, Chunk54381.jsx)(Chunk838436.U, {
    setting: Chunk726985.s6.PRIVACY_KEYWORD_FILTER_V2,
    children: (0, Chunk54381.jsx)(Chunk51331.ZP, {
      value: module,
      onChange: e => o.gw.updateSetting({
        profanity: e,
        slurs: e,
        sexualContent: e
      }),
      title: Chunk388032.intl.string(Chunk388032.t.CB5reE),
      note: Chunk388032.intl.format(Chunk388032.t.kAyJIR, {
        learnMoreLink: Chunk63063.Z.getArticleURL(Chunk981631.BhN.KEYWORD_FILTERS)
      })
    })
  })
}