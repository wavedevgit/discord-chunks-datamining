/** Chunk was on 1113 **/
/** chunk id: 299975, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  h: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk397927 = require("./397927.js"),
  Chunk722523 = require("./722523.jsx"),
  Chunk490557 = require("./490557.jsx"),
  Chunk568065 = require("./568065.js"),
  Chunk333354 = require("./333354.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk413526 = require("./413526.js");

function d(e, t) {
  if (null == t) return;
  let d = a.HO.has(t.skuId);
  (0, l.mMO)(async () => {
    let {
      default: a
    } = await n.e("957").then(n.bind(n, 523084));
    return n => (0, r.jsx)(a, function(e) {
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
    }({
      title: c.intl.formatToPlainString(o.default.lFuOFF, {
        perkName: t.title
      }),
      description: c.intl.formatToPlainString(o.default.y3wHot, {
        perkName: t.title
      }),
      image: (0, r.jsx)(s.l, {
        className: u.Sl,
        powerup: t
      }),
      button: d ? (0, r.jsx)(i.GU, {
        className: u.x6,
        guildId: e,
        powerup: t,
        onClick: n.onClose
      }) : (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: u.x6,
        children: (0, r.jsx)(l.Button, {
          variant: "primary",
          text: c.intl.string(c.t.cpT0Cq),
          onClick: n.onClose
        })
      })
    }, n))
  })
}