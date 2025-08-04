/** Chunk was on 99665 **/
n.d(t, {
  ER: () => s,
  kk: () => _,
  s$: () => f
}), n(388685), n(392711);
var r = n(19780),
  l = n(5192),
  i = n(700785),
  u = n(427679),
  o = n(157925),
  a = n(981631),
  c = n(71080),
  d = n(388032);

function s(e, t, n, r) {
  let i = t[0],
    u = l.ZP.getName(e, n, i),
    o = null != r ? r : t.length;
  return 1 === o && null != i ? u : null == i ? d.intl.formatToPlainString(d.t.chmM9P, {
    count: o
  }) : d.intl.formatToPlainString(d.t.GhkJ29, {
    name: u,
    count: o - 1
  })
}

function _(e, t) {
  switch (e) {
    case c.aC.OWNER:
      return d.intl.string(d.t.icuNBA);
    case c.aC.ADMINISTRATOR:
      return d.intl.string(d.t.eTmN5e);
    case c.aC.MEMBER:
    case c.aC.ROLE:
      return t ? d.intl.string(d.t.Hw3XW1) : d.intl.string(d.t.YieyPj);
    case c.aC.EMPTY_STATE:
  }
  return null
}

function f(e) {
  let t = u.Z.getStageInstanceByChannel(e.id);
  return {
    channel_id: e.id,
    guild_id: e.guild_id,
    topic: null == t ? void 0 : t.topic,
    media_session_id: r.Z.getMediaSessionId(),
    request_to_speak_state: i.Uu(a.Plq.REQUEST_TO_SPEAK, e) ? o.BM.EVERYONE : o.BM.NO_ONE,
    stage_instance_id: null == t ? void 0 : t.id
  }
}