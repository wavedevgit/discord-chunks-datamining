/** Chunk was on 88313 (95751ec5bdcc3b9f.js) **/
a.d(t, {
  CR: () => _,
  MA: () => s,
  pV: () => d
});
var r = a(544891),
  n = a(570140),
  o = a(881052),
  i = a(406218),
  c = a(314852),
  l = a(981631);

function _(e, t) {
  var a;
  if (null == e) return Promise.resolve(null);
  let _ = c.Z.getFetchStatus(e) === c.a.FETCHING,
    d = c.Z.getLastSyncTimestamp(e),
    s = c.Z.getProfile(e),
    u = (a = d, Date.now() - (null != a ? a : 0) > 6e4);
  return _ && !t ? Promise.resolve(null) : null == s || u || t ? (n.Z.dispatch({
    type: "GUILD_PROFILE_FETCH",
    guildId: e
  }), r.tn.get({
    url: l.ANM.GUILD_PROFILE(e),
    rejectWithError: !1
  }).then(t => {
    let a = (0, i.xo)(t.body);
    return n.Z.dispatch({
      type: "GUILD_PROFILE_FETCH_SUCCESS",
      guildId: e,
      profile: a
    }), a
  }).catch(t => {
    let a = new o.Hx(t);
    return n.Z.dispatch({
      type: "GUILD_PROFILE_FETCH_FAILURE",
      guildId: e,
      error: a
    }), null
  })) : Promise.resolve(s)
}

function d(e, t) {
  return c.Z.getIsUpdating(e) ? Promise.resolve(null) : (n.Z.dispatch({
    type: "GUILD_PROFILE_UPDATE",
    guildId: e,
    updates: t
  }), r.tn.patch({
    url: l.ANM.GUILD_PROFILE(e),
    body: (0, i.sO)(t),
    rejectWithError: !1
  }).then(t => {
    let a = (0, i.xo)(t.body);
    return n.Z.dispatch({
      type: "GUILD_PROFILE_UPDATE_SUCCESS",
      guildId: e,
      profile: a
    }), a
  }).catch(t => {
    let a = new o.Hx(t);
    return n.Z.dispatch({
      type: "GUILD_PROFILE_UPDATE_FAILURE",
      guildId: e,
      error: a
    }), null
  }))
}
async function s(e) {
  let t = await r.tn.get({
    url: l.ANM.GUILD_TOP_GAMES(e),
    rejectWithError: !1
  });
  return (0, i.o_)(t.body.top_games)
}