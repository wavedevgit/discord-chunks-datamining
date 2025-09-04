/** Chunk was on 39159 **/
/** chunk id: 741252, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js"),
  Chunk703656 = require("./703656.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk401561 = require("./401561.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk477487 = require("./477487.js"),
  Chunk438957 = require("./438957.js");

function m(e, n) {
  (0, i.ZDy)(async () => {
    let {
      default: m
    } = await t.e("13965").then(t.bind(t, 666083));
    return t => (0, a.jsx)(m, function(e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
          a = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), a.forEach(function(n) {
          var a;
          a = t[n], n in e ? Object.defineProperty(e, n, {
            value: a,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[n] = a
        })
      }
      return e
    }({
      title: c.intl.string(o.default.hcBOZW),
      description: c.intl.formatToPlainString(o.default.KCgZMj, {
        provider: "Portkey"
      }),
      image: (0, a.jsx)("div", {
        className: u.imageContainer,
        children: (0, a.jsx)("img", {
          className: u.image,
          alt: "",
          src: n.imageUrl
        })
      }),
      button: (0, a.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: d.button,
        children: (0, a.jsx)(i.zxk, {
          variant: "primary",
          text: c.intl.string(o.default.AS3n8v),
          onClick: () => {
            (0, r.uL)(l.Z5c.CHANNEL(e, s.oC.PORTKEY)), t.onClose()
          }
        })
      })
    }, t))
  })
}