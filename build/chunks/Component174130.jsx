/** Chunk was on 91053 **/
/** chunk id: 174130, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk665149 = require("./665149.jsx"),
  Chunk853856 = require("./853856.js"),
  Chunk117984 = require("./117984.js"),
  Chunk593214 = require("./593214.js"),
  Chunk362658 = require("./362658.js"),
  Chunk916069 = require("./916069.js"),
  Chunk388032 = require("./388032.jsx");

function p(e) {
  let {
    channel: t
  } = e, {
    isFavoritesPerk: n
  } = (0, d.z)("ChannelFavoritesHeaderButton"), p = (0, u.Z)(), {
    notifyFavoriteAdded: f
  } = (0, c.up)(), g = (0, i.e7)([s.Z], () => s.Z.isFavorite(t.id));
  if (!n || p) return null;
  let m = g ? l.r7p : l.vxU,
    b = g ? h.intl.string(h.t.Bou7lT) : h.intl.string(h.t["4wcdE/"]);
  return (0, r.jsx)(a.ZP.Icon, {
    icon: m,
    tooltip: b,
    "aria-label": b,
    onClick: () => {
      g ? (0, o.oC)(t.id) : (f(), (0, o.kj)(t.id))
    }
  })
}