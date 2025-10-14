/** Chunk was on 73628 **/
/** chunk id: 412110, original params: e,t,A (module,exports,require) **/
require.d(exports, {
  V: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk952265 = require("./952265.js"),
  Chunk871388 = require("./871388.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function o(e, t, o) {
  var s, d;
  switch (e.code) {
    case i.evJ.TOO_MANY_PUBLISHED_PRODUCT_LISTINGS:
      (0, a.B)(l.intl.string(l.t["04e8bG"]), l.t.uVN1Y2);
      break;
    case i.evJ.TWO_FA_NOT_ENABLED:
      (0, a.B)(l.intl.string(l.t["/yBjZ2"]), l.t.kZ6Tgo);
      break;
    case i.evJ.GUILD_PRODUCT_LISTING_CANNOT_PUBLISH_WITHOUT_BENEFIT:
      (0, a.B)(l.intl.string(l.t.MeXDxs), l.t["5q146O"]);
      break;
    case i.evJ.MONETIZATION_TERMS_NOT_ACCEPTED:
      (0, r.ZD)(async () => {
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
    case i.evJ.CREATOR_MONETIZATION_PAYMENT_TEAM_REQUIRED:
      (0, a.B)(l.intl.string(l.t["4hWo0N"]), l.t.Zkhwe3);
      break;
    case i.evJ.CREATOR_MONETIZATION_PAYMENT_ACCOUNT_VERIFICATION_REQUIRED:
      let u, c;
      null != o ? (u = l.t.j2VMk5, c = {
        url: i.EYA.DEVELOPER_PORTAL_PAYOUT_SETTINGS(o)
      }) : u = l.t.ZVV1go, (0, a.B)(l.intl.string(l.t["+CT/gY"]), u, c);
      break;
    default:
      let g = null != (d = e.getFirstFieldErrorMessage(["published"])) ? d : (null == (s = e.hasFieldErrors) ? true : s.call(e)) ? true : e.message;
      null != g && (0, a.B)(l.intl.string(l.t.bvWf8f), g)
  }
}