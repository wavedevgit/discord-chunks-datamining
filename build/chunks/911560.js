/** Chunk was on web.js **/
/** chunk id: 911560, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var Chunk828700 = require("./828700.js"),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk333023 = require("./333023.js"),
  Chunk38618 = require("./38618.js"),
  Chunk893607 = require("./893607.js"),
  Chunk131704 = require("./131704.js"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js");
let _ = {},
  h = false;

function m() {
  h || (h = true, a.Z.subscribe("CONNECTION_OPEN", () => {
    _ = {};
    let e = d.Z.getChannelId(),
      t = u.Z.getChannel(e);
    null != e && null == t && g(e)
  }))
}

function g(e) {
  if (null == e || e === o.V || (0, p.AB)(e) || null != u.Z.getChannel(e) || (m(), !s.Z.isConnected())) return Promise.resolve();
  let t = _[e];
  if (null != t)
    if ("LOADING" === t.type) return t.promise;
    else return Promise.resolve();
  let n = (0, r.LX)(location.pathname, {
      path: f.Z5c.CHANNEL(l.Hw.guildId(), l.Hw.channelId(), ":messageId"),
      exact: true
    }),
    d = i.tn.get({
      url: f.ANM.CHANNEL(e),
      rejectWithError: false
    }).then(t => {
      let {
        body: r
      } = t;
      if (_[e] = {
          type: "LOADED"
        }, c.Ec.has(r.type)) {
        var i;
        a.Z.dispatch({
          type: "THREAD_CREATE",
          channel: (0, c.q_)(r),
          messageId: null == n || null == (i = n.params) ? true : i.messageId
        })
      }
    }).catch(() => {
      var t;
      _[e] = {
        type: "NOT_FOUND"
      }, a.Z.dispatch({
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