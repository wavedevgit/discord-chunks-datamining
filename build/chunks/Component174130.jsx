/** Chunk was on 82124 **/
/** chunk id: 174130, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk665149 = require("./665149.jsx"),
  Chunk853856 = require("./853856.js"),
  Chunk117984 = require("./117984.js"),
  Chunk593214 = require("./593214.js"),
  Chunk362658 = require("./362658.js"),
  Chunk916069 = require("./916069.js"),
  Chunk388032 = require("./388032.jsx");

function f(e) {
  let {
    channel: t
  } = e, {
    isFavoritesPerk: n
  } = (0, u.z)("ChannelFavoritesHeaderButton"), f = (0, d.Z)(), {
    notifyFavoriteAdded: h
  } = (0, c.up)(), g = (0, i.e7)([o.Z], () => o.Z.isFavorite(t.id));
  if (!n || f) return null;
  let m = g ? l.r7p : l.vxU,
    b = g ? p.intl.string(p.t.Bou7lT) : p.intl.string(p.t["4wcdE/"]);
  return (0, r.jsx)(a.ZP.Icon, {
    icon: m,
    tooltip: b,
    "aria-label": b,
    onClick: () => {
      g ? (0, s.oC)(t.id) : (h(), (0, s.kj)(t.id))
    }
  })
}