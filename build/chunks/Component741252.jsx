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
  Chunk440589 = require("./440589.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk500254 = require("./500254.js"),
  Chunk765109 = require("./765109.js");

function m(e, n) {
  (0, r.ZDy)(async () => {
    let {
      default: m
    } = await t.e("13965").then(t.bind(t, 666083));
    return t => (0, i.jsx)(m, function(e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
          i = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), i.forEach(function(n) {
          var i;
          i = t[n], n in e ? Object.defineProperty(e, n, {
            value: i,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[n] = i
        })
      }
      return e
    }({
      title: c.intl.string(s.default.hcBOZW),
      description: c.intl.formatToPlainString(s.default.KCgZMj, {
        provider: "Portkey"
      }),
      image: (0, i.jsx)("div", {
        className: u.imageContainer,
        children: (0, i.jsx)("img", {
          className: u.image,
          alt: "",
          src: n.imageUrl
        })
      }),
      button: (0, i.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: d.button,
        children: (0, i.jsx)(r.zxk, {
          variant: "primary",
          text: c.intl.string(s.default.AS3n8v),
          onClick: () => {
            (0, l.uL)(a.Z5c.CHANNEL(e, o.oC.PORTKEY)), t.onClose()
          }
        })
      })
    }, t))
  })
}