/** Chunk was on web.js **/
/** chunk id: 353202, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => E
});
var Chunk960488 = require("./960488.js"),
  Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk695870 = require("./695870.js"),
  Chunk142120 = require("./142120.js"),
  Chunk463347 = require("./463347.js"),
  Chunk95701 = require("./95701.js"),
  Chunk734057 = require("./734057.js"),
  Chunk309010 = require("./309010.js"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js");
let _ = {},
  h = false;

function m() {
  h || (h = true, a.h.subscribe("CONNECTION_OPEN", () => {
    _ = {};
    let e = d.A.getChannelId(),
      t = u.A.getChannel(e);
    null != e && null == t && g(e)
  }))
}

function g(e) {
  if (null == e || e === o.E || (0, p.jq)(e) || null != u.A.getChannel(e) || (m(), !s.A.isConnected())) return Promise.resolve();
  let t = _[e];
  if (null != t)
    if ("LOADING" === t.type) return t.promise;
    else return Promise.resolve();
  let n = (0, r.B6)(location.pathname, {
      path: f.BVt.CHANNEL(l.pv.guildId(), l.pv.channelId(), ":messageId"),
      exact: true
    }),
    d = i.Bo.get({
      url: f.Rsh.CHANNEL(e),
      rejectWithError: false
    }).then(t => {
      let {
        body: r
      } = t;
      if (_[e] = {
          type: "LOADED"
        }, c.Le.has(r.type)) {
        var i;
        a.h.dispatch({
          type: "THREAD_CREATE",
          channel: (0, c.UE)(r),
          messageId: null == n || null == (i = n.params) ? true : i.messageId
        })
      }
    }).catch(() => {
      var t;
      _[e] = {
        type: "NOT_FOUND"
      }, a.h.dispatch({
        type: "CHANNEL_DELETE",
        channel: {
          id: e,
          guild_id: null == n || null == (t = n.params) ? true : t.guildId,
          parent_id: true
        }
      })
    });
  return _[e] = {
    type: "LOADING",
    promise: d
  }, d
}
let E = {
  loadThread: g
}