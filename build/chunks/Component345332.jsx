/** Chunk was on 52565 **/
/** chunk id: 345332, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk58149 = require("./58149.js"),
  Chunk576705 = require("./576705.js"),
  Chunk954571 = require("./954571.js"),
  Chunk147036 = require("./147036.js"),
  Chunk957565 = require("./957565.js"),
  Chunk634654 = require("./634654.js"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js"),
  Chunk985018 = require("./985018.jsx");

function f(e) {
  let {
    guild: t,
    onSelect: r
  } = e, f = (0, o.bG)([l.A], () => null != t && l.A.can(u.xBc.ADMINISTRATOR, t));
  return (0, n.jsx)(c.W1t, {
    "data-menu-migrated": true,
    navId: "guild-shop-context",
    "aria-label": y.intl.string(y.t.g3KvYF),
    onClose: i.Z_,
    onSelect: r,
    children: (0, n.jsx)(c.rXV, {
      children: (0, n.jsx)(c.Drp, {
        id: "role-subscription-copy-link",
        label: y.intl.string(y.t.WqhZss),
        action: () => {
          var e, r;
          s.default.track(u.HAw.GUILD_SHOP_COPY_LINK, (e = function(e) {
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
          }({}, (0, a.H$)(t.id)), r = r = {
            is_admin_or_owner: f,
            copy_location: O.lJ.CHANNEL_ROW_CONTEXT_MENU
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              r.push.apply(r, n)
            }
            return r
          })(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }), e)), (0, b.C)((0, p.n)(t.id, d.VV.GUILD_SHOP))
        }
      })
    })
  })
}