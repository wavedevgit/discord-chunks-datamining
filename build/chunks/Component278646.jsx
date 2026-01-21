/** Chunk was on 82124 **/
/** chunk id: 278646, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  h: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk481060 = require("./481060.js"),
  Chunk262212 = require("./262212.jsx"),
  Chunk795338 = require("./795338.jsx"),
  Chunk535396 = require("./535396.js"),
  Chunk556970 = require("./556970.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk694253 = require("./694253.js");

function d(e, t) {
  if (null == t) return;
  let d = o.ye.has(t.skuId);
  (0, i.ZDy)(async () => {
    let {
      default: o
    } = await n.e("13965").then(n.bind(n, 666083));
    return n => (0, r.jsx)(o, function(e) {
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
      title: c.intl.formatToPlainString(s.default.lFuOFF, {
        perkName: t.title
      }),
      description: c.intl.formatToPlainString(s.default.y3wHot, {
        perkName: t.title
      }),
      image: (0, r.jsx)(a.m, {
        className: u.image,
        powerup: t
      }),
      button: d ? (0, r.jsx)(l.ms, {
        className: u.button,
        guildId: e,
        powerup: t,
        onClick: n.onClose
      }) : (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: u.button,
        children: (0, r.jsx)(i.Button, {
          variant: "primary",
          text: c.intl.string(c.t.cpT0Cq),
          onClick: n.onClose
        })
      })
    }, n))
  })
}