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
    channelId: u,
    guildId: s,
    embeddedActivity: _,
    application: d
  } = e, p = {
    instance_id: null !== (c = null !== (t = _.compositeInstanceId) && void 0 !== t ? t : _.launchId) && void 0 !== c ? c : "",
    location_id: null === (n = _.location) || void 0 === n ? void 0 : n.id,
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