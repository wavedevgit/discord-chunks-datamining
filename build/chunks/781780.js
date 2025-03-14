/** Chunk was on 27278 **/
t.d(n, {
  Z: () => l
});
var o = t(200651),
  r = t(963614),
  a = t(208156),
  i = t(701488),
  c = t(859118);

function l(e) {
  var n, t, l;
  let {
    channelId: s,
    guildId: u,
    embeddedActivity: _,
    application: d
  } = e, p = {
    instance_id: null !== (l = null !== (t = _.compositeInstanceId) && void 0 !== t ? t : _.launchId) && void 0 !== l ? l : "",
    location_id: null === (n = _.location) || void 0 === n ? void 0 : n.id,
    launch_id: _.launchId,
    referrer_id: _.referrerId,
    custom_id: _.customId
  };
  return null != u && "" !== u && (p.guild_id = u), null != s && "" !== s && (p.channel_id = s), (0, o.jsx)(a.J, {
    allowPopups: (0, r.h)(d),
    referrerPolicy: i.um.has(_.applicationId) ? "no-referrer" : "origin",
    url: _.url,
    queryParams: p,
    className: c.iframe,
    shouldRefocus: !1
  })
}