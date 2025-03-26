/** Chunk was on 27278 **/
t.d(n, {
  Z: () => c
});
var o = t(200651),
  r = t(963614),
  a = t(208156),
  i = t(701488),
  l = t(859118);

function c(e) {
  var n, t, c;
  let {
    channelId: _,
    guildId: s,
    embeddedActivity: u,
    application: d
  } = e, p = {
    instance_id: null !== (c = null !== (t = u.compositeInstanceId) && void 0 !== t ? t : u.launchId) && void 0 !== c ? c : "",
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
    className: l.iframe,
    shouldRefocus: !1
  })
}