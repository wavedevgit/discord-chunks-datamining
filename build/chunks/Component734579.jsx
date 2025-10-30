/** Chunk was on 83546 **/
/** chunk id: 734579, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk703656 = require("./703656.js"),
  Chunk210218 = require("./210218.js"),
  Chunk434479 = require("./434479.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function d(e) {
  let {
    guild: t,
    selected: d
  } = e;
  return (0, r.jsx)(s.m, {
    id: "shop-".concat(t.id),
    renderIcon: e => (0, r.jsx)(i.EOn, {
      size: "custom",
      color: i.TVs.colors.CHANNEL_ICON,
      width: 20,
      height: 20,
      className: e
    }),
    text: u.intl.string(u.t.vyaWs7),
    selected: d,
    onClick: () => {
      var e, n;
      let r = null != (n = null == (e = a.Z.getStorefrontState(t.id)) ? true : e.activePage) ? n : 0;
      (0, o.uL)(c.Z5c.CHANNELS_GAME_SHOP(t.id, r))
    },
    onContextMenu: e => {
      null != t && (0, l.jW)(e, async () => {
        let {
          default: e
        } = await n.e("73848").then(n.bind(n, 98409));
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