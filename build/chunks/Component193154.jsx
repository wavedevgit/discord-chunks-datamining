/** Chunk was on 51235 **/
/** chunk id: 193154, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk460562 = require("./460562.jsx"),
  Chunk768581 = require("./768581.js"),
  Chunk682662 = require("./682662.jsx"),
  Chunk662146 = require("./662146.jsx"),
  Chunk619645 = require("./619645.js");

function f(e) {
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

function h(e) {
  let [t, h] = i.useState(false), p = (0, l.Ie)("guild-".concat(e.id));
  return (0, r.jsx)(c.H, {
    children: (0, r.jsx)(u.Z, {
      text: e.name,
      children: (0, r.jsx)(a.aRk, {
        className: d.circleIconButton,
        selected: t,
        lowerBadge: (0, r.jsx)(a.G2e, {
          icon: (0, a.GSL)(o.Z),
          disableColor: true,
          className: d.geoRestrictedBadge
        }),
        children: (0, r.jsx)(a.LYs, f({
          name: e.name,
          onMouseEnter: () => {
            h(true)
          },
          onMouseLeave: () => {
            h(false)
          },
          onClick: () => {
            (0, a.ZDy)(async () => {
              let {
                default: t
              } = await n.e("42358").then(n.bind(n, 210995));
              return n => (0, r.jsx)(t, f({
                name: e.name,
                guildId: e.id
              }, n))
            })
          },
          icon: null != e.icon ? s.ZP.getGuildIconURL({
            id: e.id,
            icon: e.icon,
            canAnimate: false,
            size: 42
          }) : null
        }, p))
      })
    })
  })
}