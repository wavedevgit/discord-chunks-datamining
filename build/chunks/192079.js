/** Chunk was on 98829 **/
n.d(t, {
  ER: () => s,
  kk: () => _,
  s$: () => E
}), n(388685), n(392711);
var i = n(19780),
  r = n(5192),
  l = n(700785),
  a = n(427679),
  u = n(157925),
  d = n(981631),
  o = n(71080),
  c = n(388032);

function s(e, t, n, i) {
  let l = t[0],
    a = r.ZP.getName(e, n, l),
    u = null != i ? i : t.length;
  return 1 === u && null != l ? a : null == l ? c.intl.formatToPlainString(c.t.chmM9P, {
    count: u
  }) : c.intl.formatToPlainString(c.t.GhkJ29, {
    name: a,
    count: u - 1
  })
}

function _(e, t) {
  switch (e) {
    case o.aC.OWNER:
      return c.intl.string(c.t.icuNBA);
    case o.aC.ADMINISTRATOR:
      return c.intl.string(c.t.eTmN5e);
    case o.aC.MEMBER:
    case o.aC.ROLE:
      return t ? c.intl.string(c.t.Hw3XW1) : c.intl.string(c.t.YieyPj);
    case o.aC.EMPTY_STATE:
  }
  return null
}

function E(e) {
  let t = a.Z.getStageInstanceByChannel(e.id);
  return {
    channel_id: e.id,
    guild_id: e.guild_id,
    topic: null == t ? void 0 : t.topic,
    media_session_id: i.Z.getMediaSessionId(),
    request_to_speak_state: l.Uu(d.Plq.REQUEST_TO_SPEAK, e) ? u.BM.EVERYONE : u.BM.NO_ONE,
    stage_instance_id: null == t ? void 0 : t.id
  }
}