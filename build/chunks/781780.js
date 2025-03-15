/** Chunk was on 27278 **/
t.d(n, {
  Z: () => l
});
var o = t(200651),
  r = t(963614),
  a = t(208156),
  i = t(701488),
  c = t(759499);

function l(e) {
  var n, t, l;
  let {
    channelId: _,
    guildId: s,
    embeddedActivity: u,
    application: d
  } = e, p = {
    instance_id: null !== (l = null !== (t = u.compositeInstanceId) && void 0 !== t ? t : u.launchId) && void 0 !== l ? l : "",
    location_id: null === (n = u.location) || void 0 === n ? void 0 : n.id,
    launch_id: u.launchId,
    referrer_id: u.referrerId,
    custom_id: u.customId
  };
  return null != s && "" !== s && (p.guild_id = s), null != _ && "" !== _ && (p.channel_id = _), (0, o.jsx)(a.J, {
    allowPopups: (0, r.h)(d),
    referrerPolicy: i.um.has(u.applicationId) ? "no-referrer" : "origin",
    url: u.url,
    queryParams: p,
    className: c.iframe,
    shouldRefocus: !1
  })
}