/** Chunk was on 97492 **/
/** chunk id: 497140, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk837381 = require("./837381.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk791606 = require("./791606.jsx"),
  Chunk486020 = require("./486020.js"),
  Chunk900848 = require("./900848.jsx"),
  Chunk550591 = require("./550591.jsx"),
  Chunk794398 = require("./794398.js");

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

function p(e) {
  let [t, p] = l.useState(false), h = (0, i.Vd)("guild-".concat(e.id));
  return (0, r.jsx)(c.c, {
    children: (0, r.jsx)(u.A, {
      text: e.name,
      children: (0, r.jsx)(a.Qk9, {
        className: d.o,
        selected: t,
        lowerBadge: (0, r.jsx)(a.fkz, {
          icon: (0, a.kHD)(s.A),
          disableColor: true,
          className: d._
        }),
        children: (0, r.jsx)(a.jlP, f({
          name: e.name,
          onMouseEnter: () => {
            p(true)
          },
          onMouseLeave: () => {
            p(false)
          },
          onClick: () => {
            (0, a.mMO)(async () => {
              let {
                default: t
              } = await n.e("42945").then(n.bind(n, 537560));
              return n => (0, r.jsx)(t, f({
                name: e.name,
                guildId: e.id
              }, n))
            })
          },
          icon: null != e.icon ? o.Ay.getGuildIconURL({
            id: e.id,
            icon: e.icon,
            canAnimate: false,
            size: 42
          }) : null
        }, h))
      })
    })
  })
}