/** Chunk was on 89311 **/
/** chunk id: 108733, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk164670 = require("./164670.js"),
  Chunk705338 = require("./705338.js"),
  Chunk810568 = require("./810568.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  var t, n;
  let {
    invite: u,
    trackClick: m,
    closeModal: g
  } = e, f = i.useCallback(() => {
    (null == u ? true : u.guild) != null && (0, o.eagerNavigateToSocialLayerStorefront)({
      guildId: u.guild.id
    })
  }, [u]), p = i.useCallback(() => {
    (null == u ? true : u.guild) != null && ((0, o.default)({
      invite: u
    }), g(), m(s.as.GameShop))
  }, [g, u, m]);
  return new Set(null == u || null == (t = u.guild) ? true : t.features).has(c.GuildFeatures.SOCIAL_LAYER_STOREFRONT) ? (0, a.jsx)(r.zxk, {
    variant: "primary",
    text: (null == u || null == (n = u.guild) ? true : n.id) === (0, l.ac)() ? d.intl.string(d.t.WTXyEQ) : d.intl.string(d.t.v8UpgE),
    icon: r.EOn,
    onClick: p,
    onMouseDown: f,
    fullWidth: true
  }) : null
}