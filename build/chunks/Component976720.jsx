/** Chunk was on 13530 **/
/** chunk id: 976720, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => u,
  Y: () => m
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
  var t, l;
  let {
    invite: u,
    trackClick: m,
    closeModal: x
  } = e, f = i.useCallback(() => {
    (null == u ? true : u.guild) != null && (0, s.X)({
      guildId: u.guild.id
    })
  }, [u]), g = i.useCallback(() => {
    (null == u ? true : u.guild) != null && ((0, s.default)({
      invite: u
    }), x(), m(o.Ws.GameShop))
  }, [x, u, m]);
  return new Set(null == u || null == (t = u.guild) ? true : t.features).has(c.GuildFeatures.SOCIAL_LAYER_STOREFRONT) ? (0, n.jsx)(a.$nd, {
    variant: "primary",
    text: (null == u || null == (l = u.guild) ? true : l.id) === (0, r.zf)() ? d.intl.string(d.t.WTXyEQ) : d.intl.string(d.t.v8UpgE),
    icon: a.U1X,
    onClick: g,
    onMouseDown: f,
    fullWidth: true
  }) : null
}

function m(e) {
  var t, l;
  let {
    invite: u,
    trackClick: m,
    closeModal: x
  } = e, f = i.useCallback(() => {
    (null == u ? true : u.guild) != null && (0, s.X)({
      guildId: u.guild.id
    })
  }, [u]), g = i.useCallback(() => {
    (null == u ? true : u.guild) != null && ((0, s.default)({
      invite: u
    }), x(), m(o.Ws.GameShop))
  }, [x, u, m]);
  return new Set(null == u || null == (t = u.guild) ? true : t.features).has(c.GuildFeatures.SOCIAL_LAYER_STOREFRONT) ? (0, n.jsx)(a.$nd, {
    variant: "primary",
    text: (null == u || null == (l = u.guild) ? true : l.id) === (0, r.zf)() ? d.intl.string(d.t.WTXyEQ) : d.intl.string(d.t.v8UpgE),
    icon: a.U1X,
    onClick: g,
    onMouseDown: f,
    fullWidth: true
  }) : null
}