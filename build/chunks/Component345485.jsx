/** Chunk was on 21738 **/
/** chunk id: 345485, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk110259 = require("./110259.js"),
  Chunk417597 = require("./417597.js"),
  Chunk342494 = require("./342494.js"),
  Chunk139286 = require("./139286.js"),
  Chunk997509 = require("./997509.js"),
  Chunk260509 = require("./260509.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk330766 = require("./330766.js");

function m(e) {
  let {
    guildId: t,
    markAsDismissed: n,
    targetElementRef: m
  } = e, A = (0, l.bG)([u.A, d.default], () => {
    let e = d.default.getCurrentUser(),
      n = u.A.getGuild(t);
    return null != n && (0, c.bM)(n, e)
  });
  return (0, s.A)({
    type: i.ImpressionTypes.POPOUT,
    name: i.ImpressionNames.ENABLE_CREATOR_MONETIZATION_GUILD_HEADER_UPSELL,
    properties: {
      guild_id: t,
      is_owner: A
    }
  }), (0, r.jsx)(a.AM, {
    targetElementRef: m,
    title: g.intl.string(g.t.C0m4rQ),
    body: g.intl.string(g.t.zOHfEX),
    graphic: {
      type: "image",
      src: f
    },
    actions: [{
      text: g.intl.string(g.t.OgQQbG),
      variant: "primary",
      onClick: () => {
        o.A.open(t, p.BEX.ROLE_SUBSCRIPTIONS)
      }
    }],
    onRequestClose: () => n(h.i.USER_DISMISS),
    position: "bottom",
    caretConfig: {
      align: "center"
    }
  })
}