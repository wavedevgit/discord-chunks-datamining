/** Chunk was on 73628 **/
/** chunk id: 412110, original params: A,e,t (module,exports,require) **/
require.d(exports, {
  V: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk952265 = require("./952265.js"),
  Chunk871388 = require("./871388.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function o(A, e, o) {
  var s, d;
  switch (A.code) {
    case l.evJ.TOO_MANY_PUBLISHED_PRODUCT_LISTINGS:
      (0, a.B)(i.intl.string(i.t["04e8bG"]), i.t.uVN1Y2);
      break;
    case l.evJ.TWO_FA_NOT_ENABLED:
      (0, a.B)(i.intl.string(i.t["/yBjZ2"]), i.t.kZ6Tgo);
      break;
    case l.evJ.GUILD_PRODUCT_LISTING_CANNOT_PUBLISH_WITHOUT_BENEFIT:
      (0, a.B)(i.intl.string(i.t.MeXDxs), i.t["5q146O"]);
      break;
    case l.evJ.MONETIZATION_TERMS_NOT_ACCEPTED:
      (0, r.ZD)(async () => {
        let {
          default: A
        } = await t.e("31835").then(t.bind(t, 393809));
        return t => (0, n.jsx)(A, function(A) {
          for (var e = 1; e < arguments.length; e++) {
            var t = null != arguments[e] ? arguments[e] : {},
              n = Object.keys(t);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(A) {
              return Object.getOwnPropertyDescriptor(t, A).enumerable
            }))), n.forEach(function(e) {
              var n;
              n = t[e], e in A ? Object.defineProperty(A, e, {
                value: n,
                enumerable: true,
                configurable: true,
                writable: true
              }) : A[e] = n
            })
          }
          return A
        }({
          guildId: e
        }, t))
      });
      break;
    case l.evJ.CREATOR_MONETIZATION_PAYMENT_TEAM_REQUIRED:
      (0, a.B)(i.intl.string(i.t["4hWo0N"]), i.t.Zkhwe3);
      break;
    case l.evJ.CREATOR_MONETIZATION_PAYMENT_ACCOUNT_VERIFICATION_REQUIRED:
      let c, u;
      null != o ? (c = i.t.j2VMk5, u = {
        url: l.EYA.DEVELOPER_PORTAL_PAYOUT_SETTINGS(o)
      }) : c = i.t.ZVV1go, (0, a.B)(i.intl.string(i.t["+CT/gY"]), c, u);
      break;
    default:
      let f = null != (d = A.getFirstFieldErrorMessage(["published"])) ? d : (null == (s = A.hasFieldErrors) ? true : s.call(A)) ? true : A.message;
      null != f && (0, a.B)(i.intl.string(i.t.bvWf8f), f)
  }
}