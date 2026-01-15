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

function h(e) {
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
let m = () => {
    (0, a.Z)(s.Z.getArticleURL(u.BhN.PREMIUM_GROUP_ABOUT))
  },
  g = () => ({
    name: l.I.PREMIUM_GROUP,
    title: f.intl.string(d.default.YkvksF),
    subtitle: f.intl.formatToPlainString(d.default.JlyGQj, {
      totalSeats: c.Q5,
      premiumGroupProductName: (0, c.sO)()
    }),
    description: (0, r.jsx)(o.Z, {
      onClick: m,
      children: f.intl.string(d.default.yYyGJH)
    }),
    descriptionCta: f.intl.string(f.t.jVcuVY),
    pillText: f.intl.string(f.t.oW0eUd).toLocaleUpperCase(),
    perkImage: p,
    onCtaClick: () => {
      (0, i.ZDy)(async () => {
        let {
          default: e
        } = await n.e("33638").then(n.bind(n, 837244));
        return t => (0, r.jsx)(e, h({}, t))
      })
    }
  })