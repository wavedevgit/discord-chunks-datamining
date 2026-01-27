/** Chunk was on web.js **/
/** chunk id: 334738, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Uq: () => _,
  Z5: () => g,
  _9: () => m,
  ack: () => d,
  d_: () => y,
  fb: () => h,
  hK: () => E,
  hS: () => p
}), require("./896048.js"), require("./321073.js");
var Chunk73153 = require("./73153.js"),
  Chunk863005 = require("./863005.js"),
  Chunk95701 = require("./95701.js"),
  Chunk734057 = require("./734057.js"),
  Chunk769765 = require("./769765.js"),
  Chunk287809 = require("./287809.js"),
  Chunk661191 = require("./661191.js"),
  Chunk652215 = require("./652215.js");

function d(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    i = arguments.length > 3 && true !== arguments[3] && arguments[3],
    a = arguments.length > 4 ? arguments[4] : true;
  r.h.dispatch({
    type: "CHANNEL_ACK",
    channelId: e,
    messageId: a,
    immediate: n,
    force: i,
    context: u.QCW,
    location: t
  })
}

function f(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    r = arguments.length > 3 && true !== arguments[3] && arguments[3],
    l = o.A.getChannel(e);
  if (null == l || null == l.guild_id) return;
  let c = s.A.getCategories(l.guild_id);
  if (null == c[e]) return;
  let u = c[e].filter(e => {
      let {
        channel: t
      } = e;
      return (0, a.Z_)(t.type)
    }).map(e => {
      let {
        channel: t
      } = e;
      return t.id
    }),
    f = [...u];
  for (let e of (u.forEach(e => {
      let t = i.A.getActiveJoinedThreadsForParent(l.guild_id, e);
      for (let e in t) f.push(e)
    }), f)) d(e, t, n, r)
}

function p(e, t) {
  e.isCategory() ? f(e.id, t, true, true) : e.isForumLikeChannel() ? d(e.id, t, true, true, c.default.fromTimestamp(Date.now())) : d(e.id, t, true, true)
}

function _(e, t) {
  r.h.dispatch({
    type: "BULK_ACK",
    channels: e,
    context: u.QCW,
    onFinished: t
  })
}

function h(e) {
  r.h.dispatch({
    type: "CHANNEL_LOCAL_ACK",
    channelId: e
  })
}

function m(e, t) {
  r.h.dispatch({
    type: "ENABLE_AUTOMATIC_ACK",
    channelId: e,
    windowId: t
  })
}

function g(e, t) {
  r.h.dispatch({
    type: "DISABLE_AUTOMATIC_ACK",
    channelId: e,
    windowId: t
  })
}

function E(e, t, n) {
  r.h.dispatch({
    type: "GUILD_FEATURE_ACK",
    id: e,
    ackType: t,
    ackedId: n,
    local: false
  })
}

function y(e, t) {
  var n;
  null != (null == (n = l.default.getCurrentUser()) ? true : n.id) && r.h.dispatch({
    type: "USER_NON_CHANNEL_ACK",
    ackType: e,
    ackedId: t,
    local: false
  })
}