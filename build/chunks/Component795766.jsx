/** Chunk was on 97887 **/
/** chunk id: 795766, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk58736 = require("./58736.jsx"),
  Chunk181079 = require("./181079.js"),
  Chunk422258 = require("./422258.js"),
  Chunk93055 = require("./93055.js"),
  Chunk616075 = require("./616075.js"),
  Chunk515610 = require("./515610.js"),
  Chunk985018 = require("./985018.jsx");

function h(e) {
  let {
    channel: t
  } = e, {
    isFavoritesPerk: n
  } = (0, u.l)("ChannelFavoritesHeaderButton"), h = (0, d.A)(), {
    notifyFavoriteAdded: f
  } = (0, c.CJ)(), g = (0, l.bG)([a.A], () => a.A.isFavorite(t.id));
  if (!n || h) return null;
  let m = g ? i.Gg5 : i.yA2,
    b = g ? p.intl.string(p.t.Bou7lT) : p.intl.string(p.t["4wcdE/"]);
  return (0, r.jsx)(s.Ay.Icon, {
    icon: m,
    tooltip: b,
    "aria-label": b,
    onClick: () => {
      g ? (0, o.i_)(t.id) : (f(), (0, o.Jz)(t.id))
    }
  })
}