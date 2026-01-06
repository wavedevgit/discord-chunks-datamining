/** Chunk was on 67000 **/
/** chunk id: 196806, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk535396 = require("./535396.js");

function a(e) {
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
}

function o(e, t) {
  (0, i.ZDy)(async () => {
    switch (t.type) {
      case l.Us.LEVEL:
        let {
          default: i
        } = await n.e("99014").then(n.bind(n, 271224));
        return n => (0, r.jsx)(i, a({
          guildId: e,
          powerup: t
        }, n));
      case l.Us.PERK: {
        let {
          default: i
        } = await Promise.all([n.e("76692"), n.e("17185")]).then(n.bind(n, 326055));
        return n => (0, r.jsx)(i, a({
          guildId: e,
          powerup: t
        }, n))
      }
    }
  }, {
    modalKey: l.H2
  })
}