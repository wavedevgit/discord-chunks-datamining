/** Chunk was on 23735 **/
/** chunk id: 104982, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk481060 = require("./481060.js"),
  Chunk703656 = require("./703656.js"),
  Chunk666083 = require("./666083.jsx"),
  Chunk162190 = require("./162190.js"),
  Chunk669460 = require("./669460.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk719662 = require("./719662.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk500254 = require("./500254.js"),
  Chunk671957 = require("./671957.js");

function g(e) {
  var {
    gameServerGame: t,
    guildId: n,
    status: g
  } = e, m = function(e, t) {
    if (null == e) return {};
    var n, r, a = function(e, t) {
      if (null == e) return {};
      var n, r, a = {},
        i = Object.keys(e);
      for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
      return a
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
    }
    return a
  }(e, ["gameServerGame", "guildId", "status"]);
  let O = (0, c.Z)(t.gameId, "cover");
  return (0, r.jsx)(o.default, function(e) {
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
    title: d.intl.string("created" === g ? f.default["4lLdBM"] : f.default.VPDgHa),
    description: d.intl.formatToPlainString(f.default.yL6BiH, {
      provider: (0, l.Z)(t.provider)
    }),
    image: (0, r.jsx)("div", {
      className: b.imageContainer,
      children: (0, r.jsx)("img", {
        className: b.image,
        alt: "",
        src: null != O ? O : ""
      })
    }),
    button: (0, r.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: p.button,
      children: (0, r.jsx)(a.Button, {
        variant: "primary",
        text: d.intl.string(f.default.VkItSr),
        onClick: () => {
          (0, i.uL)(s.Z5c.CHANNEL(n, u.oC.GAME_SERVERS)), m.onClose()
        }
      })
    })
  }, m))
}