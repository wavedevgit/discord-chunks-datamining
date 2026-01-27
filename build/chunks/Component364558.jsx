/** Chunk was on 60667 **/
/** chunk id: 364558, original params: e,t,n (module,exports,require) **/
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
let m = () => {
    (0, l.A)(a.A.getArticleURL(d.MVz.PREMIUM_GROUP_ABOUT))
  },
  g = () => ({
    name: o.U.PREMIUM_GROUP,
    title: _.intl.string(u.default.YkvksF),
    subtitle: _.intl.formatToPlainString(u.default.JlyGQj, {
      totalSeats: c.aw,
      premiumGroupProductName: (0, c.DP)()
    }),
    description: (0, r.jsx)(s.A, {
      onClick: m,
      children: _.intl.string(u.default.yYyGJH)
    }),
    descriptionCta: _.intl.string(_.t.jVcuVY),
    pillText: _.intl.string(_.t.oW0eUd).toLocaleUpperCase(),
    perkImage: p,
    onCtaClick: () => {
      (0, i.mMO)(async () => {
        let {
          default: e
        } = await n.e("69595").then(n.bind(n, 526710));
        return t => (0, r.jsx)(e, function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
              var r;
              r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = r
            })
          }
          return e
        }({}, t))
      })
    }
  })