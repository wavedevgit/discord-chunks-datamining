/** Chunk was on web.js **/
/** chunk id: 86070, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  FO: () => d,
  Q1: () => f,
  r7: () => u,
  sy: () => c
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk198982 = require("./198982.js"),
  Chunk424994 = require("./424994.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let c = async e => {
  let {
    token: t,
    feedId: n,
    feature: i
  } = e;
  try {
    let e = (await r.Bo.get({
        url: o.Rsh.MY_CONTENT_INVENTORY(t),
        query: {
          for_game_profile: n === s.X1.GAME_PROFILE_FEED,
          feature: i
        },
        rejectWithError: false
      })).body,
      a = e.wait_ms_until_next_fetch;
    return null != a && (e.expired_at = new Date(Date.now() + a).toISOString()), e
  } catch (e) {
    throw new a.LG(e)
  }
}, u = async (e, t) => {
  try {
    i.h.dispatch({
      type: "CONTENT_INVENTORY_FETCH_OUTBOX_START",
      userId: e
    });
    let n = (await r.Bo.get({
      url: o.Rsh.CONTENT_INVENTORY_OUTBOX(e),
      signal: t,
      rejectWithError: false
    })).body;
    return i.h.dispatch({
      type: "CONTENT_INVENTORY_FETCH_OUTBOX_SUCCESS",
      outbox: n,
      userId: e
    }), n
  } catch (t) {
    throw i.h.dispatch({
      type: "CONTENT_INVENTORY_FETCH_OUTBOX_FAILURE",
      userId: e
    }), new a.LG(t)
  }
}, d = async (e, t, n) => {
  try {
    i.h.dispatch({
      type: "CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_START"
    }), await r.Bo.del({
      url: o.Rsh.DELETE_MY_CONTENT_INVENTORY_OUTBOX_ENTRY_HISTORY(e.id),
      rejectWithError: false
    }), i.h.dispatch({
      type: "CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_SUCCESS",
      userId: t,
      entry: e
    }), null == n || n()
  } catch (t) {
    var a, s;
    let e = null != (a = null == t || null == (s = t.body) ? true : s.message) ? a : l.intl.string(l.t.FMbL3s);
    i.h.dispatch({
      type: "CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_FAILURE",
      error: e
    })
  }
};
async function f(e, t) {
  try {
    await r.Bo.post({
      url: o.Rsh.MY_SPOTIFY_CONTENT_INVENTORY,
      body: {
        connection_id: e,
        tracks: [t]
      },
      rejectWithError: false
    })
  } catch (e) {
    throw new a.LG(e)
  }
}