/** Chunk was on 1272 **/
/** chunk id: 433280, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk990547 = require("./990547.js"),
  Chunk399606 = require("./399606.js"),
  Chunk213609 = require("./213609.js"),
  Chunk434404 = require("./434404.js"),
  Chunk970731 = require("./970731.jsx"),
  Chunk601964 = require("./601964.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk813249 = require("./813249.js"),
  Chunk217110 = require("./217110.js");

function m(e) {
  let {
    guildId: t,
    markAsDismissed: n
  } = e, m = (0, l.e7)([u.Z, d.default], () => {
    let e = d.default.getCurrentUser(),
      n = u.Z.getGuild(t);
    return null != n && (0, c.eM)(n, e)
  });
  return (0, a.Z)({
    type: i.ImpressionTypes.POPOUT,
    name: i.ImpressionNames.ENABLE_CREATOR_MONETIZATION_GUILD_HEADER_UPSELL,
    properties: {
      guild_id: t,
      is_owner: m
    }
  }), (0, r.jsx)("div", {
    className: h.container,
    children: (0, r.jsx)(s.ZP, {
      header: f.intl.string(f.t.C0m4ra),
      content: f.intl.string(f.t.zOHfER),
      asset: (0, r.jsx)("div", {
        className: h.image,
        children: (0, r.jsx)("img", {
          alt: f.intl.string(f.t.xad4wc),
          src: g,
          className: h.image
        })
      }),
      buttonCTA: f.intl.string(f.t.OgQQbG),
      onClick: () => {
        o.Z.open(t, p.pNK.ROLE_SUBSCRIPTIONS)
      },
      secondaryButtonCTA: f.intl.string(f.t.WAI6xs),
      markAsDismissed: n
    })
  })
}