/** Chunk was on 27 **/
/** chunk id: 193154, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk460562 = require("./460562.jsx"),
  Chunk768581 = require("./768581.js"),
  Chunk682662 = require("./682662.jsx"),
  Chunk662146 = require("./662146.jsx"),
  Chunk961699 = require("./961699.js");

function p(e) {
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
  let [t, h] = i.useState(false), f = (0, l.Ie)("guild-".concat(e.id));
  return (0, r.jsx)(c.H, {
    children: (0, r.jsx)(u.Z, {
      text: e.name,
      children: (0, r.jsx)(o.aRk, {
        className: d.circleIconButton,
        selected: t,
        lowerBadge: (0, r.jsx)(o.G2e, {
          icon: (0, o.GSL)(a.Z),
          disableColor: true,
          className: d.geoRestrictedBadge
        }),
        children: (0, r.jsx)(o.LYs, p({
          name: e.name,
          onMouseEnter: () => {
            h(true)
          },
          onMouseLeave: () => {
            h(false)
          },
          onClick: () => {
            (0, o.ZDy)(async () => {
              let {
                default: t
              } = await n.e("42358").then(n.bind(n, 210995));
              return n => (0, r.jsx)(t, p({
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
        }, f))
      })
    })
  })
}