/** Chunk was on 92869 **/
/** chunk id: 715757, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Qo: () => d,
  V: () => g,
  W1: () => f,
  ml: () => b,
  vb: () => h
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk843472 = require("./843472.js"),
  Chunk803306 = require("./803306.js"),
  Chunk71393 = require("./71393.js"),
  Chunk320501 = require("./320501.js"),
  Chunk376708 = require("./376708.js"),
  Chunk272720 = require("./272720.js"),
  Chunk56595 = require("./56595.js");

function d(e) {
  return (0, r.bG)([l.A], () => {
    if (null == e) returnfalse;
    let t = l.A.getGuild(e);
    return null != t && (0, p.A)(t) && null != (0, u.A)(t)
  })
}

function g(e) {
  return (0, o.uW)(e)
}

function f(e) {
  return (0, o.xJ)(e)
}

function b(e) {
  let {
    messageReference: t
  } = e, n = (0, r.bG)([c.A], () => null != t ? c.A.getMessage(t.channel_id, t.message_id) : null);
  (0, s.useEffect)(() => {
    null == n && null != t && a.A.fetchMessages({
      channelId: t.channel_id,
      jump: {
        messageId: t.message_id
      },
      limit: 10
    })
  }, [n, t])
}

function h(e) {
  var t, n;
  let s = null == e || null == (n = e.messageSnapshots[0]) || null == (t = n.moderatorReport) ? true : t.reported_user_id;
  null != s && (0, i.wz)(s)
}