/** Chunk was on web.js **/
/** chunk id: 564990, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  CV: () => d,
  JX: () => u,
  mt: () => c,
  yK: () => f
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk881052 = require("./881052.js"),
  Chunk206583 = require("./206583.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let c = async e => {
  let {
    token: t,
    feedId: n,
    feature: i
  } = e;
  try {
    let e = (await r.tn.get({
        url: s.ANM.MY_CONTENT_INVENTORY(t),
        query: {
          for_game_profile: n === a.YN.GAME_PROFILE_FEED,
          feature: i
        },
        rejectWithError: false
      })).body,
      o = e.wait_ms_until_next_fetch;
    return null != o && (e.expired_at = new Date(Date.now() + o).toISOString()), e
  } catch (e) {
    throw new o.Hx(e)
  }
}, u = async (e, t) => {
  try {
    i.Z.dispatch({
      type: "CONTENT_INVENTORY_FETCH_OUTBOX_START",
      userId: e
    });
    let n = (await r.tn.get({
      url: s.ANM.CONTENT_INVENTORY_OUTBOX(e),
      signal: t,
      rejectWithError: false
    })).body;
    return i.Z.dispatch({
      type: "CONTENT_INVENTORY_FETCH_OUTBOX_SUCCESS",
      outbox: n,
      userId: e
    }), n
  } catch (t) {
    throw i.Z.dispatch({
      type: "CONTENT_INVENTORY_FETCH_OUTBOX_FAILURE",
      userId: e
    }), new o.Hx(t)
  }
}, d = async (e, t, n) => {
  try {
    i.Z.dispatch({
      type: "CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_START"
    }), await r.tn.del({
      url: s.ANM.DELETE_MY_CONTENT_INVENTORY_OUTBOX_ENTRY_HISTORY(e.id),
      rejectWithError: false
    }), i.Z.dispatch({
      type: "CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_SUCCESS",
      userId: t,
      entry: e
    }), null == n || n()
  } catch (t) {
    var o, a;
    let e = null != (a = null == t || null == (o = t.body) ? true : o.message) ? a : l.intl.string(l.t.FMbL3s);
    i.Z.dispatch({
      type: "CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_FAILURE",
      error: e
    })
  }
};
async function f(e, t) {
  try {
    await r.tn.post({
      url: s.ANM.MY_SPOTIFY_CONTENT_INVENTORY,
      body: {
        connection_id: e,
        tracks: [t]
      },
      rejectWithError: false
    })
  } catch (e) {
    throw new o.Hx(e)
  }
}