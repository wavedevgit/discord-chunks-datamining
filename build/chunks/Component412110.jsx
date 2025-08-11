/** Chunk was on 73628 **/
/** chunk id: 412110, original params: e,t,A (module,exports,require) **/
require.d(exports, {
  V: () => s
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk952265 = require("./952265.js"),
  Chunk776045 = require("./776045.jsx"),
  Chunk871388 = require("./871388.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function s(e, t, s) {
  var d, c;
  switch (e.code) {
    case o.evJ.TOO_MANY_PUBLISHED_PRODUCT_LISTINGS:
      (0, a.B)(i.intl.string(i.t["04e8bG"]), i.t.uVN1Y2, l.A.DANGER);
      break;
    case o.evJ.TWO_FA_NOT_ENABLED:
      (0, a.B)(i.intl.string(i.t["/yBjZ2"]), i.t.kZ6Tgo, l.A.WARNING);
      break;
    case o.evJ.GUILD_PRODUCT_LISTING_CANNOT_PUBLISH_WITHOUT_BENEFIT:
      (0, a.B)(i.intl.string(i.t.MeXDxs), i.t["5q146O"], l.A.WARNING);
      break;
    case o.evJ.MONETIZATION_TERMS_NOT_ACCEPTED:
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
    case o.evJ.CREATOR_MONETIZATION_PAYMENT_TEAM_REQUIRED:
      (0, a.B)(i.intl.string(i.t["4hWo0N"]), i.t.Zkhwe3, l.A.WARNING);
      break;
    case o.evJ.CREATOR_MONETIZATION_PAYMENT_ACCOUNT_VERIFICATION_REQUIRED:
      let u, f;
      null != s ? (u = i.t.j2VMk5, f = {
        url: o.EYA.DEVELOPER_PORTAL_PAYOUT_SETTINGS(s)
      }) : u = i.t.ZVV1go, (0, a.B)(i.intl.string(i.t["+CT/gY"]), u, l.A.WARNING, f);
      break;
    default:
      let g = null != (c = e.getFirstFieldErrorMessage(["published"])) ? c : (null == (d = e.hasFieldErrors) ? true : d.call(e)) ? true : e.message;
      null != g && (0, a.B)(i.intl.string(i.t.bvWf8f), g, l.A.WARNING)
  }
}