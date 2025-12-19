/** Chunk was on 27278 **/
/** chunk id: 781780, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk54381 = require("./54381.js"),
  Chunk963614 = require("./963614.js"),
  Chunk208156 = require("./208156.jsx"),
  Chunk701488 = require("./701488.js"),
  Chunk968352 = require("./968352.js");

function l(e) {
  var n, t, l;
  let {
    channelId: d,
    guildId: u,
    embeddedActivity: s,
    application: b
  } = e, f = {
    instance_id: null != (l = null != (t = s.compositeInstanceId) ? t : s.launchId) ? l : "",
    location_id: null == (n = s.location) ? true : n.id,
    launch_id: s.launchId,
    referrer_id: s.referrerId,
    custom_id: s.customId
  };
  return null != u && "" !== u && (f.guild_id = u), null != d && "" !== d && (f.channel_id = d), (0, a.jsx)(c.J, {
    allowPopups: (0, o.h)(b),
    referrerPolicy: r.um.has(s.applicationId) ? "no-referrer" : "origin",
    url: s.url,
    queryParams: f,
    className: i.iframe,
    shouldRefocus: false
  })
}