/** Chunk was on 85328 **/
/** chunk id: 216572, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Cv: () => g,
  HL: () => h,
  KK: () => O,
  Q_: () => f,
  nw: () => p
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
    let n = o.Z.getGuild(e);
    return null != n && (0, d.Z)(n) && null != (0, u.Z)(n)
  })
}

function h(e) {
  return (0, c.P0)(e)
}

function p(e) {
  return (0, c.gT)(e)
}

function g(e) {
  let {
    messageReference: n
  } = e, t = (0, r.e7)([s.Z], () => null != n ? s.Z.getMessage(n.channel_id, n.message_id) : null);
  (0, i.useEffect)(() => {
    null == t && null != n && l.Z.fetchMessages({
      channelId: n.channel_id,
      jump: {
        messageId: n.message_id
      },
      limit: 10
    })
  }, [t, n])
}

function O(e) {
  var n, t;
  let i = null == e || null == (t = e.messageSnapshots[0]) || null == (n = t.moderatorReport) ? true : n.reported_user_id;
  null != i && (0, a.PR)(i)
}