/** Chunk was on 17534 **/
/** chunk id: 795766, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
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

function p(e) {
  let {
    channel: t
  } = e, {
    isFavoritesPerk: n
  } = (0, u.l)("ChannelFavoritesHeaderButton"), p = (0, d.A)(), {
    notifyFavoriteAdded: g
  } = (0, c.CJ)(), f = (0, l.bG)([a.A], () => a.A.isFavorite(t.id));
  if (!n || p) return null;
  let m = f ? i.Gg5 : i.yA2,
    b = f ? h.intl.string(h.t.Bou7lT) : h.intl.string(h.t["4wcdE/"]);
  return (0, r.jsx)(s.Ay.Icon, {
    icon: m,
    tooltip: b,
    "aria-label": b,
    onClick: () => {
      f ? (0, o.i_)(t.id) : (g(), (0, o.Jz)(t.id))
    }
  })
}