/** Chunk was on web.js **/
/** chunk id: 699553, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  CR: () => _,
  MA: () => m,
  pV: () => h,
  vb: () => g
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk881052 = require("./881052.js"),
  Chunk937111 = require("./937111.js"),
  Chunk271383 = require("./271383.js"),
  Chunk626135 = require("./626135.js"),
  Chunk406218 = require("./406218.js"),
  Chunk314852 = require("./314852.js"),
  Chunk981631 = require("./981631.js");
let f = 6e4;

function p(e) {
  return Date.now() - (null != e ? e : 0) > f
}

function _(e, t) {
  if (null == e) return Promise.resolve(null);
  let n = u.Z.getFetchStatus(e) === u.a.FETCHING,
    o = u.Z.getLastSyncTimestamp(e),
    s = u.Z.getProfile(e),
    l = p(o);
  return n && !t ? Promise.resolve(null) : null == s || l || t ? (i.Z.dispatch({
    type: "GUILD_PROFILE_FETCH",
    guildId: e
  }), r.tn.get({
    url: d.ANM.GUILD_PROFILE(e),
    rejectWithError: false
  }).then(t => {
    let n = (0, c.xo)(t.body);
    return i.Z.dispatch({
      type: "GUILD_PROFILE_FETCH_SUCCESS",
      guildId: e,
      profile: n
    }), n
  }).catch(t => {
    let n = new a.Hx(t);
    return i.Z.dispatch({
      type: "GUILD_PROFILE_FETCH_FAILURE",
      guildId: e,
      error: n
    }), null
  })) : Promise.resolve(s)
}

function h(e, t) {
  return u.Z.getIsUpdating(e) ? Promise.resolve(null) : (i.Z.dispatch({
    type: "GUILD_PROFILE_UPDATE",
    guildId: e,
    updates: t
  }), r.tn.patch({
    url: d.ANM.GUILD_PROFILE(e),
    body: (0, c.sO)(t),
    rejectWithError: false
  }).then(t => {
    let n = (0, c.xo)(t.body);
    return i.Z.dispatch({
      type: "GUILD_PROFILE_UPDATE_SUCCESS",
      guildId: e,
      profile: n
    }), n
  }).catch(t => {
    let n = new a.Hx(t);
    return i.Z.dispatch({
      type: "GUILD_PROFILE_UPDATE_FAILURE",
      guildId: e,
      error: n
    }), null
  }))
}
async function m(e) {
  let t = await r.tn.get({
    url: d.ANM.GUILD_TOP_GAMES(e),
    rejectWithError: false
  });
  return (0, c.o_)(t.body.top_games)
}

function g(e, t) {
  let n = null != s.ZP.getSelfMember(e),
    r = null != o.Z.getRequest(e);
  l.default.track(d.rMx.GUILD_PROFILE_VIEWED, {
    guild_id: e,
    location_stack: t,
    is_member: n,
    has_join_request: r
  })
}