/** Chunk was on 66050 **/
/** chunk id: 64220, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk367907 = require("./367907.js"),
  Chunk496675 = require("./496675.js"),
  Chunk626135 = require("./626135.js"),
  Chunk934415 = require("./934415.js"),
  Chunk572004 = require("./572004.js"),
  Chunk629481 = require("./629481.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk388032 = require("./388032.jsx");

function d(e) {
  let {
    guild: t,
    onSelect: r
  } = e, d = (0, o.e7)([s.Z], () => null != t && s.Z.can(u.Plq.ADMINISTRATOR, t));
  return (0, n.jsx)(c.v2r, {
    navId: "guild-shop-context",
    "aria-label": f.intl.string(f.t.g3KvYF),
    onClose: i.Zy,
    onSelect: r,
    children: (0, n.jsx)(c.kSQ, {
      children: (0, n.jsx)(c.sNh, {
        id: "role-subscription-copy-link",
        label: f.intl.string(f.t.WqhZss),
        action: () => {
          var e, r;
          a.default.track(u.rMx.GUILD_SHOP_COPY_LINK, (e = function(e) {
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
          }({}, (0, l.hH)(t.id)), r = r = {
            is_admin_or_owner: d,
            copy_location: b.xv.CHANNEL_ROW_CONTEXT_MENU
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              r.push.apply(r, n)
            }
            return r
          })(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }), e)), (0, O.JG)((0, p.wR)(t.id, y.oC.GUILD_SHOP))
        }
      })
    })
  })
}