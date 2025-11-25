/** Chunk was on 27278 **/
/** chunk id: 781780, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk54381 = require("./54381.js"),
  Chunk963614 = require("./963614.js"),
  Chunk208156 = require("./208156.jsx"),
  Chunk701488 = require("./701488.js"),
  Chunk62307 = require("./62307.js");

function l(e) {
  var n, t, l;
  let {
    channelId: _,
    guildId: u,
    embeddedActivity: d,
    application: s
  } = e, p = {
    instance_id: null != (l = null != (t = d.compositeInstanceId) ? t : d.launchId) ? l : "",
    location_id: null == (n = d.location) ? true : n.id,
    launch_id: d.launchId,
    referrer_id: d.referrerId,
    custom_id: d.customId
  };
  return null != u && "" !== u && (p.guild_id = u), null != _ && "" !== _ && (p.channel_id = _), (0, o.jsx)(a.J, {
    allowPopups: (0, r.h)(s),
    referrerPolicy: i.um.has(d.applicationId) ? "no-referrer" : "origin",
    url: d.url,
    queryParams: p,
    className: c.iframe,
    shouldRefocus: false
  })
}