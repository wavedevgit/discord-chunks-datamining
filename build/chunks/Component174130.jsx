/** Chunk was on 36499 **/
/** chunk id: 174130, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
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

function h(e) {
  let {
    channel: t
  } = e, {
    isFavoritesPerk: n
  } = (0, u.z)("ChannelFavoritesHeaderButton"), h = (0, d.Z)(), {
    notifyFavoriteAdded: f
  } = (0, c.up)(), m = (0, i.e7)([o.Z], () => o.Z.isFavorite(t.id));
  if (!n || h) return null;
  let g = m ? l.r7p : l.vxU,
    b = m ? p.intl.string(p.t.Bou7lZ) : p.intl.string(p.t["4wcdEx"]);
  return (0, r.jsx)(a.ZP.Icon, {
    icon: g,
    tooltip: b,
    "aria-label": b,
    onClick: () => {
      m ? (0, s.oC)(t.id) : (f(), (0, s.kj)(t.id))
    }
  })
}