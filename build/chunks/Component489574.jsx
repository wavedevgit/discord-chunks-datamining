/** Chunk was on web.js **/
/** chunk id: 489574, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => _
});
var Chunk54381 = require("./54381.js"),
  Chunk782568 = require("./782568.js"),
  Chunk690221 = require("./690221.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk22189 = require("./22189.jsx"),
  Chunk282793 = require("./282793.js"),
  Chunk981631 = require("./981631.js"),
  Chunk353149 = require("./353149.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk261778 = require("./261778.js");
let p = () => {
    (0, Chunk782568.Z)(Chunk63063.Z.getArticleURL(Chunk981631.BhN.PREMIUM_GROUP_ABOUT))
  },
  _ = () => ({
    name: Chunk22189.I.PREMIUM_GROUP,
    title: Chunk388032.intl.string(Chunk353149.default.YkvksF),
    subtitle: Chunk388032.intl.formatToPlainString(Chunk353149.default.JlyGQj, {
      totalSeats: Chunk282793.Q5,
      premiumGroupProductName: (0, Chunk282793.sO)()
    }),
    description: (0, Chunk54381.jsx)(Chunk690221.Z, {
      onClick: p,
      children: Chunk388032.intl.string(Chunk353149.default.yYyGJH)
    }),
    descriptionCta: Chunk388032.intl.string(Chunk388032.t.jVcuVY),
    pillText: Chunk388032.intl.string(Chunk388032.t.oW0eUd).toLocaleUpperCase(),
    perkImage: Chunk261778,
    onCtaClick: () => {}
  })