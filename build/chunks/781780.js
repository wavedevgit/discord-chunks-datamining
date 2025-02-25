/** Chunk was on 27278 **/
n.d(t, {
  Z: () => c
});
var o = n(200651),
  r = n(963614),
  a = n(208156),
  i = n(701488),
  l = n(530653);

function c(e) {
  var t, n, c;
  let {
    channelId: s,
    guildId: _,
    embeddedActivity: u,
    application: d
  } = e, p = {
    instance_id: null !== (c = null !== (n = u.compositeInstanceId) && void 0 !== n ? n : u.launchId) && void 0 !== c ? c : "",
    location_id: null === (t = u.location) || void 0 === t ? void 0 : t.id,
    launch_id: u.launchId,
    referrer_id: u.referrerId,
    custom_id: u.customId
  };
  return null != _ && "" !== _ && (p.guild_id = _), null != s && "" !== s && (p.channel_id = s), (0, o.jsx)(a.J, {
    allowPopups: (0, r.h)(d),
    referrerPolicy: i.um.has(u.applicationId) ? "no-referrer" : "origin",
    url: u.url,
    queryParams: p,
    className: l.iframe,
    shouldRefocus: !1
  })
}