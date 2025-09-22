/** Chunk was on 73628 **/
/** chunk id: 412110, original params: e,A,t (module,exports,require) **/
require.d(exports, {
  V: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk952265 = require("./952265.js"),
  Chunk871388 = require("./871388.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function o(e, A, o) {
  var s, d;
  switch (e.code) {
    case a.evJ.TOO_MANY_PUBLISHED_PRODUCT_LISTINGS:
      (0, l.B)(i.intl.string(i.t["04e8bG"]), i.t.uVN1Y2);
      break;
    case a.evJ.TWO_FA_NOT_ENABLED:
      (0, l.B)(i.intl.string(i.t["/yBjZ2"]), i.t.kZ6Tgo);
      break;
    case a.evJ.GUILD_PRODUCT_LISTING_CANNOT_PUBLISH_WITHOUT_BENEFIT:
      (0, l.B)(i.intl.string(i.t.MeXDxs), i.t["5q146O"]);
      break;
    case a.evJ.MONETIZATION_TERMS_NOT_ACCEPTED:
      (0, r.ZD)(async () => {
        let {
          default: e
        } = await t.e("31835").then(t.bind(t, 393809));
        return t => (0, n.jsx)(e, function(e) {
          for (var A = 1; A < arguments.length; A++) {
            var t = null != arguments[A] ? arguments[A] : {},
              n = Object.keys(t);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.forEach(function(A) {
              var n;
              n = t[A], A in e ? Object.defineProperty(e, A, {
                value: n,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[A] = n
            })
          }
          return e
        }({
          guildId: A
        }, t))
      });
      break;
    case a.evJ.CREATOR_MONETIZATION_PAYMENT_TEAM_REQUIRED:
      (0, l.B)(i.intl.string(i.t["4hWo0N"]), i.t.Zkhwe3);
      break;
    case a.evJ.CREATOR_MONETIZATION_PAYMENT_ACCOUNT_VERIFICATION_REQUIRED:
      let u, c;
      null != o ? (u = i.t.j2VMk5, c = {
        url: a.EYA.DEVELOPER_PORTAL_PAYOUT_SETTINGS(o)
      }) : u = i.t.ZVV1go, (0, l.B)(i.intl.string(i.t["+CT/gY"]), u, c);
      break;
    default:
      let g = null != (d = e.getFirstFieldErrorMessage(["published"])) ? d : (null == (s = e.hasFieldErrors) ? true : s.call(e)) ? true : e.message;
      null != g && (0, l.B)(i.intl.string(i.t.bvWf8f), g)
  }
}