/** Chunk was on 99518 **/
t.d(n, {
  ER: () => s,
  kk: () => _,
  s$: () => E
}), t(47120), t(392711);
var i = t(19780),
  r = t(5192),
  l = t(700785),
  u = t(427679),
  a = t(157925),
  o = t(981631),
  c = t(71080),
  d = t(388032);

function s(e, n, t, i) {
  let l = n[0],
    u = r.ZP.getName(e, t, l),
    a = null != i ? i : n.length;
  return 1 === a && null != l ? u : null == l ? d.NW.formatToPlainString(d.t.chmM9P, {
    count: a
  }) : d.NW.formatToPlainString(d.t.GhkJ29, {
    name: u,
    count: a - 1
  })
}

function _(e, n) {
  switch (e) {
    case c.aC.OWNER:
      return d.NW.string(d.t.icuNBA);
    case c.aC.ADMINISTRATOR:
      return d.NW.string(d.t.eTmN5e);
    case c.aC.MEMBER:
    case c.aC.ROLE:
      return n ? d.NW.string(d.t.Hw3XW1) : d.NW.string(d.t.YieyPj);
    case c.aC.EMPTY_STATE:
  }
  return null
}

function E(e) {
  let n = u.Z.getStageInstanceByChannel(e.id);
  return {
    channel_id: e.id,
    guild_id: e.guild_id,
    topic: null == n ? void 0 : n.topic,
    media_session_id: i.Z.getMediaSessionId(),
    request_to_speak_state: l.Uu(o.Plq.REQUEST_TO_SPEAK, e) ? a.BM.EVERYONE : a.BM.NO_ONE,
    stage_instance_id: null == n ? void 0 : n.id
  }
}