/** Chunk was on web.js **/
/** chunk id: 45114, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  CZ: () => m,
  FT: () => b,
  Ju: () => E,
  U6: () => p,
  ack: () => d,
  iV: () => h,
  jT: () => g,
  y5: () => _
}), require("./388685.js"), require("./539854.js");
var Chunk570140 = require("./570140.js"),
  Chunk601070 = require("./601070.js"),
  Chunk131704 = require("./131704.js"),
  Chunk592125 = require("./592125.js"),
  Chunk324067 = require("./324067.js"),
  Chunk594174 = require("./594174.js"),
  Chunk709054 = require("./709054.js"),
  Chunk981631 = require("./981631.js");

function d(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    i = arguments.length > 3 && true !== arguments[3] && arguments[3],
    a = arguments.length > 4 ? arguments[4] : true;
  r.Z.dispatch({
    type: "CHANNEL_ACK",
    channelId: e,
    messageId: a,
    immediate: n,
    force: i,
    context: u.e3s,
    location: t
  })
}

function f(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    r = arguments.length > 3 && true !== arguments[3] && arguments[3],
    l = o.Z.getChannel(e);
  if (null == l || null == l.guild_id) return;
  let c = s.Z.getCategories(l.guild_id);
  if (null == c[e]) return;
  let u = c[e].filter(e => {
      let {
        channel: t
      } = e;
      return (0, a.Em)(t.type)
    }).map(e => {
      let {
        channel: t
      } = e;
      return t.id
    }),
    f = [...u];
  for (let e of (u.forEach(e => {
      let t = i.Z.getActiveJoinedThreadsForParent(l.guild_id, e);
      for (let e in t) f.push(e)
    }), f)) d(e, t, n, r)
}

function p(e, t) {
  e.isCategory() ? f(e.id, t, true, true) : e.isForumLikeChannel() ? d(e.id, t, true, true, c.default.fromTimestamp(Date.now())) : d(e.id, t, true, true)
}

function _(e, t) {
  r.Z.dispatch({
    type: "BULK_ACK",
    channels: e,
    context: u.e3s,
    onFinished: t
  })
}

function h(e) {
  r.Z.dispatch({
    type: "CHANNEL_LOCAL_ACK",
    channelId: e
  })
}

function m(e, t) {
  r.Z.dispatch({
    type: "ENABLE_AUTOMATIC_ACK",
    channelId: e,
    windowId: t
  })
}

function g(e, t) {
  r.Z.dispatch({
    type: "DISABLE_AUTOMATIC_ACK",
    channelId: e,
    windowId: t
  })
}

function E(e, t, n) {
  r.Z.dispatch({
    type: "GUILD_FEATURE_ACK",
    id: e,
    ackType: t,
    ackedId: n,
    local: false
  })
}

function b(e, t) {
  var n;
  null != (null == (n = l.default.getCurrentUser()) ? true : n.id) && r.Z.dispatch({
    type: "USER_NON_CHANNEL_ACK",
    ackType: e,
    ackedId: t,
    local: false
  })
}