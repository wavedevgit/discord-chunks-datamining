/** Chunk was on 44669 **/
/** chunk id: 779881, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk442433 = require("./442433.js"),
  Chunk514179 = require("./514179.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk652793 = require("./652793.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js"),
  Chunk985018 = require("./985018.jsx");

function d(e) {
  let {
    guild: t,
    selected: d
  } = e;
  return (0, r.jsx)(a.G, {
    id: "subscriptions-".concat(t.id),
    renderIcon: e => (0, r.jsx)(i.A, {
      className: e
    }),
    text: u.intl.string(u.t["KzCF/6"]),
    selected: d,
    onClick: () => {
      (0, s.pX)(o.BVt.CHANNEL(t.id, c.VV.ROLE_SUBSCRIPTIONS))
    },
    onContextMenu: e => {
      null != t && (0, l.L3)(e, async () => {
        let {
          default: e
        } = await n.e("98126").then(n.bind(n, 650730));
        return n => {
          var l, i;
          return (0, r.jsx)(e, (l = function(e) {
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
          }({}, n), i = i = {
            guild: t
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(i)).forEach(function(e) {
            Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e))
          }), l))
        }
      })
    }
  })
}