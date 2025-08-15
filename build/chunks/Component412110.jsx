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
  var c, d;
  switch (e.code) {
    case i.evJ.TOO_MANY_PUBLISHED_PRODUCT_LISTINGS:
      (0, l.B)(o.intl.string(o.t["04e8bG"]), o.t.uVN1Y2, a.A.DANGER);
      break;
    case i.evJ.TWO_FA_NOT_ENABLED:
      (0, l.B)(o.intl.string(o.t["/yBjZ2"]), o.t.kZ6Tgo, a.A.WARNING);
      break;
    case i.evJ.GUILD_PRODUCT_LISTING_CANNOT_PUBLISH_WITHOUT_BENEFIT:
      (0, l.B)(o.intl.string(o.t.MeXDxs), o.t["5q146O"], a.A.WARNING);
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
      (0, l.B)(o.intl.string(o.t["4hWo0N"]), o.t.Zkhwe3, a.A.WARNING);
      break;
    case i.evJ.CREATOR_MONETIZATION_PAYMENT_ACCOUNT_VERIFICATION_REQUIRED:
      let u, g;
      null != s ? (u = o.t.j2VMk5, g = {
        url: i.EYA.DEVELOPER_PORTAL_PAYOUT_SETTINGS(s)
      }) : u = o.t.ZVV1go, (0, l.B)(o.intl.string(o.t["+CT/gY"]), u, a.A.WARNING, g);
      break;
    default:
      let f = null != (d = e.getFirstFieldErrorMessage(["published"])) ? d : (null == (c = e.hasFieldErrors) ? true : c.call(e)) ? true : e.message;
      null != f && (0, l.B)(o.intl.string(o.t.bvWf8f), f, a.A.WARNING)
  }
}