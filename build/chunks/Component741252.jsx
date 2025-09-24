/** Chunk was on 60728 **/
/** chunk id: 741252, original params: e,t,n (module,exports,require) **/
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

function m(e, t) {
  (0, a.ZDy)(async () => {
    let {
      default: m
    } = await n.e("13965").then(n.bind(n, 666083));
    return n => (0, l.jsx)(m, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), l.forEach(function(t) {
          var l;
          l = n[t], t in e ? Object.defineProperty(e, t, {
            value: l,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = l
        })
      }
      return e
    }({
      title: c.intl.string(o.default.hcBOZW),
      description: c.intl.formatToPlainString(o.default.KCgZMj, {
        provider: "Portkey"
      }),
      image: (0, l.jsx)("div", {
        className: d.imageContainer,
        children: (0, l.jsx)("img", {
          className: d.image,
          alt: "",
          src: t.imageUrl
        })
      }),
      button: (0, l.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: u.button,
        children: (0, l.jsx)(a.zxk, {
          variant: "primary",
          text: c.intl.string(o.default.AS3n8v),
          onClick: () => {
            (0, i.uL)(r.Z5c.CHANNEL(e, s.oC.PORTKEY)), n.onClose()
          }
        })
      })
    }, n))
  })
}