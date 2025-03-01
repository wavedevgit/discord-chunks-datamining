/** Chunk was on 27278 **/
n.d(t, {
  Z: () => c
});
var o = n(200651),
  r = n(963614),
  a = n(208156),
  i = n(701488),
  l = n(859118);

function c(e) {
  var t, n, c;
  let {
    channelId: u,
    guildId: s,
    embeddedActivity: _,
    application: d
  } = e, p = {
    instance_id: null !== (c = null !== (n = _.compositeInstanceId) && void 0 !== n ? n : _.launchId) && void 0 !== c ? c : "",
    location_id: null === (t = _.location) || void 0 === t ? void 0 : t.id,
    launch_id: _.launchId,
    referrer_id: _.referrerId,
    custom_id: _.customId
  };
  return null != s && "" !== s && (p.guild_id = s), null != u && "" !== u && (p.channel_id = u), (0, o.jsx)(a.J, {
    allowPopups: (0, r.h)(d),
    referrerPolicy: i.um.has(_.applicationId) ? "no-referrer" : "origin",
    url: _.url,
    queryParams: p,
    className: l.iframe,
    shouldRefocus: !1
  })
}