/** Chunk was on 60728 **/
/** chunk id: 741252, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js"),
  Chunk703656 = require("./703656.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk401561 = require("./401561.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk438957 = require("./438957.js");

function d(e, t) {
  (0, i.ZDy)(async () => {
    let {
      default: d
    } = await n.e("13965").then(n.bind(n, 666083));
    return n => (0, l.jsx)(d, function(e) {
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
      title: u.intl.string(o.default.hcBOZW),
      description: u.intl.formatToPlainString(o.default.KCgZMj, {
        provider: "Portkey"
      }),
      image: (0, l.jsx)("div", {
        className: c.imageContainer,
        children: (0, l.jsx)("img", {
          className: c.image,
          alt: "",
          src: t.imageUrl
        })
      }),
      button: (0, l.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        children: (0, l.jsx)(i.zxk, {
          variant: "primary",
          text: u.intl.string(o.default.AS3n8v),
          onClick: () => {
            (0, a.uL)(r.Z5c.CHANNEL(e, s.oC.PORTKEY)), n.onClose()
          }
        })
      })
    }, n))
  })
}