/** Chunk was on 84335 **/
n.d(t, {
  CR: () => m,
  MA: () => x,
  pV: () => v,
  vb: () => f
});
var r = n(544891),
  l = n(570140),
  i = n(881052),
  a = n(937111),
  s = n(271383),
  o = n(626135),
  c = n(406218),
  u = n(314852),
  d = n(981631);

function m(e, t) {
  var n;
  if (null == e) return Promise.resolve(null);
  let a = u.Z.getFetchStatus(e) === u.a.FETCHING,
    s = u.Z.getLastSyncTimestamp(e),
    o = u.Z.getProfile(e),
    m = (n = s, Date.now() - (null != n ? n : 0) > 6e4);
  return a && !t ? Promise.resolve(null) : null == o || m || t ? (l.Z.dispatch({
    type: "GUILD_PROFILE_FETCH",
    guildId: e
  }), r.tn.get({
    url: d.ANM.GUILD_PROFILE(e),
    rejectWithError: !1
  }).then(t => {
    let n = (0, c.xo)(t.body);
    return l.Z.dispatch({
      type: "GUILD_PROFILE_FETCH_SUCCESS",
      guildId: e,
      profile: n
    }), n
  }).catch(t => {
    let n = new i.Hx(t);
    return l.Z.dispatch({
      type: "GUILD_PROFILE_FETCH_FAILURE",
      guildId: e,
      error: n
    }), null
  })) : Promise.resolve(o)
}

function v(e, t) {
  return u.Z.getIsUpdating(e) ? Promise.resolve(null) : (l.Z.dispatch({
    type: "GUILD_PROFILE_UPDATE",
    guildId: e,
    updates: t
  }), r.tn.patch({
    url: d.ANM.GUILD_PROFILE(e),
    body: (0, c.sO)(t),
    rejectWithError: !1
  }).then(t => {
    let n = (0, c.xo)(t.body);
    return l.Z.dispatch({
      type: "GUILD_PROFILE_UPDATE_SUCCESS",
      guildId: e,
      profile: n
    }), n
  }).catch(t => {
    let n = new i.Hx(t);
    return l.Z.dispatch({
      type: "GUILD_PROFILE_UPDATE_FAILURE",
      guildId: e,
      error: n
    }), null
  }))
}
async function x(e) {
  let t = await r.tn.get({
    url: d.ANM.GUILD_TOP_GAMES(e),
    rejectWithError: !1
  });
  return (0, c.o_)(t.body.top_games)
}

function f(e, t) {
  let n = null != s.ZP.getSelfMember(e),
    r = null != a.Z.getRequest(e);
  o.default.track(d.rMx.GUILD_PROFILE_VIEWED, {
    guild_id: e,
    location_stack: t,
    is_member: n,
    has_join_request: r
  })
}