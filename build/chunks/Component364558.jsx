/** Chunk was on web.js **/
/** chunk id: 364558, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  u: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk397927 = require("./397927.js"),
  Chunk975807 = require("./975807.js"),
  Chunk95035 = require("./95035.jsx"),
  Chunk975571 = require("./975571.js"),
  Chunk975662 = require("./975662.jsx"),
  Chunk88001 = require("./88001.js"),
  Chunk652215 = require("./652215.js"),
  Chunk519412 = require("./519412.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk817577 = require("./817577.js");

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
    (0, a.A)(o.A.getArticleURL(u.MVz.PREMIUM_GROUP_ABOUT))
  },
  g = () => ({
    name: l.U.PREMIUM_GROUP,
    title: f.intl.string(d.default.YkvksF),
    subtitle: f.intl.formatToPlainString(d.default.JlyGQj, {
      totalSeats: c.aw,
      premiumGroupProductName: (0, c.DP)()
    }),
    description: (0, r.jsx)(s.A, {
      onClick: m,
      children: f.intl.string(d.default.yYyGJH)
    }),
    descriptionCta: f.intl.string(f.t.jVcuVY),
    pillText: f.intl.string(f.t.oW0eUd).toLocaleUpperCase(),
    perkImage: p,
    onCtaClick: () => {
      (0, i.mMO)(async () => {
        let {
          default: e
        } = await n.e("69595").then(n.bind(n, 526710));
        return t => (0, r.jsx)(e, h({}, t))
      })
    }
  })