/** Chunk was on 61268 **/
/** chunk id: 37208, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js"),
  Chunk703656 = require("./703656.js"),
  Chunk666083 = require("./666083.jsx"),
  Chunk943970 = require("./943970.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk440589 = require("./440589.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk500254 = require("./500254.js"),
  Chunk765109 = require("./765109.js");

function b(e) {
  var {
    portkeyGame: t,
    guildId: n,
    status: b
  } = e, m = function(e, t) {
    if (null == e) return {};
    var n, r, a = function(e, t) {
      if (null == e) return {};
      var n, r, a = {},
        o = Object.keys(e);
      for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
      return a
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
    }
    return a
  }(e, ["portkeyGame", "guildId", "status"]);
  let g = (0, c.Z)(t.gameId, "cover");
  return (0, r.jsx)(i.default, function(e) {
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
    title: f.intl.string("created" === b ? u.default.hcBOZW : u.default.mFefx8),
    description: f.intl.formatToPlainString(u.default.KCgZMj, {
      provider: "Portkey"
    }),
    image: (0, r.jsx)("div", {
      className: d.imageContainer,
      children: (0, r.jsx)("img", {
        className: d.image,
        alt: "",
        src: null != g ? g : ""
      })
    }),
    button: (0, r.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: p.button,
      children: (0, r.jsx)(a.zxk, {
        variant: "primary",
        text: f.intl.string(u.default.AS3n8v),
        onClick: () => {
          (0, o.uL)(l.Z5c.CHANNEL(n, s.oC.PORTKEY)), m.onClose()
        }
      })
    })
  }, m))
}