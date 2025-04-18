/** Chunk was on 95924 **/
n.d(t, {
  ER: () => u,
  kk: () => h,
  s$: () => g
}), n(388685), n(392711);
var r = n(19780),
  i = n(5192),
  l = n(700785),
  a = n(427679),
  o = n(157925),
  c = n(981631),
  s = n(71080),
  d = n(388032);

function u(e, t, n, r) {
  let l = t[0],
    a = i.ZP.getName(e, n, l),
    o = null != r ? r : t.length;
  return 1 === o && null != l ? a : null == l ? d.NW.formatToPlainString(d.t.chmM9P, {
    count: o
  }) : d.NW.formatToPlainString(d.t.GhkJ29, {
    name: a,
    count: o - 1
  })
}

function h(e, t) {
  switch (e) {
    case s.aC.OWNER:
      return d.NW.string(d.t.icuNBA);
    case s.aC.ADMINISTRATOR:
      return d.NW.string(d.t.eTmN5e);
    case s.aC.MEMBER:
    case s.aC.ROLE:
      return t ? d.NW.string(d.t.Hw3XW1) : d.NW.string(d.t.YieyPj);
    case s.aC.EMPTY_STATE:
  }
  return null
}

function g(e) {
  let t = a.Z.getStageInstanceByChannel(e.id);
  return {
    channel_id: e.id,
    guild_id: e.guild_id,
    topic: null == t ? void 0 : t.topic,
    media_session_id: r.Z.getMediaSessionId(),
    request_to_speak_state: l.Uu(c.Plq.REQUEST_TO_SPEAK, e) ? o.BM.EVERYONE : o.BM.NO_ONE,
    stage_instance_id: null == t ? void 0 : t.id
  }
}