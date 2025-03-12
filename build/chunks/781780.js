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
    guildId: u,
    embeddedActivity: s,
    application: d
  } = e, p = {
    instance_id: null !== (c = null !== (t = s.compositeInstanceId) && void 0 !== t ? t : s.launchId) && void 0 !== c ? c : "",
    location_id: null === (n = s.location) || void 0 === n ? void 0 : n.id,
    launch_id: s.launchId,
    referrer_id: s.referrerId,
    custom_id: s.customId
  };
  return null != u && "" !== u && (p.guild_id = u), null != _ && "" !== _ && (p.channel_id = _), (0, o.jsx)(a.J, {
    allowPopups: (0, r.h)(d),
    referrerPolicy: i.um.has(s.applicationId) ? "no-referrer" : "origin",
    url: s.url,
    queryParams: p,
    className: l.iframe,
    shouldRefocus: !1
  })
}