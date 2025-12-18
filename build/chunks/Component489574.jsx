/** Chunk was on web.js **/
/** chunk id: 489574, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk481060 = require("./481060.js"),
  Chunk782568 = require("./782568.js"),
  Chunk690221 = require("./690221.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk22189 = require("./22189.jsx"),
  Chunk282793 = require("./282793.js"),
  Chunk981631 = require("./981631.js"),
  Chunk353149 = require("./353149.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk261778 = require("./261778.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}
let h = () => {
    (0, Chunk782568.Z)(Chunk63063.Z.getArticleURL(Chunk981631.BhN.PREMIUM_GROUP_ABOUT))
  },
  g = () => ({
    name: Chunk22189.I.PREMIUM_GROUP,
    title: Chunk388032.intl.string(Chunk353149.default.YkvksF),
    subtitle: Chunk388032.intl.formatToPlainString(Chunk353149.default.JlyGQj, {
      totalSeats: Chunk282793.Q5,
      premiumGroupProductName: (0, Chunk282793.sO)()
    }),
    description: (0, Chunk54381.jsx)(Chunk690221.Z, {
      onClick: h,
      children: Chunk388032.intl.string(Chunk353149.default.yYyGJH)
    }),
    descriptionCta: Chunk388032.intl.string(Chunk388032.t.jVcuVY),
    pillText: Chunk388032.intl.string(Chunk388032.t.oW0eUd).toLocaleUpperCase(),
    perkImage: Chunk261778,
    onCtaClick: () => {
      (0, Chunk481060.ZDy)(async () => {
        let {
          default: e
        } = await require.e("33638").then(require.bind(require, 837244));
        return t => (0, r.jsx)(e, m({}, t))
      })
    }
  })