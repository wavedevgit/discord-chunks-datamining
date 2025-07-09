/** Chunk was on 85885 **/
e.d(n, {
  ER: () => u,
  kk: () => _,
  s$: () => h
}), e(388685), e(392711);
var i = e(19780),
  r = e(5192),
  l = e(700785),
  a = e(427679),
  c = e(157925),
  s = e(981631),
  o = e(71080),
  d = e(388032);

function u(t, n, e, i) {
  let l = n[0],
    a = r.ZP.getName(t, e, l),
    c = null != i ? i : n.length;
  return 1 === c && null != l ? a : null == l ? d.intl.formatToPlainString(d.t.chmM9P, {
    count: c
  }) : d.intl.formatToPlainString(d.t.GhkJ29, {
    name: a,
    count: c - 1
  })
}

function _(t, n) {
  switch (t) {
    case o.aC.OWNER:
      return d.intl.string(d.t.icuNBA);
    case o.aC.ADMINISTRATOR:
      return d.intl.string(d.t.eTmN5e);
    case o.aC.MEMBER:
    case o.aC.ROLE:
      return n ? d.intl.string(d.t.Hw3XW1) : d.intl.string(d.t.YieyPj);
    case o.aC.EMPTY_STATE:
  }
  return null
}

function h(t) {
  let n = a.Z.getStageInstanceByChannel(t.id);
  return {
    channel_id: t.id,
    guild_id: t.guild_id,
    topic: null == n ? void 0 : n.topic,
    media_session_id: i.Z.getMediaSessionId(),
    request_to_speak_state: l.Uu(s.Plq.REQUEST_TO_SPEAK, t) ? c.BM.EVERYONE : c.BM.NO_ONE,
    stage_instance_id: null == n ? void 0 : n.id
  }
}