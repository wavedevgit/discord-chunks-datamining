/** Chunk was on 78650 **/
/** chunk id: 216572, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Cv: () => v,
  HL: () => h,
  KK: () => b,
  Q_: () => f,
  nw: () => g
});
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk904245 = require("./904245.js"),
  Chunk232567 = require("./232567.js"),
  Chunk430824 = require("./430824.js"),
  Chunk375954 = require("./375954.js"),
  Chunk982168 = require("./982168.js"),
  Chunk893908 = require("./893908.js"),
  Chunk953252 = require("./953252.js");

function f(e) {
  return (0, r.e7)([o.Z], () => {
    if (null == e) returnfalse;
    let t = o.Z.getGuild(e);
    return null != t && (0, c.Z)(t) && null != (0, u.Z)(t)
  })
}

function h(e) {
  return (0, d.P0)(e)
}

function g(e) {
  return (0, d.gT)(e)
}

function v(e) {
  let {
    messageReference: t
  } = e, n = (0, r.e7)([s.Z], () => null != t ? s.Z.getMessage(t.channel_id, t.message_id) : null);
  (0, i.useEffect)(() => {
    null == n && null != t && l.Z.fetchMessages({
      channelId: t.channel_id,
      jump: {
        messageId: t.message_id
      },
      limit: 10
    })
  }, [n, t])
}

function b(e) {
  var t, n;
  let i = null == e || null == (n = e.messageSnapshots[0]) || null == (t = n.moderatorReport) ? true : t.reported_user_id;
  null != i && (0, a.PR)(i)
}