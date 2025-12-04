/** Chunk was on 73628 **/
/** chunk id: 412110, original params: e,t,A (module,exports,require) **/
require.d(exports, {
  V: () => o
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk952265 = require("./952265.js"),
  Chunk871388 = require("./871388.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function o(e, t, o) {
  var s, d;
  switch (e.code) {
    case l.evJ.TOO_MANY_PUBLISHED_PRODUCT_LISTINGS:
      (0, a.B)(i.intl.string(i.t["04e8bO"]), i.t.uVN1Y5);
      break;
    case l.evJ.TWO_FA_NOT_ENABLED:
      (0, a.B)(i.intl.string(i.t["/yBjZy"]), i.t.kZ6Tgg);
      break;
    case l.evJ.GUILD_PRODUCT_LISTING_CANNOT_PUBLISH_WITHOUT_BENEFIT:
      (0, a.B)(i.intl.string(i.t.MeXDxg), i.t["5q146K"]);
      break;
    case l.evJ.MONETIZATION_TERMS_NOT_ACCEPTED:
      (0, r.openModalLazy)(async () => {
        let {
          default: e
        } = await A.e("31835").then(A.bind(A, 393809));
        return A => (0, n.jsx)(e, function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var A = null != arguments[t] ? arguments[t] : {},
              n = Object.keys(A);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(A).filter(function(e) {
              return Object.getOwnPropertyDescriptor(A, e).enumerable
            }))), n.forEach(function(t) {
              var n;
              n = A[t], t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = n
            })
          }
          return e
        }({
          guildId: t
        }, A))
      });
      break;
    case l.evJ.CREATOR_MONETIZATION_PAYMENT_TEAM_REQUIRED:
      (0, a.B)(i.intl.string(i.t["4hWo0C"]), i.t.Zkhwex);
      break;
    case l.evJ.CREATOR_MONETIZATION_PAYMENT_ACCOUNT_VERIFICATION_REQUIRED:
      let u, c;
      null != o ? (u = i.t.j2VMk6, c = {
        url: l.EYA.DEVELOPER_PORTAL_PAYOUT_SETTINGS(o)
      }) : u = i.t.ZVV1gg, (0, a.B)(i.intl.string(i.t["+CT/gV"]), u, c);
      break;
    default:
      let g = null != (d = e.getFirstFieldErrorMessage(["published"])) ? d : (null == (s = e.hasFieldErrors) ? true : s.call(e)) ? true : e.message;
      null != g && (0, a.B)(i.intl.string(i.t.bvWf8T), g)
  }
}