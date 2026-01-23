/** Chunk was on 13530 **/
/** chunk id: 976720, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk871123 = require("./871123.js"),
  Chunk44724 = require("./44724.js"),
  Chunk409626 = require("./409626.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function d(e) {
  var t, n;
  let {
    invite: d,
    trackClick: m,
    closeModal: f
  } = e, g = r.useCallback(() => {
    (null == d ? true : d.guild) != null && (0, s.X)({
      guildId: d.guild.id
    })
  }, [d]), x = r.useCallback(() => {
    (null == d ? true : d.guild) != null && ((0, s.default)({
      invite: d
    }), f(), m(o.Ws.GameShop))
  }, [f, d, m]);
  return new Set(null == d || null == (t = d.guild) ? true : t.features).has(c.GuildFeatures.SOCIAL_LAYER_STOREFRONT) ? (0, l.jsx)(i.$nd, {
    variant: "primary",
    text: (null == d || null == (n = d.guild) ? true : n.id) === (0, a.zf)() ? u.intl.string(u.t.WTXyEQ) : u.intl.string(u.t.v8UpgE),
    icon: i.U1X,
    onClick: x,
    onMouseDown: g,
    fullWidth: true
  }) : null
}