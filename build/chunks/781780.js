/** Chunk was on 27278 **/
t.d(n, {
  Z: () => c
});
var r = t(200651),
  o = t(963614),
  a = t(208156),
  i = t(701488),
  l = t(859118);

function c(e) {
  var n, t, c;
  let {
    channelId: s,
    guildId: u,
    embeddedActivity: d,
    application: _
  } = e, p = {
    instance_id: null !== (c = null !== (t = d.compositeInstanceId) && void 0 !== t ? t : d.launchId) && void 0 !== c ? c : "",
    location_id: null === (n = d.location) || void 0 === n ? void 0 : n.id,
    launch_id: d.launchId,
    referrer_id: d.referrerId,
    custom_id: d.customId
  };
  return null != u && "" !== u && (p.guild_id = u), null != s && "" !== s && (p.channel_id = s), (0, r.jsx)(a.J, {
    allowPopups: (0, o.h)(_),
    referrerPolicy: i.um.has(d.applicationId) ? "no-referrer" : "origin",
    url: d.url,
    queryParams: p,
    className: l.iframe,
    shouldRefocus: !1
  })
}