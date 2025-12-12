/** Chunk was on 1272 **/
/** chunk id: 433280, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk990547 = require("./990547.js"),
  Chunk399606 = require("./399606.js"),
  Chunk907862 = require("./907862.js"),
  Chunk213609 = require("./213609.js"),
  Chunk434404 = require("./434404.js"),
  Chunk601964 = require("./601964.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk217110 = require("./217110.js");

function m(e) {
  let {
    guildId: t,
    markAsDismissed: n,
    targetElementRef: m
  } = e, _ = (0, l.e7)([u.Z, d.default], () => {
    let e = d.default.getCurrentUser(),
      n = u.Z.getGuild(t);
    return null != n && (0, c.eM)(n, e)
  });
  return (0, s.Z)({
    type: i.ImpressionTypes.POPOUT,
    name: i.ImpressionNames.ENABLE_CREATOR_MONETIZATION_GUILD_HEADER_UPSELL,
    properties: {
      guild_id: t,
      is_owner: _
    }
  }), (0, r.jsx)(a.J2, {
    targetElementRef: m,
    title: g.intl.string(g.t.C0m4rQ),
    body: g.intl.string(g.t.zOHfEX),
    graphic: {
      type: "image",
      src: h
    },
    actions: [{
      text: g.intl.string(g.t.OgQQbG),
      variant: "primary",
      onClick: () => {
        o.Z.open(t, p.pNK.ROLE_SUBSCRIPTIONS)
      }
    }],
    onRequestClose: () => n(f.L.USER_DISMISS),
    position: "bottom",
    caretConfig: {
      align: "center"
    }
  })
}