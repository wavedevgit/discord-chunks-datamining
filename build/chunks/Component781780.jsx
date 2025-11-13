/** Chunk was on 27278 **/
/** chunk id: 781780, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js"),
  Chunk963614 = require("./963614.js"),
  Chunk208156 = require("./208156.jsx"),
  Chunk701488 = require("./701488.js"),
  Chunk62307 = require("./62307.js");

function c(e) {
  var n, t, c;
  let {
    channelId: u,
    guildId: s,
    embeddedActivity: d,
    application: p
  } = e, f = {
    instance_id: null != (c = null != (t = d.compositeInstanceId) ? t : d.launchId) ? c : "",
    location_id: null == (n = d.location) ? true : n.id,
    launch_id: d.launchId,
    referrer_id: d.referrerId,
    custom_id: d.customId
  };
  return null != s && "" !== s && (f.guild_id = s), null != u && "" !== u && (f.channel_id = u), (0, r.jsx)(i.J, {
    allowPopups: (0, o.h)(p),
    referrerPolicy: l.um.has(d.applicationId) ? "no-referrer" : "origin",
    url: d.url,
    queryParams: f,
    className: a.iframe,
    shouldRefocus: false
  })
}