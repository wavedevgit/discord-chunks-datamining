/** Chunk was on 44669 **/
/** chunk id: 915667, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => a
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk568065 = require("./568065.js");

function s(e) {
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

function a(e, t) {
  (0, l.mMO)(async () => {
    switch (t.type) {
      case i.o9.LEVEL:
        let {
          default: l
        } = await n.e("96914").then(n.bind(n, 391209));
        return n => (0, r.jsx)(l, s({
          guildId: e,
          powerup: t
        }, n));
      case i.o9.PERK: {
        let {
          default: l
        } = await Promise.all([n.e("63379"), n.e("34249")]).then(n.bind(n, 940481));
        return n => (0, r.jsx)(l, s({
          guildId: e,
          powerup: t
        }, n))
      }
    }
  }, {
    modalKey: i.Fq
  })
}