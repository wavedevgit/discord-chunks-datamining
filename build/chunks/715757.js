/** Chunk was on 98865 **/
/** chunk id: 715757, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Qo: () => f,
  V: () => A,
  W1: () => b,
  ml: () => p,
  vb: () => v
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

function f(e) {
  return (0, i.bG)([o.A], () => {
    if (null == e) returnfalse;
    let t = o.A.getGuild(e);
    return null != t && (0, d.A)(t) && null != (0, u.A)(t)
  })
}

function A(e) {
  return (0, c.uW)(e)
}

function b(e) {
  return (0, c.xJ)(e)
}

function p(e) {
  let {
    messageReference: t
  } = e, n = (0, i.bG)([s.A], () => null != t ? s.A.getMessage(t.channel_id, t.message_id) : null);
  (0, r.useEffect)(() => {
    null == n && null != t && l.A.fetchMessages({
      channelId: t.channel_id,
      jump: {
        messageId: t.message_id
      },
      limit: 10
    })
  }, [n, t])
}

function v(e) {
  var t, n;
  let r = null == e || null == (n = e.messageSnapshots[0]) || null == (t = n.moderatorReport) ? true : t.reported_user_id;
  null != r && (0, a.wz)(r)
}