/** Chunk was on 27278 **/
/** chunk id: 781780, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk951288 = require("./951288.js"),
  Chunk963614 = require("./963614.js"),
  Chunk208156 = require("./208156.jsx"),
  Chunk701488 = require("./701488.js"),
  Chunk62307 = require("./62307.js");

function l(e) {
  var n, t, l;
  let {
    channelId: u,
    guildId: _,
    embeddedActivity: s,
    application: d
  } = e, p = {
    instance_id: null != (l = null != (t = s.compositeInstanceId) ? t : s.launchId) ? l : "",
    location_id: null == (n = s.location) ? true : n.id,
    launch_id: s.launchId,
    referrer_id: s.referrerId,
    custom_id: s.customId
  };
  return null != _ && "" !== _ && (p.guild_id = _), null != u && "" !== u && (p.channel_id = u), (0, o.jsx)(a.J, {
    allowPopups: (0, r.h)(d),
    referrerPolicy: i.um.has(s.applicationId) ? "no-referrer" : "origin",
    url: s.url,
    queryParams: p,
    className: c.iframe,
    shouldRefocus: false
  })
}