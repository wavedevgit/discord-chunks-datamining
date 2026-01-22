/** Chunk was on 27188 **/
/** chunk id: 796415, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => y
});
var Chunk627968 = require("./627968.js"),
  Chunk397927 = require("./397927.js"),
  Chunk976860 = require("./976860.js"),
  Chunk523084 = require("./523084.jsx"),
  Chunk225180 = require("./225180.js"),
  Chunk285286 = require("./285286.js"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js"),
  Chunk294726 = require("./294726.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk413526 = require("./413526.js"),
  Chunk429040 = require("./429040.js");

function y(e) {
  let {
    gameServerGame: t,
    guildId: r,
    status: y
  } = e, O = function(e, t) {
    if (null == e) return {};
    var r, n, o, l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (o = 0, r = Reflect.ownKeys(e); o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
      return l
    }
    if (l = function(e, t) {
        if (null == e) return {};
        var r, n, o = {},
          l = Object.getOwnPropertyNames(e);
        for (n = 0; n < l.length; n++) r = l[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
        return o
      }(e, t), Object.getOwnPropertySymbols)
      for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
    return l
  }(e, ["gameServerGame", "guildId", "status"]), m = (0, i.A)(t.gameId, "cover");
  return (0, n.jsx)(a.default, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
        n = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable
      }))), n.forEach(function(t) {
        var n;
        n = r[t], t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = n
      })
    }
    return e
  }({
    title: f.intl.string("created" === y ? p.default["4lLdBM"] : p.default.VPDgHa),
    description: f.intl.formatToPlainString(p.default.yL6BiH, {
      provider: (0, c.A)(t.provider)
    }),
    image: (0, n.jsx)("div", {
      className: d.Z,
      children: (0, n.jsx)("img", {
        className: d.S,
        alt: "",
        src: null != m ? m : ""
      })
    }),
    button: (0, n.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: b.x6,
      children: (0, n.jsx)(o.Button, {
        variant: "primary",
        text: f.intl.string(p.default.VkItSr),
        onClick: () => {
          (0, l.pX)(s.BVt.CHANNEL(r, u.VV.GAME_SERVERS)), O.onClose()
        }
      })
    })
  }, O))
}