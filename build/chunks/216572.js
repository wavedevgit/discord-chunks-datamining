/** Chunk was on 98414 **/
/** chunk id: 216572, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Cv: () => p,
  HL: () => h,
  KK: () => j,
  Q_: () => f,
  nw: () => b
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk904245 = require("./904245.js"),
  Chunk232567 = require("./232567.js"),
  Chunk430824 = require("./430824.js"),
  Chunk375954 = require("./375954.js"),
  Chunk982168 = require("./982168.js"),
  Chunk893908 = require("./893908.js"),
  Chunk953252 = require("./953252.js");

function f(e) {
  return (0, i.e7)([a.Z], () => {
    if (null == e) returnfalse;
    let n = a.Z.getGuild(e);
    return null != n && (0, s.Z)(n) && null != (0, d.Z)(n)
  })
}

function h(e) {
  return (0, c.P0)(e)
}

function b(e) {
  return (0, c.gT)(e)
}

function p(e) {
  let {
    messageReference: n
  } = e, t = (0, i.e7)([u.Z], () => null != n ? u.Z.getMessage(n.channel_id, n.message_id) : null);
  (0, r.useEffect)(() => {
    null == t && null != n && l.Z.fetchMessages({
      channelId: n.channel_id,
      jump: {
        messageId: n.message_id
      },
      limit: 10
    })
  }, [t, n])
}

function j(e) {
  var n, t;
  let r = null == e || null == (t = e.messageSnapshots[0]) || null == (n = t.moderatorReport) ? true : n.reported_user_id;
  null != r && (0, o.PR)(r)
}