/** Chunk was on 27278 **/
n.d(t, {
  Z: () => c
});
var r = n(200651),
  o = n(963614),
  a = n(208156),
  i = n(701488),
  l = n(859118);

function c(e) {
  var t, n, c;
  let {
    channelId: u,
    guildId: s,
    embeddedActivity: d,
    application: _
  } = e, p = {
    instance_id: null !== (c = null !== (n = d.compositeInstanceId) && void 0 !== n ? n : d.launchId) && void 0 !== c ? c : "",
    location_id: null === (t = d.location) || void 0 === t ? void 0 : t.id,
    launch_id: d.launchId,
    referrer_id: d.referrerId,
    custom_id: d.customId
  };
  return null != s && "" !== s && (p.guild_id = s), null != u && "" !== u && (p.channel_id = u), (0, r.jsx)(a.J, {
    allowPopups: (0, o.h)(_),
    referrerPolicy: i.um.has(d.applicationId) ? "no-referrer" : "origin",
    url: d.url,
    queryParams: p,
    className: l.iframe,
    shouldRefocus: !1
  })
}