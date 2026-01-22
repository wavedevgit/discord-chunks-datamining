/** Chunk was on web.js **/
/** chunk id: 250527, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L4: () => _,
  U7: () => m,
  _C: () => h,
  sf: () => g
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk198982 = require("./198982.js"),
  Chunk212455 = require("./212455.js"),
  Chunk696451 = require("./696451.js"),
  Chunk954571 = require("./954571.js"),
  Chunk9994 = require("./9994.js"),
  Chunk837011 = require("./837011.js"),
  Chunk652215 = require("./652215.js");
let f = 6e4;

function p(e) {
  return Date.now() - (null != e ? e : 0) > f
}

function _(e, t) {
  if (null == e) return Promise.resolve(null);
  let n = u.A.getFetchStatus(e) === u.X.FETCHING,
    s = u.A.getLastSyncTimestamp(e),
    o = u.A.getProfile(e),
    l = p(s);
  return n && !t ? Promise.resolve(null) : null == o || l || t ? (i.h.dispatch({
    type: "GUILD_PROFILE_FETCH",
    guildId: e
  }), r.Bo.get({
    url: d.Rsh.GUILD_PROFILE(e),
    rejectWithError: false
  }).then(t => {
    let n = (0, c.wr)(t.body);
    return i.h.dispatch({
      type: "GUILD_PROFILE_FETCH_SUCCESS",
      guildId: e,
      profile: n
    }), n
  }).catch(t => {
    let n = new a.LG(t);
    return i.h.dispatch({
      type: "GUILD_PROFILE_FETCH_FAILURE",
      guildId: e,
      error: n
    }), null
  })) : Promise.resolve(o)
}

function h(e, t) {
  return u.A.getIsUpdating(e) ? Promise.resolve(null) : (i.h.dispatch({
    type: "GUILD_PROFILE_UPDATE",
    guildId: e,
    updates: t
  }), r.Bo.patch({
    url: d.Rsh.GUILD_PROFILE(e),
    body: (0, c.ow)(t),
    rejectWithError: false
  }).then(t => {
    let n = (0, c.wr)(t.body);
    return i.h.dispatch({
      type: "GUILD_PROFILE_UPDATE_SUCCESS",
      guildId: e,
      profile: n
    }), n
  }).catch(t => {
    let n = new a.LG(t);
    return i.h.dispatch({
      type: "GUILD_PROFILE_UPDATE_FAILURE",
      guildId: e,
      error: n
    }), null
  }))
}
async function m(e) {
  let t = await r.Bo.get({
    url: d.Rsh.GUILD_TOP_GAMES(e),
    rejectWithError: false
  });
  return (0, c.MU)(t.body.top_games)
}

function g(e, t) {
  let n = null != o.Ay.getSelfMember(e),
    r = null != s.A.getRequest(e);
  l.default.track(d.HAw.GUILD_PROFILE_VIEWED, {
    guild_id: e,
    location_stack: t,
    is_member: n,
    has_join_request: r
  })
}