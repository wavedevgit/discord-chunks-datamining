/** Chunk was on 65354 **/
/** chunk id: 61642, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk239091 = require("./239091.js"),
  Chunk396828 = require("./396828.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk434479 = require("./434479.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk388032 = require("./388032.jsx");

function d(e) {
  let {
    guild: t,
    selected: d
  } = e;
  return (0, r.jsx)(a.m, {
    id: "subscriptions-".concat(t.id),
    renderIcon: e => (0, r.jsx)(l.Z, {
      className: e
    }),
    text: u.intl.string(u.t["KzCF/6"]),
    selected: d,
    onClick: () => {
      (0, o.uL)(s.Z5c.CHANNEL(t.id, c.oC.ROLE_SUBSCRIPTIONS))
    },
    onContextMenu: e => {
      null != t && (0, i.jW)(e, async () => {
        let {
          default: e
        } = await n.e("28249").then(n.bind(n, 613329));
        return n => {
          var i, l;
          return (0, r.jsx)(e, (i = function(e) {
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
          }({}, n), l = l = {
            guild: t
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(l)).forEach(function(e) {
            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
          }), i))
        }
      })
    }
  })
}