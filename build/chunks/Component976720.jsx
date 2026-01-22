/** Chunk was on 13530 **/
/** chunk id: 976720, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk871123 = require("./871123.js"),
  Chunk44724 = require("./44724.js"),
  Chunk409626 = require("./409626.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function u(e) {
  var t, n;
  let {
    invite: u,
    trackClick: m,
    closeModal: f
  } = e, x = r.useCallback(() => {
    (null == u ? true : u.guild) != null && (0, s.X)({
      guildId: u.guild.id
    })
  }, [u]), b = r.useCallback(() => {
    (null == u ? true : u.guild) != null && ((0, s.default)({
      invite: u
    }), f(), m(o.Ws.GameShop))
  }, [f, u, m]);
  return new Set(null == u || null == (t = u.guild) ? true : t.features).has(c.GuildFeatures.SOCIAL_LAYER_STOREFRONT) ? (0, l.jsx)(i.$nd, {
    variant: "primary",
    text: (null == u || null == (n = u.guild) ? true : n.id) === (0, a.zf)() ? d.intl.string(d.t.WTXyEQ) : d.intl.string(d.t.v8UpgE),
    icon: i.U1X,
    onClick: b,
    onMouseDown: x,
    fullWidth: true
  }) : null
}