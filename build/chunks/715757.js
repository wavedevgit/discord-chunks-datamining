/** Chunk was on 78441 **/
/** chunk id: 715757, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Qo: () => A,
  V: () => f,
  W1: () => g,
  ml: () => h,
  vb: () => p
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

function A(t) {
  return (0, r.bG)([o.A], () => {
    if (null == t) returnfalse;
    let e = o.A.getGuild(t);
    return null != e && (0, c.A)(e) && null != (0, u.A)(e)
  })
}

function f(t) {
  return (0, d.uW)(t)
}

function g(t) {
  return (0, d.xJ)(t)
}

function h(t) {
  let {
    messageReference: e
  } = t, n = (0, r.bG)([s.A], () => null != e ? s.A.getMessage(e.channel_id, e.message_id) : null);
  (0, i.useEffect)(() => {
    null == n && null != e && l.A.fetchMessages({
      channelId: e.channel_id,
      jump: {
        messageId: e.message_id
      },
      limit: 10
    })
  }, [n, e])
}

function p(t) {
  var e, n;
  let i = null == t || null == (n = t.messageSnapshots[0]) || null == (e = n.moderatorReport) ? true : e.reported_user_id;
  null != i && (0, a.wz)(i)
}